import { BrowserRouter, Route, Routes } from 'react-router-dom'

import initMockAPI from './mocks'

import ArticleDetailPage from '@page/ArticleDetailPage'
import HomePage from '@page/HomePage'
import DiscoverArticle from '@page/HomePage/DiscoverArticle'
import HotArticle from '@page/HomePage/HotArticle'
import MyCoursePage from '@page/MyCoursePage'

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
        <span id="bottomSheet"></span>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />}>
              <Route index element={<HotArticle />} />
              <Route path="discover" element={<DiscoverArticle />} />
            </Route>
            <Route path="/article" element={<ArticleDetailPage />} />
            <Route path="/myCourse" element={<MyCoursePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
