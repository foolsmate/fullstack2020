import axios from 'axios'
const baseUrl = 'http://localhost:3001'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = async () => {
  const response = await axios.get(`${baseUrl}/api/blogs`)
  return response.data
}

const login = async credentials => {
  const response = await axios.post(`${baseUrl}/api/login`, credentials)
  return response.data
}

const create = async newObject => {
  const config = {
    headers: { Authorization: token },
  }
  const response = await axios.post(`${baseUrl}/api/blogs`, newObject, config)
  return response.data
}

const update = async (id, newObject) => {
  const response = await axios.put(`${baseUrl}/api/blogs/${id}`, newObject)
  return response.data
}

export default { getAll, login, setToken, create, update, }