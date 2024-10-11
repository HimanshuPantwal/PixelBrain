import React from 'react'
import phoneDog from '../assets/images/DALL·E 2024-07-29 17.36.01 - A 3D cartoon illustration of a cute furry Central Asian Shepherd dog holding a mobile phone and looking at it. The dog has expressive eyes, a fluffy c 2.png'
import twitter from '../assets/images/twitter logo 1.png'
import telegram from '../assets/images/Mask group.png'
function SocialMedia() {
    return (
        <div className='flex flex-col item-start w-[100%] ml-20 mt-20 pt-10'>
            <div className='text-4xl text-start w-[20rem]'>SOCIAL MEDIA LINKS</div>
            <div className='flex w-full  gap-x-16 justify-center items-center'>
                <div className='w-[15rem] h-[10rem]  flex flex-col justify-center p-2 rounded-lg relative' style={{ background: 'linear-gradient(137.69deg, #80B3FF 31.37%, #417DF1 84.39%)' }}>
                    <div className='flex'>
                        <img src={twitter} className='bg-black rounded-full size-[2rem] object-contain p-1'></img>
                        <div className='text-white' >Twitter Link</div>
                    </div>
                    <div className='flex'>
                        <img src={telegram} className='bg-black rounded-full size-[2rem] object-contain p-1'></img>
                        <div className='text-white'>Telegram Link</div>
                    </div>
                    <div className='absolute rounded-full w-10 h-10 bg-green-500 top-0 right-3 translate-x-5'>this</div>
                </div>
                <img src={phoneDog} className='w-[25rem] h-[25rem]'></img>
            </div>
        </div>
    )
}

export default SocialMedia