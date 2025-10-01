import React from 'react'

export default function Contact() {
    return (
        <div>
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
