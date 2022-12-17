import React from "react";
import { Features, Hero, Reasons, Scroller } from "../components";

const Landing = () => {
  return (
    <div>
      <Hero />
      {/* <Reasons /> */}
      <Features />
      <Scroller gradientType={false} hoverAction={true} speedHover={200} />
    </div>
  );
};

export default Landing;
