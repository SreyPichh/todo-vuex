import Vue from 'vue'
import Vuex from 'vuex'
import { stat } from 'fs';
// import { stat } from 'fs';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
    newTodo: ''
  },
  mutations: {
    GET_TODO (state, todo) {
      state.newTodo = todo
    },
    ADD_TODO (state) {
      state.todos.push({
        body: state.newTodo,
        completed: false
      })
    },CLEAR_TODO (state) {
      state.newTodo = ''
    },
    EDIT_TODO (state, todo) {
      var todos = state.todos
      todos.splice(todos.indexOf(todo), 1)
      state.todos = todos
      state.newTodo = todo.body
    },
    DELETE_TODO (state, todo) {
      var todos = state.todos
      todos.splice(todos.indexOf(todo), 1)
    }
  },
  actions: {
    addTodo ({commit}) {
      commit('ADD_TODO')
    },
    getTodo ({commit}, todo) {
      commit('GET_TODO', todo)
    },
    clearTodo ({commit}) {
      commit('CLEAR_TODO')
    },
    editTodo ({commit}, todo) {
      commit('EDIT_TODO', todo)
    },
    deleteTodo ({commit}, todo) {
      commit('DELETE_TODO', todo)
    }
  },
  getters: {
    newTodo: state => state.newTodo,
    todos: state => state.todos.filter((todo) => {
      return !todo.completed
    })
  }
})
