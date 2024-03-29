import { authAxios } from '..'

import API_URI from '@api/url'

export const requestPlaceInfo = async (data: any) => {
  const response = await authAxios.post(`${API_URI.PLACE_INFO}`, data)
  return response.data
}
