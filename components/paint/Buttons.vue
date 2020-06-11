<template>
  <v-container class="ma-0 pa-0">
    <v-row justify="space-around">
      <BtnGroup
        :objects="pockets"
        :value="false"
        @click="setPocketActive($event)"
      />

      <BtnGroup
        :objects="pockets[pocketActive].layers"
        :value="false"
        @click="setLayerActive($event)"
      />
    </v-row>

    <v-row justify="center">
      <BtnGroup
        :objects="displayPatterns"
        :value="true"
        @click="setPatternActive($event)"
      />
    </v-row>

    <v-row justify="center">
      <BtnGroup
        :objects="displayColors"
        :value="true"
        @click="setColorActive($event)"
      />
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
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
    ...mapGetters({ shopColor: 'active/shopColor' }),
    displayPatterns() {
      if (this.aJeans.kids === true) {
        return this.patterns.filter((object) => object.data.kids === true)
      }
      return this.patterns
    },
    displayColors() {
      if (this.patternActive === 'ic') {
        const iC = this.colors.filter((object) => object.data.ic === true)
        return iC.concat(this.shopColor)
      } else {
        const nIC = this.colors.filter((object) => object.data.ic === false)
        return nIC.concat(this.shopColor)
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
