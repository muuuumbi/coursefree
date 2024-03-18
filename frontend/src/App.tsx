import { BrowserRouter, Route, Routes } from 'react-router-dom'

import initMockAPI from './mocks'

import ArticleDetailPage from '@page/ArticleDetailPage'
import HomePage from '@page/HomePage'
import DiscoverArticle from '@page/HomePage/DiscoverArticle'
import HotArticle from '@page/HomePage/HotArticle'
import MakeCoursePage from '@page/MakeCoursePage'
import MyCoursePage from '@page/MyCoursePage'
import RecommendPage from '@page/RecommendPage'
import SelfMakePage from '@page/SelfMakePage'

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
            <Route path="/" element={<HomePage />}>
              <Route index element={<HotArticle />} />
              <Route path="discover" element={<DiscoverArticle />} />
            </Route>
            <Route path="/article" element={<ArticleDetailPage />} />
            <Route path="/myCourse" element={<MyCoursePage />} />
            <Route path="/makeCourse" element={<MakeCoursePage />} />
            <Route path="makeCourse/recommend" element={<RecommendPage />} />
            <Route path="makeCourse/selfmake" element={<SelfMakePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
