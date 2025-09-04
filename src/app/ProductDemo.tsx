"use client";

import React, { useState } from "react";
import design from "./designsystem.json";

const slides = [
  {
    title: "Ask a coding question",
    description: "Phantom Search pulls in local docs."
  },
  {
    title: "Debugging an error",
    description: "Assistant explains error and suggests fix."
  },
  {
    title: "Generate code",
    description: "Example of generating a function offline."
  }
];

export default function ProductDemo() {
  const [current, setCurrent] = useState(0);

  const handleNext = () => setCurrent((prev) => (prev + 1) % slides.length);
  const handlePrev = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2
          className="text-4xl font-serif font-bold mb-4"
          style={{ color: design.colors.textPrimary }}
        >
          How It Works
        </h2>
        <p
          className="text-lg text-gray-600 mb-12"
          style={{ color: design.colors.textSecondary }}
        >
          See Phantom Search and offline AI in action.
        </p>

        {/* Tabs with Title + Description */}
        <div className="flex justify-center space-x-16 mb-10">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`flex flex-col items-center max-w-xs ${
                current === index ? "text-gray-900" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <span className="font-serif text-lg">
                {slide.title}
              </span>
              <span className="mt-2 text-sm text-gray-600 text-center leading-snug">
                {slide.description}
              </span>
              <div
                className={`mt-2 w-8 h-0.5 ${
                  current === index
                    ? "bg-gray-900"
                    : "bg-transparent"
                }`}
              ></div>
            </button>
          ))}
        </div>

        {/* Demo Container */}
        <div className="relative bg-white rounded-xl shadow-2xl p-8 min-h-[350px] flex flex-col items-center justify-center">
          {/* Placeholder Demo Area */}
          <div className="w-full h-56 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">[ Demo Placeholder ]</span>
          </div>

          {/* Arrows inside container */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center shadow hover:bg-gray-300 transition"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center shadow hover:bg-gray-300 transition"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
