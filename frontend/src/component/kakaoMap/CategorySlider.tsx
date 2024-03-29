// Import Swiper React components
// Import Swiper styles
import { memo } from 'react'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

import CategoryItem from './CategoryItem'

/** @jsxImportSource @emotion/react */

function CategorySlider() {
  return (
    <Swiper
      style={{ position: 'absolute', top: '10px', zIndex: '2', width: '100%' }}
      spaceBetween={5}
      slidesPerView={6}
      freeMode={true}
      //   centeredSlides={true}
    >
      <SwiperSlide>
        <CategoryItem />
      </SwiperSlide>
      <SwiperSlide>
        <CategoryItem />
      </SwiperSlide>
      <SwiperSlide>
        <CategoryItem />
      </SwiperSlide>
      <SwiperSlide>
        <CategoryItem />
      </SwiperSlide>
      <SwiperSlide>
        <CategoryItem />
      </SwiperSlide>
      <SwiperSlide>
        <CategoryItem />
      </SwiperSlide>
      <SwiperSlide>
        <CategoryItem />
      </SwiperSlide>
    </Swiper>
  )
}
export default memo(CategorySlider)
