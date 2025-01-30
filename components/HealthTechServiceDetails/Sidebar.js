"use client";

import React from "react";
import Link from "next/link";

const Sidebar = () => {
  const serviceCategories = [
    { name: "Telemedicine Services", link: "/health-tech-service-details" },
    { name: "AI-Driven Diagnostics", link: "/health-tech-service-details" },
    {
      name: "Patient Management Solutions",
      link: "/health-tech-service-details",
    },
    {
      name: "Data Security and Compliance",
      link: "/health-tech-service-details",
    },
    {
      name: "Wearable Technology Integration",
      link: "/health-tech-service-details",
    },
    {
      name: "Healthcare Analytics and Insights",
      link: "/health-tech-service-details",
    },
  ];

  const contactInfo = [
    {
      icon: "bx bx-phone",
      type: "phone",
      link: "tel:+(321)984754",
      label: "+ (321) 984 754",
    },
    {
      icon: "bx bx-envelope",
      type: "email",
      link: "mailto:startp@gmail.com",
      label: "startp@gmail.com",
    },
    {
      icon: "bx bx-map",
      type: "address",
      link: "#",
      label: "27 Division St, New York, NY 10002, USA",
    },
  ];

  return (
    <>
      <div className="heal-tech-sidebar">
        {/* Services Category */}
        <div className="ht-sidebar-widget s-category">
          <h3>Services Category</h3>
          <ul>
            {serviceCategories.map((category, index) => (
              <li key={index}>
                <Link href={category.link}>
                  {category.name}
                  <i className="bx bx-right-arrow-alt"></i>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div className="ht-sidebar-widget s-contact">
          <h3>
            Need any support from our experts? Please feel free to contact us.
          </h3>
          <ul>
            {contactInfo.map((contact, index) => (
              <li key={index}>
                <a href={contact.link}>
                  <i className={contact.icon}></i>
                  <u>{contact.label}</u>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
