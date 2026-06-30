import React from 'react'
import ElevationProfile from './components/ElevationProfile'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import CafeMenu from './components/sections/CafeMenu'
import BikeServices from './components/sections/BikeServices'
import Gallery from './components/sections/Gallery'
import Reviews from './components/sections/Reviews'
import PracticalInfo from './components/sections/PracticalInfo'
import Social from './components/sections/Social'
import Footer from './components/sections/Footer'

function App() {
  return (
    <div className="relative min-h-screen">
      <ElevationProfile />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <CafeMenu />
        <Gallery />
        <BikeServices />
        <Reviews />
        <Social />
        <PracticalInfo />
      </main>

      <Footer />
    </div>
  )
}

export default App
