import React from 'react'
import HeroSlider from '../HeroSlider'
import LatestLoans from './LatestLoans'


const Home = () => {
  return (
    <div className='mx-auto'>
    <HeroSlider></HeroSlider>
    <main>
      <LatestLoans></LatestLoans>
    </main>
    </div>
  )
}

export default Home
