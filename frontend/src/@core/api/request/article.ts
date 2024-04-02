import API_URI from '@constant/url'

import { authAxios } from '..'

export const requestHotArticle = async () => {
  return await authAxios.get(`${API_URI.HOT_ARTICLE}`)
}
