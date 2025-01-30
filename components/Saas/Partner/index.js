"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const partnerData = [
  {
    id: 1,
    imageUrl: "/images/saas/partner1.png",
    altText: "Partner 1",
    width: 190,
    height: 50,
  },
  {
    id: 2,
    imageUrl: "/images/saas/partner2.png",
    altText: "Partner 2",
    width: 170,
    height: 50,
  },
  {
    id: 3,
    imageUrl: "/images/saas/partner3.png",
    altText: "Partner 3",
    width: 184,
    height: 50,
  },
  {
    id: 4,
    imageUrl: "/images/saas/partner4.png",
    altText: "Partner 4",
    width: 190,
    height: 50,
  },
  {
    id: 5,
    imageUrl: "/images/saas/partner5.png",
    altText: "Partner 5",
    width: 243,
    height: 50,
  },
  {
    id: 6,
    imageUrl: "/images/saas/partner6.png",
    altText: "Partner 6",
    width: 272,
    height: 50,
  },
  {
    id: 7,
    imageUrl: "/images/saas/partner2.png",
    altText: "Partner 2",
    width: 170,
    height: 50,
  },
  {
    id: 8,
    imageUrl: "/images/saas/partner3.png",
    altText: "Partner 3",
    width: 184,
    height: 50,
  },
];

const Partner = () => {
  return (
    <div className="saas-partner ptb-100">
      <div className="container-fluid">
        <h5 className="title">Trusted by thousands of industry leaders</h5>

        <Swiper
          spaceBetween={30}
          autoplay={{
            delay: 6000,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            300: {
              slidesPerView: 2,
            },
            500: {
              slidesPerView: 3,
            },
            992: {
              slidesPerView: 4,
            },
            1400: {
              slidesPerView: 6,
            },
            1600: {
              slidesPerView: 7,
            },
          }}
          modules={[Autoplay]}
          className="saas-partner-slider"
        >
          {partnerData.map((partner) => (
            <SwiperSlide key={partner.id} className="item">
              <Image
                src={partner.imageUrl}
                alt={partner.altText}
                width={partner.width}
                height={partner.height}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Partner;
