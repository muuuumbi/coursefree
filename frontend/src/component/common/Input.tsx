import styled from '@emotion/styled'
import { ComponentProps } from 'react'

import { colors } from '@style/colorPalette'
import { Typography, typographyMap } from '@style/typography'

interface T_Input extends ComponentProps<'input'> {
  typography?: Typography
}
/**
 * @param typography 지정된 텍스트 크기
 */
const Input = styled.input<T_Input>(
  {
    width: '90%',
    padding: '10px',
    borderBottom: `1px solid ${colors['pink200']}`,
  },
  ({ typography = 't6' }) => typographyMap[typography],
)
export default Input
