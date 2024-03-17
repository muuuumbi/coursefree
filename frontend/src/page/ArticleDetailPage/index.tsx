import { memo, useState } from 'react'

import ArticleCommentSheet from './ArticleCommentSheet'
import ArticleFooter from './ArticleFooter'
import ArticleTitle from './ArticleTitle'

import ArticleInfoByPlace from '@page/ArticleDetailPage/ArticleInfoByPlace'
import ArticleUserProfile from '@page/ArticleDetailPage/ArticleUserProfile'

import Section from '@component/layout/Section'

export default memo(function ArticleDetailPage() {
  const [bottomSheetState, setBottomSheetState] = useState(false)
  function bottomSheetHandler() {
    setBottomSheetState(!bottomSheetState)
  }
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
      <ArticleFooter onClick={bottomSheetHandler} />
      {/* BottomSheet */}
      {bottomSheetState && <ArticleCommentSheet handler={bottomSheetHandler} />}
    </>
  )
})
