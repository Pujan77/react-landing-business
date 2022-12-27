import React, { useEffect } from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Testimonial = () => {
   
  return (
    <section class="testimonial-section">
    <div class="large-container">
        <div class="sec-title">
            <span class="title">Testimonial</span>
            <h2>What Our core client say ?</h2>
        </div>
    <OwlCarousel className="testimonial-carousel owl-carousel owl-theme" items={1} animateIn={`zoomIn`} animateOut={`slideOutDown`} margin={10} autoplay ={true} loop={true} dots
 ={false}>
        <div class="item testimonial-block">
        <div class="inner-box">
						<div class="text">Why is this important? Because clients want to know the businesses they depend on for advice, are well managed in their own right.  Not only that but this event gives you the chance to give your back-office team</div>
						<div class="info-box">
							<div class="thumb"><img src="http://t.commonsupport.com/adro/images/resource/thumb-1.jpg" alt="" /></div>
							<h4 class="name">Mahfuz Riad</h4>
							<span class="designation">Ui Designer & CEO</span>
						</div>
					</div>
        </div>
        <div class="item testimonial-block">
        <div class="inner-box">
						<div class="text">Why is this important? Because clients want to know the businesses they depend on for advice, are well managed in their own right.  Not only that but this event gives you the chance to give your back-office team</div>
						<div class="info-box">
							<div class="thumb"><img src="http://t.commonsupport.com/adro/images/resource/thumb-1.jpg" alt="" /></div>
							<h4 class="name">Mahfuz Riad</h4>
							<span class="designation">Ui Designer & CEO</span>
						</div>
					</div>
        </div>
        <div class="item testimonial-block">
        <div class="inner-box">
						<div class="text">Why is this important? Because clients want to know the businesses they depend on for advice, are well managed in their own right.  Not only that but this event gives you the chance to give your back-office team</div>
						<div class="info-box">
							<div class="thumb"><img src="http://t.commonsupport.com/adro/images/resource/thumb-1.jpg" alt="" /></div>
							<h4 class="name">Mahfuz Riad</h4>
							<span class="designation">Ui Designer & CEO</span>
						</div>
					</div>
        </div>
        <div class="item testimonial-block">
        <div class="inner-box">
						<div class="text">Why is this important? Because clients want to know the businesses they depend on for advice, are well managed in their own right.  Not only that but this event gives you the chance to give your back-office team</div>
						<div class="info-box">
							<div class="thumb"><img src="http://t.commonsupport.com/adro/images/resource/thumb-1.jpg" alt="" /></div>
							<h4 class="name">Mahfuz Riad</h4>
							<span class="designation">Ui Designer & CEO</span>
						</div>
					</div>
        </div>
        <div class="item testimonial-block">
        <div class="inner-box">
						<div class="text">Why is this important? Because clients want to know the businesses they depend on for advice, are well managed in their own right.  Not only that but this event gives you the chance to give your back-office team</div>
						<div class="info-box">
							<div class="thumb"><img src="http://t.commonsupport.com/adro/images/resource/thumb-1.jpg" alt="" /></div>
							<h4 class="name">Mahfuz Riad</h4>
							<span class="designation">Ui Designer & CEO</span>
						</div>
					</div>
        </div>
      </OwlCarousel>
      
			<div class="thumb-layer paroller">
            <figure class="image"><img src="http://t.commonsupport.com/adro/images/resource/user-thumbs.png" alt="" /></figure>
        </div>
    </div>
</section>
  )
}

export default Testimonial