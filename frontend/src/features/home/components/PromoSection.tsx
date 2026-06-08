"use client";

import React, { useState } from "react";
import { Modal } from "../../../components/ui/Modal"; // Ajustado según tu árbol de carpetas

const PROMOS = [
  {
    tag: "Ahorro Prepago",
    title: "Pre-paga en línea y ahorra hasta un 20%",
    desc: "Asegura tu auto reservando hoy mismo. Tarifa congelada sin cargos ocultos en mostrador.",
    action: "Ver Oferta",
    details: "Aplica en todas las categorías de autos reservando con un mínimo de 48 horas de anticipación. El descuento del 20% ya se encuentra reflejado en las tarifas marcadas como 'Prepago'. No acumulable con otras promociones o cupones de descuento.",
  },
  {
    tag: "Fin de Semana",
    title: "Roadtrip de Fin de Semana Largo",
    desc: "Renta de jueves a lunes y obtén un día completamente gratis en categorías sedán.",
    action: "Reservar Ahora",
    details: "Promoción válida rentando un mínimo de 4 días que incluyan el día sábado y domingo en mostrador. Aplica exclusivamente para categorías Sedán Económico, Compacto y Mediano. Sujeto a disponibilidad de unidades.",
  },
  {
    tag: "Beneficio Ejecutivo",
    title: "Conductores adicionales sin costo",
    desc: "Ideal para viajes de negocios. Registra a tu compañero de ruta sin pagar tarifas extra.",
    action: "Saber Más",
    details: "El conductor adicional deberá cumplir con los mismos requisitos obligatorios en mostrador (licencia de conducir vigente e identificación oficial). Límite de un conductor adicional sin costo por contrato de arrendamiento.",
  },
];

export function PromoSection() {
  // Estado para guardar el objeto de la promo seleccionada (null = cerrado)
  const [selectedPromo, setSelectedPromo] = useState<typeof PROMOS[0] | null>(null);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="text-3xl font-black uppercase tracking-tight text-black text-center">
        Promociones Exclusivas
      </h2>
      <p className="text-gray-500 text-xs uppercase tracking-wider mt-2 mb-12 text-center">
        Aprovecha las tarifas especiales diseñadas para cada tipo de viaje.
      </p>

      {/* Grid de Promociones */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PROMOS.map((promo, idx) => (
          <div
            key={idx}
            className="border border-gray-200 rounded-xl p-6 flex flex-col justify-between items-start bg-white hover:border-black transition-colors"
          >
            <div className="space-y-3">
              <span className="inline-block bg-black text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded">
                {promo.tag}
              </span>
              <h3 className="text-sm font-bold uppercase tracking-wider text-black leading-snug">
                {promo.title}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                {promo.desc}
              </p>
            </div>
            
            <button
              onClick={() => setSelectedPromo(promo)} // Al dar click, inyectamos el objeto completo al estado
              className="mt-6 text-[10px] font-black uppercase tracking-widest text-black border-b border-black pb-0.5 hover:text-gray-600 hover:border-gray-600 transition-colors cursor-pointer"
            >
              {promo.action} →
            </button>
          </div>
        ))}
      </div>

      {/* Modal de Detalle de Promoción - Fuera del grid por limpieza */}
      <Modal
        isOpen={!!selectedPromo}
        onClose={() => setSelectedPromo(null)}
        maxWidth="md" // Ancho medio para que se vea como tarjeta de lectura fina
      >
        {selectedPromo && (
          <div className="p-8 space-y-5">
            {/* Cabecera del modal */}
            <div className="space-y-2">
              <span className="inline-block bg-black text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded">
                {selectedPromo.tag}
              </span>
              <h3 className="text-xl font-black uppercase tracking-tight text-black leading-tight">
                {selectedPromo.title}
              </h3>
            </div>

            <hr className="border-gray-100" />

            {/* Detalles extendidos */}
            <div className="space-y-3">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                Términos y Condiciones
              </h4>
              <p className="text-gray-600 text-xs leading-relaxed font-medium">
                {selectedPromo.details}
              </p>
            </div>

            {/* Letras chiquitas regulatorias fijas (Look corporativo premium) */}
            <p className="text-gray-400 text-[10px] uppercase tracking-wider leading-relaxed pt-2">
              * Precios en MXN. No incluye coberturas adicionales ni deducibles no especificados. Válido en sucursales participantes de la República Mexicana.
            </p>

            {/* Botón de acción principal adentro del modal */}
            <div className="pt-4">
              <button
                onClick={() => setSelectedPromo(null)}
                className="w-full bg-black hover:bg-zinc-800 text-white text-xs font-bold uppercase tracking-widest py-3.5 rounded-lg transition-colors cursor-pointer text-center"
              >
                Entendido
              </button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}