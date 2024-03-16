import kiss from '@asset/kiss.jfif'
import { Image } from '@chakra-ui/react'
import { memo } from 'react'

import ArticleNavigation from './ArticleNavigation'

import TextBox from '@component/common/TextBox'
import FlexBox from '@component/layout/FlexBox'

export default memo(function ArticleInfoByPlace() {
  return (
    <>
      <ArticleNavigation />
      <FlexBox d="column" w={'100%'}>
        {/* image */}
        <Image src={kiss} width={'100%'} height={'300px'} />
        {/* content */}
        <TextBox
          textAlign="left"
          fontWeight="bold"
          typography="t4"
          padding={'10px 10px'}
        >
          남산 끝자락에 위치한 깔끔한 돈까스😀
        </TextBox>
        <TextBox
          textAlign="left"
          typography="t5"
          color="gray"
          padding={'0px 10px'}
          display="flex"
        >
          삼성동쭈꾸삼성동쭈꾸삼성동쭈꾸삼성동쭈꾸삼성동쭈꾸삼성동쭈꾸삼성동쭈꾸삼성동쭈꾸
          삼성동쭈꾸삼성동쭈꾸삼성동쭈꾸삼성동쭈꾸삼성동쭈꾸삼성동쭈꾸삼성동쭈꾸삼성동쭈꾸
          삼성동쭈꾸삼성동쭈꾸삼성동쭈꾸삼성동쭈꾸삼성동쭈꾸삼성동쭈꾸삼성동쭈꾸삼성동쭈꾸
          삼성동쭈꾸삼성동쭈꾸삼성동쭈꾸삼성동쭈꾸삼성동쭈꾸삼성동쭈꾸삼성동쭈꾸삼성동쭈꾸
          삼성동쭈꾸삼성동쭈꾸삼성동쭈꾸삼성동쭈꾸삼성동쭈꾸삼성동쭈꾸삼성동쭈꾸삼성동쭈꾸
          삼성동쭈꾸삼성동쭈꾸삼성동쭈꾸삼성동쭈꾸삼성동쭈꾸삼성동쭈꾸삼성동쭈꾸삼성동쭈꾸
          마지막입니다
        </TextBox>
      </FlexBox>
    </>
  )
})
