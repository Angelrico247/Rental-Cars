"use client";

import React from "react";
import { motion } from "framer-motion";
import { HOURS } from "../../data/BookingModal.constants";

interface StepCalendarProps {
  booking: any;
  variants: any;
}

/**
 * Subcomponente Paso 1: Selección de Fechas de Arrendamiento y Horarios.
 */
export function StepCalendar({ booking, variants }: StepCalendarProps) {
  /**
   * Generación y renderizado dinámico de la matriz de días del mes.
   */
  const renderCalendarDays = () => {
    const year = booking.currentMonth.getFullYear();
    const month = booking.currentMonth.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const totalDaysMonth = new Date(year, month + 1, 0).getDate();
    const cells = [];

    // Celdas vacías del desfase de días de la semana
    for (let i = 0; i < firstDay; i++) {
      cells.push(<div key={`empty-${i}`} className="p-2" />);
    }

    // Inyección de botones por cada día disponible del mes
    for (let day = 1; day <= totalDaysMonth; day++) {
      const date = new Date(year, month, day);
      const dStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(
        day
      ).padStart(2, "0")}`;
      const isPast = date < booking.today;
      const isBlocked = booking.disabledRanges.some(
        (r: any) => date >= new Date(r.start) && date <= new Date(r.end)
      );
      const isStart = booking.startDate === dStr;
      const isEnd = booking.endDate === dStr;
      const isInRange =
        booking.startDate &&
        booking.endDate &&
        date > new Date(booking.startDate) &&
        date < new Date(booking.endDate);

      // Asignación de clases condicionales según el estado de la fecha
      let classes =
        "text-black hover:bg-gray-100 font-medium rounded-md text-center p-2 text-xs transition-all cursor-pointer";
      if (isPast || isBlocked)
        classes =
          "text-gray-300 cursor-not-allowed line-through p-2 text-xs text-center";
      if (isStart || isEnd)
        classes =
          "bg-black text-white font-bold rounded-lg p-2 text-xs text-center cursor-pointer";
      else if (isInRange)
        classes =
          "bg-zinc-100 text-black font-medium p-2 text-xs text-center cursor-pointer";

      cells.push(
        <button
          key={`day-${day}`}
          type="button"
          onClick={() => {
            if (isPast || isBlocked) return;
            if (!booking.startDate || (booking.startDate && booking.endDate)) {
              booking.setStartDate(dStr);
              booking.setEndDate("");
            } else {
              if (new Date(dStr) < new Date(booking.startDate)) {
                booking.setStartDate(dStr);
                booking.setEndDate("");
              } else {
                booking.setEndDate(dStr);
              }
            }
          }}
          className={classes}
        >
          {day}
        </button>
      );
    }
    return cells;
  };

  return (
    <motion.div
      key="step1"
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
      {/* Controles de navegación mensual */}
      <div className="flex justify-between items-center bg-gray-50 p-2 rounded-xl">
        <button
          type="button"
          onClick={() => booking.changeMonth(-1)}
          className="text-[11px] font-bold px-2 cursor-pointer text-black"
        >
          ←
        </button>
        <span className="text-xs font-black uppercase text-black">
          {booking.currentMonth.toLocaleString("es-MX", {
            month: "long",
            year: "numeric",
          })}
        </span>
        <button
          type="button"
          onClick={() => booking.changeMonth(1)}
          className="text-[11px] font-bold px-2 cursor-pointer text-black"
        >
          →
        </button>
      </div>

      {/* Cabecera de días de la semana */}
      <div className="grid grid-cols-7 gap-1 mb-2 text-[10px] text-gray-400 font-bold text-center uppercase">
        <div>Do</div>
        <div>Lu</div>
        <div>Ma</div>
        <div>Mi</div>
        <div>Ju</div>
        <div>Vi</div>
        <div>Sá</div>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">{renderCalendarDays()}</div>

      {/* Selectores de rango horario */}
      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col">
          <label className="text-[9px] font-black text-gray-400 uppercase mb-1">
            Recogida
          </label>
          <select
            value={booking.startTime}
            onChange={(e) => booking.setStartTime(e.target.value)}
            className="text-xs font-bold bg-gray-50 p-2 rounded-lg text-black border border-transparent focus:outline-none focus:border-black cursor-pointer"
          >
            {HOURS.map((h: string) => (
              <option key={h} value={h}>
                {h} hrs
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label className="text-[9px] font-black text-gray-400 uppercase mb-1">
            Entrega
          </label>
          <select
            value={booking.endTime}
            onChange={(e) => booking.setEndTime(e.target.value)}
            className="text-xs font-bold bg-gray-50 p-2 rounded-lg text-black border border-transparent focus:outline-none focus:border-black cursor-pointer"
          >
            {HOURS.map((h: string) => (
              <option key={h} value={h}>
                {h} hrs
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="button"
        disabled={!booking.startDate || !booking.endDate}
        onClick={() => {
          booking.setDirection(1);
          booking.setStep(2);
        }}
        className="w-full py-3 bg-black text-white rounded-lg text-xs font-bold uppercase disabled:opacity-50 cursor-pointer transition-opacity"
      >
        Siguiente →
      </button>
    </motion.div>
  );
}