import React from "react";
import Marquee from "react-fast-marquee";
import { servicesContent } from "../content";

const Scroller = ({ gradientType, hoverAction, speedHover }) => {
  return (
    <div className="stacks_used_wrapper">
      <div className="desc_wrapper ">
        <h2 className="display-5 fw-bold lh-1 mb-3">Our expertise:</h2>

        <p className="lead">
          We are proficient in various applications to ensure that we use the
          best tools for your specific job and situation
        </p>
      </div>

      <Marquee
        gradient={gradientType}
        speed={speedHover}
        pauseOnHover={hoverAction}
      >
        {servicesContent.map((item, index) => (
          <div key={index} className="scroller_division mt-3 mb-3">
            {item.icon}
            <p>{item.title}</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Scroller;
