import React from 'react'
import Hero from '../Hero/Hero'
import OurStory from '../OurStory/OurStory'
import Ingredients from '../Ingredients/Ingredients'
import AboutSection from '../brand/AboutSection'
import EndorsementSection from '../enrollment/EndorsementSection'
import OurMenu from '../assets/MenuSection/OurMenu'
import FeaturesSection from '../FeaturesSection/FeaturesSection'
import TeamSection from '../TeamSection/TeamSection'
import VideoSection from '../VideoSection/VideoSection'
import ReservationForm from '../ReservationForm/ReservationForm'
import BlogSection from '../BlogSection/BlogSection'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <div>
      <Hero/>
      <OurStory/>
      <Ingredients/>
      <AboutSection/>
      <EndorsementSection/>
      <OurMenu/>
      <TeamSection/>
      <FeaturesSection/>
      <VideoSection/>
      <ReservationForm/>
      <BlogSection/>
      <Footer/>
    </div>
  )
}

export default Home
