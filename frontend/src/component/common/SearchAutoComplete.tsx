import { css } from '@emotion/react'

import SearchResult from './SearchResult'

import FlexBox from '@component/layout/FlexBox'

const Container = css``
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
