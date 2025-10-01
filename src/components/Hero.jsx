import React from 'react'
import image from '../assets/image.jpg'

export default function Hero() {
  return (
    <div>
      {/*Hero*/}
      
      <section id='hero' className='h-screen flex flex-col items-start justify-start text-start'
      style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <h1  className='text-4xl font-bold pl-40'>
        hi im <span>sebas</span>
        </h1>
        <p className='mt-4 text-lg pl-40'>
           o am a deveoper junior 
        </p>
      </section>
    </div>
  )
}
