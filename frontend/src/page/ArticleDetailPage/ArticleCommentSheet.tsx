import BottomSheet from '@component/layout/BottomSheet'
import FlexBox from '@component/layout/FlexBox'
import ArticleComments from '@component/pages/ArticleDetailPage/ArticleComments'
import CommentInput from '@component/pages/ArticleDetailPage/CommentInput'

interface ArticleCommentSheet {
  height: any
}
export default function ArticleCommentSheet({ height }: ArticleCommentSheet) {
  return (
    <BottomSheet height={height} title="댓글">
      <FlexBox d="column" h="90%">
        <ArticleComments />
        <CommentInput />
      </FlexBox>
    </BottomSheet>
  )
}
