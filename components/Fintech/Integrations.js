"use client";

import React from "react";
import Image from "next/image";

const integrationsData = [
  {
    id: 1,
    name: "Google",
    imageUrl: "/images/saas/integrations/google.png",
    width: 60,
    height: 60,
    delay: 50,
  },
  {
    id: 2,
    name: "Evernote",
    imageUrl: "/images/saas/integrations/evernote.png",
    width: 80,
    height: 80,
    delay: 100,
  },
  {
    id: 3,
    name: "Asana",
    imageUrl: "/images/saas/integrations/asana.png",
    width: 100,
    height: 100,
    delay: 150,
  },
  {
    id: 4,
    name: "Drive",
    imageUrl: "/images/saas/integrations/drive.png",
    width: 60,
    height: 60,
    delay: 200,
  },
  {
    id: 5,
    name: "Mailchimp",
    imageUrl: "/images/saas/integrations/mailchimp.png",
    width: 80,
    height: 80,
    delay: 250,
  },
  {
    id: 6,
    name: "Dropbox",
    imageUrl: "/images/saas/integrations/dropbox.png",
    width: 100,
    height: 100,
    delay: 300,
  },
  {
    id: 7,
    name: "StartP Logo",
    imageUrl: "/images/saas/integrations/startp-logo.png",
    width: 150,
    height: 150,
  },
  {
    id: 8,
    name: "Slack",
    imageUrl: "/images/saas/integrations/slack.png",
    width: 100,
    height: 100,
    delay: 350,
  },
  {
    id: 9,
    name: "Stripe",
    imageUrl: "/images/saas/integrations/stripe.png",
    width: 80,
    height: 80,
    delay: 400,
  },
  {
    id: 10,
    name: "Salesforce",
    imageUrl: "/images/saas/integrations/salesforce.png",
    width: 60,
    height: 60,
    delay: 450,
  },
  {
    id: 11,
    name: "Airtable",
    imageUrl: "/images/saas/integrations/airtable.png",
    width: 100,
    height: 100,
    delay: 500,
  },
  {
    id: 12,
    name: "HubSpot",
    imageUrl: "/images/saas/integrations/hubspot.png",
    width: 100,
    height: 100,
    delay: 550,
  },
  {
    id: 13,
    name: "Shopify",
    imageUrl: "/images/saas/integrations/shopify.png",
    width: 60,
    height: 60,
    delay: 600,
  },
];

const Integrations = () => {
  return (
    <>
      <div className="saas-integrations-area pb-100">
        <div className="container mw-1320">
          <div className="saas-section-title text-center mx-auto">
            <h2>
              Seamlessly Connect with the <span>Tools</span> You Love
            </h2>
            <p>
              Our integrations ensure your workflow is uninterrupted and
              customized to fit the way you work best.
            </p>
          </div>

          <div className="saas-integrations">
            <Image
              src="/images/saas/integrations/integrations-line.png"
              alt="integrations-line"
              className="integrations-line"
              width={1322}
              height={320}
            />
            <h3 className="title">Integrations</h3>
            <ul>
              {integrationsData.map((integration) => (
                <li key={integration.id}>
                  <Image
                    src={integration.imageUrl}
                    alt={integration.name}
                    width={integration.width}
                    height={integration.height}
                    data-aos="fade-in"
                    data-aos-delay={integration.delay}
                    data-aos-duration="700"
                    data-aos-once="true"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Integrations;
