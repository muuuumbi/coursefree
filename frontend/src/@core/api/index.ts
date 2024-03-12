import axios from 'axios'

import interceptor from './interceptor'
import URL from './url'

export const baseAxios = axios.create({
  baseURL: URL.BASE,
})
export const authAxios = () => {
  const instance = axios.create({
    baseURL: URL.BASE,
  })
  interceptor(instance)
  return instance
}
