import { useLocation } from 'react-router-dom'

import LongCourseInfo from '@component/Course/LongCourseInfo'
import RecommendTopBar from '@component/layout/RecommendTopBar'

import { useCourseDetailQuery } from '@hook/ReactQuery/useCourseDetailQuery'

export default function RecommendResult() {
  const location = useLocation()
  const courseId = location.state.courseId
  const { data, isLoading } = useCourseDetailQuery(courseId)

  return (
    <>
      <RecommendTopBar />
      <LongCourseInfo />
    </>
  )
}
