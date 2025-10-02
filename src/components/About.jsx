import React from 'react'
import image from '../assets/image.jpg'

export default function About() {
    return (
        <div>
            {/* About*/}
            <section
                id="about"
                className="h-screen flex flex-col items-left justify-center text-left"
            >
                <h2 className="text-3xl font-bold mb-4 max-w-2xl ml-12">
                    about me
                </h2>
                <p className="mb-2 max-w-2xl ml-12">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                    cumque mollitia suscipit vitae quos voluptatum. Facilis harum pariatur
                    numquam reprehenderit ipsa perspiciatis! Porro officia vero,
                    necessitatibus pariatur repellat maiores voluptates.
                </p>
            </section>

            {/* projects */}
            <section
                id="projects"
                className="h-screen flex flex-col items-center justify-center text-center"
            >
                <h2 className="text-3xl font-bold mb-4">proyectos</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {/* Proyecto 1 */}
  <div className="group relative p-6 border rounded-lg shadow transition cursor-pointer hover:bg-green-500 hover:text-white">
    <span className="inline-flex items-center">
      {`< Project 1 />`}
      <span className="ml-2 relative w-4 h-4 inline-flex items-center justify-center">
        <span
          className="
            absolute text-lg 
            opacity-100 scale-100 
            group-hover:opacity-0 group-hover:scale-0
            transition-all duration-300
          "
        >
          •
        </span>
        <span
          className="
            absolute opacity-0 translate-x-0
            group-hover:opacity-100 group-hover:translate-x-2
            transition-all duration-300
          "
        >
          →
        </span>
      </span>
    </span>
  </div>

  {/* Proyecto 2 */}
  <div className="group relative p-6 border rounded-lg shadow transition cursor-pointer hover:bg-green-500 hover:text-white">
    <span className="inline-flex items-center">
      {`< Project 2 />`}
      <span className="ml-2 relative w-4 h-4 inline-flex items-center justify-center">
        <span
          className="
            absolute text-lg 
            opacity-100 scale-100 
            group-hover:opacity-0 group-hover:scale-0
            transition-all duration-300
          "
        >
          •
        </span>
        <span
          className="
            absolute opacity-0 translate-x-0
            group-hover:opacity-100 group-hover:translate-x-2
            transition-all duration-300
          "
        >
          →
        </span>
      </span>
    </span>
  </div>

  {/* Proyecto 3 */}
  <div className="group relative p-6 border rounded-lg shadow transition cursor-pointer hover:bg-green-500 hover:text-white">
    <span className="inline-flex items-center">
      {`< Project 3 />`}
      <span className="ml-2 relative w-4 h-4 inline-flex items-center justify-center">
        <span
          className="
            absolute text-lg 
            opacity-100 scale-100 
            group-hover:opacity-0 group-hover:scale-0
            transition-all duration-300
          "
        >
          •
        </span>
        <span
          className="
            absolute opacity-0 translate-x-0
            group-hover:opacity-100 group-hover:translate-x-2
            transition-all duration-300
          "
        >
          →
        </span>
      </span>
    </span>
  </div>
</div>

            </section>
        </div>
    )
}
