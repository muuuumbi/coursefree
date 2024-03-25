import { onBoardingQuestions } from '@data/onBoarding'

import { BottomFixedButtonStyle } from './SetNickName'

import Button from '@component/common/Button'
import TextBox from '@component/common/TextBox'
import FlexBox from '@component/layout/FlexBox'
import Spacing from '@component/layout/Spacing'
import CheckBoxWithText from '@component/pages/OnBoardingPage/SetInfo/CheckBoxWithText'

import useMultiCheckBoxList from '@hook/useMultiCheckBoxList'

interface OnBoardingQuestion {
  text: string
  category: string
}

/** @jsxImportSource @emotion/react */
export default function SetInfo() {
  // const { onBoardingUserInfo, setOnBoardingUserInfo } = useContext(
  //   OnBoardingUserInfoContext,
  // )

  const {
    checkboxStates: categories,
    selectCount,
    onChangeHandler,
  } = useMultiCheckBoxList<OnBoardingQuestion>(onBoardingQuestions, 3)
  return (
    <>
      {/* 텍스트 */}
      <FlexBox p="10px" d="column" w="100%">
        <TextBox typography="t2" fontWeight="bold">
          식사 취향을 알려주세요! <br></br>
          최대 3가지 항목을 고를 수 있어요.
        </TextBox>
        <Spacing size="7px" />
        <TextBox typography="t6" color="gray">
          당신에게 꼭 맞는 데이트 코스를 추천해주고 싶어요.
        </TextBox>
      </FlexBox>

      <Spacing />
      <FlexBox d="column" p="10px">
        {onBoardingQuestions.map((e, i) => {
          const isChecked = categories[i]
          return (
            <>
              <CheckBoxWithText
                key={e.category}
                color={isChecked ? 'primary' : 'gray'}
                onChange={() => {
                  onChangeHandler(i)
                }}
                isChecked={isChecked}
              >
                {e.text}
              </CheckBoxWithText>
              <Spacing />
            </>
          )
        })}
        {selectCount >= 3 && (
          <TextBox color="pink500">최대 3개의 항목을 고를 수 있습니다.</TextBox>
        )}
      </FlexBox>

      <Button css={BottomFixedButtonStyle} full>
        확인
      </Button>
    </>
  )
}
