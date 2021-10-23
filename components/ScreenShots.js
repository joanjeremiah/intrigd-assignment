import React, { Component } from "react";
import Slider from "react-slick";

export default class MultipleItems extends Component {
  constructor(props)
    {
        super();
        this.state = {
            images: [
              { src: '/images/screenshots/1.jpg'},
              { src: '/images/screenshots/2.jpg'},
              { src: '/images/screenshots/3.jpg'},
              { src: '/images/screenshots/4.jpg'},
              { src: '/images/screenshots/5.jpg'},
              { src: '/images/screenshots/6.jpg'},   
          ],
            currentImg: ''
        }
        this.plus = React.createRef();
        this.imageView = React.createRef();
    }
    HoverEnterHandle = (e) => {
      const box = e.target.getBoundingClientRect();
      e.target.style.filter = 'blur(1px)';
      this.plus.current.style.display = 'block';
      const x = box.left + box.width/4 - 40 + 'px';
      const y = box.top + box.height/2 - 60 + 'px';
      this.plus.current.style.top = y;
      this.plus.current.style.left = x;
    }
    HoverExitHandle = (e) => {
      e.target.style.filter = 'blur(0px)';
      this.plus.current.style.display='none';
    }
    ClickHandle = (e) => {
      this.setState({currentImg:e.target.getAttribute("data-src")})
      document.body.style.overflow = "hidden";
      this.props.showOrHideNav();
      this.imageView.current.classList.add('active')
    }
    closeFullScreenIamge = () => {
      document.body.style.overflow = "auto";
      this.props.showOrHideNav();
      this.imageView.current.classList.remove('active')
    }
    previousImg = () => {
      const i = this.state.images.findIndex((img) => img.src == this.state.currentImg)
      if(i == 0){
        this.setState({currentImg: this.state.images[this.state.images.length - 1].src})
      }
      else{
        this.setState({currentImg: this.state.images[i-1].src})
      }
    }
    nextImg = () => {
      const i = this.state.images.findIndex((img) => img.src == this.state.currentImg)
      if(i == this.state.images.length - 1){
        this.setState({currentImg: this.state.images[0].src})
      }
      else{
        this.setState({currentImg: this.state.images[i+1].src})
      }
    }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 990,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 780,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="image-carousel" id="screenshots">
        <div ref={this.imageView} className="fullscreen-image-container">
          <span><i className="fa fa-caret-right right-img" onClick={this.nextImg}></i></span>
          <span><i className="fa fa-caret-left left-img" onClick={this.previousImg}></i></span>
          <div className="fullscreen-image">
            <i className="fa fa-times close-button" onClick={this.closeFullScreenIamge}></i>
            <img src={this.state.currentImg} alt="" />
          </div> 
        </div>
        <span className="plus" ref={this.plus}>+</span>
        <h2 className="section-heading"> App ScreenShots </h2>
        <Slider {...settings}>
        {
            this.state.images.map((image, i) => {
                return (
                    <img key={i} data-src={image.src} src={image.src} className="image" alt={""} onMouseEnter={this.HoverEnterHandle} onMouseLeave={this.HoverExitHandle} onClick={this.ClickHandle} />
                );
            })
        }
        </Slider>
      </div>
    );
  }
}
