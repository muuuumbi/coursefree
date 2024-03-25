import { OnBoardingUserInfoContext } from '@context/index'
import { css } from '@emotion/react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '@component/common/Button'
import Input from '@component/common/Input'
import TextBox from '@component/common/TextBox'
import FlexBox from '@component/layout/FlexBox'
import Spacing from '@component/layout/Spacing'

import useInput from '@hook/useInput'

export const BottomFixedButtonStyle = css`
  position: fixed;
  max-width: 450px;
  bottom: 0px;
`
/** @jsxImportSource @emotion/react */
export default function SetNickName() {
  const navigate = useNavigate()
  const { setStep } = useContext(OnBoardingUserInfoContext)
  const { state: name, onChange: onChangeNameHandler } = useInput<string>('')

  async function nicknameValidCheck(name: string) {
    try {
      alert(name)
      // await requestNickNameValidCheck(name)

      // 가능한 닉네임이므로, 스텝 올리고 다음 단계로 이동
      setStep(prev => prev + 1)
      navigate(`./info`)
    } catch (error) {
      alert(error)
    }
  }
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
        <Input
          autoFocus
          placeholder="닉네임을 입력해주세요."
          onChange={onChangeNameHandler}
        />
        <Spacing />
      </FlexBox>

      <Button
        full
        css={BottomFixedButtonStyle}
        onClick={() => {
          nicknameValidCheck(name)
        }}
      >
        확인
      </Button>
    </>
  )
}
