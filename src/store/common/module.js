const module = {
    state: {
        data: [],
    },
    mutations: {
        getData(state, data) {
            state.data = data
        },
        removeEmployee(state, id) {
            state.data.splice(state.data.findIndex(item => item.id === id), 1)
        }
    }
}

export default module