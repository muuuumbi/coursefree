import { MakingCourseContext } from '@context/index'
import { css } from '@emotion/react'
import { Place } from '@type/course'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import Button from '@component/common/Button'
import Input from '@component/common/Input'
import TextBox from '@component/common/TextBox'
import KakaoMap from '@component/kakaoMap/KakaoMap'
import FlexBox from '@component/layout/FlexBox'
import Spacing from '@component/layout/Spacing'
import SelectedPlaceList from '@component/pages/SelfMakePage/SelectedPlaceList'

import useMeasure from '@hook/useMeasure'

const StickyMap = css`
  position: sticky;
  top: 0px;
`

/** @jsxImportSource @emotion/react */
export default function SelfMakeCurrent() {
  const { dateCourse } = useContext(MakingCourseContext)
  const station = JSON.parse(sessionStorage.getItem('station'))
  const [centerView, setCenterView] = useState({
    center: station.point,
    level: 2,
  })
  console.log('render')
  const onClickMarkerHandler = () => {
    console.log(1)
  }
  const onClickPlaceBox = (place: Place) => {
    console.log(place)
    setCenterView({
      center: { lat: place.points.lat, lng: place.points.lng },
      level: 2,
    })
  }
  const { widthState, ref: measureRef } = useMeasure()
  // 현재 진행중인 코스 저장
  // const [courseInfo, setCourseInfo] = useState(0)

  return (
    <>
      <FlexBox j="center" d="column" p="10px" w="100%" ref={measureRef}>
        <TextBox typography="t2">역삼</TextBox>
        <FlexBox a="center" j="space-between">
          <TextBox fontWeight="bold">
            코스 이름 :
            <Input
              placeholder="생성할 코스 이름을 입력해주세요"
              width={'250px'}
            />
          </TextBox>

          <Button bgColor="pink400">코스 완성</Button>
        </FlexBox>
        <Button
          css={css`
            position: fixed;
            bottom: 5rem;
            width: ${widthState - 20}px;
          `}
        >
          <Link to="../search">장소 추가하러 가기</Link>
        </Button>
      </FlexBox>
      <FlexBox css={StickyMap}>
        <KakaoMap
          width="100%"
          height="30vh"
          padding="0px"
          onClickMarkerHandler={onClickMarkerHandler} // 마커 클릭 이벤트에 대한 콜백
          placeList={dateCourse.placeList} // 장소 조회 api의 응답값
          centerView={centerView} // 지하철역의 좌표가 카카오맵의 중심 좌표가 된다
          hasMarker
          hasLine
        />
      </FlexBox>
      <Spacing size="7px" />
      {/* 현재까지 저장된 dateCourse를 넘겨주기 */}
      <SelectedPlaceList
        placeList={dateCourse.placeList}
        onClickPlaceBox={onClickPlaceBox}
      />
      <Spacing size="50px" />
    </>
  )
}
