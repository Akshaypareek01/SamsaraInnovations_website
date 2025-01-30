"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Service data array
const services = [
  {
    id: 1,
    title: "Telemedicine Services",
    description:
      "Empower healthcare providers with secure, real-time virtual consultations, enhancing accessibility and patient satisfaction.",
    image: "/images/health-tech/service1.jpg",
    link: "/health-tech-service-details",
  },
  {
    id: 2,
    title: "AI-Driven Diagnostics",
    description:
      "Utilizing cutting-edge AI tools, medical professionals can expedite the diagnostic process and achieve greater accuracy.",
    image: "/images/health-tech/service2.jpg",
    link: "/health-tech-service-details",
  },
  {
    id: 3,
    title: "Patient Management Solutions",
    description:
      "Streamline scheduling, records, and communication with intuitive patient management tools.",
    image: "/images/health-tech/service3.jpg",
    link: "/health-tech-service-details",
  },
  {
    id: 4,
    title: "Telemedicine Services",
    description:
      "Empower healthcare providers with secure, real-time virtual consultations, enhancing accessibility and patient satisfaction.",
    image: "/images/health-tech/service1.jpg",
    link: "/health-tech-service-details",
  },
  {
    id: 5,
    title: "AI-Driven Diagnostics",
    description:
      "Utilizing cutting-edge AI tools, medical professionals can expedite the diagnostic process and achieve greater accuracy.",
    image: "/images/health-tech/service2.jpg",
    link: "/health-tech-service-details",
  },
];

const Services = () => {
  return (
    <>
      <div className="health-tech-services-area pt-100 mx-auto">
        <div className="container position-relative mw-1320">
          <div className="saas-section-title text-center mw-780 mx-auto">
            <span className="sub-title2 d-inline-flex align-items-center gap-2 text-uppercase">
              <Image
                src="/images/fintech/icon1.png"
                alt="icon1"
                width={14}
                height={16}
              />
              Services
            </span>
            <h2>
              Revolutionizing healthcare with cutting-edge{" "}
              <span>HealthTech services</span>
            </h2>
          </div>

          <Swiper
            spaceBetween={25}
            autoplay={{
              delay: 6000,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="health-tech-services-slider"
          >
            {services.map((service) => (
              <SwiperSlide
                key={service.id}
                className="health-tech-services-card"
              >
                <div className="image">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={606}
                    height={257}
                  />
                </div>

                <div className="content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link href={service.link} className="read-more">
                    View Details <i className="bx bx-right-arrow-alt"></i>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Services;
