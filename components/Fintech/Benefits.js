"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const benefitsData = [
  {
    title: "Time and Cost Savings",
    description:
      "Save time and reduce costs with automated processes that eliminate manual tasks. Focus on growth while achieving greater efficiency in your financial operations.",
    image: "/images/fintech/benefits1.png",
    imageAlt: "Time and Cost Savings",
  },
  {
    title: "Enhanced Financial Security",
    description:
      "Safeguard your data with advanced encryption and fraud prevention, ensuring compliance with global security standards.",
    image: "/images/fintech/benefits2.png",
    imageAlt: "Enhanced Financial Security",
  },
  {
    title: "Scalability for Businesses",
    description:
      "Scale your business effortlessly with solutions that evolve as your needs grow. Our platform adapts to support your operations at every stage.",
    image: "/images/fintech/benefits3.png",
    imageAlt: "Scalability for Businesses",
  },
];

const Benefits = () => {
  return (
    <>
      <div className="fintech-benefits-area ptb-100">
        <div className="container mw-1320">
          <div className="saas-section-title mw-full">
            <span className="sub-title2 d-inline-flex align-items-center gap-2">
              <Image
                src="/images/fintech/icon1.png"
                alt="icon1"
                width={14}
                height={16}
              />
              Benefits
            </span>
            <h2>
              <span>Experience the future of finance</span> with solutions that
              save time, enhance security, and scale effortlessly with your
              business needs. Transform the way you manage and grow your
              finances today.
            </h2>
          </div>

          <div>
            {benefitsData.slice(0, 1).map((benefit, index) => (
              <div className="fintech-benefits-card" key={index}>
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <div className="image">
                      <Image
                        src={benefit.image}
                        alt={benefit.imageAlt}
                        width={530}
                        height={150}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="contant">
                      <h3>{benefit.title}</h3>
                      <p>{benefit.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row">
            {benefitsData.slice(1, 3).map((benefit, index) => (
              <div className="col-xl-6" key={index}>
                <div className="fintech-benefits-card">
                  <div className="row align-items-center">
                    <div className="col-md-5 col-lg-4 col-xl-5">
                      <div className="image">
                        <Image
                          src={benefit.image}
                          alt={benefit.imageAlt}
                          width={252}
                          height={150}
                        />
                      </div>
                    </div>

                    <div className="col-md-7 col-lg-8 col-xl-7">
                      <div className="contant">
                        <h3>{benefit.title}</h3>
                        <p>{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-md-3">
            <Link href="#" className="fintech-default-btn">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Benefits;
