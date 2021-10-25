import React from 'react'
import Bottom from '../components/Bottom/Bottom';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/navbar';
import WhyUsComp from '../components/WhyUsComp/WhyUsComp'

const WhyUs = () => {
    return (
        <div>
            <Navbar/>
           <WhyUsComp/>
            <Bottom/>
            <Footer/>
        </div>
    )
}

export default WhyUs
