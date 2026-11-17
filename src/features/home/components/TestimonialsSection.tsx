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
    img: "https://images.unsplash.com/photo-1748841354578-bc895112c5bd?q=80&w=1000",
    pos: "62% 100%",
    alt: "Clienta sonriendo desde la ventana de un auto",
  },
  {
    name: "Alejandro Martínez",
    title: "¡Excelente servicio! ¡Renta de autos!",
    text: "El BMW estaba impecable y el proceso de reservación tomó menos de 5 minutos. Llevamos varios viajes rentando aquí y siempre hemos quedado satisfechos con la atención y los precios.",
    img: "https://images.unsplash.com/photo-1758521961483-30f5908b9c93?q=80&w=1000",
    pos: "66% 100%",
    alt: "Cliente sonriendo al volante",
  },
  {
    name: "Juan Carlos Rico",
    title: "¡Excelente servicio! ¡Renta de autos!",
    text: "La facilidad de filtrar los autos disponibles por fecha me salvó las vacaciones. Con el respaldo de un servicio premium de verdad, rentar un auto aquí es rápido, confiable y sin complicaciones.",
    img: "https://images.unsplash.com/photo-1609731791145-b2eb1f95e808?q=80&w=1000",
    pos: "88% 100%",
    alt: "Cliente con gafas de sol sonriendo dentro de un auto",
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
              style={{ objectPosition: user.pos }}
              className="absolute inset-0 -z-20 h-full w-full object-cover"
            />
            {/* Capa oscura: más fuerte arriba, donde va el texto */}
            <div
              aria-hidden
              className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/45 to-black/5"
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
