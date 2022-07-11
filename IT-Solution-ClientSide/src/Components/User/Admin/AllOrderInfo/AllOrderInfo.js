
import React, { useEffect, useState } from 'react';
import Navbar from '../../../Home/Navbar/Navbar';
import AdminSideBar from '../AdminSideBar';
import AllOrderInfoTable from '../AllOrderInfoTable/AllOrderInfoTable';

const AllOrderInfo = () => {

    const [allOrder, setallOrder] = useState([]);

    useEffect(() => {
        fetch('https://glacial-temple-08180.herokuapp.com/order')
        .then(res => res.json())
        .then(data =>setallOrder(data))
        
    }, [])

    return (
        <div className="container">
            <div className="row">
                <Navbar></Navbar>
                <div className="col-md-3">
                 <AdminSideBar></AdminSideBar>
                </div>
                <div className="col-md-8">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>User Email</th>
                                <th>Service Name</th>
                                <th>Service Price</th>
                                <th>Decission</th> 
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allOrder.map(order => <AllOrderInfoTable order={order}></AllOrderInfoTable>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllOrderInfo;