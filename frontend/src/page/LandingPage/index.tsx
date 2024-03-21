import logo from '@asset/logo_demo.jpg'
import { Image } from '@chakra-ui/react'

import Button from '@component/common/Button'
import TextBox from '@component/common/TextBox'
import FlexBox from '@component/layout/FlexBox'
import Spacing from '@component/layout/Spacing'

/** @jsxImportSource @emotion/react */
export default function LandingPage() {
  return (
    <>
      <FlexBox d="column" p="1.2rem" j="center" a="center">
        <FlexBox w="100%" d="column">
          <TextBox typography="t2" fontWeight="bold">
            데이트는
          </TextBox>
          <TextBox typography="t2" fontWeight="bold">
            <TextBox typography="t2" fontWeight="bold" color="primary">
              코스프리
            </TextBox>
            와 함께.
          </TextBox>
        </FlexBox>
        <Image src={logo} boxSize="300px" margin={'auto'} />
        <TextBox typography="t1" fontWeight="bold" color="pink500">
          CourseFree.
        </TextBox>

        <Spacing size="150px" />
        <Button color="black" bgColor="yellow" full>
          카카오로 시작하기
        </Button>
      </FlexBox>
    </>
  )
}
