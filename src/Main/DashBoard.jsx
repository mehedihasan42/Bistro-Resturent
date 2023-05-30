import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaCalendarAlt, FaHome, FaShoppingCart, FaWallet } from "react-icons/fa";
import css from '../../Style/style.css'

const DashBoard = () => {
    return (
        <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet></Outlet>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 bg-[#D1A054] text-base-content">
            <li><NavLink to='/'><FaHome/>User Home</NavLink></li>
            <li><NavLink to='/deshboard/mycart'><FaShoppingCart/>My Cart</NavLink></li>
            <li><NavLink to='/'><FaWallet/>Payment History</NavLink></li>
            <li><NavLink to='/'><FaCalendarAlt/>Reservation</NavLink></li>
            <div className="divider"></div>
            <li><NavLink to='/'><FaHome/>Home</NavLink></li>
            <li><NavLink to='/menu'>Our Menu</NavLink></li>
            <li><NavLink to='/order/salad'>Our Food</NavLink></li>
          </ul>
        </div>
      </div>
    );
};

export default DashBoard;