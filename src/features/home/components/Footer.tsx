"use client";

import React from "react";

export function Footer() {
  return (
    <footer className="w-full bg-black border-t border-gray-900 py-8 px-4 text-center text-gray-500 text-[10px] uppercase tracking-widest font-bold">
      © {new Date().getFullYear()} RentalCars. Todos los derechos reservados.
    </footer>
  );
}