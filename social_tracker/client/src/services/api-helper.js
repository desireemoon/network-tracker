import axios from 'axios';

const api = axios.create({
  baseURL: ""
})


// User 
export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', loginData)
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data  
}

export const registerUser = async (registerData) => {
  const resp = await api.post('/api/users', { user: registerData })
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  console.log("resp.data:", resp.data);
  return resp.data 
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.get('/auth/verify');
    return resp.data
  }
  return false
}


// Network
const createNetwork = async (data) => {
  const resp = await api.post('/api/networks', { network: data })
  return resp.data
}

const readAllNetworks = async () => {
  const resp = await api.get('/api/networks')
  return resp.data
}

const updateNetwork = async (id, data) => {
  const resp = await api.put(`/api/networks/${id}`, { network: data })
  return resp.data
}
//people: person
const destroyNetwork = async (id) => {
  const resp = await api.delete(`/api/networks/${id}`)
  return resp.data
}

// People
const createPerson = async (data) => {
  const resp = await api.post('/api/people', { person: data })
  return resp.data
}

const readAllPeople = async () => {
  const resp = await api.get('/api/people')
  return resp.data
}

const updatePerson = async (id, data) => {
  const resp = await api.put(`/api/people/${id}`, { person: data })
  return resp.data
}

const destroyPerson = async (id) => {
  const resp = await api.delete(`/api/people/${id}`)
  return resp.data
}

export {
  createNetwork,
  readAllNetworks,
  updateNetwork,
  destroyNetwork,
  createPerson,
  readAllPeople,
  updatePerson,
  destroyPerson
}
