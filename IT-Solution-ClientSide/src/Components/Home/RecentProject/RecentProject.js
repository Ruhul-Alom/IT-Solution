import React from 'react'
import ProjectDivision from './ProjectDivision'
import './RecentProject.css';
import Appdemo from '../../../images/app.jpg'
import Webdemo from '../../../images/web.jpg'
import Netdemo from '../../../images/networking.jpg'
import Harddemo from '../../../images/hardware.jpg'


const RecentProject = () => {
    const projectData=[{
        title:'Apps',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, dolor.',
        demo:Appdemo
    },
    {
        title:'Web',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, dolor.',
        demo:Webdemo
    },
    {
        title:'Networking',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, dolor.',
        demo:Netdemo
    },
    {
        title:'Hardware solution',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, dolor.',
        demo:Harddemo
    }
]
    return (
        <section className="recent-project-section ">
         <div className="review-section-title"> 	<h2 class="title">Recent <span>Project</span></h2></div>
       <div className="row pb-4">
{projectData.map(data=><ProjectDivision data={data} ></ProjectDivision>)}
</div>
   </section>
    )
}

export default RecentProject
