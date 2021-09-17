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
    pocket: [
      [
        { pattern:{path: "M6 245l5 45h478l5-45zM0 120l3 80h494l3-80z"},color: {color: "transparent"}},
        { pattern:{path: "M6 245l5 45h478l5-45zM0 120l3 80h494l3-80z"},color: {color: "transparent"}},
        { pattern:{path: "M6 245l5 45h478l5-45zM0 120l3 80h494l3-80z"},color: {color: "transparent"}}
      ],
      [
        { pattern:{path: "M6 245l5 45h478l5-45zM0 120l3 80h494l3-80z"},color: {color: "transparent"}},
        { pattern:{path: "M6 245l5 45h478l5-45zM0 120l3 80h494l3-80z"},color: {color: "transparent"}},
        { pattern:{path: "M6 245l5 45h478l5-45zM0 120l3 80h494l3-80z"},color: {color: "transparent"}}
      ]
    ]
})

export const mutations = {
  SET_SHOP_SELECTION: (state, selection) => {
    state.selectedShop = selection
  },
  SET_JEANS_SELECTION: (state, selection) => {
    state.selectedJeans = selection
  },
  SET_PATTERN_SELECTION: (state, payload) => {
    state.pocket[payload.pocket][payload.layer].pattern = payload.pattern
  },
  SET_COLOR_SELECTION: (state, payload) => {
    state.pocket[payload.pocket][payload.layer].color = payload.color
  },
  LIMITED_COLOR_CHANGER: (state, payload) => {
    state.pocket[payload.pocket][payload.layer].color = payload.limitedcolor
  },
  PAINT_RESET: (state) => {
    state.pocket = [
      [
        { pattern:{path: "M6 245l5 45h478l5-45zM0 120l3 80h494l3-80z"},color: {color: "transparent"}},
        { pattern:{path: "M6 245l5 45h478l5-45zM0 120l3 80h494l3-80z"},color: {color: "transparent"}},
        { pattern:{path: "M6 245l5 45h478l5-45zM0 120l3 80h494l3-80z"},color: {color: "transparent"}}
      ],
      [
        { pattern:{path: "M6 245l5 45h478l5-45zM0 120l3 80h494l3-80z"},color: {color: "transparent"}},
        { pattern:{path: "M6 245l5 45h478l5-45zM0 120l3 80h494l3-80z"},color: {color: "transparent"}},
        { pattern:{path: "M6 245l5 45h478l5-45zM0 120l3 80h494l3-80z"},color: {color: "transparent"}}
      ]
    ]
  }
}