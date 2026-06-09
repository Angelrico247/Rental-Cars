"use client";

import React from "react";
import { motion } from "framer-motion";

interface StepCustomerDetailsProps {
  booking: any;
  variants: any;
}

/**
 * Subcomponente Paso 3: Formulario de Datos del Conductor y Validación.
 */
export function StepCustomerDetails({ booking, variants }: StepCustomerDetailsProps) {
  const isFormEmpty =
    !booking.customerData.fullName.trim() ||
    !booking.customerData.email.trim() ||
    !booking.customerData.phone.trim() ||
    !booking.customerData.license.trim();

  return (
    <motion.div
      key="step3"
      custom={booking.direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: "tween", duration: 0.5 },
        opacity: { duration: 0.5 },
      }}
      className="space-y-4 text-black w-full"
    >
      <div className="space-y-3">
        {/* Campo: Nombre Completo */}
        <div>
          <label className="block text-[10px] font-black text-black uppercase mb-1">
            Nombre Completo
          </label>
          <input
            type="text"
            placeholder="Juan Pérez"
            value={booking.customerData.fullName}
            onChange={(e) =>
              booking.handleCustomerDataChange("fullName", e.target.value)
            }
            className={`w-full text-xs p-3 bg-gray-50 border rounded-xl focus:outline-none font-medium text-black transition-colors ${
              booking.formErrors.fullName
                ? "border-red-500 focus:border-red-500"
                : "border-gray-100 focus:border-black"
            }`}
          />
          {booking.formErrors.fullName && (
            <span className="text-[10px] text-red-500 font-bold mt-1 block">
              {booking.formErrors.fullName}
            </span>
          )}
        </div>

        {/* Campo: Correo Electrónico */}
        <div>
          <label className="block text-[10px] font-black text-black uppercase mb-1">
            Correo Electrónico
          </label>
          <input
            type="email"
            placeholder="juan@correo.com"
            value={booking.customerData.email}
            onChange={(e) =>
              booking.handleCustomerDataChange("email", e.target.value)
            }
            className={`w-full text-xs p-3 bg-gray-50 border rounded-xl focus:outline-none font-medium text-black transition-colors ${
              booking.formErrors.email
                ? "border-red-500 focus:border-red-500"
                : "border-gray-100 focus:border-black"
            }`}
          />
          {booking.formErrors.email && (
            <span className="text-[10px] text-red-500 font-bold mt-1 block">
              {booking.formErrors.email}
            </span>
          )}
        </div>

        {/* Campos en Paralelo: Teléfono y Licencia */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-[10px] font-black text-black uppercase mb-1">
              Teléfono
            </label>
            <input
              type="tel"
              placeholder="3333333333"
              value={booking.customerData.phone}
              onChange={(e) =>
                booking.handleCustomerDataChange("phone", e.target.value)
              }
              className={`w-full text-xs p-3 bg-gray-50 border rounded-xl focus:outline-none font-medium text-black transition-colors ${
                booking.formErrors.phone
                  ? "border-red-500 focus:border-red-500"
                  : "border-gray-100 focus:border-black"
              }`}
            />
            {booking.formErrors.phone && (
              <span className="text-[10px] text-red-500 font-bold mt-1 block">
                {booking.formErrors.phone}
              </span>
            )}
          </div>

          <div>
            <label className="block text-[10px] font-black text-black uppercase mb-1">
              No. Licencia
            </label>
            <input
              type="text"
              placeholder="ABC12345"
              value={booking.customerData.license}
              onChange={(e) =>
                booking.handleCustomerDataChange("license", e.target.value)
              }
              className={`w-full text-xs p-3 bg-gray-50 border rounded-xl focus:outline-none font-medium text-black transition-colors ${
                booking.formErrors.license
                  ? "border-red-500 focus:border-red-500"
                  : "border-gray-100 focus:border-black"
              }`}
            />
            {booking.formErrors.license && (
              <span className="text-[10px] text-red-500 font-bold mt-1 block">
                {booking.formErrors.license}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Footer de Pago */}
      <div className="bg-zinc-900 text-white p-5 rounded-2xl space-y-4 mt-2">
        <div className="flex justify-between items-center">
          <div>
            <span className="block text-[9px] font-black text-zinc-400 uppercase tracking-widest">
              Total a Pagar
            </span>
            <span className="text-2xl text-green-400 font-bold">
              ${booking.finalGrandTotal.toLocaleString("es-MX")}
            </span>
          </div>
          <button
            type="button"
            disabled={isFormEmpty}
            onClick={booking.handleFinalPayment}
            className="bg-white text-black px-6 py-3 rounded-xl text-xs font-black uppercase cursor-pointer hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Pagar
          </button>
        </div>
      </div>

      <button
        type="button"
        onClick={() => {
          booking.setDirection(-1);
          booking.setStep(2);
        }}
        className="w-full py-2.5 bg-gray-100 text-gray-500 rounded-xl text-xs font-bold uppercase cursor-pointer hover:bg-gray-200 transition-colors"
      >
        ← Regresar
      </button>
    </motion.div>
  );
}