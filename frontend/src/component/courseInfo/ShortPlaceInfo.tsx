import kiss from '@asset/kiss.jfif'
import { Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import Button from '@component/common/Button'
import TextBox from '@component/common/TextBox'
import FlexBox from '@component/layout/FlexBox'

interface ShortPlaceInfo {
  hasDeleteButton: boolean
}

export default function ShortPlaceInfo({ hasDeleteButton }: ShortPlaceInfo) {
  return (
    <FlexBox w="100%" p="10px" a="center" j="space-between">
      {/* 컨텐츠 부분 */}
      <FlexBox>
        {/* 가게 이미지 */}
        <Image src={kiss} boxSize="60px" borderRadius="10px" />
        {/* 가게 설명 */}
        <FlexBox d="column" p="10px" h="60px" j="center">
          <TextBox color="pink300" fontWeight="bold" typography="t6">
            <Link to="">밸런스포케</Link>
          </TextBox>
          <TextBox typography="t7">주소 : 서울 강남구 강남대로 94길 75</TextBox>
          <TextBox typography="t7">영업시간 : 06:30 ~ 17:30</TextBox>
        </FlexBox>
      </FlexBox>
      {/* 삭제 버튼 부분 */}
      {hasDeleteButton ? <Button>삭제</Button> : null}
    </FlexBox>
  )
}
