"use client";

import React, { useState } from "react";
import { HeroSection } from "./components/HeroSection";
import { PartnersSection } from "./components/PartnerSection";
import { StepsSection } from "./components/StepsSection";
import { FleetSection } from "./components/FleetSection";
import { PromoSection } from "./components/PromoSection";
import { RequirementsSection } from "./components/RequerimentsSection";
import { BusinessSection } from "./components/BusinessSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { FaqSection } from "./components/FaqSection";
import { Footer } from "./components/Footer";

export default function LandingPage() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (startDate && endDate) {
      window.location.href = `/cars?start=${startDate}&end=${endDate}`;
    }
  };

  return (
    <div className="w-full bg-white text-black min-h-screen font-sans">
      <HeroSection
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        onSearch={handleSearch}
      />

      <StepsSection />

      {/* Alianzas y logos corporativos justo debajo del buscador */}
      <PartnersSection />

      {/* Promociones y tarjetas de descuento */}
      <PromoSection />

      <FleetSection />

      <RequirementsSection />

      <FeaturesSection />

      <TestimonialsSection />

      <FaqSection />

      {/* Banner Negro Corporativo B2B */}
      <BusinessSection />

      <Footer />
    </div>
  );
}
