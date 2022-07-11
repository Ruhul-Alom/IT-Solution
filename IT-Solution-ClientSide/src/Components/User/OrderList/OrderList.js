import React, { useEffect, useState } from 'react';
import Navbar from '../../Home/Navbar/Navbar'
import SideBar from '../SideBar/SideBar'

const OrderList = (props) => {
  const email= props.user.email;
    // const event = props.product;
    const [myOrder, setMyOrder] = useState([]);
   
    useEffect(() => {
        fetch('https://glacial-temple-08180.herokuapp.com/orderInfoByEmail', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        })
            .then(res => res.json())
            .then(data => setMyOrder(data))
    }, [])
    return (
        <div className="container">
        <Navbar></Navbar>
         <div className="row">
             <div className="col-md-3">
               <SideBar></SideBar>
             </div>
             <div className="col-md-8 d-flex">
               {myOrder.map(order=>
             <div class="card m-3"  style={{height:'200px'}}>
              
               { console.log(order)}
  {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}

  <div class="card-body">
    <div className="status btn-info mr-auto"> Status :Pending</div>
    <h3 class="card-title"> Service Name :{order.serviceName
} </h3>
    <h3 class="card-title"> Service Charge :{order.servicePrice} </h3>
    {/* <h3 class="card-title">{order.status} </h3> */}
  </div>

</div>
  )}

             </div>
             </div>
          </div>
    )
}

export default OrderList
