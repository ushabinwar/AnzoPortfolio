import React from 'react'

const TiltText = (props) => {

  return (
    <div id='tiltDiv' ref={props.abc} className='mt-40'>
          <h1 className='text-[4.2vw] leading-[4vw] font-[anzo1]'>I AM <span className='text-black'>DARK MODE</span>™</h1>
          <h1 className='text-[8vw] leading-[7vw] font-[anzo1]'>DESIGNER</h1>
          <h1 className='text-[4.2vw] leading-[4vw] font-[anzo1]'>TO HIRE</h1>
      </div>
  )
}

export default TiltText