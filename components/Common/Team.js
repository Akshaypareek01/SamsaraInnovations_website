import React from "react";
import * as Icon from "react-feather";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import teamImg1 from "/public/images/team-image/team1.jpg";
import teamImg2 from "/public/images/team-image/team2.jpg";
import teamImg3 from "/public/images/team-image/team3.jpg";
import teamImg4 from "/public/images/team-image/team4.jpg";
import teamImg5 from "/public/images/team-image/team5.jpg"; 
import teamImg6 from "/public/images/team-image/img1.jpg"; 
import teamImg7 from "/public/images/team-image/img2.jpg"; 
const Team = () => {
  return (
    <>
      <div className="team-area ptb-80 bg-f9f6f6">
        <div className="container">
          <div className="section-title">
            <h2>Our Awesome Team</h2>
            <div className="bar"></div>
            <p>
            Passion and expertise from our team drive innovation in health and wellness, creating impactful solutions that pave the way for a healthier future.
            </p>
          </div>
        </div>
        
        <div >
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 6000,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 1,
            },
            1200: {
              slidesPerView: 2,
            },
            1500: {
              slidesPerView: 2,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="team-slider"
          style={{width:"70%"}}
        >
          <SwiperSlide>
            <div className="single-team">
              <div className="team-image">
                <Image
                  src={teamImg6}
                  alt="image"
                  width={125}
                  height={125}
                />
              </div>

              <div className="team-content">
                <div className="team-info">
                  <h3>PRADEEP MEHTA</h3>
                  <span>CEO & Founder</span>
                </div>

                {/* <ul>
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <Icon.Facebook />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/" target="_blank">
                      <Icon.Twitter />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <Icon.Linkedin />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.gitlab.com/" target="_blank">
                      <Icon.Gitlab />
                    </a>
                  </li>
                </ul>

                <p>
                  Risus commodo viverra maecenas accumsan lacus vel facilisis
                  quis ipsum.{" "}
                </p> */}
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="single-team">
              <div className="team-image">
                <Image
                  src={teamImg7}
                  alt="image"
                  width={125}
                  height={125}
                />
              </div>

              <div className="team-content">
                <div className="team-info">
                  <h3>PRASHANT DEEP JEEVA</h3>
                  <span>Director - CTO</span>
                </div>

                {/* <ul>
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <Icon.Facebook />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/" target="_blank">
                      <Icon.Twitter />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <Icon.Linkedin />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.gitlab.com/" target="_blank">
                      <Icon.Gitlab />
                    </a>
                  </li>
                </ul>

                <p>
                  Risus commodo viverra maecenas accumsan lacus vel facilisis
                  quis ipsum.{" "}
                </p> */}
              </div>
            </div>
          </SwiperSlide>

          {/* <SwiperSlide>
            <div className="single-team">
              <div className="team-image">
                <Image
                  src={teamImg3}
                  alt="image"
                  width={125}
                  height={125}
                />
              </div>

              <div className="team-content">
                <div className="team-info">
                  <h3>Janny Cotller</h3>
                  <span>Web Developer</span>
                </div>

                <ul>
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <Icon.Facebook />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/" target="_blank">
                      <Icon.Twitter />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <Icon.Linkedin />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.gitlab.com/" target="_blank">
                      <Icon.Gitlab />
                    </a>
                  </li>
                </ul>

                <p>
                  Risus commodo viverra maecenas accumsan lacus vel facilisis
                  quis ipsum.{" "}
                </p>
              </div>
            </div>
          </SwiperSlide> */}

         
        </Swiper>
        </div>
        
      </div>
    </>
  );
};

export default Team;
