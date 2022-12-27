import React from "react";
import { Features, Hero, Reasons, Scroller, Test } from "../components";

const Landing = () => {
  return (
    <div>
      <Hero />
      <Reasons />
      <Features />
      <Test />
      <Scroller gradientType={false} hoverAction={true} speedHover={200} />
    </div>
  );
};

export default Landing;
