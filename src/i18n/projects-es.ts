/**
 * Spanish translations for project data (titles, descriptions, features, quotes)
 * Keyed by project id
 */
export const projectsEs: Record<string, {
  hero: {
    title: string;
    date: string;
    description: string;
  };
  details?: Array<{
    date: string;
    title: string;
    subtitle: string;
    description: string;
    systemTitle: string;
    systemDescription: string;
    features: string[];
    quote: string;
  }>;
}> = {
  "dona-arana": {
    hero: {
      title: "E-Commerce Doña Araña",
      date: "Septiembre, 2025",
      description:
        "<span class='font-bold text-primary'>Desarrollé</span> una aplicación web completa para <span class='font-bold text-primary'>digitalizar</span> la tienda Doña Araña, especializada en <span class='font-bold text-primary'>lanas y manualidades</span>. <span class='font-bold text-primary'>Utilicé</span> <span class='font-semibold text-foreground'>Next.js</span> y <span class='font-semibold text-foreground'>Spring Boot</span> para crear una plataforma que permite a los clientes <span class='font-bold text-primary'>explorar el catálogo</span>, <span class='font-bold text-primary'>gestionar apartados</span> y dejar reseñas. Además, <span class='font-bold text-primary'>implementé</span> un <span class='font-bold text-primary'>panel de administración</span> intuitivo para gestionar productos, controlar el stock y actualizar la galería. El resultado es una experiencia <span class='font-semibold text-foreground'>moderna, funcional</span> y <span class='font-semibold text-foreground'>totalmente responsive</span>.",
    },
    details: [
      {
        date: "Septiembre, 2025",
        title: "Diseño y Dirección Visual",
        subtitle: "Frontend · Gestión visual · Organización",
        description:
          "Desarrollé la parte visual del proyecto, centrando el trabajo en crear una experiencia acogedora, clara y coherente con la identidad artesanal de la marca. Busqué una estética que recordara al mundo de las manualidades, las lanas y el ambiente cálido del otoño e invierno. Cuidé la composición, la tipografía y la paleta de colores para transmitir esa sensación \"cozy\" de lo hecho a mano, manteniendo al mismo tiempo una interfaz moderna, ordenada y funcional.",
        systemTitle: "Diseño y Experiencia de Usuario",
        systemDescription:
          "Creé una <span class='font-bold text-primary'>interfaz visual coherente</span> con la <span class='font-semibold text-foreground'>identidad artesanal</span> de la marca, inspirada en el <span class='font-bold text-primary'>ambiente cálido</span> de las manualidades. <span class='font-semibold text-foreground'>Composición</span>, <span class='font-semibold text-foreground'>tipografía</span> y <span class='font-bold text-primary'>paleta de colores</span> transmiten una estética \"cozy\" moderna y funcional.",
        features: [
          "Interfaz <span class='font-bold text-primary'>atractiva</span> y fácil de entender",
          "Equilibrio entre <span class='font-bold text-primary'>diseño estético</span> y usabilidad",
          "Identidad visual <span class='font-bold text-primary'>coherente</span> y artesanal",
          "<span class='font-bold text-primary'>Accesibilidad</span> para todo tipo de usuarios",
        ],
        quote: "Crear una página <span class='font-bold text-primary'>muy visual</span> como parte del marketing. <span class='font-bold text-primary'>Muy estética para móviles</span>, ya que la mayoría del público accede desde ahí",
      },
      {
        date: "Septiembre, 2025",
        title: "Sistema de Ventas Online",
        subtitle: "E-commerce · Gestión de pedidos · Procesamiento de pagos",
        description:
          "Desarrollé una plataforma completa de comercio electrónico centrada en simplificar la gestión de ventas y ofrecer una experiencia de compra clara para todo tipo de usuarios. Desde el principio me propuse que el diseño fuera legible, entendible y accesible, especialmente para personas mayores o con menos familiaridad con la tecnología. Quería demostrar que un e-commerce puede ser funcional y moderno sin perder la cercanía ni la facilidad de uso.",
        systemTitle: "Gestión de Ventas",
        systemDescription:
          "Desarrollé una <span class='font-bold text-primary'>plataforma e-commerce</span> enfocada en <span class='font-semibold text-foreground'>simplificar las ventas</span> con una experiencia <span class='font-bold text-primary'>clara y accesible</span> para todo tipo de usuarios, especialmente <span class='font-semibold text-foreground'>personas con poca familiaridad</span> tecnológica.",
        features: [
          "Portal e-commerce con <span class='font-bold text-primary'>ventas reales</span>",
          "Arquitectura <span class='font-bold text-primary'>frontend-backend</span> robusta",
          "<span class='font-bold text-primary'>Pasarelas de pago</span> y control de stock",
          "Experiencia <span class='font-bold text-primary'>accesible</span> para personas mayores",
        ],
        quote: "E-commerce <span class='font-bold text-primary'>funcional y moderno</span> sin perder cercanía ni <span class='font-bold text-primary'>facilidad de uso</span>",
      },
    ],
  },

  "contabilidad-web": {
    hero: {
      title: "Contabilidad Web",
      date: "Junio, 2025",
      description:
        "<span class='font-bold text-primary'>Creé</span> una aplicación web de contabilidad para <span class='font-bold text-primary'>digitalizar la gestión financiera</span> de <span class='font-semibold text-foreground'>pequeños comercios</span>, inspirada en el negocio familiar de mi madre, <span class='font-bold text-primary'>Doña Araña</span>. La diseñé para personas que buscan llevar sus cuentas de forma <span class='font-bold text-primary'>simple, visual</span> y sin complicaciones técnicas. Permite <span class='font-bold text-primary'>registrar ingresos y gastos</span>, analizar movimientos diarios y ver <span class='font-bold text-primary'>estadísticas en tiempo real</span>. Incluye un <span class='font-bold text-primary'>calendario financiero</span> y herramientas de categorización inteligente, todo dentro de una interfaz <span class='font-semibold text-foreground'>intuitiva y moderna</span>.",
    },
  },

  "linkedin-stats": {
    hero: {
      title: "Impacto en LinkedIn",
      date: "2025",
      description: "Métricas de alcance y engagement de mi publicación sobre Contabilidad-DA",
    },
  },

  "more-features": {
    hero: {
      title: "",
      date: "",
      description: "",
    },
    details: [
      {
        date: "Junio, 2025",
        title: "Panel de Administración y Contabilidad",
        subtitle: "Gestión · CRUD · Control · Finanzas",
        description:
          "Desarrollé un panel pensado para llevar el control diario de ingresos y gastos de manera sencilla. Cada entrada puede asignarse a una etiqueta o categoría, lo que permite organizar y entender mejor cómo se mueve el dinero. El sistema incluye un CRUD completo para crear, editar o eliminar registros de manera rápida y segura, haciendo que la contabilidad diaria sea accesible incluso para quienes no tienen experiencia previa en finanzas.",
        systemTitle: "Contabilidad simple y práctica",
        systemDescription:
          "Desarrollé un panel pensado para llevar el <span class='font-bold text-primary'>control diario</span> de <span class='font-semibold text-foreground'>ingresos y gastos</span> de manera sencilla. Cada entrada puede asignarse a una <span class='font-bold text-primary'>etiqueta o categoría</span>, lo que permite <span class='font-semibold text-foreground'>organizar y entender</span> mejor cómo se mueve el dinero.",
        features: [
          "Facilitar el <span class='font-bold text-primary'>registro diario</span> de ingresos y gastos",
          "Organizar la información mediante <span class='font-bold text-primary'>etiquetas y categorías</span>",
          "Mantener la interfaz <span class='font-bold text-primary'>clara, intuitiva</span> y fácil de usar",
          "Simplificar la <span class='font-bold text-primary'>gestión de contabilidad</span> sin complicaciones",
        ],
        quote: "Contabilidad diaria <span class='font-bold text-primary'>simple, clara</span> y sin complicaciones",
      },
      {
        date: "Junio, 2025",
        title: "Sistema de Gestión de Pagos",
        subtitle: "Gestión · Análisis · Visualización · Calendario",
        description:
          "Desarrollé un sistema para gestionar pagos de forma clara y sencilla. Ofrece paneles visuales con estadísticas fáciles de interpretar, permitiendo conocer el estado de los pagos de un vistazo. Además, integra un calendario para programar vencimientos y recibir notificaciones, facilitando la organización y el control diario.",
        systemTitle: "Control visual y seguimiento eficiente",
        systemDescription:
          "Desarrollé un sistema para <span class='font-semibold text-foreground'>gestionar pagos</span> de forma <span class='font-bold text-primary'>clara y sencilla</span>. Ofrece <span class='font-bold text-primary'>paneles visuales</span> con <span class='font-semibold text-foreground'>estadísticas fáciles</span> de interpretar, permitiendo conocer el <span class='font-bold text-primary'>estado de los pagos</span> de un vistazo.",
        features: [
          "Simplificar la <span class='font-bold text-primary'>gestión y seguimiento</span> de pagos",
          "Visualizar <span class='font-bold text-primary'>datos y estadísticas</span> de manera comprensible",
          "Integrar <span class='font-bold text-primary'>calendario</span> y notificaciones automáticas",
        ],
        quote: "Pagos <span class='font-bold text-primary'>organizados</span>, análisis visual y <span class='font-bold text-primary'>control total</span>",
      },
    ],
  },

  "local-noise": {
    hero: {
      title: "Local Noise",
      date: "En desarrollo, 2025",
      description:
        "<span class='font-bold text-primary'>Desarrollé</span> una plataforma web para <span class='font-bold text-primary'>descubrir y compartir bandas de rock locales</span> en un <span class='font-bold text-primary'>mapa mundial interactivo</span>. Todos conocemos que <span class='font-semibold text-foreground'>The Beatles son de Liverpool</span>, pero ¿de dónde es esa banda que solo conoces tú? Esa <span class='font-bold text-primary'>banda de tu ciudad o pueblo</span> que solo conocéis allí. La idea es <span class='font-bold text-primary'>darles visibilidad global</span>, permitiendo a los usuarios <span class='font-bold text-primary'>ubicar bandas en el mapa</span>, <span class='font-bold text-primary'>buscarlas en Spotify</span> y <span class='font-bold text-primary'>reproducir su música con Deezer</span>. Una plataforma para conectar <span class='font-semibold text-foreground'>escenas musicales locales</span> con el mundo.",
    },
    details: [
      {
        date: "En desarrollo, 2025",
        title: "Diseño inspirado en Spotify",
        subtitle: "Identidad Visual · API Spotify · Verde y Negro",
        description:
          "Diseñé la identidad visual basándome en la estética reconocible de Spotify, utilizando su paleta cromática característica de verdes vibrantes sobre fondos negros. La idea era crear una experiencia familiar para los usuarios habituales de plataformas musicales, pero aplicada a un contexto diferente: el descubrimiento de bandas locales. Los tonos verdes transmiten energía y frescura, mientras que el negro aporta elegancia y enfoque en el contenido musical.",
        systemTitle: "Identidad Visual Spotify",
        systemDescription:
          "Diseño basado en la estética de <span class='font-bold text-primary'>Spotify</span> con paleta de <span class='font-bold text-primary'>verdes y negros</span>, creando una <span class='font-semibold text-foreground'>experiencia familiar</span> para usuarios de plataformas musicales aplicada al <span class='font-semibold text-foreground'>descubrimiento de bandas locales</span>.",
        features: [
          "Paleta cromática <span class='font-bold text-primary'>verde y negro</span> inspirada en Spotify",
          "Interfaz <span class='font-bold text-primary'>familiar</span> para usuarios de plataformas musicales",
          "Diseño moderno enfocado en el <span class='font-bold text-primary'>contenido musical</span>",
          "Estética que transmite <span class='font-bold text-primary'>energía y frescura</span>",
        ],
        quote: "<span class='font-bold text-primary'>Verdes vibrantes</span> y negros elegantes: estética reconocible para <span class='font-bold text-primary'>descubrir música local</span>",
      },
      {
        date: "En desarrollo, 2025",
        title: "Integración Musical",
        subtitle: "API Spotify · Reproductor Deezer · Mapa Interactivo",
        description:
          "Implementé la integración con la API de Spotify para permitir a los usuarios buscar y descubrir bandas, accediendo a información detallada de cada artista. Además, integré un reproductor de Deezer para que la música se pueda escuchar directamente en la plataforma. El mapa mundial interactivo permite visualizar de dónde son las bandas, creando conexiones entre geografía y música. Los usuarios pueden explorar escenas locales de cualquier parte del mundo, descubriendo bandas que de otra forma permanecerían en el anonimato fuera de su región.",
        systemTitle: "Búsqueda y Reproducción Musical",
        systemDescription:
          "Integración con <span class='font-bold text-primary'>Spotify</span> para <span class='font-semibold text-foreground'>búsqueda de bandas</span> y <span class='font-bold text-primary'>Deezer</span> para <span class='font-semibold text-foreground'>reproducción musical</span>, combinado con un <span class='font-bold text-primary'>mapa interactivo</span> que conecta <span class='font-semibold text-foreground'>geografía y música</span> de escenas locales.",
        features: [
          "Búsqueda de bandas mediante <span class='font-bold text-primary'>API de Spotify</span>",
          "Reproducción musical integrada con <span class='font-bold text-primary'>Deezer</span>",
          "<span class='font-bold text-primary'>Mapa mundial</span> interactivo de ubicaciones",
          "Conexión entre <span class='font-bold text-primary'>escenas musicales locales</span> y audiencia global",
        ],
        quote: "De tu ciudad al mundo: conectando <span class='font-bold text-primary'>escenas musicales locales</span> con una audiencia global",
      },
    ],
  },

  "extra-tfg": {
    hero: {
      title: "Trabajo de Fin de Grado",
      date: "2024",
      description:
        "<span class='font-bold text-primary'>Desarrollé</span> mi Trabajo de Fin de Grado enfocado en <span class='font-bold text-primary'>sistemas de gestión empresarial</span> y <span class='font-bold text-primary'>arquitectura de bases de datos</span>. El proyecto incluyó el <span class='font-bold text-primary'>diseño completo del diagrama de base de datos</span>, la <span class='font-bold text-primary'>implementación de la lógica de negocio</span> y la creación de una <span class='font-semibold text-foreground'>interfaz intuitiva</span> para la gestión de operaciones empresariales. Un trabajo que consolidó mis conocimientos en <span class='font-semibold text-foreground'>arquitectura de software</span> y <span class='font-semibold text-foreground'>diseño de sistemas</span>.",
    },
  },

  "tfg-arquitectura": {
    hero: {
      title: "Arquitectura de Base de Datos",
      date: "2024",
      description: "",
    },
  },

  "tfg-diagrama": {
    hero: {
      title: "Diagrama Entidad-Relación",
      date: "2024",
      description: "",
    },
  },

};
