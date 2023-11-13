import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


function Header() {
  return (
    <header>
      <div className="portada">
        <Image src="" alt="" />
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="#about-me">About me</Link>
          </li>
          <li>
            <Link href="#works">works</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
          <li className="boton-cv">
            <div className="boton-cv">
              <Link href="">My CV</Link>
            </div>
          </li>
        </ul>
      </nav>
      <div className='contenedor-portada'>
            <h1>Juan cruz Leone</h1>
            <p className='subtitulo-portada'>Front end developer</p>
          </div>
          <div class="boton-contactame"><a href="">Contact me</a></div>
    </header>
  );
}

export default Header;
