import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { testimonialContent } from "../content";

const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <div className="large-container">
        <div className="sec-title">
          <h2>What out clients say ?</h2>
        </div>
        <OwlCarousel
          className="testimonial-carousel owl-carousel owl-theme"
          items={1}
          animateIn={`zoomIn`}
          animateOut={`slideOutDown`}
          margin={10}
          autoplay={true}
          loop={true}
          dots={false}
        >
          {testimonialContent.map((item) => {
            return (
              <div className="item testimonial-block">
                <div className="inner-box">
                  <div className="text">{item.review}</div>
                  <div className="info-box">
                    <div className="thumb">
                      <img src={item.profileImage} alt="" />
                    </div>
                    <h4 className="name">{item.name}</h4>
                    <span className="designation">{item.position}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </OwlCarousel>

        <div className="thumb-layer paroller">
          <figure className="image">
            <img
              src="http://t.commonsupport.com/adro/images/resource/user-thumbs.png"
              alt=""
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
