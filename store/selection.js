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
    pocketsStore: [[], []],
})

export const getters = {
  selectedJeans(state) {
    return state.selectedJeans;
  }
}

export const mutations = {
  SET_SHOP_SELECTION: (state, selection) => {
    state.selectedShop = selection;
  },
  SET_JEANS_SELECTION: (state, selection) => {
    state.selectedJeans = selection;
  },
  SET_PATTERN_SELECTION: (state, {pocket, layer, pattern}) => {
    if (state.pocketsStore[pocket][layer]) {
      state.pocketsStore[pocket][layer].pattern = pattern;
    } else {
      state.pocketsStore[pocket].push({ pattern, color: '' });
      state.pocketsStore[pocket][layer].pattern = pattern;
    }
  },
  SET_COLOR_SELECTION: (state, {pocket, layer, color}) => {
    if (state.pocketsStore[pocket][layer]) {
      state.pocketsStore[pocket][layer].color = color;
    } else {
      state.pocketsStore[pocket].push({ color, pattern: '' });
    }
  },
  LIMITED_COLOR_CHANGER: (state, {pocket, layer, limitedcolor}) => {
    state.pocketsStore[pocket][layer].color = limitedcolor;
  },
  DELETE_LAYER: (state, {pocket}) => {
    state.pocketsStore[pocket].pop();
  },
  PAINT_RESET: (state) => {
    state.pocketsStore = [[], []];
  }
}