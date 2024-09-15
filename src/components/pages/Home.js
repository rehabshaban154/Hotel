import React from 'react'
import Hero from '../home section/Hero'
import HomeAbout from '../home section/HomeAbout'
import DesatinationHome from '../home section/DesatinationHome'
import Mostpopular from '../popular/Mostpopular'
import Download from '../home section/Download/Download'
import Works from '../work/Works'
import Gallary from '../home section/gallary/Gallary'
import Footer from '../footer/Footer'
export default function home() {
  return (
   <>
   <Hero />
   <HomeAbout />
   <Mostpopular />
   <DesatinationHome />
   <Download />
   <Works />
   <Gallary />
   <Footer />
   </>
  )
}
