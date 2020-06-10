export const state = () => ({
  shop: {
    id: '',
    display: '店舗',
    colorDisplay: '',
    color: '#111111'
  },
  jeans: {
    id: 'shutsujin',
    display: '出陣',
    pocketColor: '#01060C',
    stripes: true,
    stripeUpFill: '#ffffff',
    stripeDwnFill: '#ffffff',
    stitch: false,
    kids: false
  },
  pockets: [
    {
      id: 'l',
      display: '左',
      layers: [
        {
          id: 'l1',
          display: '1',
          pattern: '',
          patternID: '',
          patternDisplay: '',
          limitedColor: false,
          icsp: false,
          color: 'none',
          colorID: '',
          isPrint: false
        },
        {
          id: 'l2',
          display: '2',
          pattern: '',
          patternID: '',
          patternDisplay: '',
          limitedColor: false,
          icsp: false,
          color: 'none',
          colorID: '',
          isPrint: false
        },
        {
          id: 'l3',
          display: '3',
          pattern: '',
          patternID: '',
          patternDisplay: '',
          limitedColor: false,
          icsp: false,
          color: 'none',
          colorID: '',
          isPrint: false
        }
      ]
    },
    {
      id: 'r',
      display: '右',
      layers: [
        {
          id: 'r1',
          display: '1',
          pattern: '',
          patternID: '',
          patternDisplay: '',
          limitedColor: false,
          icsp: false,
          color: 'none',
          colorID: '',
          isPrint: false
        },
        {
          id: 'r2',
          display: '2',
          pattern: '',
          patternID: '',
          patternDisplay: '',
          limitedColor: false,
          icsp: false,
          color: 'none',
          colorID: '',
          isPrint: false
        },
        {
          id: 'r3',
          display: '3',
          pattern: '',
          patternID: '',
          patternDisplay: '',
          limitedColor: false,
          icsp: false,
          color: 'none',
          colorID: '',
          isPrint: false
        }
      ]
    }
  ],
  onPrint: true
})

export const mutations = {
  SET_SHOP_ACTIVE(state, object) {
    state.shop = object
  },
  SET_JEAN_ACTIVE(state, object) {
    state.jeans = object
  },
  SET_PATTERN(state, [n, id, display, icsp, i, j]) {
    state.pockets[i].layers[j].pattern = n
    state.pockets[i].layers[j].patternID = id
    state.pockets[i].layers[j].patternDisplay = display
    state.pockets[i].layers[j].icsp = icsp
    state.pockets[i].layers[j].isPrint = state.onPrint
  },
  SET_COLOR(state, [bool, color, ID, i, j]) {
    state.pockets[i].layers[j].limitedColor = bool
    state.pockets[i].layers[j].color = color
    state.pockets[i].layers[j].colorID = ID
    state.pockets[i].layers[j].isPrint = state.onPrint
  },
  ON_PRINT(state, payload) {
    state.onPrint = payload
  },
  RESET(state) {
    for (let i = 0; i < state.pockets.length; i++) {
      const p = state.pockets[i]
      for (let j = 0; j < p.layers.length; j++) {
        const l = p.layers[j]
        l.pattern = ''
        l.patternID = ''
        l.patternDisplay = ''
        l.limitedColor = false
        l.icsp = false
        l.color = 'none'
        l.colorID = ''
        l.isPrint = false
      }
    }
  }
}

export const actions = {
  updateValue({ commit }, payload) {
    commit('updateValue', payload)
  }
}

export const getters = {
  shopColor: (state) => {
    return [
      {
        id: 'limitedColor',
        ic: true,
        display: '限定',
        colorDisplay: state.shop.colorDisplay,
        color: state.shop.color
      }
    ]
  },
  paintNumber: (state) => {
    let pN = 0
    for (let i = 0; i < state.pockets.length; i++) {
      const p = state.pockets[i]
      for (let j = 0; j < p.layers.length; j++) {
        const l = p.layers[j]
        if (l.isPrint === true) {
          pN++
        }
      }
    }
    return pN
  },
  printPockets: (state) => {
    const pP = [
      {
        id: 'l',
        display: '左',
        layers: []
      },
      {
        id: 'r',
        display: '右',
        layers: []
      }
    ]
    for (let i = 0; i < state.pockets.length; i++) {
      const p = state.pockets[i]
      for (let j = 0; j < p.layers.length; j++) {
        const l = p.layers[j]
        if (l.isPrint === true) {
          pP[i].layers.push(l)
        }
      }
    }
    return pP
  }
}
