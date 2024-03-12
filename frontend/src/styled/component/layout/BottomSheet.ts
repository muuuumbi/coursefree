import styled from '@emotion/styled'
import { CSSProperties, ComponentProps } from 'react'

interface Container extends ComponentProps<'div'> {
  height: CSSProperties['height']
}

export const Container = styled.div<Container>(
  {
    backgroundColor: 'blue',
    width: '100%',
    borderTopLeftRadius: '20px',
    borderTopRightRadius: '20px',
    position: 'absolute',
    boxShadow: '0 0 5px 1px rgba(0, 0, 0, 0.5)',
    willChange: 'transform',
    overflow: 'hidden',
    zIndex: 999,
    transition: 'transform 150ms ease-out',
  },
  ({ height }) => ({ height: height, bottom: `-${height}` }),
)
export const HandleBar = styled.div`
  width: 100%;
  height: 50px;
  background-color: green;
`
