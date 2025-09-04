"use client";

import React from "react";
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

export default function Upsell() {
  return (
    <section
      id="waitlist"
      className="py-20 bg-white"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Title */}
        <h1
          className="mt-8 text-center font-serif font-bold leading-tight"
          style={{
            fontSize: design.typography.sizes.hero,
            color: design.colors.textPrimary,
            marginBottom: "1.5rem"
          }}
        >
          Take your AI <em className="italic">anywhere</em>
        </h1>

        {/* Sub-headline */}
        <p
          className="text-center text-lg font-normal leading-relaxed max-w-2xl mx-auto"
          style={{
            color: design.colors.textSecondary,
            marginBottom: design.spacing.elementGap
          }}
        >
          Join our early waitlist to get first access to offline AI agents powered by Phantom Search.
        </p>

        {/* Waitlist Form */}
        <div className="mt-8 flex items-center justify-center space-x-3 w-full max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900 bg-white text-gray-900 placeholder-gray-500 text-base font-medium"
            style={{
              boxShadow:
                "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)"
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
      </div>
    </section>
  );
}
