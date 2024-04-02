import { css } from '@emotion/react'
import { Station } from '@type/subway'

import SearchResult from './SearchResult'

import FlexBox from '@component/layout/FlexBox'

const Container = css`
  border-bottom: 1px solid lightgray;
  padding: 5px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`
type Props = {
  stationList: Station[]
}
/** @jsxImportSource @emotion/react */
export default function SearchAutoComplete({ stationList }: Props) {
  return (
    <FlexBox d="column" w="100%" css={Container} bgColor="grey">
      {stationList.map(station => {
        return <SearchResult data={station} />
      })}
    </FlexBox>
  )
}
