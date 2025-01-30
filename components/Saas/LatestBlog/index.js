"use client";

import React from "react";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    category: "Articles",
    date: "5 Dec, 2024",
    title: "5 Ways SaaS solutions are transforming businesses",
    description:
      "Discover how modern SaaS tools drive efficiency and innovation across industries.",
    link: "/blog/blog-details/",
    delay: 100,
  },
  {
    id: 2,
    category: "Guides",
    date: "4 Dec, 2024",
    title: "The ultimate guide to SaaS integrations",
    description:
      "Unlock the full potential of your tech stack by connecting your favorite tools seamlessly.",
    link: "/blog/blog-details/",
    delay: 200,
  },
  {
    id: 3,
    category: "Articles",
    date: "3 Dec, 2024",
    title: "The future of work: why collaboration tools matter",
    description:
      "Explore the impact of seamless collaboration in today’s dynamic work environments.",
    link: "/blog/blog-details/",
    delay: 300,
  },
];

const LatestBlog = () => {
  return (
    <>
      <div className="saas-blog-area pb-70">
        <div className="container mw-1320">
          <div className="saas-section-title text-center mx-auto mw-780">
            <h2>
              Read Our Latest <span>News & Blog</span>
            </h2>
          </div>

          <div className="row">
            {blogPosts.slice(0, 3).map((post) => (
              <div
                key={post.id}
                className="col-lg-4 item"
                data-aos="fade-up"
                data-aos-delay={post.delay}
                data-aos-duration="700"
                data-aos-once="true"
              >
                <div className="sass-blog-card">
                  <div className="blog-meta d-flex align-items-center gap-3">
                    <Link href="#" className="meta-tag">
                      {post.category}
                    </Link>
                    <p>{post.date}</p>
                  </div>

                  <h3>
                    <Link href={post.link}>{post.title}</Link>
                  </h3>
                  <p>{post.description}</p>

                  <Link href={post.link} className="saas-outline-btn">
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestBlog;
