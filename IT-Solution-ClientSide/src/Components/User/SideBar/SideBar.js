import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className="bg-secondary" style={{height:'100vh'}}>
            <h2 className="text-center text-white">Manage Book </h2>
            <Link to="/addToOrder"><h5 className="fas fa-border-all">Add To Order</h5></Link><br/>
            <Link to="/orderList"><h5 className="fas fa-plus-square">Order </h5></Link><br/>
            <Link to="/reveiw"><h5 className="fas fa-plus-square">Review</h5></Link> 
           
        </div>
    );
};

export default SideBar;