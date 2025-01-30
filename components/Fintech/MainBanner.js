"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const MainBanner = () => {
  return (
    <>
      <div
        className="fintech-main-banner"
        style={{ backgroundImage: "url(/images/fintech/banner-bg.jpg)" }}
      >
        <div className="container mw-1600">
          <div className="row align-items-center">
            <div className="col-lg-6 col-xl-7">
              <div className="hero-content">
                <h1
                  className="title" 
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="700"
                  data-aos-once="true"
                >
                  Empowering the Future of <span>Finance</span>
                </h1>

                <p
                  className="short-des" 
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="700"
                  data-aos-once="true"
                >
                  Revolutionize your financial processes with cutting-edge
                  technology designed for growth, security, and efficiency.
                </p>

                <div
                  className="btn-box d-flex align-items-center gap-3" 
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="700"
                  data-aos-once="true"
                >
                  <Link href="/contact" className="fintech-default-btn">
                    Get Started
                  </Link>
                  <Link
                    href="/contact"
                    className="fintech-outline-btn text-white"
                  >
                    Get 15-day free trial
                  </Link>
                </div>

                <div
                  className="status-list" 
                  data-aos="fade-up"
                  data-aos-delay="400"
                  data-aos-duration="700"
                  data-aos-once="true"
                >
                  <div className="list-card d-flex align-items-center gap-3">
                    <i className="bx bx-check"></i>
                    <p>2K+ Active user’s</p>
                  </div>

                  <div className="list-card d-flex align-items-center gap-3">
                    <i className="bx bx-check"></i>
                    <p>99% customer satisfaction</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-xl-5">
              <div
                className="fintech-app-img text-center" 
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="700"
                data-aos-once="true"
              >
                <Image
                  src="/images/fintech/app.png"
                  alt="app"
                  width={766}
                  height={700}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
