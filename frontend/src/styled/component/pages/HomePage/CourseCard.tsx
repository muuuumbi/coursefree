import styled from '@emotion/styled'

import TextBox from '@component/common/TextBox'

interface T_CourseCardContainer {
  img: string
}
export const CourseCardContainer = styled.div<T_CourseCardContainer>(
  {
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  ({ img }) => ({
    backgroundImage: `url(${img})`,
  }),
)
export const CourseCardTitle = styled(TextBox)`
  color: white;
  position: absolute;
  padding: 5px;
  bottom: 15px;
`
export const CourseCardWriter = styled(TextBox)`
  position: absolute;
  padding: 5px;
  bottom: 0px;
`
