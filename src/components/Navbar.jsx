"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/about-us", label: "About us" },
    { href: "/projects", label: "Projects" },
    { href: "/blogs", label: "Blogs" },
    { href: "#news", label: "News" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[9999] bg-black/10 backdrop-blur border-b border-white/10 px-6 md:px-10 py-3 flex items-center justify-between">
      {/* Logo */}
      <Image
        src="/SalasarLogo.png"
        alt="Salasar Logo"
        width={122}
        height={50}
        priority
      />

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6 lg:gap-10">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-[#054738]"
            style={{
              fontFamily: "Gilroy, sans-serif",
              fontSize: "20px",
              fontWeight: 400,
              lineHeight: "24px",
            }}
          >
            {link.label}
          </Link>
        ))}

        {/* WhatsApp Icon */}
        <div className="relative w-8 h-8 md:w-9 md:h-9">
          <Image
            src="/ChatVector.png"
            alt="Chat Bubble"
            fill
            className="object-contain"
          />
          <Image
            src="/PhoneVector.png"
            alt="Phone Inside"
            fill
            className="object-contain p-2"
          />
        </div>

        {/* Appointment Button */}
        <button
          className="bg-[#054738] text-[#F0E6C3] rounded-full flex items-center justify-center cursor-pointer"
          style={{
            width: "220px",
            height: "42px",
            fontFamily: "Gilroy, sans-serif",
            fontSize: "16px",
            fontWeight: 500,
            lineHeight: "22px",
            padding: "0 12px",
            whiteSpace: "nowrap",
          }}
        >
          Book an appointment
        </button>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex items-center justify-center w-10 h-10 text-[#054738] relative z-[10001]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Drawer with transition */}
      <div
        className={`absolute top-full left-0 w-full bg-white shadow-md md:hidden flex flex-col items-center gap-6 py-6 transform transition-all duration-300 ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-[#054738]"
            style={{
              fontFamily: "Gilroy, sans-serif",
              fontSize: "20px",
              fontWeight: 400,
            }}
          >
            {link.label}
          </Link>
        ))}

        {/* WhatsApp Icon */}
        <div className="relative w-9 h-9">
          <Image
            src="/ChatVector.png"
            alt="Chat Bubble"
            fill
            className="object-contain"
          />
          <Image
            src="/PhoneVector.png"
            alt="Phone Inside"
            fill
            className="object-contain p-2"
          />
        </div>

        {/* Appointment Button */}
        <button
          className="bg-[#054738] text-[#F0E6C3] rounded-full flex items-center justify-center cursor-pointer px-6 py-3"
          style={{
            fontFamily: "Gilroy, sans-serif",
            fontSize: "16px",
            fontWeight: 500,
          }}
        >
          Book an appointment
        </button>
      </div>
    </nav>
  );
}
