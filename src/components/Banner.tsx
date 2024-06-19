import React from "react";
import { Carousel } from "react-responsive-carousel";
import slide1 from "../../public/images/slide1.jpg";
import slide2 from "../../public/images/slide2.jpg";
import slide3 from "../../public/images/slide3.jpg";
import slide4 from "../../public/images/slide4.jpg";
import slide5 from "../../public/images/slide5.jpg";
import slide6 from "../../public/images/slide6.jpg";
import slide7 from "../../public/images/slide7.jpg";
import slide8 from "../../public/images/slide8.jpg";

import Image from "next/image";
const Banner = () => {
  const images = [
    slide1,
    slide2,
    slide3,
    slide4,
    slide5,
    slide6,
    slide7,
    slide8,
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
