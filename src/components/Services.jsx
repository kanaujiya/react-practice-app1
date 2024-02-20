import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";

const Services = () => {
  return (
    <div className="services">
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        interval={1000}
        showThumbs={false}
        showArrows={false}
      >
        <div>
          <img src={img3} alt="item1" />
          <p className="legend">Full stack</p>
        </div>
        <div>
          <img src={img4} alt="item2" />
          <p className="legend">Peer-to-peer supports</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
