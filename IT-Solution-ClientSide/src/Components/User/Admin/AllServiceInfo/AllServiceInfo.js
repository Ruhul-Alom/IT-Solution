
import React, { useEffect, useState } from 'react';
import Navbar from '../../../Home/Navbar/Navbar';
import AdminSideBar from '../AdminSideBar';
import AllServiceInfoTable from '../AllServiceInfoTable/AllServiceInfoTable';

const AllServiceInfo = () => {

    const [allService, setallService] = useState([]);

    useEffect(() => {
        fetch('https://glacial-temple-08180.herokuapp.com/services')
        .then(res => res.json())
        .then(data =>setallService(data))
        
    }, [])

    return (
        <div className="container">
            <Navbar></Navbar>
            <div className="row">
                <div className="col-md-3">
                 <AdminSideBar></AdminSideBar>
                </div>
                <div className="col-md-8">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Service Name</th>
                                <th>Service Charge</th>
                                <th>Action</th> 
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allService.map(service => <AllServiceInfoTable service={service}></AllServiceInfoTable>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllServiceInfo;