import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <section className="pt-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-thin tracking-widest mb-6 text-center">CONOCE A NUESTROS CEOS</h2>
          <p className="text-center text-gray-400 mb-14 tracking-wide text-lg">Selecciona un perfil para explorar su trayectoria y servicios</p>
          <div className="grid md:grid-cols-2 gap-8">
            <button
              onClick={() => navigate('/fabiana')}
              className={`group relative overflow-hidden p-10 text-left bg-gradient-to-br from-gray-950 to-black border border-gray-800 hover:border-white transition-all duration-500 cursor-pointer hover:-translate-y-1 hover:shadow-2xl`}
              aria-label="Ver perfil de Fabiana"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(255,255,255,0.08), transparent 40%)' }} />
              <div className="flex items-center gap-5">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border-2 border-white flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <span className="text-3xl font-light">FL</span>
                </div>
                <div>
                  <h3 className="text-3xl tracking-wider">Fabiana Luengas</h3>
                  <p className="text-base text-gray-400">Brand Stylist & Creative Strategist</p>
                </div>
              </div>
              <p className="mt-6 text-gray-400 group-hover:text-gray-200 leading-relaxed text-lg">
                Estratega digital con enfoque 360°, dirección creativa y crecimiento de marca.
              </p>
            </button>

            <button
              onClick={() => navigate('/nicolas')}
              className={`group relative overflow-hidden p-10 text-left bg-gradient-to-br from-gray-950 to-black border border-gray-800 hover:border-white transition-all duration-500 cursor-pointer hover:-translate-y-1 hover:shadow-2xl`}
              aria-label="Ver perfil de Nicolás"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(255,255,255,0.08), transparent 40%)' }} />
              <div className="flex items-center gap-5">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border-2 border-white flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <span className="text-3xl font-light">NF</span>
                </div>
                <div>
                  <h3 className="text-3xl tracking-wider">Nicolás Fonseca</h3>
                  <p className="text-base text-gray-400">Especialista en Páginas Web y Analítica de Datos</p>
                </div>
              </div>
              <p className="mt-6 text-gray-400 group-hover:text-gray-200 leading-relaxed text-lg">
                Desarrollo web orientado a resultados con integración de analítica y calidad.
              </p>
            </button>
          </div>
        </div>
      </section>

      <section className="py-28 px-6 lg:px-12 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 mb-14">
            <div className="relative p-10 bg-black border border-gray-800 hover:border-white transition-colors duration-300">
              <div className="absolute -top-0.5 -left-0.5 w-24 h-24 pointer-events-none opacity-60" style={{background:'conic-gradient(from 180deg at 50% 50%, rgba(255,255,255,0.25), transparent 60%)'}}></div>
              <h3 className="text-3xl tracking-wider mb-4">Misión de la empresa</h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                Impulsar el crecimiento de marcas y negocios a través de estrategias creativas,
                desarrollo web de alto rendimiento y decisiones guiadas por datos.
              </p>
            </div>
            <div className="relative p-10 bg-black border border-gray-800 hover:border-white transition-colors duration-300">
              <div className="absolute -top-0.5 -left-0.5 w-24 h-24 pointer-events-none opacity-60" style={{background:'conic-gradient(from 180deg at 50% 50%, rgba(255,255,255,0.25), transparent 60%)'}}></div>
              <h3 className="text-3xl tracking-wider mb-4">Visión de la empresa</h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                Ser un referente en Latinoamérica en marketing digital estratégico y experiencias web
                que conecten propósito, estética y resultados medibles.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mb-14">
            <div className="relative p-10 bg-black border border-gray-800 hover:border-white transition-colors duration-300">
              <div className="absolute -top-0.5 -left-0.5 w-24 h-24 pointer-events-none opacity-60" style={{background:'conic-gradient(from 180deg at 50% 50%, rgba(255,255,255,0.25), transparent 60%)'}}></div>
              <h3 className="text-3xl tracking-wider mb-4">Contactos</h3>
              <div className="space-y-3 text-gray-400 text-lg">
                <p><span className="text-gray-500 uppercase text-xs">Email Fabiana:</span> fabiana@brandstrategist.com</p>
                <p><span className="text-gray-500 uppercase text-xs">Email Nicolás:</span> nicolas.fonseca0928@gmail.com</p>
                <p><span className="text-gray-500 uppercase text-xs">LinkedIn Fabiana:</span> <a href="https://www.linkedin.com/in/fabiana-luengas-beltr%C3%A1n/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Ver perfil</a></p>
                <p><span className="text-gray-500 uppercase text-xs">LinkedIn Nicolás:</span> <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Ver perfil</a></p>
              </div>
            </div>
            <div className="relative p-10 bg-black border border-gray-800 hover:border-white transition-colors duration-300">
              <div className="absolute -top-0.5 -left-0.5 w-24 h-24 pointer-events-none opacity-60" style={{background:'conic-gradient(from 180deg at 50% 50%, rgba(255,255,255,0.25), transparent 60%)'}}></div>
              <h3 className="text-3xl tracking-wider mb-4">Casos de éxito</h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                Próximamente compartiremos proyectos destacados y resultados obtenidos junto a nuestros clientes.
              </p>
            </div>
          </div>

          <div className="relative p-10 bg-black border border-gray-800 hover:border-white transition-colors duration-300">
            <div className="absolute -top-0.5 -left-0.5 w-24 h-24 pointer-events-none opacity-60" style={{background:'conic-gradient(from 180deg at 50% 50%, rgba(255,255,255,0.25), transparent 60%)'}}></div>
            <h3 className="text-3xl tracking-wider mb-5">Áreas principales de la empresa</h3>
            <ul className="list-disc list-inside text-gray-400 space-y-2 text-lg">
              <li><span className="text-white">Marketing Digital</span></li>
              <li>
                <span className="text-white">Desarrollo de páginas web</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;


