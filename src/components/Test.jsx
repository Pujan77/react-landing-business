import React, { useState } from "react";

const Feature = ({ title, description, icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="feature"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={icon} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      {isHovered && <div className="tooltip">{description}</div>}
    </div>
  );
};

const Features = () => (
  <section className="features">
    <Feature
      title="Feature 1"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      icon="/path/to/icon.svg"
    />
    <Feature
      title="Feature 2"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      icon="/path/to/icon.svg"
    />
    <Feature
      title="Feature 3"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      icon="/path/to/icon.svg"
    />
  </section>
);

export default Features;
