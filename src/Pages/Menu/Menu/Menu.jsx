import React from 'react';
import { Helmet } from 'react-helmet-async';
import Covoer from '../../Shared/Covoer/Covoer';
import img from '../../../assets/menu/banner3.jpg'
import PopularMenu from '../../Home/PopularMenu/PopularMenu';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'

const Menu = () => {
  const [menu] = useMenu()
  const desserts = menu.filter(item=>item.category==='dessert')
  const pizza = menu.filter(item=>item.category==='pizza')
  const salad = menu.filter(item=>item.category==='salad')
  const soup = menu.filter(item=>item.category==='soup')
  const offered = menu.filter(item=>item.category==='offered')
    return (
       <div>
         <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>
      {/* ------------------- */}
      <Covoer img={img} title='Our Manu' 
      pera='Would you like to try a dish?'
      ></Covoer>
      <SectionTitle subHeading="Don't miss" heading="Today's Offer"></SectionTitle>
      <MenuCategory items={offered} title='Offered'></MenuCategory>
      <MenuCategory items={desserts} title='Desserts' img={dessertImg}></MenuCategory>
      <MenuCategory items={pizza} title='Pizza' img={pizzaImg}></MenuCategory>
     </div>
    );
};

export default Menu;