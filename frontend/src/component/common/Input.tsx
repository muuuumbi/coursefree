import styled from '@emotion/styled'
import { CSSProperties, ComponentProps } from 'react'

import { Typography, typographyMap } from '@style/typography'

interface T_Input extends ComponentProps<'input'> {
  typography?: Typography
  width?: CSSProperties['width']
}
/**
 * @param typography 지정된 텍스트 크기
 * @param width : width
 */
const Input = styled.input<T_Input>(
  {
    padding: '10px',
  },
  ({ typography = 't6' }) => ({
    ...typographyMap[typography],
  }),
  ({ width }) => ({ width }),
)

export default Input
