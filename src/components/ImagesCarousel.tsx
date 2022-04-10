import React, {FC} from "react";
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import {FreeMode} from "swiper";
import {useTypeSelector} from "../hooks/useTypeSelector";


const ImagesCarousel:FC = () => {
    const {carousel} = useTypeSelector(state => state.hotel)

    return (
        <>
            <Swiper
                slidesPerView={3.5}
                spaceBetween={12}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode]}
                className="mySwiper"
            >
                {
                    carousel.map((img) =>
                    <SwiperSlide key={img.id}>
                        <img src={img.src} alt=""/>
                    </SwiperSlide>
                    )
                }
            </Swiper>
        </>
    );
};

export default ImagesCarousel;