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
        "Complete redesign of the Inelar company website as my thesis project, implementing a modern and intuitive interface. Developed an admin panel for efficient management of services, projects, and content. Optimized user experience with responsive design, improved navigation, and integration of interactive features for better customer engagement",
      titleCMMS: "CMMS Panel | Maintenance Management",
      descriptionCMMS:
        "Comprehensive CMMS (Computerized Maintenance Management System) panel for managing preventive and corrective maintenance, equipment, work orders, and generating detailed reports with charts and QR codes",
      titleLeonix: "Leonix | E-commerce Platform",
      descriptionLeonix:
        "Modern e-commerce platform with integrated payment system through MercadoPago, email notifications, user authentication, and complete product management",
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
        "Rediseño completo del sitio web de la empresa Inelar como proyecto de tesis, implementando una interfaz moderna e intuitiva. Desarrollé un panel de administración para la gestión eficiente de servicios, proyectos y contenido. Optimicé la experiencia del usuario con diseño responsive, navegación mejorada e integración de funcionalidades interactivas para mejor engagement con los clientes",
      titleCMMS: "CMMS Panel | Gestión de Mantenimiento",
      descriptionCMMS:
        "Panel CMMS (Sistema de Gestión de Mantenimiento Computerizado) completo para administrar mantenimientos preventivos y correctivos, equipos, órdenes de trabajo, y generar reportes detallados con gráficas y códigos QR",
      titleLeonix: "Leonix | Plataforma E-commerce",
      descriptionLeonix:
        "Plataforma de e-commerce moderna con sistema de pagos integrado mediante MercadoPago, notificaciones por email, autenticación de usuarios y gestión completa de productos",
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
