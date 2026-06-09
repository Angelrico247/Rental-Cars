"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // <-- Importamos para detectar la ruta
import { motion } from "framer-motion";

export const Navbar: React.FC = () => {
  const pathname = usePathname(); // Guardamos la ruta actual (ej: "/", "/cars")
  const [isScrolled, setIsScrolled] = useState(false);

  // Es la landing page si el pathname es exactamente "/"
  const isHomePage = pathname === "/";

  useEffect(() => {
    // Si no estamos en la landing, no nos interesa escuchar el scroll
    if (!isHomePage) return;

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Validamos al cargar por si el usuario recarga la página ya con scroll abajo
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  // Evaluamos dinámicamente si el Navbar debe verse blanco o transparente.
  // Si NO es la landing page, SIEMPRE se fuerza a verse blanco (isNavbarWhite = true)
  const isNavbarWhite = !isHomePage || isScrolled;

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ease-in-out ${
        isNavbarWhite
          ? "bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <div
          className={`text-xl font-black tracking-wider transition-colors duration-500 ${
            isNavbarWhite ? "text-black" : "text-white"
          }`}
        >
          <Link href="/">
            RENTAL
            <span
              className={`font-normal transition-colors duration-500 ${
                isNavbarWhite ? "text-gray-400" : "text-zinc-400"
              }`}
            >
              CARS
            </span>
          </Link>
        </div>

        {/* MENÚ DESKTOP */}
        <ul
          className={`hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest transition-colors duration-500 ${
            isNavbarWhite ? "text-gray-600" : "text-zinc-300"
          }`}
        >
          <li>
            <Link
              href="/cars"
              className={`transition-colors ${
                isNavbarWhite ? "hover:text-black" : "hover:text-white"
              }`}
            >
              Catálogo
            </Link>
          </li>
          <li>
            <Link
              href="/rentals"
              className={`transition-colors ${
                isNavbarWhite ? "hover:text-black" : "hover:text-white"
              }`}
            >
              Mis Rentas
            </Link>
          </li>
        </ul>

        {/* BOTÓN HAMBURGUESA MOVILES */}
        <div className="md:hidden flex items-center">
          <button
            className={`transition-colors duration-500 focus:outline-none cursor-pointer ${
              isNavbarWhite ? "text-gray-600 hover:text-black" : "text-zinc-300 hover:text-white"
            }`}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

      </div>
    </motion.nav>
  );
};