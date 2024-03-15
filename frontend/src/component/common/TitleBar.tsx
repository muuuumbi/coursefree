import styled from '@emotion/styled'

import BackPageButton from './BackPageButton'
import TextBox from './TextBox'

import FlexBox from '@component/layout/FlexBox'

type TitleBar = {
  hasBackPage?: boolean
  title: string
}

const Container = styled.div`
  width: 100%;
  height: 2rem;
  padding: 0.6rem;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  position: relative;
  /* border-bottom: 1px solid #f3f3f3; */
`
/**
 *@param hasBackPage 뒤로가기 기능 유무
 * @param title title 이름
 */
export default function TitleBar({ hasBackPage = false, title }: TitleBar) {
  return (
    <Container>
      <FlexBox w="100%" a="center" j="center">
        {hasBackPage && <BackPageButton left="-40px" top="37%" />}
        <TextBox typography="t5" fontWeight="bold">
          {title}
        </TextBox>
      </FlexBox>
    </Container>
  )
}
