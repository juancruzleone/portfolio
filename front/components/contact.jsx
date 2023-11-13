import React from 'react';
import Header from '../components/header.jsx';
import Footer from '../components/footer.jsx';

const Contact = () => {
    return (
        <section id='contact'>
          <h2 className='titulo-contacto'>Contact</h2>
          <div className='contenedor-contacto'>
            <div className='formulario'>
              <form action=""></form>
                <label htmlFor="">Name</label>
                <input type="text" name="name" id="name" placeholder='Write your name'/>
                <label htmlFor="">Email</label>
                <input type="text" name='email' placeholder='Write your email' />
                <label htmlFor="">Message</label>
                <input type="text" name='message' placeholder='Write your message' id='mensaje'/>
                <input type="submit" value="Enviar" id='boton-formulario'></input>
            </div>  
          </div>
        </section>
    )
   

}

export default Contact