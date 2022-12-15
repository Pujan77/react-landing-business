import React from "react";
import { Features, Hero, Scroller } from "../components";

const Landing = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Scroller gradientType={false} hoverAction={true} speedHover={200} />
    </div>
  );
};

export default Landing;
