import { vuexfireMutations, firestoreAction } from 'vuexfire'

export const state = () => ({
  shops: [],
  jeans: [],
  patterns: [],
  colors: [],
  shopsLoaded: false,
  jeansLoaded: false,
  patternsLoaded: false,
  colorsLoaded: false
})
export const mutations = {
  ...vuexfireMutations,
  SET_SHOPS_COLLECTION: (state, shops) => {
    state.shops = shops
  },
  SET_JEANS_COLLECTION: (state, jeans) => {
    state.jeans = jeans
  },
  SET_PATTERNS_COLLECTION: (state, patterns) => {
    state.patterns = patterns
  },
  SET_COLORS_COLLECTION: (state, colors) => {
    state.colors = colors
  },
  DB_LOADED(state) {
    state.shopsLoaded = true
    state.jeansLoaded = true
    state.patternsLoaded = true
    state.colorsLoaded = true
},
}

export const actions = {
  bindCollections: firestoreAction(async function({ bindFirestoreRef, commit }) {
    const shops = this.$fire.firestore.collection('shops').orderBy('id')
    const jeans = this.$fire.firestore.collection('jeans').orderBy('order')
    const patterns = this.$fire.firestore.collection('patterns').orderBy('order')
    const colors = this.$fire.firestore.collection('colors').orderBy('order')
    await new Promise((resolve) => {
      bindFirestoreRef('shops', shops)
      bindFirestoreRef('jeans', jeans)
      bindFirestoreRef('patterns', patterns)
      bindFirestoreRef('colors', colors).then(res => {
        commit('DB_LOADED')
        resolve(res)
    })
    })
  }),

  unbindCollections: firestoreAction(function ({ unbindFirestoreRef }) {
    unbindFirestoreRef('shops', false)
    unbindFirestoreRef('jeans', false)
    unbindFirestoreRef('patterns', false)
    unbindFirestoreRef('colors', false)
  }),
}
export const getters = {
  shops(state) {
    return state.shops
  },
  filteredJeans(state, getters) {
    if (getters.loaded === true) {
      const genericJeans = state.jeans.filter(
        (object) => !(object.exclusive.length > 0)
      )
      const exclusiveJeans = state.jeans.filter(
        (object) =>
          object.exclusive.length > 0 &&
          object.exclusive.includes(state.selection.selectedShop.id)
        // is the selected shop id inside the exlusive array of the filtered objects ?
      )
      return genericJeans.concat(exclusiveJeans)
    } else {
      return state.jeans
    }
  },
  patterns(state) {
    return state.patterns
  },
  loaded(state) {
    return (
      state.shopsLoaded &&
      state.jeansLoaded &&
      state.patternsLoaded &&
      state.colorsLoaded
    )
  },
  filteredColors(state, getters) {
    if (getters.loaded === true) {return [{
        color: state.selection.selectedShop.color,
        colorDisplay: state.selection.selectedShop.colorDisplay,
        display: '限定',
        ic: true,
        id: `limitedcolor-${state.selection.selectedShop.id}`,
        order: state.colors.length + 1,
    }].concat(state.colors)
    } else {
    return state.colors
    }
  }

}