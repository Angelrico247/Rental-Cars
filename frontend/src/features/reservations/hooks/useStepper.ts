import { useState } from "react";

export function useStepper(initialStep = 1, totalSteps = 3) {
  const [step, setStep] = useState(initialStep);
  const [direction, setDirection] = useState(1);

  const nextStep = () => {
    if (step < totalSteps) {
      setDirection(1);
      setStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setDirection(-1);
      setStep((prev) => prev - 1);
    }
  };

  const resetStepper = () => {
    setStep(initialStep);
    setDirection(1);
  };

  return {
    step,
    setStep,
    direction,
    setDirection,
    nextStep,
    prevStep,
    resetStepper,
  };
}