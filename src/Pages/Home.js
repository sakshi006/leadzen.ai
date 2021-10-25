import React from 'react'

import Bottom from '../components/Bottom/Bottom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Middle1 from '../components/Middle1/Middle1';
import Middle2 from '../components/Middle2/Middle2';
import Middle3 from '../components/Middle3/Middle3';
import Navbar from '../components/Navbar/navbar';

const Home = () => {
    return (
        <div className="Home">
                < Navbar />
                <Header/>
                <Middle1/>
                <Middle2/>
                <Middle3/>
                <Bottom/>
                <Footer/>
        </div>
    )
}

export default Home
