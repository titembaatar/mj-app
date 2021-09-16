import { vuexfireMutations, firestoreAction } from 'vuexfire'

export const state = () => ({
  shops: null,
  jeans: null,
  patterns: null,
  colors: null,
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
}

export const actions = {
  bindShopsCollection: firestoreAction(async function ({ bindFirestoreRef }) {
    const ref = this.$fire.firestore
      .collection('shops').orderBy('id')
    await bindFirestoreRef('shops', ref, { wait: true })
  }),
  unbindShopsCollection: firestoreAction(function ({ unbindFirestoreRef }) {
    unbindFirestoreRef('shops', false)
  }),
  bindJeansCollection: firestoreAction(async function ({ bindFirestoreRef }) {
    const ref = this.$fire.firestore
      .collection('jeans').orderBy('order')
    await bindFirestoreRef('jeans', ref, { wait: true })
  }),
  unbindJeansCollection: firestoreAction(function ({ unbindFirestoreRef }) {
    unbindFirestoreRef('jeans', false)
  }),
  bindPatternsCollection: firestoreAction(async function ({ bindFirestoreRef }) {
    const ref = this.$fire.firestore
      .collection('patterns').orderBy('order')
    await bindFirestoreRef('patterns', ref, { wait: true })
  }),
  unbindPatternsCollection: firestoreAction(function ({ unbindFirestoreRef }) {
    unbindFirestoreRef('patterns', false)
  }),
  bindColorsCollection: firestoreAction(async function ({ bindFirestoreRef }) {
    const ref = this.$fire.firestore
      .collection('colors').orderBy('order')
    await bindFirestoreRef('colors', ref, { wait: true })
  }),
  unbindColorsCollection: firestoreAction(function ({ unbindFirestoreRef }) {
    unbindFirestoreRef('colors', false)
  }),
}
export const getters = {
  shops(state) {
    return state.shops
  },
  jeans(state) {
    return state.jeans
  },
  patterns(state) {
    return state.patterns
  },
  colors(state) {
    return state.colors
  },
}