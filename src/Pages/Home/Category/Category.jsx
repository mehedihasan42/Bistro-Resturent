import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from "swiper";

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        
           <section className='my-20'>
           <SectionTitle
           subHeading={'From 11:00am to 10:00pm'}
           heading={'ORDER ONLINE'}
           >
           </SectionTitle>
               <Swiper 
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-20"
      >
        <SwiperSlide>
            <img className='rounded' src={slide1} alt="" />
            <h3 className='text-white uppercase italic text-3xl -mt-12'>Salads</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img className='rounded' src={slide2} alt="" />
            <h3 className='text-white uppercase italic text-3xl -mt-12'>Soups</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img className='rounded' src={slide3} alt="" />
            <h3 className='text-white uppercase italic text-3xl -mt-12'>Pizzas</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img className='rounded' src={slide4} alt="" />
            <h3 className='text-white uppercase italic text-3xl -mt-12'>Desserts</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img className='rounded' src={slide5} alt="" />
            <h3 className='text-white uppercase italic text-3xl -mt-12'>Vegitable</h3>
        </SwiperSlide>
        
      </Swiper>
       
           </section>
    );
};

export default Category;