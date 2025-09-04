import React from "react";
import design from "./designsystem.json";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-gray-200 bg-white">
      <div className={`${design.grid.container} px-6 py-6`}>
        <div className="flex items-center justify-center md:justify-between">
          {/* Left Section: Logo + Text */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-medium text-gray-900">◎</span>
            <span className="text-sm text-gray-600">
              Ektos © {currentYear}. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
