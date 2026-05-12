import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import './ProjectDetail.css'

const projectsData = {
  'fico-crm-mobile': {
    title: 'FiCo CRM - Mobile | Laboratorio Bagó',
    description:
      'FiCo CRM Mobile es una aplicación Android corporativa diseñada para gestionar las relaciones entre Laboratorios Bagó y todos sus clientes (médicos, farmacias, instituciones y pacientes). A lo largo de aproximadamente 3 años de evolución continua, trabajé como UX/UI Designer en estrecha colaboración con el Product Owner, el equipo de desarrollo y diversos stakeholders. El producto comenzó enfocándose en la unidad de Éticos y escaló exitosamente para integrar Especiales y Comercial, unificando todas las unidades de negocio en un solo ecosistema.',
    heroImage: '/images/fico-crm-mobile.png',
    challenge:
      'La fuerza de ventas (APMs o visitadores médicos) utilizaba una aplicación legacy desactualizada y poco intuitiva. Existían problemas graves de accesibilidad, contraste y jerarquía visual. La información crítica de auditoría estaba oculta en submenús y acciones diarias esenciales, como el "Parte Diario", requerían scrollear. Ante estos bloqueos, los usuarios mitigaban los fallos del sistema complementando su trabajo con agendas de papel y apps externas, lo que generaba una gran fragmentación y pérdida de datos.',
    research:
      'Para entender el trabajo de campo real, lideré una investigación profunda utilizando múltiples métodos: entrevistas semiestructuradas, focus groups, pruebas de usabilidad y validaciones remotas con equipos de Argentina. Los hallazgos fueron claros: los usuarios necesitaban ver la información clave above the fold (sin scroll). La agenda de papel solo podía ser reemplazada si la app ofrecía un sistema robusto de recordatorios personalizables vinculados a los médicos. Los filtros de mercado y el acceso a las auditorías debían ser instantáneos.',
    solution:
      'A partir de la investigación, rediseñé por completo la experiencia estructurando varios módulos clave: Dashboard y Ficha del Médico (eliminé el scroll para CTAs críticos, unifiqué la jerarquía visual e implementé indicadores visuales rápidos). Planificador / Agenda (reemplazo digital exacto para la agenda de papel, permitiendo copiar planificaciones por ciclos). UI Kit y Accesibilidad (sistema de diseño con tipografía Work Sans y paleta escalable basada en el Rosa Bagó). Micro-interacciones y Handoff (más de 33 GIFs de micro-interacciones, animaciones Lottie y un paquete de 40+ SVGs).',
    impact:
      'El rediseño transformó la manera en que la fuerza de ventas opera en el terreno. Se eliminó la dependencia de las agendas de papel gracias al nuevo planificador de visitas. Mejoró drásticamente el registro de interacciones, métricas y tiempos de gestión. Se logró una capacitación escalada a toda la fuerza de ventas mediante guiones y videos por módulos. La solidez de la interfaz permitió que el producto recibiera validación y se adaptara para los equipos comerciales de LATAM (Bolivia, Chile, Ecuador y Perú).',
    screens: ['Dashboard', 'Ficha del Médico', 'Planificador', 'Parte Diario', 'Recordatorios'],
  },
  'fico-crm-web-eticos': {
    title: 'FiCo CRM Web (Éticos)',
    description:
      'FiCo CRM Web es la versión de escritorio del fichero médico y el producto digital más grande y complejo en el que intervine dentro del ecosistema de Laboratorios Bagó. Se trata de una plataforma preexistente de enorme envergadura, compuesta por más de 40 programas internos diseñados para perfiles analíticos y de toma de decisiones: Jefes Regionales, Gerentes de Marketing (MKT) y Administradores. A nivel técnico, el proyecto representaba un desafío mayor al combinar componentes en Angular 14 con una migración progresiva hacia Angular 20.',
    heroImage: '/images/fico-crm-web.png',
    challenge:
      'El ecosistema web requería integrar el alto volumen de datos generados por la fuerza de ventas en la app mobile (Android) con las necesidades específicas de análisis, control y gestión del entorno desktop. El proyecto comenzó con la necesidad crítica de rediseñar la "Ficha del Médico", una vista extremadamente densa. Sin embargo, al auditar la plataforma, detecté que la experiencia global estaba fragmentada, lo que dificultaba la operatividad diaria de los líderes regionales y de marketing al navegar entre las decenas de módulos legacy.',
    research:
      'Abordé la reestructuración desde la arquitectura de la información y la unificación visual, adaptando el Sistema de Diseño a las exigencias de pantallas grandes y validando los cambios constructivos entre Angular 14 y 20.',
    solution:
      'Rediseño de la Portada Web: lideré la exploración UI desarrollando 6 opciones de diseño estructural con múltiples variantes (layouts, estilos y visualización con/sin negocio). Optimización de Módulos Core: adaptación del listado de médicos, expansión de la cabecera de la ficha del médico, Administrador de Cartera avanzado (con búsqueda por código postal) y vistas de estadísticas ampliadas. Experiencia para Perfiles Especiales: flujos eficientes para Jefes Regionales (aprobación de novedades, revisión de carteras, notificaciones segmentadas) y Marketing (registro de interacciones en capacitaciones médicas, reportes de eficacia promocional).',
    impact:
      'La intervención en FiCo Web transformó una plataforma masiva y operativamente pesada en un entorno analítico fluido y coherente. Se logró estandarizar la visualización de datos complejos y se agilizó el trabajo administrativo y estratégico de los perfiles gerenciales, logrando una sincronización perfecta con la actividad de campo de la versión mobile.',
    screens: ['Portada Web', 'Ficha del Médico', 'Administrador de Cartera', 'Notificaciones', 'Reportes MKT'],
  },
  'sistema-de-diseno-bago': {
    title: 'Sistema de Diseño del Ecosistema Digital Laboratorios Bagó',
    description:
      'El Sistema de Diseño para los productos CRM de Laboratorios Bagó nació como una respuesta estratégica a la fragmentación visual y operativa que existía entre las distintas plataformas (web y mobile) y unidades de negocio (Éticos, Especiales y Comercial). La iniciativa tuvo como objetivo crear una única fuente de verdad que alineara el diseño UI, el desarrollo técnico y los objetivos del negocio bajo una mirada 360°.',
    heroImage: '/images/sistema-de-diseno.png',
    challenge:
      'El ecosistema digital previo convivía con patrones visuales inconsistentes, una brecha profunda entre los diseños y la implementación técnica, y el uso de lineamientos que necesitaban modernización (como el salto desde Material Design 2). Esto generaba fricción operativa, tiempos de desarrollo prolongados y una experiencia de usuario dispar, especialmente al enfrentar integraciones complejas y migraciones en tecnologías combinadas como Angular (versiones 14 y 20) y Flutter.',
    research:
      'El sistema se construyó de manera iterativa. Comenzó tomando forma con la creación de un UI Kit fundacional para la app FiCo CRM Mobile (con la unidad de Éticos) y demostró su verdadero valor al escalar hacia la plataforma web, resolviendo vistas de alta complejidad analítica como la Ficha del Cliente.',
    solution:
      'Metodología y Estructura: se aplicaron los principios de Atomic Design para construir desde los elementos más básicos hasta componentes modulares y altamente reutilizables. Estandarización Avanzada: se integró el uso estratégico de variables en Figma, tomando como base los principios de Material Design 3, pero adaptándolos estrictamente a las necesidades reales y reglas de negocio del laboratorio. Sinergia con Desarrollo: se establecieron reglas precisas de espaciado, tipografía, uso de gráficos y comportamiento de tablas complejas, auditando constantemente los entornos de prueba para reducir la brecha entre diseño y código.',
    impact:
      'La consolidación de este Sistema de Diseño transformó la construcción de productos dentro del equipo. Permitió reducir drásticamente el retrabajo, agilizar la toma de decisiones y facilitar una escalabilidad fluida (lo que permitió la rápida integración de nuevos negocios como Especiales y Comercial). El resultado final es una experiencia sólida, accesible y coherente en todos los puntos de contacto del ecosistema.',
    screens: ['UI Kit Mobile', 'UI Kit Web', 'Variables Figma', 'Tokens de Color', 'Componentes Angular'],
  },
  'transfer-laboratorios-bago': {
    title: 'Transfer (Laboratorios Bagó)',
    description:
      'El proyecto Transfer se centró en el rediseño del módulo de carga de productos dentro de una plataforma del CRM B2B optimizada para tablets. El objetivo principal era transformar una herramienta crítica para los vendedores en una experiencia fluida que potenciara su desempeño en campo.',
    heroImage: '/images/transfer.png',
    challenge:
      'La fricción operativa y baja adopción eran evidentes: había una clara insatisfacción por parte del equipo de ventas. La carga de productos y gestión de descuentos implicaba un proceso manual, lento y frustrante, con una arquitectura de la información insuficiente y una UI que generaba una alta carga cognitiva. Esto se traducía en tiempos de gestión elevados frente al cliente y resistencia a la adopción de la herramienta.',
    research:
      'Para abordar el problema desde la raíz, implementé un proceso de UX Research que incluyó entrevistas y pruebas de usabilidad con 15 usuarios clave. Analicé los hallazgos colaborativamente en FigJam, lo que me permitió mapear los puntos de dolor y definir una nueva estructura. A partir de allí, iteré mediante wireframes de baja fidelidad hasta consolidar una propuesta sólida.',
    solution:
      'Nueva Arquitectura de Información: transición a un diseño a pantalla completa con navegación intuitiva por pestañas. Automatización e Inteligencia: implementación de lógica inteligente para la selección y aplicación automática de descuentos, eliminando la carga manual.',
    impact:
      'El rediseño transformó radicalmente la experiencia del módulo Transfer. Al pasar de un ingreso de datos tedioso a un flujo natural y automatizado, se mejoró significativamente la eficiencia operativa de los vendedores, reduciendo los tiempos de gestión y logrando una adopción exitosa del producto.',
    screens: ['Carga de Productos', 'Gestión de Descuentos', 'Vista Tablet', 'Flujo de Confirmación'],
  },
  'campus-bago': {
    title: 'Campus Bagó: Diseño de Capacitación Digital y Adopción para FiCo CRM',
    description:
      'El lanzamiento del nuevo FiCo CRM Mobile para la unidad de Éticos representaba un cambio operativo radical para la fuerza de ventas, quienes venían de utilizar sistemas legacy y agendas de papel. Para garantizar el éxito del producto y un alto retorno de inversión, no bastaba con diseñar una interfaz intuitiva; era imperativo asegurar una adopción fluida mediante una estrategia de onboarding y capacitación a gran escala, alojada en la plataforma corporativa Campus Bagó.',
    heroImage: '/images/campus-bago.png',
    challenge:
      'La fuerza de ventas necesitaba transitar de sistemas legacy y agendas de papel hacia una aplicación móvil compleja sin perder productividad. Era necesario reducir drásticamente la curva de aprendizaje, minimizar el volumen de consultas a soporte y asegurar una transición exitosa hacia el nuevo ecosistema CRM.',
    research:
      'Aprovechando mi conocimiento profundo de la plataforma y de los flujos de los usuarios como UX/UI Designer, asumí la creación integral del contenido audiovisual para entrenar a los equipos. Junto a los PMO estructuramos la curva de aprendizaje en seis módulos estratégicos, enfocados en resolver las tareas críticas del trabajo de campo paso a paso.',
    solution:
      'Módulo 1 - Pantalla Inicial: navegación del dashboard, indicadores de cobertura y sincronización. Módulo 2 - Estadísticas de Visitas: análisis de números de cartera y categoría prescriptiva. Módulo 3 - Parte Diario: gestión de carga horaria y tipos de hora promocional. Módulo 4 - Farmacovigilancia: accesos directos y flujos para el reporte de casos. Módulo 5 - Recordatorios y Agenda: la transición clave de la agenda física a la digital. Módulo 6 - Listado de Médicos: gestión integral de visitas, no visitas y acciones globales. El proceso de producción abarcó desde la creación de los storylines y bocetos hasta la edición y renderizado final, con múltiples iteraciones (V1 a V5) para garantizar claridad didáctica.',
    impact:
      'Se entregó un ecosistema de aprendizaje compuesto por un video introductorio, seis videos MP4 funcionales (~650 MB en total), la documentación de soporte (guiones en DOCX) y un presupuesto documentado para proyectar una Etapa 2 (que incluyó 7 videos más). Esta iniciativa permitió capacitar de manera estandarizada y autogestionada a toda la fuerza de ventas, reduciendo drásticamente la curva de aprendizaje y asegurando una transición exitosa hacia el nuevo ecosistema CRM de Laboratorios Bagó.',
    screens: ['Módulo 1 - Pantalla Inicial', 'Módulo 2 - Estadísticas', 'Módulo 3 - Parte Diario', 'Módulo 4 - Farmacovigilancia', 'Módulo 5 - Agenda'],
  },
}

const DS_URL = 'https://vanesavasquez.github.io/Laboratorio-DS/'

function ProjectDetail() {
  const { slug } = useParams()
  const project = projectsData[slug]
  const [iframeFailed, setIframeFailed] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => {
    if (slug === 'sistema-de-diseno-bago') {
      timeoutRef.current = setTimeout(() => {
        setIframeFailed(true)
      }, 8000)
    }
    return () => clearTimeout(timeoutRef.current)
  }, [slug])

  const handleIframeLoad = () => {
    clearTimeout(timeoutRef.current)
    setIframeFailed(false)
  }

  if (!project) {
    return (
      <div className="project-detail page">
        <div className="container">
          <Link to="/proyectos" className="project-detail__back">
            ← Volver a Proyectos
          </Link>
          <h1 className="project-detail__title">Proyecto no encontrado</h1>
          <p className="project-detail__desc">
            El proyecto que buscás no existe. Volvé a la lista de proyectos.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="project-detail page">
      <div className="container">
        {/* ── Back link ── */}
        <Link to="/proyectos" className="project-detail__back">
          ← Volver a Proyectos
        </Link>

        {/* ── Header ── */}
        <div className="project-detail__header">
          <div className="project-detail__logo">Logo</div>
          <div className="project-detail__info">
            <h1 className="project-detail__title">{project.title}</h1>
            <p className="project-detail__desc">{project.description}</p>
          </div>
        </div>

        {/* ── Hero Image ── */}
        <div className="project-detail__hero-img">
          {project.heroImage ? (
            <img src={project.heroImage} alt={project.title} />
          ) : (
            'Imagen portada del proyecto'
          )}
        </div>

        {/* ── Description blocks ── */}
        <div className="project-detail__section">
          <h2 className="project-detail__section-title">Descripción del proyecto</h2>
          <p className="project-detail__text-block">
            {project.description}
          </p>
        </div>

        <div className="project-detail__section">
          <h2 className="project-detail__section-title">El Desafío</h2>
          <p className="project-detail__text-block">
            {project.challenge}
          </p>
        </div>

        <div className="project-detail__section">
          <h2 className="project-detail__section-title">Investigación UX</h2>
          <p className="project-detail__text-block">
            {project.research}
          </p>
        </div>

        <div className="project-detail__section">
          <h2 className="project-detail__section-title">Solución de Diseño</h2>
          <p className="project-detail__text-block">
            {project.solution}
          </p>
        </div>

        <div className="project-detail__section">
          <h2 className="project-detail__section-title">Impacto y Resultados</h2>
          <p className="project-detail__text-block">
            {project.impact}
          </p>
        </div>

        {slug !== 'sistema-de-diseno-bago' && (
          <>
            {/* ── Screens Gallery ── */}
            <div className="project-detail__section">
              <h2 className="project-detail__section-title">Pantallas del producto</h2>
              <div className="project-detail__screens">
                {project.screens.map(screen => (
                  <div key={screen} className="project-detail__screen">
                    <span>📱</span>
                    {screen}
                  </div>
                ))}
              </div>
            </div>

            {/* ── Full width image ── */}
            {slug !== 'fico-crm-mobile' && (
              <div className="project-detail__section">
                <h2 className="project-detail__section-title">Diseño completo</h2>
                <div className="project-detail__full-img">
                  Imagen portada del diseño sistema
                </div>
              </div>
            )}

            {/* ── Architecture image ── */}
            <div className="project-detail__section">
              <h2 className="project-detail__section-title">Arquitectura</h2>
              <div className="project-detail__full-img">
                Imagen del armado de la arquitectura
              </div>
            </div>
          </>
        )}

        {slug === 'sistema-de-diseno-bago' && (
          <>
            {/* ── Explorar el sistema (iframe) ── */}
            <div className="project-detail__section">
              <h2 className="project-detail__section-title">Explorar el sistema</h2>

              {/* Desktop iframe */}
              <div className="project-detail__iframe-wrapper">
                {!iframeFailed ? (
                  <iframe
                    className="project-detail__iframe"
                    src={DS_URL}
                    title="Sistema de Diseño Laboratorios Bagó"
                    loading="lazy"
                    onLoad={handleIframeLoad}
                  />
                ) : (
                  <div className="project-detail__iframe-fallback">
                    <p>
                      GitHub está teniendo problemas con este sitio pero puedes
                      ingresar de forma manual haciendo{''}
                      <a
                        href={DS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        clic aquí
                      </a>.
                    </p>
                  </div>
                )}
              </div>

              <div className="project-detail__iframe-link">
                <a
                  href={DS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver página completa →
                </a>
              </div>

              {/* Mobile external link */}
              <div className="project-detail__iframe-mobile">
                <a
                  href={DS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary"
                >
                  Explorar el sistema →
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default ProjectDetail
