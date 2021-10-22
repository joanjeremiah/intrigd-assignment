import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      dotsClass: "testimonial-slick-dots",
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 800,
      autoplaySpeed: 4000,
      cssEase: "linear"
    };
    return (
      <div id="reviews" style={{overflowX: 'hidden'}}>
        <Slider {...settings}>
          <div className="client-testimonial">
            <img src="/images/testimonials/shubham.jpeg" alt="person-img" />
            <div className="client-rating">
                <ul className="rating-list">
                    <li><a href="#"><i className="fa fa-star"></i></a></li>
                    <li><a href="#"><i className="fa fa-star"></i></a></li>
                    <li><a href="#"><i className="fa fa-star"></i></a></li>
                    <li><a href="#"><i className="fa fa-star"></i></a></li>
                    <li><a href="#"><i className="fa fa-star-o"></i></a></li>
                </ul>
            </div>
            <div className="testimonial-body">
                <p>Great thought and perfect implementation. App is very good with its content.</p>
                <div className="author">
                    <h3>Shubham Gupta</h3>
                </div>
            </div>
          </div>
          <div className="client-testimonial">
            <img src="/images/testimonials/ayush.jpeg" alt="person-img" />
            <div className="client-rating">
                <ul className="rating-list">
                    <li><a href="#"><i className="fa fa-star"></i></a></li>
                    <li><a href="#"><i className="fa fa-star"></i></a></li>
                    <li><a href="#"><i className="fa fa-star"></i></a></li>
                    <li><a href="#"><i className="fa fa-star"></i></a></li>
                    <li><a href="#"><i className="fa fa-star-o"></i></a></li>
                </ul>
            </div>
            <div className="testimonial-body">
                <p>Best app with future requirements of youth.</p>
                <div className="author">
                    <h3>Ayush Maheshwari</h3>
                </div>
            </div>
          </div>
          <div className="client-testimonial">
            <img src="/images/testimonials/jame_sir.jpg" alt="person-img" />
            <div className="client-rating">
                <ul className="rating-list">
                    <li><a href="#"><i className="fa fa-star"></i></a></li>
                    <li><a href="#"><i className="fa fa-star"></i></a></li>
                    <li><a href="#"><i className="fa fa-star"></i></a></li>
                    <li><a href="#"><i className="fa fa-star"></i></a></li>
                    <li><a href="#"><i className="fa fa-star-o"></i></a></li>
                </ul>
            </div>
            <div className="testimonial-body">
                <p>The best ever news app in the world I would say!!!. I mean it. Delivers exactly what you need</p>
                <div className="author">
                    <h3>James Joel</h3>
                </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}