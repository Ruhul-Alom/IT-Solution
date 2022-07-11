import React from 'react'

const TeamMeamberInfo = ({data}) => {
    return (
        <div className="col-md-3 p-3">
             <img src={data.img} className="rounded-circle" alt="Cinque Terre" width="250" height="180"></img>
        <h4 className="text-center">{data.name}</h4>
        <p>{data. qualifiaction}</p>
        <small>{data.about}</small>
    </div>
    )
}

export default TeamMeamberInfo
