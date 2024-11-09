import React from 'react'

const Page3 = () => {
  return (
    <div className='h-screen relative  w-full flex items-center justify-center  '>
      <img className='absolute h-[80vh] z-20' src="https://static.wixstatic.com/media/f1c650_23c4e7bcc6294676abdb81290a836c2b~mv2.png/v1/fill/w_1254,h_721,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/try.png" alt="" />
      <video autoPlay loop muted className='h-[70vh] relative z-10 w-[50vw] bg-red-500 object-cover ' src='src/assets/anzoVideo.mp4'></video>
      <div className='w-3/5 h-[.2vh] bg-black absolute z-0 top-[40%]'></div>
      <div className='w-4/5 h-[.2vh] bg-black absolute z-0 top-[60%]'></div>
      <div className='w-full h-[.2vh] bg-black absolute z-0 top-[78%]'></div>
      
   </div>
  )
}

export default Page3