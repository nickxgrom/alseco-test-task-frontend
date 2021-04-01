const module = {
    state: {
        data: [],
        currentEmployeeMV: []
    },
    mutations: {
        getData(state, data) {
            state.data = data
        },
        removeEmployee(state, id) {
            state.data.splice(state.data.findIndex(item => item.id === id), 1)
        },
        removeEmployeeMV(state, id) {
            state.currentEmployeeMV.splice(state.currentEmployeeMV.findIndex(item => item.id === id), 1)
        },
        setCurrentEmployeeMV(state, mvArr) {
            state.currentEmployeeMV = mvArr
        }
    }
}

export default module