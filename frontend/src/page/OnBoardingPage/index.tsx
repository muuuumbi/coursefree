import { OnBoardingUserInfoContext } from '@context/index'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import ProgressBar from '@component/common/ProgressBar'
import TitleBar from '@component/common/TitleBar'
import Section from '@component/layout/Section'
import Spacing from '@component/layout/Spacing'

/** @jsxImportSource @emotion/react */

export default function OnBoardingPage() {
  //   const [currentStep, setCurrentStep] = useState([])
  const [userOnBoardingData, setUserOnBoardingData] = useState({
    step: 1,
    gender: '',
    ageRange: '',
    mbti: '',
    foodPreference: '',
    moodPreference: '',
  })
  return (
    <OnBoardingUserInfoContext.Provider
      value={{ userOnBoardingData, setUserOnBoardingData }}
    >
      <Section>
        <TitleBar title="회원가입" hasBackPage />
        <ProgressBar
          max={5}
          value={userOnBoardingData.step}
          width={'100%'}
          height={'10px'}
        />
        <Spacing />
        <Outlet />
      </Section>
    </OnBoardingUserInfoContext.Provider>
  )
}
