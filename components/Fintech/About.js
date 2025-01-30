"use client";

import React from "react";
import Image from "next/image";

const mission = {
  title: "Our Mission",
  description:
    "To empower businesses and individuals with innovative fintech solutions that simplify financial processes, enhance security, and drive sustainable growth.",
  icon: "/images/fintech/icon3.png",
};

const vision = {
  title: "Our Vision",
  description:
    "To be a global leader in financial technology, shaping the future of finance through innovation, inclusivity, and cutting-edge solutions.",
  icon: "/images/fintech/icon4.png",
};

const values = [
  {
    icon: "/images/fintech/icon5.png",
    title: "Innovation",
    description:
      "Continuously pushing the boundaries of technology to deliver exceptional solutions.",
  },
  {
    icon: "/images/fintech/icon5.png",
    title: "Integrity",
    description:
      "Upholding transparency, trust, and ethical practices in everything we do.",
  },
  {
    icon: "/images/fintech/icon5.png",
    title: "Customer-Centricity",
    description:
      "Prioritizing the needs and success of our clients at every step.",
  },
  {
    icon: "/images/fintech/icon5.png",
    title: "Security",
    description:
      "Ensuring robust protection and privacy in all our financial solutions.",
  },
];

const About = () => {
  return (
    <>
      <div className="fintech-about-area pb-70">
        <div className="container mw-1320 position-relative z-1">
          <div className="saas-section-title text-center mw-full">
            <span className="sub-title2 d-inline-flex align-items-center gap-2">
              <Image
                src="/images/fintech/icon1.png"
                alt="icon1"
                width={14}
                height={16}
              />
              About StartP
            </span>
            <h2>
              <span>StartP</span> is a fintech innovator transforming financial
              operations with secure, efficient, and scalable solutions. We
              simplify workflows and drive growth, empowering businesses to
              achieve their goals effortlessly.
            </h2>
          </div>

          <div className="row justify-content-center align-items-center">
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="fintech-our-mission">
                <h3>{mission.title}</h3>
                <p>{mission.description}</p>
                <div className="text-center">
                  <Image
                    src={mission.icon}
                    alt="mission icon"
                    className="om-icon"
                    width={70}
                    height={130}
                  />
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="fintech-our-vision">
                <div className="text-end ov-img">
                  <Image
                    src={vision.icon}
                    alt="vision icon"
                    width={150}
                    height={92}
                  />
                </div>
                <h3>{vision.title}</h3>
                <p>{vision.description}</p>
              </div>
            </div>

            <div className="col-lg-12 col-xl-6">
              <div className="fintech-our-values">
                <h3>Our Values</h3>
                <div className="fintech-values-list">
                  {values.map((value, index) => (
                    <div key={index} className="fintech-values-card">
                      <div className="flex-shrink-0">
                        <Image
                          src={value.icon}
                          alt={value.title}
                          width={15}
                          height={15}
                        />
                      </div>
                      <p>
                        <span>{value.title}:</span> {value.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
