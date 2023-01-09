import React from "react";
import { OnPointAbout } from "../assets";
import { HeroContent } from "../content";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="hero_section">
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-md-12 col-sm-12 col-lg-6">
            <img
              src={OnPointAbout}
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-md-12 col-sm-12 col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">{HeroContent.title}</h1>
            <p className="lead">{HeroContent.body}</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-center">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2"
                onClick={() => navigate("/contact")}
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
    </section>
  );
};

export default Hero;
