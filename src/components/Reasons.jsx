import React from "react";
import { Card, CardImg } from "react-bootstrap";
import { ReasonContent } from "../content";

const Reasons = () => {
  return (
    <section className="reason_section">
      <div className="reasons_wrapper d-flex justify-content-center">
        <div className="row reasons_row">
          <div className="col-lg-6 col-sm-12 col-md-12 column_image">
            <Card className="custom_reason_card">
              <CardImg src={ReasonContent.image} />
            </Card>
          </div>
          <div className="col-lg-6 col-sm-12 col-md-12 column_feature_blocks">
            <div className="row">
              {ReasonContent.cardContents.map((reason, index) => {
                return (
                  <div className="col-sm-12 col-md-6 mb-1 feature_small_column" key={index}>
                    <Card
                      className="custom_reason_card"
                      style={{ borderColor: `${reason.color}` }}
                    >
                      <Card.Body className="custom_card_features_body">
                        <h6 className="reason_small_title">{reason.title}</h6>
                        <p className="reason_small_text">{reason.text}</p>
                      </Card.Body>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reasons;
