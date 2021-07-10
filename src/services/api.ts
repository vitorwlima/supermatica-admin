import axios from 'axios'

const token = localStorage.getItem('token')

const api = axios.create({
  baseURL: process.env.REACT_APP_SERVER,
  headers: {
    Authorization: 'Bearer ' + token,
  },
})

export default api
