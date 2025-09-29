import React from 'react'
import Navbar from './components/Navbar'
import image from './assets/image.jpg'


const App = () => {
  return (
    <div>
      <Navbar />
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

      {/* About*/}
      <section id = "about" className='h-screen flex flex-col items-left justify-center text-left'
      >
        <h2 className='text-3xl font-bold mb-4 max-w-2xl ml-12'>
          about me
        </h2>
        <p className='mb-2 max-w-2xl ml-12'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam cumque mollitia suscipit vitae quos voluptatum. Facilis harum pariatur numquam reprehenderit ipsa perspiciatis! Porro officia vero, necessitatibus pariatur repellat maiores voluptates.
        </p>
      </section>

      {/* projects */}
      <section id = "projects" className='h-screen flex flex-col items-center justify-center text-center'>
        <h2 className='text-3xl font-bold mb-4'>proyectos</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='p-6 border rounded-lg shadow'>proyecto 1</div>
          <div className='p-6 border rounded-lg shadow'>proyecto 2</div>
          <div className='p-6 border rounded-lg shadow'>proyecto 3</div>
        </div>
      </section>

      {/* CContact*/}
      <section
  id="contact"
  className="h-screen flex flex-col items-center justify-center text-center"
>
  <h2 className="text-3xl font-bold mb-4">Contacto</h2>
  <p className="mb-2">
    Escríbeme a:{" "}
    <a href="mailto:tuemail@gmail.com" className="text-green-600 underline">
      tuemail@gmail.com
    </a>
  </p>
  <p>
    Visita mi{" "}
    <a
      href="https://github.com/tuusuario"
      className="text-green-600 underline"
      target="_blank"
    >
      GitHub
    </a>
  </p>
</section>

    </div>
  )
}

export default App
