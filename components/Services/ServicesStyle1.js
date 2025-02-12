import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";

const ServicesStyle1 = () => {
  return (
    <>
      <div className="services-area-two pt-80 pb-50 bg-f9f6f6">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <Icon.Settings />
                </div>
                <h3>
                  <Link href="/services/service-details/">AI Strategy Consulting</Link>
                </h3>
                <p>
                Gain insights on how AI can transform businesses, optimize processes, and boost efficiency. We help develop roadmaps, implementation strategies, and risk management plans.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <Icon.Mail />
                </div>
                <h3>
                  <Link href="/services/service-details/">Custom AI Solutions</Link>
                </h3>
                <p>
                We build tailor-made AI models for various industries, including finance, healthcare, and retail. Our services include chatbots, recommendation systems, and predictive analytics.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon">
                  <Icon.Bell />
                </div>
                <h3>
                  <Link href="/services/service-details/">AI Implementation & Integration</Link>
                </h3>
                <p>
                Seamlessly integrate AI into your existing systems with our Generative AI and traditional AI solutions to enhance business efficiency.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon bg-c679e3">
                  <Icon.Grid />
                </div>
                <h3>
                  <Link href="/services/service-details/">Data Analytics & AI</Link>
                </h3>
                <p>
                Unlock powerful insights from data with our AI-driven solutions, enabling better decision-making and business growth.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon bg-c679e3">
                  <Icon.Info />
                </div>
                <h3>
                  <Link href="/services/service-details/">AI Ethics & Governance</Link>
                </h3>
                <p>
                Ensure ethical AI applications with transparent models, bias reduction techniques, data privacy compliance, and governance best practices.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon bg-c679e3">
                  <Icon.HardDrive />
                </div>
                <h3>
                  <Link href="/services/service-details/">AI-powered Automation</Link>
                </h3>
                <p>
                Automate repetitive tasks with AI to save time and reduce operational costs. Solutions include robotic process automation (RPA) and intelligent workflow automation.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon bg-eb6b3d">
                  <Icon.MousePointer />
                </div>
                <h3>
                  <Link href="/services/service-details/">AI for Predictive Analytics</Link>
                </h3>
                <p>
                Leverage AI-driven predictive models for demand forecasting, financial predictions, and risk assessments to gain a competitive edge.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon bg-eb6b3d">
                  <Icon.Bell />
                </div>
                <h3>
                  <Link href="/services/service-details/">AI in Specific Industries</Link>
                </h3>
                <p>
                We specialize in AI solutions for the wellness industry, optimizing processes and enhancing user experiences.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon bg-eb6b3d">
                  <Icon.Send />
                </div>
                <h3>
                  <Link href="/services/service-details/">AI Training & Support</Link>
                </h3>
                <p>
                Empower your team with AI training programs, ongoing support, and AI model maintenance services to maximize efficiency.
                </p>
              </div>
            </div>
            {/* <div className="col-lg-4 col-sm-6">
              <div className="single-services-box">
                <div className="icon bg-eb6b3d">
                  <Icon.Cpu />
                </div>
                <h3>
                  <Link href="/services/service-details/">AI Prototyping & Research</Link>
                </h3>
                <p>
                Develop AI prototypes and explore emerging AI technologies with our expertise in mathematical modeling and optimization strategies.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesStyle1;
