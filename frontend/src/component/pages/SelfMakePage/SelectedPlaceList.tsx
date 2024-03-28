import { DateCourse } from '@type/course'

import PlaceInfoWithOrder from '@component/courseInfo/PlaceInfoWithOrder'
import ShortPlaceInfo from '@component/courseInfo/ShortPlaceInfo'
import FlexBox from '@component/layout/FlexBox'

type SelectedPlaceList = {
  dateCourse: DateCourse
}
/** @jsxImportSource @emotion/react */
export default (function SelectedPlaceList({ dateCourse }: SelectedPlaceList) {
  return (
    <FlexBox a="center" d="column">
      {dateCourse.placeList.map((_, i) => {
        return (
          <PlaceInfoWithOrder key={i} order={i + 1}>
            <ShortPlaceInfo hasDeleteButton />
          </PlaceInfoWithOrder>
        )
      })}
    </FlexBox>
  )
})
