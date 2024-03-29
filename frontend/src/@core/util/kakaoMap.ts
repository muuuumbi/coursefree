import logo from '@asset/logo_demo.jpg'

export function makeMarker(map, placeList, onClickMarkerHandler) {
  const imageSrc = logo
  for (const place of placeList['placeDtoList']) {
    // 마커 이미지의 이미지 크기 입니다
    const imageSize = new kakao.maps.Size(24, 35)
    // 마커 이미지를 생성합니다
    const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize)
    // 마커를 생성합니다
    const marker = new kakao.maps.Marker({
      map: map, // 마커를 표시할 지도
      position: new kakao.maps.LatLng(place.points.lat, place.points.lng), // 마커를 표시할 위치
      title: place.name, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
      image: markerImage, // 마커 이미지
      clickable: true,
    })
    kakao.maps.event.addListener(marker, 'click', function () {
      onClickMarkerHandler(place)
    })
    marker.setMap(map)
  }
}

export function makeLine(map, placeList) {
  const linePath = []
  for (const e of placeList['placeDtoList']) {
    const { points } = e
    console.log(points)
    linePath.push(new kakao.maps.LatLng(points.lat, points.lng))
  }

  // 지도에 표시할 선을 생성합니다
  const polyline = new kakao.maps.Polyline({
    path: linePath, // 선을 구성하는 좌표배열 입니다
    strokeWeight: 5, // 선의 두께 입니다
    strokeColor: '#FFAE00', // 선의 색깔입니다
    strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
    strokeStyle: 'solid', // 선의 스타일입니다
  })

  // 지도에 선을 표시합니다
  polyline.setMap(map)
}
