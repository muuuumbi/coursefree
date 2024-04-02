import { useQuery } from '@tanstack/react-query'
import QUERY_KEY from 'src/constant/queryKey'

import { requestCourseDetail } from '@api/request/course'

export const useCourseDetailQuery = (id: number) => {
  const { isLoading, isError, data } = useQuery({
    queryKey: [QUERY_KEY.COURSE_DETAIL, id],
    queryFn: () => requestCourseDetail(id),
  })
  return {
    isLoading,
    isError,
    data,
  }
}
