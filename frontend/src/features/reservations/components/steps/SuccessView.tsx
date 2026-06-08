"use client";

import React from "react";
import { motion } from "framer-motion";

interface SuccessViewProps {
  onClose: () => void;
}

/**
 * Vista de Confirmación Exitosa.
 */
export function SuccessView({ onClose }: SuccessViewProps) {
  return (
    <motion.div
      key="success"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="py-4 text-center space-y-5 flex flex-col items-center text-black w-full"
    >
      <div className="w-16 h-16 bg-zinc-900 text-green-400 rounded-full flex items-center justify-center text-3xl font-bold">
        ✓
      </div>
      <h4 className="text-xl font-black uppercase text-black tracking-tight">
        ¡Reserva Confirmada!
      </h4>
      <button
        type="button"
        onClick={onClose}
        className="w-full py-3 bg-black text-white rounded-xl text-xs font-black uppercase shadow-md cursor-pointer hover:bg-zinc-800 transition-colors"
      >
        Finalizar
      </button>
    </motion.div>
  );
}