/* eslint-disable */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import ImageWrapper from 'components/ImageWrapper'

// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
SwiperCore.use([Pagination, Navigation]);

const CarouselImages = () => {
	return (
		<>
			<Swiper
				pagination={{
					type: 'fraction',
				}}
				navigation={true}
				className="mySwiper">
				<SwiperSlide>
					{' '}
					<ImageWrapper src="/img/guapu03.jpg" alt="" width={750} height={420} />{' '}  
				</SwiperSlide>
				<SwiperSlide>
					{' '}
					<ImageWrapper src="/img/gua02.jpg" alt="" width={750} height={420} />{' '}  
				</SwiperSlide>
				<SwiperSlide>Slide 3</SwiperSlide>
				<SwiperSlide>Slide 4</SwiperSlide>
				<SwiperSlide>Slide 5</SwiperSlide>
				<SwiperSlide>Slide 6</SwiperSlide>
				<SwiperSlide>Slide 7</SwiperSlide>
				<SwiperSlide>Slide 8</SwiperSlide>
				<SwiperSlide>Slide 9</SwiperSlide>
			</Swiper>
		</>
	);
};

export default CarouselImages;