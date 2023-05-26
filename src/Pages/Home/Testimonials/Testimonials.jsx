import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";
import '@smastrom/react-rating/style.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Rating } from '@smastrom/react-rating';
// import Slides from './Slides';

const Testimonials = () => {

    const [reviews,setReviews] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/review')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])

    return (
        <section>
            <SectionTitle
            subHeading={'What Our Clients Say'}
            heading={'TESTIMONIALS'}
            ></SectionTitle>
           
           
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
           reviews.map(review=><SwiperSlide>
            <div className='m-24 space-y-8'>
            <Rating className='mx-auto'
      style={{ maxWidth: 180 }}
      value={reviews.rating}
      readOnly
    />
                <p>{review.details}</p>
                <h2 className='text-2xl text-orange-400 text-center'>{review.name}</h2>
            </div>
           </SwiperSlide>)
        }
      </Swiper>
        </section>
    );
};

export default Testimonials;