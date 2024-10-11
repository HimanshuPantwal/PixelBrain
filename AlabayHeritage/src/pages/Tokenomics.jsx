import React from 'react'
import cashDog from '../assets/images/DALL·E 2024-07-23 00.50.44 - A 3D cartoon illustration of a furry Central Asian Shepherd Alabay dog with big eyes, wearing a cap with a dollar logo on its head and counting money_ 1.png'
import TokenomicsCard from '../Components/TokennomicsCard'
const texts = [
    { text1: "LIQUIDITY", text2: "LOCKED" },
    { text1: "CONTRACT", text2: "RENOUNCED" },
    { text1: "TAXES", text2: "0%" }
]
function Tokenomics() {
    return (
        <div className='flex flex-col items-start mt-20 relative w-full h-[100%] p-4 '>
            <div className='text-white text-[6rem] z-20 font-cheeseburga'>TOKENOMICS</div>
            <div className='flex w-full items-start z-20 p-4 h-[100%]'>
                <div className='flex flex-col gap-y-3 w-[40rem] h-[40rem] p-4 z-20 '>
                    {texts.map((text) => {
                        return <TokenomicsCard text1={text.text1} text2={text.text2} />
                    })
                    }
                </div>
                <img src={cashDog} className="w-[450px] h-[450px]" alt="Cash Dog" />

            </div>
            <div className='absolute top-0  border-t-[150px] border-b-[150px] h-[55rem] -translate-x-4 border-r-[110rem] border-t-white border-b-white z-10 -translate-y-28' style={{ borderRightColor: "transparent" }}></div>
            <div className='absolute top-0 h-[55rem] w-full -translate-y-28 -translate-x-4' style={{ background: "radial-gradient(30.64% 32.66% at 47.77% 66.92%, #FFF280 0%, #FFC700 100%)" }}></div>
        </div>
    )
}

export default Tokenomics