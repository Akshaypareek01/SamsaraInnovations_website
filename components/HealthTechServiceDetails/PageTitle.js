"use client";

import React from "react";
import Link from "next/link";

const PageTitle = () => {
  return (
    <>
      <div
        className="page-title-area-two"
        style={{
          backgroundImage: "url(/images/health-tech/page-title-bg.jpg)",
        }}
      >
        <div className="container position-relative">
          <div className="page-title-content text-center">
            <h2>Telemedicine Services</h2>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>Service Details</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageTitle;
