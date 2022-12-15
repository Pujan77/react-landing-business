import React from "react";
import { Card } from "react-bootstrap";
import { servicesContent } from "../content";

const Features = () => {
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
        <div className="row">
          {servicesContent.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6 mt-3">
              <Card className="service_card">
                <div className="service-icon mt-3">{service.icon}</div>
                <Card.Body>
                  <Card.Title className="feature_title_Card">
                    {service.title}
                  </Card.Title>
                  <Card.Text>{service.desc}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
