import React from 'react'
import image from '../assets/image.jpg'

export default function Hero() {
  return (
    <div>
      {/*Hero*/}
      
      <section 
        id='hero' 
        className='h-screen flex flex-col items-start justify-center text-start text-white'

      >
        <h1 className='text-4xl md:text-6xl font-mono font-bold pl-20 leading-snug typing'>
          {`< Hi, I'm Sebastian />`}
        </h1>
        <p className='mt-6 text-lg md:text-2xl pl-20 font-mono typing'>
          {`< Frontend Developer />`}
        </p>
        <p className='mt-2 text-md md:text-xl pl-20 font-mono text-green-400'>
          {`< Welcome to my portfolio />`}
        </p>
      </section>
    </div>
  )
}
