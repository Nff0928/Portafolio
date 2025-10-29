import React, { useState } from 'react';
import { Menu, X, ChevronDown, Instagram, Twitter, Mail, Linkedin, Target, TrendingUp, Users, Award, Briefcase, Sparkles, Code, BarChart3, Database, Globe, ArrowLeft, FileText, Package, GraduationCap, ShoppingBag, Settings, Eye, CheckCircle2 } from 'lucide-react';
import './index.css';
import PixoraLogo from './components/PixoraLogo';

const DualPortfolio = ({ initialProfile = 'fabiana' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [currentProfile, setCurrentProfile] = useState(initialProfile); // 'fabiana' or 'nicolas'

  const menuItems = currentProfile === 'fabiana' ? [
    { 
      name: 'Sobre Mí', 
      href: '#about',
      submenu: ['Experiencia', 'Enfoque', 'Aptitudes']
    },
    { 
      name: 'Servicios', 
      href: '#services',
      submenu: ['Paquetes', 'Programas de Formación']
    },
    { 
      name: 'Experiencia', 
      href: '#experience'
    },
    { 
      name: 'Contacto', 
      href: '#contact'
    }
  ] : [
    { 
      name: 'Sobre Mí', 
      href: '#about',
      submenu: ['Experiencia', 'Especialización', 'Certificaciones']
    },
    { 
      name: 'Servicios', 
      href: '#services',
      submenu: ['Paquetes', 'Servicios Especializados']
    },
    { 
      name: 'Tecnologías', 
      href: '#technologies'
    },
    { 
      name: 'Contacto', 
      href: '#contact'
    }
  ];

  // Fabiana's data
  const fabianaExperience = [
    { 
      title: 'Brand Stylist & Creative Strategist', 
      company: 'Profesional Independiente',
      period: 'Jun 2024 - Actualidad',
      location: 'Colombia'
    },
    { 
      title: 'Global Marketing & Content Coordinator', 
      company: 'ACIUM Global Milano',
      period: 'Jul 2024 - Ago 2025',
      location: 'Milan, Italia · Híbrido'
    },
    { 
      title: 'Coordinadora de Branding', 
      company: 'ACIUM Colombia',
      period: 'Feb 2024 - May 2024',
      location: 'Medellín, Colombia'
    },
    { 
      title: 'Especialista en Gestión de Proyectos', 
      company: 'TAG Agencia Visual',
      period: 'Ene 2023 - Mar 2024',
      location: 'Bogotá, Colombia'
    }
  ];

  const fabianaSkills = [
    'Diseño de Moda',
    'Mercadeo',
    'Gestión de Procesos',
    'Retail',
    'Marcas de Lujo',
    'Estrategia Comercial',
    'Formación de Equipos',
    'Dirección Creativa',
    'Brand Styling',
    'Optimización de Procesos',
    'Fashion Mix',
    'Análisis de Ventas'
  ];

  // Paquetes principales de servicios
  const fabianaPackages = [
    {
      icon: <Eye size={32} strokeWidth={1.5} />,
      title: 'PAQUETE 1: Diagnóstico + Dirección',
      subtitle: 'Visión Coherente',
      duration: '2 semanas',
      objective: 'Entender la marca, alinear visión y dejar una hoja de ruta clara.',
      includes: [
        'Revisión del ADN de marca (identidad, valores, tono y mensaje)',
        'Auditoría visual (producto, vitrinas, redes, punto de venta, empaques)',
        'Auditoría de comunicación (copywriting, discurso de venta, narrativa)',
        'Auditoría de procesos internos del equipo creativo y comercial',
        'Sesión estratégica con líderes para alinear visión',
        'Entrega de Guía de Coherencia de Marca'
      ],
      idealFor: 'Marcas que sienten "desorden" o falta de dirección',
      result: 'La marca entiende quién es, qué transmite y cómo debe avanzar sin improvisar',
      delivery: 'Documento + Reunión de presentación'
    },
    {
      icon: <Sparkles size={32} strokeWidth={1.5} />,
      title: 'PAQUETE 2: Sistema + Ejecución Guiada',
      subtitle: 'Creatividad que Vende',
      duration: '4-6 semanas',
      objective: 'Traducir la estética de la marca en procesos claros y aplicables al día a día.',
      includes: [
        'Todo el Paquete 1',
        'Diseño del Manual de Identidad Estética (mood, color, producto, lenguaje visual)',
        'Estructuración del calendario de colecciones y drops',
        'Matriz de combinaciones o fashion mix para incrementar ticket promedio',
        'Lineamientos para vitrinas y experiencia en tienda',
        'Guía para contenido digital alineado con la estética y campañas',
        'Capacitación a los equipos involucrados (Visual/Diseño, Ventas, Social media)'
      ],
      idealFor: 'Marcas con estética definida pero ejecución inconsistente',
      result: 'La creatividad se vuelve consistente y replicable → la marca se reconoce y vende mejor',
      delivery: 'Manual + Plantillas + 1 Taller de formación'
    },
    {
      icon: <Award size={32} strokeWidth={1.5} />,
      title: 'PAQUETE 3: Acompañamiento Integral y Formación',
      subtitle: 'Marca Viva',
      duration: '3 a 6 meses (renovable)',
      objective: 'Acompañar a la empresa en la implementación, aprendizaje y mejoramiento continuo.',
      includes: [
        'Paquete 1 + 2',
        'Acompañamiento mensual (consultoría + seguimiento de KPIs creativos y de ventas)',
        'Diseño y dirección de campañas por temporada',
        'Supervisión y retroalimentación semanal de ejecución (tiendas, redes, visual)',
        'Formación continua y entrenamiento del equipo (workshops mensuales)',
        'Manual vivo que evoluciona con la marca',
        'Sesiones de dirección creativa para lanzamiento de colecciones'
      ],
      idealFor: 'Marcas que están en crecimiento y necesitan sostener coherencia en el tiempo',
      result: 'La marca no solo se organiza — se transforma desde adentro, crea cultura y se sostiene en el tiempo sin depender de ti',
      delivery: 'Consultoría + dirección + capacitación continua'
    }
  ];

  // Programas de formación
  const fabianaTrainingPrograms = [
    {
      icon: <Settings size={32} strokeWidth={1.5} />,
      title: 'Análisis y Optimización de Procesos',
      objective: 'Mejorar tiempos, calidad y eficiencia en el flujo de trabajo creativo, comercial o de producción.',
      includes: [
        'Mapeo de procesos actuales (cómo está funcionando hoy)',
        'Identificación de cuellos de botella y puntos de fuga',
        'Diseño de flujos de trabajo claros y repetibles',
        'Guías y formatos para implementación',
        'Acompañamiento en la transición al nuevo sistema'
      ],
      results: 'Menos retrabajos, mejor comunicación interna, tiempos más claros y ejecutables, mayor calidad y consistencia en la entrega final',
      idealFor: 'Equipos creativos, de diseño, producción o gerencias que necesitan organización y claridad'
    },
    {
      icon: <ShoppingBag size={32} strokeWidth={1.5} />,
      title: 'Formación para Equipos de Venta',
      objective: 'Convertir a los vendedores en embajadores de marca capaces de conectar con el cliente, contar historias y aumentar el ticket promedio.',
      includes: [
        'La marca como experiencia (no solo producto)',
        'Cómo crear conexión emocional con el cliente',
        'Construcción de mezclas y sugerencias (fashion mix)',
        'Lenguaje corporal, presencia y estilo personal',
        'Técnicas de cierre suave y no invasivo',
        '7 Pasos de la venta'
      ],
      results: 'Clientes que recuerdan la experiencia, ventas más naturales, humanas y elevadas, equipos más seguros, confiados y motivados',
      idealFor: 'Retail, boutiques, marcas emergentes y franquicias'
    },
    {
      icon: <Users size={32} strokeWidth={1.5} />,
      title: 'Formación para Equipos de Producción',
      objective: 'Mejorar la toma de decisiones sobre materiales, tiempos y secuencias de producción para garantizar calidad y coherencia con la propuesta de marca.',
      includes: [
        'Criterios de calidad y terminación',
        'Optimización de tiempos y control de errores',
        'Comunicación entre diseño y taller',
        'Estándares visuales y funcionales'
      ],
      results: 'Menos desperdicio, mejor calidad final y procesos más fluidos',
      idealFor: 'Talleres internos o aliados externos'
    }
  ];

  // Nicolás's data
  const nicolasServices = [
    {
      icon: <Globe size={32} strokeWidth={1.5} />,
      title: 'Desarrollo Web',
      description: 'Sitios web funcionales y atractivos que combinan estética, funcionalidad y rendimiento óptimo'
    },
    {
      icon: <BarChart3 size={32} strokeWidth={1.5} />,
      title: 'Analítica de Datos',
      description: 'Integración de herramientas para medir, entender y optimizar cada interacción digital'
    },
    {
      icon: <Code size={32} strokeWidth={1.5} />,
      title: 'QA & Testing',
      description: 'Aseguramiento de calidad en desarrollo de software con metodologías ágiles y herramientas especializadas'
    },
    {
      icon: <Database size={32} strokeWidth={1.5} />,
      title: 'Desarrollo Backend',
      description: 'Soluciones robustas con Java, Spring Boot, Python Django y bases de datos PostgreSQL'
    }
  ];

  // Paquetes principales de servicios para Nicolás
  const nicolasPackages = [
    {
      icon: <Globe size={32} strokeWidth={1.5} />,
      title: 'PAQUETE 1: Landing Page Básica',
      subtitle: 'Presencia Digital Inicial',
      duration: '2-3 semanas',
      price: '$600.000',
      objective: 'Crear una presencia digital profesional con sitio web optimizado y funcional.',
      includes: [
        'Diseño de landing page 1-3 secciones',
        'Diseño responsive (móvil, tablet, desktop)',
        'Optimización SEO básica',
        'Integración de formulario de contacto',
        'Textos optimizados con IA',
        'Hosting y dominio por 1 año',
        'Capacitación básica de uso'
      ],
      idealFor: 'Empresas que necesitan presencia digital básica y profesional',
      result: 'Sitio web profesional que genera confianza y captura leads efectivamente',
      delivery: 'Sitio web funcional + Documentación técnica + Capacitación'
    },
    {
      icon: <BarChart3 size={32} strokeWidth={1.5} />,
      title: 'PAQUETE 2: Sitio Web Avanzado',
      subtitle: 'Solución Digital Completa',
      duration: '4-6 semanas',
      price: '$1.200.000',
      objective: 'Desarrollar una plataforma web completa con analítica integrada y funcionalidades avanzadas.',
      includes: [
        'Todo el Paquete 1',
        'Sitio web completo (5-8 páginas)',
        'Sistema de analítica Google Analytics 4',
        'Chatbot con IA (WhatsApp/Web)',
        'Formularios conectados (Google Sheets/Email)',
        'Optimización de velocidad y rendimiento',
        'Certificado SSL y seguridad básica',
        'Panel de administración básico',
        'Integración con redes sociales',
        'Capacitación avanzada del equipo'
      ],
      idealFor: 'Empresas en crecimiento que necesitan funcionalidades avanzadas y medición de resultados',
      result: 'Plataforma digital completa que convierte visitantes en clientes y proporciona datos valiosos',
      delivery: 'Sitio web completo + Dashboard de analítica + Capacitación + Soporte 1 mes'
    },
    {
      icon: <Code size={32} strokeWidth={1.5} />,
      title: 'PAQUETE 3: E-commerce + Backend',
      subtitle: 'Solución Empresarial',
      duration: '8-12 semanas',
      price: '$2.500.000',
      objective: 'Desarrollar una solución empresarial completa con e-commerce, backend robusto y sistema de gestión.',
      includes: [
        'Paquete 1 + 2',
        'Tienda online completa (e-commerce)',
        'Sistema de pagos integrado',
        'Backend robusto con Java/Python',
        'Base de datos PostgreSQL optimizada',
        'Sistema de gestión de inventario',
        'API REST para integraciones',
        'Testing y QA completo',
        'Documentación técnica completa',
        'Mantenimiento por 6 meses',
        'Soporte técnico prioritario',
        'Capacitación completa del equipo'
      ],
      idealFor: 'Empresas establecidas que necesitan soluciones robustas y escalables',
      result: 'Ecosistema digital completo que automatiza procesos y escala con el negocio',
      delivery: 'Plataforma completa + Código fuente + Mantenimiento + Soporte técnico + Capacitación'
    }
  ];

  // Servicios especializados para Nicolás
  const nicolasSpecializedServices = [
    {
      icon: <Database size={32} strokeWidth={1.5} />,
      title: 'Desarrollo Backend Personalizado',
      objective: 'Crear sistemas backend robustos y escalables para aplicaciones web y móviles.',
      includes: [
        'Arquitectura de microservicios',
        'APIs REST y GraphQL',
        'Integración con bases de datos',
        'Autenticación y autorización',
        'Testing automatizado',
        'Documentación de API'
      ],
      results: 'Sistemas backend confiables, escalables y mantenibles que soportan el crecimiento del negocio',
      idealFor: 'Empresas que necesitan sistemas backend personalizados o migración de sistemas legacy'
    },
    {
      icon: <BarChart3 size={32} strokeWidth={1.5} />,
      title: 'Implementación de Analítica Avanzada',
      objective: 'Configurar sistemas de medición y análisis de datos para optimizar el rendimiento digital.',
      includes: [
        'Google Analytics 4 y Google Tag Manager',
        'Eventos personalizados y conversiones',
        'Dashboards de KPI en tiempo real',
        'Integración con CRM y herramientas de marketing',
        'Reportes automatizados',
        'Capacitación del equipo'
      ],
      results: 'Visibilidad completa del rendimiento digital con datos accionables para la toma de decisiones',
      idealFor: 'Empresas que necesitan insights profundos sobre el comportamiento de usuarios y ROI'
    },
    {
      icon: <Code size={32} strokeWidth={1.5} />,
      title: 'QA Testing y Optimización',
      objective: 'Asegurar la calidad y rendimiento de aplicaciones web mediante testing exhaustivo.',
      includes: [
        'Testing funcional y de regresión',
        'Testing de rendimiento y carga',
        'Testing de seguridad básica',
        'Optimización de velocidad',
        'Testing cross-browser',
        'Documentación de bugs y mejoras'
      ],
      results: 'Aplicaciones web estables, rápidas y libres de errores que proporcionan excelente experiencia de usuario',
      idealFor: 'Empresas con aplicaciones existentes que necesitan optimización y aseguramiento de calidad'
    }
  ];

  const nicolasTechnologies = [
    'Java',
    'Spring Boot',
    'Python (Django)',
    'HTML & CSS',
    'JavaScript',
    'PostgreSQL',
    'COBOL',
    'SQL',
    'R Programming',
    'Scrum & Kanban',
    'Jira',
    'Data Analytics'
  ];

  const nicolasExperience = [
    {
      title: 'QC y Tester',
      company: 'Banco BBVA - Área de Optimizaciones',
      period: 'Actualidad',
      location: 'Colombia',
      description: 'Pruebas y aseguramiento de calidad en COBOL y SQL, metodologías ágiles'
    },
    {
      title: 'Ingeniero de Sistemas',
      company: 'Desarrollo de Software',
      period: 'Experiencia Profesional',
      location: 'Colombia',
      description: 'Desarrollo full-stack con enfoque en calidad y optimización'
    }
  ];

  const nicolasCertifications = [
    {
      name: 'R Programming',
      institution: 'Johns Hopkins University',
      date: 'Jul 2025',
      id: 'MSDWZGMP8ZZ0'
    },
    {
      name: 'La caja de herramientas del científico de datos',
      institution: 'Johns Hopkins University',
      date: 'Jun 2025',
      id: ''
    },
    {
      name: 'Tecnónologo en Análisis y Desarrollo de Sistemas de Información',
      institution: 'SENA',
      date: 'Dic 2023',
      id: ''
    },
    {
      name: 'Desarrollo web- Frontend web Developer',
      institution: 'Udemy',
      date: 'Feb 2023',
      id: ''
    }
  ];

  // Profile switching UI is handled on Home; keep state if needed for internal conditional sections

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:bg-white focus:text-black focus:px-3 focus:py-2">Saltar al contenido</a>
      {/* Profile pages render only personal content below */}

      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-black bg-opacity-95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo and Back Button */}
            <div className="flex items-center gap-6">
              <a 
                href="/" 
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-300"
              >
                <ArrowLeft size={16} />
                <span className="tracking-wider uppercase">Volver al inicio</span>
              </a>
              <div className="text-2xl font-light tracking-widest">
                {currentProfile === 'fabiana' ? 'FABIANA LUENGAS' : 'NICOLÁS FONSECA'}
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-12">
              {menuItems.map((item, idx) => (
                <div 
                  key={idx} 
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(idx)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a 
                    href={item.href}
                    className="text-sm tracking-wider uppercase flex items-center gap-1 hover:text-gray-400 transition-colors duration-300"
                  >
                    {item.name}
                    {item.submenu && <ChevronDown size={14} />}
                  </a>
                  
                  {item.submenu && activeDropdown === idx && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-black border border-gray-800 shadow-2xl">
                      {item.submenu.map((subitem, subidx) => (
                        <a
                          key={subidx}
                          href={`#${subitem.toLowerCase().replace(' ', '-')}`}
                          className="block px-6 py-3 text-xs tracking-wider uppercase hover:bg-white hover:text-black transition-all duration-200"
                        >
                          {subitem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black border-t border-gray-800">
            {menuItems.map((item, idx) => (
              <div key={idx}>
                <a 
                  href={item.href}
                  className="block px-6 py-4 text-sm tracking-wider uppercase border-b border-gray-900 hover:bg-white hover:text-black transition-all duration-200"
                >
                  {item.name}
                </a>
                {item.submenu && item.submenu.map((subitem, subidx) => (
                  <a
                    key={subidx}
                    href={`#${subitem.toLowerCase().replace(' ', '-')}`}
                    className="block px-12 py-3 text-xs tracking-wider uppercase bg-gray-900 border-b border-gray-800 hover:bg-white hover:text-black transition-all duration-200"
                  >
                    {subitem}
                  </a>
                ))}
              </div>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-black z-10"></div>
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
        </div>
        <div className="relative z-20 text-center px-6 max-w-5xl">
          <div className="mb-8 flex justify-center">
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 shadow-2xl flex items-center justify-center border-4 border-white">
              <span className="text-5xl font-light">{currentProfile === 'fabiana' ? 'FL' : 'NV'}</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-thin tracking-widest mb-6">
            {currentProfile === 'fabiana' ? 'FABIANA LUENGAS' : 'NICOLÁS FONSECA'}
          </h1>
          <p className="text-2xl md:text-3xl font-light tracking-wide text-gray-300 mb-4">
            {currentProfile === 'fabiana' 
              ? 'Diseñadora de Moda + Mercadóloga + Experta en Procesos' 
              : 'Especialista en Páginas Web y Analítica de Datos'}
          </p>
          <p className="text-lg md:text-xl font-light tracking-wide text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {currentProfile === 'fabiana' 
              ? 'Experiencia en retail + Especialización en marcas de lujo. No solo hago que la marca se vea bonita, sino que también funciona y vende'
              : 'Desarrollo sitios web funcionales con enfoque en analítica de datos para optimizar la experiencia digital'}
          </p>
        </div>
      </section>

      

      {/* About Section */}
      <section id="about" className="py-32 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[3/4] bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 border-4 border-white flex items-center justify-center">
                  <span className="text-6xl font-light">{currentProfile === 'fabiana' ? 'FL' : 'NV'}</span>
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white"></div>
            </div>
            <div>
              <h2 className="text-5xl font-thin tracking-widest mb-8 border-b border-gray-800 pb-4">
                SOBRE MÍ
              </h2>
              {currentProfile === 'fabiana' ? (
                <>
                  <p className="text-lg leading-relaxed text-gray-300 mb-6">
                    Soy <span className="text-white font-normal">Diseñadora de Moda + Mercadóloga + Experta en procesos</span> con experiencia en retail y especialización en marcas de lujo. Esta combinación única me permite tener de la mano la <span className="text-white font-normal">creatividad (estética) y la estrategia (números)</span>, que en muchos casos van por aparte.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-300 mb-6">
                    Mi enfoque integra <span className="text-white font-normal">Diseño + Estrategia + Ejecución + Formación</span>. Trabajar conmigo implica estrategias basadas en ventas reales, procesos claros que facilitan el trabajo del equipo, una estética coherente con la identidad de marca y formación al equipo para que la ejecución sí pase.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-300 mb-8">
                    Transformo ideas de moda en experiencias de marca digitales coherentes, rentables y elevadas. Mi diferencial: <span className="text-white font-normal">visión integrada de estética de lujo + negocio + digital, ejecución completa desde la idea hasta la implementación y formación, y orientación a resultados</span> — no se trata solo de verse bien, se trata de vender y sostener.
                  </p>
                  <div className="border-l-4 border-white pl-6 mb-6">
                    <p className="text-xl font-light italic text-gray-200 mb-4">
                      "No solo hago que la marca se vea bonita, sino que también funciona y vende."
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-gray-900 p-4 border border-gray-800">
                      <p className="text-white font-semibold mb-2">MI DIFERENCIAL</p>
                      <p className="text-gray-400">Creatividad + Estrategia</p>
                    </div>
                    <div className="bg-gray-900 p-4 border border-gray-800">
                      <p className="text-white font-semibold mb-2">ENFOQUE</p>
                      <p className="text-gray-400">Diseño + Estrategia + Ejecución + Formación</p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <p className="text-lg leading-relaxed text-gray-300 mb-6">
                    Soy <span className="text-white font-normal">Ingeniero de Sistemas</span> con amplia experiencia en desarrollo de software y pruebas, con conocimiento en tecnologías como Java, Spring Boot, Python (Django) y bases de datos PostgreSQL.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-300 mb-6">
                    Me especializo en el <span className="text-white font-normal">diseño y desarrollo de páginas web</span> que combinan estética, funcionalidad y rendimiento, siempre orientadas a generar experiencias digitales fluidas y memorables.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-300 mb-6">
                    Mi enfoque va más allá del desarrollo: integro la <span className="text-white font-normal">analítica de datos</span> para medir, entender y optimizar cada interacción, asegurando que cada proyecto digital no solo luzca bien, sino que también cumpla objetivos de negocio.
                  </p>
                  <div className="border-l-4 border-white pl-6">
                    <p className="text-xl font-light italic text-gray-200">
                      "Mi misión es convertir cada página web en una herramienta estratégica que impulse el crecimiento y la confianza de la marca."
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 lg:px-12 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-thin tracking-widest mb-8 text-center">
            SERVICIOS
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg max-w-3xl mx-auto">
            {currentProfile === 'fabiana' 
              ? 'Paquetes integrales diseñados para transformar tu marca desde la visión hasta la ejecución sostenible'
              : 'Servicios especializados para impulsar tu presencia digital'}
          </p>
          
          {currentProfile === 'fabiana' ? (
            <>
              {/* Paquetes principales */}
              <div id="paquetes" className="mb-24">
                <h3 className="text-3xl font-thin tracking-widest mb-12 text-center uppercase">Paquetes</h3>
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                  {fabianaPackages.map((pkg, idx) => (
                    <div 
                      key={idx} 
                      className="group p-8 bg-black border border-gray-800 hover:border-white transition-all duration-500"
                    >
                      <div className="mb-6 group-hover:scale-110 transition-transform duration-300 text-white">
                        {pkg.icon}
                      </div>
                      <div className="mb-4">
                        <span className="text-xs tracking-widest uppercase text-gray-500 mb-2 block">{pkg.duration}</span>
                        <h4 className="text-xl tracking-wider mb-2 font-normal">{pkg.title}</h4>
                        <h5 className="text-lg text-gray-300 mb-4 font-light italic">{pkg.subtitle}</h5>
                      </div>
                      <p className="text-sm text-gray-400 mb-6 leading-relaxed">{pkg.objective}</p>
                      
                      <div className="mb-6">
                        <p className="text-xs tracking-widest uppercase text-gray-500 mb-3">Incluye:</p>
                        <ul className="space-y-2 text-sm text-gray-400">
                          {pkg.includes.map((item, itemIdx) => (
                            <li key={itemIdx} className="flex items-start gap-2">
                              <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-gray-600" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mb-4 pt-6 border-t border-gray-800">
                        <p className="text-xs tracking-widest uppercase text-gray-500 mb-2">Ideal para:</p>
                        <p className="text-sm text-gray-400 mb-4">{pkg.idealFor}</p>
                        <p className="text-xs tracking-widest uppercase text-gray-500 mb-2">Resultado:</p>
                        <p className="text-sm text-gray-300 italic">{pkg.result}</p>
                        <p className="text-xs text-gray-600 mt-4">Entregado como: {pkg.delivery}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Programas de formación */}
              <div id="programas-formacion" className="mt-24">
                <h3 className="text-3xl font-thin tracking-widest mb-12 text-center uppercase">Programas de Formación y Capacitación</h3>
                <p className="text-center text-gray-400 mb-12 text-base max-w-3xl mx-auto">
                  Programas diseñados para elevar las habilidades, la cultura y la coherencia interna de los equipos. Cada formación se adapta al nivel de madurez y necesidades específicas de la marca.
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                  {fabianaTrainingPrograms.map((program, idx) => (
                    <div 
                      key={idx} 
                      className="group p-8 bg-black border border-gray-800 hover:border-white transition-all duration-500"
                    >
                      <div className="mb-6 group-hover:scale-110 transition-transform duration-300 text-white">
                        {program.icon}
                      </div>
                      <h4 className="text-xl tracking-wider mb-4 font-normal">{program.title}</h4>
                      <p className="text-sm text-gray-400 mb-6 leading-relaxed">{program.objective}</p>
                      
                      <div className="mb-6">
                        <p className="text-xs tracking-widest uppercase text-gray-500 mb-3">Incluye:</p>
                        <ul className="space-y-2 text-sm text-gray-400">
                          {program.includes.map((item, itemIdx) => (
                            <li key={itemIdx} className="flex items-start gap-2">
                              <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-gray-600" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mb-4 pt-6 border-t border-gray-800">
                        <p className="text-xs tracking-widest uppercase text-gray-500 mb-2">Resultados esperados:</p>
                        <p className="text-sm text-gray-300 mb-4">{program.results}</p>
                        <p className="text-xs tracking-widest uppercase text-gray-500 mb-2">Ideal para:</p>
                        <p className="text-sm text-gray-400">{program.idealFor}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Paquetes principales para Nicolás */}
              <div id="paquetes" className="mb-24">
                <h3 className="text-3xl font-thin tracking-widest mb-12 text-center uppercase">Paquetes</h3>
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                  {nicolasPackages.map((pkg, idx) => (
                    <div 
                      key={idx} 
                      className="group p-8 bg-black border border-gray-800 hover:border-white transition-all duration-500"
                    >
                      <div className="mb-6 group-hover:scale-110 transition-transform duration-300 text-white">
                        {pkg.icon}
                      </div>
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs tracking-widest uppercase text-gray-500">{pkg.duration}</span>
                          <span className="text-2xl font-bold text-white">{pkg.price}</span>
                        </div>
                        <h4 className="text-xl tracking-wider mb-2 font-normal">{pkg.title}</h4>
                        <h5 className="text-lg text-gray-300 mb-4 font-light italic">{pkg.subtitle}</h5>
                      </div>
                      <p className="text-sm text-gray-400 mb-6 leading-relaxed">{pkg.objective}</p>
                      
                      <div className="mb-6">
                        <p className="text-xs tracking-widest uppercase text-gray-500 mb-3">Incluye:</p>
                        <ul className="space-y-2 text-sm text-gray-400">
                          {pkg.includes.map((item, itemIdx) => (
                            <li key={itemIdx} className="flex items-start gap-2">
                              <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-gray-600" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mb-4 pt-6 border-t border-gray-800">
                        <p className="text-xs tracking-widest uppercase text-gray-500 mb-2">Ideal para:</p>
                        <p className="text-sm text-gray-400 mb-4">{pkg.idealFor}</p>
                        <p className="text-xs tracking-widest uppercase text-gray-500 mb-2">Resultado:</p>
                        <p className="text-sm text-gray-300 italic">{pkg.result}</p>
                        <p className="text-xs text-gray-600 mt-4">Entregado como: {pkg.delivery}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Servicios especializados para Nicolás */}
              <div id="servicios-especializados" className="mt-24">
                <h3 className="text-3xl font-thin tracking-widest mb-12 text-center uppercase">Servicios Especializados</h3>
                <p className="text-center text-gray-400 mb-12 text-base max-w-3xl mx-auto">
                  Servicios técnicos especializados para empresas que necesitan soluciones personalizadas y de alto rendimiento.
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                  {nicolasSpecializedServices.map((service, idx) => (
                    <div 
                      key={idx} 
                      className="group p-8 bg-black border border-gray-800 hover:border-white transition-all duration-500"
                    >
                      <div className="mb-6 group-hover:scale-110 transition-transform duration-300 text-white">
                        {service.icon}
                      </div>
                      <h4 className="text-xl tracking-wider mb-4 font-normal">{service.title}</h4>
                      <p className="text-sm text-gray-400 mb-6 leading-relaxed">{service.objective}</p>
                      
                      <div className="mb-6">
                        <p className="text-xs tracking-widest uppercase text-gray-500 mb-3">Incluye:</p>
                        <ul className="space-y-2 text-sm text-gray-400">
                          {service.includes.map((item, itemIdx) => (
                            <li key={itemIdx} className="flex items-start gap-2">
                              <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-gray-600" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mb-4 pt-6 border-t border-gray-800">
                        <p className="text-xs tracking-widest uppercase text-gray-500 mb-2">Resultados esperados:</p>
                        <p className="text-sm text-gray-300 mb-4">{service.results}</p>
                        <p className="text-xs tracking-widest uppercase text-gray-500 mb-2">Ideal para:</p>
                        <p className="text-sm text-gray-400">{service.idealFor}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Experience or Technologies Section */}
      {currentProfile === 'fabiana' ? (
        <section id="experience" className="py-32 px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl font-thin tracking-widest mb-16 text-center">
              EXPERIENCIA
            </h2>
            <div className="space-y-12">
              {fabianaExperience.map((exp, idx) => (
                <div key={idx} className="relative pl-8 border-l-2 border-gray-800 hover:border-white transition-colors duration-300">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-white rounded-full"></div>
                  <div className="pb-8">
                    <p className="text-xs tracking-widest uppercase text-gray-500 mb-2">{exp.period}</p>
                    <h3 className="text-2xl tracking-wide mb-2">{exp.title}</h3>
                    <p className="text-lg text-gray-400 mb-1">{exp.company}</p>
                    <p className="text-sm text-gray-600">{exp.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <>
          <section id="technologies" className="py-32 px-6 lg:px-12">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-5xl font-thin tracking-widest mb-16 text-center">
                TECNOLOGÍAS
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {nicolasTechnologies.map((tech, idx) => (
                  <div 
                    key={idx}
                    className="p-6 bg-black border border-gray-800 text-center hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
                  >
                    <p className="text-sm tracking-wider uppercase">
                      {tech}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-32 px-6 lg:px-12 bg-gradient-to-b from-black to-gray-900">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-5xl font-thin tracking-widest mb-16 text-center">
                CERTIFICACIONES
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {nicolasCertifications.map((cert, idx) => (
                  <div key={idx} className="p-8 bg-black border border-gray-800 hover:border-white transition-colors duration-300">
                    <h3 className="text-2xl tracking-wide mb-4">{cert.name}</h3>
                    <p className="text-lg text-gray-400 mb-2">{cert.institution}</p>
                    <p className="text-sm text-gray-600 mb-4">Expedición: {cert.date}</p>
                    {cert.id && (
                      <p className="text-xs text-gray-500 tracking-wider">ID: {cert.id}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Skills Section (Fabiana) or Experience (Nicolás) */}
      {currentProfile === 'fabiana' ? (
        <section className="py-32 px-6 lg:px-12 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-thin tracking-widest mb-16 text-center">
              APTITUDES
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {fabianaSkills.map((skill, idx) => (
                <div 
                  key={idx}
                  className="p-6 bg-black border border-gray-800 text-center hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
                >
                  <p className="text-sm tracking-wider uppercase">
                    {skill}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="py-32 px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl font-thin tracking-widest mb-16 text-center">
              EXPERIENCIA PROFESIONAL
            </h2>
            <div className="space-y-12">
              {nicolasExperience.map((exp, idx) => (
                <div key={idx} className="relative pl-8 border-l-2 border-gray-800 hover:border-white transition-colors duration-300">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-white rounded-full"></div>
                  <div className="pb-8">
                    <p className="text-xs tracking-widest uppercase text-gray-500 mb-2">{exp.period}</p>
                    <h3 className="text-2xl tracking-wide mb-2">{exp.title}</h3>
                    <p className="text-lg text-gray-400 mb-1">{exp.company}</p>
                    <p className="text-sm text-gray-600 mb-3">{exp.location}</p>
                    <p className="text-base text-gray-400">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Stats Section */}
      <section className="py-32 px-6 lg:px-12 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {currentProfile === 'fabiana' ? (
              <>
                <div className="text-center">
                  <div className="text-6xl font-thin mb-4">360°</div>
                  <p className="text-sm tracking-widest uppercase text-gray-600">Enfoque Integral</p>
                </div>
                <div className="text-center">
                  <div className="text-6xl font-thin mb-4">3</div>
                  <p className="text-sm tracking-widest uppercase text-gray-600">Paquetes Principales</p>
                </div>
                <div className="text-center">
                  <div className="text-6xl font-thin mb-4">∞</div>
                  <p className="text-sm tracking-widest uppercase text-gray-600">Creatividad + Estrategia</p>
                </div>
              </>
            ) : (
              <>
                <div className="text-center">
                  <div className="text-6xl font-thin mb-4">12+</div>
                  <p className="text-sm tracking-widest uppercase text-gray-600">Tecnologías Dominadas</p>
                </div>
                <div className="text-center">
                  <div className="text-6xl font-thin mb-4">100%</div>
                  <p className="text-sm tracking-widest uppercase text-gray-600">Calidad Asegurada</p>
                </div>
                <div className="text-center">
                  <div className="text-6xl font-thin mb-4">2</div>
                  <p className="text-sm tracking-widest uppercase text-gray-600">Certificaciones Internacionales</p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 lg:px-12 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-thin tracking-widest mb-8">
            TRABAJEMOS JUNTOS
          </h2>
          <p className="text-xl text-gray-400 mb-12 tracking-wide max-w-2xl mx-auto">
            {currentProfile === 'fabiana' 
              ? '¿Listo para transformar tu marca? Conversemos sobre cómo crear una presencia auténtica que funcione y venda'
              : '¿Necesitas un sitio web que genere resultados? Conversemos sobre cómo impulsar tu presencia digital'}
          </p>
          <div className="flex justify-center gap-8 mb-16">
            <a href="#" className="hover:scale-110 transition-transform">
              <Instagram size={32} strokeWidth={1.5} />
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <Linkedin size={32} strokeWidth={1.5} />
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <Twitter size={32} strokeWidth={1.5} />
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <Mail size={32} strokeWidth={1.5} />
            </a>
          </div>
          <div className="space-y-4 text-lg">
            <p className="tracking-wider">
              <span className="text-gray-500 uppercase text-sm">Email:</span><br />
              {currentProfile === 'fabiana' ? 'fabiana@brandstrategist.com' : 'nicolas@webdev.com'}
            </p>
            <p className="tracking-wider">
              <span className="text-gray-500 uppercase text-sm">LinkedIn:</span><br />
              {currentProfile === 'fabiana' 
                ? 'linkedin.com/in/fabiana-luengas-beltran' 
                : 'linkedin.com/in/nicolas'}
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm tracking-widest uppercase text-gray-500">
            © 2024 {currentProfile === 'fabiana' ? 'Fabiana Luengas Beltrán' : 'Nicolás'}. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default DualPortfolio;