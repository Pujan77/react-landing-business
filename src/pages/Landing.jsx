import React from "react";
import { Features, Hero, Reasons, Scroller, Testimonial } from "../components";

const Landing = () => {
  return (
    <div>
      <Hero />
      <Reasons />
      <Testimonial />
      <Features />
      <Scroller gradientType={false} hoverAction={true} speedHover={200} />
    </div>
  );
};

export default Landing;
