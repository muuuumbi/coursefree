import kiss from '@asset/kiss.jfif'
import { Image } from '@chakra-ui/react'

import TextBox from '@component/common/TextBox'
import FlexBox from '@component/layout/FlexBox'
import Spacing from '@component/layout/Spacing'

export default function ArticleSmallCard() {
  return (
    <FlexBox d="column">
      <Image borderRadius="10px" boxSize="100%" src={kiss} alt="Dan Abramov" />
      <Spacing size="10px" />
      <TextBox textAlign="left" fontWeight="bold" typography="t6">
        편안하게 즐기는 남대문 호캉스 공유😀
      </TextBox>
      <TextBox textAlign="left" typography="t7" color="gray">
        삼성동쭈꾸
      </TextBox>
    </FlexBox>
  )
}
