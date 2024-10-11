import React from 'react'
import dogMap from '../assets/images/DALL·E 2024-07-14 21.37.17 - A 3D cartoon illustration of a very happy furry Central Asian Shepherd dog in explorer attire, standing at a crossroads and holding a map with a yello 2.png'
function RoadMap() {
  return (
    <div className='flex flex-col w-full items-start mt-20'>
      <div className='text-[6rem] text-white font-extrabold z-20 font-cheeseburga ml-16'>ROAD MAP</div>
      <div className='z-20 flex items-start justify-between '>
      <div className='w-[15rem] m-20 mt-24 font-kumbh font-bold'>Our journey is just beginning. Explore our roadmap to see the exciting milestones and future plans we have in store. 

<div className=' mt-4 font-kumbh text-[#FFA800]'>Join us as we grow and achieve new heights.</div></div>
      <img src={dogMap} className='z-20 self-end -translate-x-16  -translate-y-24 size-5/12' />
      </div>
    </div>
  )
}

export default RoadMap