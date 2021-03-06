import Vue from 'vue'
import Vuex from 'vuex'
import EventService from '@/services/EventService.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    user: { id: 123, name: 'Dave' },
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ],
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false },
      { id: 3, text: '...', done: true },
      { id: 4, text: '...', done: false }
    ],
    events: []
  },
  mutations: {
    INCREMENT_COUNT(state, value) {
      state.count += value
    },
    ADD_EVENT(state, event) {
      state.events.push(event)
    }
  },
  actions: {
    updateCount({ state, commit }, incrementBy) {
      if (state.user) {
        commit('INCREMENT_BY', incrementBy)
      }
    },
    createEvent({ commit }, event) {
      EventService.postEvent(event)
      commit('ADD_EVENT', event)
    }
  },
  getters: {
    categoriesLength: state => {
      return state.categories.length
    },
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    activeTodosCount: (state, getters) => {
      return state.todos.length - getters.doneTodos.length
    },
    getEventById: state => id => {
      return state.events.find(event => event.id == id)
    }
  }
})
