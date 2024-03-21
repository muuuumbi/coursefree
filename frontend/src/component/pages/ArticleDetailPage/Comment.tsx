import { Avatar } from '@chakra-ui/react'

import TextBox from '@component/common/TextBox'
import FlexBox from '@component/layout/FlexBox'

export default function Comment() {
  return (
    <div>
      <FlexBox w="100%" p="10px">
        {/* userprofileimage */}
        <FlexBox d="column">
          <Avatar name="Dan Abrahmov" size="sm" />
        </FlexBox>
        {/* userName */}
        <FlexBox d="column" p={'0px 5px'}>
          <TextBox typography="t8" fontWeight="bold">
            역삼동정현규
          </TextBox>
          <TextBox typography="t8">재미있어보입니다.</TextBox>
        </FlexBox>

        {/* userId and comment */}
      </FlexBox>
    </div>
  )
}
