"use client";

import React from "react";
import Link from "next/link";

const plans = [
  {
    name: "Basic",
    price: "$19/month",
    buttonText: "Get Started",
    buttonClass: "saas-outline-btn",
    link: "/contact",
  },
  {
    name: "Pro",
    price: "$49/month",
    buttonText: "Start Free Trial",
    buttonClass: "saas-green-btn",
    link: "/contact",
    isPopular: true,
  },
  {
    name: "Enterprise",
    price: "Custom Pricing",
    buttonText: "Contact Sales",
    buttonClass: "saas-outline-btn",
    link: "/contact",
  },
];

const features = [
  {
    name: "Team Member",
    values: ["Up to 5", "Unlimited", "Unlimited"],
  },
  {
    name: "Storage",
    values: ["10 GB", "50 GB", "Unlimited"],
  },
  {
    name: "Support",
    values: ["Email Support", "Priority Email & Chat", "24/7 Premium Support"],
  },
  {
    name: "Analytics",
    values: [
      "Basic Reporting",
      "Advanced Reporting",
      "Advanced + Custom Analytics",
    ],
  },
  {
    name: "Integrations",
    values: [
      "Standard Integrations",
      "Advanced Integrations",
      "Custom Integrations",
    ],
  },
  {
    name: "Account Manager",
    values: ["Not Included", "Not Included", "Dedicated Account Manager"],
  },
  {
    name: "Customization",
    values: ["Not Available", "Limited", "Fully Customizable"],
  },
];

const PricingTable = () => {
  return (
    <div className="saas-pricing-table-area ptb-100">
      <div className="container mw-1320">
        <div className="saas-section-title text-center mx-auto mw-780">
          <h2>
            Simple <span>Pricing</span>, Tailored for Your Needs
          </h2>
          <p>Choose the plan that works for you and get started today!</p>
        </div>

        <div className="table-responsive saas-pricing-table">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Plan</th>
                {plans.map((plan) => (
                  <th key={plan.name} scope="col">
                    {plan.name}{" "}
                    {plan.isPopular && (
                      <span className="m-popular">(Most Popular)</span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Price</th>
                {plans.map((plan) => (
                  <td key={plan.name}>{plan.price}</td>
                ))}
              </tr>
              {features.map((feature) => (
                <tr key={feature.name}>
                  <th scope="row">{feature.name}</th>
                  {feature.values.map((value, index) => (
                    <td key={index}>{value}</td>
                  ))}
                </tr>
              ))}
              <tr>
                <td></td>
                {plans.map((plan) => (
                  <td key={plan.name}>
                    <Link href={plan.link} className={plan.buttonClass}>
                      {plan.buttonText}
                    </Link>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <div className="text-center mt-3">
          <p>
            Pick a plan that matches your goals. No hidden fees, cancel
            anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
