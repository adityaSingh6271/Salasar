"use client";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 w-full z-30 border-b border-white/10 px-6 md:px-10 py-3 flex items-center justify-between
      bg-black/10"
    >
      {/* Logo */}
      <Image
        src="/SalasarLogo.png"
        alt="Salasar Logo"
        width={122}
        height={50}
        priority
      />

      {/* Nav Links + Icons */}
      <div className="flex flex-wrap md:flex-nowrap items-center gap-4 md:gap-8">
        <Link
          href="#about"
          className="text-[#054738]"
          style={{
            fontFamily: "Gilroy, sans-serif",
            fontSize: "22px",
            fontWeight: 400,
            lineHeight: "24px",
          }}
        >
          About us
        </Link>
        <Link
          href="#projects"
          className="text-[#044638]"
          style={{
            fontFamily: "Gilroy, sans-serif",
            fontSize: "22px",
            fontWeight: 400,
            lineHeight: "24px",
          }}
        >
          Projects
        </Link>
        <Link
          href="#blogs"
          className="text-[#054738]"
          style={{
            fontFamily: "Gilroy, sans-serif",
            fontSize: "22px",
            fontWeight: 400,
            lineHeight: "24px",
          }}
        >
          Media
        </Link>
        <Link
          href="#news"
          className="text-[#054738]"
          style={{
            fontFamily: "Gilroy, sans-serif",
            fontSize: "22px",
            fontWeight: 400,
            lineHeight: "24px",
          }}
        >
          News
        </Link>

        {/* WhatsApp Icon (Chat + Phone layered) */}
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
    </nav>
  );
}
