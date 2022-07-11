import React from 'react'
import { Link } from 'react-router-dom'


const ServiceDivision = (props) => {
    const service = props.data;
    const { _id, title, icon,price,description } = service;
    return (
      <div className="col-md-3 text-center p-3">
      <Link to={`/addToOrder/${_id}`}>
                <div className="icon text-white text-center">
                  <i className={icon}></i>
                </div>
                <h3 className="text-white">{title}</h3>
                <h4>${price} </h4>
                <small className="text-white">{description}</small>
                <small>To get service pay <span className="text-info">${price} </span></small>
                </Link>    
            </div>
          
      
          
           
    )
}

export default ServiceDivision
