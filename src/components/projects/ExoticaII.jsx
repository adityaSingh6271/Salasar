import React from 'react'
import ExoticaHero from '../ExoticaHero'
import ProjectOverview from './ProjectOverview'
import AmenitiesSection from '../AmenitiesSection'
import Location from './Location'
import Floorplan from './Floorplan'
import Gallery from './Gallery'
import CustomerTestimonials from './CustomerTestimonials'

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
    </div>
  )
}

export default ExoticaII