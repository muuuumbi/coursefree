import { MakingCourseContext } from '@context/index'
import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

import TitleBar from '@component/common/TitleBar'

export default function SelfMakePage() {
  // 장소 추가 클릭 시 페이지 전환되는데, 데이터를 계속 유지해야하므로 context API사용하여 상태 관리
  const [dateCourse, setDateCourse] = useState<any>({
    courseTitle: '',
    placeList: [],
  })
  const [station, setStation] = useState({})

  // 페이지가 새로고침 될 때 or 마운트 될 때 스토리지에 진행중인 값이 있으면 그 값으로 전역 컨텍스트 업데이트
  useEffect(() => {
    const savedDateCourse = sessionStorage.getItem('dateCourse')
    const savedStation = sessionStorage.getItem('station')
    if (savedDateCourse) {
      setDateCourse(JSON.parse(savedDateCourse))
    }
    if (savedStation) {
      setStation(JSON.parse(savedStation))
    }
  }, [])

  return (
    <>
      <MakingCourseContext.Provider
        value={{ dateCourse, setDateCourse, station, setStation }}
      >
        <TitleBar hasBackPage hasBottomLine title="직접 만들기" />
        {/* <Spacing size="10px" /> */}
        <Outlet />
      </MakingCourseContext.Provider>
    </>
  )
}
