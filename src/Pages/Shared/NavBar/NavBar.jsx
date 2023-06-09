import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { FaShoppingCart } from "react-icons/fa";
import useCart from '../../../hooks/useCart';
import css from '../../../../Style/style.css'
import useAuth from '../../../hooks/useAuth';

const NavBar = () => {

    const { user, logOut } = useAuth()
    const [cart] = useCart()

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navBar = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/menu'>Menu</NavLink></li>
        <li><NavLink to='/order/salad'>Order</NavLink></li>
        <li><NavLink to='/secret'>Secret</NavLink></li>
        <li>
            <Link to='/deshboard/mycart'>
            <button className="btn gap-2">
           < FaShoppingCart/>
                <div className="badge badge-secondary">+{cart?.length || 0}</div>
            </button>
            </Link>
        </li>

        {
            user ? <NavLink onClick={handleLogOut} className="btn btn-active btn-ghost">LogOut</NavLink> :
                <>
                    <li><NavLink to='/login'>Login</NavLink></li>
                    <li><NavLink to='/registar'>Sign Up</NavLink></li>
                </>
        }
    </>
    return (
        <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navBar}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navBar}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Get started</a>
            </div>
        </div>
    );
};

export default NavBar;