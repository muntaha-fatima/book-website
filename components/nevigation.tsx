// components/Navbar.tsx
"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"


const navLinks = [
  { name: "Home", href: "/" },
  { name: "Books", href: "/book/slug" },
  
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
         <div className="flex items-center space-x-2">
<div className="flex items-center space-x-3">
 <div className="flex items-center gap-3">
  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-purple-800 text-white flex items-center justify-center text-xl shadow-xl hover:scale-105 transition duration-300">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-7 w-7">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a9 9 0 00-9 9v5h18v-5a9 9 0 00-9-9zm0 0v13" />
    </svg>
  </div>
  <h1 className="text-2xl font-bold text-indigo-300">Noor-e-Kitab</h1>
</div>



  </div>
  <div>
   
  </div>
</div>



        <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex space-x-8">
  {navLinks.map(link => (
    <Link
      key={link.name}
      href={link.href}
      className="text-gray-700 hover:text-purple-600 font-medium transition"
    >
      {link.name}
    </Link>
  ))}
</div>


        
          {/* Mobile: Menu Toggle */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile: Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-sm">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map(link => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-800 hover:text-blue-600 font-medium py-1 transition"
              >
                {link.name}
              </Link>
            ))}
            <hr />
           
          </div>
        </div>
      )}
    </header>
  
  )
}
