import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { testimonialContent } from "../content";

const Testimonial = () => {
  return (
    <section class="testimonial-section">
      <div class="large-container">
        <div class="sec-title">
          <span class="title">Testimonial</span>
          <h2>What Our core client say ?</h2>
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
              <>
                <div class="item testimonial-block">
                  <div class="inner-box">
                    <div class="text">{item.text}</div>
                    <div class="info-box">
                      <div class="thumb">
                        <img src={item.image} alt="" />
                      </div>
                      <h4 class="name">{item.name}</h4>
                      <span class="designation">{item.position}</span>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </OwlCarousel>

        <div class="thumb-layer paroller">
          <figure class="image">
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
