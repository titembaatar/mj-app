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
            :items="shops"
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
        <v-col class="flex justify-end">
          <v-btn
            :color="selectedShop.color"
            outlined
            height="40px"
            @click="reset()"
          >
            リセット
          </v-btn>
        </v-col>
        <v-col class="flex justify-end">
          <v-btn :color="selectedShop.color" outlined height="40px">印刷</v-btn>
        </v-col>
      </v-row>
      <v-row class="px-4">
        <v-col>
          <svg viewBox="0 0 500 500">
            <svg-pocket :jeans="selectedJeans" :stitch="false" :sp="false" />
            <svg-pattern
              v-for="(layer, index) in leftPocket"
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
              v-for="(layer, index) in rightPocket"
              :key="index"
              :color="layer.color.color"
              :path="layer.pattern.path"
              :icsp="layer.pattern.icsp"
            />
          </svg>
        </v-col>
      </v-row>
      <v-row>
        <v-col align="center" class="py-1">
          <v-tabs
            v-model="selectedPocket"
            :color="selectedShop.color"
            :slider-color="selectedShop.color"
            centered
            fixed-tabs
            height="2em"
          >
            <v-tab v-for="tab in tabs" :key="tab.key">{{ tab.display }}</v-tab>
          </v-tabs>

          <v-tabs-items v-model="selectedPocket">
            <v-tab-item v-for="tab in tabs" :key="tab.key">
              <v-stepper v-model="tab.selectedLayer" flat>
                <v-stepper-header class="!shadow-none max-w-lg">
                  <v-btn
                    :color="selectedShop.color"
                    dark
                    class="align-self-center"
                    outlined
                    :disabled="tab.selectedLayer < 2 ? true : false"
                    @click="tab.selectedLayer--"
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
                      :key="`${tab.index}${layer}`"
                      :complete="tab.selectedLayer > layer"
                      :step="layer"
                      :color="selectedShop.color"
                    />
                    <v-divider
                      v-if="layer !== 3"
                      :key="`divider-${tab.index}${layer}`"
                    />
                  </template>
                  <v-btn
                    :color="selectedShop.color"
                    dark
                    class="align-self-center"
                    outlined
                    :disabled="tab.selectedLayer > 2 ? true : false"
                    @click="tab.selectedLayer++"
                  >
                    追加
                  </v-btn>
                </v-stepper-header>

                <v-stepper-items class="px-4">
                  <v-stepper-content
                    v-for="layer in layersList"
                    :key="`${tab.index}${layer}`"
                    :step="layer"
                    class="pa-0"
                  >
                    <v-row
                      class="flex flex-col justify-center items-center ma-0"
                    >
                      <button-group
                        :ref="`pattern-${tab.index}${layer}`"
                        :array="patterns"
                        :selected-shop="selectedShop"
                        :color="selectedShop.color"
                        class="pb-2"
                        @change="changePattern"
                      />
                      <button-group
                        :ref="`color-${tab.index}${layer}`"
                        :array="filteredColors"
                        :selected-shop="selectedShop"
                        :color="selectedShop.color"
                        @change="changeColor"
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
      tabs: [
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
    shops() {
      return this.$store.state.shops
    },
    patterns() {
      return this.$store.state.patterns
    },
    colors() {
      return this.$store.state.colors
    },
    selectedShop() {
      return this.$store.state.selection.selectedShop
    },
    selectedJeans() {
      return this.$store.state.selection.selectedJeans
    },
    leftPocket() {
      return this.$store.state.selection.pocket[0]
    },
    rightPocket() {
      return this.$store.state.selection.pocket[1]
    },
    selectedLayer() {
      return [this.tabs[0].selectedLayer - 1, this.tabs[1].selectedLayer - 1]
    },
    filteredJeans() {
      return this.$store.getters.filteredJeans
    },
    filteredColors() {
      return this.$store.getters.filteredColors
    },
    isNextLayerExists() {
      return (
        this.$store.state.selection.pocket[this.selectedPocket].length ===
        this.tabs[this.selectedPocket].selectedLayer
      )
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
      if (!this.selectedJeans.exclusive.includes(this.selectedShop.id)) {
        this.changeJeans(this.$store.state.jeans[0])
      }
      // i is the index of pockets
      for (let i = 0; i < this.$store.state.selection.pocket.length; i++) {
        // j is index of layers
        for (let j = 0; j < this.$store.state.selection.pocket[i].length; j++) {
          if (
            'id' in this.$store.state.selection.pocket[i][j].color &&
            this.$store.state.selection.pocket[i][j].color.id.startsWith(
              'limitedcolor'
            )
          ) {
            this.$store.commit('selection/LIMITED_COLOR_CHANGER', {
              pocket: i,
              layer: j,
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
          continue
        }
      }
    },
    changeJeans(value) {
      this.$store.commit('selection/SET_JEANS_SELECTION', value)
    },
    changePattern(value) {
      if (typeof value !== 'undefined') {
        this.$store.commit('selection/SET_PATTERN_SELECTION', {
          pocket: this.selectedPocket,
          layer: this.selectedLayer[this.selectedPocket],
          pattern: this.$store.state.patterns[value],
        })
      }
    },
    changeColor(value) {
      if (typeof value !== 'undefined') {
        this.$store.commit('selection/SET_COLOR_SELECTION', {
          pocket: this.selectedPocket,
          layer: this.selectedLayer[this.selectedPocket],
          color: this.$store.getters.filteredColors[value],
        })
      }
    },
    deleteLayer() {
      this.$store.commit('selection/DELETE_LAYER', {
        pocket: this.selectedPocket,
      })
      this.$refs[
        `pattern-${this.selectedPocket}${
          this.tabs[this.selectedPocket].selectedLayer
        }`
      ][0].reset()
      this.$refs[
        `color-${this.selectedPocket}${
          this.tabs[this.selectedPocket].selectedLayer
        }`
      ][0].reset()
    },
    reset() {
      this.$store.commit('selection/PAINT_RESET')
      // i is the pocketIndex 0 for left, 1 for right
      for (let i = 1; i >= 0; i--) {
        this.selectedPocket = i
        // j is the selectedLayer, from 1 (bottom) to 3 (top)
        for (let j = 3; j >= 1; j--) {
          this.tabs[i].selectedLayer = j
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
