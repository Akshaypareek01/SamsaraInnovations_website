"use client";

import React from "react";
import Image from "next/image";
import Funfacts from "./Funfacts";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

const testimonialsData = [
  {
    title: "Streamlined and Efficient!",
    quote:
      "From payments to analytics, StartP has streamlined all of our financial processes. The automation tools help us focus on growth while saving both time and money. Highly recommend!",
    user: {
      name: "Nicholson",
      position: "CFO of ABC",
      image: "/images/fintech/user1.jpg",
    },
  },
  {
    title: "Scalable and Future-Proof!",
    quote:
      "StartP platform has been essential to our growth. The scalability of their solutions has allowed us to expand without worrying about outgrowing our tools. It's a reliable partner for the future.",
    user: {
      name: "Oliver Jake",
      position: "React Developer",
      image: "/images/fintech/user2.jpg",
    },
  },
  {
    title: "Simplified and Streamlined!",
    quote:
      "TaskEase has simplified and streamlined our processes like never before. Its user-friendly design and robust integrations have turned complex projects into manageable workflows.",
    user: {
      name: "Connor William",
      position: "Team Lead",
      image: "/images/fintech/user3.jpg",
    },
  },
];

const Testimonials = () => {
  return (
    <>
      <div
        className="fintech-testimonials-area pt-100 pb-70"
        style={{ backgroundImage: "url(/images/fintech/testimonials-bg.png)" }}
      >
        <div className="container mw-1320 position-relative">
          <div className="saas-section-title text-center mx-auto">
            <span className="sub-title2 d-inline-flex align-items-center gap-2">
              <Image
                src="/images/fintech/icon1.png"
                alt="icon1"
                width={14}
                height={16}
              />
              Testimonials
            </span>
            <h2>
              What Our Users Are <span>Saying</span>
            </h2>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <div className="fintech-reviewed-on-clutch">
                <span className="sub-title">REVIEWED ON</span>
                <Image
                  src="/images/fintech/clutch-logo.png"
                  alt="clutch"
                  className="company-logo"
                  width={140}
                  height={40}
                />
                <h1>4.9/5</h1>

                <div className="rating">
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                </div>
                <p>Based on 1K+ reviews</p>
              </div>
            </div>

            <div className="col-lg-8">
              <Swiper
                spaceBetween={25}
                pagination={{
                  clickable: true,
                }}
                autoHeight={true}
                autoplay={{
                  delay: 6000,
                  pauseOnMouseEnter: true,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  1200: {
                    slidesPerView: 2,
                  },
                }}
                modules={[Pagination, Autoplay]}
                className="fintech-testimonials-slider"
              >
                {testimonialsData.map((testimonial, index) => (
                  <SwiperSlide
                    className="fintech-testimonials-item"
                    key={index}
                  >
                    <h3>{testimonial.title}</h3>
                    <p>
                      <q>{testimonial.quote}</q>
                    </p>

                    <div className="user-info d-flex align-items-center justify-content-between gap-3">
                      <div className="user-img d-flex align-items-center gap-3">
                        <div className="flex-shrink-0">
                          <Image
                            src={testimonial.user.image}
                            alt={testimonial.user.name}
                            className="rounded-circle"
                            width={75}
                            height={75}
                          />
                        </div>
                        <div>
                          <h5>{testimonial.user.name}</h5>
                          <p>{testimonial.user.position}</p>
                        </div>
                      </div>

                      <div>
                        <Image
                          src="/images/fintech/quotation-mark.png"
                          alt="quotation mark"
                          className="quotation-mark"
                          width={88}
                          height={72}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* Funfacts */}
          <Funfacts />
        </div>
      </div>
    </>
  );
};

export default Testimonials;
