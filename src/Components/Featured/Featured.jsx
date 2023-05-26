import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import image from '../../assets/home/featured.jpg'
import cdd from '../Featured/Featured.css'

const Featured = () => {
    return (
        <section className='featured  lg:my-20'>
            <SectionTitle
            subHeading={'Check it out'}
            heading={'FROM OUR MENU'}
            >
            </SectionTitle>
                <div className='md:flex justify-center bg-slate-500 bg-opacity-70 py-20 px-16 text-white items-center'> 
                <div className='md:mr-14'>
                <img className='rounded-lg w-2/3' src={image} alt="" />
               </div> 
               <div>
                <p>March 24,2023</p>
                <p>Where I can get some</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem in a aspernatur amet, laborum atque,
                     ut nesciunt voluptatibus corrupti odit veritatis,iure possimus incidunt corporis quas dolore
                      tempora? Tempora, reiciendis!</p>
                      <button className="btn btn-outline border-0 border-b-4 font-bold">Button</button>
               </div>
              </div>
        </section>
    );
};

export default Featured;