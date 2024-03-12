import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import BackDrop from '@component/layout/Backdrop'
import BottomSheet from '@component/layout/BottomSheet'
import Footer from '@component/layout/Footer'
import Section from '@component/layout/Section'
import Spacing from '@component/layout/Spacing'
import HomeNavLink from '@component/pages/HomePage/HomeNavLink'

function HomePage() {
  const [state, setState] = useState(false)

  function onClickBottomSheetHandler() {
    setState(!state)
  }
  return (
    <>
      <Section>
        <Spacing size="0.5rem" />
        <HomeNavLink />
        <Spacing size="2rem" />
        <Outlet></Outlet>
      </Section>
      <Footer />
      {state && (
        <BackDrop onClick={onClickBottomSheetHandler}>
          <BottomSheet height="500px" />
        </BackDrop>
      )}
    </>
  )
}

export default HomePage
