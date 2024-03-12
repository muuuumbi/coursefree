import styled from '@emotion/styled'
import { CSSProperties } from 'react'

interface T_FlexBox {
  a?: CSSProperties['alignItems']
  j?: CSSProperties['justifyContent']
  d?: CSSProperties['flexDirection']
  w?: CSSProperties['width']
  h?: CSSProperties['height']
}
/**
 * @param a alignItems
 * @param j justifyContent
 * @param d direction
 * @param w width
 * @param h height
 */
const FlexBox = styled.div<T_FlexBox>(({ a, j, d, w, h }) => {
  return {
    display: 'flex',
    alignItems: a,
    justifyContent: j,
    flexDirection: d,
    width: w,
    height: h,
  }
})

export default FlexBox
