import { Outlet } from 'react-router-dom'

import ProgressBar from '@component/common/ProgressBar'
import TitleBar from '@component/common/TitleBar'
import Section from '@component/layout/Section'
import Spacing from '@component/layout/Spacing'

/** @jsxImportSource @emotion/react */

export default function OnBoardingPage() {
  //   const [currentStep, setCurrentStep] = useState([])

  return (
    <Section>
      <TitleBar title="회원가입" hasBackPage />
      <ProgressBar max={5} value={1} width={'100%'} height={'10px'} />
      <Spacing />
      <Outlet />
    </Section>
  )
}
