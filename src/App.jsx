import React from 'react'
import Nav from './component/Nav'
import Work from './component/Work'
import Strips from './component/Strips'
import Products from './component/Products'
import Marquees from './component/Marquees'
import Cards from './component/Cards'
import Footer from './component/Footer'
import LocomotiveScroll from 'locomotive-scroll';




function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='min-h-screen w-full bg-zinc-900 overflow-hidden '>
     <Nav />
     <Work />
     <Strips />
     <Products />
     <Marquees />
     <Cards />
     <Footer />
    </div>
  )
}

export default App
