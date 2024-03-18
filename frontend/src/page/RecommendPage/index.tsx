import SearchAutoComplete from '@component/common/SearchAutoComplete'
import SearchBar from '@component/common/SearchBar'
import TitleBar from '@component/common/TitleBar'
import Spacing from '@component/layout/Spacing'

export default function RecommendPage() {
  return (
    <>
      <TitleBar hasBackPage title="추천 받기" />
      <Spacing size="20px" />
      <SearchBar placeholder="지하철 역을 입력해주세요." />
      <SearchAutoComplete />
    </>
  )
}
