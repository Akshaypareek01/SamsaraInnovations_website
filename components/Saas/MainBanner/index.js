"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FsLightbox from "fslightbox-react";

const MainBanner = () => {
  // State for lightbox toggler
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <div className="saas-main-banner">
        <div className="container mw-1320">
          <div className="hero-content mx-auto text-center">
            <h1
              className="title"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="700"
              data-aos-once="true"
            >
              Powerful SaaS Solutions <span>For Your Digital Success</span>
            </h1>

            <p
              className="short-des mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="700"
              data-aos-once="true"
            >
              Save hours every week, cut costs by 30%, and achieve your goals
              effortlessly with our all-in-one SaaS platform.
            </p>

            <div
              className="btn-box d-flex align-items-center justify-content-center gap-3"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="700"
              data-aos-once="true"
            >
              <Link href="/contact" className="saas-outline-btn">
                Get 15-day free trial
              </Link>
              <Link href="/contact" className="saas-default-btn">
                Get Started
              </Link>
            </div>
          </div>

          <div className="worldwide-users">
            <Image
              src="/images/saas/big-laptop.png"
              alt="big-laptop"
              className="big-laptop"
              width={1320}
              height={775}
            />
            <Image
              src="/images/saas/book.png"
              alt="book"
              className="book-shape"
              width={350}
              height={375}
            />

            <h5 className="wu-title">
              <span>10+millions</span> users use our product worldwide
            </h5>

            <Image
              src="/images/saas/shape1.png"
              alt="shape1"
              className="shape-1"
              width={190}
              height={156}
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

        <Image
          src="/images/saas/main-banner-bg.png"
          alt="main-banner-bg"
          className="main-banner-img"
          width={1920}
          height={1080}
        />
      </div>

      {/* FsLightbox */}
      <FsLightbox
        toggler={toggler}
        sources={[
          "https://www.youtube.com/embed/bk7McNUjWgw?si=LRx5NmEOi-8Nr3IX",
        ]}
      />
    </>
  );
};

export default MainBanner;
