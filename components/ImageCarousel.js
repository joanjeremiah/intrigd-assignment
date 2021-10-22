import React, { Component } from 'react';

import ImgsViewer from 'react-images-viewer'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class ImageCarousel extends Component
{
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
            isOpen: false,
            currImg: 0,
        }
    }

    openImgsViewer  = (index, event) => {
        event.preventDefault()
        this.setState({
          currImg: index,
          isOpen: true,
        })
      }
      closeImgsViewer = () => {
        this.setState({
          currImg: 0,
          isOpen: false,
        })
      }
      gotoPrev = () => {
        this.setState({
          currImg: this.state.currImg - 1
        })
      }
      gotoNext = () => {
        this.setState({
          currImg: this.state.currImg + 1
        })
      }
      gotoImg = (index) => {
        this.setState({
          currImg: index
        })
      }
      handleClickImg = () => {
        if (this.state.currImg === this.props.imgs.length - 1){
            this.gotoImg(0);
        }
        this.gotoNext()
      }

    render()
    {
        const settings = {
            dots: true,
            dotsClass: 'slick-dots',
            className: '',
            arrows: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 2000,
            adaptiveHeight: true
        };
        return (
            <div className="image-carousel">
                <h2 className="uppercase section-heading" style={{color: 'black'}}>APP SCREENSHOTS</h2>
                <div>
                    <Slider className="slider" {...settings}>
                        {
                            this.state.images.map((image, i) => {
                                return (
                                    <div key={i} onClick={(e) => this.openImgsViewer(i, e)} className="img-holder">
                                        <img src={image.src} className="image" alt={""}/>
                                        {console.log(image,image.height)}
                                    </div>
                                );
                            })
                        }
                    </Slider>
                </div>
                <ImgsViewer
                    backdropCloseable
                    currImg={this.state.currImg}
                    imgs={this.state.images}
                    isOpen={this.state.isOpen}
                    onClickImg={this.handleClickImg}
                    onClickNext={this.gotoNext}
                    onClickPrev={this.gotoPrev}
                    onClickThumbnail={this.gotoImg}
                    onClose={this.closeImgsViewer}
                />
            </div>
        );
    }
}

export default ImageCarousel;