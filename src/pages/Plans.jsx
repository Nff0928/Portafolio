import React from 'react';

const Plans = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <a href="#contacto" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:bg-white focus:text-black focus:px-3 focus:py-2">Saltar al contacto</a>
      <nav className="fixed w-full top-0 z-50 bg-black bg-opacity-95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <div className="text-2xl font-light tracking-widest">PLANES</div>
          <a href="/#contacto" className="border border-gray-800 text-white py-2 px-4 font-medium tracking-wider uppercase hover:border-white transition-colors duration-300">Solicitar cotización</a>
        </div>
      </nav>

      <main className="pt-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-14">
            <h1 className="text-5xl md:text-6xl font-thin tracking-widest mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Elige el plan ideal</h1>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">Opciones para Marketing, Desarrollo y paquetes combinados. Todo orientado a resultados.</p>
          </header>

          {/* Marketing */}
          <section className="mb-20">
            <h2 className="text-3xl tracking-wider mb-8">Marketing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[{name:'Starter',price:'$600.000',items:['Identidad visual básica','1 campaña Meta Ads','Guía de estilo breve']},
                {name:'Growth',price:'$1.200.000',items:['Estrategia trimestral','2 campañas Multi-Ads','Calendario de contenido']},
                {name:'Pro Brand',price:'$2.000.000',items:['Dirección creativa','Producción de piezas','Optimización continua']}].map((p,idx)=> (
                <article key={idx} className="group p-8 bg-black border border-gray-800 hover:border-white transition-all duration-500">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block px-3 py-1 text-xs tracking-wider uppercase bg-white/5 border border-gray-800 text-gray-400 rounded-full">{p.name}</span>
                    <span className="text-2xl font-semibold">{p.price}</span>
                  </div>
                  <ul className="mt-4 ml-5 list-disc text-gray-400 space-y-1">
                    {p.items.map((it,i)=> <li key={i}>{it}</li>)}
                  </ul>
                  <div className="mt-6 flex gap-3">
                    <a href="/#contacto" className="bg-white text-black py-2 px-4 font-medium tracking-wider uppercase hover:bg-gray-200 transition-colors duration-300">Solicitar cotización</a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Desarrollo */}
          <section className="mb-20">
            <h2 className="text-3xl tracking-wider mb-8">Desarrollo</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[{name:'Base',price:'$800.000',items:['Landing 1–3 secciones','Responsive + SEO básico','Textos con IA']},
                {name:'Pro',price:'$1.500.000',items:['Todo Base','Chatbot IA (WhatsApp/Web)','Form conectado (Sheets/Email)']},
                {name:'Premium',price:'$2.500.000',items:['Todo Pro','Dashboard + IA','Hosting + dominio + SSL']}] .map((p,idx)=> (
                <article key={idx} className="group p-8 bg-black border border-gray-800 hover:border-white transition-all duration-500">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block px-3 py-1 text-xs tracking-wider uppercase bg-white/5 border border-gray-800 text-gray-400 rounded-full">{p.name}</span>
                    <span className="text-2xl font-semibold">{p.price}</span>
                  </div>
                  <ul className="mt-4 ml-5 list-disc text-gray-400 space-y-1">
                    {p.items.map((it,i)=> <li key={i}>{it}</li>)}
                  </ul>
                  <div className="mt-6 flex gap-3">
                    <a href="/#contacto" className="bg-white text-black py-2 px-4 font-medium tracking-wider uppercase hover:bg-gray-200 transition-colors duration-300">Solicitar cotización</a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Combinados */}
          <section className="mb-20">
            <h2 className="text-3xl tracking-wider mb-8">Combinados (Marketing + Desarrollo)</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[{name:'Launch Pack',price:'$1.800.000',items:['Landing + Identidad','1 campaña ads','Analítica básica']},
                {name:'Growth Pack',price:'$2.800.000',items:['Web Pro + Estrategia','Chatbot IA','2 campañas']},
                {name:'Scale Pack',price:'$3.800.000',items:['Premium + Dirección creativa','Dashboard','Optimización mensual']}] .map((p,idx)=> (
                <article key={idx} className="group p-8 bg-black border border-gray-800 hover:border-white transition-all duration-500">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block px-3 py-1 text-xs tracking-wider uppercase bg-white/5 border border-gray-800 text-gray-400 rounded-full">{p.name}</span>
                    <span className="text-2xl font-semibold">{p.price}</span>
                  </div>
                  <ul className="mt-4 ml-5 list-disc text-gray-400 space-y-1">
                    {p.items.map((it,i)=> <li key={i}>{it}</li>)}
                  </ul>
                  <div className="mt-6 flex gap-3">
                    <a href="/#contacto" className="bg-white text-black py-2 px-4 font-medium tracking-wider uppercase hover:bg-gray-200 transition-colors duration-300">Solicitar cotización</a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section id="contacto" className="py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-thin tracking-widest mb-6">CONTÁCTANOS</h2>
              <p className="text-gray-400 mb-8 tracking-wide text-lg">Déjanos tus datos y el plan de interés. Te responderemos en menos de 24 horas.</p>
              <a href="/" className="border border-gray-800 text-white py-3 px-6 font-medium tracking-wider uppercase hover:border-white transition-colors duration-300">Volver al inicio</a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Plans;


