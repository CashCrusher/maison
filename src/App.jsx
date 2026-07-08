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
import ReviewPopup from './components/ui/ReviewPopup'
import BookingPopup from './components/ui/BookingPopup'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'

function App() {
  return (
    <PayPalScriptProvider options={{ "client-id": "AVz-AWB3UWHv-7EhpRqG5_Rql2lMkjvCY7c0Fat4KMte8GZc70Oqwk_I1Dn0xUqkTs0ehvX2EBnJni66", currency: "EUR" }}>
      <div className="relative min-h-screen">
        <ElevationProfile />
        <ReviewPopup />
        <BookingPopup />
        
        <main className="relative z-10">
        <Hero />
        <CafeMenu />
        <Gallery />
        <BikeServices />
        <About />
        <Reviews />
        <Social />
        <PracticalInfo />
      </main>

      <Footer />
      </div>
    </PayPalScriptProvider>
  )
}

export default App
