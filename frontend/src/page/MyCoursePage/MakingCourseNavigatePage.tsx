import { css } from '@emotion/react'
import { Link } from 'react-router-dom'

import Button from '@component/common/Button'
import TextBox from '@component/common/TextBox'
import FlexBox from '@component/layout/FlexBox'

const Container = css`
  width: 350px;
  height: 450px;
  margin: 0 auto;
`
const BigText = css`
  font-size: 120px;
  font-weight: bold;
`
/** @jsxImportSource @emotion/react */
export default function MakingCourseNavigatePage() {
  return (
    <FlexBox a="center" d="column" j="space-around" css={Container}>
      <TextBox css={BigText}>텅..</TextBox>

      <TextBox typography="t2" fontWeight="bold">
        진행중인 데이트가 없어요 ㅠ.ㅠ
      </TextBox>
      <TextBox typography="t4">함께 계획을 짜보아요!</TextBox>

      <FlexBox a="center" j="space-around" w="100%">
        <Link to="/makeCourse">
          <Button>코스 만들기</Button>
        </Link>

        <Link to="/favorite">
          <Button>내가 찜한 코스</Button>
        </Link>
      </FlexBox>
    </FlexBox>
  )
}
