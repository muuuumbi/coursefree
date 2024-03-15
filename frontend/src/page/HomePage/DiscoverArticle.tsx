import TextBox from '@component/common/TextBox'
import Spacing from '@component/layout/Spacing'
import ArticleViews from '@component/pages/HomePage/ArticleViews'
import TopFiveCourseCarousel from '@component/pages/HomePage/TopFiveCourseCarousel'

export default function DiscoverArticle() {
  return (
    <>
      {/* 지역 선택 selectBar */}
      {/* <SelectLocationButton
        location={location}
        onClick={onClickLocationHandler}
      /> */}

      {/* TOP5 코스 캐러셀 */}
      <Spacing size="10px" />
      <TextBox
        display="flex"
        fontWeight="bold"
        textAlign="center"
        typography="t6"
      >
        <Spacing size="10px" d="horizontal" />
        전국 데이트 코스 TOP 5❣
      </TextBox>
      <Spacing size="5px" />
      <TopFiveCourseCarousel />
      {/* 최신순, 조회순 게시글 조회 */}
      <ArticleViews />
    </>
  )
}
