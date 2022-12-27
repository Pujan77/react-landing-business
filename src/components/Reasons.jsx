import React from "react";
import { Card, CardImg } from "react-bootstrap";
import { ReasonContent } from "../content";

const Reasons = () => {
  return (
    <div className="reasons_wrapper d-flex justify-content-center">
      <div className="row">
        <div className="col-lg-6 col-sm-12 col-md-6">
          <Card>
            <CardImg src={ReasonContent.image} />
          </Card>
        </div>
        <div className="col-lg-6 col-sm-12 col-md-6">
          <div className="row">
            {ReasonContent.cardContents.map((reason, index) => {
              return (
                <div className="col col-6">
                  <Card>
                    <Card.Body>
                      <h6>{reason.title}</h6>
                      <p>{reason.text}</p>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
