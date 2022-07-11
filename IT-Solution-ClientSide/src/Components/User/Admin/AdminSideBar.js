import React from 'react'
import { Link } from 'react-router-dom';

const AdminSideBar = () => {
    return (
        <div className="bg-primary" style={{height:'100vh'}}>
            <h2 className="text-center text-white">Manage Book </h2>
            <Link to="/allorder"><h5 className="fas fa-border-all text-dark">Order List</h5></Link><br/>
            <Link to="/addService"><h5 className="fas fa-plus-square text-dark">Add Service </h5></Link><br/>
            {/* <Link to="/makeAdmin"><h5 className="fas fa-plus-square text-dark">Make Admin</h5></Link>  */}
            <Link to="/manageService"><h5 className="fas fa-plus-square text-dark">Manage Services</h5></Link> 
           
        </div>
    )
};

export default AdminSideBar
