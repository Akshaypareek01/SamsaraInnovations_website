import React from "react";
import Image from "next/image";

import aboutImg from "/public/images/about4.png";

const AboutUsContent2 = () => {
  return (
    <>
      <div className="about-area ptb-80">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="ml-about-img">
                <Image
                  src={aboutImg}
                  alt="image"
                  width={677}
                  height={575}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="ml-about-content">
                <span className="sub-title">About Us</span>
                <h2>Engaging New Audiences Through Smart Approach</h2>
                <div className="bar"></div>

                <p>
                Founded in 2024, Samsara Innovation aims to transform health and wellness through AI-driven products and services, 
                
                </p>

                <p>
                adopting a holistic approach. We’re dedicated to supporting new startups in this sector, providing 
                innovative solutions and expertise to thrive in the evolving landscape of health and wellness.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="about-inner-area">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Who We Are</h3>
                  <p>
                  Samsara Innovations Pvt Ltd is a consulting firm providing AI technology and HR solutions.
 It helps startups navigate AI advancements and talent management challenges, specializing
 in healthcare and wellness sectors.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Our Mission</h3>
                  <p>
                  Samsara Innovations aims to empower businesses by providing AI Tech, Strategy and HR
 services, enabling growth and innovation. The company delivers tailored strategies to help
 clients overcome technical and talent challenges, streamline operations, business
 continuity, and build high-performing teams.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Our Vision</h3>
                  <p>
                  Samsara Innovations strives to be a trusted partner in AI and HR consulting, helping
 businesses focus on strategy and growth while providing innovative solutions to stay ahead
 in their industries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsContent2;
