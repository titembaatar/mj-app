<template>
  <v-app>
    <v-container grid-list-xs>
      <v-overlay :value="!$store.getters.loaded">
        <v-progress-circular
          color="white"
          indeterminate
          size="100"
          width="10"
        />
      </v-overlay>
      <v-row class="items-start pa-2">
        <v-col>
          <NuxtLink to="/">
            <icon-logo height="3em" :color="selectedShop.color"></icon-logo>
          </NuxtLink>
        </v-col>
        <v-col>
          <h1>ペイント</h1>
        </v-col>
        <v-col>
          <dropdown-menu
            :title="selectedShop.display"
            :items="$store.state.shops"
            :color="selectedShop.color"
            @input="changeShop"
          />
        </v-col>
        <v-col>
          <dropdown-menu
            :title="selectedJeans.display"
            :items="filteredJeans"
            :color="selectedShop.color"
            @input="changeJeans"
          />
        </v-col>
        <v-col class="justify-end">
          <v-btn
            :color="selectedShop.color"
            outlined
            height="40px"
            @click="paintReset()"
          >
            リセット
          </v-btn>
        </v-col>
        <v-col class="justify-end">
          <v-btn :color="selectedShop.color" outlined height="40px">印刷</v-btn>
        </v-col>
      </v-row>
      <v-row class="px-4">
        <v-col>
          <svg viewBox="0 0 500 500">
            <svg-pocket :jeans="selectedJeans" :stitch="false" :sp="false" />
            <svg-pattern
              v-for="(layer, index) in pocketsStore[0]"
              :key="index"
              :color="layer.color.color"
              :path="layer.pattern.path"
              :icsp="layer.pattern.icsp"
            />
          </svg>
        </v-col>
        <v-col>
          <svg viewBox="0 0 500 500">
            <svg-pocket
              :jeans="selectedJeans"
              :stitch="selectedJeans.stitch"
              :sp="selectedJeans.stripes"
            />
            <svg-pattern
              v-for="(layer, index) in pocketsStore[1]"
              :key="index"
              :color="layer.color.color"
              :path="layer.pattern.path"
              :icsp="layer.pattern.icsp"
            />
          </svg>
        </v-col>
      </v-row>
      <v-row v-if="selectedShop.id === '000'" class="justify-center">
          <v-alert type="info" outlined class="mt-8">
            店舗を選択してください。
          </v-alert>
      </v-row>
      <v-row v-if="selectedShop.id!='000'">
        <v-col align="center" class="py-1">
          <v-tabs
            v-model="pocketSelected"
            :color="selectedShop.color"
            :slider-color="selectedShop.color"
            centered
            fixed-tabs
            height="2em"
          >
            <v-tab v-for="pocket in pocketsBinder" :key="pocket.key">{{
              pocket.display
            }}</v-tab>
          </v-tabs>

          <v-tabs-items v-model="pocketSelected">
            <v-tab-item v-for="pocket in pocketsBinder" :key="pocket.key">
              <v-stepper v-model="pocket.layerSelected" flat>
                <v-stepper-header class="!shadow-none max-w-lg">
                  <v-btn
                    :color="selectedShop.color"
                    dark
                    class="align-self-center"
                    outlined
                    :disabled="pocket.layerSelected < 2 ? true : false"
                    @click="pocket.layerSelected--"
                  >
                    戻る
                  </v-btn>
                  <v-btn
                    :color="selectedShop.color"
                    dark
                    class="align-self-center"
                    outlined
                    :disabled="!isNextLayerExists"
                    @click="deleteLayer"
                  >
                    取消
                  </v-btn>
                  <template v-for="layer in layersList">
                    <v-stepper-step
                      :key="`${pocket.index}${layer}`"
                      :complete="pocket.layerSelected > layer"
                      :step="layer"
                      :color="selectedShop.color"
                    />
                    <v-divider
                      v-if="layer !== 3"
                      :key="`divider-${pocket.index}${layer}`"
                    />
                  </template>
                  <v-btn
                  v-if="!patternSelected.icsp"
                    :color="selectedShop.color"
                    dark
                    class="align-self-center"
                    outlined
                    :disabled="pocket.layerSelected > 2 ? true : false"
                    @click="pocket.layerSelected++"
                  >
                    追加
                  </v-btn>
                </v-stepper-header>

                <v-stepper-items class="px-4">
                  <v-stepper-content
                    v-for="layer in layersList"
                    :key="`${pocket.index}${layer}`"
                    :step="layer"
                    class="pa-0"
                  >
                    <v-row
                      class="flex flex-col justify-center items-center ma-0"
                    >
                      <button-group
                        :ref="`pattern-${pocket.index}${layer}`"
                        :array="patternsFiltered"
                        :selected-shop="selectedShop"
                        :color="selectedShop.color"
                        class="pb-2"
                        @change="changePattern(pocket.index, layer)"
                      />
                      <button-group
                        :ref="`color-${pocket.index}${layer}`"
                        :array="colorsFiltered"
                        :selected-shop="selectedShop"
                        :color="selectedShop.color"
                        @change="changeColor(pocket.index, layer, true)"
                      />
                    </v-row>
                  </v-stepper-content>
                </v-stepper-items>
              </v-stepper>
            </v-tab-item>
          </v-tabs-items>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import svgPattern from '~/components/svgPattern.vue';

export default {
  components: { svgPattern },
  data() {
    return {
      patternSelected: {},
      colorSelected: {},
      pocketSelected: 0,
      pocketsBinder: [
        {
          key: 'left',
          display: '左',
          index: 0,
          layerSelected: 1,
        },
        {
          key: 'right',
          display: '右',
          index: 1,
          layerSelected: 1,
        },
      ],
      layersList: [1, 2, 3],
    }
  },
  computed: {
    ...mapState(['patterns', 'jeans', 'color']),
    ...mapState('selection', ['selectedShop', 'pocketsStore']),
    ...mapGetters(['colorsWithShopColor', 'filteredJeans']),
    ...mapGetters('selection', ['selectedJeans']),
    layerSelected() {
      return this.pocketsBinder[this.pocketSelected].layerSelected;
    },
    isNextLayerExists() {
      return this.pocketsStore[this.pocketSelected].length === this.layerSelected;
    },
    patternsFiltered() {
      return this.selectedJeans.kids ? this.patternsKid : this.patternsChecker;
    },
    patternsChecker(){
      const notFirstLayer = this.layerSelected > 1; 
      return notFirstLayer ? this.patterns.filter(pattern => !pattern.icsp) : this.patterns;
    },
    patternsKid(){
      const patternsKid = this.patterns.filter(pattern => pattern.kids);
      const notFirstLayer = this.layerSelected > 1; 
      return notFirstLayer ? patternsKid.filter(pattern => !pattern.icsp) : patternsKid;
    },
    idIcPattern(){
      return this.patternSelected.icsp;
    },
    colorsWithoutBlack(){
      return this.colorsWithShopColor.filter(color => color.id !== 'black');
    },
    colorsForIC(){
      return this.colorsWithShopColor.filter(color => color.ic);
    },
    colorsFiltered() {
      return this.idIcPattern ? this.colorsForIC : this.colorsWithoutBlack;
    },
  },
  async mounted() {
    try {
      await this.$store.dispatch('bindCollections');
    } catch (e) {
      alert(e);
    }
  },
  methods: {
    changeShop(value) {
      this.$store.commit('selection/SET_SHOP_SELECTION', value);


      this.pocketsStore.forEach((pocket, pocketIndex) => {
        pocket.forEach((layer, layerIndex) => {
          if('id' in layer.color && layer.color.id.startsWith('limited')) {
            this.$store.commit('selection/LIMITED_COLOR_CHANGER', {
              pocket: pocketIndex,
              layer: layerIndex,
              limitedcolor: {
                color: value.color,
                colorDisplay: value.colorDisplay,
                display: '限定',
                ic: true,
                id: `limitedcolor-${value.id}`,
                order: this.colors.length + 1,
              },
            });
          };
        });
      });

      if(this.selectedJeans.exclusive.length > 0 && !this.selectedJeans.exclusive.includes(value.id)) {
        this.changeJeans(this.jeans[0]);
      };
    },
    changeJeans(value) {
      this.$store.commit('selection/SET_JEANS_SELECTION', value);
    },
    changePattern(pocketIndex, layer) {
      const value = this.$refs[`pattern-${pocketIndex}${layer}`][0].select;
      if(typeof value !== 'undefined') {
        this.patternSelected = this.patternsFiltered[value];
        switch (this.idIcPattern) {
          case true:
            this.$refs[`color-${pocketIndex}${layer}`][0].select = 0;
            this.changeColor(pocketIndex, layer, false);
            break;
          case false:
          case this.colorSelected.id === 'black':
            this.$refs[`color-${pocketIndex}${layer}`][0].select = 0;
            this.changeColor(pocketIndex, layer, true);
            break;
          default:
            break;
        };
        this.$store.commit('selection/SET_PATTERN_SELECTION', {
          pocket: this.pocketSelected,
          // this.layerSelected - 1 because vuetify starts the count at 1 and not 0. We need an index
          layer: this.layerSelected - 1,
          pattern: this.patternsFiltered[value],
        });
      }
    },
    changeColor(pocketIndex, layer, checker) {
      let value;
      checker ? value = this.$refs[`color-${pocketIndex}${layer}`][0].select : value = 0;
      if(typeof value !== 'undefined') {
        this.colorSelected = this.colorsFiltered[value];
        this.$store.commit('selection/SET_COLOR_SELECTION', {
          pocket: this.pocketSelected,
          // this.layerSelected - 1 because vuetify starts the count at 1 and not 0. We need an index
          layer: this.layerSelected - 1,
          color: this.colorsFiltered[value],
        });
      }
    },
    deleteLayer() {
      const pattern = this.$refs[`pattern-${this.pocketSelected}${this.layerSelected}`][0];
      const color = this.$refs[`color-${this.pocketSelected}${this.layerSelected}`][0];

      this.$store.commit('selection/DELETE_LAYER', {
        pocket: this.pocketSelected,
      });
      this.patternSelected = { };
      pattern.reset();
      color.reset();
      if(this.layerSelected > 1) {
        this.pocketsBinder[this.pocketSelected].layerSelected -= 1;
      };
    },
    paintReset() {
      this.$store.commit('selection/PAINT_RESET')
      // i is the pocketIndex 0 for left, 1 for right
      for(let i = 1; i >= 0; i--) {
        this.pocketSelected = i
        // j is the layerSelected, from 1 (bottom) to 3 (top)
        for(let j = 3; j >= 1; j--) {
          this.pocketsBinder[i].layerSelected = j;
          if(
            typeof this.$refs[`pattern-${i}${j}`] !== 'undefined' &&
            typeof this.$refs[`color-${i}${j}`] !== 'undefined'
          ) {
            this.$refs[`pattern-${i}${j}`][0].reset()
            this.$refs[`color-${i}${j}`][0].reset()
          }
        }
      }
    },
  },
}
</script>

<style scoped>
svg {
  max-height:60vh;
  margin: auto;
}
</style>