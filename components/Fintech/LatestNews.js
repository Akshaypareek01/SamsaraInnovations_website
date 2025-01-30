"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "5 Tips to optimize your financial operations today",
    description:
      "Practical advice to streamline workflows and reduce costs using cutting-edge tools.",
    date: "10 December",
    readTime: "10 min read",
    image: "/images/fintech/blog1.jpg",
    link: "/blog/blog-details/",
  },
  {
    id: 2,
    title: "The power of AI in financial decision-making",
    description:
      "Learn how artificial intelligence is transforming financial strategies with real-time insights.",
    date: "09 December",
    readTime: "7 min read",
    image: "/images/fintech/blog2.jpg",
    link: "/blog/blog-details/",
  },
  {
    id: 3,
    title: "How fintech is changing the game",
    description:
      "How technologies are reshaping the financial landscape and driving business success.",
    date: "08 December",
    readTime: "15 min read",
    image: "/images/fintech/blog3.jpg",
    link: "/blog/blog-details/",
  },
];

const LatestNews = () => {
  return (
    <>
      <div className="fintech-blog-area pt-100 pb-70">
        <div className="container mw-1320">
          <div className="saas-section-title text-center mx-auto mw-780">
            <span className="sub-title2 d-inline-flex align-items-center gap-2">
              <Image
                src="/images/fintech/icon1.png"
                alt="icon1"
                width={14}
                height={16}
              />
              Blog and News
            </span>

            <h2>
              Read Our Latest <span>News & Blog</span>
            </h2>
          </div>

          <div className="row">
            {blogPosts.slice(0, 3).map((post) => (
              <div key={post.id} className="col-lg-4">
                <div className="fintech-blog-card">
                  <Link href={post.link} className="d-block">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={636}
                      height={450}
                      className="w-100"
                    />
                  </Link>

                  <div className="contant">
                    <div className="blog-meta d-flex align-items-end gap-3">
                      <div className="date">
                        <span>{post.date.split(" ")[0]}</span>
                        <p>{post.date.split(" ")[1]}</p>
                      </div>
                      <p>{post.readTime}</p>
                    </div>
                    <h3>
                      <Link href={post.link}>{post.title}</Link>
                    </h3>
                    <p>{post.description}</p>

                    <Link href={post.link} className="fintech-outline-btn">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestNews;
