import SearchAutoComplete from '@component/common/SearchAutoComplete'
import SearchBar from '@component/common/SearchBar'

export default function RecommendSearch() {
  return (
    <>
      <SearchBar placeholder="지하철 역을 입력해주세요." />
      <SearchAutoComplete />
    </>
  )
}
