import styled from '@emotion/styled'

import FlexBox from '@component/layout/FlexBox'
import PlaceAvatar from '@component/pages/ArticleDetailPage/PlaceAvatar'

const ArticleNavigationContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: white;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`
export default function ArticleNavigation() {
  return (
    <ArticleNavigationContainer>
      <FlexBox w="100%" j="space-around" a="center" p={'5px 5px'}>
        <PlaceAvatar isSelected />
        <PlaceAvatar />
        <PlaceAvatar />
        <PlaceAvatar />
        <PlaceAvatar isLast />
      </FlexBox>
    </ArticleNavigationContainer>
  )
}
