import styled from '@emotion/styled'
import { CSSProperties, ComponentProps } from 'react'

interface Container extends ComponentProps<'div'> {
  height: CSSProperties['height']
}

export const Container = styled.div<Container>(
  {
    backgroundColor: 'white',
    maxWidth: '450px',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
    // position: 'absolute',
    position: 'fixed',
    boxShadow: '0 0 5px 1px rgba(0, 0, 0, 0.5)',
    willChange: 'transform',
    overflow: 'hidden',
    zIndex: 999,
    transition: 'transform 150ms ease-out',
    // overscrollBehavior: 'contain',
  },
  ({ height }) => ({ height: height, bottom: `-${height}` }),
)
export const HandleBarContainer = styled.div`
  width: 100%;
  height: 8%;
  display: flex;
  /* padding: 5px; */
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-bottom: 1px solid #f3f3f3;
`

export const HandleBar = styled.div`
  width: 35px;
  height: 6px;
  border-radius: 10px;
  background-color: var(--primary);
`
