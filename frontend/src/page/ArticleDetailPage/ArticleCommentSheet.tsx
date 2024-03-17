import BottomSheet from '@component/layout/BottomSheet'
import FlexBox from '@component/layout/FlexBox'
import ArticleComments from '@component/pages/ArticleDetailPage/ArticleComments'
import CommentInput from '@component/pages/ArticleDetailPage/CommentInput'

// interface ArticleCommentSheet {}
export default function ArticleCommentSheet() {
  return (
    <BottomSheet title="댓글">
      <FlexBox d="column">
        <ArticleComments />
        <CommentInput />
      </FlexBox>
    </BottomSheet>
  )
}
