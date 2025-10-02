import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Send, Mail, User, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';

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
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-black bg-opacity-95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="text-2xl font-light tracking-widest">
              PORTFOLIO DUAL
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

      <section id="home" className="pt-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 id="ceos" className="text-6xl md:text-7xl font-thin tracking-widest mb-8 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">CONOCE A NUESTROS CEOs</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8"></div>
            <p className="text-center text-gray-400 mb-8 tracking-wide text-xl max-w-3xl mx-auto leading-relaxed">Selecciona un perfil para explorar su trayectoria y servicios</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <button
              onClick={() => navigate('/fabiana')}
              className={`group relative overflow-hidden p-12 text-left bg-gradient-to-br from-gray-950 to-black border border-gray-800 hover:border-white transition-all duration-700 cursor-pointer hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/10`}
              aria-label="Ver perfil de Fabiana"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ background: 'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(255,255,255,0.12), transparent 40%)' }} />
              <div className="relative z-10">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border-2 border-white flex items-center justify-center group-hover:scale-110 transition-transform duration-500 group-hover:border-gray-300">
                    <span className="text-4xl font-light">FL</span>
                  </div>
                  <div>
                    <h3 className="text-4xl tracking-wider mb-2 group-hover:text-white transition-colors duration-300">Fabiana Luengas</h3>
                    <p className="text-lg text-gray-400 group-hover:text-gray-200 transition-colors duration-300">Brand Stylist & Creative Strategist</p>
                  </div>
                </div>
                <p className="text-gray-400 group-hover:text-gray-200 leading-relaxed text-xl transition-colors duration-300">
                  Estratega digital con enfoque 360°, dirección creativa y crecimiento de marca.
                </p>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent"></div>
                </div>
              </div>
            </button>

            <button
              onClick={() => navigate('/nicolas')}
              className={`group relative overflow-hidden p-12 text-left bg-gradient-to-br from-gray-950 to-black border border-gray-800 hover:border-white transition-all duration-700 cursor-pointer hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/10`}
              aria-label="Ver perfil de Nicolás"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ background: 'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(255,255,255,0.12), transparent 40%)' }} />
              <div className="relative z-10">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border-2 border-white flex items-center justify-center group-hover:scale-110 transition-transform duration-500 group-hover:border-gray-300">
                    <span className="text-4xl font-light">NF</span>
                  </div>
                  <div>
                    <h3 className="text-4xl tracking-wider mb-2 group-hover:text-white transition-colors duration-300">Nicolás Fonseca</h3>
                    <p className="text-lg text-gray-400 group-hover:text-gray-200 transition-colors duration-300">Especialista en Páginas Web y Analítica de Datos</p>
                  </div>
                </div>
                <p className="text-gray-400 group-hover:text-gray-200 leading-relaxed text-xl transition-colors duration-300">
                  Desarrollo web orientado a resultados con integración de analítica y calidad.
                </p>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent"></div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Separador visual */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
      
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

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div id="contacto" className="group relative p-12 bg-black border border-gray-800 hover:border-white transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/5">
              <div className="absolute -top-0.5 -left-0.5 w-24 h-24 pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-500" style={{background:'conic-gradient(from 180deg at 50% 50%, rgba(255,255,255,0.25), transparent 60%)'}}></div>
              <h3 className="text-4xl tracking-wider mb-8 group-hover:text-white transition-colors duration-300">Contactos</h3>
              <div className="space-y-6 text-gray-400 text-lg">
                <div className="group-hover:text-gray-200 transition-colors duration-300">
                  <p className="text-gray-500 uppercase text-sm mb-2">Email Fabiana:</p>
                  <p className="text-xl">fabiana@brandstrategist.com</p>
                </div>
                <div className="group-hover:text-gray-200 transition-colors duration-300">
                  <p className="text-gray-500 uppercase text-sm mb-2">Email Nicolás:</p>
                  <p className="text-xl">nicolas.fonseca0928@gmail.com</p>
                </div>
                <div className="group-hover:text-gray-200 transition-colors duration-300">
                  <p className="text-gray-500 uppercase text-sm mb-2">LinkedIn Fabiana:</p>
                  <a href="https://www.linkedin.com/in/fabiana-luengas-beltr%C3%A1n/" target="_blank" rel="noopener noreferrer" className="text-xl underline hover:text-white transition-colors duration-300">Ver perfil</a>
                </div>
                <div className="group-hover:text-gray-200 transition-colors duration-300">
                  <p className="text-gray-500 uppercase text-sm mb-2">LinkedIn Nicolás:</p>
                  <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank" rel="noopener noreferrer" className="text-xl underline hover:text-white transition-colors duration-300">Ver perfil</a>
                </div>
              </div>
            </div>
            <div className="group relative p-12 bg-black border border-gray-800 hover:border-white transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/5">
              <div className="absolute -top-0.5 -left-0.5 w-24 h-24 pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-500" style={{background:'conic-gradient(from 180deg at 50% 50%, rgba(255,255,255,0.25), transparent 60%)'}}></div>
              <h3 className="text-4xl tracking-wider mb-8 group-hover:text-white transition-colors duration-300">Casos de éxito</h3>
              <p className="text-gray-400 leading-relaxed text-xl group-hover:text-gray-200 transition-colors duration-300">
                Próximamente compartiremos proyectos destacados y resultados obtenidos junto a nuestros clientes.
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
      <section className="py-32 px-6 lg:px-12 bg-gradient-to-b from-gray-900 to-black">
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


