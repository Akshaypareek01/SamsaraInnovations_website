"use client";

import React from "react";
import Image from "next/image";
import Sidebar from "./Sidebar";

const DetailsContent = () => {
  return (
    <>
      <div className="ptb-100">
        <div className="container mw-1520">
          <div className="row">
            <div className="col-lg-8">
              <div className="health-tech-service-details">
                <h1>
                  Our Telemedicine Services enable healthcare providers to offer
                  remote consultations, ensuring accessibility and convenience
                  for both patients and doctors.
                </h1>

                <Image
                  src="/images/health-tech/service-details.jpg"
                  alt="service-details"
                  width={970}
                  height={350}
                />

                <h3>Real-Time virtual consultations</h3>
                <p>
                  Real-Time Virtual Consultations enable healthcare providers to
                  conduct secure, live video appointments with patients from
                  anywhere. This service ensures convenience, reducing wait
                  times and eliminating the need for travel. It helps maintain
                  continuous care, particularly for patients in remote areas or
                  those with mobility issues.
                </p>

                <h3>Patient monitoring and follow-ups</h3>
                <p>
                  Patient Monitoring and Follow-Ups enable healthcare providers
                  to remotely track patient progress and manage chronic
                  conditions. This service allows for continuous care, even
                  between in-person visits, ensuring timely interventions and
                  better outcomes. Patients can easily share their health data,
                  while providers can offer personalized guidance and
                  adjustments to treatment plans.
                </p>

                <h5>Key Features:</h5>
                <ul>
                  <li>Continuous monitoring of vital signs and symptoms.</li>
                  <li>
                    Easy-to-use platform for patients to report their health
                    status.
                  </li>
                  <li>
                    Timely follow-up appointments to assess progress and adjust
                    treatments.
                  </li>
                  <li>
                    Alerts for abnormal readings to prompt immediate action.
                  </li>
                </ul>

                <h3>HIPAA-compliant security</h3>
                <p>
                  HIPAA-Compliant Security ensures that all patient data is
                  securely encrypted and protected in accordance with healthcare
                  regulations. Our platform uses advanced encryption methods to
                  safeguard sensitive information during virtual consultations
                  and storage. This ensures both healthcare providers and
                  patients can trust that their privacy is maintained at all
                  times.
                </p>

                <Image
                  src="/images/health-tech/service-details2.jpg"
                  alt="service-details2"
                  width={970}
                  height={400}
                />

                <h3>Easy scheduling and integration</h3>
                <p>
                  Easy Scheduling and Integration allow healthcare providers to
                  seamlessly manage appointments and integrate with existing
                  systems. Our platform syncs effortlessly with your practice’s
                  scheduling software, making it easy to book, reschedule, and
                  track appointments. This streamlines workflow, saving time for
                  both healthcare providers and patients while reducing
                  administrative overhead.
                </p>

                <h3>Cross platform support</h3>
                <p>
                  Accessible on any device—smartphones, tablets, and
                  desktops—ensuring flexibility and ease of use for both
                  patients and healthcare providers.
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsContent;
