import API_URI from '@constant/url'
import { MapLocation } from '@type/kakaoMap'

import { authAxios } from '..'

export const requestPlaceInfo = (data: MapLocation) => {
  const response = authAxios.post(`${API_URI.PLACE_INFO}`, data)
  return response
}
