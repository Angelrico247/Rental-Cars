"use client";

import React from "react";

export function BusinessSection() {
  return (
    <section className="w-full bg-black py-24 px-4 text-white relative overflow-hidden">
      {/* Fondo sutil texturizado */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 filter grayscale pointer-events-none"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070')"
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
          Soluciones Corporativas
        </span>
        <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight leading-none">
          ¿Buscas movilidad para tu negocio <br />
          o rentas de largo plazo?
        </h2>
        <p className="text-gray-400 text-xs max-w-xl mx-auto leading-relaxed">
          Optimiza los costos de tu empresa con nuestros planes de gestión de flotas, esquemas de renta mensual deducibles de impuestos y atención prioritaria 24/7.
        </p>
        <div className="pt-4">
          <button className="bg-white text-black hover:bg-gray-100 text-xs font-bold uppercase tracking-widest py-3.5 px-8 rounded-lg transition-colors cursor-pointer">
            Contactar un Ejecutivo B2B
          </button>
        </div>
      </div>
    </section>
  );
}