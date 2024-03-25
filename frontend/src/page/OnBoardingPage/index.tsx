import { OnBoardingUserInfoContext } from '@context/index'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import ProgressBar from '@component/common/ProgressBar'
import TitleBar from '@component/common/TitleBar'
import Section from '@component/layout/Section'
import Spacing from '@component/layout/Spacing'

/** @jsxImportSource @emotion/react */

export default function OnBoardingPage() {
  const [onBoardingUserInfo, setOnBoardingUserInfo] = useState({
    gender: '',
    ageRange: '',
    mbti: '',
    foodPreference: '',
    moodPreference: '',
  })
  const [step, setStep] = useState(1)
  return (
    <OnBoardingUserInfoContext.Provider
      value={{ onBoardingUserInfo, setOnBoardingUserInfo, step, setStep }}
    >
      <Section>
        <TitleBar title="회원가입" hasBackPage />
        <ProgressBar max={3} value={step} width={'100%'} height={'10px'} />
        <Spacing />
        <Outlet />
      </Section>
    </OnBoardingUserInfoContext.Provider>
  )
}
