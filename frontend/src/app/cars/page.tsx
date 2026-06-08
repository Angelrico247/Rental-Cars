"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { CarCard } from "../../features/cars/components/CarCard";
import { Car } from "../../features/cars/types/car.types";
import { MOCK_CARS } from "../../app/cars/data/carsData"; 
import { getAvailableCars } from "../../features/reservations/data/reservationsData"; 

// Importación del Modal Único
import BookingModal from "../../features/reservations/components/BookingModal";
import { Footer } from "../../features/home/components/Footer";
import { PromoSection } from "../../features/home/components/PromoSection";
import { StepsSection } from "../../features/home/components/StepsSection";
import { BusinessSection } from "../../features/home/components/BusinessSection";

const CATEGORIES = [
  { id: "all", name: "Todos" },
  { id: "sedan", name: "Sedanes" },
  { id: "suv", name: "SUVs" },
  { id: "hatchback", name: "Compactos" },
  { id: "offroad", name: "Todoterreno" },
];

// 1. Toda tu lógica y diseño original se quedan en este componente interno
function CarsContent() {
  const searchParams = useSearchParams();
  const [filteredCars, setFilteredCars] = useState<Car[]>(MOCK_CARS);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  const startDate = searchParams.get("start") || "";
  const endDate = searchParams.get("end") || "";

  useEffect(() => {
    let baseCars = MOCK_CARS;
    if (startDate && endDate) {
      baseCars = getAvailableCars(startDate, endDate);
    }

    if (selectedCategory !== "all") {
      baseCars = baseCars.filter((car) => car.car_type === selectedCategory);
    }

    setFilteredCars(baseCars);
  }, [startDate, endDate, selectedCategory]);

  return (
    // Forzamos un contenedor Flex vertical de pantalla completa para estructurar el Footer hasta abajo
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between pt-20">
      
      {/* Contenedor principal del contenido del catálogo */}
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow">
        
        {/* ENCABEZADO */}
        <div className="mb-8">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
            Nuestra Flota
          </span>
          <h1 className="text-3xl font-black text-black uppercase tracking-tight mt-1">
            Explora los vehículos
          </h1>
          {startDate && endDate ? (
            <p className="text-green-600 text-xs font-bold uppercase tracking-wider mt-2">
              📅 Mostrando autos disponibles del {startDate} al {endDate}
            </p>
          ) : (
            <p className="text-gray-500 text-sm mt-2">
              Selecciona el auto ideal para tu próxima experience.
            </p>
          )}
        </div>

        {/* BOTONES DE FILTRADO POR CATEGORÍA */}
        <div className="flex flex-wrap gap-2 mb-10 border-b border-gray-200 pb-5">
          {CATEGORIES.map((category) => {
            const isActive = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-black text-white shadow-md shadow-gray-900/10"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {category.name}
              </button>
            );
          })}
        </div>

        {/* GRID RESPONSIVO */}
        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map((car) => (
              <CarCard 
                key={car.id} 
                car={car} 
                onSelectCar={(chosenCar) => setSelectedCar(chosenCar)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-xl border border-gray-100 shadow-sm">
            <p className="text-gray-500 font-medium">
              No hay vehículos disponibles en la categoría seleccionada.
            </p>
            {selectedCategory !== "all" && (
              <button
                onClick={() => setSelectedCategory("all")}
                className="mt-4 inline-block text-xs font-bold uppercase tracking-wider text-black underline underline-offset-4 cursor-pointer"
              >
                Ver todos los vehículos
              </button>
            )}
          </div>
        )}
      </div>

      {/* INSTANCIACIÓN DEL MODAL DE RESERVA ÚNICO */}
      {selectedCar && (
        <BookingModal
          isOpen={selectedCar !== null}
          onClose={() => setSelectedCar(null)}
          car={selectedCar}
        />
      )}
      <PromoSection/>
      <StepsSection/>
      <BusinessSection/>

      {/* El Footer queda fuera del contenedor centrado, tomando el 100% del ancho real */}
      <Footer />

    </div>
  );
}

// 2. Exportación por defecto obligatoria envuelta en Suspense para que no rompa el pnpm deploy
export default function CarsPage() {
  return (
    <Suspense 
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center space-y-2">
            <div className="w-8 h-8 border-4 border-black border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Cargando flota...</p>
          </div>
        </div>
      }
    >
      <CarsContent />
    </Suspense>
  );
}