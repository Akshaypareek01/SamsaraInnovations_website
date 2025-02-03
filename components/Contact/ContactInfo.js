import React from "react";
import * as Icon from "react-feather";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-info-area ptb-80">
        <div className="container">
          <div className="row justify-content-center">
          <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="contact-info-box">
                <div className="icon">
                  <Icon.Linkedin />
                </div>
                <h3>LinkedIn</h3>
                {/* <p>
                  <a href="mailto:admin@startp.com">admin@startp.com</a>
                </p> */}
                <p>
                  <a href="https://www.linkedin.com/company/samsarawelllness" target="blank">Samsara</a>
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="contact-info-box">
                <div className="icon">
                  <Icon.Mail />
                </div>
                <h3>Mail Here</h3>
                {/* <p>
                  <a href="mailto:admin@startp.com">admin@startp.com</a>
                </p> */}
                <p>
                  <a href="mailto:Info.samsarainnovations@gmail.com">Info.samsarainnovations@gmail.com</a>
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="contact-info-box">
                <div className="icon">
                  <Icon.MapPin />
                </div>
                <h3>Visit Here</h3>
                <p>
                Head Office (Goa, India)
                </p>
                <p>
                Corporate Office (Bangalore, India )
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="contact-info-box">
                <div className="icon">
                  <Icon.Phone />
                </div>
                <h3>Call Here</h3>
                <p>
                  <a href="tel:+91 6360198390">+91 63601 98390</a>
                </p>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
