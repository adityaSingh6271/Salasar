"use client";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 w-full z-30 bg-white/20 border-b border-white/10 px-8 py-4 flex items-center justify-between"
      style={{ backdropFilter: "blur(4px)" }}
    >
      {/* Logo */}
      <Image
        src="/SalasarLogo.png"
        alt="Salasar Logo"
        width={120}
        height={50}
        priority
      />

      {/* Nav Links */}
      <div className="flex items-center gap-8">
        <Link href="#about" className="text-[#044638] text-lg hover:opacity-70">
          About Us
        </Link>
        <Link href="#projects" className="text-[#044638] text-lg hover:opacity-70">
          Projects
        </Link>
        <Link href="#blogs" className="text-[#044638] text-lg hover:opacity-70">
          Blogs
        </Link>
        <Link href="#news" className="text-[#044638] text-lg hover:opacity-70">
          News
        </Link>

        <button className="ml-6 bg-[#044638] text-[#F0E6C3] px-5 py-2 rounded-full shadow hover:opacity-90 transition">
          Book an Appointment
        </button>
      </div>
    </nav>
  );
}
