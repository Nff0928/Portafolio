import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Send, Mail, User, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';
import PixoraLogo from '../components/PixoraLogo';

const Home = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Configuración de EmailJS - necesitarás reemplazar estos valores
      const serviceId = 'service_t1wlvcg'; // Tu Service ID
      const templateId = 'template_594ca7a'; // Tu Template ID
      const publicKey = 'f5s0aP9TZCf0SH_lx'; // Tu Public Key

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'nicolas.fonseca0928@gmail.com' // Email donde quieres recibir los mensajes
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const menuItems = [
    { 
      name: 'Inicio', 
      href: '#home'
    },
    { 
      name: 'Nuestros CEOs', 
      href: '#ceos',
      submenu: ['Fabiana Luengas', 'Nicolás Fonseca']
    },
    { 
      name: 'Empresa', 
      href: '#empresa',
      submenu: ['Misión', 'Visión', 'Áreas Principales']
    },
    { 
      name: 'Contacto', 
      href: '#contacto'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <a href="#home" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:bg-white focus:text-black focus:px-3 focus:py-2">Saltar al contenido</a>
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-black bg-opacity-95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <PixoraLogo size="small" showTagline={false} />
			

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
                          href={subitem === 'Fabiana Luengas' ? '/fabiana' : 
                                subitem === 'Nicolás Fonseca' ? '/nicolas' :
                                subitem === 'Misión' ? '#mision' :
                                subitem === 'Visión' ? '#vision' :
                                subitem === 'Áreas Principales' ? '#areas-principales' : '#'}
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
                    href={subitem === 'Fabiana Luengas' ? '/fabiana' : 
                          subitem === 'Nicolás Fonseca' ? '/nicolas' :
                          subitem === 'Misión' ? '#mision' :
                          subitem === 'Visión' ? '#vision' :
                          subitem === 'Áreas Principales' ? '#areas-principales' : '#'}
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

      {/* Hero Section with Background */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image Layer */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: 'linear-gradient(135deg, #0A101C 0%, #0F1625 50%, #0A101C 100%)',
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(192, 192, 192, 0.05) 0%, transparent 70%)'
          }}
        >
          {/* Logo Background Pattern */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div className="relative">
              {/* Large Logo Symbol */}
              <svg 
                width="400" 
                height="400" 
                viewBox="0 0 60 60" 
                className="text-silver-400"
                fill="none"
              >
                <defs>
                  <linearGradient id="heroLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#C0C0C0" />
                    <stop offset="50%" stopColor="#E5E5E5" />
                    <stop offset="100%" stopColor="#A8A8A8" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Main geometric shape */}
                <path 
                  d="M10 10 L10 50 L25 50 L35 40 L35 30 L25 30 L25 20 L35 20 L35 10 Z" 
                  fill="url(#heroLogoGradient)"
                  stroke="#B0B0B0"
                  strokeWidth="1"
                  filter="url(#glow)"
                />
                
                {/* Arrow element */}
                <path 
                  d="M40 15 L50 15 L50 25 L45 25 L45 35 L40 35 Z" 
                  fill="url(#heroLogoGradient)"
                  stroke="#B0B0B0"
                  strokeWidth="1"
                  filter="url(#glow)"
                />
                
                {/* Additional geometric accent */}
                <circle 
                  cx="45" 
                  cy="45" 
                  r="8" 
                  fill="none" 
                  stroke="url(#heroLogoGradient)" 
                  strokeWidth="2"
                  filter="url(#glow)"
                />
              </svg>
            </div>
          </div>
          
          {/* Decorative star in corner */}
          <div className="absolute bottom-12 right-12 opacity-20">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C0C0C0" strokeWidth="1">
              <path d="M12 2 L14.5 8.5 L21 11 L14.5 13.5 L12 20 L9.5 13.5 L3 11 L9.5 8.5 Z" />
            </svg>
          </div>
        </div>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>

        {/* Content Layer */}
        <div className="relative z-20 w-full pt-32 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            {/* Hero Logo - Centered */}
            <div className="flex flex-col items-center justify-center mb-16 pt-20">
              <div className="mb-8">
                <svg 
                  width="120" 
                  height="120" 
                  viewBox="0 0 60 60" 
                  className="text-silver-400"
                  fill="none"
                >
                  <defs>
                    <linearGradient id="mainLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#C0C0C0" />
                      <stop offset="50%" stopColor="#E5E5E5" />
                      <stop offset="100%" stopColor="#A8A8A8" />
                    </linearGradient>
                  </defs>
                  
                  <path 
                    d="M10 10 L10 50 L25 50 L35 40 L35 30 L25 30 L25 20 L35 20 L35 10 Z" 
                    fill="url(#mainLogoGradient)"
                    stroke="#B0B0B0"
                    strokeWidth="1"
                  />
                  
                  <path 
                    d="M40 15 L50 15 L50 25 L45 25 L45 35 L40 35 Z" 
                    fill="url(#mainLogoGradient)"
                    stroke="#B0B0B0"
                    strokeWidth="1"
                  />
                  
                  <circle 
                    cx="45" 
                    cy="45" 
                    r="8" 
                    fill="none" 
                    stroke="url(#mainLogoGradient)" 
                    strokeWidth="2"
                  />
                </svg>
              </div>
              
              {/* PIXORA Text */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-widest uppercase mb-4 px-4" style={{
                background: 'linear-gradient(135deg, #C0C0C0 0%, #E5E5E5 50%, #A8A8A8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 20px rgba(192, 192, 192, 0.3)'
              }}>
                PIXORA
              </h1>
              
              {/* Tagline */}
              <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light tracking-wide uppercase text-gray-400 mt-2 px-4 text-center">
                DIGITAL BRANDING & WEB DEVELOPMENT
              </p>
            </div>

            {/* Main Content */}
            <div className="text-center mb-16 px-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-thin tracking-widest mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-tight">Estrategia de marca + desarrollo web que convierte</h2>
              <p className="text-gray-300 mb-10 tracking-wide text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-2">Diseñamos marcas memorables y sitios web orientados a resultados: más leads, mejores conversiones y medición real.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
                <a href="/planes" className="w-full sm:w-auto bg-white text-black py-3 px-6 font-medium tracking-wider uppercase hover:bg-gray-200 transition-colors duration-300 text-center">Ver planes</a>
                <a href="#contacto" className="w-full sm:w-auto border border-gray-400 text-white py-3 px-6 font-medium tracking-wider uppercase hover:border-white hover:bg-white/10 transition-colors duration-300 text-center">Solicitar cotización</a>
              </div>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 px-4">
            <button
              onClick={() => navigate('/fabiana')}
              className={`group relative overflow-hidden p-6 md:p-12 text-left bg-gradient-to-br from-gray-950 to-black border border-gray-800 hover:border-white transition-all duration-700 cursor-pointer hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/10`}
              aria-label="Ver perfil de Fabiana"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ background: 'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(255,255,255,0.12), transparent 40%)' }} />
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-6 md:mb-8">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border-2 border-white flex items-center justify-center group-hover:scale-110 transition-transform duration-500 group-hover:border-gray-300 flex-shrink-0">
                    <span className="text-2xl sm:text-3xl md:text-4xl font-light">FL</span>
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl tracking-wider mb-2 group-hover:text-white transition-colors duration-300">Fabiana Luengas</h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-400 group-hover:text-gray-200 transition-colors duration-300">Brand Stylist & Creative Strategist</p>
                  </div>
                </div>
                <p className="text-gray-400 group-hover:text-gray-200 leading-relaxed text-base sm:text-lg md:text-xl transition-colors duration-300 text-center sm:text-left">
                  Estratega digital con enfoque 360°, dirección creativa y crecimiento de marca.
                </p>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent"></div>
                </div>
              </div>
            </button>

            <button
              onClick={() => navigate('/nicolas')}
              className={`group relative overflow-hidden p-6 md:p-12 text-left bg-gradient-to-br from-gray-950 to-black border border-gray-800 hover:border-white transition-all duration-700 cursor-pointer hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/10`}
              aria-label="Ver perfil de Nicolás"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ background: 'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(255,255,255,0.12), transparent 40%)' }} />
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-6 md:mb-8">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border-2 border-white flex items-center justify-center group-hover:scale-110 transition-transform duration-500 group-hover:border-gray-300 flex-shrink-0">
                    <span className="text-2xl sm:text-3xl md:text-4xl font-light">NF</span>
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl tracking-wider mb-2 group-hover:text-white transition-colors duration-300">Nicolás Fonseca</h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-400 group-hover:text-gray-200 transition-colors duration-300">Especialista en Páginas Web y Analítica de Datos</p>
                  </div>
                </div>
                <p className="text-gray-400 group-hover:text-gray-200 leading-relaxed text-base sm:text-lg md:text-xl transition-colors duration-300 text-center sm:text-left">
                  Desarrollo web orientado a resultados con integración de analítica y calidad.
                </p>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent"></div>
                </div>
              </div>
            </button>
          </div>
          </div>
        </div>
      </section>

      {/* Separador visual */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
      
      {/* Planes Resumen */}
      <section id="planes" className="py-16 md:py-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-thin tracking-widest mb-6 md:mb-8 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent px-4">PLANES</h2>
          <p className="text-center text-gray-400 mb-12 md:mb-16 text-base sm:text-lg max-w-3xl mx-auto px-4">
            Soluciones digitales integrales que combinan estrategia de marca y desarrollo web para impulsar tu negocio
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <article className="group p-6 md:p-8 bg-black border border-gray-800 hover:border-white transition-all duration-500">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-2">
                <span className="inline-block px-3 py-1 text-xs tracking-wider uppercase bg-white/5 border border-gray-800 text-gray-400 rounded-full w-fit">Básico</span>
                <span className="text-sm text-gray-500">2-3 semanas</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">$600.000</h3>
              <h4 className="text-base sm:text-lg text-gray-300 mb-4 font-light">Presencia Digital Inicial</h4>
              <p className="text-sm text-gray-400 mb-6">Ideal para empresas que necesitan una presencia digital profesional y funcional.</p>
              <ul className="mt-4 space-y-2 text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">•</span>
                  <span>Landing page 1-3 secciones</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">•</span>
                  <span>Diseño responsive completo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">•</span>
                  <span>SEO básico optimizado</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">•</span>
                  <span>Formulario de contacto</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">•</span>
                  <span>Hosting y dominio 1 año</span>
                </li>
              </ul>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="/fabiana" className="w-full sm:w-auto bg-white text-black py-2 px-4 font-medium tracking-wider uppercase hover:bg-gray-200 transition-colors duration-300 text-sm text-center">Estrategia</a>
                <a href="/nicolas" className="w-full sm:w-auto border border-gray-400 text-white py-2 px-4 font-medium tracking-wider uppercase hover:border-white hover:bg-white/10 transition-colors duration-300 text-sm text-center">Desarrollo</a>
              </div>
            </article>
            <article className="group p-6 md:p-8 bg-black border border-gray-800 hover:border-white transition-all duration-500">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-2">
                <span className="inline-block px-3 py-1 text-xs tracking-wider uppercase bg-white/5 border border-gray-800 text-gray-400 rounded-full w-fit">Avanzado</span>
                <span className="text-sm text-gray-500">4-6 semanas</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">$1.200.000</h3>
              <h4 className="text-base sm:text-lg text-gray-300 mb-4 font-light">Solución Digital Completa</h4>
              <p className="text-sm text-gray-400 mb-6">Para empresas en crecimiento que necesitan funcionalidades avanzadas y medición de resultados.</p>
              <ul className="mt-4 space-y-2 text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">•</span>
                  <span>Todo el plan Básico</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">•</span>
                  <span>Sitio web completo (5-8 páginas)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">•</span>
                  <span>Analítica Google Analytics 4</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">•</span>
                  <span>Chatbot con IA</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">•</span>
                  <span>Formularios conectados</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">•</span>
                  <span>Optimización de velocidad</span>
                </li>
              </ul>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="/fabiana" className="w-full sm:w-auto bg-white text-black py-2 px-4 font-medium tracking-wider uppercase hover:bg-gray-200 transition-colors duration-300 text-sm text-center">Estrategia</a>
                <a href="/nicolas" className="w-full sm:w-auto border border-gray-400 text-white py-2 px-4 font-medium tracking-wider uppercase hover:border-white hover:bg-white/10 transition-colors duration-300 text-sm text-center">Desarrollo</a>
              </div>
            </article>
            <article className="group p-6 md:p-8 bg-black border border-gray-800 hover:border-white transition-all duration-500">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-2">
                <span className="inline-block px-3 py-1 text-xs tracking-wider uppercase bg-white/5 border border-gray-800 text-gray-400 rounded-full w-fit">Empresarial</span>
                <span className="text-sm text-gray-500">8-12 semanas</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">$2.500.000</h3>
              <h4 className="text-base sm:text-lg text-gray-300 mb-4 font-light">Solución Empresarial</h4>
              <p className="text-sm text-gray-400 mb-6">Para empresas establecidas que necesitan soluciones robustas y escalables.</p>
              <ul className="mt-4 space-y-2 text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">•</span>
                  <span>Todo el plan Avanzado</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">•</span>
                  <span>E-commerce completo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">•</span>
                  <span>Backend robusto</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">•</span>
                  <span>Sistema de pagos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">•</span>
                  <span>API REST personalizada</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">•</span>
                  <span>Mantenimiento 6 meses</span>
                </li>
              </ul>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="/fabiana" className="w-full sm:w-auto bg-white text-black py-2 px-4 font-medium tracking-wider uppercase hover:bg-gray-200 transition-colors duration-300 text-sm text-center">Estrategia</a>
                <a href="/nicolas" className="w-full sm:w-auto border border-gray-400 text-white py-2 px-4 font-medium tracking-wider uppercase hover:border-white hover:bg-white/10 transition-colors duration-300 text-sm text-center">Desarrollo</a>
              </div>
            </article>
          </div>
        </div>
      </section>
      
      <section id="empresa" className="py-32 px-6 lg:px-12 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-thin tracking-widest mb-8 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">NUESTRA EMPRESA</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8"></div>
            <p className="text-center text-gray-400 mb-8 tracking-wide text-xl max-w-3xl mx-auto leading-relaxed">Conoce nuestra misión, visión y áreas de especialización</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div id="mision" className="group relative p-12 bg-black border border-gray-800 hover:border-white transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/5">
              <div className="absolute -top-0.5 -left-0.5 w-24 h-24 pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-500" style={{background:'conic-gradient(from 180deg at 50% 50%, rgba(255,255,255,0.25), transparent 60%)'}}></div>
              <h3 className="text-4xl tracking-wider mb-6 group-hover:text-white transition-colors duration-300">Misión de la empresa</h3>
              <p className="text-gray-400 leading-relaxed text-xl group-hover:text-gray-200 transition-colors duration-300">
                Crear experiencias digitales integrales que combinen estrategia de marca auténtica con desarrollo web de alto rendimiento, impulsando el crecimiento de negocios a través de la sinergia entre creatividad y tecnología.
              </p>
            </div>
            <div id="vision" className="group relative p-12 bg-black border border-gray-800 hover:border-white transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/5">
              <div className="absolute -top-0.5 -left-0.5 w-24 h-24 pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-500" style={{background:'conic-gradient(from 180deg at 50% 50%, rgba(255,255,255,0.25), transparent 60%)'}}></div>
              <h3 className="text-4xl tracking-wider mb-6 group-hover:text-white transition-colors duration-300">Visión de la empresa</h3>
              <p className="text-gray-400 leading-relaxed text-xl group-hover:text-gray-200 transition-colors duration-300">
                Ser el referente en Latinoamérica en la creación de ecosistemas digitales completos, donde cada marca encuentre su voz única a través de estrategias creativas personalizadas y plataformas web que conviertan visitantes en clientes.
              </p>
            </div>
          </div>

          

          <div id="areas-principales" className="group relative p-12 bg-black border border-gray-800 hover:border-white transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/5">
            <div className="absolute -top-0.5 -left-0.5 w-24 h-24 pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-500" style={{background:'conic-gradient(from 180deg at 50% 50%, rgba(255,255,255,0.25), transparent 60%)'}}></div>
            <h3 className="text-4xl tracking-wider mb-8 group-hover:text-white transition-colors duration-300">Áreas principales de la empresa</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="group-hover:text-gray-200 transition-colors duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <span className="text-2xl text-white font-light">Marketing Digital</span>
                </div>
                <p className="text-gray-400 text-lg ml-7">Estrategias creativas y campañas 360°</p>
              </div>
              <div className="group-hover:text-gray-200 transition-colors duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <span className="text-2xl text-white font-light">Desarrollo de páginas web</span>
                </div>
                <p className="text-gray-400 text-lg ml-7">Sitios web funcionales y optimizados</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulario de Contacto */}
      <section id="contacto" className="py-32 px-6 lg:px-12 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-thin tracking-widest mb-8 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">CONTÁCTANOS</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8"></div>
            <p className="text-center text-gray-400 mb-8 tracking-wide text-xl max-w-3xl mx-auto leading-relaxed">¿Listo para impulsar tu marca? Conversemos sobre tu proyecto</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Información de contacto */}
            <div className="space-y-8">
              <div className="group p-8 bg-black border border-gray-800 hover:border-white transition-all duration-500">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 border border-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail size={20} />
                  </div>
                  <h3 className="text-2xl tracking-wider">Email</h3>
                </div>
                <p className="text-gray-400 text-lg">fabiana@brandstrategist.com</p>
                <p className="text-gray-400 text-lg">nicolas.fonseca0928@gmail.com</p>
              </div>

              <div className="group p-8 bg-black border border-gray-800 hover:border-white transition-all duration-500">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 border border-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MessageSquare size={20} />
                  </div>
                  <h3 className="text-2xl tracking-wider">Respuesta</h3>
                </div>
                <p className="text-gray-400 text-lg">Te responderemos en menos de 24 horas</p>
              </div>
            </div>

            {/* Formulario */}
            <div className="group p-8 bg-black border border-gray-800 hover:border-white transition-all duration-500">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nombre completo
                  </label>
                  <div className="relative">
                    <User size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors duration-300"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <Mail size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors duration-300"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:border-white focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Cuéntanos sobre tu proyecto, objetivos y cómo podemos ayudarte..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-black py-4 px-6 font-medium tracking-wider uppercase hover:bg-gray-200 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Enviar mensaje
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-900 border border-green-700 text-green-300 text-center">
                    ¡Mensaje enviado exitosamente! Te contactaremos pronto.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-900 border border-red-700 text-red-300 text-center">
                    Error al enviar el mensaje. Por favor, inténtalo de nuevo.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;


