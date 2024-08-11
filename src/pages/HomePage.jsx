
import Card from '../components/Card';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import aha from "../assets/img/aha.jpg"
import krean from "../assets/img/krean.jpg"
import fd from "../assets/img/fd.png"



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const HomePage = ({ products }) => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div>
            <div className="hero-section">
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide><img src={aha} alt="" width={"10%"} height={"30%"} /></SwiperSlide>
        <SwiperSlide><img src={krean.jpg} alt="" width={"10%"} height={"30%"} /></SwiperSlide>
        <SwiperSlide><img src={fd.png} alt="" width={"10%"} height={"30%"} /></SwiperSlide>
        <SwiperSlide><img src={fd.png} alt="" width={"10%"} height={"30%"} /></SwiperSlide>
        <SwiperSlide><img src={fd.png} alt="" width={"10%"} height={"30%"} /></SwiperSlide>
        <SwiperSlide><img src={fd.png} alt="" width={"10%"} height={"30%"} /></SwiperSlide>
        
        
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
            </div>
            <div className="grid">
                {products.map(product => (
                    <Card key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
