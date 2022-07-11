import React from 'react'
import SideBar from '../SideBar/SideBar'
import Navbar from '../../Home/Navbar/Navbar'

const UserHome = () => {
    return (
    
          
           <div className="container">
           <Navbar></Navbar> 
            <div className="row">
                <div className="col-md-3">
                  <SideBar></SideBar>
                </div>
                <div className="col-md-8"></div>
                </div>
             </div>

    );
}

export default UserHome
