"use client";

import React from "react";

const funfactsData = [
  {
    id: 1,
    value: "2k+",
    description: "Active User",
  },
  {
    id: 2,
    value: "99+",
    description: "Trusted Partners",
  },
  {
    id: 3,
    value: "4.9",
    description: "User Rating",
  },
];

const Funfact = () => {
  return (
    <>
      <div className="saas-funfact-area pt-100">
        <div className="row">
          {funfactsData.map((funfact) => (
            <div key={funfact.id} className="col-sm-4 item">
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

export default Funfact;
