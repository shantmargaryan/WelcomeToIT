"use client"
import { MarqueeContainer, MarqueeItem, MarqueeImage } from "./styled";
import { svgs } from "./svg";
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function InfiniteMarquee() {
    const [isVisible, setIsVisible] = useState(false);
    const handleIntersect = () => {
        setIsVisible(true);
    };

    return (
        <MarqueeContainer>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={30}
                slidesPerView={"auto"}
                loop={true}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                    reverseDirection: false,
                }}
                speed={500}
                direction="horizontal"
                grabCursor={true}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }}
            >
                {svgs.map((item, index) => (
                    <SwiperSlide key={index}>
                        <MarqueeItem>
                            <MarqueeImage
                                src={item.icon}
                                alt="icon"
                                width={100}
                                height={100}
                                priority={true}
                            />
                        </MarqueeItem>
                    </SwiperSlide>
                ))}
            </Swiper>
        </MarqueeContainer>
    );
}
