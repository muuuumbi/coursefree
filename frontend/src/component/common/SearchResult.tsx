import { css } from '@emotion/react'

import SubwayLineIcon from './SubwayLineIcon'
import TextBox from './TextBox'

import FlexBox from '@component/layout/FlexBox'

const Container = css`
  padding: 20px;
`
/** @jsxImportSource @emotion/react */
export default function SearchResult() {
  return (
    <FlexBox a="center" h="30px" css={Container}>
      <TextBox typography="t6">안산</TextBox>
      <SubwayLineIcon line="7">7</SubwayLineIcon>
    </FlexBox>
  )
}
