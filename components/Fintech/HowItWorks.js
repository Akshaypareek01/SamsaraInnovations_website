"use client";

import React from "react";
import Image from "next/image";

const stepsData = [
  {
    icon: "/images/fintech/icon6.png",
    title: "Sign Up",
    details: [
      "Create your account in just a few clicks.",
      "Choose the plan that fits your needs, or start with a free trial.",
    ],
  },
  {
    icon: "/images/fintech/icon6.png",
    title: "Connect Your Accounts",
    details: [
      "Securely integrate your financial tools, bank accounts, or business platforms.",
      "Enjoy seamless syncing for accurate data and insights.",
    ],
  },
  {
    icon: "/images/fintech/icon6.png",
    title: "Start Using the Tools",
    details: [
      "Access your personalized dashboard with real-time analytics and insights.",
      "Optimize your workflows, monitor performance, and achieve financial success.",
    ],
  },
];

const HowItWorks = () => {
  return (
    <>
      <div className="fintech-how-it-works pt-100 pb-70">
        <div className="container mw-1320">
          <div className="row align-items-center">
            <div className="col-lg-5 col-xl-5">
              <div className="fintech-how-it-works-img text-center">
                <Image
                  src="/images/fintech/how-it-works.png"
                  alt="how-it-works"
                  width={536}
                  height={536}
                />
              </div>
            </div>

            <div className="col-lg-7 col-xl-7">
              <div className="fintech-how-it-works-content">
                <div className="saas-section-title mw-full">
                  <span className="sub-title2 d-inline-flex align-items-center gap-2">
                    <Image
                      src="/images/fintech/icon1.png"
                      alt="icon1"
                      width={14}
                      height={16}
                    />
                    How It Works
                  </span>
                  <h2>
                    Effortlessly sign up, connect your accounts, and start{" "}
                    <span>optimizing your finances today</span>.
                  </h2>
                </div>

                <div>
                  {stepsData.map((step, index) => (
                    <div key={index} className="ft-how-it-works d-flex gap-3">
                      <div className="flex-shrink-0">
                        <Image
                          src={step.icon}
                          alt={step.title}
                          width={20}
                          height={20}
                        />
                      </div>
                      <div>
                        <h5>{step.title}</h5>
                        <ul>
                          {step.details.map((detail, idx) => (
                            <li key={idx}>{detail}</li>
                          ))}
                        </ul>
                      </div>
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

export default HowItWorks;
