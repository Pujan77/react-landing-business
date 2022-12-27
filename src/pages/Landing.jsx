import React from "react";
import {
  Features,
  Hero,
  Reasons,
  Scroller,
  Test,
  Testimonial,
} from "../components";

const Landing = () => {
  return (
    <div>
      <Hero />
      <Reasons />
      <Testimonial />
      <Features />
      <Test />
      <Scroller gradientType={false} hoverAction={true} speedHover={200} />
    </div>
  );
};

export default Landing;
