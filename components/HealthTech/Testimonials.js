"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

const testimonialsData = {
  sectionTitle: "Testimonials",
  subtitle: "Testimonials",
  icon: "/images/fintech/icon1.png",
  reviews: [
    {
      text: "Our clinic's workflow has improved tremendously since we started using this platform. The telemedicine feature alone has saved us countless hours and brought convenience to our patients.",
      name: "Robert Nicholson",
      position: "CFO of FinServ Solutions",
    },
    {
      text: "The AI-powered diagnostics have made it easier for us to identify issues faster. It has revolutionized the way we approach patient care.",
      name: "Jason Smith",
      position: "CTO of HealthTech Innovators",
    },
    {
      text: "Their robust data security gives us the confidence to handle sensitive patient information without concerns. Highly recommended!",
      name: "Emma Johnson",
      position: "Healthcare IT Manager",
    },
  ],
  userImages: [
    {
      src: "/images/health-tech/user1.png",
      className: "ht-user1",
      width: 200,
      height: 200,
    },
    {
      src: "/images/health-tech/user2.png",
      className: "ht-user2",
      width: 88,
      height: 88,
    },
    {
      src: "/images/health-tech/user3.png",
      className: "ht-user3",
      width: 112,
      height: 122,
    },
    {
      src: "/images/health-tech/user4.png",
      className: "ht-user4",
      width: 200,
      height: 200,
    },
  ],
};

const Testimonials = () => {
  const { sectionTitle, subtitle, icon, reviews, userImages } = testimonialsData;

  return (
    <>
      <div className="health-tech-testimonials-area pb-100">
        <div className="container">
          <div className="saas-section-title text-center mx-auto">
            <span className="sub-title2 d-inline-flex align-items-center gap-2 text-uppercase">
              <Image src={icon} alt="icon" width={14} height={16} />
              {subtitle}
            </span>
            <h2>{sectionTitle}</h2>
          </div>

          <div className="health-tech-testimonials-content position-relative">
            <Swiper
              slidesPerView={1}
              autoplay={{
                delay: 6000,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Autoplay]}
              className="health-tech-testimonials-slider"
            >
              {reviews.map((review, index) => (
                <SwiperSlide key={index}>
                  <div className="health-tech-testimonials-item text-center">
                    <Image
                      src="/images/health-tech/quotation-mark.png"
                      alt="quotation mark"
                      className="quotation-mark"
                      width={88}
                      height={72}
                    />
                    <p>
                      <q>{review.text}</q>
                    </p>
                    <div className="user-info">
                      <h5>{review.name}</h5>
                      <p>{review.position}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Images */}
            {userImages.map((image, index) => (
              <Image
                key={index}
                src={image.src}
                alt={`user${index + 1}`}
                className={image.className}
                width={image.width}
                height={image.height}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
