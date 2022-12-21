import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { servicesContent } from "../content";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Features = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(null);

  const handleclick = (i) => {
    // setToggle(!toggle);
    setActive(i);
  };
  return (
    <section id="services" className="services-area services-eight">
      <div className="section-title-five">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content">
                <h2 className="display-5 fw-bold lh-1 mb-3">
                  Our Best Services
                </h2>
                <p className="lead">
                  There are many variations of services available. Some of our
                  common services include the following:
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row ">
          {servicesContent.map((service, index) => (
            <motion.div
              key={index}
              className="col-lg-4 col-md-6 mt-3 "
              onHoverStart={() => handleclick(index)}
              onHoverEnd={() => setActive(null)}
              layout
            >
              <Card
                className={`${
                  index === active ? "service_card_large" : ""
                } service_card`}
              >
                {index !== active && (
                  <Card.Body>
                    <motion.div
                      layout
                      className="service-icon mt-3"
                      onClick={() => navigate(`${service.description.linkTo}`)}
                    >
                      {service.icon}
                    </motion.div>
                    <Card.Title className="feature_title_Card">
                      {service.title}
                    </Card.Title>

                    <motion.div layout>
                      <Card.Text>{service.desc}</Card.Text>
                    </motion.div>
                  </Card.Body>
                )}
                {index === active && (
                  <InnerFeatureCard description={service.desctiption} />
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

const InnerFeatureCard = ({ description }) => {
  const navigate = useNavigate();
  return (
    <>
      <Card.Body>
        <div className="text-start">
          <p>{description.stacks}</p>
        </div>
      </Card.Body>
      <Card.Footer>
        <p
          className="routing_para_link"
          onClick={() => navigate(`${description.linkTo}`)}
        >
          Learn more {"->"}
        </p>
      </Card.Footer>
    </>
  );
};
