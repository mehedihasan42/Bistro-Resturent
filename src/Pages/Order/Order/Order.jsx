import React, { useState } from 'react';
import orderCovoerPage from '../../../assets/shop/banner2.jpg'
import Covoer from '../../Shared/Covoer/Covoer';
// import shared from '../../../assets'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import FoodCart from '../../../Components/FoodCart/FoodCart';
import OrderTab from '../../../../OrderTab';
import { useParams } from 'react-router-dom';


const Order = () => {
    const categores = ['salad','pizza','soup','dessert','drinks'] 
    const { category } = useParams()
    const initialIndex = categores.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu()
    const desserts = menu.filter(item=>item.category==='dessert')
    const pizza = menu.filter(item=>item.category==='pizza')
    const salad = menu.filter(item=>item.category==='salad')
    const soup = menu.filter(item=>item.category==='soup')
    const offered = menu.filter(item=>item.category==='offered')

    return (
      
          <div>
            <Covoer img={orderCovoerPage} title='Order Now'></Covoer>
            <Tabs className='w-full mx-auto' selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList className="image my-8">
        <Tab className="tab tab-bordered">SALAD</Tab>
        <Tab className="tab tab-bordered">PIZZA</Tab>
        <Tab className="tab tab-bordered">SOUPS</Tab>
        <Tab className="tab tab-bordered">DESSERT</Tab>
        <Tab className="tab tab-bordered">DRINKS</Tab>
      </TabList>
  
    <TabPanel>
         <OrderTab items={desserts}></OrderTab>
      </TabPanel>
    <TabPanel>
         <OrderTab items={pizza}></OrderTab>
      </TabPanel>
    <TabPanel>
         <OrderTab items={salad}></OrderTab>
      </TabPanel>
    <TabPanel>
         <OrderTab items={soup}></OrderTab>
      </TabPanel>
    <TabPanel>
         <OrderTab items={offered}></OrderTab>
      </TabPanel>
   
    </Tabs>
        </div>
    
    );
};

export default Order;