import React from 'react'
import TeamMemberInfo from './TeamMemberInfo';
import './TeamMember.css';
import Abdul from '../../../images/AbdulHamid.jpg'
import Rasid from '../../../images/Rasid.jpg'
import Jakob from '../../../images/Jakob.jpg'
import Zarir from '../../../images/Zarir.jpg'


const TeamMember = () => {
    const TeamMemberData=[{
        name:'Abdul Hamid',
        qualifiaction:'M.Sc in Computer Science',
        about:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, dolor.',
        img:Abdul
    },
    {
        name:'Rasid',
        qualifiaction:'M.Sc in Software Engineering',
        about:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, dolor.',
        img:Rasid
    },
    {
        name:'Jakob',
        qualifiaction:'M.Sc in EEE',
        about:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, dolor.',
        img:Jakob
    },
    { name:'Zarir',
    qualifiaction:'M.Sc in Communication Engineering ',
    about:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, dolor.',
    img:Zarir
        
    }
]
    return (
        <section className="team-section ">
         <div className="review-section-title"> 	<h2 class="title">Excelent <span>Team</span></h2></div>
       <div className="row pb-4">
{ TeamMemberData.map(data=><TeamMemberInfo data={data} ></TeamMemberInfo>)}
</div>
   </section>
    )
}

export default TeamMember
