// import axios from 'axios'

const state = {
    todos: [
        {
            id: 1,
            title: 'todo one'
        },
        {
            id: 2,
            title: 'todo two'
        }
    ]
}

const getters = {
    allTodos: (state) => {
        return state.todos
    }
}

const actions = {

}

const mutations = {

}

export default {
    state,
    getters,
    actions,
    mutations
}