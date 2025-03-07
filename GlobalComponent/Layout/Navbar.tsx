import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, Menu } from 'lucide-react';

// Define types for navigation links
interface NavLink {
  href: string;
  label: string;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navLinks: NavLink[] = [
    { href: '/', label: 'Home' },
    { href: '/events', label: 'Events' },
    { href: '/contact', label: 'Contact Us' },
    { href: '/about', label: 'About Us' },
    // { href: '/blog', label: 'Blog' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#ecece2] shadow-md" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center space-x-4 group" aria-label="Savoury Soirée - Home">
            <div className="w-24 h-16 overflow-hidden flex items-center justify-center">
              <Image 
                src="/images/logo.png" 
                alt="Savoury Soirée Logo"
                width={100}
                height={65}
                className="object-contain transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
            <div className="flex flex-col">
              <p className="text-xl font-serif font-bold text-gray-900 group-hover:text-[#f1a986] transition-colors duration-200">
                Savoury Soirée
              </p>
              <p className="text-sm font-serif text-black">
                Catering & Events
              </p>
            </div>
          </Link> 

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-black hover:text-[#f1a986] px-3 py-2 text-m font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#f1a986] after:transition-all after:duration-300 hover:after:w-full"
                aria-label={link.label}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-[#f1a986] text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-[#e08b66] transition-all duration-200 shadow-sm hover:shadow-md"
              aria-label="Reserve Now"
            >
              Reserve Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-[#f1a986] hover:bg-gray-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#f1a986]"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
              <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        id="mobile-menu"
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
        aria-hidden={!isOpen}
      >
        <div className="px-4 py-3 space-y-2 bg-white shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-[#f1a986] hover:bg-gray-50 transition-all duration-200"
              onClick={() => setIsOpen(false)}
              aria-label={link.label}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact-us"
            className="block w-full mt-4 bg-[#f1a986] text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-[#e08b66] transition-all duration-200 text-center"
            onClick={() => setIsOpen(false)}
            aria-label="Reserve Now"
          >
            Reserve Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;