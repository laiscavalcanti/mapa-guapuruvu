/* eslint-disable */
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Navigation } from 'swiper'
import ImageWrapper from 'components/ImageWrapper'

// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
SwiperCore.use([Pagination, Navigation])

const CarouselImages = () => {
  return (
    <>
      <Swiper
        pagination={{
          type: 'fraction'
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          {' '}
          <ImageWrapper
            src="/img/img-capa/guapu_carlos_gomes_tronco.jpg"
            alt=""
            width={750}
            height={420}
          />{' '}
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <ImageWrapper
            src="/img/img-capa/guapu_desconhecido.jpg"
            alt=""
            width={750}
            height={420}
          />{' '}
        </SwiperSlide>
        <SwiperSlide>
          <ImageWrapper
            src="/img/img-capa/guapu_fabricio_pillar.jpg"
            alt=""
            width={750}
            height={420}
          />{' '}
        </SwiperSlide>
        <SwiperSlide>
          <ImageWrapper
            src="/img/img-capa/guapu_germano_petersen_02.jpg"
            alt=""
            width={750}
            height={420}
          />{' '}
        </SwiperSlide>
        <SwiperSlide>
          <ImageWrapper
            src="/img/img-capa/guapu_pedro_ivo_01.jpg"
            alt=""
            width={750}
            height={420}
          />{' '}
        </SwiperSlide>
        <SwiperSlide>
          <ImageWrapper
            src="/img/img-capa/guapu_praca_bela_vista.jpg"
            alt=""
            width={750}
            height={420}
          />{' '}
        </SwiperSlide>
        <SwiperSlide>
          <ImageWrapper
            src="/img/img-capa/guapu_fabricio_pillar.jpg"
            alt=""
            width={750}
            height={420}
          />{' '}
        </SwiperSlide>
        <SwiperSlide>
          <ImageWrapper
            src="/img/img-capa/guapu_rua_plinio_tronco_copas.jpg"
            alt=""
            width={750}
            height={420}
          />{' '}
        </SwiperSlide>
        <SwiperSlide>
          <ImageWrapper
            src="/img/img-capa/guapu_carlos.jpg"
            alt=""
            width={750}
            height={420}
          />{' '}
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default CarouselImages
