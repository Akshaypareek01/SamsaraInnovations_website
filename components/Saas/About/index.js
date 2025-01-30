"use client";

import React from "react";
import Link from "next/link";

const aboutData = [
  {
    id: 1,
    title: "Mission",
    description:
      "Our mission is to empower businesses with innovative SaaS solutions that simplify processes, enhance collaboration, and drive sustainable growth. We strive to make technology accessible, intuitive, and impactful for companies of all sizes.",
    delay: 100,
  },
  {
    id: 2,
    title: "Vision",
    description:
      "Our vision is to revolutionize the way businesses operate by creating scalable, intuitive, and impactful digital solutions. We aim to empower organizations worldwide to achieve their goals through innovation and technology.",
    delay: 200,
  },
];

const About = () => {
  return (
    <>
      <div className="saas-about-area ptb-100">
        <div className="container mw-1320 position-relative z-1">
          <div className="saas-section-title text-center mw-full">
            <span className="sub-title">About StartP</span>
            <h2>
              We are a <span>StartP technology company</span> dedicated to
              revolutionizing the way businesses operate. Founded with a passion
              for innovation, we specialize in delivering cutting-edge SaaS
              solutions that simplify workflows, enhance productivity, and drive
              measurable results.
            </h2>
          </div>

          <div className="row justify-content-center">
            {aboutData.map((section) => (
              <div
                key={section.id}
                className="col-lg-6 item"
                data-aos="fade-up"
                data-aos-delay={section.delay}
                data-aos-duration="700"
                data-aos-once="true"
              >
                <div className="saas-about-card">
                  <h3>{section.title}</h3>
                  <p>{section.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="sass-about-btn text-center">
            <Link href="/about" className="saas-default-btn">
              More About Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
