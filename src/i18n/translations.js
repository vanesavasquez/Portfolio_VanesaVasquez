export const translations = {
  es: {
    nav: {
      home: 'Inicio',
      projects: 'Proyectos',
      experience: 'Experiencia',
      resume: 'CV'
    },
    home: {
      badges: ['UX Designer', 'Web Developer'],
      stickyNotes: [
        'Piensa más diseña menos',
        'Simplifica y luego simplifica de nuevo',
        'No tiene que ser perfecto mamá.'
      ],
      description1: '¡Hola, mi nombre es Vane! 👋 y soy Diseñadora UX/UI con más de 4 años de experiencia en diseño digital y un fuerte enfoque en research, estrategia y visión de negocio. Cuento con un backup de 3 años de Diseñadora web y FrontEnd. Mi objetivo es crear productos digitales que funcionen para las personas y para los objetivos del negocio y mis clientes, combinando empatía, análisis y creatividad.',
      description2: 'Actualmente soy consultora freelancer para proyectos de <strong>Desarrollo web</strong>, <strong>diseño UX/UI</strong> y <strong>diseño de tiendas online</strong>. ¿Tienes algun proyecto en mente? <strong>Escribime por whatsapp.</strong>'
    },
    projects: {
      title: 'Proyectos',
      viewCase: 'Ver caso de estudio →',
      items: [
        {
          slug: 'fico-crm-mobile',
          title: 'FiCo CRM - Mobile | Laboratorio Bagó',
          category: 'Producto',
          description: 'FiCo CRM Mobile es una solución móvil creada desde cero para optimizar el trabajo de campo. El proyecto nació para simplificar la carga administrativa, comenzando con Éticos y su éxito sumó más negocios y países.'
        },
        {
          slug: 'fico-crm-web-eticos',
          title: 'FiCo CRM Web (Éticos)',
          category: 'Producto',
          description: 'FiCo CRM Web es la plataforma de escritorio que centraliza la gestión y el seguimiento de la actividad administrativa y de clientes de la unidad de Éticos.'
        },
        {
          slug: 'sistema-de-diseno-bago',
          title: 'Sistema de Diseño del Ecosistema Digital Laboratorios Bagó',
          category: 'System design',
          description: 'El Sistema de Diseño para los productos CRM de Laboratorios Bagó nació como una respuesta estratégica a la fragmentación visual y operativa entre las distintas plataformas y unidades de negocio.'
        },
        {
          slug: 'transfer-laboratorios-bago',
          title: 'Transfer (Laboratorios Bagó)',
          category: 'Rediseño UX',
          description: 'El proyecto Transfer se centró en el rediseño del módulo de carga de productos dentro de una plataforma del CRM B2B optimizada para tablets.'
        },
        {
          slug: 'campus-bago',
          title: 'Campus Bagó: Diseño de Capacitación Digital y Adopción para FiCo CRM',
          category: 'Contenido Digital',
          description: 'Lanzamiento de capacitaciones (mp4) dentro del campus de la empresa para asegurar una adopción fluida mediante una estrategia de onboarding y capacitación a gran escala. La serie completa incluye 12 videos.'
        }
      ]
    },
    projectDetail: {
      back: '← Volver a Proyectos',
      notFound: 'Proyecto no encontrado',
      notFoundDesc: 'El proyecto que buscás no existe. Volvé a la lista de proyectos.',
      sections: {
        description: 'Descripción del proyecto',
        challenge: 'El Desafío',
        research: 'Investigación UX',
        solution: 'Solución de Diseño',
        impact: 'Impacto y Resultados',
        screens: 'Pantallas del producto',
        fullDesign: 'Diseño completo',
        architecture: 'Arquitectura',
        explore: 'Explorar el sistema'
      },
      iframeFallback: 'GitHub está teniendo problemas con este sitio pero puedes ingresar de forma manual haciendo',
      iframeFallbackLink: 'clic aquí',
      viewFullPage: 'Ver página completa →',
      exploreSystem: 'Explorar el sistema →',
      items: {
        'fico-crm-mobile': {
          title: 'FiCo CRM - Mobile | Laboratorio Bagó',
          description: 'FiCo CRM Mobile es una aplicación Android corporativa diseñada para gestionar las relaciones entre Laboratorios Bagó y todos sus clientes (médicos, farmacias, instituciones y pacientes). A lo largo de aproximadamente 3 años de evolución continua, trabajé como UX/UI Designer en estrecha colaboración con el Product Owner, el equipo de desarrollo y diversos stakeholders. El producto comenzó enfocándose en la unidad de Éticos y escaló exitosamente para integrar Especiales y Comercial, unificando todas las unidades de negocio en un solo ecosistema.',
          challenge: 'La fuerza de ventas (APMs o visitadores médicos) utilizaba una aplicación legacy desactualizada y poco intuitiva. Existían problemas graves de accesibilidad, contraste y jerarquía visual. La información crítica de auditoría estaba oculta en submenús y acciones diarias esenciales, como el "Parte Diario", requerían scrollear. Ante estos bloqueos, los usuarios mitigaban los fallos del sistema complementando su trabajo con agendas de papel y apps externas, lo que generaba una gran fragmentación y pérdida de datos.',
          research: 'Para entender el trabajo de campo real, lideré una investigación profunda utilizando múltiples métodos: entrevistas semiestructuradas, focus groups, pruebas de usabilidad y validaciones remotas con equipos de Argentina. Los hallazgos fueron claros: los usuarios necesitaban ver la información clave above the fold (sin scroll). La agenda de papel solo podía ser reemplazada si la app ofrecía un sistema robusto de recordatorios personalizables vinculados a los médicos. Los filtros de mercado y el acceso a las auditorías debían ser instantáneos.',
          solution: 'A partir de la investigación, rediseñé por completo la experiencia estructurando varios módulos clave: Dashboard y Ficha del Médico (eliminé el scroll para CTAs críticos, unifiqué la jerarquía visual e implementé indicadores visuales rápidos). Planificador / Agenda (reemplazo digital exacto para la agenda de papel, permitiendo copiar planificaciones por ciclos). UI Kit y Accesibilidad (sistema de diseño con tipografía Work Sans y paleta escalable basada en el Rosa Bagó). Micro-interacciones y Handoff (más de 33 GIFs de micro-interacciones, animaciones Lottie y un paquete de 40+ SVGs).',
          impact: 'El rediseño transformó la manera en que la fuerza de ventas opera en el terreno. Se eliminó la dependencia de las agendas de papel gracias al nuevo planificador de visitas. Mejoró drásticamente el registro de interacciones, métricas y tiempos de gestión. Se logró una capacitación escalada a toda la fuerza de ventas mediante guiones y videos por módulos. La solidez de la interfaz permitió que el producto recibiera validación y se adaptara para los equipos comerciales de LATAM (Bolivia, Chile, Ecuador y Perú).',
          screens: ['Dashboard', 'Ficha del Médico', 'Planificador', 'Parte Diario', 'Recordatorios']
        },
        'fico-crm-web-eticos': {
          title: 'FiCo CRM Web (Éticos)',
          description: 'FiCo CRM Web es la versión de escritorio del fichero médico y el producto digital más grande y complejo en el que intervine dentro del ecosistema de Laboratorios Bagó. Se trata de una plataforma preexistente de enorme envergadura, compuesta por más de 40 programas internos diseñados para perfiles analíticos y de toma de decisiones: Jefes Regionales, Gerentes de Marketing (MKT) y Administradores. A nivel técnico, el proyecto representaba un desafío mayor al combinar componentes en Angular 14 con una migración progresiva hacia Angular 20.',
          challenge: 'El ecosistema web requería integrar el alto volumen de datos generados por la fuerza de ventas en la app mobile (Android) con las necesidades específicas de análisis, control y gestión del entorno desktop. El proyecto comenzó con la necesidad crítica de rediseñar la "Ficha del Médico", una vista extremadamente densa. Sin embargo, al auditar la plataforma, detecté que la experiencia global estaba fragmentada, lo que dificultaba la operatividad diaria de los líderes regionales y de marketing al navegar entre las decenas de módulos legacy.',
          research: 'Abordé la reestructuración desde la arquitectura de la información y la unificación visual, adaptando el Sistema de Diseño a las exigencias de pantallas grandes y validando los cambios constructivos entre Angular 14 y 20.',
          solution: 'Rediseño de la Portada Web: lideré la exploración UI desarrollando 6 opciones de diseño estructural con múltiples variantes (layouts, estilos y visualización con/sin negocio). Optimización de Módulos Core: adaptación del listado de médicos, expansión de la cabecera de la ficha del médico, Administrador de Cartera avanzado (con búsqueda por código postal) y vistas de estadísticas ampliadas. Experiencia para Perfiles Especiales: flujos eficientes para Jefes Regionales (aprobación de novedades, revisión de carteras, notificaciones segmentadas) y Marketing (registro de interacciones en capacitaciones médicas, reportes de eficacia promocional).',
          impact: 'La intervención en FiCo Web transformó una plataforma masiva y operativamente pesada en un entorno analítico fluido y coherente. Se logró estandarizar la visualización de datos complejos y se agilizó el trabajo administrativo y estratégico de los perfiles gerenciales, logrando una sincronización perfecta con la actividad de campo de la versión mobile.',
          screens: ['Portada Web', 'Ficha del Médico', 'Administrador de Cartera', 'Notificaciones', 'Reportes MKT']
        },
        'sistema-de-diseno-bago': {
          title: 'Sistema de Diseño del Ecosistema Digital Laboratorios Bagó',
          description: 'El Sistema de Diseño para los productos CRM de Laboratorios Bagó nació como una respuesta estratégica a la fragmentación visual y operativa que existía entre las distintas plataformas (web y mobile) y unidades de negocio (Éticos, Especiales y Comercial). La iniciativa tuvo como objetivo crear una única fuente de verdad que alineara el diseño UI, el desarrollo técnico y los objetivos del negocio bajo una mirada 360°.',
          challenge: 'El ecosistema digital previo convivía con patrones visuales inconsistentes, una brecha profunda entre los diseños y la implementación técnica, y el uso de lineamientos que necesitaban modernización (como el salto desde Material Design 2). Esto generaba fricción operativa, tiempos de desarrollo prolongados y una experiencia de usuario dispar, especialmente al enfrentar integraciones complejas y migraciones en tecnologías combinadas como Angular (versiones 14 y 20) y Flutter.',
          research: 'El sistema se construyó de manera iterativa. Comenzó tomando forma con la creación de un UI Kit fundacional para la app FiCo CRM Mobile (con la unidad de Éticos) y demostró su verdadero valor al escalar hacia la plataforma web, resolviendo vistas de alta complejidad analítica como la Ficha del Cliente.',
          solution: 'Metodología y Estructura: se aplicaron los principios de Atomic Design para construir desde los elementos más básicos hasta componentes modulares y altamente reutilizables. Estandarización Avanzada: se integró el uso estratégico de variables en Figma, tomando como base los principios de Material Design 3, pero adaptándolos estrictamente a las necesidades reales y reglas de negocio del laboratorio. Sinergia con Desarrollo: se establecieron reglas precisas de espaciado, tipografía, uso de gráficos y comportamiento de tablas complejas, auditando constantemente los entornos de prueba para reducir la brecha entre diseño y código.',
          impact: 'La consolidación de este Sistema de Diseño transformó la construcción de productos dentro del equipo. Permitió reducir drásticamente el retrabajo, agilizar la toma de decisiones y facilitar una escalabilidad fluida (lo que permitió la rápida integración de nuevos negocios como Especiales y Comercial). El resultado final es una experiencia sólida, accesible y coherente en todos los puntos de contacto del ecosistema.',
          screens: ['UI Kit Mobile', 'UI Kit Web', 'Variables Figma', 'Tokens de Color', 'Componentes Angular']
        },
        'transfer-laboratorios-bago': {
          title: 'Transfer (Laboratorios Bagó)',
          description: 'El proyecto Transfer se centró en el rediseño del módulo de carga de productos dentro de una plataforma del CRM B2B optimizada para tablets. El objetivo principal era transformar una herramienta crítica para los vendedores en una experiencia fluida que potenciara su desempeño en campo.',
          challenge: 'La fricción operativa y baja adopción eran evidentes: había una clara insatisfacción por parte del equipo de ventas. La carga de productos y gestión de descuentos implicaba un proceso manual, lento y frustrante, con una arquitectura de la información insuficiente y una UI que generaba una alta carga cognitiva. Esto se traducía en tiempos de gestión elevados frente al cliente y resistencia a la adopción de la herramienta.',
          research: 'Para abordar el problema desde la raíz, implementé un proceso de UX Research que incluyó entrevistas y pruebas de usabilidad con 15 usuarios clave. Analicé los hallazgos colaborativamente en FigJam, lo que me permitió mapear los puntos de dolor y definir una nueva estructura. A partir de allí, iteré mediante wireframes de baja fidelidad hasta consolidar una propuesta sólida.',
          solution: 'Nueva Arquitectura de Información: transición a un diseño a pantalla completa con navegación intuitiva por pestañas. Automatización e Inteligencia: implementación de lógica inteligente para la selección y aplicación automática de descuentos, eliminando la carga manual.',
          impact: 'El rediseño transformó radicalmente la experiencia del módulo Transfer. Al pasar de un ingreso de datos tedioso a un flujo natural y automatizado, se mejoró significativamente la eficiencia operativa de los vendedores, reduciendo los tiempos de gestión y logrando una adopción exitosa del producto.',
          screens: ['Carga de Productos', 'Gestión de Descuentos', 'Vista Tablet', 'Flujo de Confirmación']
        },
        'campus-bago': {
          title: 'Campus Bagó: Diseño de Capacitación Digital y Adopción para FiCo CRM',
          description: 'El lanzamiento del nuevo FiCo CRM Mobile para la unidad de Éticos representaba un cambio operativo radical para la fuerza de ventas, quienes venían de utilizar sistemas legacy y agendas de papel. Para garantizar el éxito del producto y un alto retorno de inversión, no bastaba con diseñar una interfaz intuitiva; era imperativo asegurar una adopción fluida mediante una estrategia de onboarding y capacitación a gran escala, alojada en la plataforma corporativa Campus Bagó.',
          challenge: 'La fuerza de ventas necesitaba transitar de sistemas legacy y agendas de papel hacia una aplicación móvil compleja sin perder productividad. Era necesario reducir drásticamente la curva de aprendizaje, minimizar el volumen de consultas a soporte y asegurar una transición exitosa hacia el nuevo ecosistema CRM.',
          research: 'Aprovechando mi conocimiento profundo de la plataforma y de los flujos de los usuarios como UX/UI Designer, asumí la creación integral del contenido audiovisual para entrenar a los equipos. Junto a los PMO estructuramos la curva de aprendizaje en seis módulos estratégicos, enfocados en resolver las tareas críticas del trabajo de campo paso a paso.',
          solution: 'Módulo 1 - Pantalla Inicial: navegación del dashboard, indicadores de cobertura y sincronización. Módulo 2 - Estadísticas de Visitas: análisis de números de cartera y categoría prescriptiva. Módulo 3 - Parte Diario: gestión de carga horaria y tipos de hora promocional. Módulo 4 - Farmacovigilancia: accesos directos y flujos para el reporte de casos. Módulo 5 - Recordatorios y Agenda: la transición clave de la agenda física a la digital. Módulo 6 - Listado de Médicos: gestión integral de visitas, no visitas y acciones globales. El proceso de producción abarcó desde la creación de los storylines y bocetos hasta la edición y renderizado final, con múltiples iteraciones (V1 a V5) para garantizar claridad didáctica.',
          impact: 'Se entregó un ecosistema de aprendizaje compuesto por un video introductorio, seis videos MP4 funcionales (~650 MB en total), la documentación de soporte (guiones en DOCX) y un presupuesto documentado para proyectar una Etapa 2 (que incluyó 7 videos más). Esta iniciativa permitió capacitar de manera estandarizada y autogestionada a toda la fuerza de ventas, reduciendo drásticamente la curva de aprendizaje y asegurando una transición exitosa hacia el nuevo ecosistema CRM de Laboratorios Bagó.',
          screens: ['Módulo 1 - Pantalla Inicial', 'Módulo 2 - Estadísticas', 'Módulo 3 - Parte Diario', 'Módulo 4 - Farmacovigilancia', 'Módulo 5 - Agenda']
        }
      }
    },
    experience: {
      title: 'Experiencias',
      subtitle: 'Un recorrido por las marcas y agencias que han confiado en mi visión creativa para elevar sus productos digitales.',
      viewWorkana: 'Ver perfil en Workana →',
      items: [
        {
          number: '01',
          company: 'Tecnosoftware (Laboratorios Bagó)',
          role: 'Ssr. UX Designer',
          period: 'Sep 2022 — Dic 2025',
          description: 'Liderazgo en diseño y mejora de componentes para 5 productos digitales web y mobile. Investigación de usuarios, accesibilidad y trabajo en metodologías ágiles para asegurar experiencias fluidas.'
        },
        {
          number: '02',
          company: 'Hábito 1',
          role: 'Diseñadora UX/UI',
          period: '2022',
          description: 'Servicios de diseño de interfaces y experiencia de usuario para el sector de laboratorios. Gestión del flujo de trabajo mediante Asana y Clockify, y creación de wireframes estructurados en Figma.'
        },
        {
          number: '03',
          company: 'Agencia Diego Agatiello',
          role: 'Desarrolladora Web y frontend',
          period: 'Mar 2021 — Sep 2022',
          description: 'Maquetación web avanzada y desarrollo con herramientas personalizadas, gestionando proyectos corporativos como MAPFRE Argentina y estructurando campañas de Email Marketing.'
        },
        {
          number: '04',
          company: 'Agencia Mardel Palta Digital',
          role: 'Diseñadora Web',
          period: 'Ene 2022 — Sep 2022',
          description: 'Diseño y desarrollo de sitios turísticos y tiendas online, complementado con la edición de recursos visuales e interfaces utilizando Figma y la suite de Adobe.'
        },
        {
          number: '05',
          company: 'Rubra Eventos',
          role: 'Diseñadora Web',
          period: 'Dic 2021 — Jun 2022',
          description: 'Diseño de interfaces web y creación de plataformas en WordPress, traduciendo requerimientos en propuestas visuales claras para los proyectos de la agencia.'
        },
        {
          number: '06',
          company: 'MOL',
          role: 'Desarrolladora Web',
          period: 'Jul 2020 — Dic 2020',
          description: 'Trabajo remoto internacional enfocado en el desarrollo front-end de plataformas de envíos, editando código HTML, CSS y PHP para mejorar y rediseñar interfaces.'
        },
        {
          number: '07',
          company: 'Workana',
          role: 'Desarrolladora Web Freelance',
          period: 'Ene 2020 — Feb 2021',
          description: 'Gestión independiente de más de 25 proyectos web, plataformas educativas y e-commerce, abarcando desde el diseño estructural desde cero hasta la optimización de posicionamiento SEO y SEM, branding y creación de gráficas digitales. Nivel Golden en la plataforma.'
        },
        {
          number: '08',
          company: 'Pulso',
          role: 'Diseñadora Web',
          period: 'Oct 2018 — Dic 2019',
          description: 'Primeros pasos técnicos en el diseño y mantenimiento de plataformas en WordPress, combinando el desarrollo para tiendas e-commerce con la creación de gráficas digitales.'
        }
      ]
    },
    resume: {
      name: 'Vanesa A. Ledesma Vasquez',
      roles: 'UX Designer | UX Research | Front-end | Product Designer | Web Development',
      intro: 'Especialista en UX con más de 5 años de experiencia transformando datos en decisiones de producto. Experta en liderar procesos de Discovery y validación en entornos complejos (B2B, B2E). Domina metodologías cualitativas y cuantitativas (lean UX) para crear experiencias centradas en el usuario. Habilidad para orquestar procesos de research y creativos, buena comunicadora con equipo de ingeniería.',
      downloadCV: '↓ Descargar CV',
      sections: {
        skills: 'Skills',
        experience: 'Experiencia Profesional',
        education: 'Educación',
        languages: 'Idiomas'
      },
      skills: [
        { name: 'Diseño & Prototipado', desc: 'Figma (Avanzado: Variables, Auto-layout), FigJam, Miro, Adobe Creative Suite, UXcel, Framer, Canva.' },
        { name: 'Investigación UX', desc: 'User Interviews, Usability Testing (Moderated/Unmoderated), Surveys, Card Sorting, Tree Testing, Desk Research. Useberry, Bullpark, SurveyMonkey, TypeForm, Google Forms. investigación Maze, Proto. Google Analytics y Clarity.' },
        { name: 'Técnicas', desc: 'Sistemas de Diseño (Atomic Design), Arquitectura de la Información, perfiles de usuarios, Flujo de usuario, Sitemap, Flujo de navegación, Journey Map, Diseño de interacciones, Accesibilidad (WCAG), Metodologías Ágiles (Scrum/Jira), Heuristic Evaluation, Metodología mobile-first.' },
        { name: 'Desarrollo', desc: 'HTML, CSS, Bootstrap, React, JS, PHP, SQL, WordPress, Shopify, SEO. Visual Studio Code, OpenCode, Antigravity, Android Studio para implementación de proyectos.' },
        { name: 'Discovery y Research (IA)', desc: 'Análisis de documentación y evaluaciones heurísticas; creación de agentes de investigación, laboratorio y Test de usuarios con "Agentes". Pruebas de concepto en OpenCode.' },
        { name: 'Prototipado y Desarrollo (IA)', desc: 'Asistencia en desarrollo web e integración en Figma con Claude Code; prototipado/laboratorio rápido de diseños con V0.' },
        { name: 'UX Writing (IA)', desc: 'Generación de contenido y agentes de redacción utilizando Gemini (Gems) y ChatGPT.' }
      ],
      experience: [
        {
          period: 'Septiembre 2022 — Actualidad',
          company: 'Laboratorios Bagó (Consultora Be Proactive/Tecnosoftware)',
          role: 'Senior UX/UI Designer',
          description: 'Investigación mixta (cualitativa/cuantitativa), pruebas de usabilidad moderadas y no moderadas, entrevistas en profundidad. Análisis de comportamiento con Microsoft Clarity. Diseño integral en Figma para plataformas web y móvil del CRM comercial. Auditoría UI y migración de sistemas a Angular/Flutter. Colaboración con equipos de ingeniería. Documentación y sistematización de componentes.'
        },
        {
          period: 'Junio 2022 — Agosto 2022',
          company: 'Disprofarma (Consultora Be Proactive)',
          role: 'UX/UI Designer',
          description: 'Rediseño de flujos transaccionales y seguimiento de pedidos en e-commerce B2B de alta complejidad logística. Simplificación de navegación y arquitectura de información para autogestión de clientes (farmacias y droguerías).'
        },
        {
          period: 'Enero 2019 — Junio 2022',
          company: 'Consultora UX/UI & Frontend Developer (Freelance)',
          role: 'UX/UI Designer & Frontend Developer',
          description: 'Diseño e implementación de tiendas online (WooCommerce/Tienda Nube) enfocadas en conversión. Ejecución completa del ciclo de vida: relevamiento, branding, desarrollo Frontend (HTML/CSS/JS) y lanzamiento. Clientes: Mapfre Seguros, Rubra Eventos, Hospital Italiano, Life Seguros, entre otros.'
        }
      ],
      education: [
        { year: 'En curso', title: 'Tecnicatura en Diseño de Apps Mobile', institution: 'UNNOBA', description: 'Trabajo final en desarrollo.' },
        { year: '2019', title: 'Diplomatura en Programación Full Stack (React.js)', institution: 'UTN FRBA', description: '' },
        { year: '2019', title: 'Tecnicatura en Diseño Web', institution: 'Universidad Nacional de San Luis', description: '' },
        { year: 'Certificación', title: 'Diseño de Producto y UX', institution: 'Academia Platzi', description: '' },
        { year: 'Certificación', title: 'Curso de Pruebas de Usabilidad', institution: 'Platzi', description: '' },
        { year: 'Certificación', title: 'Curso de Investigación de Usuarios: Estudios Prácticos', institution: 'Platzi', description: '' },
        { year: 'Certificación', title: 'Curso de User Research: Técnicas para una Investigación Efectiva', institution: 'Platzi', description: '' },
        { year: 'Certificación', title: 'Curso diseño centrado en el usuario', institution: 'Platzi', description: '' },
        { year: 'Certificación', title: 'Curso de audiocápsulas de casos e historias', institution: 'Platzi', description: '' },
        { year: 'Certificación', title: 'Curso de inglés (Nivel 7)', institution: 'CUI, UBA', description: '' },
        { year: 'Certificación', title: 'Curso Intensivo de inglés', institution: 'CUI, UBA', description: '' }
      ],
      languages: [
        { name: 'Español', level: 'Nativo' },
        { name: 'Inglés', level: 'Nivel 7 (CUI, UBA)' }
      ]
    },
    common: {
      contact: 'Contactar'
    }
  },
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      experience: 'Experience',
      resume: 'CV'
    },
    home: {
      badges: ['UX Designer', 'Web Developer'],
      stickyNotes: [
        'Think more, design less',
        'Simplify, then simplify again',
        "It doesn't have to be perfect, mom."
      ],
      description1: "Hi, my name is Vane! 👋 I'm a UX/UI Designer with over 4 years of experience in digital design and a strong focus on research, strategy, and business vision. I also have 3 years of background as a Web Designer and Frontend Developer. My goal is to create digital products that work for people and for business objectives, combining empathy, analysis, and creativity.",
      description2: "I currently work as a freelance consultant for <strong>Web Development</strong>, <strong>UX/UI Design</strong>, and <strong>Online Store Design</strong> projects. Do you have a project in mind? <strong>Message me on WhatsApp.</strong>"
    },
    projects: {
      title: 'Projects',
      viewCase: 'View case study →',
      items: [
        {
          slug: 'fico-crm-mobile',
          title: 'FiCo CRM - Mobile | Laboratorio Bagó',
          category: 'Product',
          description: 'FiCo CRM Mobile is a mobile solution built from scratch to optimize field work. The project was created to simplify administrative tasks, starting with Éticos, and its success expanded to more businesses and countries.'
        },
        {
          slug: 'fico-crm-web-eticos',
          title: 'FiCo CRM Web (Éticos)',
          category: 'Product',
          description: 'FiCo CRM Web is the desktop platform that centralizes management and tracking of administrative and client activity for the Éticos business unit.'
        },
        {
          slug: 'sistema-de-diseno-bago',
          title: 'Design System for Laboratorios Bagó Digital Ecosystem',
          category: 'Design System',
          description: 'The Design System for Laboratorios Bagó CRM products was created as a strategic response to the visual and operational fragmentation across different platforms and business units.'
        },
        {
          slug: 'transfer-laboratorios-bago',
          title: 'Transfer (Laboratorios Bagó)',
          category: 'UX Redesign',
          description: 'The Transfer project focused on redesigning the product loading module within a B2B CRM platform optimized for tablets.'
        },
        {
          slug: 'campus-bago',
          title: 'Campus Bagó: Digital Training Design and Adoption for FiCo CRM',
          category: 'Digital Content',
          description: 'Launch of training videos (mp4) within the company campus to ensure smooth adoption through a large-scale onboarding and training strategy. The complete series includes 12 videos.'
        }
      ]
    },
    projectDetail: {
      back: '← Back to Projects',
      notFound: 'Project not found',
      notFoundDesc: "The project you're looking for doesn't exist. Go back to the projects list.",
      sections: {
        description: 'Project Description',
        challenge: 'The Challenge',
        research: 'UX Research',
        solution: 'Design Solution',
        impact: 'Impact and Results',
        screens: 'Product Screens',
        fullDesign: 'Full Design',
        architecture: 'Architecture',
        explore: 'Explore the System'
      },
      iframeFallback: 'GitHub is having issues with this site, but you can access it manually by',
      iframeFallbackLink: 'clicking here',
      viewFullPage: 'View full page →',
      exploreSystem: 'Explore the system →',
      items: {
        'fico-crm-mobile': {
          title: 'FiCo CRM - Mobile | Laboratorio Bagó',
          description: 'FiCo CRM Mobile is a corporate Android application designed to manage relationships between Laboratorios Bagó and all its clients (doctors, pharmacies, institutions, and patients). Over approximately 3 years of continuous evolution, I worked as a UX/UI Designer in close collaboration with the Product Owner, the development team, and various stakeholders. The product started focusing on the Éticos unit and successfully scaled to integrate Especiales and Comercial, unifying all business units into a single ecosystem.',
          challenge: 'The sales force (APMs or medical representatives) used an outdated and unintuitive legacy application. There were serious accessibility, contrast, and visual hierarchy issues. Critical audit information was hidden in submenus, and essential daily actions like the "Daily Report" required scrolling. Faced with these blockers, users mitigated system failures by supplementing their work with paper agendas and external apps, creating significant fragmentation and data loss.',
          research: 'To understand real field work, I led in-depth research using multiple methods: semi-structured interviews, focus groups, usability tests, and remote validations with teams in Argentina. The findings were clear: users needed to see key information above the fold (without scrolling). The paper agenda could only be replaced if the app offered a robust system of customizable reminders linked to doctors. Market filters and access to audits had to be instant.',
          solution: 'Based on the research, I completely redesigned the experience by structuring several key modules: Dashboard and Doctor Profile (I eliminated scrolling for critical CTAs, unified visual hierarchy, and implemented quick visual indicators). Planner / Agenda (exact digital replacement for the paper agenda, allowing cycle-based planning copies). UI Kit and Accessibility (design system with Work Sans typography and scalable palette based on Bagó Pink). Micro-interactions and Handoff (over 33 micro-interaction GIFs, Lottie animations, and a package of 40+ SVGs).',
          impact: 'The redesign transformed how the sales force operates in the field. Dependence on paper agendas was eliminated thanks to the new visit planner. Interaction logging, metrics, and management times improved dramatically. Scaled training was achieved across the entire sales force through scripts and modular videos. The interface strength allowed the product to receive validation and be adapted for LATAM commercial teams (Bolivia, Chile, Ecuador, and Peru).',
          screens: ['Dashboard', 'Doctor Profile', 'Planner', 'Daily Report', 'Reminders']
        },
        'fico-crm-web-eticos': {
          title: 'FiCo CRM Web (Éticos)',
          description: 'FiCo CRM Web is the desktop version of the medical file and the largest and most complex digital product I worked on within the Laboratorios Bagó ecosystem. It is a pre-existing platform of enormous scale, composed of more than 40 internal programs designed for analytical and decision-making profiles: Regional Managers, Marketing Managers (MKT), and Administrators. At the technical level, the project represented a major challenge by combining Angular 14 components with a progressive migration to Angular 20.',
          challenge: 'The web ecosystem needed to integrate the high volume of data generated by the sales force in the mobile app (Android) with the specific analysis, control, and management needs of the desktop environment. The project began with the critical need to redesign the "Doctor Profile", an extremely dense view. However, when auditing the platform, I detected that the overall experience was fragmented, making it difficult for regional and marketing leaders to navigate between dozens of legacy modules in their daily operations.',
          research: 'I approached the restructuring from information architecture and visual unification, adapting the Design System to the demands of large screens and validating constructive changes between Angular 14 and 20.',
          solution: 'Web Homepage Redesign: I led UI exploration by developing 6 structural design options with multiple variants (layouts, styles, and visualization with/without business). Core Module Optimization: adaptation of the doctor list, expansion of the doctor profile header, advanced Portfolio Manager (with postal code search), and expanded statistics views. Experience for Special Profiles: efficient flows for Regional Managers (approval of updates, portfolio review, segmented notifications) and Marketing (registration of interactions in medical training, promotional effectiveness reports).',
          impact: 'The intervention in FiCo Web transformed a massive and operationally heavy platform into a fluid and coherent analytical environment. Complex data visualization was standardized, and administrative and strategic work for managerial profiles was streamlined, achieving perfect synchronization with the field activity of the mobile version.',
          screens: ['Web Homepage', 'Doctor Profile', 'Portfolio Manager', 'Notifications', 'MKT Reports']
        },
        'sistema-de-diseno-bago': {
          title: 'Design System for Laboratorios Bagó Digital Ecosystem',
          description: 'The Design System for Laboratorios Bagó CRM products was created as a strategic response to the visual and operational fragmentation that existed across different platforms (web and mobile) and business units (Éticos, Especiales, and Comercial). The initiative aimed to create a single source of truth that aligned UI design, technical development, and business objectives with a 360° perspective.',
          challenge: 'The previous digital ecosystem coexisted with inconsistent visual patterns, a deep gap between designs and technical implementation, and the use of guidelines that needed modernization (such as the jump from Material Design 2). This generated operational friction, prolonged development times, and a disparate user experience, especially when facing complex integrations and migrations in combined technologies like Angular (versions 14 and 20) and Flutter.',
          research: 'The system was built iteratively. It began taking shape with the creation of a foundational UI Kit for the FiCo CRM Mobile app (with the Éticos unit) and demonstrated its true value when scaling to the web platform, solving high-complexity analytical views like the Client Profile.',
          solution: 'Methodology and Structure: Atomic Design principles were applied to build from the most basic elements to modular and highly reusable components. Advanced Standardization: strategic use of variables in Figma was integrated, based on Material Design 3 principles, but strictly adapted to the real needs and business rules of the laboratory. Development Synergy: precise rules for spacing, typography, graphics usage, and complex table behavior were established, constantly auditing test environments to reduce the gap between design and code.',
          impact: 'The consolidation of this Design System transformed product construction within the team. It dramatically reduced rework, accelerated decision-making, and facilitated fluid scalability (enabling rapid integration of new businesses like Especiales and Comercial). The final result is a solid, accessible, and coherent experience across all ecosystem touchpoints.',
          screens: ['Mobile UI Kit', 'Web UI Kit', 'Figma Variables', 'Color Tokens', 'Angular Components']
        },
        'transfer-laboratorios-bago': {
          title: 'Transfer (Laboratorios Bagó)',
          description: 'The Transfer project focused on redesigning the product loading module within a B2B CRM platform optimized for tablets. The main objective was to transform a critical tool for salespeople into a fluid experience that enhanced their field performance.',
          challenge: 'Operational friction and low adoption were evident: there was clear dissatisfaction from the sales team. Product loading and discount management involved a manual, slow, and frustrating process, with insufficient information architecture and a UI that generated high cognitive load. This translated to elevated management times in front of clients and resistance to tool adoption.',
          research: 'To address the problem from the root, I implemented a UX Research process that included interviews and usability tests with 15 key users. I analyzed findings collaboratively in FigJam, which allowed me to map pain points and define a new structure. From there, I iterated through low-fidelity wireframes until consolidating a solid proposal.',
          solution: 'New Information Architecture: transition to a full-screen design with intuitive tab navigation. Automation and Intelligence: implementation of smart logic for automatic discount selection and application, eliminating manual loading.',
          impact: 'The redesign radically transformed the Transfer module experience. By moving from tedious data entry to a natural and automated flow, salesperson operational efficiency significantly improved, reducing management times and achieving successful product adoption.',
          screens: ['Product Loading', 'Discount Management', 'Tablet View', 'Confirmation Flow']
        },
        'campus-bago': {
          title: 'Campus Bagó: Digital Training Design and Adoption for FiCo CRM',
          description: 'The launch of the new FiCo CRM Mobile for the Éticos unit represented a radical operational change for the sales force, who had been using legacy systems and paper agendas. To ensure product success and high return on investment, it was not enough to design an intuitive interface; it was imperative to ensure smooth adoption through a large-scale onboarding and training strategy, hosted on the corporate Campus Bagó platform.',
          challenge: 'The sales force needed to transition from legacy systems and paper agendas to a complex mobile application without losing productivity. It was necessary to dramatically reduce the learning curve, minimize support query volume, and ensure a successful transition to the new CRM ecosystem.',
          research: 'Leveraging my deep knowledge of the platform and user flows as a UX/UI Designer, I took on the comprehensive creation of audiovisual content to train the teams. Together with the PMOs, we structured the learning curve into six strategic modules, focused on solving critical field tasks step by step.',
          solution: 'Module 1 - Initial Screen: dashboard navigation, coverage indicators, and synchronization. Module 2 - Visit Statistics: analysis of portfolio numbers and prescriptive category. Module 3 - Daily Report: workload management and promotional hour types. Module 4 - Pharmacovigilance: shortcuts and flows for case reporting. Module 5 - Reminders and Agenda: the key transition from physical to digital agenda. Module 6 - Doctor List: comprehensive management of visits, non-visits, and global actions. The production process ranged from creating storylines and sketches to final editing and rendering, with multiple iterations (V1 to V5) to ensure didactic clarity.',
          impact: 'A learning ecosystem was delivered consisting of an introductory video, six functional MP4 videos (~650 MB total), support documentation (scripts in DOCX), and a documented budget to project Stage 2 (which included 7 more videos). This initiative enabled standardized and self-managed training for the entire sales force, dramatically reducing the learning curve and ensuring a successful transition to the new Laboratorios Bagó CRM ecosystem.',
          screens: ['Module 1 - Initial Screen', 'Module 2 - Statistics', 'Module 3 - Daily Report', 'Module 4 - Pharmacovigilance', 'Module 5 - Agenda']
        }
      }
    },
    experience: {
      title: 'Experience',
      subtitle: 'A journey through the brands and agencies that have trusted my creative vision to elevate their digital products.',
      viewWorkana: 'View Workana profile →',
      items: [
        {
          number: '01',
          company: 'Tecnosoftware (Laboratorios Bagó)',
          role: 'Ssr. UX Designer',
          period: 'Sep 2022 — Dec 2025',
          description: 'Leadership in design and improvement of components for 5 web and mobile digital products. User research, accessibility, and work in agile methodologies to ensure smooth experiences.'
        },
        {
          number: '02',
          company: 'Hábito 1',
          role: 'UX/UI Designer',
          period: '2022',
          description: 'Interface and user experience design services for the laboratory sector. Workflow management through Asana and Clockify, and creation of structured wireframes in Figma.'
        },
        {
          number: '03',
          company: 'Agencia Diego Agatiello',
          role: 'Web and Frontend Developer',
          period: 'Mar 2021 — Sep 2022',
          description: 'Advanced web layout and development with custom tools, managing corporate projects like MAPFRE Argentina and structuring Email Marketing campaigns.'
        },
        {
          number: '04',
          company: 'Agencia Mardel Palta Digital',
          role: 'Web Designer',
          period: 'Jan 2022 — Sep 2022',
          description: 'Design and development of tourism sites and online stores, complemented with editing visual resources and interfaces using Figma and the Adobe suite.'
        },
        {
          number: '05',
          company: 'Rubra Eventos',
          role: 'Web Designer',
          period: 'Dec 2021 — Jun 2022',
          description: 'Web interface design and creation of WordPress platforms, translating requirements into clear visual proposals for agency projects.'
        },
        {
          number: '06',
          company: 'MOL',
          role: 'Web Developer',
          period: 'Jul 2020 — Dec 2020',
          description: 'International remote work focused on front-end development of shipping platforms, editing HTML, CSS, and PHP code to improve and redesign interfaces.'
        },
        {
          number: '07',
          company: 'Workana',
          role: 'Freelance Web Developer',
          period: 'Jan 2020 — Feb 2021',
          description: 'Independent management of over 25 web projects, educational platforms, and e-commerce, covering from structural design from scratch to SEO and SEM positioning optimization, branding, and digital graphics creation. Golden level on the platform.'
        },
        {
          number: '08',
          company: 'Pulso',
          role: 'Web Designer',
          period: 'Oct 2018 — Dec 2019',
          description: 'First technical steps in design and maintenance of WordPress platforms, combining e-commerce store development with digital graphics creation.'
        }
      ]
    },
    resume: {
      name: 'Vanesa A. Ledesma Vasquez',
      roles: 'UX Designer | UX Research | Front-end | Product Designer | Web Development',
      intro: 'UX Specialist with over 5 years of experience transforming data into product decisions. Expert in leading Discovery and validation processes in complex environments (B2B, B2E). Masters qualitative and quantitative methodologies (lean UX) to create user-centered experiences. Ability to orchestrate research and creative processes, strong communicator with engineering teams.',
      downloadCV: '↓ Download CV',
      sections: {
        skills: 'Skills',
        experience: 'Professional Experience',
        education: 'Education',
        languages: 'Languages'
      },
      skills: [
        { name: 'Design & Prototyping', desc: 'Figma (Advanced: Variables, Auto-layout), FigJam, Miro, Adobe Creative Suite, UXcel, Framer, Canva.' },
        { name: 'UX Research', desc: 'User Interviews, Usability Testing (Moderated/Unmoderated), Surveys, Card Sorting, Tree Testing, Desk Research. Useberry, Bullpark, SurveyMonkey, TypeForm, Google Forms. Maze research, Proto. Google Analytics and Clarity.' },
        { name: 'Techniques', desc: 'Design Systems (Atomic Design), Information Architecture, user profiles, user flow, Sitemap, navigation flow, Journey Map, interaction design, Accessibility (WCAG), Agile Methodologies (Scrum/Jira), Heuristic Evaluation, mobile-first methodology.' },
        { name: 'Development', desc: 'HTML, CSS, Bootstrap, React, JS, PHP, SQL, WordPress, Shopify, SEO. Visual Studio Code, OpenCode, Antigravity, Android Studio for project implementation.' },
        { name: 'Discovery and Research (AI)', desc: 'Documentation analysis and heuristic evaluations; creation of research agents, laboratory, and user testing with "Agents". Proof of concepts in OpenCode.' },
        { name: 'Prototyping and Development (AI)', desc: 'Web development assistance and Figma integration with Claude Code; rapid design prototyping/laboratory with V0.' },
        { name: 'UX Writing (AI)', desc: 'Content generation and writing agents using Gemini (Gems) and ChatGPT.' }
      ],
      experience: [
        {
          period: 'September 2022 — Present',
          company: 'Laboratorios Bagó (Be Proactive Consulting/Tecnosoftware)',
          role: 'Senior UX/UI Designer',
          description: 'Mixed research (qualitative/quantitative), moderated and unmoderated usability tests, in-depth interviews. Behavior analysis with Microsoft Clarity. Comprehensive design in Figma for web and mobile platforms of the commercial CRM. UI audit and system migration to Angular/Flutter. Collaboration with engineering teams. Documentation and component systematization.'
        },
        {
          period: 'June 2022 — August 2022',
          company: 'Disprofarma (Be Proactive Consulting)',
          role: 'UX/UI Designer',
          description: 'Redesign of transactional flows and order tracking in high-complexity B2B e-commerce logistics. Simplification of navigation and information architecture for client self-management (pharmacies and drugstores).'
        },
        {
          period: 'January 2019 — June 2022',
          company: 'UX/UI & Frontend Developer Consultant (Freelance)',
          role: 'UX/UI Designer & Frontend Developer',
          description: 'Design and implementation of online stores (WooCommerce/Tienda Nube) focused on conversion. Complete lifecycle execution: research, branding, Frontend development (HTML/CSS/JS), and launch. Clients: Mapfre Seguros, Rubra Eventos, Hospital Italiano, Life Seguros, among others.'
        }
      ],
      education: [
        { year: 'In progress', title: 'Associate Degree in Mobile App Design', institution: 'UNNOBA', description: 'Final project in development.' },
        { year: '2019', title: 'Diploma in Full Stack Programming (React.js)', institution: 'UTN FRBA', description: '' },
        { year: '2019', title: 'Associate Degree in Web Design', institution: 'Universidad Nacional de San Luis', description: '' },
        { year: 'Certification', title: 'Product Design and UX', institution: 'Academia Platzi', description: '' },
        { year: 'Certification', title: 'Usability Testing Course', institution: 'Platzi', description: '' },
        { year: 'Certification', title: 'User Research Course: Practical Studies', institution: 'Platzi', description: '' },
        { year: 'Certification', title: 'User Research Course: Techniques for Effective Research', institution: 'Platzi', description: '' },
        { year: 'Certification', title: 'User-Centered Design Course', institution: 'Platzi', description: '' },
        { year: 'Certification', title: 'Audio Capsules for Cases and Stories Course', institution: 'Platzi', description: '' },
        { year: 'Certification', title: 'English Course (Level 7)', institution: 'CUI, UBA', description: '' },
        { year: 'Certification', title: 'Intensive English Course', institution: 'CUI, UBA', description: '' }
      ],
      languages: [
        { name: 'Spanish', level: 'Native' },
        { name: 'English', level: 'Level 7 (CUI, UBA)' }
      ]
    },
    common: {
      contact: 'Contact'
    }
  }
}
