"use client";

import React from "react";
import { Car } from "../types/car.types";

interface CarCardProps {
  car: Car;
  onSelectCar: (car: Car) => void;
}

/**
 * Componente de tarjeta para la visualización individual y selección de un vehículo.
 */
export const CarCard: React.FC<CarCardProps> = ({ car, onSelectCar }) => {
  
  /**
   * Formatea un valor numérico a formato de moneda local (MXN).
   */
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: "MXN",
      maximumFractionDigits: 0,
    }).format(price);
  };

  /**
   * Determina la ruta final de la imagen resolviendo el prefijo para GitHub Pages
   * en caso de ser un recurso local.
   */
  const getFinalImageSrc = (url: string) => {
    if (!url) return "";
    return url.startsWith("/") ? `/Rental-Cars${url}` : url;
  };

  return (
    <div className="bg-white border border-gray-100 rounded-lg overflow-hidden hover:shadow-lg hover:border-gray-200 transition-all duration-300 flex flex-col">
      {/* Contenedor multimedia del vehículo */}
      <div className="w-full h-56 bg-gray-100 relative overflow-hidden">
        {car.image_url ? (
          <img
            src={getFinalImageSrc(car.image_url)}
            alt={`${car.brand} ${car.model}`}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs uppercase tracking-wider">
            Sin Foto
          </div>
        )}

        {/* Indicador de disponibilidad */}
        <span
          className={`absolute top-3 right-3 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded backdrop-blur-md ${
            car.is_available
              ? "bg-green-500/90 text-white"
              : "bg-red-500/90 text-white"
          }`}
        >
          {car.is_available ? "Disponible" : "Rentado"}
        </span>
      </div>

      {/* Bloque de información general y especificaciones técnicas */}
      <div className="p-6 flex flex-col grow">
        <h3 className="text-lg font-bold text-gray-950 uppercase tracking-tight mb-4">
          {car.brand} {car.model}
        </h3>

        <div className="mb-6">
          <span className="text-xl font-extrabold text-black">
            {formatPrice(car.price_per_day)}
          </span>
          <span className="text-gray-400 text-sm font-medium tracking-wide">
            {" "}
            / día
          </span>
        </div>

        {/* Ficha técnica resumida */}
        <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-xs font-semibold uppercase tracking-wider text-gray-600 border-t border-gray-50 pt-5">
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
            <span>{car.car_type}</span>
          </div>

          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>{car.transmission}</span>
          </div>

          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            <span>4 Personas</span>
          </div>

          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
              />
            </svg>
            <span>{car.fuel_type}</span>
          </div>

          <div className="flex items-center gap-2 col-span-2">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <span>180 CV (Potencia)</span>
          </div>
        </div>

        {/* Acción de selección del vehículo */}
        <div className="mt-8 pt-4 border-t border-gray-100">
          <button
            onClick={() => onSelectCar(car)}
            type="button"
            disabled={!car.is_available}
            className="w-full bg-black hover:bg-gray-800 disabled:bg-gray-200 disabled:text-gray-400 text-white text-xs font-bold uppercase tracking-widest py-3.5 rounded transition-colors cursor-pointer"
          >
            Reservar Vehículo
          </button>
        </div>
      </div>
    </div>
  );
};