import axios from 'axios'

const baseUrl = 'http://localhost:3004'

export const getTodos = async() => {
  try {
    const res = await axios.get(`${baseUrl}/todos`)
    return res.data
  } catch (error) {
    console.error('[Get Todos failed]: ', error)
  }
}

export const createTodo = () => {}

export const patchTodo = () => {}

export const deleteTodo = () => {}