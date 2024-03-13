import { useState } from 'react'

import ArticleFilterNavigation from './ArticleFilterNavigation'
import ArticleGrid from './ArticleGrid'

import Spacing from '@component/layout/Spacing'

import { ArticleViewsContainer } from '@styled/component/pages/HomePage/ArticleViews'

export type ArticleFilterType = 'latest' | 'popular'

export default function ArticleViews() {
  const [filter, setFilter] = useState<ArticleFilterType>('latest')
  function onClickFilterHandler(e) {
    if (filter === 'latest') setFilter('popular')
    else if (filter === 'popular') setFilter('latest')
  }
  return (
    <ArticleViewsContainer>
      <ArticleFilterNavigation filter={filter} onClick={onClickFilterHandler} />
      <Spacing size="1rem" />
      <ArticleGrid />
    </ArticleViewsContainer>
  )
}
