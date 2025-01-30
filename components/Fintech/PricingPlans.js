"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const pricingPlansData = [
  {
    title: "Basic Plan",
    price: "$29/month",
    description: "Best for individuals and small businesses looking to get started",
    features: [
      "Core features",
      "Standard encryption",
      "1 user access",
      "Email support",
      "7-day free trial",
    ],
    buttonText: "Get Started",
    buttonLink: "/contact",
    buttonStyle: "fintech-green-btn",
  },
  {
    title: "Pro Plan",
    price: "$79/month",
    description: "Perfect for growing businesses needing more features and support",
    features: [
      "All Basic Plan features",
      "Advanced analytics",
      "Enhanced encryption and compliance",
      "Up to 10 users",
      "24/7 live chat support",
      "15-day free trial",
    ],
    buttonText: "Start Free Trial",
    buttonLink: "/contact",
    buttonStyle: "fintech-default-btn",
  },
  {
    title: "Enterprise Plan",
    price: "$99/month",
    description: "Ideal for large enterprises that require custom solutions and dedicated support",
    features: [
      "All Pro Plan features",
      "Advanced security & custom compliance",
      "Unlimited users",
      "Dedicated account manager",
      "30-day free trial",
    ],
    buttonText: "Contact Us",
    buttonLink: "/contact",
    buttonStyle: "fintech-green-btn",
  },
];

const PricingPlans = () => {
  return (
    <>
      <div className="fintech-pricing-area pb-70">
        <div className="container mw-1320">
          <div className="saas-section-title text-center mx-auto mw-780">
            <span className="sub-title2 d-inline-flex align-items-center gap-2 text-uppercase">
              <Image
                src="/images/fintech/icon1.png"
                alt="icon1"
                width={14}
                height={16}
              />
              Pricing Plans
            </span>

            <h2>
              Simple <span>pricing</span>, tailored for your needs
            </h2>
          </div>

          <div className="row align-items-center justify-content-center">
            {pricingPlansData.map((plan, index) => (
              <div key={index} className="col-md-6 col-lg-4 item">
                <div className="fintech-pricing-card">
                  <div className="pricing-header">
                    <h3>{plan.title}</h3>
                    <h1>
                      {plan.price.split("/")[0]}
                      <span>/{plan.price.split("/")[1]}</span>
                    </h1>
                    <p>{plan.description}</p>
                  </div>

                  <div className="p-features-list">
                    <h3>Features</h3>
                    <ul>
                      {plan.features.map((feature, idx) => (
                        <li key={idx}>
                          <i className="bx bxs-check-circle"></i> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href={plan.buttonLink} className={plan.buttonStyle}>
                    {plan.buttonText}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPlans;
