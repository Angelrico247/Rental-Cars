"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HeroSectionProps {
  startDate: string;
  setStartDate: (date: string) => void;
  endDate: string;
  setEndDate: (date: string) => void;
  onSearch: (e: React.FormEvent) => void;
}

export function HeroSection({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  onSearch,
}: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Si baja más de 10 píxeles, la barra aparece; si regresa arriba, se esconde
      if (window.scrollY > 10) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main
      className="w-full min-h-[100vh] flex flex-col justify-between px-4 sm:px-8 lg:px-16 pt-32 pb-12 bg-cover bg-center relative"
      style={{
        backgroundImage:
          "linear-gradient(90deg, #000000, #000000bc), url('https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2070')",
      }}
    >
      {/* Contenedor del Texto con Animación de Entrada al Cargar */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl w-full mx-auto flex flex-col justify-center flex-1 space-y-4 pt-10"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-none">
          Tu viaje, <br />
          <span className="text-gray-400 font-light">nuestro Compromiso.</span>
        </h1>
        <p className="text-gray-400 text-xs sm:text-sm uppercase tracking-widest font-semibold">
          Renta de autos deportivos, familiares e híbridos.
        </p>
        
        {/* Hint sutil animado para avisar que le den scroll */}
        <motion.p 
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-[10px] text-zinc-500 uppercase tracking-widest pt-4 font-bold"
        >
          Desliza hacia abajo para buscar ↓
        </motion.p>
      </motion.div>

      {/* BARRA DE BÚSQUEDA FLOTANTE CON ANIMACIÓN REACTIVA AL SCROLL */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: "100%", x: "-50%" }}
            animate={{ opacity: 1, y: "50%", x: "-50%" }}
            exit={{ opacity: 0, y: "100%", x: "-50%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full max-w-4xl mx-auto px-4 absolute bottom-0 left-1/2 z-20"
          >
            <form
              onSubmit={onSearch}
              className="bg-white rounded-xl shadow-2xl border border-gray-100 p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-3 gap-4 items-end"
            >
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1.5">
                  Fecha de Entrega
                </label>
                <input
                  type="date"
                  value={startDate}
                  min={new Date().toISOString().split("T")[0]}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg p-3 text-xs font-semibold focus:outline-none focus:border-black transition-colors text-black"
                  required
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1.5">
                  Fecha de Devolución
                </label>
                <input
                  type="date"
                  value={endDate}
                  min={startDate || new Date().toISOString().split("T")[0]}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg p-3 text-xs font-semibold focus:outline-none focus:border-black transition-colors text-black"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black hover:bg-gray-800 text-white text-xs font-bold uppercase tracking-widest py-3.5 rounded-lg transition-colors cursor-pointer h-[46px]"
              >
                Buscar Disponibles
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}