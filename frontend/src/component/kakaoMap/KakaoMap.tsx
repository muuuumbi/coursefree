import { LatLng, Place } from '@type/course'
import { CSSProperties, MutableRefObject, useEffect, useRef } from 'react'

import { makeLine, makeMarker } from '@util/kakaoMap'

interface KakaoMap {
  width: CSSProperties['width']
  height: CSSProperties['height']
  padding: CSSProperties['padding']
  center: LatLng
  hasLine: boolean
  hasMarker: boolean
  onClickMarkerHandler: any
  placeList: Place[]
  setCenter?: any
  setLevel?: any
}

/**
 * @summary : kakaoMap Props
 * @param width : 지도의 가로 길이
 * @param height : 지도의 세로 길이
 * @param padding : 지도의 padding
 * @param placeList : 마커를 띄울 장소들에 대한 정보 리스트
 * @param center : 최초 마운트 시 중심 좌표
 * @param hasLine : 장소와 장소를 잇는 선을 표시할 것인가?
 * @param hasMarker : 장소를 표시하는 마커를 띄우는가?
 * @param onCLickMarkerHandler : 마커 클릭 시 발생시킬 이벤트
 * @ ------------------this is optional props--------------------
 * @param setCenter: center좌표 측정하고 상태 관리하는 setter함수
 * @param setLevel : view의 level좌표 측정하고 업데이트하는 setter함수
 */
export default function KakaoMap({
  width,
  height,
  onClickMarkerHandler,
  placeList,
  padding,
  center,
  hasLine,
  hasMarker,
  setLevel = null,
  setCenter = null,
}: KakaoMap) {
  const mapRef = useRef<HTMLElement>(null)

  const initMap = () => {
    const container = document.getElementById('map')
    console.log(center)
    const options = {
      center: new window.kakao.maps.LatLng(center.lat, center.lng),
      level: 2,
    }
    const map = new window.kakao.maps.Map(container as HTMLElement, options)
    ;(mapRef as MutableRefObject<any>).current = map

    // 카카오맵에 중심좌표 변경 감지 이벤트 등록
    kakao.maps.event.addListener(map, 'center_changed', function () {
      const level = map.getLevel()
      const latlng = map.getCenter()
      if (setCenter) setCenter({ lat: latlng.getLat(), lng: latlng.getLng() })
      if (setLevel) setLevel(level)
    })
    // 마커 표시
    if (hasMarker && placeList) {
      makeMarker(map, placeList, onClickMarkerHandler)
    }
    // 선 표시
    if (hasLine && placeList) makeLine(map, placeList)
  }

  useEffect(() => {
    window.kakao.maps.load(() => initMap())
  }, [mapRef])

  return (
    <div
      id="map"
      style={{ width: width, height: height, padding: padding }}
    ></div>
  )
}
