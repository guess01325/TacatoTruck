import api from './apiConfig'

export const getMenuItems = async () => {
  try {
      const response = await api.get('/menu')
      return response.data
  } catch (error) {
      throw error
  }
}

export const getMenuItem = async id => {
  try {
      const response = await api.get(`/menu/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}

export const createMenuItem = async (menuItem) => {
  try {
      const response = await api.post('/menu', menuItem)
      return response.data
  } catch (error) {
      throw error
  }
}

export const updateMenuItem = async (id, menuItem) => {
  try {
      const response = await api.put(`/menu/${id}`, menuItem)
      return response.data
  } catch (error) {
      throw error
  }
}

export const deleteMenuItem = async id => {
  try {
      const response = await api.delete(`/menu/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}