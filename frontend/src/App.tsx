import { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const ArticleDetailPage = lazy(() => import('@page/ArticleDetailPage'))
const FavoritePage = lazy(() => import('@page/FavoritePage'))
const FavoriteDetail = lazy(() => import('@page/FavoritePage/FavoriteDetail'))
const HomePage = lazy(() => import('@page/HomePage'))
const DiscoverArticle = lazy(() => import('@page/HomePage/DiscoverArticle'))
const HotArticle = lazy(() => import('@page/HomePage/HotArticle'))
const KakaoLoginPage = lazy(() => import('@page/KakaoLoginPage'))
const LandingPage = lazy(() => import('@page/LandingPage'))
const MakeCoursePage = lazy(() => import('@page/MakeCoursePage'))
const SelectMakingWay = lazy(
  () => import('@page/MakeCoursePage/SelectMakingWay'),
)
const MyCoursePage = lazy(() => import('@page/MyCoursePage'))
const MyPage = lazy(() => import('@page/MyPage/index'))
const Log = lazy(() => import('@page/MyPage/log'))
const Memory = lazy(() => import('@page/MyPage/memory'))
const Setting = lazy(() => import('@page/MyPage/setting'))
const OnBoardingPage = lazy(() => import('@page/OnBoardingPage'))
const SetInfo = lazy(() => import('@page/OnBoardingPage/SetInfo'))
const SetNickName = lazy(() => import('@page/OnBoardingPage/SetNickName'))
const Welcome = lazy(() => import('@page/OnBoardingPage/Welcome'))
const RecommendPage = lazy(() => import('@page/RecommendPage'))
const RecommendList = lazy(() => import('@page/RecommendPage/RecommendList'))
const RecommendResult = lazy(
  () => import('@page/RecommendPage/RecommendResult'),
)
const RecommendSearch = lazy(
  () => import('@page/RecommendPage/RecommendSearch'),
)
const Search = lazy(() => import('@page/SearchPage'))
const SelfMakePage = lazy(() => import('@page/SelfMakePage'))
const SelfMakeCurrent = lazy(() => import('@page/SelfMakePage/SelfMakeCurrent'))
const SelfMakePlaceSearch = lazy(
  () => import('@page/SelfMakePage/SelfMakePlaceSearch'),
)
const SelfMakeSearch = lazy(() => import('@page/SelfMakePage/SelfMakeSearch'))
const GenerateLink = lazy(() => import('@page/MyPage/generateLink'))

// initMockAPI()

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
          <Suspense fallback={<div>loading</div>}>
            <Routes>
              <Route path="/">
                {/* onBoarding */}
                <Route path="onBoarding" element={<OnBoardingPage />}>
                  <Route index element={<SetNickName />} />
                  <Route path="info" element={<SetInfo />} />
                  <Route path="welcome" element={<Welcome />} />
                </Route>

                {/* Landing */}
                <Route index element={<LandingPage />}></Route>

                {/* SocialLogin */}
                <Route path="oauth/kakao" element={<KakaoLoginPage />}></Route>

                {/* Home */}
                <Route path="home" element={<HomePage />}>
                  <Route index element={<HotArticle />} />
                  <Route path="discover" element={<DiscoverArticle />} />
                </Route>

                {/* Article */}
                <Route path="article/:id" element={<ArticleDetailPage />} />

                {/* MyCourse */}
                <Route path="myCourse" element={<MyCoursePage />} />

                {/*  CourseMaking */}
                <Route path="makeCourse" element={<MakeCoursePage />}>
                  <Route index element={<SelectMakingWay />} />
                  {/* 추천을 통해 제작 */}
                  <Route path="recommend" element={<RecommendPage />}>
                    <Route index element={<RecommendSearch />} />
                    <Route path="candidate" element={<RecommendList />} />
                    <Route path="result" element={<RecommendResult />} />
                  </Route>

                  {/* 직접 제작 */}
                  <Route path="selfMake" element={<SelfMakePage />}>
                    <Route index element={<SelfMakeSearch />} />
                    <Route path="current" element={<SelfMakeCurrent />} />
                    <Route path="search" element={<SelfMakePlaceSearch />} />
                  </Route>
                </Route>
              </Route>

              <Route path="/favorite" element={<FavoritePage />}></Route>
              <Route path="/favorite/:courseId" element={<FavoriteDetail />} />

              <Route path="/mypage" element={<MyPage />}></Route>
              <Route path="/mypage/log" element={<Log />}></Route>
              <Route path="/mypage/memory" element={<Memory />}></Route>
              <Route path="/mypage/setting" element={<Setting />}></Route>
              <Route path="/search" element={<Search />}></Route>
              <Route path="/generateLink" element={<GenerateLink />}></Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
