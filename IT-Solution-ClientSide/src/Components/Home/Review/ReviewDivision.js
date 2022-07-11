import React from 'react'

const ReviewDivision = ({data}) => {
    return (
        <div className="col-md-3 p-3">
             <img src={data.img} className="rounded-circle" alt="User Image" width="250" height="180"></img>
        <h4 className="text-center">{data.name}</h4>
        <small>{data.comment}</small>
    </div>
    )
}

export default ReviewDivision
