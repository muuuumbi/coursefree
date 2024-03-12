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
  bold?: boolean
}
/**
 * @param typography
 * @param color
 * @param display
 * @param textAlign
 * @param fontWeight
 * @param bold
 */
const TextBox = styled.span<TextProps>(
  ({ color = 'black', display, textAlign, fontWeight, bold }) => ({
    color: colors[color],
    display,
    textAlign,
    fontWeight: bold ? 'bold' : fontWeight,
  }),
  ({ typography = 't5' }) => typographyMap[typography],
)

export default TextBox
