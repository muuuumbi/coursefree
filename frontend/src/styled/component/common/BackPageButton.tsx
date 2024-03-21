import styled from '@emotion/styled'
import { CSSProperties } from 'react'

interface T_BackPageButtonContainer {
  top?: CSSProperties['top']
  left?: CSSProperties['left']
}

export const BackPageButtonContainer = styled.button`
  position: relative;
  margin-right: 15px;
`
