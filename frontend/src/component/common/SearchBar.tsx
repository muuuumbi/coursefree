import { css } from '@emotion/react'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Input from './Input'

import FlexBox from '@component/layout/FlexBox'

const Container = css`
  padding-bottom: 10px;
`
/** @jsxImportSource @emotion/react */
export default function SearchBar({ placeholder }: any) {
  return (
    <FlexBox w="100%" a="center" css={Container}>
      <Input width="90%" placeholder={placeholder} />
      <FontAwesomeIcon icon={faSearch} />
    </FlexBox>
  )
}
