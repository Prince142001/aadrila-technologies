import React from "react";
import Logo from "../../assets/logo.png";
import Navlinks from "./Navlinks";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-[rgba(255,255,255,0.15)] blur-[20] z-50">
      <div className="px-20">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <a href="/" className="flex items-center gap-2">
              <img
                src={Logo}
                alt="Aadrila Technologies"
                className="h-10 w-auto"
              />
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
              className="bg-btn-primary text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition"
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
