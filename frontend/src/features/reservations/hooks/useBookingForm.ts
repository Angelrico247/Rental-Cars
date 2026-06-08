import { useState, useEffect } from "react";

const INITIAL_CUSTOMER_DATA = { fullName: "", email: "", phone: "", license: "" };

export function useBookingForm(isOpen: boolean) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("10:00");
  const [endTime, setEndTime] = useState("10:00");
  const [selectedCoverage, setSelectedCoverage] = useState("ligero");
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState("");

  const [customerData, setCustomerData] = useState(INITIAL_CUSTOMER_DATA);
  const [formErrors, setFormErrors] = useState(INITIAL_CUSTOMER_DATA);

  const handleCustomerDataChange = (key: string, value: string) => {
    setCustomerData((prev) => ({ ...prev, [key]: value }));
  };

  // Limpieza centralizada y segura al abrir/cerrar
  useEffect(() => {
    if (isOpen) {
      setStartDate("");
      setEndDate("");
      setStartTime("10:00");
      setEndTime("10:00");
      setSelectedCoverage("ligero");
      setCurrentMonth(new Date());
      setShowSuccess(false);
      setError("");
      setCustomerData(INITIAL_CUSTOMER_DATA);
      setFormErrors(INITIAL_CUSTOMER_DATA);
    }
  }, [isOpen]);

  return {
    startDate, setStartDate,
    endDate, setEndDate,
    startTime, setStartTime,
    endTime, setEndTime,
    selectedCoverage, setSelectedCoverage,
    currentMonth, setCurrentMonth,
    showSuccess, setShowSuccess,
    error, setError,
    customerData, handleCustomerDataChange,
    formErrors, setFormErrors,
  };
}