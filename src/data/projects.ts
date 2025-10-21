/**
 * Projects Data
 *
 * Central data source for all portfolio projects.
 * Separates data from presentation logic for easy maintenance.
 *
 * Structure:
 * - Each project has a hero section (full screen)
 * - Each project has detail rows (50vh sections)
 * - Featured project appears first
 */

import type { Project } from "@/types/projects";

export const projects: Project[] = [
  // 🔥 PROYECTO DESTACADO - E-Commerce Doña Araña
  {
    id: "dona-arana",
    hero: {
      title: "E-Commerce Doña Araña",
      date: "Septiembre, 2025",
      status: "in-progress",
      description:
        "<span class='font-bold text-primary'>Desarrollé</span> una aplicación web completa para <span class='font-bold text-primary'>digitalizar</span> la tienda Doña Araña, especializada en <span class='font-bold text-primary'>lanas y manualidades</span>. <span class='font-bold text-primary'>Utilicé</span> <span class='font-semibold text-foreground'>Next.js</span> y <span class='font-semibold text-foreground'>Spring Boot</span> para crear una plataforma que permite a los clientes <span class='font-bold text-primary'>explorar el catálogo</span>, <span class='font-bold text-primary'>gestionar apartados</span> y dejar reseñas. Además, <span class='font-bold text-primary'>implementé</span> un <span class='font-bold text-primary'>panel de administración</span> intuitivo para gestionar productos, controlar el stock y actualizar la galería. El resultado es una experiencia <span class='font-semibold text-foreground'>moderna, funcional</span> y <span class='font-semibold text-foreground'>totalmente responsive</span>.",
      mediaType: "video",
      mediaSrc: "/video/u1.mkv",
      badges: [],
      githubUrl: "https://github.com/JaviRL7/Tienda2025",
      demoUrl: "https://pure-gratitude-production-4381.up.railway.app",
    },
    details: [
      // Primera fila - Diseño y Dirección Visual
      {
        date: "Septiembre, 2025",
        status: "completed",
        title: "Diseño y Dirección Visual",
        subtitle: "Frontend · Gestión visual · Organización",
        mediaType: "video",
        mediaSrc: "/video/u2.mkv",
        description:
          "Desarrollé la parte visual del proyecto, centrando el trabajo en crear una experiencia acogedora, clara y coherente con la identidad artesanal de la marca. Busqué una estética que recordara al mundo de las manualidades, las lanas y el ambiente cálido del otoño e invierno. Cuidé la composición, la tipografía y la paleta de colores para transmitir esa sensación \"cozy\" de lo hecho a mano, manteniendo al mismo tiempo una interfaz moderna, ordenada y funcional.",
        systemTitle: "Diseño y Experiencia de Usuario",
        systemDescription:
          "Creé una interfaz visual coherente con la identidad artesanal de la marca, inspirada en el ambiente cálido de las manualidades. Composición, tipografía y paleta de colores transmiten una estética \"cozy\" moderna y funcional.",
        features: [
          "Interfaz atractiva y fácil de entender",
          "Equilibrio entre diseño estético y usabilidad",
          "Identidad visual coherente y artesanal",
          "Accesibilidad para todo tipo de usuarios",
        ],
        quote: "La idea era crear una página muy visual como parte del marketing de la tienda. Debía ser muy estética para móviles, ya que la mayoría del público accede desde ahí, combinando atractivo visual con funcionalidad técnica",
      },
      // Segunda fila - Sistema de Ventas Online
      {
        date: "Septiembre, 2025",
        status: "completed",
        title: "Sistema de Ventas Online",
        subtitle: "E-commerce · Gestión de pedidos · Procesamiento de pagos",
        mediaType: "video",
        mediaSrc: "/video/u3.mkv",
        description:
          "Desarrollé una plataforma completa de comercio electrónico centrada en simplificar la gestión de ventas y ofrecer una experiencia de compra clara para todo tipo de usuarios. Desde el principio me propuse que el diseño fuera legible, entendible y accesible, especialmente para personas mayores o con menos familiaridad con la tecnología. Quería demostrar que un e-commerce puede ser funcional y moderno sin perder la cercanía ni la facilidad de uso.",
        systemTitle: "Gestión de Ventas",
        systemDescription:
          "Desarrollé una plataforma e-commerce enfocada en simplificar las ventas con una experiencia clara y accesible para todo tipo de usuarios, especialmente personas con poca familiaridad tecnológica.",
        features: [
          "Portal e-commerce con ventas reales",
          "Arquitectura frontend-backend robusta",
          "Pasarelas de pago y control de stock",
          "Experiencia accesible para personas mayores",
        ],
        quote: "E-commerce funcional y moderno sin perder cercanía ni facilidad de uso",
      },
    ],
  },

  // Proyecto 2 - Contabilidad Web
  {
    id: "contabilidad-web",
    hero: {
      title: "Contabilidad Web",
      date: "Junio, 2025",
      status: "completed",
      description:
        "<span class='font-bold text-primary'>Creé</span> una aplicación web de contabilidad para <span class='font-bold text-primary'>digitalizar la gestión financiera</span> de <span class='font-semibold text-foreground'>pequeños comercios</span>, inspirada en el negocio familiar de mi madre, <span class='font-bold text-primary'>Doña Araña</span>. La diseñé para personas que buscan llevar sus cuentas de forma <span class='font-bold text-primary'>simple, visual</span> y sin complicaciones técnicas. Permite <span class='font-bold text-primary'>registrar ingresos y gastos</span>, analizar movimientos diarios y ver <span class='font-bold text-primary'>estadísticas en tiempo real</span>. Incluye un <span class='font-bold text-primary'>calendario financiero</span> y herramientas de categorización inteligente, todo dentro de una interfaz <span class='font-semibold text-foreground'>intuitiva y moderna</span>.",
      mediaType: "video",
      mediaSrc: "/video/u4.mp4",
      badges: [],
      githubUrl: "https://github.com/JaviRL7/Contabilidad-DA",
      demoUrl: "https://contabilidad-da-production.up.railway.app/",
    },
    details: [],
  },

  // Proyecto 3 - LinkedIn Stats
  {
    id: "linkedin-stats",
    hero: {
      title: "Impacto en LinkedIn",
      date: "2025",
      status: "completed",
      description: "Métricas de alcance y engagement de mi publicación sobre Contabilidad-DA",
      mediaType: "image",
      mediaSrc: undefined,
      badges: [],
      githubUrl: "https://github.com/JaviRL7/Contabilidad-DA",
    },
    details: [],
  },

  // Proyecto 4 - Más funcionalidades
  {
    id: "more-features",
    hero: {
      title: "",
      date: "",
      status: "in-progress",
      description: "",
      mediaType: "image",
      mediaSrc: undefined,
      badges: [],
    },
    details: [
      // Primera fila - Panel de Administración y Contabilidad
      {
        date: "Junio, 2025",
        status: "in-progress",
        title: "Panel de Administración y Contabilidad",
        subtitle: "Gestión · CRUD · Control · Finanzas",
        mediaType: "video",
        mediaSrc: "/video/u5.mkv",
        description:
          "Desarrollé un panel pensado para llevar el control diario de ingresos y gastos de manera sencilla. Cada entrada puede asignarse a una etiqueta o categoría, lo que permite organizar y entender mejor cómo se mueve el dinero. El sistema incluye un CRUD completo para crear, editar o eliminar registros de manera rápida y segura, haciendo que la contabilidad diaria sea accesible incluso para quienes no tienen experiencia previa en finanzas.",
        systemTitle: "Contabilidad simple y práctica",
        systemDescription:
          "Desarrollé un panel pensado para llevar el control diario de ingresos y gastos de manera sencilla. Cada entrada puede asignarse a una etiqueta o categoría, lo que permite organizar y entender mejor cómo se mueve el dinero.",
        features: [
          "Facilitar el registro diario de ingresos y gastos",
          "Organizar la información mediante etiquetas y categorías",
          "Mantener la interfaz clara, intuitiva y fácil de usar",
          "Simplificar la gestión de la contabilidad sin complicaciones técnicas",
        ],
        quote: "Contabilidad diaria simple, clara y sin complicaciones",
      },
      // Segunda fila - Sistema de Gestión de Pagos
      {
        date: "Junio, 2025",
        status: "in-progress",
        title: "Sistema de Gestión de Pagos",
        subtitle: "Gestión · Análisis · Visualización · Calendario",
        mediaType: "video",
        mediaSrc: "/video/u6.mkv",
        description:
          "Desarrollé un sistema para gestionar pagos de forma clara y sencilla. Ofrece paneles visuales con estadísticas fáciles de interpretar, permitiendo conocer el estado de los pagos de un vistazo. Además, integra un calendario para programar vencimientos y recibir notificaciones, facilitando la organización y el control diario.",
        systemTitle: "Control visual y seguimiento eficiente",
        systemDescription:
          "Desarrollé un sistema para gestionar pagos de forma clara y sencilla. Ofrece paneles visuales con estadísticas fáciles de interpretar, permitiendo conocer el estado de los pagos de un vistazo.",
        features: [
          "Simplificar la gestión y el seguimiento de pagos",
          "Visualizar datos y estadísticas de manera comprensible",
          "Integrar calendario y notificaciones automáticas",
        ],
        quote: "Pagos organizados, análisis visual y control total",
      },
    ],
  },

  // Proyecto 5 - Portfolio para Inanilux
  {
    id: "inanilux-portfolio",
    hero: {
      title: "Portfolio para Inanilux",
      date: "En desarrollo",
      status: "in-progress",
      description: "Prototipo de portfolio personalizado para creadora de contenido artístico centrado en Pokémon",
      mediaType: "image",
      mediaSrc: undefined,
      badges: [
        { text: "Prototipo", color: "border-yellow-500/50 bg-yellow-500/10 text-yellow-500" },
        { text: "En desarrollo", color: "border-blue-500/50 bg-blue-500/10 text-blue-500" },
      ],
    },
    details: [],
  },

  // Proyecto 6 - Proceso de Diseño
  {
    id: "design-process",
    hero: {
      title: "Proceso de Diseño",
      date: "Creativo",
      status: "in-progress",
      description: "Metodología y flujo de trabajo en proyectos",
      mediaType: "image",
      mediaSrc: undefined,
      badges: [],
    },
    details: [],
  },

  // Proyecto 7 - Paleta de Colores
  {
    id: "color-palette",
    hero: {
      title: "Paleta de Colores",
      date: "Diseño",
      status: "in-progress",
      description: "Análisis de paleta cromática del diseño",
      mediaType: "image",
      mediaSrc: "/projects/i1.png",
      badges: [],
    },
    details: [],
  },

];

/**
 * Logo SVG for featured project hero
 * JaviRL branding logo
 */
export const LOGO_SVG = `
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="100%"
  height="100%"
  viewBox="0 0 319 74"
  preserveAspectRatio="xMidYMid meet"
>
  <g fill="currentColor" fillOpacity="1">
    <g transform="translate(15.573501, 55.485679)">
      <path d="M 0 -54.375 L 6.015625 -54.375 L 6.015625 0 C 6.015625 2.21875 5.769531 4.28125 5.28125 6.1875 C 4.800781 8.101562 3.820312 9.640625 2.34375 10.796875 C 0.875 11.960938 -1.378906 12.566406 -4.421875 12.609375 C -6.503906 12.609375 -8.351562 12.148438 -9.96875 11.234375 C -11.582031 10.316406 -12.925781 9.0625 -14 7.46875 L -13.125 6.8125 C -12.351562 7.976562 -11.335938 8.882812 -10.078125 9.53125 C -8.816406 10.1875 -7.507812 10.46875 -6.15625 10.375 C -4.269531 10.226562 -2.890625 9.609375 -2.015625 8.515625 C -1.148438 7.429688 -0.597656 6.101562 -0.359375 4.53125 C -0.117188 2.957031 0 1.445312 0 0 Z M 0 -54.375 " />
    </g>
    <g transform="translate(24.779269, 55.485679)">
      <path d="M 24.0625 -54.375 L 48.4375 0 L 41.828125 0 L 32.84375 -19.9375 C 32.84375 -17.425781 32.441406 -14.972656 31.640625 -12.578125 C 30.847656 -10.179688 29.675781 -8.039062 28.125 -6.15625 C 26.582031 -4.269531 24.675781 -2.769531 22.40625 -1.65625 C 20.132812 -0.550781 17.523438 0 14.578125 0 C 11.378906 0 8.644531 -0.6875 6.375 -2.0625 C 4.101562 -3.4375 2.410156 -5.320312 1.296875 -7.71875 C 0.191406 -10.113281 -0.191406 -12.832031 0.140625 -15.875 C 0.378906 -18.101562 0.945312 -20.265625 1.84375 -22.359375 C 2.738281 -24.460938 3.789062 -26.503906 5 -28.484375 C 6.207031 -30.472656 7.414062 -32.359375 8.625 -34.140625 C 10.125 -36.367188 11.460938 -38.5 12.640625 -40.53125 C 13.828125 -42.5625 14.832031 -44.695312 15.65625 -46.9375 C 16.476562 -49.1875 17.0625 -51.664062 17.40625 -54.375 Z M 31.171875 -23.640625 L 18.265625 -52.421875 C 17.734375 -49.421875 16.875 -46.578125 15.6875 -43.890625 C 14.507812 -41.210938 13.144531 -38.519531 11.59375 -35.8125 C 10.53125 -33.882812 9.421875 -31.816406 8.265625 -29.609375 C 7.109375 -27.410156 6.164062 -25.164062 5.4375 -22.875 C 4.707031 -20.582031 4.46875 -18.273438 4.71875 -15.953125 C 4.957031 -13.578125 5.71875 -11.484375 7 -9.671875 C 8.28125 -7.859375 9.984375 -6.539062 12.109375 -5.71875 C 14.234375 -4.90625 16.695312 -4.738281 19.5 -5.21875 C 21.289062 -5.507812 23.039062 -6.304688 24.75 -7.609375 C 26.46875 -8.910156 27.941406 -10.476562 29.171875 -12.3125 C 30.410156 -14.15625 31.242188 -16.066406 31.671875 -18.046875 C 32.109375 -20.035156 31.941406 -21.898438 31.171875 -23.640625 Z M 31.171875 -23.640625 " />
    </g>
    <g transform="translate(74.071876, 55.485679)">
      <path d="M 6.375 -54.375 L 24.578125 -1.734375 C 27.285156 -10.390625 29.757812 -18.945312 32 -27.40625 C 34.25 -35.863281 36.222656 -44.851562 37.921875 -54.375 L 43.9375 -54.375 L 25.15625 0 L 18.78125 0 L 0 -54.375 Z M 6.375 -54.375 " />
    </g>
    <g transform="translate(118.87012, 55.485679)">
      <path d="M 0 0 L 0 -54.375 L 6.015625 -54.375 L 6.015625 0 Z M 0 0 " />
    </g>
    <g transform="translate(128.148379, 55.485679)">
      <path d="M 27.1875 -54.375 C 29.164062 -54.375 31.132812 -54.191406 33.09375 -53.828125 C 35.050781 -53.460938 36.925781 -52.875 38.71875 -52.0625 C 39.875 -51.519531 41.066406 -50.789062 42.296875 -49.875 C 43.535156 -48.957031 44.578125 -47.90625 45.421875 -46.71875 C 46.265625 -45.539062 46.6875 -44.25 46.6875 -42.84375 C 46.6875 -41.195312 46.140625 -39.832031 45.046875 -38.75 C 43.960938 -37.664062 42.40625 -37.144531 40.375 -37.1875 C 41.15625 -39.363281 41.335938 -41.414062 40.921875 -43.34375 C 40.515625 -45.28125 39.65625 -46.984375 38.34375 -48.453125 C 37.039062 -49.929688 35.421875 -51.09375 33.484375 -51.9375 C 31.554688 -52.789062 29.457031 -53.21875 27.1875 -53.21875 C 23.65625 -53.21875 20.390625 -52.238281 17.390625 -50.28125 C 14.398438 -48.320312 11.925781 -45.675781 9.96875 -42.34375 C 8.007812 -39.007812 6.765625 -35.238281 6.234375 -31.03125 C 7.296875 -32.425781 8.5625 -33.378906 10.03125 -33.890625 C 11.507812 -34.398438 13 -34.628906 14.5 -34.578125 C 16.332031 -34.578125 18.09375 -34.25 19.78125 -33.59375 C 21.476562 -32.945312 23.148438 -32.269531 24.796875 -31.5625 C 26.441406 -30.863281 28.109375 -30.394531 29.796875 -30.15625 C 31.097656 -30.007812 32.398438 -30.128906 33.703125 -30.515625 C 35.015625 -30.910156 35.835938 -31.851562 36.171875 -33.34375 C 36.753906 -31.175781 36.671875 -29.390625 35.921875 -27.984375 C 35.171875 -26.578125 34.019531 -25.582031 32.46875 -25 C 30.925781 -24.425781 29.164062 -24.285156 27.1875 -24.578125 C 25.6875 -24.816406 24.1875 -25.296875 22.6875 -26.015625 C 21.1875 -26.742188 19.734375 -27.519531 18.328125 -28.34375 C 16.929688 -29.164062 15.554688 -29.863281 14.203125 -30.4375 C 12.859375 -31.019531 11.53125 -31.3125 10.21875 -31.3125 C 7.414062 -31.21875 6.015625 -29.84375 6.015625 -27.1875 C 6.066406 -22.207031 7.128906 -17.660156 9.203125 -13.546875 C 11.285156 -9.441406 13.992188 -6.300781 17.328125 -4.125 C 19.890625 -2.488281 22.535156 -1.535156 25.265625 -1.265625 C 27.992188 -1.003906 30.675781 -1.304688 33.3125 -2.171875 C 35.945312 -3.046875 38.410156 -4.335938 40.703125 -6.046875 C 43.003906 -7.765625 45 -9.785156 46.6875 -12.109375 L 46.6875 -6.015625 C 44.226562 -4.085938 41.316406 -2.601562 37.953125 -1.5625 C 34.597656 -0.519531 31.007812 0 27.1875 0 C 23.46875 0 19.960938 -0.695312 16.671875 -2.09375 C 13.390625 -3.5 10.503906 -5.445312 8.015625 -7.9375 C 5.523438 -10.425781 3.566406 -13.3125 2.140625 -16.59375 C 0.710938 -19.882812 0 -23.414062 0 -27.1875 C 0 -30.957031 0.695312 -34.484375 2.09375 -37.765625 C 3.5 -41.054688 5.445312 -43.945312 7.9375 -46.4375 C 10.425781 -48.925781 13.3125 -50.867188 16.59375 -52.265625 C 19.882812 -53.671875 23.414062 -54.375 27.1875 -54.375 Z M 27.1875 -54.375 " />
    </g>
    <g transform="translate(177.223523, 55.485679)">
      <path d="M 0 -54.375 L 26.25 -54.375 C 28.851562 -54.375 31.28125 -53.804688 33.53125 -52.671875 C 35.78125 -51.535156 37.601562 -49.925781 39 -47.84375 C 40.40625 -45.769531 41.109375 -43.257812 41.109375 -40.3125 C 41.109375 -37.164062 40.332031 -34.550781 38.78125 -32.46875 C 37.238281 -30.394531 35.222656 -28.847656 32.734375 -27.828125 C 30.242188 -26.816406 27.550781 -26.3125 24.65625 -26.3125 C 25.8125 -25.78125 26.773438 -24.9375 27.546875 -23.78125 C 29.046875 -21.800781 30.382812 -19.648438 31.5625 -17.328125 C 32.75 -15.003906 33.882812 -12.707031 34.96875 -10.4375 C 36.0625 -8.164062 37.164062 -6.113281 38.28125 -4.28125 C 38.613281 -3.75 39.128906 -3 39.828125 -2.03125 C 40.535156 -1.0625 41.179688 -0.382812 41.765625 0 L 36.171875 0 C 35.160156 0 34.410156 -0.15625 33.921875 -0.46875 C 33.441406 -0.78125 33.035156 -1.226562 32.703125 -1.8125 C 30.859375 -5.195312 29.175781 -8.484375 27.65625 -11.671875 C 26.132812 -14.859375 24.285156 -18.144531 22.109375 -21.53125 C 19.066406 -26.175781 15.488281 -26.804688 11.375 -23.421875 L 10.796875 -24.0625 C 12.148438 -25.226562 13.46875 -26.023438 14.75 -26.453125 C 16.03125 -26.890625 17.367188 -27.144531 18.765625 -27.21875 C 20.171875 -27.289062 21.671875 -27.378906 23.265625 -27.484375 C 27.285156 -27.722656 30.25 -29 32.15625 -31.3125 C 34.0625 -33.632812 35.015625 -36.632812 35.015625 -40.3125 C 35.015625 -42.875 34.394531 -45.117188 33.15625 -47.046875 C 31.925781 -48.984375 30.332031 -50.492188 28.375 -51.578125 C 26.425781 -52.671875 24.335938 -53.21875 22.109375 -53.21875 L 6.015625 -53.21875 L 6.015625 0 L 0 0 Z M 0 -54.375 " />
    </g>
    <g transform="translate(233.402237, 55.485679)">
      <path d="M 0 -54.375 L 26.25 -54.375 C 28.851562 -54.375 31.28125 -53.804688 33.53125 -52.671875 C 35.78125 -51.535156 37.601562 -49.925781 39 -47.84375 C 40.40625 -45.769531 41.109375 -43.257812 41.109375 -40.3125 C 41.109375 -37.164062 40.332031 -34.550781 38.78125 -32.46875 C 37.238281 -30.394531 35.222656 -28.847656 32.734375 -27.828125 C 30.242188 -26.816406 27.550781 -26.3125 24.65625 -26.3125 C 25.8125 -25.78125 26.773438 -24.9375 27.546875 -23.78125 C 29.046875 -21.800781 30.382812 -19.648438 31.5625 -17.328125 C 32.75 -15.003906 33.882812 -12.707031 34.96875 -10.4375 C 36.0625 -8.164062 37.164062 -6.113281 38.28125 -4.28125 C 38.613281 -3.75 39.128906 -3 39.828125 -2.03125 C 40.535156 -1.0625 41.179688 -0.382812 41.765625 0 L 36.171875 0 C 35.160156 0 34.410156 -0.15625 33.921875 -0.46875 C 33.441406 -0.78125 33.035156 -1.226562 32.703125 -1.8125 C 30.859375 -5.195312 29.175781 -8.484375 27.65625 -11.671875 C 26.132812 -14.859375 24.285156 -18.144531 22.109375 -21.53125 C 19.066406 -26.175781 15.488281 -26.804688 11.375 -23.421875 L 10.796875 -24.0625 C 12.148438 -25.226562 13.46875 -26.023438 14.75 -26.453125 C 16.03125 -26.890625 17.367188 -27.144531 18.765625 -27.21875 C 20.171875 -27.289062 21.671875 -27.378906 23.265625 -27.484375 C 27.285156 -27.722656 30.25 -29 32.15625 -31.3125 C 34.0625 -33.632812 35.015625 -36.632812 35.015625 -40.3125 C 35.015625 -42.875 34.394531 -45.117188 33.15625 -47.046875 C 31.925781 -48.984375 30.332031 -50.492188 28.375 -51.578125 C 26.425781 -52.671875 24.335938 -53.21875 22.109375 -53.21875 L 6.015625 -53.21875 L 6.015625 0 L 0 0 Z M 0 -54.375 " />
    </g>
    <g transform="translate(276.968165, 55.485679)">
      <path d="M 0 0 L 0 -54.375 L 6.015625 -54.375 L 6.015625 -1.09375 C 9.929688 -1.09375 13.398438 -1.25 16.421875 -1.5625 C 19.441406 -1.875 22.179688 -2.28125 24.640625 -2.78125 C 27.109375 -3.289062 29.476562 -3.820312 31.75 -4.375 C 34.019531 -4.9375 36.363281 -5.484375 38.78125 -6.015625 L 38.78125 0 Z M 0 0 " />
    </g>
  </g>
</svg>
`;
