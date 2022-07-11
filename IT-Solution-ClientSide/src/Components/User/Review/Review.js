
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import SideBar from '../SideBar/SideBar'

const Review = (props) => {
    const {isSignedIn, name} = props.user;
    console.log(isSignedIn,name);
    // const {_id } = useParams();
   
    const history = useHistory();

    const [addReview, setaddReview] = useState({
        name: props.user.name,
        email: props.user.email,
        img:props.user.photoURL,
    });
    
    const handleOnBlur = (e) => {
        const newReviewAdd ={...addReview};
        newReviewAdd[e.target.name] = e.target.value;
        setaddReview(newReviewAdd);
    }

    const handleAddReview = (e) => {
        e.preventDefault();
        fetch('https://glacial-temple-08180.herokuapp.com/addReview', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(addReview)
        })
            .then(res => res.json())
            .then(data => {
                alert('Your Book is inserted');
                history.replace('/');
            })
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <SideBar />
                
                </div>
                <div className="col-md-8">
            <h3>Review For Better Service</h3> <br />
            <form onSubmit={handleAddReview} >
                 <img  width="100%" src="" alt=""/>
                <input className="form-control "onBlur={handleOnBlur} name="name" type="text" placeholder="Your Full Name"  value={props.user.name}  /> <br />
                <input className="form-control "onBlur={handleOnBlur} name="email" type="text" placeholder="Your Email" value={props.user.email} /> <br />
                <input className="form-control "onBlur={handleOnBlur} name="img" type="text" placeholder="Your Email" value={props.user.photoURL} /> <br />
                <input className="form-control"onBlur={handleOnBlur} name="comment" type="text" placeholder="write comment here" required /><br/>
                <button className="btn btn-primary w-100">Add To Review</button>
            </form>

              </div>
        </div>
                </div>
    )
}

export default Review


