"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

// Blog data array
const blogs = [
  {
    id: 1,
    title: "How HealthTech is shaping the future of healthcare",
    description:
      "Discover how innovative technologies are revolutionizing patient care and operational efficiency in healthcare.",
    date: "10 Dec, 2024",
    author: "By StartP",
    image: "/images/health-tech/blog1.jpg",
    link: "/blog/blog-details/",
    authorImage: "/images/health-tech/author.png",
  },
  {
    id: 2,
    title: "The benefits of telemedicine for healthcare providers",
    description:
      "Learn how telemedicine is improving access to care and enhancing the patient experience.",
    date: "9 Dec, 2024",
    author: "By StartP",
    image: "/images/health-tech/blog2.jpg",
    link: "/blog/blog-details/",
    authorImage: "/images/health-tech/author.png",
  },
];

const LatestNews = () => {
  return (
    <>
      <div className="fintech-blog-area pt-100 pb-70">
        <div className="container mw-1320">
          <div className="saas-section-title text-center mx-auto mw-780">
            <span className="sub-title2 d-inline-flex align-items-center gap-2 text-uppercase">
              <Image
                src="/images/fintech/icon1.png"
                alt="icon1"
                width={14}
                height={16}
              />
              Blog and News
            </span>

            <h2>
              Read Our Latest <span>News & Blog</span>
            </h2>
          </div>

          <div className="row">
            {blogs.map((blog) => (
              <div className="col-lg-6" key={blog.id}>
                <div className="health-tech-blog-card">
                  <Link href={blog.link}>
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={648}
                      height={400}
                    />
                  </Link>

                  <div className="contant">
                    <ul className="blog-meta">
                      <li>
                        <div className="d-flex align-items-center gap-2">
                          <Image
                            src={blog.authorImage}
                            alt="author"
                            className="rounded-circle"
                            width={50}
                            height={50}
                          />
                          {blog.author}
                        </div>
                      </li>
                      <li>{blog.date}</li>
                    </ul>

                    <h3>
                      <Link href={blog.link}>{blog.title}</Link>
                    </h3>
                    <p>{blog.description}</p>

                    <Link
                      href={blog.link}
                      className="health-tech-green-outline-btn d-inline-flex align-items-center gap-1"
                    >
                      Read More <i className="bx bx-right-arrow-alt"></i>
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
