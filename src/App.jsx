import React, { useState } from 'react';
import { Menu, X, ChevronDown, Instagram, Twitter, Mail, Linkedin, Target, TrendingUp, Users, Award, Briefcase, Sparkles, Code, BarChart3, Database, Globe } from 'lucide-react';
import './index.css';

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
      submenu: ['Brand Styling', 'Estrategia Digital', 'Dirección Creativa', 'Consultoría']
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
      submenu: ['Desarrollo Web', 'Analítica de Datos', 'QA Testing', 'Consultoría']
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
    'Diseño Estratégico',
    'Control de Proyectos',
    'Investigación de Mercado',
    'Adobe Photoshop',
    'Resolución Creativa',
    'Marketing & Ventas',
    'Budget Management',
    'Vendor Management',
    'Coordinating Skills',
    'Dirección de Proyectos',
    'Activity Coordination',
    'SEO'
  ];

  const fabianaServices = [
    {
      icon: <Sparkles size={32} strokeWidth={1.5} />,
      title: 'Brand Styling',
      description: 'Construcción de presencia auténtica y relevante desde la narrativa visual hasta la dirección creativa de colecciones'
    },
    {
      icon: <Target size={32} strokeWidth={1.5} />,
      title: 'Estrategia 360°',
      description: 'Diseño de estrategias a medida que conectan identidad, tendencia y propósito con el ADN de cada marca'
    },
    {
      icon: <TrendingUp size={32} strokeWidth={1.5} />,
      title: 'Marketing Global',
      description: 'Coordinación de marketing y contenido con visión internacional y enfoque en resultados medibles'
    },
    {
      icon: <Briefcase size={32} strokeWidth={1.5} />,
      title: 'Gestión de Proyectos',
      description: 'Dirección integral de proyectos para marcas de lujo, premium y retail con control de calidad'
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
      {/* Profile pages render only personal content below */}

      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-black bg-opacity-95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="text-2xl font-light tracking-widest">
              {currentProfile === 'fabiana' ? 'FABIANA LUENGAS' : 'NICOLÁS FONSECA'}
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
              ? 'Brand Stylist & Creative Strategist' 
              : 'Especialista en Páginas Web y Analítica de Datos'}
          </p>
          <p className="text-lg md:text-xl font-light tracking-wide text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {currentProfile === 'fabiana' 
              ? 'Ayudo a marcas a construir presencia auténtica y relevante en el mercado'
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
                    Soy una <span className="text-white font-normal">estratega digital con enfoque 360°</span> especializada en diseñar y ejecutar planes integrales para redes sociales que generan resultados medibles y memorables.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-300 mb-6">
                    Ayudo a marcas a construir <span className="text-white font-normal">presencia auténtica y relevante en el mercado</span>, desde la narrativa visual hasta la dirección creativa de colecciones.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-300 mb-8">
                    Mi experiencia combina <span className="text-white font-normal">creatividad, análisis de datos y visión de negocio</span>, logrando conectar marcas con sus audiencias a través de campañas dinámicas y experiencias digitales.
                  </p>
                  <div className="border-l-4 border-white pl-6">
                    <p className="text-xl font-light italic text-gray-200">
                      "Diseño estrategias a medida que conectan identidad, tendencia y propósito, alineando con el ADN de cada marca."
                    </p>
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
          <h2 className="text-5xl font-thin tracking-widest mb-16 text-center">
            SERVICIOS
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(currentProfile === 'fabiana' ? fabianaServices : nicolasServices).map((service, idx) => (
              <div 
                key={idx} 
                className="group p-8 bg-black border border-gray-800 hover:bg-white hover:text-black transition-all duration-500 cursor-pointer"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl tracking-wider mb-4 font-normal">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-400 group-hover:text-gray-700">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
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
                  <div className="text-6xl font-thin mb-4">7+</div>
                  <p className="text-sm tracking-widest uppercase text-gray-600">Años de Experiencia</p>
                </div>
                <div className="text-center">
                  <div className="text-6xl font-thin mb-4">8+</div>
                  <p className="text-sm tracking-widest uppercase text-gray-600">Sectores Diversos</p>
                </div>
                <div className="text-center">
                  <div className="text-6xl font-thin mb-4">360°</div>
                  <p className="text-sm tracking-widest uppercase text-gray-600">Enfoque Integral</p>
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
              ? '¿Listo para transformar tu marca? Conversemos sobre cómo crear una presencia auténtica y relevante'
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