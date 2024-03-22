import { Circle } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import { BottomFixedButtonStyle } from './SetNickName'

import Button from '@component/common/Button'
import TextBox from '@component/common/TextBox'
import FlexBox from '@component/layout/FlexBox'
import Spacing from '@component/layout/Spacing'

/** @jsxImportSource @emotion/react */
export default function SetGenderAge() {
  return (
    <>
      {/* 텍스트 */}
      <FlexBox p="10px" d="column" w="100%">
        <TextBox typography="t2" fontWeight="bold">
          성별, 연령대를 알려주세요.
        </TextBox>
        <Spacing size="7px" />
        <TextBox typography="t6" color="gray">
          당신에게 꼭 맞는 데이트 코스를 추천해주고 싶어요.
        </TextBox>
      </FlexBox>
      {/* 성별 선택 */}
      <FlexBox p="10px" w="100%">
        <Circle />
        <Circle />
      </FlexBox>

      {/* 연령대 선택 */}
      <Link to="./genderAge">
        <Button css={BottomFixedButtonStyle} full>
          확인
        </Button>
      </Link>
    </>
  )
}
