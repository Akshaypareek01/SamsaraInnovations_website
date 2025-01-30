"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const faqData = [
  {
    id: "a",
    question: "1. Is there a free trial available?",
    answer: (
      <>
        <p>
          <strong>Ans:</strong> Yes, we offer a 14-day free trial for all new
          users. No credit card is required, so you can explore our features
          risk-free.
        </p>
      </>
    ),
  },
  {
    id: "b",
    question: "2. Can I cancel my subscription at any time?",
    answer: (
      <>
        <p>
          <strong>Ans:</strong> Yes, you can cancel your subscription at any
          time. There are no hidden fees, and the cancellation process is
          straightforward. Once canceled, your subscription will not renew, but
          you'll retain access until the end of your current billing cycle.
        </p>
      </>
    ),
  },
  {
    id: "c",
    question: "3. What integrations does the platform support?",
    answer: (
      <>
        <p>
          <strong>Ans:</strong> Our platform supports a wide range of
          integrations, including standard tools like Slack, Google Workspace,
          and Microsoft 365, as well as advanced integrations for Pro and
          Enterprise plans, such as CRM systems, marketing platforms, and custom
          API support.
        </p>
      </>
    ),
  },
  {
    id: "d",
    question: "4. Do you offer custom pricing for large teams or enterprises?",
    answer: (
      <>
        <p>
          <strong>Ans:</strong> Yes, we offer custom pricing tailored to the
          needs of large teams or enterprises. Contact our sales team to discuss
          your requirements, and we’ll provide a personalized solution designed
          to fit your goals.
        </p>
      </>
    ),
  },
  {
    id: "e",
    question: "5. What support options are available?",
    answer: (
      <>
        <p>
          <strong>Ans:</strong> We offer multiple support options depending on
          your plan:
        </p>
        <ul>
          <li>Basic Plan: Email support.</li>
          <li>Pro Plan: Priority email and chat support.</li>
          <li>
            Enterprise Plan: 24/7 premium support, including access to a
            dedicated account manager.
          </li>
        </ul>
      </>
    ),
  },
];

const Faq = () => {
  return (
    <div className="saas-faq-area health-tech-faq-area mx-auto ptb-100">
      <div className="container mw-1320 position-relative">
        <div className="row">
          <div className="col-lg-5">
            <div className="saas-section-title mx-auto">
              <span className="sub-title">FAQs</span>
              <h2>
                Frequently Asked <span>Questions</span>
              </h2>
              <p>
                Have any questions? Don&apos;t hesitate to{" "}
                <Link href="/contact">contact us!</Link>
              </p>

              <div className="saas-faq-btn text-center">
                <Link href="/faq" className="saas-outline-btn">
                  See All FAQ&apos;s
                </Link>
              </div>
              <Image
                src="/images/saas/shape2.png"
                alt="shape2"
                className="saas-shape2"
                width={190}
                height={156}
              />
            </div>
          </div>

          <div className="col-lg-7">
            <Accordion className="saas-accordion" preExpanded={["a"]}>
              {faqData.map((faq) => (
                <AccordionItem key={faq.id} uuid={faq.id}>
                  <AccordionItemHeading>
                    <AccordionItemButton>{faq.question}</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div>{faq.answer}</div>
                  </AccordionItemPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
