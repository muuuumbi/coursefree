import { css } from '@emotion/react'
import { Station } from '@type/subway'
import { Link } from 'react-router-dom'

import SubwayLineIcon from './SubwayLineIcon'
import TextBox from './TextBox'

import FlexBox from '@component/layout/FlexBox'

const Container = css`
  padding: 20px;
`
type Props = {
  data: Station
}
/** @jsxImportSource @emotion/react */
export default function SearchResult({ data }: Props) {
  return (
    <FlexBox a="center" h="30px" css={Container}>
      <TextBox
        typography="t6"
        onClick={() => {
          sessionStorage.setItem('station', JSON.stringify(data))
        }}
      >
        <Link to="current">{data.stationName}</Link>
      </TextBox>
      <SubwayLineIcon line={data.line[0]}>{data.line[0]}</SubwayLineIcon>
    </FlexBox>
  )
}
