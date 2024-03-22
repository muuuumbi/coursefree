import { css } from '@emotion/react'
import { Link } from 'react-router-dom'

import Button from '@component/common/Button'
import Input from '@component/common/Input'
import TextBox from '@component/common/TextBox'
import FlexBox from '@component/layout/FlexBox'
import Spacing from '@component/layout/Spacing'

export const BottomFixedButtonStyle = css`
  position: fixed;
  max-width: 450px;
  bottom: 0px;
`
/** @jsxImportSource @emotion/react */
export default function SetNickName() {
  return (
    <>
      <FlexBox p="10px" d="column" w="100%">
        <TextBox typography="t2" fontWeight="bold">
          닉네임을 입력해주세요.
        </TextBox>
        <Spacing size="7px" />
        <TextBox typography="t6" color="gray">
          다른 사용자에게 보여지게 되는 별명입니다.
        </TextBox>
        <Spacing />
        <Input autoFocus placeholder="닉네임을 입력해주세요." />
        <Spacing />
      </FlexBox>

      <Link to="genderAge">
        <Button full css={BottomFixedButtonStyle}>
          확인
        </Button>
      </Link>
    </>
  )
}
