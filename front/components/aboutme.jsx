import React from 'react';
import Image from 'next/image';
import Header from '../components/header.jsx';
import Footer from '../components/footer.jsx';

const AboutMe = () => {
    return (
        <section id='about-me'>
        <h2>About me</h2>
        <div className='contenedor-about-me'>
          <p className='texto-about-me'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchange</p>
          {/*Agregar foto mia*/}
        </div>
        </section>
    )
   

}

export default AboutMe