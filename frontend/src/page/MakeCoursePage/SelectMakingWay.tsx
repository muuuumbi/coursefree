import heart from '@asset/kiss.jfif'
import { Avatar } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import TextBox from '@component/common/TextBox'
import TitleBar from '@component/common/TitleBar'
import FlexBox from '@component/layout/FlexBox'

export default function SelectMakingWay() {
  return (
    <>
      <TitleBar hasBackPage title="코스 만들기" />
      <FlexBox d="column" h="100%" j="center">
        <Link to="./recommend">
          <FlexBox a="center" t="left">
            <Avatar boxSize="150px" src={heart} />
            <TextBox typography="t1" fontWeight="bold">
              추천 받기
            </TextBox>
          </FlexBox>
        </Link>
        <Link to="./selfMake">
          <FlexBox a="center" t="left">
            <Avatar boxSize="150px" src={heart} />
            <TextBox typography="t1" fontWeight="bold">
              직접 만들기
            </TextBox>
          </FlexBox>
        </Link>
      </FlexBox>
    </>
  )
}
