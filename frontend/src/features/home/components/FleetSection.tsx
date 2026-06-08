"use client";

import React, { useState } from "react";
import { Modal } from "../../../components/ui/Modal"; // Ajustado si usas export nombrado

const FLEET_IMAGES = [
  "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=600",
  "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=600",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=600",
  "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=600",
  "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=600",
  "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=600",
];

export function FleetSection() {
  // Estado para controlar qué imagen se abre en grande (null = cerrado)
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="bg-gray-50 mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center mt-12 sm:mt-16">
      <h2 className="text-3xl font-black uppercase tracking-tight text-black">
        Nuestra flota de vehículos
      </h2>
      <p className="text-gray-500 text-xs uppercase tracking-wider mt-2 mb-12">
        Conduce tus sueños a la realidad con opciones versátiles.
      </p>

      {/* Grid de vehículos */}
      <div className="container m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {FLEET_IMAGES.map((url, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(url)} // Al dar click, guardamos la URL y abre el modal
            className="h-48 bg-gray-100 rounded-lg overflow-hidden group relative cursor-pointer"
          >
            <img
              src={url}
              alt={`Vehículo de la flota ${index + 1}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 contrast-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
              {/* Micro-interacción pro: un texto sutil al hacer hover */}
              <span className="text-white text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 px-3 py-1.5 rounded backdrop-blur-sm">
                Ampliar Vista
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Genérico - Fuera del grid para evitar fallos de layout */}
      <Modal
        isOpen={!!selectedImage} // Si selectedImage tiene un string, se vuelve true de volada
        onClose={() => setSelectedImage(null)} // Al cerrar, reseteamos a null
        maxWidth="3xl"
      >
        {selectedImage && (
          <div className="relative w-full bg-black flex items-center justify-center overflow-hidden">
            <img
              src={selectedImage}
              alt="Vista ampliada del vehículo"
              className="w-full h-auto  object-contain select-none animate-fade-in"
            />
          </div>
        )}
      </Modal>
    </section>
  );
}