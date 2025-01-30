"use client";

import React from "react";
import Image from "next/image";

const Benefits = () => {
  return (
    <>
      <div className="health-tech-benefits-area pb-70">
        <div className="container mw-1320">
          <div className="row">
            <div className="col-lg-5">
              <div className="benefits-img">
                <Image
                  src="/images/health-tech/benefits.jpg"
                  alt="benefits"
                  width={804}
                  height={675}
                />

                <div className="content">
                  <p>
                    We have <span>15+ years</span> of experience in{" "}
                    <span>Healthtech</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="benefits-content">
                <div className="saas-section-title mw-full">
                  <span className="sub-title2 d-inline-flex align-items-center gap-2 text-uppercase">
                    <Image
                      src="/images/fintech/icon1.png"
                      alt="icon1"
                      width={14}
                      height={16}
                    />
                    Benefits
                  </span>
                  <h2>
                    <span>HealthTech</span> improves care delivery, optimizes
                    operations, and ensures secure, patient-centric healthcare
                    experiences
                  </h2>
                </div>

                <div className="row align-items-center">
                  <div className="col-sm-6">
                    <div className="benefits-img2">
                      <Image
                        src="/images/health-tech/benefits2.jpg"
                        alt="benefits"
                        width={336}
                        height={252}
                      />
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="benefits-list">
                      <ul>
                        <li>
                          <Image
                            src="/images/health-tech/icon4.png"
                            alt="icon4"
                            width={15}
                            height={15}
                          />
                          Enhanced Patient Care
                        </li>
                        <li>
                          <Image
                            src="/images/health-tech/icon4.png"
                            alt="icon4"
                            width={15}
                            height={15}
                          />
                          Improved Accessibility
                        </li>
                        <li>
                          <Image
                            src="/images/health-tech/icon4.png"
                            alt="icon4"
                            width={15}
                            height={15}
                          />
                          Scalability for Growth
                        </li>
                        <li>
                          <Image
                            src="/images/health-tech/icon4.png"
                            alt="icon4"
                            width={15}
                            height={15}
                          />
                          Time and Cost Efficiency
                        </li>
                        <li>
                          <Image
                            src="/images/health-tech/icon4.png"
                            alt="icon4"
                            width={15}
                            height={15}
                          />
                          Robust Data Security
                        </li>
                        <li>
                          <Image
                            src="/images/health-tech/icon4.png"
                            alt="icon4"
                            width={15}
                            height={15}
                          />
                          Empowered Decision-Making
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Benefits;
