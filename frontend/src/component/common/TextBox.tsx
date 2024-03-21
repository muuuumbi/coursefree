import styled from '@emotion/styled'
import { CSSProperties } from 'react'

import { Colors, colors } from '@style/colorPalette'
import { Typography, typographyMap } from '@style/typography'

interface TextProps {
  typography?: Typography
  color?: Colors
  display?: CSSProperties['display']
  textAlign?: CSSProperties['textAlign']
  fontWeight?: CSSProperties['fontWeight']
  hasBottomLine?: boolean
  padding?: CSSProperties['padding']
}
/**
 * @param typography
 * @param color
 * @param display
 * @param fontWeight
 * @param padding
 */
const TextBox = styled.span<TextProps>(
  ({ color = 'black', display, fontWeight, padding }) => ({
    color: colors[color],
    display,
    padding,
    fontWeight,
  }),
  ({ typography = 't5' }) => typographyMap[typography],
)

export default TextBox
