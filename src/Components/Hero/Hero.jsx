import React from "react";
import "../Cards/herocard.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import HeroCard from "../Cards/HeroCard";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import {
  Banner1,
  Banner3,
  Banner4,
  Banner5,
  Banner6,
} from "../../Components/assets/banners";

const Hero = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="swiper"
    >
      <SwiperSlide>
        <HeroCard
          image={Banner5}
          para="Tops / skirts"
          title1="Women Fashion"
          title2="Collection"
          url={
            <Link
              style={{ textDecoration: "none", color: "#000" }}
              to="/womens"
            >
              Shop Now
            </Link>
          }
        />
      </SwiperSlide>
      <SwiperSlide>
        <HeroCard
          image={Banner1}
          para="Sweaters / Tops"
          title1="Winter Fashion"
          title2="Collection"
          url={
            <Link
              style={{ textDecoration: "none", color: "#000" }}
              to="/womens"
            >
              Shop Now
            </Link>
          }
        />
      </SwiperSlide>
      <SwiperSlide>
        <HeroCard
          image={Banner3}
          para="kids / dress"
          title1="Kids Fashion"
          title2="Collection"
          url={
            <Link style={{ textDecoration: "none", color: "#000" }} to="/kids">
              Shop Now
            </Link>
          }
        />
      </SwiperSlide>
      <SwiperSlide>
        <HeroCard
          image={Banner4}
          para="T-shits / Jackets"
          title1="Men Fashion"
          title2="Collection"
          url={
            <Link style={{ textDecoration: "none", color: "#000" }} to="/mens">
              Shop Now
            </Link>
          }
        />
      </SwiperSlide>
      <SwiperSlide>
        <HeroCard
          image={Banner6}
          para="Joggers / Sports"
          title1="Sports Fashion"
          title2="Collection"
          url={
            <Link
              style={{ textDecoration: "none", color: "#000" }}
              to="/womens"
            >
              Shop Now
            </Link>
          }
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
