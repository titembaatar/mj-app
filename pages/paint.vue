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
              v-for="(layer, index) in $store.state.selection.pocket[0]"
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
              v-for="(layer, index) in $store.state.selection.pocket[1]"
              :key="index"
              :color="layer.color.color"
              :path="layer.pattern.path"
              :icsp="layer.pattern.icsp"
            />
          </svg>
        </v-col>
      </v-row>
      <v-row v-if="selectedShop.id==='000'" class="justify-center">
          <v-alert type="info" outlined class="mt-8">
            店舗を選択してください。
          </v-alert>
      </v-row>
      <v-row v-if="selectedShop.id!='000'">
        <v-col align="center" class="py-1">
          <v-tabs
            v-model="selectedPocket"
            :color="selectedShop.color"
            :slider-color="selectedShop.color"
            centered
            fixed-tabs
            height="2em"
          >
            <v-tab v-for="pocket in pockets" :key="pocket.key">{{
              pocket.display
            }}</v-tab>
          </v-tabs>

          <v-tabs-items v-model="selectedPocket">
            <v-tab-item v-for="pocket in pockets" :key="pocket.key">
              <v-stepper v-model="pocket.selectedLayer" flat>
                <v-stepper-header class="!shadow-none max-w-lg">
                  <v-btn
                    :color="selectedShop.color"
                    dark
                    class="align-self-center"
                    outlined
                    :disabled="pocket.selectedLayer < 2 ? true : false"
                    @click="pocket.selectedLayer--"
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
                      :complete="pocket.selectedLayer > layer"
                      :step="layer"
                      :color="selectedShop.color"
                    />
                    <v-divider
                      v-if="layer !== 3"
                      :key="`divider-${pocket.index}${layer}`"
                    />
                  </template>
                  <v-btn
                  v-if="!selectedPattern.icsp"
                    :color="selectedShop.color"
                    dark
                    class="align-self-center"
                    outlined
                    :disabled="pocket.selectedLayer > 2 ? true : false"
                    @click="pocket.selectedLayer++"
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
                        :array="filteredPatterns"
                        :selected-shop="selectedShop"
                        :color="selectedShop.color"
                        class="pb-2"
                        @change="changePattern(pocket.index, layer)"
                      />
                      <button-group
                        :ref="`color-${pocket.index}${layer}`"
                        :array="filteredColors"
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
import svgPattern from '~/components/svgPattern.vue'
export default {
  components: { svgPattern },
  data() {
    return {
      selectedPattern: {},
      selectedColor: {},
      selectedPocket: 0,
      pockets: [
        {
          key: 'left',
          display: '左',
          index: 0,
          selectedLayer: 1,
        },
        {
          key: 'right',
          display: '右',
          index: 1,
          selectedLayer: 1,
        },
      ],
      layersList: [1, 2, 3],
    }
  },
  computed: {
    selectedShop() {
      return this.$store.state.selection.selectedShop
    },
    selectedJeans() {
      return this.$store.getters['selection/selectedJeans']
    },
    filteredJeans() {
      return this.$store.getters.filteredJeans
    },
    selectedLayers() {
      return [
        this.pockets[0].selectedLayer - 1,
        this.pockets[1].selectedLayer - 1,
      ]
    },
    isNextLayerExists() {
      return (
        this.$store.state.selection.pocket[this.selectedPocket].length ===
        this.pockets[this.selectedPocket].selectedLayer
      )
    },
    filteredPatterns() {
      return this.selectedJeans.kids ? this.kidsPatterns : this.checkerPatterns
    },
    checkerPatterns(){
      return this.pockets[this.selectedPocket].selectedLayer > 1
        ? this.$store.state.patterns.filter(pattern => pattern.icsp === false ? pattern : null)
        : this.$store.state.patterns
    },
    kidsPatterns(){
      const kidsP = this.$store.state.patterns.filter(pattern => pattern.kids ? pattern : null)
      return this.pockets[this.selectedPocket].selectedLayer > 1
        ? kidsP.filter(pattern => pattern.icsp === false ? pattern : null)
        : kidsP
    },
    filteredColors() {
      return this.selectedPattern.icsp ? this.icColors : this.noBlackColors
    },
    noBlackColors(){
      return this.$store.getters.filteredColors.filter(color => color.id !== 'black')
    },
    icColors(){
      return this.$store.getters.filteredColors.filter(color => color.ic ? color : null)
    },
  },
  async mounted() {
    try {
      await this.$store.dispatch('bindCollections')
    } catch (e) {
      console.error(e)
    }
  },
  methods: {
    changeShop(value) {
      this.$store.commit('selection/SET_SHOP_SELECTION', value)

      if (this.selectedJeans.exclusive.length > 0 && this.selectedJeans.exclusive.includes(value.id) === false) {
        this.changeJeans(this.$store.state.jeans[0])
      }

      this.$store.state.selection.pocket.forEach((pocket, pocketIndex) => {
        pocket.forEach((layer, layerIndex) => {
          if ('id' in layer.color && layer.color.id.startsWith('limited')) {
            this.$store.commit('selection/LIMITED_COLOR_CHANGER', {
              pocket: pocketIndex,
              layer: layerIndex,
              limitedcolor: {
                color: value.color,
                colorDisplay: value.colorDisplay,
                display: '限定',
                ic: true,
                id: `limitedcolor-${value.id}`,
                order: this.$store.state.colors.length + 1,
              },
            })
          }
        })
      })
    },
    changeJeans(value) {
      this.$store.commit('selection/SET_JEANS_SELECTION', value)
    },
    changePattern(pocketIndex, layer) {
      const value = this.$refs[`pattern-${pocketIndex}${layer}`][0].select;
      if (typeof value !== 'undefined') {
        this.selectedPattern = this.filteredPatterns[value];
        if (this.selectedPattern.icsp) {
          this.$refs[`color-${pocketIndex}${layer}`][0].select = 0;
          this.changeColor(pocketIndex, layer, false);
        }
        if (this.selectedColor.id === 'black' && this.selectedPattern.icsp === false) {
          this.$refs[`color-${pocketIndex}${layer}`][0].select = 0;
          this.changeColor(pocketIndex, layer, true);
        }
        this.$store.commit('selection/SET_PATTERN_SELECTION', {
          pocket: this.selectedPocket,
          layer: this.selectedLayers[this.selectedPocket],
          pattern: this.filteredPatterns[value],
        });
      }
    },
    changeColor(pocketIndex, layer, checker) {
      let value = 0;
      checker ? value = this.$refs[`color-${pocketIndex}${layer}`][0].select : value = 0;
      if (typeof value !== 'undefined') {
        this.selectedColor = this.filteredColors[value];
        this.$store.commit('selection/SET_COLOR_SELECTION', {
          pocket: this.selectedPocket,
          layer: this.selectedLayers[this.selectedPocket],
          color: this.filteredColors[value],
        });
      }
    },
    deleteLayer() {
      const pattern = this.$refs[
        `pattern-${this.selectedPocket}${
          this.pockets[this.selectedPocket].selectedLayer
        }`
      ][0];
      const color = this.$refs[
        `color-${this.selectedPocket}${
          this.pockets[this.selectedPocket].selectedLayer
        }`
      ][0];
      this.$store.commit('selection/DELETE_LAYER', {
        pocket: this.selectedPocket,
      });
      this.selectedPattern = {icsp: false};
      pattern.reset();
      color.reset();
      if (this.pockets[this.selectedPocket].selectedLayer > 1)
        this.pockets[this.selectedPocket].selectedLayer -= 1
    },
    paintReset() {
      this.$store.commit('selection/PAINT_RESET')
      // i is the pocketIndex 0 for left, 1 for right
      for (let i = 1; i >= 0; i--) {
        this.selectedPocket = i
        // j is the selectedLayer, from 1 (bottom) to 3 (top)
        for (let j = 3; j >= 1; j--) {
          this.pockets[i].selectedLayer = j
          if (
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