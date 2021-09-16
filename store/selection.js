export const state = () => ({
      selectedShop: {
        color: '#101010',
        display: '店舗',
        id: '000',
    },
    selectedJeans: {
        display: '出陣',
        id: 'shutsujin',
        kids: false,
        pocketColor: '#01060C',
        stitch: false,
        stripeDwnFill: '#ffffff',
        stripeUpFill: '#ffffff',
        stripes: true,
    },
    selectedPattern: null,
    selectedColor: null,
})

export const mutations = {
  SET_SHOP_SELECTION: (state, selection) => {
    state.selectedShop = selection
  },
  SET_JEANS_SELECTION: (state, selection) => {
    state.selectedJeans = selection
  },
}