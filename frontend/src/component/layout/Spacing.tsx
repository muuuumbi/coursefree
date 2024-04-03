import styled from '@emotion/styled'

interface T_Spacing {
  size?: string
  d?: 'vertical' | 'horizontal'
}
/**
 * @param size : 사이즈
 * @param d : 수직 수평 방향
 */
const Spacing = styled.div<T_Spacing>(({ size = '1rem', d = 'vertical' }) => {
  if (d === 'vertical') {
    return {
      height: size,
    }
  } else if (d === 'horizontal') {
    return {
      width: size,
    }
  }
})

export default Spacing
