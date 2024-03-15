import styled from '@emotion/styled'
import { CSSProperties, ComponentProps } from 'react'

import { colors } from '@style/colorPalette'

interface T_FlexBox extends ComponentProps<'div'> {
  a?: CSSProperties['alignItems']
  j?: CSSProperties['justifyContent']
  d?: CSSProperties['flexDirection']
  w?: CSSProperties['width']
  h?: CSSProperties['height']
  t?: CSSProperties['textAlign']
  p?: CSSProperties['padding']
  bgColor?: CSSProperties['backgroundColor']
  display?: CSSProperties['display']
}
/**
 * @param a alignItems
 * @param j justifyContent
 * @param d direction
 * @param w width
 * @param h height
 * @param t textAlign
 */
const FlexBox = styled.div<T_FlexBox>(
  ({ a, j, d, w, h, t, p, bgColor, display = 'flex' }) => {
    return {
      display,
      alignItems: a,
      justifyContent: j,
      flexDirection: d,
      width: w,
      height: h,
      textAlign: t,
      padding: p,
      backgroundColor: colors[bgColor],
    }
  },
  // { overflowY: 'scroll' },
)

export default FlexBox
