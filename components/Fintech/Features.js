"use client";

import React from "react";
import Image from "next/image";

const featuresData = [
  {
    title: "Seamless payments",
    description:
      "Enjoy secure, hassle-free transactions with multi-currency support and instant transfers for global convenience.",
  },
  {
    title: "AI-Powered Financial Insights",
    description:
      "Gain real-time, actionable insights with AI-driven analytics to identify trends and optimize financial decisions.",
  },
  {
    title: "Advanced security",
    description:
      "Protect your data with advanced encryption and robust fraud detection, ensuring compliance with global security standards.",
  },
  {
    title: "Scalability and Flexibility",
    description:
      "Adapt effortlessly to growth with scalable solutions designed to meet the evolving needs of your business.",
  },
];

const Features = () => {
  return (
    <>
      <div className="fintech-features-area pt-100 pb-70">
        <div className="container mw-1320">
          <div className="saas-section-title text-center mx-auto">
            <span className="sub-title2 d-inline-flex align-items-center gap-2">
              <Image
                src="/images/fintech/icon1.png"
                alt="icon1"
                width={14}
                height={16}
              />
              Featured
            </span>
            <h2>
              Explore cutting-edge solutions to drive your{" "}
              <span>financial growth</span>.
            </h2>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="featured-img text-center">
                <Image
                  src="/images/fintech/featured-img.png"
                  alt="featured"
                  width={633}
                  height={636}
                />
              </div>
            </div>

            <div className="col-lg-8">
              <div className="position-relative">
                <div className="row">
                  {featuresData.map((feature, index) => (
                    <div
                      key={index}
                      className="col-sm-12 col-lg-12 col-xl-6"
                    >
                      <div className="fintech-feature-card">
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="fintech-brand-icon d-none d-xxl-block">
                  <Image
                    src="/images/fintech/icon2.png"
                    alt="icon2"
                    width={40}
                    height={50}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
