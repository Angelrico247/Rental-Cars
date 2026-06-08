"use client";

import React from "react";

const REQUIREMENTS = [
  {
    num: "01",
    title: "Identificación Oficial",
    desc: "INE o Pasaporte vigente durante todo el periodo de tu contrato de arrendamiento.",
  },
  {
    num: "02",
    title: "Licencia de Conducir",
    desc: "Vigente, en físico (o app oficial estatal) con un mínimo de un año de antigüedad.",
  },
  {
    num: "03",
    title: "Tarjeta de Crédito",
    desc: "Física, personalizada a nombre del conductor para el bloqueo de depósito en garantía.",
  },
];

export function RequirementsSection() {
  return (
    <section className="w-full bg-white border-y border-gray-100 py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-black uppercase tracking-tight text-black">
          Requisitos para Rentar
        </h2>
        <p className="text-gray-500 text-xs uppercase tracking-wider mt-2 mb-16">
          Olvídate del papeleo excesivo. Solo presenta esto al recoger tu auto.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REQUIREMENTS.map((req, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-8 border border-gray-100 text-left relative overflow-hidden shadow-sm"
            >
              <span className="absolute right-6 top-4 text-6xl font-black text-gray-100 select-none">
                {req.num}
              </span>
              <h4 className="text-sm font-bold uppercase tracking-wider text-black mt-4 mb-2 relative z-10">
                {req.title}
              </h4>
              <p className="text-gray-500 text-xs leading-relaxed relative z-10">
                {req.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}