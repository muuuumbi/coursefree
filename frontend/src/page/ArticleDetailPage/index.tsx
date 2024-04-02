import { useState } from 'react'
import { useParams } from 'react-router-dom'

import ArticleCommentSheet from './ArticleCommentSheet'
import ArticleFooter from './ArticleFooter'
import ArticleTitle from './ArticleTitle'

import ArticleInfoByPlace from '@page/ArticleDetailPage/ArticleInfoByPlace'
import ArticleUserProfile from '@page/ArticleDetailPage/ArticleUserProfile'

import FullPageLoading from '@component/common/FullPageLoading'
import Section from '@component/layout/Section'

import { useArticleDetailQuery } from '@hook/ReactQuery/useArticleDetailQuery'

export default function ArticleDetailPage() {
  const { id } = useParams()
  const [bottomSheetState, setBottomSheetState] = useState(false)
  const { data, isLoading } = useArticleDetailQuery(parseInt(id))
  function bottomSheetHandler() {
    setBottomSheetState(!bottomSheetState)
  }
  if (isLoading) return <FullPageLoading />

  return (
    <>
      <Section>
        {/* titlerBar */}
        <ArticleTitle title={data.postTitle} />
        {/* userProfile */}
        <ArticleUserProfile
          member={{ image: data.memberImageUrl, name: data.memberNickname }}
        />
        {/* 게시물 정보 */}
        <ArticleInfoByPlace placeInfo={data.postContentInfoList} />
      </Section>
      <ArticleFooter onClick={bottomSheetHandler} />
      {/* BottomSheet */}
      {bottomSheetState && <ArticleCommentSheet handler={bottomSheetHandler} />}
    </>
  )
}
