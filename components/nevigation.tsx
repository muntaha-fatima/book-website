// components/Navbar.tsx
"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";


// Refined color palette for a professional look
const COLORS = {
  primary: "text-emerald-700",
  primaryHover: "hover:text-emerald-900",
  secondary: "text-amber-600",
  background: "bg-white",
  border: "border-emerald-200",
  logoGradient: "from-emerald-600 to-emerald-800",
  accent: "bg-emerald-50",
};

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Books", href: "/book/slug" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle mobile menu with smooth transition
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header
      className={`sticky top-0 z-50 ${COLORS.background} backdrop-blur-lg border-b ${COLORS.border} shadow-sm transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand Name */}
       <div className="flex items-center gap-3 shrink-0">
  <Link href="/" className="flex items-center gap-2 group">
    <div
      className={`w-12 h-12 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-800 text-white flex items-center justify-center shadow-inner border border-emerald-300/30 group-hover:scale-105 group-hover:shadow-xl transition-all duration-300`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="h-6 w-6"
      >
        {/* Updated SVG: Stylized book with a light motif */}
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4v2m0 0a8 8 0 00-8 8v4h16v-4a8 8 0 00-8-8zm-4 8h8m-8 2h8"
        />
      </svg>
    </div>
    <span
      className={`text-xl sm:text-lg font-serif font-bold tracking-normal text-emerald-700 group-hover:text-emerald-900 transition-colors duration-300`}
    >
      Noor-e-Kitab
    </span>
  </Link>
</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-gray-700 font-medium text-sm uppercase tracking-wide ${COLORS.primaryHover} transition-colors after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-emerald-600 after:transition-all hover:after:w-full`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Utility Icons & Auth Buttons */}
          <div className="flex items-center space-x-5">
            <button
              aria-label="Search"
              className={`hidden md:block text-gray-600 ${COLORS.primaryHover} p-2 rounded-full ${COLORS.accent} hover:bg-emerald-100 transition-colors`}
            >
             
            </button>
            <button
              aria-label="Shopping Cart"
              className={`hidden md:block text-gray-600 ${COLORS.primaryHover} p-2 rounded-full ${COLORS.accent} hover:bg-emerald-100 transition-colors`}
            >
             
            </button>
           

            {/* Mobile: Menu Toggle */}
            <button
              className="md:hidden text-gray-700 p-2 rounded-full hover:bg-emerald-100 transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle mobile menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile: Dropdown Menu */}
      <div
        className={`md:hidden ${COLORS.background} border-t ${COLORS.border} shadow-sm overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={toggleMenu}
              className={`block text-gray-800 ${COLORS.primaryHover} font-medium py-2 px-3 rounded-md hover:bg-emerald-50 transition-colors`}
            >
              {link.name}
            </Link>
          ))}
          <hr className="border-gray-200" />
          <div className="py-2 space-y-2">
           
            
          </div>
        </div>
      </div>
    </header>
  );
}