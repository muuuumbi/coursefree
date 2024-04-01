import { Place } from '@type/course'

import PlaceInfoWithOrder from '@component/Course/PlaceInfoWithOrder'
import ShortPlaceInfo from '@component/Course/ShortPlaceInfo'
import FlexBox from '@component/layout/FlexBox'

type SelectedPlaceList = {
  placeList: Place[]
  onClickPlaceBox: (place: Place) => void
}
/** @jsxImportSource @emotion/react */
export default (function SelectedPlaceList({
  placeList,
  onClickPlaceBox,
}: SelectedPlaceList) {
  const removePlace = () => {}

  return (
    <FlexBox a="center" d="column">
      {placeList.map((place, i) => {
        return (
          <PlaceInfoWithOrder key={i} order={i + 1}>
            <ShortPlaceInfo
              hasButton
              buttonText="삭제"
              place={place}
              onClickButton={removePlace}
              onClickBox={onClickPlaceBox}
            />
          </PlaceInfoWithOrder>
        )
      })}
    </FlexBox>
  )
})
