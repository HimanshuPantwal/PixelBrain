import React from 'react'
import GamePreview from '../Components/GamePreview';
import { IoMdPlayCircle } from "react-icons/io";
import { FaPlayCircle } from "react-icons/fa";
import standingDog from '../assets/images/Alabay Games/alabay lost heritage prev 1.png';
function AlabayWorld() {
  const text = "background: linear-gradient(180deg, #FFF280 37.4%, #FFA800 63.66%);"
  return (
    // <div className="bg-green-900 min-h-screen text-white p-6">
    //   <header className="flex flex-col items-start justify-between mb-8">
    //     <div className='bg-red-500 flex flex-col items-start' >
    //       <h1 className="text-4xl font-baron">Alabay Heritage</h1>
    //       <p className="text-lg font-bebas ">The Lost Adventure</p>
    //       <p className="mt-2">Take on the role of the legendary Alabay on a quest to uncover the ancient secrets of its ancestors.</p>
    //     </div>
    //     <button className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded-lg text-lg">
    //       Play
    //     </button>
    //   </header>
    //   <section>
    //     <h2 className="text-2xl font-bold mb-4">Game Preview</h2>
    //     <div className="grid grid-cols-4 gap-4">
    //       <Card title="Alabay II" description="Play as the legendary Alabay II." />
    //       <Card title="Puggy Pop" description="Guess and win rewards!" />
    //       <Card title="Artifact Collected" description="Explore the world to collect them." />
    //       <Card title="Anonymous" description="Loading new areas to explore." />
    //     </div>
    //   </section>
    // </div>
    //     width: 1796px;
    // height: 14121px;
    // top: -2px;
    // left: 1px;
    // gap: 0px;
    // border-radius: 40px 0px 0px 0px;
    // opacity: 0px;
    <div className="bg-[#202020] text-white flex flex-col items-center p-8 w-[1796px] height-full" style={{ backgroundImage: `url('${standingDog}')`, backgroundSize: "100% 100%" }}>
      <div className="max-w-7xl w-full">
        <div className="flex flex-col items-start gap-4">
          <h1 className="font-baron text-6xl lg:text-[96px] leading-[104.38px] tracking-wider">
            ALABAY HERITAGE
          </h1>

          <h2 className="text-3xl lg:text-[48px] leading-[52.19px] tracking-[0.23em] font-normal text-[#90FFAE]">
            THE LOST ADVENTURE
          </h2>
          <p className="text-xl lg:text-[22px] leading-[23.92px] tracking-wider max-w-2xl mt-4 text-start font-montserrat">
            Take on the role of the legendary Alabay on a quest to uncover the ancient secrets of its ancestors.
          </p>
          <button className="mt-6 bg-[#90FFAE] text-lg pl-4 pr-10 py-2 rounded-full flex justify-start gap-x-5 items-center text-black">
            <FaPlayCircle className='bg-white text-black rounded-[100%] size-[1.8rem] -p-1' />
            PLAY
          </button>
        </div>
      </div>
      <GamePreview />
    </div>
  );

}

export default AlabayWorld