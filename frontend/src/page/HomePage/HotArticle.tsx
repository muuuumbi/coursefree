import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import BottomSheet from '@component/layout/BottomSheet'
import FlexBox from '@component/layout/FlexBox'
import ArticleCard from '@component/pages/HomePage/ArticleCard'

import useBottomSheetState from '@hook/useBottomSheetState'

export default function HotArticle() {
  const { bottomSheetState, onClickBottomSheetHandler } =
    useBottomSheetState(-1)

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
          <ArticleCard onClick={onClickBottomSheetHandler} />
        </SwiperSlide>
        <SwiperSlide>
          <ArticleCard onClick={onClickBottomSheetHandler} />
        </SwiperSlide>
        <SwiperSlide>
          <ArticleCard onClick={onClickBottomSheetHandler} />
        </SwiperSlide>
      </Swiper>
      {bottomSheetState && <BottomSheet title="gigi" height="600px" />}
    </FlexBox>
  )
}
