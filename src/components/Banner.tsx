import React from "react";
import { Carousel } from "react-responsive-carousel";
import sliderImg1 from "../images/slider/slide1.jpg";
import sliderImg2 from "../images/slider/slide2.jpg";
import sliderImg3 from "../images/slider/slide3.jpg";
import sliderImg4 from "../images/slider/slide4.jpg";
import sliderImg5 from "../images/slider/slide5.jpg";
import sliderImg6 from "../images/slider/slide6.jpg";
import sliderImg7 from "../images/slider/slide7.jpg";
import sliderImg8 from "../images/slider/slide8.jpg";
import Image from "next/image";
const Banner = () => {
  const images = [
    sliderImg1,
    sliderImg2,
    sliderImg3,
    sliderImg4,
    sliderImg5,
    sliderImg6,
    sliderImg7,
    sliderImg8,
  ];
  return (
    <div className="relative">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        interval={3000}
        showThumbs={false}
      >
        {images.map((image, index) => (
          <div key={index} className="h-[500px]">
            <Image src={image} alt="sliderImg" />
          </div>
        ))}
      </Carousel>
      <div className="w-full h-40 bg-gradient-to-t from-gray-100 to-transparent absolute bottom-0 z-20"></div>
    </div>
  );
};

export default Banner;
