export const languages = {
  en: "English",
  es: "Español",
};

export const defaultLang = "es";

export const ui = {
  en: {
    home: {
      name: "Juan Cruz Leone",
      role: "Frontend developer",
      buttonContact: "Contact me",
    },
    contact: {
      title: "Contact",
      email: "Email",
      message: "Message",
      textareaMessage: "Write your message",
      inputEmail: "Write your email",
      button: "Send message",
    },
    skills: {
      title: "Skills",
    },
    aboutme: {
      title: "About me",
      description:
        "I'm a Frontend Developer with backend knowledge. I studied Web Design and Development at Instituto Da Vinci, and I enjoy building intuitive and well-structured interfaces. I focus on writing clean code, optimizing performance, and improving the user experience.",
    },
    projects: {
      title: "Projects",
      titleInelar: "Inelar | Redesign of web",
      description:
        "To approve my thesis, I redesigned the Inelar website and optimized the services provided through an admin panel",
      tech: {
        nextjs: "NextJs",
        nodejs: "NodeJs",
        expressjs: "ExpressJs",
        mongodb: "MongoDB",
      },
    },
    nav: {
      home: "Home",
      aboutme: "About me",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      buttonCV: "My CV",
      navMenu: "Open navigation menu"
    },
    modal: {
      title: "",
      message: "Message sent successfully",
      close: "Close",
    },
    404: {
      error: "Page not found",
      buttonHome: "Go to home",
    },
  },
  es: {
    home: {
      name: "Juan Cruz Leone",
      role: "Desarrollador frontend",
      buttonContact: "Contactame",
    },
    contact: {
      title: "Contacto",
      email: "Email",
      message: "Mensaje",
      textareaMessage: "Escribe tu mensaje",
      inputEmail: "Escribe tu email",
      button: "Enviar mensaje",
    },
    skills: {
      title: "Habilidades",
    },
    aboutme: {
      title: "Sobre mí",
      description:
        "Soy Desarrollador frontend con conocimientos en backend. Estudié Diseño y Programación Web en el Instituto Da Vinci y me gusta crear interfaces intuitivas y bien estructuradas. Me enfoco en escribir código limpio, optimizar el rendimiento y mejorar la experiencia del usuario",
    },
    projects: {
      title: "Proyectos",
      titleInelar: "Inelar | Rediseño de la web",
      description:
        "Para aprobar mi tesis, rediseñé el sitio web de Inelar y optimicé los servicios prestados a través de un panel de administración",
      tech: {
        nextjs: "NextJs",
        nodejs: "NodeJs",
        expressjs: "ExpressJs",
        mongodb: "MongoDB",
      },
    },
    nav: {
      home: "Inicio",
      aboutme: "Sobre mí",
      skills: "Habilidades",
      projects: "Proyectos",
      contact: "Contacto",
      buttonCV: "Mi CV",
      navMenu: "Abrir menú de navegación"
    },
    modal: {
      title: "",
      message: "Mensaje enviado correctamente",
      close: "Cerrar",
    },
    404: {
      error: "Página no encontrada",
      buttonHome: "Ir al inicio",
    },
  },
} as const;
