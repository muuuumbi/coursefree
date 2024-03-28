import { css } from '@emotion/react'
// import { positions } from '@mocks/dummy'
import { useState } from 'react'

import SearchBar from '@component/common/SearchBar'
import TextBox from '@component/common/TextBox'
import CategorySlider from '@component/kakaoMap/CategorySlider'
import KakaoMap from '@component/kakaoMap/KakaoMap'
import BottomSheet from '@component/layout/BottomSheet'
import FlexBox from '@component/layout/FlexBox'
import Spacing from '@component/layout/Spacing'

const kakaoMapContainer = css`
  position: relative;
`

/** @jsxImportSource @emotion/react */
export default function SelfMakePlaceSearch() {
  // 현재 지도의 중심 좌표
  const [centerLatLng, setCenterLatLng] = useState<number[]>([])
  // 현재 사용자의 지도 레벨
  const [mapLevel, setMapLevel] = useState()
  // 현재 사용자가 선택한 장소
  const [currentSelectPlace, setCurrentSelectPlace] = useState({
    title: '',
  })
  //현재까지 담아놓은 장소들
  const [placeBasket, setPlaceBasket] = useState([])

  function onClickMarkerHandler(data: any) {
    setCurrentSelectPlace(data)
  }
  //TODO : center 좌표 : 역삼역을 기준으로 mount시 바로 api 호출,
  return (
    <>
      <FlexBox w="100%" j="center" d="column" a="center">
        <Spacing />
        <TextBox fontWeight="bold" typography="t3">
          역삼
        </TextBox>
        <SearchBar placeholder="찾으시는 장소명을 입력해주세요." />
        <FlexBox w="100%" css={kakaoMapContainer}>
          {/* 태그 슬라이더 넣을 곳 */}
          <CategorySlider />
          {/* 카카오맵 */}
          <KakaoMap
            width="100%"
            height="100vh"
            onClickMarkerHandler={onClickMarkerHandler}
          />
        </FlexBox>
      </FlexBox>
      {currentSelectPlace.title != '' ? (
        <BottomSheet title={currentSelectPlace.title} backDrop={false} />
      ) : null}
    </>
  )
}
