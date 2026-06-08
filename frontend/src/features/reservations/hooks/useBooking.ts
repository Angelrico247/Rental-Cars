import { useStepper } from "./useStepper";
import { useBookingForm } from "./useBookingForm";
import { Car } from "../../../app/cars/types/cars.types";
import { getDisabledDatesForCar } from "../data/reservationsData";
import { COVERAGES } from "../data/BookingModal.constants";

export function useBooking(car: Car, isOpen: boolean, onClose: () => void) {
  // Instanciamos los submódulos de lógica
  const stepper = useStepper(1, 3);
  const form = useBookingForm(isOpen);

  // Reiniciar el stepper de navegación de forma síncrona con el ciclo del formulario
  if (!isOpen && stepper.step !== 1) {
    stepper.resetStepper();
  }

  // Carga de fechas bloqueadas
  const disabledRanges = getDisabledDatesForCar(car.id);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Lógica de negocio abstracta: Cálculo de días ponderados
  const totalDays = (() => {
    if (!form.startDate || !form.endDate) return 0;
    const startD = new Date(form.startDate.split("-").map(Number)[0], form.startDate.split("-").map(Number)[1] - 1, form.startDate.split("-").map(Number)[2]);
    const endD = new Date(form.endDate.split("-").map(Number)[0], form.endDate.split("-").map(Number)[1] - 1, form.endDate.split("-").map(Number)[2]);
    
    let diff = Math.ceil((endD.getTime() - startD.getTime()) / (1000 * 60 * 60 * 24));
    if (diff === 0) diff = 1;

    const [sH] = form.startTime.split(":").map(Number);
    const [eH] = form.endTime.split(":").map(Number);
    if (eH > sH + 2) diff += 1;
    
    return diff;
  })();

  // Operaciones financieras
  const carTotalPrice = totalDays * car.price_per_day;
  const activeCoverage = COVERAGES.find((c) => c.id === form.selectedCoverage);
  const totalCoveragePrice = totalDays * (activeCoverage?.price_per_day || 0);
  const finalGrandTotal = carTotalPrice + totalCoveragePrice;

  const changeMonth = (offset: number) =>
    form.setCurrentMonth(new Date(form.currentMonth.getFullYear(), form.currentMonth.getMonth() + offset, 1));

  // Validación nativa del flujo del cliente
  const validateForm = (): boolean => {
    const errors = { fullName: "", email: "", phone: "", license: "" };
    let isValid = true;

    if (!form.customerData.fullName.trim()) {
      errors.fullName = "El nombre completo es requerido.";
      isValid = false;
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(form.customerData.fullName)) {
      errors.fullName = "El nombre no debe contener números ni símbolos.";
      isValid = false;
    }

    if (!form.customerData.email.trim()) {
      errors.email = "El correo electrónico es requerido.";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.customerData.email)) {
      errors.email = "Por favor, ingresa un correo electrónico válido.";
      isValid = false;
    }

    if (!form.customerData.phone.trim()) {
      errors.phone = "El número de teléfono es requerido.";
      isValid = false;
    } else if (!/^\d{10}$/.test(form.customerData.phone)) {
      errors.phone = "El teléfono debe contener exactamente 10 dígitos numéricos.";
      isValid = false;
    }

    if (!form.customerData.license.trim()) {
      errors.license = "El número de licencia es requerido.";
      isValid = false;
    } else if (form.customerData.license.trim().length < 5) {
      errors.license = "La licencia debe tener al menos 5 caracteres.";
      isValid = false;
    }

    form.setFormErrors(errors);
    return isValid;
  };

  const handleFinalPayment = () => {
    if (validateForm()) {
      form.setShowSuccess(true);
    }
  };

  // Exponemos una API unificada para que no tengas que modificar tus componentes visuales (StepCalendar, StepCoverages, etc.)
  return {
    ...stepper,
    ...form,
    disabledRanges,
    today,
    totalDays,
    finalGrandTotal,
    changeMonth,
    handleFinalPayment,
  };
}