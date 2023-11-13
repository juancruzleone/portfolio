import React from 'react';
import Head from 'next/head';
import Header from '../components/header.jsx';
import Footer from '../components/footer.jsx';
import AboutMe from '../components/aboutme.jsx';
import Skills from '../components/skills.jsx';
import Works from '../components/works.jsx';
import Contact from '../components/contact.jsx';

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Juan cruz Leone | Portfolio</title>
        <meta name="description" content="Descripción de mi página" />
      </Head>
      <div className='contenedorPortfolio'>
        <div className='header'>
          <Header id="home"/>
        </div>
        <AboutMe />
        <Skills />
        <Works />
        <Contact />
        </div>
        <Footer />
    </div>
  );
};

export default HomePage;

