import styled from '@emotion/styled'
import { memo } from 'react'

import TextBox from '@component/common/TextBox'
import TitleBar from '@component/common/TitleBar'
import FlexBox from '@component/layout/FlexBox'

const Container = styled.header`
  width: 100%;
  border-bottom: 1px solid #f3f3f3;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
`

export default memo(function ArticleTitle() {
  return (
    <Container>
      <FlexBox w={'100%'} t="center" h="auto" display="block">
        <TitleBar hasBackPage title="MZ세대 주목! 남산 데이트 코스..." />
        <TextBox typography="t8" textAlign="right" color="pink300">
          맛꿀마 남산 데이트
        </TextBox>
        <TextBox typography="t8" textAlign="right" color="gray">
          Course By 화양동민차장
        </TextBox>
      </FlexBox>
    </Container>
  )
})
