import React, { useState } from 'react'
import jumpingDog from '../assets/images/Alabay Merch/DALL-smilingjumpingdog.png'
function HistoryAlabay() {
  return (
    <div className='h-[100vh] relative flex flex-col items-end rounded-t-xl gap-y-4 bg-white'>
      <div className='absolute skew-y-12 -translate-y-32 w-[100%] h-[150%] rounded-b-xl ' style={{
        background: 'radial-gradient(42.38% 44.19% at 50.14% 67.33%, #FFF280 0%, #FFC700 100%)'
      }}></div>
      <div className='bg-[#FFF6A1] w-32 rounded-xl h-5 absolute top-5 left-1/2'></div>
      <h1 className='z-10 mt-10 mr-20 text-right text-[8rem] w-[32rem] h-[20rem] leading-tight font-cheeseburga text-white'>
        <span style={{ color: '#F76902D1', fontWeight: '600', fontSize: '5rem' }} className="font-montserrat">History Of </span>
        ALABAY</h1>
      <p className='text-[#353535] text-right text-wrap w-[16rem] mr-20 font-bold z-20 font-kumbh'>The Central Asian Shepherd Dog, also known as Alabay, has been a guardian of livestock and property for centuries. Originating from Central Asia, these dogs are renowned for their courage, strength, and loyalty.</p>
      <img src={jumpingDog} className='size-[500px] absolute bottom-0 top-32 left-[15.6px] z-20' />
    </div>
  )
}

export default HistoryAlabay