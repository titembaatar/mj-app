export const state = () => ({
    pocket: [
        [
            [{ pattern:1}, {color:1}],
            [{ pattern:2}, {color:2}],
            [{ pattern:3}, {color:3}]
        ],
        [
            [{ pattern:1}, {color:1}],
            [{ pattern:2}, {color:2}],
            [{ pattern:3}, {color:3}]
        ]
    ]
})

export const mutations = {
    SET_PATTERN_SELECTION: (state, payload) => {
    state.pocket[payload.pocket][payload.layer][0] = payload.pattern
    },
    SET_COLOR_SELECTION: (state, payload) => {
    state.pocket[payload.pocket][payload.layer][1] = payload.color
    },
    DISPLAY_RESET: (state) => {
        state.pocket = [
        [
            [{ pattern:1}, {color:1}],
            [{ pattern:2}, {color:2}],
            [{ pattern:3}, {color:3}]
        ],
        [
            [{ pattern:1}, {color:1}],
            [{ pattern:2}, {color:2}],
            [{ pattern:3}, {color:3}]
        ]
    ]
    }
}