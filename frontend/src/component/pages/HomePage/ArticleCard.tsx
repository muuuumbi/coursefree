import kiss from '@asset/kiss.jfif'

import TextBox from '@component/common/TextBox'
import BackDrop from '@component/layout/Backdrop'
import Spacing from '@component/layout/Spacing'

import {
  Container,
  Content,
} from '@styled/component/pages/HomePage/ArticleCard'

interface ArticleCard {
  onClick: any
}
export default function ArticleCard({ onClick }: ArticleCard) {
  return (
    <Container
      img={kiss}
      onClick={() => {
        onClick(1)
      }}
    >
      <BackDrop opacity={0.5} />
      <Content>
        <TextBox display="flex" typography="t2" fontWeight="bold" color="white">
          MZ세대 주목!
        </TextBox>

        <TextBox display="flex" typography="t3" fontWeight="bold" color="white">
          남산 돈가스 데이트 추천
        </TextBox>
        <Spacing size="5px" />
        <TextBox display="flex" typography="t6" color="white">
          놀토뭐? course by 역삼동정현규
        </TextBox>
      </Content>
    </Container>
  )
}
