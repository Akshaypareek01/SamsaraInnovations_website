import React from "react";
import * as Icon from "react-feather";
import Link from "next/link";

const Features = () => {
  return (
    <>
      <div className="boxes-area">
        <div className="container">
          
          <div className="row justify-content-center">
          <div className="col-lg-12 col-md-12" style={{textAlign:"center",marginBottom:"30px"}}>
          <h1
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-duration="500"
                      data-aos-once="true"
                    >
                      What do we do?
                    </h1>
          </div>
            <div
              className="col-lg-12 col-md-12"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-box">
                <div className="icon">
                  
                  <Icon.Code />
                </div>

                <h3>
                  <Link href="/features/feature-details/">AI Consulting</Link>
                </h3>

                <p>
                AI consulting services  are customized for the unique 
challenges faced by the health & wellness sectors. By employing the latest 
technologies and AI strategies, we help clients optimize their operations, 
improve decision-making, and enhance customer experiences. The focus is 
on solving sector-specific problems with practical AI applications, such as 
predictive analytics, automation, and data-driven testable insights.
                </p>
              </div>
            </div>

            <div
              className="col-lg-12 col-md-12"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-box bg-f78acb">
                <div className="icon">
                <Icon.Server />
                </div>

                <h3>
                  <Link href="/features/feature-details/">Health Consulting</Link>
                </h3>

                <p>
                Recognizing the growing need for wellness and efficient 
healthcare, we help businesses design tailored health programs to improve 
employee well-being, optimize healthcare benefits, and ensure productivity, 
while aligning with industry standards and regulations.
                </p>
              </div>
            </div>

            <div
              className="col-lg-12 col-md-12"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-box bg-c679e3">
                <div className="icon">
                  <Icon.Users />
                </div>

                <h3>
                  <Link href="/features/feature-details/">HR Consulting </Link>
                </h3>

                <p>
                We offer HR consulting services for wellness startups, 
focusing on building healthy work environments, optimizing employee 
wellbeing, enhancing productivity, and ensuring compliance with industry 
standards to support sustainable growth and well-being.

                </p>
              </div>
            </div>

            {/* <div
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-box bg-eb6b3d">
                <div className="icon">
                  <Icon.GitBranch />
                </div>

                <h3>
                  <Link href="/features/feature-details/">Access Controlled</Link>
                </h3>

                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
