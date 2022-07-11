import React from 'react'

const ProjectDivision = ({data}) => {
    return (
        <div className="col-md-3 p-3">
             <img src={data.demo} className="rounded" alt="Cinque Terre" width="250" height="180"></img>
        <h4 className="text-center">{data.title}</h4>
        <small>{data.description}</small>
    </div>
    )
}

export default ProjectDivision
