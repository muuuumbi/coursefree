import { useQuery } from '@tanstack/react-query'

import { requestPlaceInfo } from '@api/request/course'

export const usePlaceInfoQuery = <T>(mapInfo: T) => {
  console.log('query start')
  const {
    isLoading: isPlaceInfoListLoading,
    isError: isPlaceInfoListError,
    data: placeInfoList,
  } = useQuery({
    queryKey: ['placeInfo'],
    queryFn: () => requestPlaceInfo(mapInfo),
  })
  return { isPlaceInfoListLoading, isPlaceInfoListError, placeInfoList }
}
