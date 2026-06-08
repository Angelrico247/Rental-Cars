import { MOCK_CARS } from "../../../app/cars/data/carsData";
import { Reservation } from "../types/reservation.types";
import { Car } from "../../cars/types/car.types";

// 🔥 Mocks actualizados con datos de cliente para que el Admin tenga información real que mostrar
export const MOCK_RESERVATIONS: Reservation[] = [
  {
    id: 1,
    car_id: 2, 
    start_date: "2026-06-01",
    end_date: "2026-06-05",
    status: "Confirmed",
    customer_name: "Juan Pablo Jiménez",
    customer_email: "juan.pablo@gmail.com",
    customer_phone: "331-456-7890"
  },
  {
    id: 2,
    car_id: 2, 
    start_date: "2026-06-15",
    end_date: "2026-06-20",
    status: "Confirmed",
    customer_name: "Sofía Rodríguez",
    customer_email: "sofia.rod@outlook.com",
    customer_phone: "552-987-6543"
  },
  {
    id: 3,
    car_id: 5, 
    start_date: "2026-05-28",
    end_date: "2026-06-02",
    status: "Confirmed",
    customer_name: "Carlos Mendoza",
    customer_email: "carlos.m@empresa.com",
    customer_phone: "811-321-7654"
  },
  {
    id: 4,
    car_id: 3, 
    start_date: "2026-06-10",
    end_date: "2026-06-12",
    status: "Confirmed",
    customer_name: "Alejandra Gómez",
    customer_email: "ale.gomez@live.com.mx",
    customer_phone: "449-765-4321"
  }
];

// ==========================================
// 🔥 PERSISTENCIA REFORZADA CON INYECCIÓN DE PRECIOS
// ==========================================

// 1. Obtener todas las reservaciones (Hidratadas con la info real de MOCK_CARS)
export function getAllReservations(): Reservation[] {
  if (typeof window === "undefined") return MOCK_RESERVATIONS;

  const stored = localStorage.getItem("rental_cars_user_reservations");
  const userReservations: Reservation[] = stored ? JSON.parse(stored) : [];

  const rawAllReservations = [...userReservations, ...MOCK_RESERVATIONS];

  // Inyectamos dinámicamente los datos faltantes cruzando con MOCK_CARS
  return rawAllReservations.map((res) => {
    const associatedCar = MOCK_CARS.find((car) => car.id === res.car_id);

    if (!associatedCar) return res;

    // Calculamos el precio total solo si la reserva no lo trae (para arreglar los MOCKS)
    let calculatedTotalPrice = res.total_price;
    if (!calculatedTotalPrice) {
      const start = new Date(res.start_date);
      const end = new Date(res.end_date);
      
      const diffTime = Math.abs(end.getTime() - start.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 1; 
      
      calculatedTotalPrice = diffDays * associatedCar.price_per_day;
    }

    return {
      ...res,
      car_name: res.car_name || associatedCar.model,
      car_image: res.car_image || associatedCar.image_url,
      total_price: calculatedTotalPrice,
    };
  });
}

// 2. Guardar una nueva reservación desde el modal (Ahora incluye los campos del cliente)
export function saveReservation(newRes: Omit<Reservation, "id" | "status">) {
  if (typeof window === "undefined") return;

  const stored = localStorage.getItem("rental_cars_user_reservations");
  const existingUserReservations: Reservation[] = stored ? JSON.parse(stored) : [];

  const fullReservation: Reservation = {
    ...newRes,
    id: `res-${Math.random().toString(36).substring(2, 11)}`,
    status: "Confirmed", // Mantiene el estatus por defecto
  };

  const updated = [fullReservation, ...existingUserReservations];
  localStorage.setItem("rental_cars_user_reservations", JSON.stringify(updated));
}

// ==========================================
// 🛠️ FUNCIONES DE FILTRADO (SIGUEN IGUAL)
// ==========================================

export function getAvailableCars(startStr: string, endStr: string): Car[] {
  if (!startStr || !endStr) return MOCK_CARS;

  const searchStart = new Date(startStr);
  const searchEnd = new Date(endStr);
  
  const allReservations = getAllReservations();

  return MOCK_CARS.filter((car) => {
    const hasConflict = allReservations.some((res) => {
      if (res.car_id !== car.id) return false;

      const resStart = new Date(res.start_date);
      const resEnd = new Date(res.end_date);

      return searchStart <= resEnd && searchEnd >= resStart;
    });

    return !hasConflict; 
  });
}

export function getDisabledDatesForCar(carId: number): { start: string; end: string }[] {
  const allReservations = getAllReservations();

  return allReservations
    .filter((res) => res.car_id === carId)
    .map((res) => ({
      start: res.start_date,
      end: res.end_date,
    }));
}

export function cancelReservation(reservationId: number | string): { penalty: number; isPenaltyApplied: boolean } {
  if (typeof window === "undefined") return { penalty: 0, isPenaltyApplied: false };

  const stored = localStorage.getItem("rental_cars_user_reservations");
  if (!stored) return { penalty: 0, isPenaltyApplied: false };

  let userReservations: Reservation[] = JSON.parse(stored);
  
  const reservationToCancel = userReservations.find((res) => res.id === reservationId);
  
  if (!reservationToCancel) return { penalty: 0, isPenaltyApplied: false };

  // --- LÓGICA DE LAS 24 HORAS ---
  const now = new Date();
  const startDate = new Date(reservationToCancel.start_date + "T00:00:00");

  const diffTime = startDate.getTime() - now.getTime();
  const diffHours = diffTime / (1000 * 60 * 60);

  let penalty = 0;
  let isPenaltyApplied = false;

  if (diffHours < 24) {
    isPenaltyApplied = true;
    const associatedCar = MOCK_CARS.find((car) => car.id === reservationToCancel.car_id);
    if (associatedCar) {
      penalty = associatedCar.price_per_day;
    }
  }

  const updatedReservations = userReservations.filter((res) => res.id !== reservationId);
  localStorage.setItem("rental_cars_user_reservations", JSON.stringify(updatedReservations));

  return { penalty, isPenaltyApplied };
}