import { useLocation } from 'react-router-dom'

import LongCourseInfo from '@component/Course/LongCourseInfo'
import RecommendTopBar from '@component/layout/RecommendTopBar'

export default function RecommendResult() {
  const location = useLocation()
  const courseId = location.state.courseId

  return (
    <>
      <RecommendTopBar />
      <LongCourseInfo />
    </>
  )
}
