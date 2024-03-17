import { css } from '@emotion/react'

import Comment from './Comment'
import NoCommentMessage from './NoCommentMessage'

import FlexBox from '@component/layout/FlexBox'

const ArticleCommentBox = css`
  overflow-y: scroll;
  height: 500px;
  padding-bottom: 20px;
`
/** @jsxImportSource @emotion/react */
export default function ArticleComments() {
  const dummy = [1, 2, 3, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  // dummy = []
  return (
    <FlexBox a="center" d="column" css={ArticleCommentBox}>
      {dummy.length != 0 ? (
        dummy.map((_, i) => <Comment key={i} />)
      ) : (
        <NoCommentMessage />
      )}
    </FlexBox>
  )
}
