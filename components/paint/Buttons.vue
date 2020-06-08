<template>
  <v-container>
    <v-row>
      <v-col>
        <BtnGroup :objects="pockets" :value="false" />
      </v-col>
      <v-col>
        <BtnGroup :objects="pockets[pocketActive].layers" :value="false" />
      </v-col>
    </v-row>
    <v-row>
      <BtnGroup
        :objects="displayPatterns"
        :value="true"
        @click="setPatternActive($event)"
      />
    </v-row>
    <v-row>
      <BtnGroup
        :objects="displayColors"
        :value="true"
        @click="setColorActive($event)"
      />
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    tabPocket: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      pocketActive: 0,
      layerActive: null,
      patternActive: null
    }
  },

  computed: {
    ...mapState({
      aShops: (state) => state.active.shop,
      aJeans: (state) => state.active.jeans,
      pockets: (state) => state.active.pockets,
      patterns: (state) => state.firestore.data.patterns,
      colors: (state) => state.firestore.data.colors
    }),
    kidsPatterns() {
      const kJ = this.patterns.filter((object) => object.kids === true)
      return kJ
    },
    displayPatterns() {
      if (this.aJeans.kids === true) {
        return this.kidsPatterns
      }
      return this.patterns
    },
    noIcColors() {
      const nIC = this.colors.filter((object) => object.ic === false)
      return nIC.concat(this.$store.getters.shopColor)
    },
    icColors() {
      const iC = this.colors.filter((object) => object.ic === true)
      return iC.concat(this.$store.getters.shopColor)
    },
    displayColors() {
      if (this.patternActive === 'ic') {
        return this.icColors
      } else {
        return this.noIcColors
      }
    }
  },
  methods: {
    setPocketActive(n) {
      this.pocketActive = n[0]
    },
    setLayerActive(n) {
      this.layerActive = n[0]
    },
    setPatternActive(n) {
      const i = this.tabpocket === null ? this.pocketactive : this.tabpocket
      const j = this.layerActive
      const index = n[0]
      const id = n[1]
      this.patternActive = id
      this.$store.commit('SET_PATTERN', [
        this.displayPatterns[index].path,
        this.displayPatterns[index].id,
        this.displayPatterns[index].print,
        this.displayPatterns[index].icsp,
        i,
        j
      ])
    },
    setColorActive(n) {
      const i = this.tabPocket === null ? this.pocketActive : this.tabPocket
      const j = this.layerActive
      const index = n[0]
      const id = n[1]
      if (id === 'limitedColor') {
        this.$store.commit('SET_COLOR', [
          true,
          this.displayColors[index].color,
          this.displayColors[index].colorDisplay,
          i,
          j
        ])
      } else {
        this.$store.commit('SET_COLOR', [
          false,
          this.displayColors[index].color,
          this.displayColors[index].colorDisplay,
          i,
          j
        ])
      }
    }
  }
}
</script>

<style lang="sass" scoped></style>
