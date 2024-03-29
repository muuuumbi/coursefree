import { css } from '@emotion/react'
import { Place } from '@type/course'
import { useMemo, useState } from 'react'

import SearchBar from '@component/common/SearchBar'
import TextBox from '@component/common/TextBox'
import CategorySlider from '@component/kakaoMap/CategorySlider'
import KakaoMap from '@component/kakaoMap/KakaoMap'
import FlexBox from '@component/layout/FlexBox'
import Spacing from '@component/layout/Spacing'

import { usePlaceInfoQuery } from '@hook/ReactQuery/usePlaceInfoQuery'

import { debounce } from '@util/debounce'

const kakaoMapContainer = css`
  position: relative;
`

/** @jsxImportSource @emotion/react */
/**
 * TODO : 최초 페이지 마운트 시 지하철 역이 중심 좌표가 된다 -> ok
 * TODO : 지도가 움직일 때 마다 중심 좌표는 계속 업데이트 된다
 * TODO : 중심 좌표가 업데이트 될 때 마다 api 호출을 통해 placeList를 받아온다
 * TODO : 마커를 클릭 하면 해당 위치로 중심 좌표가 이동하며 api 호출과 함께 클릭한 마커의 장소 정보가 bottomSheet로 제공된다
 * TODO : bottomSheet는 스크롤을 통해 사용자가 끌 수 있다
 * TODO : 좌표변경 이벤트가 발생할 때 마다 api호출? no 디바운스 기법을 활용해 state 변경 자체를 늦춘다
 */
export default function SelfMakePlaceSearch() {
  const station = JSON.parse(sessionStorage.getItem('station'))
  const [category, setCategory] = useState<string>('RESTAURANT')

  const [center, setCenter] = useState({
    lat: station.point.lat,
    lng: station.point.lng,
  })

  const debounceSetCenter = debounce(setCenter, 300)

  // 현재 사용자가 선택한 장소
  const [currentSelectPlace, setCurrentSelectPlace] = useState<Place | null>(
    null,
  )

  // 장소 클릭 시 장소의 세부 정보를 BottomSheet 형태로 나타냅니다
  function onClickMarkerHandler(place: Place) {
    setCenter(place.points)
    setCurrentSelectPlace(place)
  }
  const initLocation = useMemo(() => {
    return {
      placeCategory: category,
      centerPoints: center,
      limitDist: 100,
    }
  }, [category, center])
  // 최초 마운트 시 지하철역 정보를 바탕으로 api 호출
  const { placeInfoList, isPlaceInfoListLoading } =
    usePlaceInfoQuery(initLocation)

  return (
    <>
      <FlexBox w="100%" j="center" d="column" a="center">
        <Spacing />
        <TextBox fontWeight="bold" typography="t3">
          {station.stationName}
        </TextBox>
        <SearchBar placeholder="찾으시는 장소명을 입력해주세요." />
        {isPlaceInfoListLoading ? (
          '로딩중입니다'
        ) : (
          <FlexBox w="100%" css={kakaoMapContainer}>
            {/* 태그 슬라이더 넣을 곳 */}
            <CategorySlider />
            {/* 카카오맵 */}
            <KakaoMap
              width="100%"
              height="100vh"
              padding="0px"
              onClickMarkerHandler={onClickMarkerHandler} // 마커 클릭 이벤트에 대한 콜백
              placeList={placeInfoList} // 장소 조회 api의 응답값
              center={center} // 지하철역의 좌표가 카카오맵의 중심 좌표가 된다
              setCenter={debounceSetCenter}
              hasMarker
              hasLine={false}
            />
          </FlexBox>
        )}
      </FlexBox>
      {/* {currentSelectPlace && (
        <BottomSheet title={currentSelectPlace.name} backDrop={false} />
      )} */}
    </>
  )
}
