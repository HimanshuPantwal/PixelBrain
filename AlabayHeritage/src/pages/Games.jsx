import React from 'react'
import GameSlider from '../Components/GameSlider'

function Games() {
  return (
    <div className='relative flex flex-col items-center mt-20 '>
    <div className='text-[7rem] font-bold text-white z-20 font-cheeseburga'>GAMES</div>
    <h2 className=' text-[2rem] z-20 m-2 tracking-wide font-montserrat' style={{fontWeight:"1000"}}>Stay tuned for upcoming games !</h2>
    <GameSlider/>
    <div className='absolute top-0  border-t-[150px] border-b-[150px] h-[50rem] w-full border-r-[110rem] border-t-white border-b-white z-10 -translate-y-80' style={{ borderRightColor: "transparent" }}></div>
            <div className='absolute top-0 h-[50rem] w-full -translate-y-80' style={{ background: "radial-gradient(30.64% 32.66% at 47.77% 66.92%, #FFF280 0%, #FFC700 100%)" }}></div>
    </div>
  )
}

export default Games