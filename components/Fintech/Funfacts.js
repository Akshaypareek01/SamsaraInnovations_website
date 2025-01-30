"use client";

import React from "react";

const funfactsData = [
  { value: "2k+", description: "Active User" },
  { value: "99+", description: "Trusted Partners" },
  { value: "4.9", description: "User Rating" },
];

const Funfacts = () => {
  return (
    <>
      <div className="fintech-funfact-area pt-100">
        <div className="row">
          {funfactsData.map((funfact, index) => (
            <div key={index} className="col-sm-4 item">
              <div className="saas-funfact-card text-center">
                <h2>{funfact.value}</h2>
                <p>{funfact.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Funfacts;
