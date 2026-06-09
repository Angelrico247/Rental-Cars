"use client";

import React from "react";

const PARTNERS = ["AEROMÉXICO", "VISA", "MASTERCARD", "AMERICAN EXPRESS", "SCOTIABANK", "BANORTE"];

export function PartnersSection() {
  // Duplicamos la lista para asegurar que el bucle visual sea perfecto e infinito
  const duplicatedPartners = [...PARTNERS, ...PARTNERS, ...PARTNERS];

  return (
    <section className="w-full bg-white border-b border-gray-100 py-10 overflow-hidden relative">
      {/* Inyección de estilos nativos para controlar la animación quirúrgicamente */}
      <style json-to-jsx="true">{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.3333%);
          }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
        /* Pausa la animación cuando el usuario pone el mouse encima (toque pro de UX) */
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Degradados sutiles a los lados para dar un efecto de desvanecido (fade) premium */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      {/* Contenedor de la marquesina animada */}
      <div className="w-full overflow-hidden">
        <div className="animate-marquee gap-16 md:gap-24 opacity-30 grayscale select-none items-center">
          {duplicatedPartners.map((partner, i) => (
            <span
              key={i}
              className="text-xs sm:text-sm font-black tracking-widest text-black uppercase inline-block whitespace-nowrap mx-4"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}