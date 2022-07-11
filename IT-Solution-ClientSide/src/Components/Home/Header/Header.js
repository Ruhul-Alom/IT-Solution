import React from 'react'
import headerImg from '../../../images/hederleft.webp';
import headerI from '../../../images/header.webp';
import headerL from '../../../images/headerL.webp';

const Header = () => {
    return (
        <section style={{ height:'250px',backgroundImage: `url(${headerI})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}} >
            <div className="row d-flex align-items-center">
                <div className="col-md-7">
                    <img src={headerL } width="70%" height="180px" alt=""/>
                </div>
                <div className="col-md-4 mt-3" style={{backgroundImage: `url(${headerImg})`,backgroundSize:'cover',backgroundPosition:'center',height:'250px'}}>
                    <div className="p-5">
                    <h4 className="text-capitalize text-info">Our Barnding Message is Quality work  better than quantity of work </h4>
                    <div className="btn btn-primary mt-3">Let Start<i class="fal fa-arrow-right"></i></div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Header
