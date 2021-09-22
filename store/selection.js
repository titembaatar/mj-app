export const state = () => ({
    selectedShop: {
      color: '#101010',
      display: '店舗',
      id: '000',
    },
    selectedJeans: {
      display: '出陣',
      exclusive: [],
      id: 'shutsujin',
      kids: false,
      pocketColor: '#01060C',
      stitch: false,
      stripeDwnFill: '#ffffff',
      stripeUpFill: '#ffffff',
      stripes: true,
    },
    pocket: [[],[]]
})

export const mutations = {
  SET_SHOP_SELECTION: (state, selection) => {
    state.selectedShop = selection
  },
  SET_JEANS_SELECTION: (state, selection) => {
    state.selectedJeans = selection
  },
  SET_PATTERN_SELECTION: (state, payload) => {
    if (state.pocket[payload.pocket][payload.layer]) {
      state.pocket[payload.pocket][payload.layer].pattern = payload.pattern
    } else {
      state.pocket[payload.pocket].push({pattern:payload.pattern,color:''})      
      state.pocket[payload.pocket][payload.layer].pattern = payload.pattern
    }
  },
  SET_COLOR_SELECTION: (state, payload) => {
    if (state.pocket[payload.pocket][payload.layer]) {
      state.pocket[payload.pocket][payload.layer].color = payload.color
    } else {
      state.pocket[payload.pocket].push({ pattern:'',color:payload.color})
    }
  },
  LIMITED_COLOR_CHANGER: (state, payload) => {
    state.pocket[payload.pocket][payload.layer].color = payload.limitedcolor
  },
  DELETE_LAYER: (state,payload) => {
    state.pocket[payload.pocket].pop()
  },
  PAINT_RESET: (state) => {
    state.pocket = [[],[]]
  }
}