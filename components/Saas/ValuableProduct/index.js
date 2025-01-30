"use client";

import React from "react";
import Image from "next/image";

const valuableFeaturesData = [
  {
    id: 1,
    title: "Saves Time",
    description:
      "Automate repetitive tasks and streamline workflows so you can focus on what truly matters.",
    iconUrl: "/images/saas/icon1.svg",
  },
  {
    id: 2,
    title: "Boosts Efficiency",
    description:
      "Access all your tools and data in one centralized platform, reducing complexity and improving productivity.",
    iconUrl: "/images/saas/icon2.svg",
  },
  {
    id: 3,
    title: "Data-Driven Insights",
    description:
      "Make informed decisions with real-time analytics and detailed reporting at your fingertips.",
    iconUrl: "/images/saas/icon3.svg",
  },
  {
    id: 4,
    title: "Scalable for Growth",
    description:
      "Whether you're a startup or an enterprise, our platform grows with your business.",
    iconUrl: "/images/saas/icon4.svg",
  },
  {
    id: 5,
    title: "Cost-Effective",
    description:
      "Eliminate the need for multiple software solutions with our all-in-one approach, saving money.",
    iconUrl: "/images/saas/icon5.svg",
  },
  {
    id: 6,
    title: "Boosts Efficiency",
    description:
      "Access all your tools and data in one centralized platform, reducing complexity and improving productivity.",
    iconUrl: "/images/saas/icon2.svg",
  },
];

const ValuableProduct = () => {
  return (
    <div className="saas-valuable-product-area pt-100 pb-70">
      <div className="container mw-1320">
        <div className="saas-section-title mw-full">
          <div className="row">
            <div className="col-lg-5 col-xl-4">
              <h2>
                Why Our Product is <span>Valuable</span> to You
              </h2>
            </div>

            <div className="col-lg-7 col-xl-8">
              <p>
                Our product simplifies your workflow by bringing all tools and
                data into one intuitive platform, saving you time and effort.
                Gain real-time insights to make smarter decisions, improve
                collaboration, and boost productivity. Designed to scale with
                your growth, it’s the cost-effective solution your business
                needs to thrive.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 col-xl-8">
            <div className="row">
              {valuableFeaturesData.slice(0, 6).map((feature) => (
                <div key={feature.id} className="col-lg-6">
                  <div className="valuable-product-feature">
                    <div className="flex-shrink-0">
                      <Image
                        src={feature.iconUrl}
                        alt={feature.title}
                        width={40}
                        height={40}
                      />
                    </div>

                    <h3>
                      <span>{feature.title}:</span> {feature.description}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-12 col-xl-4">
            <div
              className="valuable-product-image text-center"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="700"
              data-aos-once="true"
            >
              <Image
                src="/images/saas/valuable-product.png"
                alt="valuable-product"
                width={423}
                height={428}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValuableProduct;
