"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import FsLightbox from "fslightbox-react";

const About = () => {
  // State for lightbox toggler
  const [toggler, setToggler] = useState(false);
  
  return (
    <>
      {/* FsLightbox */}
      <FsLightbox
        toggler={toggler}
        sources={[
          "https://www.youtube.com/embed/bk7McNUjWgw?si=LRx5NmEOi-8Nr3IX",
        ]}
      />

      <div className="health-tech-about-area">
        <div className="container">
          <div className="ht-about-content">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="about-img position-relative text-center">
                  <Image
                    src="/images/health-tech/about-us.jpg"
                    alt="about-us"
                    width={635}
                    height={400}
                  />

                  <div className="video-box">
                    <div
                      className="play-btn mx-auto"
                      onClick={() => setToggler(!toggler)}
                    >
                      <i className="bx bx-play"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-7">
                <div className="about-content position-relative">
                  <div className="saas-section-title mw-full">
                    <span className="sub-title2 d-inline-flex align-items-center gap-2 text-uppercase">
                      <Image
                        src="/images/fintech/icon1.png"
                        alt="icon1"
                        width={14}
                        height={16}
                      />
                      About StartP
                    </span>
                    <h2>
                      <span>HealthTech</span> integrates innovative technology
                      with healthcare to improve patient care, streamline
                      operations, and ensure data security, revolutionizing the
                      industry.
                    </h2>
                  </div>

                  <Link
                    href="/about-2"
                    className="ht-about-btn d-inline-flex align-items-center gap-1"
                  >
                    Read More About Us <i className="bx bx-right-arrow-alt"></i>
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

export default About;
