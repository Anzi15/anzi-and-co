import React from 'react'
import HomeHeroSection from '../sections/HomeHeroSection';
import { Helmet } from 'react-helmet';
import SEOTAGS from "../modules/seoTags"
const Home = () => {
  return (
    <>
    <SEOTAGS title='Home' description="Drive more sales to your business" name="Anzi &. CO" type="website"/>
    <HomeHeroSection/>
    <section className='w-screen h-screen bg-white '></section>
    </>
  )
}

export default Home