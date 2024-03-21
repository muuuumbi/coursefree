import { Outlet } from 'react-router-dom'

import Footer from '@component/layout/Footer'
import Section from '@component/layout/Section'

export default function MakeCoursePage() {
  return (
    <>
      <Section>
        <Outlet />
      </Section>
      <Footer />
    </>
  )
}
