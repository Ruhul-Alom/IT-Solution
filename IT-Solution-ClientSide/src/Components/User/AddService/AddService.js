import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Navbar from '../../Home/Navbar/Navbar';
import AdminSideBar from '../Admin/AdminSideBar';

const AddService = () => {
    const [newService, setNewService] = useState({});
const history = useHistory();
const handleOnBlur = (e) => {
    const newServiceAdd =newService;
    newServiceAdd[e.target.name] = e.target.value;
    setNewService(newServiceAdd);
}

const handleAddBook = (e) => {
    e.preventDefault();
    fetch('https://glacial-temple-08180.herokuapp.com/addService', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newService)
    })
        .then(res => res.json())
        .then(data => {
            alert('Service inserted successfully');
            history.replace('/');
        })
}
    return (
        <div className="container">
        <Navbar></Navbar>
      
         <div className="row">
             <div className="col-md-3">
             <AdminSideBar></AdminSideBar>
             </div>
             <div className="col-md-8">
             <form onSubmit={handleAddBook }>
                        <input onBlur={handleOnBlur} name="icon" className="form-control" type="text" placeholder="Service Icon write only name like fa fa admin" required /> <br />
                        <input onBlur={handleOnBlur} name="title" className="form-control" type="text" placeholder="Service Name" required /> <br />
                        <input onBlur={handleOnBlur} name="price" className="form-control" type="text" placeholder="Price" required /> <br />
                        <input onBlur={handleOnBlur} name="description" className="form-control" type="text" placeholder="Service Descriprtion" required /> <br />
                        
                        <button className="form-control" className="btn btn-primary w-100">Add Service</button>
                    </form>
             </div>
             </div>
         </div>
   
    )
}

export default AddService





