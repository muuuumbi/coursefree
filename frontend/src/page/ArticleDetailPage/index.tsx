import ArticleCommentSheet from './ArticleCommentSheet'
import ArticleFooter from './ArticleFooter'
import ArticleTitle from './ArticleTitle'

import ArticleInfoByPlace from '@page/ArticleDetailPage/ArticleInfoByPlace'
import ArticleUserProfile from '@page/ArticleDetailPage/ArticleUserProfile'

import Section from '@component/layout/Section'

import useBottomSheetState from '@hook/useBottomSheetState'

export default function ArticleDetailPage() {
  const { bottomSheetState, onClickBottomSheetHandler, requestId } =
    useBottomSheetState(1)
  return (
    <>
      <Section>
        {/* titlerBar */}
        <ArticleTitle />
        {/* userProfile */}
        <ArticleUserProfile />
        {/* 게시물 정보 */}
        <ArticleInfoByPlace />
      </Section>
      <ArticleFooter onClick={onClickBottomSheetHandler} id={requestId} />
      {/* BottomSheet */}
      {bottomSheetState && <ArticleCommentSheet height="97%" />}
    </>
  )
}
