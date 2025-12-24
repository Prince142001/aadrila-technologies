import React from "react";
import Logo from "../../assets/logo.png";
import Navlinks from "./Navlinks";

function Navbar() {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <a href="/" className="flex items-center gap-2">
              <img
                src={Logo}
                alt="Aadrila Technologies"
                className="h-10 w-auto"
              />
              <span className="text-lg font-semibold tracking-wide">
                AADRILA <span className="font-normal">TECHNOLOGIES</span>
              </span>
            </a>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Navlinks />
          </nav>

          {/* CTA Button */}
          <div>
            <a
              href="#"
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition"
            >
              Get a Demo
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
