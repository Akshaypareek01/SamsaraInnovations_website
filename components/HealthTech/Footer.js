"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Features", href: "/features" },
    { name: "Our Pricing", href: "/pricing" },
    { name: "Latest News", href: "/blog" },
  ];

  const supportLinks = [
    { name: "FAQ's", href: "/faq" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms-conditions" },
    { name: "Team", href: "/team" },
    { name: "Contact Us", href: "/contact" },
  ];

  const socialLinks = [
    {
      platform: "Facebook",
      href: "https://www.facebook.com/",
      iconClass: "bxl-facebook",
    },
    {
      platform: "Twitter",
      href: "https://www.twitter.com/",
      iconClass: "bxl-twitter",
    },
    {
      platform: "Instagram",
      href: "https://www.instagram.com/",
      iconClass: "bxl-instagram",
    },
    {
      platform: "LinkedIn",
      href: "https://www.linkedin.com/",
      iconClass: "bxl-linkedin",
    },
  ];

  const contactInfo = {
    address: "27 Division St, New York, NY 10002, USA",
    phone: "+ (321) 984 754",
    email: "hello@startp.com",
  };

  return (
    <>
      <footer className="footer-area saas-footer-area heal-tech-footer-area">
        <div className="container mw-1320 position-relativ">
          <div className="row">
            {/* Logo and About */}
            <div
              className="col-lg-3 col-md-6 col-sm-12"
              data-aos="fade-in"
              data-aos-delay="100"
              data-aos-duration="700"
              data-aos-once="true"
            >
              <div className="single-footer-widget">
                <div className="logo">
                  <Link href="/">
                    <Image
                      src="/images/saas/white-bold-logo.png"
                      alt="logo"
                      width={110}
                      height={36}
                    />
                  </Link>
                </div>

                <p>
                  StartP empowers businesses with innovative SaaS solutions
                  designed to streamline workflows and drive growth.
                </p>

                <ul className="saas-social-links">
                  {socialLinks.map((social, index) => (
                    <li key={index}>
                      <a
                        href={social.href}
                        className={social.platform.toLowerCase()}
                        target="_blank"
                      >
                        <i className={`bx ${social.iconClass}`}></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Quick Links */}
            <div
              className="col-lg-3 col-md-6 col-sm-6"
              data-aos="fade-in"
              data-aos-delay="200"
              data-aos-duration="700"
              data-aos-once="true"
            >
              <div className="single-footer-widget ps-5">
                <h3>Quick Links</h3>
                <ul className="list">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Support Links */}
            <div
              className="col-lg-2 col-md-6 col-sm-6"
              data-aos="fade-in"
              data-aos-delay="300"
              data-aos-duration="700"
              data-aos-once="true"
            >
              <div className="single-footer-widget">
                <h3>Support</h3>
                <ul className="list">
                  {supportLinks.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Information */}
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="fade-in"
              data-aos-delay="400"
              data-aos-duration="700"
              data-aos-once="true"
            >
              <div className="single-footer-widget">
                <h3>Contact Information</h3>

                <div className="footer-contact-info">
                  <div className="info-card d-flex align-items-center gap-2">
                    <i className="bx bx-map"></i> {contactInfo.address}
                  </div>
                  <div className="d-flex align-items-center justify-content-between gap-1">
                    <div className="info-card d-flex align-items-center gap-2">
                      <i className="bx bx-phone"></i>
                      <a href={`tel:${contactInfo.phone}`}>
                        {contactInfo.phone}
                      </a>
                    </div>
                    <div className="info-card d-flex align-items-center gap-2">
                      <i className="bx bx-envelope"></i>
                      <a href={`mailto:${contactInfo.email}`}>
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="download-app">
                  <p>Download StartP app to get 15 days free trial</p>

                  <div className="d-flex align-items-center justify-content-between gap-2">
                    <a
                      href="https://www.apple.com/store"
                      className="d-app-card d-flex align-items-center gap-2"
                      target="_blank"
                    >
                      <i className="bx bxl-apple"></i>
                      <div>
                        <p>Download on the</p>
                        <h4>App Store</h4>
                      </div>
                    </a>
                    <a
                      href="https://play.google.com/store/games?hl=en&pli=1"
                      className="d-app-card d-flex align-items-center gap-2"
                      target="_blank"
                    >
                      <i className="bx bxl-play-store"></i>

                      <div>
                        <p>GET IT ON</p>
                        <h4>Google Play</h4>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="health-tech-copyright-area">
        <div className="container text-center">
          <p>
            © <span>StartP</span>. All rights reserved by{" "}
            <a href="https://envytheme.com/" target="_blank">
              EnvyTheme
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
