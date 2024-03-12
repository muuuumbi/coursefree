import styled from '@emotion/styled'
import { CSSProperties } from 'react'

interface T_BackDrop {
  opacity?: CSSProperties['opacity']
}
const BackDrop = styled.div<T_BackDrop>(
  {
    width: '100%',
    height: '100%',
    position: 'absolute',
    bottom: '0',
    left: '0',
    // width: '100%',
    // height: '100vh',
  },
  ({ opacity = 0.4 }) => ({ background: `rgba(0, 0, 0, ${opacity})` }),
)

export default BackDrop
