'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Phone, Mail, MapPin, Heart, TrendingUp, DollarSign, Shield } from 'lucide-react';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { title: 'Más de 30 años de Experiencia', subtitle: 'Confianza y profesionalismo en cada venta' },
    { title: 'Autos Certificados y Garantizados', subtitle: 'Calidad garantizada en todos nuestros vehículos' },
    { title: 'Financiamiento Accesible', subtitle: 'Opciones de pago que se ajustan a tu presupuesto' }
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const openWhatsApp = (msg: string) => {    window.open(`https://wa.me/56993663399?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* NAVBAR */}
      <nav className="fixed w-full z-40 bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-700">PARQUE AUTOMOTRIZ <span className="text-red-800">LA COPA</span></div>
          <button onClick={() => openWhatsApp('Hola, quiero agendar una visita')} className="bg-blue-700 text-white px-6 py-2 rounded-full">
            Agendar Visita
          </button>
        </div>
      </nav>

      {/* HERO CON CARRUSEL */}
      <section className="mt-16 h-96 bg-gradient-to-r from-blue-800 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">{slides[currentSlide].title}</h1>
            <p className="text-xl text-blue-100">{slides[currentSlide].subtitle}</p>
          </div>
        </div>

        <button onClick={handlePrev} className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full hover:bg-white">
          <ChevronLeft className="w-6 h-6 text-blue-700" />
        </button>
        <button onClick={handleNext} className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full hover:bg-white">
          <ChevronRight className="w-6 h-6 text-blue-700" />
        </button>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrentSlide(i)} className={`w-2 h-2 rounded-full ${i === currentSlide ? 'bg-white' : 'bg-white/50'}`} />
          ))}
        </div>
      </section>

      {/* RESUMEN */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <Heart className="w-12 h-12 text-red-800 mx-auto mb-3" />
            <h3 className="text-xl font-bold mb-2">Confianza</h3>
            <p className="text-gray-600">30 años sirviendo a la comunidad con integridad</p>
          </div>
          <div className="text-center">
            <TrendingUp className="w-12 h-12 text-blue-700 mx-auto mb-3" />
            <h3 className="text-xl font-bold mb-2">Variedad</h3>
            <p className="text-gray-600">Amplio inventario de vehículos certificados</p>
          </div>
          <div className="text-center">
            <Shield className="w-12 h-12 text-gray-700 mx-auto mb-3" />
            <h3 className="text-xl font-bold mb-2">Garantía</h3>
            <p className="text-gray-600">Protección garantizada en cada compra</p>
          </div>
        </div>
      </section>

      {/* FINANCIAMIENTO */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Financiamiento a Tu Medida</h2>
            <ul className="space-y-3">
              <li className="flex items-center gap-3"><DollarSign className="w-5 h-5" /> Compra directa al contado</li>
              <li className="flex items-center gap-3"><DollarSign className="w-5 h-5" /> Financiamiento bancario</li>
              <li className="flex items-center gap-3"><DollarSign className="w-5 h-5" /> Aceptamos tu auto en parte de pago</li>
            </ul>
          </div>
          <div className="bg-white text-gray-800 p-8 rounded-lg">
            <p className="mb-6 text-center font-semibold">Consulta con nuestros ejecutivos</p>
            <button onClick={() => openWhatsApp('Hola, quiero saber sobre opciones de financiamiento')} className="w-full bg-blue-700 text-white py-3 rounded-lg font-bold">
              Contactar Asesor
            </button>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Ponté en Contacto</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <Phone className="w-8 h-8 text-blue-700 mx-auto mb-3" />
              <p className="font-bold mb-2">WhatsApp</p>
              <a href="https://wa.me/56993663399" className="text-blue-700 hover:underline">+56 9 9366 3399</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <Mail className="w-8 h-8 text-blue-700 mx-auto mb-3" />
              <p className="font-bold mb-2">Email</p>
              <a href="mailto:parqueautomotrizlacopa@gmail.com" className="text-blue-700 hover:underline text-sm">parqueautomotrizlacopa@gmail.com</a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <MapPin className="w-8 h-8 text-blue-700 mx-auto mb-3" />
              <p className="font-bold mb-2">Ubicación</p>
              <p className="text-sm text-gray-600">Av. Américo Vespucio Sur 1465, San Ramón</p>
            </div>
          </div>
        </div>
      </section>

      {/* REDES SOCIALES */}
      <section className="py-12 bg-white text-center">
        <h3 className="text-2xl font-bold mb-6">Séguenos en Redes</h3>
        <div className="flex justify-center gap-6">
          <a href="https://www.instagram.com/automotriz_lacopa" target="_blank" rel="noopener noreferrer" className="text-pink-600 text-2xl hover:text-pink-700">Instagram</a>
          <a href="https://www.facebook.com/share/1AibmEDFTx/" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-2xl hover:text-blue-700">Facebook</a>
          <a href="https://www.tiktok.com/@parqueautomotorlacopa?_r=1&_t=ZS-92ry2lrPkfv" target="_blank" rel="noopener noreferrer" className="text-gray-800 text-2xl hover:text-black">TikTok</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        <p>Horario: Lunes a Domingo, 10:00 a 19:00 hrs</p>
        <p className="mt-2 text-sm">© 2025 Parque Automotriz La Copa. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default HomePage;
