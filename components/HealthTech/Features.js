"use client";

import React from "react";
import Image from "next/image";

const featuresData = [
  {
    icon: "/images/health-tech/icon1.png",
    title: "Telemedicine",
    description:
      "Deliver secure virtual consultations, improving accessibility and convenience for patients and providers.",
    aosDelay: "100",
  },
  {
    icon: "/images/health-tech/icon2.png",
    title: "AI-Powered Diagnostics",
    description:
      "Enhance accuracy and speed of diagnoses with advanced artificial intelligence algorithms.",
    aosDelay: "200",
  },
  {
    icon: "/images/health-tech/icon3.png",
    title: "Advanced Data Security",
    description:
      "Safeguard sensitive health data with state-of-the-art encryption and full regulatory compliance.",
    aosDelay: "300",
  },
];

const Features = () => {
  return (
    <div className="health-tech-features-area pt-100 pb-70">
      <div className="container mw-1320">
        <div className="saas-section-title text-center mx-auto">
          <span className="sub-title2 d-inline-flex align-items-center gap-2 text-uppercase">
            <Image
              src="/images/fintech/icon1.png"
              alt="icon1"
              width={14}
              height={16}
            />
            Featured
          </span>
          <h2>
            Revolutionary <span>Features</span> for modern healthcare
          </h2>
        </div>

        <div className="row align-items-center justify-content-center">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="col-md-6 col-lg-4 item"
              data-aos="fade-up"
              data-aos-delay={feature.aosDelay}
              data-aos-duration="700"
              data-aos-once="true"
            >
              <div className="health-tech-feature-card text-center">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={100}
                  height={100}
                />
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
