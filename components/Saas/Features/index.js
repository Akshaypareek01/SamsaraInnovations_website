"use client";

import React from "react";
import Image from "next/image";

const featuresData = [
  {
    id: 1,
    title: "Intuitive Dashboard",
    description: "Visualize and manage your data effortlessly with our clean and intuitive dashboard.",
    imageUrl: "/images/saas/feature1.png",
    delay: 100,
  },
  {
    id: 2,
    title: "Seamless Integrations",
    description: "Connect effortlessly with your favorite tools for a unified and streamlined workflow.",
    imageUrl: "/images/saas/feature2.png",
    delay: 200,
  },
  {
    id: 3,
    title: "Advanced Analytics",
    description: "Gain actionable insights with real-time data and customizable reporting tools.",
    imageUrl: "/images/saas/feature3.png",
    delay: 300,
  },
  {
    id: 4,
    title: "Scalable Solutions",
    description: "Adapt and grow with flexible features designed to scale alongside your business.",
    imageUrl: "/images/saas/feature4.png",
    delay: 400,
  },
];

const Features = () => {
  return (
    <>
      <div className="saas-features-area pb-70">
        <div className="container mw-1320">
          <div className="saas-section-title text-center mx-auto">
            <h2>
              Empowering You with Cutting <span>Edge Features</span>
            </h2>
          </div>

          <div className="row justify-content-center">
            {featuresData.map((feature) => (
              <div
                key={feature.id}
                className="col-sm-6 col-lg-6 col-xl-3 item"
                data-aos="fade-up"
                data-aos-delay={feature.delay}
                data-aos-duration="700"
                data-aos-once="true"
              >
                <div className="saas-feature-card text-center">
                  <Image
                    src={feature.imageUrl}
                    alt={feature.title}
                    width={253}
                    height={204}
                  />
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
