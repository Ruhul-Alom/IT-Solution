import React from 'react'
import Navbar from '../../Home/Navbar/Navbar'
import AdminSideBar from './AdminSideBar'

function DashBoard() {
    return (
        <div className="container">
        <Navbar></Navbar>
      
         <div className="row">
             <div className="col-md-3">
              <AdminSideBar></AdminSideBar>
             </div>
             <div className="col-md-8">
             <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">User Name</th>
      <th scope="col">Sevice Name</th>
      <th scope="col">Staus</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>

             </div>
             </div>
             </div>
    )
}

export default DashBoard
