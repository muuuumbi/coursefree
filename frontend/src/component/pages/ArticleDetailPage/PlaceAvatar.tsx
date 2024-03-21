import img from '@asset/namsan.jfif'
import { Avatar } from '@chakra-ui/react'

import { Stroke } from './Stroke'

import TextBox from '@component/common/TextBox'
import FlexBox from '@component/layout/FlexBox'
import Spacing from '@component/layout/Spacing'

export default function PlaceAvatar({ isSelected, isLast }: any) {
  return (
    <>
      <FlexBox d="column" a="center" j="center">
        <Avatar name="Dan Abrahmov" src={img} borderColor={'green'} />
        <Spacing size="5px" />
        <TextBox
          typography="t8"
          color={isSelected ? 'primary' : 'gray'}
          fontWeight={isSelected && 'bold'}
        >
          남산돈까스
        </TextBox>
      </FlexBox>
      {!isLast && <Stroke />}
    </>
  )
}
