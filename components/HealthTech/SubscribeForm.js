"use client";

import React, { useState } from "react";
import Image from "next/image";

const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !isChecked) {
      setStatus("Please enter a valid email and agree to the privacy policy.");
      return;
    }

    // Simulate an API call or handle the form submission here
    console.log("Subscribed Email:", email);

    setStatus("Thank you for subscribing!");
    setEmail("");
    setIsChecked(false);
  };

  return (
    <>
      <div className="saas-subscribe-area">
        <div className="container mw-1320">
          <div className="saas-subscribe-content heal-tech-gradient-bg rounded-0">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="subscribe-title">
                  <h2>
                    <span>Subscribe</span> to our newsletter for the latest
                    updates & insights!
                  </h2>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="saas-subscribe-form">
                  <form onSubmit={handleSubmit}>
                    <input
                      type="email"
                      className="form-control rounded-0"
                      id="email"
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />

                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                        checked={isChecked}
                        onChange={(e) => setIsChecked(e.target.checked)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleCheck1"
                      >
                        I agree with privacy policy
                      </label>
                    </div>

                    <button type="submit" className="saas-green-btn rounded-0">
                      Subscribe
                    </button>
                  </form>

                  {status && <p className="status-message text-white">{status}</p>}
                </div>
              </div>
            </div>

            <Image
              src="/images/saas/man3.png"
              alt="man"
              className="saas-man3"
              width={292}
              height={270}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscribeForm;
