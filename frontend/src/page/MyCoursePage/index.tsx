import CurrentDateCourse from './CurrentDateCourse'
import MakingCourseNavigatePage from './MakingCourseNavigatePage'

import TitleBar from '@component/common/TitleBar'
import Footer from '@component/layout/Footer'
import Section from '@component/layout/Section'

export default function MyCoursePage() {
  const currentDate = null
  return (
    <>
      <Section>
        <TitleBar title="지금 즐기고 있는 데이트💗" hasBackPage />
        {currentDate === true ? (
          <CurrentDateCourse />
        ) : (
          <MakingCourseNavigatePage />
        )}
      </Section>
      <Footer />
    </>
  )
}
