import { Avatar } from '@chakra-ui/react'
import styled from '@emotion/styled'

import Input from '@component/common/Input'
import TextBox from '@component/common/TextBox'

const Container = styled.div`
  width: 100%;
  /* background-color: blue; */
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-around;
  padding: 5px;
  bottom: 0px; // 높이의 100% 만큼 마이너스
  border-top: 1px solid #f3f3f3;
  background-color: white;
  height: 10%;
`

export default function CommentInput() {
  // alert(window.innerHeight)
  return (
    <Container
      onClick={e => {
        e.stopPropagation()
      }}
    >
      <Avatar size="sm" />
      <Input width="80%" placeholder="댓글을 입력하세요." />
      <TextBox typography="t6" color="primary" fontWeight={'bold'}>
        등록
      </TextBox>
    </Container>
  )
}
