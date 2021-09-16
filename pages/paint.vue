<template>
  <v-app>
    <v-container grid-list-xs>
      <v-row class="pa-2">
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
            :items="jeans"
            :color="selectedShop.color"
            @input="changeJeans"
          />
        </v-col>
        <v-col>
          <v-btn :color="selectedShop.color" outlined @click="reset()">
            リセット
          </v-btn>
        </v-col>
        <v-col>
          <v-btn :color="selectedShop.color" outlined>印刷</v-btn>
        </v-col>
      </v-row>
      <v-row class="px-4">
        <v-col>
          <base-pocket :jeans="selectedJeans" :stitch="false" :sp="false" />
        </v-col>
        <v-col>
          <base-pocket
            :jeans="selectedJeans"
            :stitch="selectedJeans.stitch"
            :sp="selectedJeans.stripes"
          />
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
            <v-tab key="left"> 左 </v-tab>
            <v-tab key="right"> 右 </v-tab>
          </v-tabs>
          <v-tabs-items v-model="selectedPocket">
            <v-tab-item key="left">
              <v-stepper v-model="selectedLeftLayer" flat>
                <v-stepper-header class="!shadow-none max-w-lg">
                  <v-btn
                    :color="selectedShop.color"
                    dark
                    class="align-self-center"
                    outlined
                    :disabled="selectedLeftLayer <= 1 ? true : false"
                    @click="selectedLeftLayer--"
                  >
                    戻る
                  </v-btn>
                  <v-stepper-step
                    :complete="selectedLeftLayer > 1"
                    step="1"
                    :color="selectedShop.color"
                  >
                  </v-stepper-step>
                  <v-divider></v-divider>
                  <v-stepper-step
                    :complete="selectedLeftLayer > 2"
                    step="2"
                    :color="selectedShop.color"
                  >
                  </v-stepper-step>
                  <v-divider></v-divider>
                  <v-stepper-step
                    :complete="selectedLeftLayer > 3"
                    step="3"
                    :color="selectedShop.color"
                  >
                  </v-stepper-step>
                  <v-btn
                    :color="selectedShop.color"
                    dark
                    class="align-self-center"
                    outlined
                    :disabled="selectedLeftLayer >= 3 ? true : false"
                    @click="selectedLeftLayer++"
                  >
                    追加
                  </v-btn>
                </v-stepper-header>

                <v-stepper-items class="px-4">
                  <v-stepper-content step="1" class="pa-0">
                    <button-group
                      ref="pattern-01"
                      :array="patterns"
                      :selected-shop="selectedShop"
                      :color="selectedShop.color"
                      class="pb-2"
                      @change="changePatterns"
                    />
                    <button-group
                      ref="color-01"
                      :array="colors"
                      :selected-shop="selectedShop"
                      :color="selectedShop.color"
                      @change="changeColors"
                    />
                  </v-stepper-content>
                  <v-stepper-content step="2" class="pa-0">
                    <button-group
                      ref="pattern-02"
                      :array="patterns"
                      :selected-shop="selectedShop"
                      :color="selectedShop.color"
                      class="pb-2"
                      @change="changePatterns"
                    />
                    <button-group
                      ref="color-02"
                      :array="colors"
                      :selected-shop="selectedShop"
                      :color="selectedShop.color"
                      @change="changeColors"
                    />
                  </v-stepper-content>
                  <v-stepper-content step="3" class="pa-0">
                    <button-group
                      ref="pattern-03"
                      :array="patterns"
                      :selected-shop="selectedShop"
                      :color="selectedShop.color"
                      class="pb-2"
                      @change="changePatterns"
                    />
                    <button-group
                      ref="color-03"
                      :array="colors"
                      :selected-shop="selectedShop"
                      :color="selectedShop.color"
                      @change="changeColors"
                    />
                  </v-stepper-content>
                </v-stepper-items>
              </v-stepper>
            </v-tab-item>
            <v-tab-item key="right">
              <v-stepper v-model="selectedRightLayer" flat>
                <v-stepper-header class="!shadow-none max-w-lg">
                  <v-btn
                    :color="selectedShop.color"
                    dark
                    class="align-self-center"
                    outlined
                    :disabled="selectedRightLayer <= 1 ? true : false"
                    @click="selectedRightLayer--"
                  >
                    戻る
                  </v-btn>
                  <v-stepper-step
                    :complete="selectedRightLayer > 1"
                    step="1"
                    :color="selectedShop.color"
                  >
                  </v-stepper-step>
                  <v-divider></v-divider>
                  <v-stepper-step
                    :complete="selectedRightLayer > 2"
                    step="2"
                    :color="selectedShop.color"
                  >
                  </v-stepper-step>
                  <v-divider></v-divider>
                  <v-stepper-step
                    :complete="selectedRightLayer > 3"
                    step="3"
                    :color="selectedShop.color"
                  >
                  </v-stepper-step>
                  <v-btn
                    :color="selectedShop.color"
                    dark
                    class="align-self-center"
                    outlined
                    :disabled="selectedRightLayer >= 3 ? true : false"
                    @click="selectedRightLayer++"
                  >
                    追加
                  </v-btn>
                </v-stepper-header>

                <v-stepper-items class="px-4">
                  <v-stepper-content step="1" class="pa-0">
                    <button-group
                      ref="pattern-11"
                      :array="patterns"
                      :selected-shop="selectedShop"
                      :color="selectedShop.color"
                      class="pb-2"
                      @change="changePatterns"
                    />
                    <button-group
                      ref="color-11"
                      :array="colors"
                      :selected-shop="selectedShop"
                      :color="selectedShop.color"
                      @change="changeColors"
                    />
                  </v-stepper-content>
                  <v-stepper-content step="2" class="pa-0">
                    <button-group
                      ref="pattern-12"
                      :array="patterns"
                      :selected-shop="selectedShop"
                      :color="selectedShop.color"
                      class="pb-2"
                      @change="changePatterns"
                    />
                    <button-group
                      ref="color-12"
                      :array="colors"
                      :selected-shop="selectedShop"
                      :color="selectedShop.color"
                      @change="changeColors"
                    />
                  </v-stepper-content>
                  <v-stepper-content step="3" class="pa-0">
                    <button-group
                      ref="pattern-13"
                      :array="patterns"
                      :selected-shop="selectedShop"
                      :color="selectedShop.color"
                      class="pb-2"
                      @change="changePatterns"
                    />
                    <button-group
                      ref="color-13"
                      :array="colors"
                      :selected-shop="selectedShop"
                      :color="selectedShop.color"
                      @change="changeColors"
                    />
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
export default {
  data() {
    return {
      selectedPattern: {},
      selectedColor: {},
      selectedPocket: 0,
      selectedLeftLayer: 1,
      selectedRightLayer: 1,
    }
  },
  computed: {
    shops() {
      return this.$store.state.shops
    },
    jeans() {
      return this.$store.state.jeans
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
    selectedLayer() {
      return [this.selectedLeftLayer - 1, this.selectedRightLayer - 1]
    },
  },
  methods: {
    changeShop(value) {
      this.$store.commit('selection/SET_SHOP_SELECTION', value)
    },
    changeJeans(value) {
      this.$store.commit('selection/SET_JEANS_SELECTION', value)
    },
    changePatterns(value) {
      this.$store.commit('pocketdisplay/SET_PATTERN_SELECTION', {
        pocket: this.selectedPocket,
        layer: this.selectedLayer[this.selectedPocket],
        pattern: this.$store.state.patterns[value],
      })
    },
    changeColors(value) {
      this.$store.commit('pocketdisplay/SET_COLOR_SELECTION', {
        pocket: this.selectedPocket,
        layer: this.selectedLayer[this.selectedPocket],
        color: this.$store.state.colors[value],
      })
    },
    reset() {
      this.$store.commit('pocketdisplay/DISPLAY_RESET')
      // i is the pocketIndex 0 for left, 1 for right
      for (let i = 1; i >= 0; i--) {
        this.selectedPocket = i
        // j is the selectedLayer, from 1 (bottom) to 3 (top)
        for (let j = 3; j >= 1; j--) {
          i > 0 ? (this.selectedRightLayer = j) : (this.selectedLeftLayer = j)
          if (
            typeof this.$refs['pattern-' + i + j] !== 'undefined' &&
            typeof this.$refs['color-' + i + j] !== 'undefined'
          ) {
            this.$refs['pattern-' + i + j].reset()
            this.$refs['color-' + i + j].reset()
          }
        }
      }
    },
  },
}
</script>
