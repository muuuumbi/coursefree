import { css } from '@emotion/react'

import SearchResult from './SearchResult'

import FlexBox from '@component/layout/FlexBox'

const Container = css`
  border-bottom: 1px solid lightgray;
  padding: 5px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`
/** @jsxImportSource @emotion/react */
export default function SearchAutoComplete() {
  return (
    <FlexBox d="column" w="100%" css={Container}>
      <SearchResult />
      <SearchResult />
      <SearchResult />
      <SearchResult />
      <SearchResult />
    </FlexBox>
  )
}
