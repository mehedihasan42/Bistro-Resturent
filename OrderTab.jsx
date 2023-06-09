import React from 'react';
import FoodCart from './src/Components/FoodCart/FoodCart';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

//TODO- implement pagination here
const OrderTab = ({ items }) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span className="' + className + '">' + (index + 1) + "</span>";
        },
    };
    return (
        <div>
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
              
              <SwiperSlide>
                    {
                        items.map(item => <FoodCart
                            key={item._id}
                            item={item}
                        ></FoodCart>)
                    }
                </SwiperSlide>
          
            </Swiper>
        </div>



    );
};

export default OrderTab;