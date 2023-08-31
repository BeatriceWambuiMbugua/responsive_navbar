"use client"
import Link from 'next/link';
import { useState } from 'react';

const Menu = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };
  
    return (
      <nav className="bg-blue-500 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center">
            <div className="text-white font-bold text-lg">
              <Link href="/">My App</Link>
            </div>
            <div className="hidden md:flex space-x-4">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <div className="md:hidden">
              <button className="text-white" onClick={toggleMobileMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={isMobileMenuOpen
                      ? 'M6 18L18 6M6 6l12 12'
                      : 'M4 6h16M4 12h16M4 18h16'}
                  />
                </svg>
              </button>
            </div>
          </div>
          {isMobileMenuOpen && (
            <div className="flex flex-col mt-4 md:hidden">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/contact">Contact</Link>
            </div>
          )}
        </div>
      </nav>
  );
};

export default Menu;
