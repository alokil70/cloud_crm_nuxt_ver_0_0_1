export const state = () => ({
    users: [],
})

export const mutations = {
    SET_USERS_TO_STATE(state, payload) {
        state.users = payload
    },
}
export const actions = {
    GET_USERS_FROM_API({ commit }) {
        const token = this.$auth.getToken('local')
        if (token) {
            this.$axios({
                method: 'get',
                url: '/users',
                headers: {
                    Authorization: 'Bearer ' + token.split(' ')[2],
                },
            }).then((response) => {
                commit('SET_USERS_TO_STATE', response.data)
            })
        }
    },
    async GET_USER_BY_ID({ state }, id) {
        const asa = await state.users.find((u) => u.id === id)
        console.log(asa)
        return asa
    },
}

export const getters = {
    USERS: (s) => s.users,
    get: (s) => (id) => {
        return s.users.find((u) => u.id === id) || {}
    },
}
