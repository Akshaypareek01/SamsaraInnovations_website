"use client";

import React from "react";
import Link from "next/link";

const MainBanner = () => {
  return (
    <>
      <div
        className="health-tech-main-banner mx-auto"
        style={{
          backgroundImage: 'url("/images/health-tech/main-banner-bg.jpg',
        }}
      >
        <div className="container mw-1320 position-relative">
          <div className="hero-content">
            <h1
              className="title"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="700"
              data-aos-once="true"
            >
              <span>Empowering Healthcare</span> Through Innovative Technology
            </h1>

            <div className="row align-items-center">
              <div
                className="col-lg-6"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="700"
                data-aos-once="true"
              >
                <div className="ht-funfact">
                  <div className="row align-items-center">
                    <div className="col-6 col-sm-6 item">
                      <div className="ht-funfact-card">
                        <h3>2K+</h3>
                        <p>Active User</p>
                      </div>
                    </div>

                    <div className="col-6 col-sm-6 item">
                      <div className="ht-funfact-card">
                        <h3>4.9</h3>
                        <p>User Rating</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-6"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="700"
                data-aos-once="true"
              >
                <div className="content-card">
                  <p>
                    Streamline patient care, enhance data security, and unlock
                    new possibilities with our cutting-edge HealthTech
                    solutions.
                  </p>

                  <Link
                    href="/contact"
                    className="health-tech-green-btn d-inline-flex align-items-center gap-1"
                  >
                    Get Started <i className="bx bx-right-arrow-alt"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
