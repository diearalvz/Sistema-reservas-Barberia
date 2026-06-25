import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white flex flex-col items-center justify-center p-6 font-sans">
      <main className="max-w-md w-full bg-neutral-800 rounded-2xl p-8 shadow-2xl border border-neutral-700 text-center">
        
        {/* Logo o Encabezado */}
        <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
          <span className="text-3xl">💈</span>
        </div>
        
        <h1 className="text-2xl font-bold tracking-tight mb-2 text-amber-400">
          Barbería Inteligente
        </h1>
        <p className="text-neutral-400 text-sm mb-6">
          Agenda tu cita en segundos desde tu celular, sin filas ni esperas.
        </p>

        {/* Estado del Proyecto */}
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-4 mb-6">
          <span className="inline-block bg-amber-500/10 text-amber-400 text-xs font-semibold px-2.5 py-1 rounded-full mb-2">
            Fase de Desarrollo Técnico
          </span>
          <p className="text-xs text-neutral-400">
            Estamos conectando la base de datos de disponibilidad en tiempo real.
          </p>
          <p className="text-sm font-semibold text-white mt-2">
            Lanzamiento oficial: 30 de Junio de 2026
          </p>
        </div>

        {/* Botón Simulado */}
        <button className="w-full bg-amber-500 hover:bg-amber-600 text-neutral-900 font-bold py-3 px-4 rounded-xl transition duration-200 shadow-md cursor-not-allowed opacity-75">
          Reservar Cita (Muy Pronto)
        </button>

      </main>

      <footer className="mt-8 text-xs text-neutral-500">
        Desarrollado por Diego Armando Alvarez &copy; 2026
      </footer>
    </div>
  );
}
