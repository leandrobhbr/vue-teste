import axios from 'axios'

const state = {
  ultimoUsuarioVisualizado: null
}

const mutations = {
  SET_ULTIMO_USUARIO_VISUALIZADO (state, ultimoUsuarioVisualizado) {
    state.ultimoUsuarioVisualizado = ultimoUsuarioVisualizado
  }
}

const actions = {
  setUltimoUsuarioVisualizado (context, ultimoUsuarioVisualizado) {
    context.commit('SET_ULTIMO_USUARIO_VISUALIZADO', ultimoUsuarioVisualizado)
  },
  async listaDeUsuarios (context, pg = 1) {
    return new Promise((resolve, reject) => {
      axios.get(`https://reqres.in/api/users?page=${pg}`)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  async buscaUsuario (context, id) {
    return new Promise((resolve, reject) => {
      axios.get(`https://reqres.in/api/users/${id}`)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  async criarUsuario (context, form) {
    return new Promise((resolve, reject) => {
      axios.post('https://reqres.in/api/users/', form)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  async alterarUsuario (context, id) {
    return new Promise((resolve, reject) => {
      axios.put(`https://reqres.in/api/users/${id}`)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  async deletarUsuario (context, id) {
    return new Promise((resolve, reject) => {
      axios.delete(`https://reqres.in/api/users/${id}`)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}

const getters = {
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
