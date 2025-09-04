"use client";

import React, { useEffect, useState } from "react";
import design from "./designsystem.json";
import ProductDemo from "./ProductDemo";
import Upsell from "./upsell";
import Footer from "./Footer";

export default function Page() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header
        className={`sticky top-0 z-50 w-full bg-white border-b border-gray-200 transition-shadow duration-300 ${
          scrolled ? "shadow-sm" : ""
        }`}
        style={{
          paddingTop: design.spacing.headerPadding,
          paddingBottom: design.spacing.headerPadding,
        }}
      >
        <div className={`${design.grid.container} flex justify-between items-center`}>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-medium text-gray-900">◎</span>
              <span className="text-xl font-medium text-gray-900">Ektos</span>
            </div>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
              Docs - coming soon
            </a>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => {
                const el = document.getElementById("waitlist");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-4 py-2 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200"
              style={{ boxShadow: design.shadows.button }}
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className={`${design.grid.container} ${design.grid.centered}`} style={{ paddingTop: design.spacing.sectionY, paddingBottom: design.spacing.sectionY }}>
        {/* Badge */}
        <div
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-full font-medium"
          style={{
            backgroundColor: design.colors.badgeBg,
            color: design.colors.badgeText,
            fontSize: design.typography.sizes.badge
          }}
        >
          <span>GitHub coming soon</span>
        </div>

        {/* Headline */}
        <h1
          className="mt-8 text-center font-serif font-bold leading-tight"
          style={{
            fontSize: design.typography.sizes.hero,
            color: design.colors.textPrimary,
            marginBottom: "1.5rem"
          }}
        >
          What should we build <em className="italic">offline</em>?
        </h1>

        {/* Sub-headline */}
        <p
          className="text-center text-lg font-normal leading-relaxed max-w-2xl"
          style={{
            color: design.colors.textSecondary,
            marginBottom: design.spacing.elementGap
          }}
        >
          Create apps, debug code, and search docs with AI — no internet required.
        </p>

        {/* Waitlist Form */}
        <div id="hero-waitlist" className="mt-8 flex items-center space-x-3 w-full max-w-md">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 bg-white text-gray-900 placeholder-gray-500 text-base font-medium"
            style={{
              boxShadow:
                "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
            }}
          />
          <button
            type="button"
            className="px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-all duration-200 transform hover:scale-105"
            style={{ boxShadow: design.shadows.button }}
          >
            Join Waitlist →
          </button>
        </div>
      </main>

      {/* Product Demo Section */}
      <ProductDemo />

      {/* Upsell Section */}
      <Upsell />

      {/* Footer */}
      <Footer />
    </div>
  );
}
