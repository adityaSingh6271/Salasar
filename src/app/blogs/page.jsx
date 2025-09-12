import BlogHero from '@/components/BlogHero'
import Blogs from '@/components/Blogs'
import Footer from '@/components/Footer'
import React from 'react'

const page = () => {
  return (
    <div>
        <BlogHero/>
        <Blogs/>
        <Footer headingText={"Floor Plan & Layout"} />
    </div>
  )
}

export default page