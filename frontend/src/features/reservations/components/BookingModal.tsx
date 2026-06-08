"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Car } from "../../cars/types/car.types";
import { useBooking } from "../hooks/useBooking";
import { StepCalendar } from "./steps/StepCalendar";
import { StepCoverages } from "./steps/StepCoverages";
import { StepCustomerDetails } from "./steps/StepCustomerDetails";
import { SuccessView } from "./steps/SuccessView";

// 1. Importamos la función de persistencia que creamos
import { saveReservation } from "../data/reservationsData";

interface BookingModalProps {
  car: Car;
  isOpen: boolean;
  onClose: () => void;
}

const stepVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 150 : -150,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 150 : -150,
    opacity: 0,
  }),
};

export default function BookingModal({ car, isOpen, onClose }: BookingModalProps) {
  const booking = useBooking(car, isOpen, onClose);

  // 2. Efecto para escuchar cuándo la reserva fue exitosa y guardarla en LocalStorage
  useEffect(() => {
    if (booking.showSuccess) {
      const startStr = booking.startDate || new Date().toISOString().split('T')[0];
      const endStr = booking.endDate || new Date().toISOString().split('T')[0];
  
      const start = new Date(startStr);
      const end = new Date(endStr);
      const diffTime = Math.abs(end.getTime() - start.getTime());
      const totalDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 1;
      const totalPrice = car.price_per_day * totalDays;
  
      //  Agregamos las propiedades del cliente que te estaba pidiendo TypeScript
      saveReservation({
        car_id: car.id,
        car_name: `${car.brand} ${car.model}`,
        car_image: car.image_url,
        start_date: startStr,
        end_date: endStr,
        total_price: totalPrice,
        // 👇 REVISA AQUÍ: Ajusta estos nombres según cómo se llamen los estados dentro de tu hook "booking"
        customer_name: booking.customerData.fullName || "Cliente Demo",
        customer_email: booking.customerData.email || "demo@correo.com",
        customer_phone: booking.customerData.phone || "333-123-4567"
      });
    }
  }, [booking.showSuccess, car, booking.startDate, booking.endDate, booking.customerData.fullName, booking.customerData.email, booking.customerData.phone]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="absolute inset-0" onClick={onClose} />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-white w-full max-w-md rounded-2xl p-6 shadow-2xl border border-gray-100 max-h-[92vh] overflow-y-auto relative flex flex-col text-black z-10"
          >
            {/* Encabezado del Modal (Se oculta en la pantalla Success) */}
            {!booking.showSuccess && (
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-[10px] bg-zinc-100 text-zinc-600 font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                    Paso {booking.step} de 3
                  </span>
                  <h3 className="text-lg font-black uppercase text-black tracking-tight mt-1">
                    {booking.step === 1 && `Reservar ${car.brand}`}
                    {booking.step === 2 && "Elige tu Cobertura"}
                    {booking.step === 3 && "Datos del Conductor"}
                  </h3>
                  <p className="text-gray-500 text-xs font-medium">
                    {car.model} • ${car.price_per_day}/día
                  </p>
                </div>
                <button 
                  type="button" 
                  onClick={onClose} 
                  className="text-gray-400 hover:text-black text-sm font-bold cursor-pointer transition-colors"
                >
                  ✕
                </button>
              </div>
            )}

            {/* Inyección de Pasos Desacoplados */}
            <div className="relative flex-1 flex flex-col justify-between">
              <AnimatePresence mode="wait" custom={booking.direction}>
                {booking.showSuccess ? (
                  <SuccessView onClose={onClose} />
                ) : booking.step === 1 ? (
                  <StepCalendar booking={booking} variants={stepVariants} />
                ) : booking.step === 2 ? (
                  <StepCoverages booking={booking} variants={stepVariants} />
                ) : (
                  <StepCustomerDetails booking={booking} variants={stepVariants} />
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}