import { CSSProperties, MutableRefObject, useEffect, useRef } from 'react'

import { makeLine, makeMarker } from '@util/kakaoMap'

interface KakaoMap {
  width: CSSProperties['width']
  height: CSSProperties['height']
  padding: CSSProperties['padding']
  dateCourse?: any
  center?: any
  onClickMarkerHandler?: (data) => void
}
const data = [
  {
    title: '카카오',
    latlng: new kakao.maps.LatLng(33.450705, 126.570677),
    date: '2024-03-22',
    images: [
      'dummy1.jpg',
      'dummy2.jpg',
      'dummy3.jpg',
      'dummy4.jpg',
      'dummy5.jpg',
    ],
    tags: ['카카오맵', '위치'],
    comments: ['아름다운 풍경', '좋은 추억', '날씨가 좋았던 날'],
  },
  {
    title: '생태연못',
    latlng: new kakao.maps.LatLng(33.450936, 126.569477),
    date: '2024-03-23',
    images: [
      'dummy6.jpg',
      'dummy7.jpg',
      'dummy8.jpg',
      'dummy9.jpg',
      'dummy10.jpg',
    ],
    tags: ['자연', '풍경'],
    comments: ['조용한 곳', '생태 보존 지역', '새소리가 아름답다'],
  },
  {
    title: '텃밭',
    latlng: new kakao.maps.LatLng(33.450879, 126.56994),
    date: '2024-03-24',
    images: [
      'dummy11.jpg',
      'dummy12.jpg',
      'dummy13.jpg',
      'dummy14.jpg',
      'dummy15.jpg',
    ],
    tags: ['농업', '텃밭'],
    comments: ['신선한 과일', '청정한 환경', '재배하는 재미'],
  },
  {
    title: '근린공원',
    latlng: new kakao.maps.LatLng(33.451393, 126.570738),
    date: '2024-03-25',
    images: [
      'dummy16.jpg',
      'dummy17.jpg',
      'dummy18.jpg',
      'dummy19.jpg',
      'dummy20.jpg',
    ],
    tags: ['공원', '레저'],
    comments: [
      '가족과 함께하는 시간',
      '운동하기 좋은 장소',
      '자전거 타기 좋은 곳',
    ],
  },
]
/**
 * @param width : 지도의 가로 길이
 * @param height : 지도의 세로 길이
 * @param padding : 지도의 padding
 * @param dateCourse : 마커를 띄울 장소들에 대한 정보 리스트
 * @param center : 최초 마운트 시 중심 좌표
 * @returns
 */
export default function KakaoMap({
  width,
  height,
  onClickMarkerHandler,
  dateCourse,
  padding,
  // center,
}: KakaoMap) {
  const mapRef = useRef<HTMLElement>(null)

  const initMap = () => {
    const container = document.getElementById('map')
    const options = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 2,
    }
    const map = new window.kakao.maps.Map(container as HTMLElement, options)
    ;(mapRef as MutableRefObject<any>).current = map

    // 카카오맵에 중심좌표 변경 감지 이벤트 등록
    kakao.maps.event.addListener(map, 'center_changed', function () {
      // 지도의  레벨을 얻어옵니다
      const level = map.getLevel()

      // 지도의 중심좌표를 얻어옵니다
      const latlng = map.getCenter()
    })
    // 마커 표시
    if (dateCourse) {
      makeMarker(map, data, onClickMarkerHandler)
      // 선 표시 (search 페이지에서만 표시)
      makeLine(map)
    }
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
