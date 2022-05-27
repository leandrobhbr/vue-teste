import axios from 'axios'

const state = {
}

const mutations = {
}

const actions = {
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
  async criarUsuario (context, usuario) {
    return new Promise((resolve, reject) => {
      axios.post('https://reqres.in/api/users/', usuario)
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
