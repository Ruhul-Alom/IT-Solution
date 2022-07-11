import React from 'react'
import logo from  '../../../images/logo.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src={logo} width="50px" alt=""/>IT Solution 
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Service</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/reveiw">Review</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/orderList">Order</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/allorder">Admin</a>
        </li>
      </ul>
    
    </div>
  </div>
</nav>
    )
}

export default Navbar
