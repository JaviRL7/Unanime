/**
 * English translations for project data (titles, descriptions, features, quotes)
 * Keyed by project id
 */
export const projectsEn: Record<string, {
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
      date: "September, 2025",
      description:
        "<span class='font-bold text-primary'>I developed</span> a complete web application to <span class='font-bold text-primary'>digitalize</span> the Doña Araña store, specialized in <span class='font-bold text-primary'>yarns and crafts</span>. <span class='font-bold text-primary'>I used</span> <span class='font-semibold text-foreground'>Next.js</span> and <span class='font-semibold text-foreground'>Spring Boot</span> to create a platform that allows customers to <span class='font-bold text-primary'>explore the catalog</span>, <span class='font-bold text-primary'>manage reservations</span> and leave reviews. Additionally, <span class='font-bold text-primary'>I implemented</span> an intuitive <span class='font-bold text-primary'>admin panel</span> to manage products, control stock and update the gallery. The result is a <span class='font-semibold text-foreground'>modern, functional</span> and <span class='font-semibold text-foreground'>fully responsive</span> experience.",
    },
    details: [
      {
        date: "September, 2025",
        title: "Design and Visual Direction",
        subtitle: "Frontend · Visual management · Organization",
        description:
          "I developed the visual part of the project, focusing on creating a warm, clear experience coherent with the brand's artisanal identity. I aimed for an aesthetic reminiscent of the world of crafts, yarns and the warm autumn/winter atmosphere. I carefully crafted the composition, typography and color palette to convey that \"cozy\" handmade feeling, while maintaining a modern, organized and functional interface.",
        systemTitle: "Design and User Experience",
        systemDescription:
          "I created a <span class='font-bold text-primary'>coherent visual interface</span> with the brand's <span class='font-semibold text-foreground'>artisanal identity</span>, inspired by the <span class='font-bold text-primary'>warm atmosphere</span> of crafts. <span class='font-semibold text-foreground'>Composition</span>, <span class='font-semibold text-foreground'>typography</span> and <span class='font-bold text-primary'>color palette</span> convey a modern and functional \"cozy\" aesthetic.",
        features: [
          "<span class='font-bold text-primary'>Attractive</span> and easy-to-understand interface",
          "Balance between <span class='font-bold text-primary'>aesthetic design</span> and usability",
          "<span class='font-bold text-primary'>Coherent</span> and artisanal visual identity",
          "<span class='font-bold text-primary'>Accessibility</span> for all types of users",
        ],
        quote: "Creating a <span class='font-bold text-primary'>very visual</span> page as part of marketing. <span class='font-bold text-primary'>Very aesthetic for mobile</span>, since most of the audience accesses from there",
      },
      {
        date: "September, 2025",
        title: "Online Sales System",
        subtitle: "E-commerce · Order management · Payment processing",
        description:
          "I developed a complete e-commerce platform focused on simplifying sales management and offering a clear shopping experience for all types of users. From the start I aimed for the design to be legible, understandable and accessible, especially for older people or those less familiar with technology. I wanted to show that an e-commerce can be functional and modern without losing approachability or ease of use.",
        systemTitle: "Sales Management",
        systemDescription:
          "I developed an <span class='font-bold text-primary'>e-commerce platform</span> focused on <span class='font-semibold text-foreground'>simplifying sales</span> with a <span class='font-bold text-primary'>clear and accessible</span> experience for all types of users, especially <span class='font-semibold text-foreground'>people with little technological familiarity</span>.",
        features: [
          "E-commerce portal with <span class='font-bold text-primary'>real sales</span>",
          "Robust <span class='font-bold text-primary'>frontend-backend</span> architecture",
          "<span class='font-bold text-primary'>Payment gateways</span> and stock control",
          "<span class='font-bold text-primary'>Accessible</span> experience for elderly users",
        ],
        quote: "<span class='font-bold text-primary'>Functional and modern</span> e-commerce without losing approachability or <span class='font-bold text-primary'>ease of use</span>",
      },
    ],
  },

  "contabilidad-web": {
    hero: {
      title: "Web Accounting",
      date: "June, 2025",
      description:
        "<span class='font-bold text-primary'>I created</span> an accounting web application to <span class='font-bold text-primary'>digitalize financial management</span> for <span class='font-semibold text-foreground'>small businesses</span>, inspired by my mother's family business, <span class='font-bold text-primary'>Doña Araña</span>. I designed it for people who want to manage their accounts in a <span class='font-bold text-primary'>simple, visual</span> way without technical complications. It allows <span class='font-bold text-primary'>recording income and expenses</span>, analyzing daily transactions and viewing <span class='font-bold text-primary'>real-time statistics</span>. It includes a <span class='font-bold text-primary'>financial calendar</span> and smart categorization tools, all within an <span class='font-semibold text-foreground'>intuitive and modern</span> interface.",
    },
  },

  "linkedin-stats": {
    hero: {
      title: "LinkedIn Impact",
      date: "2025",
      description: "Reach and engagement metrics from my Contabilidad-DA post",
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
        date: "June, 2025",
        title: "Admin Panel and Accounting",
        subtitle: "Management · CRUD · Control · Finance",
        description:
          "I developed a panel designed for tracking daily income and expenses in a simple way. Each entry can be assigned a tag or category, allowing better organization and understanding of money flow. The system includes a full CRUD to create, edit or delete records quickly and safely, making daily accounting accessible even for those with no prior finance experience.",
        systemTitle: "Simple and practical accounting",
        systemDescription:
          "I developed a panel designed for <span class='font-bold text-primary'>daily tracking</span> of <span class='font-semibold text-foreground'>income and expenses</span> in a simple way. Each entry can be assigned a <span class='font-bold text-primary'>tag or category</span>, allowing <span class='font-semibold text-foreground'>better organization and understanding</span> of money flow.",
        features: [
          "Facilitate <span class='font-bold text-primary'>daily recording</span> of income and expenses",
          "Organize information through <span class='font-bold text-primary'>tags and categories</span>",
          "Keep the interface <span class='font-bold text-primary'>clear, intuitive</span> and easy to use",
          "Simplify <span class='font-bold text-primary'>accounting management</span> without complications",
        ],
        quote: "Daily accounting <span class='font-bold text-primary'>simple, clear</span> and hassle-free",
      },
      {
        date: "June, 2025",
        title: "Payment Management System",
        subtitle: "Management · Analysis · Visualization · Calendar",
        description:
          "I developed a system to manage payments in a clear and simple way. It offers visual panels with easy-to-interpret statistics, allowing you to know the payment status at a glance. It also integrates a calendar to schedule due dates and receive notifications, facilitating daily organization and control.",
        systemTitle: "Visual control and efficient tracking",
        systemDescription:
          "I developed a system to <span class='font-semibold text-foreground'>manage payments</span> in a <span class='font-bold text-primary'>clear and simple</span> way. It offers <span class='font-bold text-primary'>visual panels</span> with <span class='font-semibold text-foreground'>easy-to-interpret statistics</span>, allowing you to know the <span class='font-bold text-primary'>payment status</span> at a glance.",
        features: [
          "Simplify payment <span class='font-bold text-primary'>management and tracking</span>",
          "Visualize <span class='font-bold text-primary'>data and statistics</span> in an understandable way",
          "Integrate <span class='font-bold text-primary'>calendar</span> and automatic notifications",
        ],
        quote: "<span class='font-bold text-primary'>Organized</span> payments, visual analysis and <span class='font-bold text-primary'>total control</span>",
      },
    ],
  },

  "local-noise": {
    hero: {
      title: "Local Noise",
      date: "In development, 2025",
      description:
        "<span class='font-bold text-primary'>I developed</span> a web platform to <span class='font-bold text-primary'>discover and share local rock bands</span> on an <span class='font-bold text-primary'>interactive world map</span>. We all know <span class='font-semibold text-foreground'>The Beatles are from Liverpool</span>, but where is that band only you know? That <span class='font-bold text-primary'>band from your city or town</span> that only locals know. The idea is to <span class='font-bold text-primary'>give them global visibility</span>, allowing users to <span class='font-bold text-primary'>locate bands on the map</span>, <span class='font-bold text-primary'>search them on Spotify</span> and <span class='font-bold text-primary'>play their music with Deezer</span>. A platform to connect <span class='font-semibold text-foreground'>local music scenes</span> with the world.",
    },
    details: [
      {
        date: "In development, 2025",
        title: "Spotify-inspired Design",
        subtitle: "Visual Identity · Spotify API · Green and Black",
        description:
          "I designed the visual identity based on Spotify's recognizable aesthetic, using its characteristic chromatic palette of vibrant greens on black backgrounds. The idea was to create a familiar experience for regular music platform users, but applied to a different context: discovering local bands. The green tones convey energy and freshness, while black adds elegance and focus on musical content.",
        systemTitle: "Spotify Visual Identity",
        systemDescription:
          "Design based on <span class='font-bold text-primary'>Spotify's</span> aesthetic with a <span class='font-bold text-primary'>green and black</span> palette, creating a <span class='font-semibold text-foreground'>familiar experience</span> for music platform users applied to <span class='font-semibold text-foreground'>local band discovery</span>.",
        features: [
          "<span class='font-bold text-primary'>Green and black</span> chromatic palette inspired by Spotify",
          "<span class='font-bold text-primary'>Familiar</span> interface for music platform users",
          "Modern design focused on <span class='font-bold text-primary'>musical content</span>",
          "Aesthetic that conveys <span class='font-bold text-primary'>energy and freshness</span>",
        ],
        quote: "<span class='font-bold text-primary'>Vibrant greens</span> and elegant blacks: recognizable aesthetic to <span class='font-bold text-primary'>discover local music</span>",
      },
      {
        date: "In development, 2025",
        title: "Music Integration",
        subtitle: "Spotify API · Deezer Player · Interactive Map",
        description:
          "I implemented integration with the Spotify API to allow users to search and discover bands, accessing detailed information about each artist. I also integrated a Deezer player so music can be listened to directly on the platform. The interactive world map allows visualizing where bands are from, creating connections between geography and music. Users can explore local scenes from anywhere in the world, discovering bands that would otherwise remain anonymous outside their region.",
        systemTitle: "Music Search and Playback",
        systemDescription:
          "Integration with <span class='font-bold text-primary'>Spotify</span> for <span class='font-semibold text-foreground'>band search</span> and <span class='font-bold text-primary'>Deezer</span> for <span class='font-semibold text-foreground'>music playback</span>, combined with an <span class='font-bold text-primary'>interactive map</span> connecting <span class='font-semibold text-foreground'>geography and music</span> from local scenes.",
        features: [
          "Band search via <span class='font-bold text-primary'>Spotify API</span>",
          "Integrated music playback with <span class='font-bold text-primary'>Deezer</span>",
          "<span class='font-bold text-primary'>Interactive world map</span> of locations",
          "Connection between <span class='font-bold text-primary'>local music scenes</span> and global audience",
        ],
        quote: "From your city to the world: connecting <span class='font-bold text-primary'>local music scenes</span> with a global audience",
      },
    ],
  },

  "extra-tfg": {
    hero: {
      title: "Final Degree Project",
      date: "2024",
      description:
        "<span class='font-bold text-primary'>I developed</span> my Final Degree Project focused on <span class='font-bold text-primary'>business management systems</span> and <span class='font-bold text-primary'>database architecture</span>. The project included the <span class='font-bold text-primary'>complete database diagram design</span>, <span class='font-bold text-primary'>business logic implementation</span> and the creation of an <span class='font-semibold text-foreground'>intuitive interface</span> for business operations management. A project that consolidated my knowledge in <span class='font-semibold text-foreground'>software architecture</span> and <span class='font-semibold text-foreground'>systems design</span>.",
    },
  },

  "tfg-arquitectura": {
    hero: {
      title: "Database Architecture",
      date: "2024",
      description: "",
    },
  },

  "tfg-diagrama": {
    hero: {
      title: "Entity-Relationship Diagram",
      date: "2024",
      description: "",
    },
  },

  "inanilux-portfolio": {
    hero: {
      title: "Portfolio for Inanilux",
      date: "In development",
      description: "Custom portfolio prototype for Pokémon-focused artistic content creator",
    },
  },

  "design-process": {
    hero: {
      title: "Design Process",
      date: "Creative",
      description: "Methodology and workflow in projects",
    },
  },

  "color-palette": {
    hero: {
      title: "Color Palette",
      date: "Design",
      description: "Analysis of the design's chromatic palette",
    },
  },
};
