import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-[#0F172A] px-6 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-center sm:justify-start gap-8">
        {/* Brand */}
        <div className="text-white text-xl font-semibold">
          Code<span className="text-blue-500">Saver</span>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-6 text-base font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400"
                : "text-white hover:text-blue-300 transition-colors"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/pastes"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400"
                : "text-white hover:text-blue-300 transition-colors"
            }
          >
            Paste
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
