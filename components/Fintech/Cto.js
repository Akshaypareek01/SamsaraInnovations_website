"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Cto = () => {
  return (
    <>
      <div className="fintech-cto-area">
        <div className="container mw-1320">
          <div className="fintech-cto-content">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="content">
                  <h2>
                    Ready to Transform Your <span>Financial Future</span>?
                  </h2>
                  <p>Join thousands of satisfied users today!</p>

                  <Link href="/contact" className="fintech-green-btn">
                    Get Started Now
                  </Link>
                </div>
              </div>

              <div className="col-lg-5">
                <div className="image">
                  <Image
                    src="/images/fintech/app2.png"
                    alt="app2"
                    width={480}
                    height={400}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cto;
