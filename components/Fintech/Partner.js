"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const partnerData = [
  {
    id: 1,
    imageUrl: "/images/fintech/partner1.png",
    altText: "Partner 1",
    width: 152,
    height: 40,
  },
  {
    id: 2,
    imageUrl: "/images/fintech/partner2.png",
    altText: "Partner 2",
    width: 137,
    height: 40,
  },
  {
    id: 3,
    imageUrl: "/images/fintech/partner3.png",
    altText: "Partner 3",
    width: 146,
    height: 40,
  },
  {
    id: 4,
    imageUrl: "/images/fintech/partner4.png",
    altText: "Partner 4",
    width: 154,
    height: 40,
  },
  {
    id: 5,
    imageUrl: "/images/fintech/partner5.png",
    altText: "Partner 5",
    width: 194,
    height: 40,
  },
  {
    id: 6,
    imageUrl: "/images/fintech/partner6.png",
    altText: "Partner 6",
    width: 116,
    height: 40,
  },
  {
    id: 7,
    imageUrl: "/images/fintech/partner2.png",
    altText: "Partner 2",
    width: 127,
    height: 40,
  },
  {
    id: 8,
    imageUrl: "/images/fintech/partner3.png",
    altText: "Partner 3",
    width: 146,
    height: 40,
  },
];

const Partner = () => {
  return (
    <>
      <div className="fintech-partner ptb-100">
        <div className="container mw-1600">
          <h5 className="title">Supported by many companies around the globe</h5>

          <Swiper
            spaceBetween={50}
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
            className="fintech-partner-slider"
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
    </>
  );
};

export default Partner;
