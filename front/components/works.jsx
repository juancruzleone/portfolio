import React from 'react';
import Image from 'next/image';
import Header from './header.jsx';
import Footer from './footer.jsx';

const Works = () => {
    return (
        <section id='works'>
            <h2>Works</h2>
            <div className='contenedor-trabajos'>
                <div className='trabajos' id='proyecto1'>
                    <Image src="/trabajo.png" alt="imagen de proyecto" width={400} height={400} />
                    <div className='contenido-proyecto'>
                        <h3>Nombre proyecto</h3>
                        <p className='categoria-proyecto'>Ficticio</p>
                        <p>Descripcion</p>

                    </div>
                </div>
                <div className='trabajos'>
                    <Image src="/trabajo.png" alt="imagen de proyecto" width={400} height={400} />
                    <div className='contenido-proyecto'>
                        <h3>Nombre proyecto</h3>
                        <p className='categoria-proyecto'>Ficticio</p>
                        <p>Descripcion</p>

                    </div>
                </div>
                <div className='trabajos'>
                    <Image src="/trabajo.png" alt="imagen de proyecto" width={400} height={400} />
                    <div className='contenido-proyecto'>
                        <h3>Nombre proyecto</h3>
                        <p className='categoria-proyecto'>Ficticio</p>
                        <p>Descripcion</p>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Works;
