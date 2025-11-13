import React from 'react'
import HeroSection from '../components/HeroSection'
import MenuSection from '../components/MenuSection'
import TopDishes from '../components/TopDishes'
import Contact from '../components/Contact'
const HomePage = () => {
  return (
    <div className='flex flex-col w-full h-full'>

      <HeroSection/>
      <MenuSection/>
      <Contact/>
    </div>
  )
}

export default HomePage