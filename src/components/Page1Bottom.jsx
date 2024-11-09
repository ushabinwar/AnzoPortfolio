import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Page1Bottom = () => {
  useGSAP(function(){
    gsap.to("#banner img", {
      rotate:360,
      duration:3,
      repeat:-1,
      ease:'linear'
    })
  })
  return (
    <div className='absolute bottom-0 left-0 px-16  py-10 w-full  flex items-end justify-between'>
      <div>
        <h2 className='text-[1.3vw] font-[anzo2] leading-5'>BRAND DESIGN | WEBSITE DESIGN</h2>
        <h3 className='text-[1.3vw] font-[anzo3] text-gray-400'> BESPOKE FREELANCE</h3>
      </div>
      <div id='banner'>
        <img className='h-20 mb-6' src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_101,h_101,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cssda-wotd-white.png" alt="" />
        <img className='h-20' src="https://static.wixstatic.com/media/f1c650_64de2af00f41462e8aecc3d04537f9b4~mv2.png/v1/fill/w_101,h_101,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/EN_legend_large.png" alt="" />
      </div>
    </div>
  )
}

export default Page1Bottom