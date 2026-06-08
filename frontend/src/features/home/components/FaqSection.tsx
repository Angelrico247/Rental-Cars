"use client";

import React, { useState } from "react";

const FAQS = [
  {
    q: "¿Cuál es la edad mínima para rentar un vehículo?",
    a: "La edad mínima es de 18 años. Conductores entre 18 y 24 años aplican un cargo diario menor por concepto de 'conductor joven'.",
  },
  {
    q: "¿Cuánto solicitan de depósito en garantía?",
    a: "El monto varía según la cobertura seleccionada. Si contratas Cobertura Total, el bloqueo inicia desde los $1,500 MXN en tarjetas de crédito participantes.",
  },
  {
    q: "¿Se aceptan tarjetas de débito o pagos en efectivo?",
    a: "Para el pago total de la renta aceptamos tarjetas de débito y crédito. Sin embargo, para el depósito en garantía obligatorio en mostrador, es estrictamente necesaria una tarjeta de crédito física.",
  },
];

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className=" bg-gray-50  mx-auto px-4 py-20">
      <h2 className="text-3xl font-black uppercase tracking-tight text-black text-center">
        Preguntas Frecuentes
      </h2>
      <p className="text-gray-500 text-xs uppercase tracking-wider mt-2 mb-12 text-center">
        Todo lo que necesitas saber antes de tu viaje.
      </p>

      <div className="space-y-3 container m-auto">
        {FAQS.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className="border border-gray-100 rounded-lg overflow-hidden bg-white shadow-sm"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full cursor-pointer flex justify-between items-center p-5 text-left text-xs font-bold uppercase tracking-wider text-black hover:bg-gray-50 transition-colors"
              >
                <span>{faq.q}</span>
                <span className="text-base font-light transition-transform duration-300">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-40 border-t border-gray-50" : "max-h-0"
                }`}
              >
                <p className="p-5 text-xs text-gray-500 leading-relaxed bg-gray-50/50">
                  {faq.a}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}