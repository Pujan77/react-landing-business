import React from "react";
import { FInalLogo_1 } from "../assets";
import { HeroContent } from "../content";

const Hero = () => {
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={FInalLogo_1}
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold lh-1 mb-3">{HeroContent.title}</h1>
          <p className="lead">{HeroContent.body}</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-center">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 me-md-2"
            >
              Get in Touch
            </button>
            {/* <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Default
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
