import React from 'react'
import BusinessVerticals from './components/BusinessVerticals'
import NewReleaseCard from './components/NewRelease'
import AboutUsSection from './components/AboutUsSection '
import OurPrinciples from './components/OurPrinciples'
import ProductsServices from './components/ProductsServices'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import './App.css'

function App() {


  return (
    <><Navbar />
      <HeroSection />
      
      <BusinessVerticals />
      <NewReleaseCard />
      <AboutUsSection />
      <OurPrinciples />
      <ProductsServices />
      <Footer />
    </>
  )
}

export default App
