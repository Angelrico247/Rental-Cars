"use client";

import React from "react";

const TESTIMONIALS = [
  {
    name: "Alejandro Martínez",
    text: "Excelente servicio, el BMW estaba impecable y el proceso de reservación tomó menos de 5 minutos. Totalmente recomendado.",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400",
  },
  {
    name: "Sofía Rodríguez",
    text: "Renté una SUV para un viaje familiar de fin de semana. Todo el proceso transparente y el soporte estuvo al pendiente en todo momento.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400",
  },
  {
    name: "Juan Carlos Rico",
    text: "La facilidad de filtrar los autos disponibles por fecha me salvó las vacaciones. Un servicio premium de verdad.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400",
  },
];

export function TestimonialsSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <h2 className="text-3xl font-black uppercase tracking-tight text-black mb-12">
        Lo opinan nuestros clientes
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((user, idx) => (
          <div
            key={idx}
            className="bg-gray-50 border border-gray-100 rounded-xl p-6 text-left relative overflow-hidden flex flex-col justify-between h-64"
          >
            <p className="text-gray-600 text-xs italic leading-relaxed">
              "{user.text}"
            </p>
            <div className="flex items-center gap-3 mt-6">
              <img
                src={user.img}
                alt={user.name}
                className="w-10 h-10 rounded-full object-cover filter grayscale"
              />
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-black">
                  {user.name}
                </h4>
                <span className="text-[10px] text-gray-400 font-semibold uppercase">
                  Cliente Verificado
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}