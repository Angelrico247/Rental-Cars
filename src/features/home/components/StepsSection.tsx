"use client";

import React from "react";

const STEPS = [
  { title: "Selecciona Fechas", desc: "Elige entrega y devolución." },
  { title: "Escoge tu Auto", desc: "Filtra por tipo y presupuesto." },
  { title: "Elige Coberturas", desc: "Viaja seguro sin deducibles." },
  { title: "Recoge y Conduce", desc: "Pasa a mostrador por tus llaves." },
];

export function StepsSection() {
  return (
    <section className=" mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <h2 className="text-3xl font-black uppercase tracking-tight text-black">
        ¿Cómo funciona?
      </h2>
      <p className="text-gray-500 text-xs uppercase tracking-wider mt-2 mb-16">
        Cuatro pasos sencillos para tomar el control de tu camino.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {STEPS.map((step, idx) => (
          <div key={idx} className="flex flex-col items-center text-center group">
            <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-black text-sm uppercase tracking-wider mb-4 group-hover:scale-105 transition-transform">
              {idx + 1}
            </div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-black mb-1.5">
              {step.title}
            </h4>
            <p className="text-gray-400 text-[11px] font-medium max-w-[200px]">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}