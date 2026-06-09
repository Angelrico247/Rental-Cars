"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode; // <-- Aquí entra cualquier JSX (fotos, textos, formularios)
  maxWidth?: "sm" | "md" | "lg" | "xl" | "3xl" | "full"; // Para controlar el ancho
}

export function Modal({ isOpen, onClose, children, maxWidth = "md" }: ModalProps) {
  // Cerramos el modal si el usuario presiona la tecla Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    
    if (isOpen) document.body.style.overflow = "hidden"; // Bloquea el scroll de fondo
    window.addEventListener("keydown", handleEscape);
    
    return () => {
      document.body.style.overflow = "unset"; // Libera el scroll al cerrar
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  // Mapa de anchos de Tailwind para hacerlo dinámico
  const maxWithClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "3xl": "max-w-3xl",
    full: "max-w-full m-4",
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* 1. Fondo oscuro con Blur (Overlay) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose} // Cierra si dan click afuera
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* 2. Contenedor del Contenido (El "Marco") */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`w-full ${maxWithClasses[maxWidth]} bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden relative z-10 flex flex-col`}
          >
            {/* Botón de cerrar elegante */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-gray-400 hover:text-black text-sm uppercase font-black tracking-widest transition-colors cursor-pointer z-50 mix-blend-difference"
            >
              ✕
            </button>

            {/* AQUÍ SE INYECTA EL CONTENIDO DINÁMICO */}
            <div className="w-full text-black">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}