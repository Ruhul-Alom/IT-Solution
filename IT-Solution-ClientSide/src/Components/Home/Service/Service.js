import React, { useEffect, useState } from 'react';
import ServiceDivision from './ServiceDivision'
import './Service.css'
import serviceData from '../fakeData/fakeData.json'

const Service = () => {
  
// const handleAllInsert = () => {
//         fetch('https://glacial-temple-08180.herokuapp.com/addService', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(serviceData)
//         })
//     }
 const [serviceData, setserviceData] = useState([]);


useEffect(()=>{
    fetch('https://glacial-temple-08180.herokuapp.com/services')
    .then(res => res.json())
    .then(data => setserviceData(data))
}, [])
    return (
       <section className=" service-section mb-5 mt-5 " name="section">
            <div className=" service-section-title pt-5 "> <h2 className="title">Exclusive <span>Service</span></h2></div>
                {/* <button onClick={handleAllInsert}>Insert All Service</button> */}
           <div className="row pb-4">
{serviceData.map(data=><ServiceDivision  key={data._id} data={data} ></ServiceDivision>)}
</div>
       </section>
    )
}

export default Service
