"use client";

import React from "react";

const DISTINCTIONS = [
  { title: "Entrega Rápida", desc: "Sin filas ni retrasos" },
  { title: "Soporte 24/7", desc: "Atención en ruta" },
  { title: "Kilometraje Libre", desc: "Viaja sin límites" },
  { title: "Seguro Premium", desc: "Cochera protegida" },
];

export function FeaturesSection() {
  return (
    <section className="relative w-full bg-gray-50 py-20 px-4 text-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 filter grayscale"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486006920555-c77dce18193b?q=80&w=2000')",
        }}
      />
      <div className="relative z-10 max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black mb-16">
          ¿Qué nos distingue?
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-black">
          {DISTINCTIONS.map((item, i) => (
            <div key={i} className="space-y-2 flex flex-col items-center">
              <div className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center text-gray-900 mb-2">
                ★
              </div>
              <h4 className="text-xs font-bold uppercase tracking-wider">
                {item.title}
              </h4>
              <p className="text-gray-400 text-[11px] font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}