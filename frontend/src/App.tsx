import { BrowserRouter, Route, Routes } from 'react-router-dom'

import initMockAPI from './mocks'

import HomePage from '@page/HomePage'
import DiscoverArticle from '@page/HomePage/DiscoverArticle'
import HotArticle from '@page/HomePage/HotArticle'

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
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />}>
              <Route index element={<HotArticle />} />
              <Route path="discover" element={<DiscoverArticle />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
