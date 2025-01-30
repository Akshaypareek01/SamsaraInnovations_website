"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Cto = () => {
  return (
    <>
      <div className="saas-cto-area">
        <div className="container mw-1320">
          <div className="saas-cto-content text-center">
            <h2>
              <span>Experience the Power</span> of Our Platform
            </h2>
            <p>
              Start your free trial today and see the difference in your
              workflow.
            </p>

            <Link href="/contact" className="saas-default-btn">
              Start Free Trial
            </Link>

            {/* Images */}
            <Image
              src="/images/saas/man1.png"
              alt="man1"
              className="man-shap-1"
              width={175}
              height={265}
            />
            <Image
              src="/images/saas/man2.png"
              alt="man2"
              className="man-shap-2"
              width={150}
              height={132}
            />

            {/* Gradient bg color */}
            <div className="gradient-bg"></div>
            <div className="gradient-bg2"></div>
            <div className="gradient-bg3"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cto;
