import { Circle } from '@chakra-ui/react'
import { RefObject, forwardRef } from 'react'

import FlexBox from '@component/layout/FlexBox'

interface PlaceInfoWithOrder {
  children: React.ReactNode
  order: number
}

export default forwardRef(function PlaceInfoWithOrder(
  { order, children }: PlaceInfoWithOrder,
  ref: RefObject<HTMLDivElement>,
) {
  return (
    <FlexBox a="center" j="space-between" w="100%" p={'10px'} ref={ref}>
      <Circle size={'25px'} backgroundColor={'hotpink'} color="white">
        {order}
      </Circle>
      {children}
    </FlexBox>
  )
})
