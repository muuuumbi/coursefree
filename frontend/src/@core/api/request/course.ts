import { authAxios } from '..'

import API_URI from '@api/url'

export const requestPlaceInfo = async (data: any) => {
  console.log('query start')
  const response = await authAxios.post(`${API_URI.PLACE_INFO}`, data)
  return response.data
}
