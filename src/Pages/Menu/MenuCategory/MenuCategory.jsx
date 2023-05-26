import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Covoer from '../../Shared/Covoer/Covoer';
import { Link } from 'react-router-dom';

const MenuCategory = ({items,title,img}) => {
    return (
       <div>
      {title &&    <Covoer img={img} title={title}></Covoer>}
        <div className='grid md:grid-cols-2 gap-10 mt-8'>
                {
                    items.map(item=><MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
          <Link to={`/order/${title}`}>
          <button className="btn btn-outline border-0 border-b-4 font-bold">Button</button>
          </Link>
       </div>
    );
};

export default MenuCategory;