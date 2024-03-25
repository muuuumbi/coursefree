import { BrowserRouter, Route, Routes } from 'react-router-dom'

import initMockAPI from './mocks'

import ArticleDetailPage from '@page/ArticleDetailPage'
import HomePage from '@page/HomePage'
import DiscoverArticle from '@page/HomePage/DiscoverArticle'
import HotArticle from '@page/HomePage/HotArticle'
import KakaoLoginPage from '@page/KakaoLoginPage'
import LandingPage from '@page/LandingPage'
import MakeCoursePage from '@page/MakeCoursePage'
import SelectMakingWay from '@page/MakeCoursePage/SelectMakingWay'
import MyCoursePage from '@page/MyCoursePage'
import OnBoardingPage from '@page/OnBoardingPage'
import SetGenderAge from '@page/OnBoardingPage/SetGenderAge'
import SetMBTI from '@page/OnBoardingPage/SetMBTI'
import SetMood from '@page/OnBoardingPage/SetMood'
import SetNickName from '@page/OnBoardingPage/SetNickName'
import RecommendPage from '@page/RecommendPage'
import RecommendResult from '@page/RecommendPage/RecommendResult'
import RecommendSearch from '@page/RecommendPage/RecommendSearch'
import SelfMakePage from '@page/SelfMakePage'
import SelfMakeCurrent from '@page/SelfMakePage/SelfMakeCurrent'
import SelfMakePlaceSearch from '@page/SelfMakePage/SelfMakePlaceSearch'
import SelfMakeSearch from '@page/SelfMakePage/SelfMakeSearch'

initMockAPI()

function App() {
  function setScreenSize() {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }
  setScreenSize()
  window.addEventListener('resize', setScreenSize)

  return (
    <>
      <div className="App">
        <div
          id="bottomSheet"
          style={{
            width: '100%',
          }}
        ></div>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route path="onBoarding" element={<OnBoardingPage />}>
                <Route index element={<SetNickName />} />
                <Route path="genderAge" element={<SetGenderAge />} />
                <Route path="mbti" element={<SetMBTI />} />
                <Route path="genderAge" element={<SetGenderAge />} />
                <Route path="mood" element={<SetMood />} />
              </Route>
              <Route index element={<LandingPage />}></Route>
              <Route path="oauth/kakao" element={<KakaoLoginPage />}></Route>

              <Route path="home" element={<HomePage />}>
                <Route index element={<HotArticle />} />
                <Route path="discover" element={<DiscoverArticle />} />
              </Route>
              <Route path="article" element={<ArticleDetailPage />} />
              <Route path="myCourse" element={<MyCoursePage />} />
              <Route path="makeCourse" element={<MakeCoursePage />}>
                <Route index element={<SelectMakingWay />} />
                {/* 추천을 통해 제작 */}
                <Route path="recommend" element={<RecommendPage />}>
                  <Route index element={<RecommendSearch />} />
                  <Route path="result" element={<RecommendResult />} />
                </Route>
                {/* 직접 제작 */}
                <Route path="selfMake" element={<SelfMakePage />}>
                  <Route index element={<SelfMakeSearch />} />
                  <Route path="current" element={<SelfMakeCurrent />} />
                  <Route path="search" element={<SelfMakePlaceSearch />} />
                </Route>
              </Route>

              {/* MyPage */}

              {/* Favorite */}
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
