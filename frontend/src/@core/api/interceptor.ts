import { AxiosInstance } from 'axios'

import { getJWT } from '@util/jwt'

export default function interceptor(instance: AxiosInstance) {
  // 요청 전 JWT 실어 보내는 로직
  addAccessTokenOnRequest(instance)
  // 403 에러 반환 시 리프레쉬 토큰 재발급 로직
  renewAccessToken(instance)
}

function addAccessTokenOnRequest(instance: AxiosInstance) {
  instance.interceptors.request.use(
    config => {
      const token = getJWT('jwt_token')

      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }

      return config
    },
    error => Promise.reject(error.response),
  )
}

function renewAccessToken(instance: AxiosInstance) {
  return instance
}
