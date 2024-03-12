import styled from '@emotion/styled'

import FlexBox from '@component/layout/FlexBox'
import Spacing from '@component/layout/Spacing'

import BackPageButton from './BackPageButton'
import TextBox from './TextBox'

type TitleBar = {
  hasBackPage: boolean
  title: string
}

const Container = styled.div`
  width: 100%;
  height: 4rem;
  padding: 1rem;
  font-family: 'IBMPlexSansKR-Regular';
  display: flex;
  align-items: center;
`
/**
 *
 * @param title이름
 */
export default function TitleBar({ hasBackPage = false, title }: TitleBar) {
  return (
    <Container>
      <FlexBox w="100%" h="100%" a="center">
        {hasBackPage && <BackPageButton />}
        <Spacing d="horizontal" size="1rem" />
        <TextBox typography="t4" fontWeight="bold">
          {title}
        </TextBox>
      </FlexBox>
    </Container>
  )
}
