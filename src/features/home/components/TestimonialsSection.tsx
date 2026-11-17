"use client";

import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

// La foto de cada persona va como fondo de la tarjeta, con una capa oscura para que el texto blanco se lea.
const TESTIMONIALS = [
  {
    name: "Sofía Rodríguez",
    title: "¡Excelente servicio! ¡Renta de autos!",
    text: "Renté una SUV para un viaje familiar de fin de semana. Todo el proceso fue transparente y el soporte estuvo al pendiente en todo momento. Totalmente recomendado.",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&h=1200&fit=crop",
    alt: "Clienta sonriendo",
  },
  {
    name: "Alejandro Martínez",
    title: "¡Excelente servicio! ¡Renta de autos!",
    text: "El BMW estaba impecable y el proceso de reservación tomó menos de 5 minutos. Llevamos varios viajes rentando aquí y siempre hemos quedado satisfechos con la atención y los precios.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&h=1200&fit=crop",
    alt: "Cliente sonriendo",
  },
  {
    name: "Juan Carlos Rico",
    title: "¡Excelente servicio! ¡Renta de autos!",
    text: "La facilidad de filtrar los autos disponibles por fecha me salvó las vacaciones. Con el respaldo de un servicio premium de verdad, rentar un auto aquí es rápido, confiable y sin complicaciones.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&h=1200&fit=crop",
    alt: "Cliente sonriendo",
  },
];

export function TestimonialsSection() {
  return (
    <section className={`${poppins.className} max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center`}>
      <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-black mb-12">
        Lo opinan nuestros clientes
      </h2>

      <ul className="grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
        {TESTIMONIALS.map((user) => (
          <li
            key={user.name}
            className="relative isolate overflow-hidden rounded-xl bg-neutral-900 min-h-[420px] md:min-h-[480px]"
          >
            <img
              src={user.img}
              alt={user.alt}
              loading="lazy"
              className="absolute inset-0 -z-20 h-full w-full object-cover"
            />
            {/* Capa oscura: más fuerte arriba, donde va el texto */}
            <div
              aria-hidden
              className="absolute inset-0 -z-10 bg-gradient-to-b from-black/80 via-black/55 to-black/10"
            />
            <figure className="m-0 p-7 text-white">
              <h3 className="text-[15px] font-semibold leading-snug">{user.title}</h3>
              <blockquote className="mt-3 m-0 text-[14px] leading-relaxed text-white">
                {user.text}
              </blockquote>
              <figcaption className="mt-2 text-[14px] font-medium">-{user.name}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
