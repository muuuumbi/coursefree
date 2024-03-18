import { css } from '@emotion/react'

import FlexBox from '@component/layout/FlexBox'

import { subwayColorMap } from '@style/subwayColorMap'

const Container = css`
  border-radius: 20px;
  font-size: 12px;
`
type Props = {
  children: string
  line: string
}

/** @jsxImportSource @emotion/react */
export default function SubwayLineIcon({ children, line }: Props) {
  return (
    <FlexBox
      a="center"
      j="center"
      p="10px"
      css={Container}
      style={{ backgroundColor: subwayColorMap[line] }}
    >
      {children}
    </FlexBox>
  )
}
