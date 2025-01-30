"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

// Pricing plans data array
const pricingPlans = [
  {
    id: 1,
    title: "Basic Plan",
    price: "$49/month",
    description: "Small practices and startups",
    features: [
      "Limited telemedicine consultations",
      "Basic patient management tools",
      "Access to AI-driven diagnostics",
      "Email support",
      "Data Security & Compliance",
    ],
    buttonText: "Get Started",
    buttonLink: "/contact",
    buttonStyle: "health-tech-green-outline-btn",
  },
  {
    id: 2,
    title: "Professional Plan",
    price: "$159/month",
    description: "Mid-sized clinics and healthcare providers",
    features: [
      "Unlimited telemedicine consultations",
      "Advanced patient management features",
      "Real-time data analytics",
      "Integration with wearable devices",
      "Priority email support",
    ],
    buttonText: "Start Free Trial",
    buttonLink: "/contact",
    buttonStyle: "health-tech-green-outline-btn",
  },
  {
    id: 3,
    title: "Enterprise Plan",
    price: "$199/month",
    description: "Large healthcare networks and hospitals",
    features: [
      "Custom telemedicine solutions",
      "Full EHR integration",
      "Comprehensive AI diagnostics reporting",
      "Dedicated account manager",
      "24/7 priority support",
    ],
    buttonText: "Contact Us",
    buttonLink: "/contact",
    buttonStyle: "health-tech-green-outline-btn",
  },
];

const PricingPlans = () => {
  return (
    <>
      <div className="health-tech-pricing-area mx-auto pt-100 pb-70">
        <div className="container mw-1320 position-relative z-1">
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
            {pricingPlans.map((plan) => (
              <div key={plan.id} className="col-md-6 col-lg-4 item">
                <div className="health-tech-pricing-card">
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
                      {plan.features.map((feature, index) => (
                        <li key={index}>
                          <i className="bx bxs-check-circle"></i> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={plan.buttonLink}
                    className={`${plan.buttonStyle} d-inline-flex align-items-center gap-1`}
                  >
                    {plan.buttonText} <i className="bx bx-right-arrow-alt"></i>
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
