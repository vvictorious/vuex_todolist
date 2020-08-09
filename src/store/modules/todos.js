// import axios from 'axios'

import axios from "axios"

const state = {
    todos: []
}

const getters = {
    allTodos: (state) => {
        return state.todos
    }
}
//action is going to make a request, get a response and call a mutation because mutation is what actually mutates the state
const actions = {
    async fetchTodos ({ commit }) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        commit('setTodos', response.data)
    }
}

const mutations = {
    setTodos: (state, todos) => (state.todos = todos)
}

export default {
    state,
    getters,
    actions,
    mutations
}