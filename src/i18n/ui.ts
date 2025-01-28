export const languages = {
  en: "English",
  es: "Español",
}

export const defaultLang = "en"

export const ui = {
  en: {
    home: {
      name: "Juan Cruz Leone",
      role: "Fullstack developer",
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
      description: "",
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
    },
    modal: {
      title: "",
      message: "Message sent successfully",
      close: "Close"
    }
  },
  es: {
    home: {
      name: "Juan Cruz Leone",
      role: "Desarrollador Fullstack",
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
      description: "",
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
    },
    modal: {
      title: "",
      message: "Mensaje enviado correctamente",
      close: "Cerrar"
    }
  },
} as const