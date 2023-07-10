import React from 'react';
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience';
import Service from './components/Service/Service'
import Portafolio from './components/Portafolio/Portafolio'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/contact/contact'
import Footer from './components/Footer/Footer'

const App = () => {
    return (
        <>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Service/>
        <Portafolio/>
        {/* <Testimonials/> */}
        <Contact/>
        <Footer/>
        </>
    )
}

export default App