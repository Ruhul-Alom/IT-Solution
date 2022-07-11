import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import RecentProject from '../RecentProject/RecentProject'
import Review from '../Review/Review'
import Service from '../Service/Service'
import TeamMember from '../TeamMember/TeamMember'

const Home = () => {
    return (
        <div>
           <Navbar/>
           <Header></Header>
           <Service></Service>
           <Review></Review>
           <RecentProject></RecentProject>
           <TeamMember></TeamMember>
           <Footer></Footer>
        </div>
    )
}

export default Home
