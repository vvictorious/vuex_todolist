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
//from what I've gathered acctions declare functions and mutations are what call the actions even though they are called within the action
//action is going to make a request, get a response and call a mutation because mutation is what actually mutates the state
const actions = {
    async fetchTodos ({ commit }) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        //commit is actually calling the setTodos mutation with the response as the second parameter and then changing the state
        commit('setTodos', response.data)
    },
    async addTodo ({ commit }, title) {
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {title, completed: false});
        commit('newTodo', response.data);
    }
}

const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    newTodo: (state, todo) => state.todos.unshift(todo)
}

export default {
    state,
    getters,
    actions,
    mutations
}