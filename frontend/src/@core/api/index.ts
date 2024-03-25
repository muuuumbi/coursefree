import axios from 'axios'

import interceptor from './interceptor'
import URL from './url'

export const baseAxios = axios.create({
  baseURL: URL.BASE,
  headers: {
    'Content-Type': 'application/json',
  },
})
export const authAxios = axios.create({
  baseURL: URL.BASE,
  headers: {
    'Content-Type': 'application/json',
  },
})
interceptor(authAxios)
