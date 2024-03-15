import TextBox from '@component/common/TextBox'
import FlexBox from '@component/layout/FlexBox'
import Spacing from '@component/layout/Spacing'

export default function NoCommentMessage() {
  return (
    <>
      <Spacing size="20px" />
      <FlexBox d="column" a="center" j="center">
        <TextBox fontWeight={'bold'} typography="t3">
          아직 댓글이 없습니다.
        </TextBox>
        <TextBox fontWeight={'bold'} typography="t5" color="gray">
          댓글을 남겨보세요.
        </TextBox>
      </FlexBox>
    </>
  )
}
