import React, { useEffect, useState } from 'react';
import ReviewDivision from './ReviewDivision'
import './Review.css'
import img from '../../../images/r1.jpg'
// import reviewData from '../fakeData/reviewData.json'

const Review = () => {
//   const handleAllInsert = () => {
//         fetch('https://glacial-temple-08180.herokuapp.com/addReview', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(reviewData)
//         })
//     }
const [reviewData, setreviewData] = useState([]);

useEffect(()=>{
    // fetch('https://glacial-temple-08180.herokuapp.com/review')
    fetch('https://glacial-temple-08180.herokuapp.com/review')
    .then(res => res.json())
    .then(data => setreviewData(data))
}, [])
    return (
        <section className=" review-section mb-5 ">
           <div className="review-section-title pt-5"> 	<h2 class="title">Exclusive <span>Review</span></h2></div>
             {/* <button onClick={handleAllInsert}>Insert All Reveiw</button> */}
        <div className="row pb-4">
        {reviewData.map(data=><ReviewDivision data={data} ></ReviewDivision>)}
        
        </div>   
        </section>
    )
}

export default Review
