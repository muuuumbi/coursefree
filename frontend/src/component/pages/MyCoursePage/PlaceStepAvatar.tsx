import { Avatar } from '@chakra-ui/react'
import { css } from '@emotion/react'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import TextBox from '@component/common/TextBox'
import FlexBox from '@component/layout/FlexBox'

const StepAvatar = css`
  img {
    border-radius: 5px;
    border: 3px solid pink;
    overflow: hidden;
  }
`
/** @jsxImportSource @emotion/react */
export default function PlaceStepAvatar() {
  return (
    <FlexBox a="center" j="center" d="column">
      <Avatar
        src={null}
        bg="lightgray"
        icon={<FontAwesomeIcon icon={faPlus} />}
        css={StepAvatar}
      />
      <TextBox typography="t7">남산돈까스</TextBox>
    </FlexBox>
  )
}
