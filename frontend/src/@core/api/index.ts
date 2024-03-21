import axios from 'axios'

import interceptor from './interceptor'
import URL from './url'

export const baseAxios = axios.create({
  baseURL: URL.BASE,
})
export const authAddAxios = () => {
  const instance = axios.create({
    baseURL: URL.BASE,
  })
  interceptor(instance)
  return instance
}

export const authAxios = authAddAxios()
