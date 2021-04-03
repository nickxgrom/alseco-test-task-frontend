const module = {
    state: {
        data: [],
        currentEmployeeMV: []
    },
    mutations: {
        getData(state, data) {
            state.data = data
        },
        addEmployee(state, newEmployee) {
            let obj = {
                fullName: `${newEmployee.secondName} ${newEmployee.firstName[0]}. ${newEmployee.patronymic[0]}.`,
                materialValueCount: 0,
                materialValuesPrice: 0,
                id: newEmployee.id
            }
            state.data.push(obj)
        },
        removeEmployee(state, id) {
            state.data.splice(state.data.findIndex(item => item.id === id), 1)
        },
        removeEmployeeMV(state, id) {
            state.currentEmployeeMV.splice(state.currentEmployeeMV.findIndex(item => item.id === id), 1)
        },
        setCurrentEmployeeMV(state, mvArr) {
            state.currentEmployeeMV = mvArr
        },
        addEmployeeMV(state, newMV) {
            console.log(newMV.id)
            state.data[state.data.findIndex( item => item.id === newMV.id)].materialValuesPrice += +newMV.materialValuePrice
            state.data[state.data.findIndex( item => item.id === newMV.id)].materialValueCount++
            state.currentEmployeeMV.push(newMV)
        },
    },
    getters: {
        MVTotalPrice(state) {
            return state.currentEmployeeMV.reduce((sum, current) => {
                return sum + +(current.price || current.materialValuePrice)
            }, 0)
        }

    }
}

export default module