import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import SideBar from '../SideBar/SideBar'

const AddOrder = (props) => {
    const {isSignedIn, name} = props.user;
    console.log(isSignedIn,name);
    const {_id } = useParams();
    const [addToOrder, setaddToOrder] = useState({});
    // const user = JSON.parse(localStorage.getItem('user'));
  
    const [order, setOrder] = useState({
        userName: props.user.name,
        email: props.user.email,
        name:addToOrder.name
    })

    
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        {
            fetch('https://glacial-temple-08180.herokuapp.com/addOrder', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(order)
            })
            .then(res => res.json())
            .then(data => {
                alert('Your order is successfull enter to databse');
                history.replace('/');
            })
        }
    }

    useEffect(() => {
        fetch(`https://glacial-temple-08180.herokuapp.com/orders/${_id}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setaddToOrder(data);
                const newOrder = order;
                newOrder.serviceName = data.title;
                newOrder.servicePrice= data.price;
                newOrder.serviceImg = data.img;
                setOrder(newOrder);
            })
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <SideBar />
                
                </div>
                <div className="col-md-8">
            <h3>ADD TO ORDER FOR SERVICING</h3> <br />
            <form onSubmit={handleSubmit} >
                 <img  width="100%" src="" alt=""/>
                <input className="form-control " type="text" placeholder="Your Full Name"  value={props.user.name}  /> <br />
                <input className="form-control " type="text" placeholder="Your Email" value={props.user.email} /> <br />
                <input className="form-control " type="text" placeholder="Service Name" value={addToOrder.title}  /><br/> 
                <input className="form-control " type="text" placeholder="Service Price" value={addToOrder.price}  /> <br/>
                <button className="btn btn-primary w-100">Add To Order</button>
            </form>
              </div>
        </div>
                </div>
         
    );
};

export default AddOrder;