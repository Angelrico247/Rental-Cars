"use client";

import React from "react";
import { motion } from "framer-motion";
import { COVERAGES } from "../../data/BookingModal.constants";

interface StepCoveragesProps {
  booking: any;
  variants: any;
}

/**
 * Subcomponente Paso 2: Selección de Cobertura y Desglose de Características.
 */
export function StepCoverages({ booking, variants }: StepCoveragesProps) {
  return (
    <motion.div
      key="step2"
      custom={booking.direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: "tween", duration: 0.5 },
        opacity: { duration: 0.5 },
      }}
      className="space-y-4 pr-1 text-black w-full"
    >
      <div className="space-y-3">
        {COVERAGES.map((cov: any) => (
          <div
            key={cov.id}
            onClick={() => booking.setSelectedCoverage(cov.id)}
            className={`rounded-2xl border-2 p-4 cursor-pointer transition-all ${
              booking.selectedCoverage === cov.id
                ? "border-black bg-zinc-50/50"
                : "border-gray-100"
            }`}
          >
            <div className="flex justify-between items-center">
              <span className="text-sm font-black uppercase text-black">
                {cov.name}
              </span>
              <span className="text-xs font-black text-black">
                ${cov.price_per_day}{" "}
                <small className="text-[8px] text-gray-400 uppercase">
                  / día
                </small>
              </span>
            </div>
            {/* Acordeón expansible de características según selección */}
            {booking.selectedCoverage === cov.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                className="mt-3 pt-3 border-t border-gray-100 overflow-hidden"
              >
                <ul className="space-y-2">
                  <li className="text-[10px] flex items-center gap-2 text-gray-700 font-black">
                    Depósito: ${cov.deposit}
                  </li>
                  {cov.features.map((f: any, i: number) => (
                    <li
                      key={i}
                      className={`text-[10px] font-medium flex items-center gap-2 ${
                        f.included
                          ? "text-gray-700"
                          : "text-gray-300 line-through"
                      }`}
                    >
                      {f.included ? "✓" : "✕"} {f.text}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        ))}
      </div>

      <div className="bg-zinc-900 text-white p-5 rounded-2xl flex justify-between items-center">
        <div>
          <span className="block text-[9px] font-black text-zinc-400 uppercase tracking-widest">
            Total Est.
          </span>
          <span className="text-2xl text-green-400 font-bold">
            ${booking.finalGrandTotal.toLocaleString("es-MX")}
          </span>
        </div>
        <button
          type="button"
          onClick={() => {
            booking.setDirection(1);
            booking.setStep(3);
          }}
          className="bg-white text-black px-6 py-3 rounded-xl text-xs font-black uppercase cursor-pointer hover:bg-gray-100 transition-colors"
        >
          Siguiente →
        </button>
      </div>

      <button
        type="button"
        onClick={() => {
          booking.setDirection(-1);
          booking.setStep(1);
        }}
        className="w-full py-2.5 bg-gray-100 text-gray-500 rounded-xl text-xs font-bold uppercase cursor-pointer hover:bg-gray-200 transition-colors"
      >
        ← Regresar
      </button>
    </motion.div>
  );
}