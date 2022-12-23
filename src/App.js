import React from 'react'
import TopNav from "./Components/TopNav/TopNav"
import Navbar from "./Components/Navbar/Navbar"
import Hero from "./Components/Hero/Hero"
import HeroCard from "./Components/HeroCards/HeroCard"
import Offer from "./Components/Offer-Section/Offer"
import AboutUs from "./Components/AboutUs/AboutUs"
import Staff from "./Components/Staff/Staff"
import Pricings from "./Components/Pricing/Pricing"
import Faqs from './Components/Faq/Faqs'
// import Feature from './Components/Features/Feature'
import Clients from './Components/Clients/Clients'
import Contact from './Components/Contactus/Contact'
import Footer from './Components/Footer/Footer'
function App() {
  return (
    <div>
 <TopNav/>
      <Navbar/>
      <Hero/>
      <HeroCard/>
      <Offer/>
      <AboutUs/>
      <Staff/>
      <Pricings/>
      <Faqs/>
      {/* <Feature/> */}
      <Clients/>
      <Contact/>
      <Footer/>
    </div>
    
  )
}

export default App

