"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getAllReservations, cancelReservation } from "../../features/reservations/data/reservationsData";
import { Reservation } from "../../features/reservations/types/reservation.types";
import { Footer } from "../../features/home/components/Footer";
import { Modal } from "../../components/ui/Modal";
import { BusinessSection } from "../../features/home/components/BusinessSection";

export default function RentalsPage() {
  const [rentals, setRentals] = useState<Reservation[]>([]);
  
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [selectedRentalToCancel, setSelectedRentalToCancel] = useState<Reservation | null>(null);
  const [cancellationInfo, setCancellationInfo] = useState<{ penalty: number; applied: boolean } | null>(null);
  const [successInfo, setSuccessInfo] = useState<{ isOpen: boolean; message: string; isPenalty: boolean } | null>(null);

  const loadRentals = () => {
    setRentals(getAllReservations());
  };

  useEffect(() => {
    loadRentals();
  }, []);

  /**
   * Resuelve la ruta de la imagen agregando el prefijo del subdirectorio
   * de GitHub Pages para recursos locales estáticos.
   */
  const getFinalImageSrc = (url: string | undefined) => {
    if (!url) return "";
    return url.startsWith("/") ? `/Rental-Cars${url}` : url;
  };

  const handleOpenCancelConfirmation = (rental: Reservation) => {
    setSelectedRentalToCancel(rental);
    
    const now = new Date();
    const startDate = new Date(rental.start_date + "T00:00:00");
    const diffHours = (startDate.getTime() - now.getTime()) / (1000 * 60 * 60);
    
    if (diffHours < 24) {
      const oneDayPrice = rental.total_price ? Math.round(rental.total_price / 3) : 1200; 
      setCancellationInfo({ penalty: oneDayPrice, applied: true });
    } else {
      setCancellationInfo({ penalty: 0, applied: false });
    }
    
    setIsCancelModalOpen(true);
  };

  const handleConfirmCancel = () => {
    if (!selectedRentalToCancel) return;

    const result = cancelReservation(selectedRentalToCancel.id);

    if (result.isPenaltyApplied) {
      setSuccessInfo({
        isOpen: true,
        message: `Cancelación procesada. Al faltar menos de 24 horas para el inicio del servicio, se aplicó un cargo de penalización de $${result.penalty.toLocaleString()} MXN correspondiente a un día de renta.`,
        isPenalty: true,
      });
    } else {
      setSuccessInfo({
        isOpen: true,
        message: "Tu reservación ha sido cancelada con éxito sin cargos adicionales. El reembolso del 100% se aplicará a tu método de pago original.",
        isPenalty: false,
      });
    }

    setIsCancelModalOpen(false);
    setSelectedRentalToCancel(null);
    setCancellationInfo(null);
    loadRentals();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between pt-20">
      
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow">
        <div className="mb-10 border-b border-gray-200 pb-6">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Panel de Control</span>
          <h1 className="text-3xl font-black text-black uppercase tracking-tight mt-1">Mis Reservaciones</h1>
        </div>

        {rentals.length > 0 ? (
          <div className="m-auto space-y-4 max-w-4xl">
            {rentals.map((rental) => (
              <div
                key={rental.id}
                className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:border-black transition-colors shadow-sm"
              >
                <div className="flex items-center gap-5">
                  {rental.car_image && (
                    <div className="w-24 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 hidden sm:block">
                      <img 
                        src={getFinalImageSrc(rental.car_image)} 
                        alt={rental.car_name} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                  )}
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-sm font-black text-black uppercase tracking-wider">{rental.car_name}</h3>
                      <span className="text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded bg-green-50 text-green-700 border border-green-200">
                        {rental.status}
                      </span>
                    </div>
                    <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider">📅 {rental.start_date} | {rental.end_date}</p>
                  </div>
                </div>

                <div className="w-full sm:w-auto flex sm:flex-col items-center sm:items-end justify-between sm:justify-center border-t sm:border-t-0 pt-4 sm:pt-0 border-gray-100 gap-3">
                  <div className="sm:text-right">
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider leading-none">Total</p>
                    <p className="text-lg font-black text-black mt-0.5">${rental.total_price?.toLocaleString()}</p>
                  </div>
                  
                  {String(rental.id).startsWith("res-") && (
                    <button
                      onClick={() => handleOpenCancelConfirmation(rental)}
                      className="text-[10px] font-black uppercase tracking-widest text-red-500 border-b border-red-200 pb-0.5 hover:text-red-700 hover:border-red-700 transition-colors cursor-pointer"
                    >
                      Cancelar Reserva
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-xl border border-gray-100 shadow-sm max-w-4xl m-auto">
            <p className="text-gray-500 font-medium">No tienes ninguna reservación registrada.</p>
          </div>
        )}
      </div>

      {/* MODAL 1: CONFIRMACIÓN DE CANCELACIÓN */}
      <Modal
        isOpen={isCancelModalOpen}
        onClose={() => { setIsCancelModalOpen(false); setSelectedRentalToCancel(null); }}
        maxWidth="md"
      >
        <div className="p-8 space-y-6 text-center">
          <div className="w-12 h-12 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto text-xl font-bold border border-red-100">
            ⚠
          </div>
          
          <div className="space-y-2">
            <h3 className="text-lg font-black uppercase tracking-tight text-black">
              ¿Seguro que quieres cancelar?
            </h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Estás a punto de cancelar la reservación del vehículo <span className="font-bold text-black">{selectedRentalToCancel?.car_name}</span>. Esta acción no se puede deshacer.
            </p>
          </div>

          {cancellationInfo?.applied ? (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-left">
              <p className="text-red-700 font-bold text-xs uppercase tracking-wider">⚡ Penalización Aplicada:</p>
              <p className="text-red-600 text-[11px] leading-relaxed mt-1">
                Faltan menos de 24 horas para el inicio de la renta. De acuerdo a las políticas de la empresa, se realizará un cargo único de <span className="font-bold">${cancellationInfo.penalty.toLocaleString()} MXN</span> (equivalente a 1 día completo de alquiler).
              </p>
            </div>
          ) : (
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-left">
              <p className="text-green-700 font-bold text-xs uppercase tracking-wider">✓ Cancelación Gratuita:</p>
              <p className="text-green-600 text-[11px] leading-relaxed mt-1">
                Estás dentro del plazo permitido. Se realizará un reembolso íntegro del 100% a tu método de pago sin penalizaciones.
              </p>
            </div>
          )}

          <div className="flex gap-3 pt-2">
            <button
              onClick={() => { setIsCancelModalOpen(false); setSelectedRentalToCancel(null); }}
              className="flex-1 py-3 text-xs font-bold uppercase tracking-widest text-gray-500 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
            >
              No, regresar
            </button>
            <button
              onClick={handleConfirmCancel}
              className="flex-1 py-3 text-xs font-bold uppercase tracking-widest text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors shadow-md shadow-red-950/10 cursor-pointer"
            >
              Sí, cancelar
            </button>
          </div>
        </div>
      </Modal>

      {/* MODAL 2: FEEDBACK / ÉXITO DE LA ACCIÓN */}
      <Modal
        isOpen={!!successInfo?.isOpen}
        onClose={() => setSuccessInfo(null)}
        maxWidth="md"
      >
        <div className="p-8 space-y-6 text-center">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto text-lg font-bold border ${
            successInfo?.isPenalty 
              ? "bg-amber-50 text-amber-600 border-amber-100" 
              : "bg-green-50 text-green-600 border-green-100"
          }`}>
            {successInfo?.isPenalty ? "🔔" : "✓"}
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-black uppercase tracking-tight text-black">
              {successInfo?.isPenalty ? "Cancelación con Cargo" : "Reserva Cancelada"}
            </h3>
            <p className="text-gray-500 text-xs leading-relaxed max-w-sm mx-auto">
              {successInfo?.message}
            </p>
          </div>

          <div className="pt-2">
            <button
              onClick={() => setSuccessInfo(null)}
              className="w-full py-3 text-xs font-bold uppercase tracking-widest text-white bg-black rounded-lg hover:bg-zinc-800 transition-colors shadow-md shadow-zinc-950/10 cursor-pointer"
            >
              Entendido
            </button>
          </div>
        </div>
      </Modal>

      {/* INSTRUCCIONES DE RECOLECCIÓN (REEMPLAZANDO STEPSSECTION) */}
      <section className="bg-white border-t border-b border-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Todo listo</span>
            <h2 className="text-2xl font-black text-black uppercase tracking-tight mt-1">¿Cómo recojo mi carro?</h2>
          </div>
          
          <div className=" border border-gray-200 rounded-xl p-6 sm:p-8 space-y-6">
            <ul className="text-gray-600 text-xs sm:text-sm space-y-5 list-none pl-0">
              <li className="flex items-start gap-3">
                <span className="text-black font-extrabold text-base bg-white border border-gray-200 w-7 h-7 flex items-center justify-center rounded-full shadow-sm flex-shrink-0">1</span>
                <span className="pt-0.5">
                  <strong className="text-black uppercase tracking-tight block mb-0.5">Llega con tiempo</strong> 
                  Te recomendamos caerle a la sucursal unos 15 minutos antes de tu hora para hacer el papeleo rápido y no quitarte tiempo de tu viaje.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-black font-extrabold text-base bg-white border border-gray-200 w-7 h-7 flex items-center justify-center rounded-full shadow-sm flex-shrink-0">2</span>
                <span className="pt-0.5">
                  <strong className="text-black uppercase tracking-tight block mb-0.5">Tus documentos a la mano</strong> 
                  No olvides traer tu identificación oficial (INE o pasaporte) y tu licencia de conducir vigente. Tienen que ser en físico, ¿va?
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-black font-extrabold text-base bg-white border border-gray-200 w-7 h-7 flex items-center justify-center rounded-full shadow-sm flex-shrink-0">3</span>
                <span className="pt-0.5">
                  <strong className="text-black uppercase tracking-tight block mb-0.5">Tarjeta de crédito para el depósito</strong> 
                  Necesitamos una tarjeta de crédito física a tu nombre para dejar el bloqueo de la garantía. En cuanto regreses el carro, se libera de inmediato.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-black font-extrabold text-base bg-white border border-gray-200 w-7 h-7 flex items-center justify-center rounded-full shadow-sm flex-shrink-0">4</span>
                <span className="pt-0.5">
                  <strong className="text-black uppercase tracking-tight block mb-0.5">Revisa tu nave</strong> 
                  Antes de arrancar, dale una vuelta al carro junto con nuestro asesor para checar que todo esté en orden, registrar cualquier detalle y que te vayas con total tranquilidad.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <BusinessSection />

      <Footer />
    </div>
  );
}