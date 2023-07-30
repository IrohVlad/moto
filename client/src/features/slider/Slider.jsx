import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Keyboard, Mousewheel, Parallax } from 'swiper/modules';
import { Swiper, SwiperSlide} from "swiper/react";

const Slider = ({dataArr, setFunc, first, index}) => {
    return (
        <Swiper
            modules={[Keyboard, Mousewheel, Parallax]}
            spaceBetween={50}
            initialSlide={index}
            // centeredSlides={true}
            slidesPerView={'auto'}
            mousewheel={true}
            centeredSlides
            keyboard
            parallax={true}
            // navigation
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSlideChange={(swiper) => setFunc(swiper.activeIndex)}
            onSwiper={(swiper) => console.log(swiper)}>
            <SwiperSlide style={{filter: 'grayscale(100%)'}} className="slide">
            <img data-swiper-parallax="15%" src={first} alt="" />
            </SwiperSlide>
            {dataArr.map((item) => {
                return <SwiperSlide className="slide">
                    <img data-swiper-parallax="15%" src={item.img} alt="" />
                </SwiperSlide>
            })}
                        
        </Swiper>
    );
};

export default Slider;