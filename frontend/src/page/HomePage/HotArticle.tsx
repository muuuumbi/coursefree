import { useState } from 'react'
import { useRecoilState } from 'recoil'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import BottomSheet from '@component/layout/BottomSheet'
import FlexBox from '@component/layout/FlexBox'
import ArticleCard from '@component/pages/HomePage/ArticleCard'

import { bottomSheetShowState } from '@recoil/bottomSheetAtom'

export default function HotArticle() {
  const [bottomSheetState, setBottomSheetState] =
    useRecoilState(bottomSheetShowState)

  const [requestId, setRequestId] = useState(-1)

  function onClickCardHandler(id: number) {
    setBottomSheetState(!bottomSheetState)
    setRequestId(id)
  }

  return (
    <FlexBox h="90%">
      <Swiper
        modules={[Pagination]}
        spaceBetween={5}
        pagination={{ clickable: true, dynamicBullets: true }}
        slidesPerView={1}
        centeredSlides={true}
      >
        <SwiperSlide>
          <ArticleCard onClick={onClickCardHandler} />
        </SwiperSlide>
        <SwiperSlide>
          <ArticleCard onClick={onClickCardHandler} />
        </SwiperSlide>
        <SwiperSlide>
          <ArticleCard onClick={onClickCardHandler} />
        </SwiperSlide>
        <SwiperSlide>
          <ArticleCard onClick={onClickCardHandler} />
        </SwiperSlide>
        <SwiperSlide>
          <ArticleCard onClick={onClickCardHandler} />
        </SwiperSlide>
        <SwiperSlide>
          <ArticleCard onClick={onClickCardHandler} />
        </SwiperSlide>
      </Swiper>
      {bottomSheetState && <BottomSheet height="600px" data={requestId} />}
    </FlexBox>
  )
}
