import React, {FC} from "react";
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import {FreeMode} from "swiper";
import {useTypeSelector} from "../hooks/useTypeSelector";


const ImagesCarousel: FC = () => {
    const {carousel} = useTypeSelector(state => state.hotel)

    return (
        <>
            <Swiper
                slidesPerView={3.65}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode]}
                className="mySwiper"
                breakpoints={{
                    320: {
                        slidesPerView: 1.5,
                    },
                    450:{
                        slidesPerView: 2.5,
                    },
                    650: {
                        slidesPerView: 3,
                    },
                    800: {
                        slidesPerView: 3.8,
                    },
                    1000: {
                        slidesPerView: 3.3,
                    },
                    1200: {
                        slidesPerView: 4.65,
                    }
                }}
            >
                {
                    carousel.map((img) =>
                        <SwiperSlide key={img.id}>
                            <img style={{width: '164px', height: '149px', objectFit: 'cover'}} src={img.src} alt=""/>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </>
    );
};

export default ImagesCarousel;