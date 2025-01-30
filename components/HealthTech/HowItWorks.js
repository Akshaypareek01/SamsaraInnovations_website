"use client";

import React from "react";
import Image from "next/image";

const stepsData = [
  {
    id: 1,
    image: "/images/health-tech/step1.png",
    number: "1",
    title: "Sign Up",
    description:
      "Sign up quickly and unlock access to cutting-edge healthcare solutions for better patient care.",
  },
  {
    id: 2,
    image: "/images/health-tech/step2.png",
    number: "2",
    title: "Integrate Your System",
    description:
      "Seamlessly integrate your existing systems to create a unified and efficient healthcare workflow.",
  },
  {
    id: 3,
    image: "/images/health-tech/step3.png",
    number: "3",
    title: "Start Delivering Better Care",
    description:
      "Begin providing enhanced, patient-focused care with our innovative healthcare tools and solutions.",
  },
];

const HowItWorks = () => {
  return (
    <>
      <div className="health-tech-how-it-work-area pt-100 pb-70">
        <div className="container mw-1320">
          <div className="saas-section-title text-center mw-780 mx-auto">
            <span className="sub-title2 d-inline-flex align-items-center gap-2 text-uppercase">
              <Image
                src="/images/fintech/icon1.png"
                alt="icon1"
                width={14}
                height={16}
              />
              How It Works
            </span>
            <h2>
              Experience seamless <span>healthcare solutions</span> in just a
              few simple steps
            </h2>
          </div>

          <div className="row justify-content-center">
            {stepsData.map((step) => (
              <div key={step.id} className="col-md-6 col-lg-4 item">
                <div className="health-tech-how-it-work-card text-center">
                  <div className="image mx-auto">
                    <Image
                      src={step.image}
                      alt={`step${step.number}`}
                      width={172}
                      height={175}
                    />
                  </div>
                  <div className="content">
                    <h2 className="number">{step.number}</h2>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>

                  <Image
                    src="/images/health-tech/step-shape.png"
                    alt="step-shape"
                    className="step-shape"
                    width={282}
                    height={180}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
