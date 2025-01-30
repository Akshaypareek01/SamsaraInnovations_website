"use client";

import React from "react";
import Funfact from "../Funfact";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const feedbacksData = [
  {
    id: 1,
    title: "Game-Changer for Our Team!",
    description:
      "StartP has been a game-changer for our team, transforming how we manage workflows and stay organized. The seamless integrations and user-friendly dashboard make collaboration effortless. It’s boosted our productivity and saved us countless hours!",
    user: {
      name: "Robert Nicholson",
      role: "Project Manager",
      imageUrl: "/images/saas/user1.jpg",
    },
    quotationImageUrl: "/images/saas/quotation-mark.png",
  },
  {
    id: 2,
    title: "Revolutionized Our Workflow!",
    description:
      "WorkFlowPro has revolutionized the way we handle our tasks and projects. The intuitive interface and powerful tools have made coordination smoother than ever. We’ve seen a remarkable improvement in efficiency and time management!",
    user: {
      name: "Oliver Jake",
      role: "Team Lead",
      imageUrl: "/images/saas/user2.jpg",
    },
    quotationImageUrl: "/images/saas/quotation-mark.png",
  },
  {
    id: 3,
    title: "Simplified and Streamlined!",
    description:
      "TaskEase has simplified and streamlined our processes like never before. Its user-friendly design and robust integrations have turned complex projects into manageable workflows. A must-have for any team! We’ve achieved new levels of productivity and communication!",
    user: {
      name: "Connor William",
      role: "Team Lead",
      imageUrl: "/images/saas/user3.jpg",
    },
    quotationImageUrl: "/images/saas/quotation-mark.png",
  },
];

const Feedbacks = () => {
  return (
    <>
      <div className="saas-feedback-area pt-100 pb-70">
        <div className="container mw-1320 position-relative">
          <div className="saas-section-title text-center mx-auto">
            <h2>
              What Our Users Are <span>Saying</span>
            </h2>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <div className="saas-reviewed-on-clutch">
                <span className="sub-title">REVIEWED ON</span>
                <Image
                  src="/images/saas/clutch-logo.png"
                  alt="clutch"
                  className="company-logo"
                  width={142}
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
                slidesPerView={1}
                pagination={{
                  clickable: true,
                }}
                autoHeight={true}
                autoplay={{
                  delay: 6000,
                  pauseOnMouseEnter: true,
                }}
                modules={[Pagination, Autoplay]}
                className="saas-feedback-slider"
              >
                {feedbacksData.map((feedback) => (
                  <SwiperSlide key={feedback.id} className="saas-feedback-item">
                    <h3>{feedback.title}</h3>
                    <p>{feedback.description}</p>

                    <div className="user-info d-flex align-items-center justify-content-between gap-3">
                      <div className="user-img d-flex align-items-center gap-3">
                        <div className="flex-shrink-0">
                          <Image
                            src={feedback.user.imageUrl}
                            alt={feedback.user.name}
                            className="rounded-circle"
                            width={75}
                            height={75}
                          />
                        </div>
                        <div>
                          <h5>{feedback.user.name}</h5>
                          <p>{feedback.user.role}</p>
                        </div>
                      </div>

                      <div>
                        <Image
                          src={feedback.quotationImageUrl}
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

          {/* Funfact */}
          <Funfact />
        </div>
      </div>
    </>
  );
};

export default Feedbacks;
