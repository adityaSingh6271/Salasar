import React from 'react'
import ExoticaHero from './ExoticaHero'
import ProjectOverview from './ProjectOverview'
import AmenitiesSection from './AmenitiesSection'
import Location from './Location'
import Floorplan from './Floorplan'
import Gallery from './Gallery'
import CustomerTestimonials from './CustomerTestimonials'
import RelatedProperties from './RelatedProperties'
import Footer from '../Footer'

const ExoticaII = () => {
  return (
    <div>
        <ExoticaHero/>
        <ProjectOverview/>
        <AmenitiesSection/>
        <Location/>
        <Floorplan/>
        <Gallery/>
        <CustomerTestimonials/>
        <RelatedProperties/>
        <Footer headingText={"Floor Plan & Layout"}/>
    </div>
  )
}

export default ExoticaII