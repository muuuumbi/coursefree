import PlaceInfoWithOrder from '@component/courseInfo/PlaceInfoWithOrder'
import ShortPlaceInfo from '@component/courseInfo/ShortPlaceInfo'
import FlexBox from '@component/layout/FlexBox'
import Spacing from '@component/layout/Spacing'

const DUMMY = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/** @jsxImportSource @emotion/react */
export default (function SelectedPlaceList() {
  return (
    <FlexBox a="center" d="column">
      {DUMMY.map((_, i) => {
        return (
          <PlaceInfoWithOrder key={i} order={i + 1}>
            <ShortPlaceInfo hasDeleteButton />
          </PlaceInfoWithOrder>
        )
      })}
      <Spacing size="300px" />
    </FlexBox>
  )
})
