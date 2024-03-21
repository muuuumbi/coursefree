import styled from '@emotion/styled'

import BackPageButton from './BackPageButton'
import TextBox from './TextBox'

import FlexBox from '@component/layout/FlexBox'

type TitleBar = {
  hasBackPage?: boolean
  title: string
  hasBottomLine?: boolean
}

const Container = styled.div`
  width: 100%;

  padding: 1.2rem;
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
export default function TitleBar({
  hasBackPage = false,
  title,
  hasBottomLine = false,
}: TitleBar) {
  return (
    <Container
      style={{
        borderBottom: hasBottomLine ? '1px solid var(--primary)' : null,
      }}
    >
      <FlexBox w="100%" a="center" t="left">
        {hasBackPage && <BackPageButton />}
        <TextBox typography="t5" fontWeight="bold">
          {title}
        </TextBox>
      </FlexBox>
    </Container>
  )
}
