import React from "react";
import { Features, Hero, Reasons, Scroller, Testimonial } from "../components";

const Landing = () => {
  return (
    <div>
      <Hero />
      <Scroller gradientType={false} hoverAction={true} speedHover={200} />
      <Reasons />
      <Testimonial />
      <Features />
    </div>
  );
};

export default Landing;
