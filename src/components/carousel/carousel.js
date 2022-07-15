import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './carousel.css';

function Carousel() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
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
    }
    return (
        <Slider {...settings}>
            <div className="carousel-card-wrapper">
                <div className="carousel-card">
                    <div className="carousel-card-image">
                        <div className="cci_01"></div>
                    </div>
                    <div className="place-details">
                        <h2>Gaming <span className="province-title">Metazimba Gaming</span></h2>
                    </div>
                </div>
            </div>
            <div className="carousel-card-wrapper">
                <div className="carousel-card">
                    <div className="carousel-card-image">
                        <div className="cci_02"></div>
                    </div>
                    <div className="place-details">
                        <h2>Media & News <span className="province-title">Metazimba Media & News</span></h2>
                    </div>
                </div>
            </div>
            <div className="carousel-card-wrapper">
                <div className="carousel-card">
                    <div className="carousel-card-image">
                        <div className="cci_03"></div>
                    </div>
                    <div className="place-details">
                        <h2>Marketing <span className="province-title">Metazimba Marketing</span></h2>
                    </div>
                </div>
            </div>
            <div className="carousel-card-wrapper">
                <div className="carousel-card">
                    <div className="carousel-card-image">
                        <div className="cci_04"></div>
                    </div>
                    <div className="place-details">
                        <h2>Virtual Reality <span className="province-title">Metazimba VR</span></h2>
                    </div>
                </div>
            </div>
        </Slider>
    )
}
export default Carousel;
