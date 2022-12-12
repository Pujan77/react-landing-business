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
                <h6>Services</h6>
                <h2 className="fw-bold">Our Best Services</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.
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
              <Card>
                <div className="service-icon">{service.icon}</div>
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
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
