// components/Footer.jsx
"use client";

import Image from "next/image";
import Link from "next/link";

const navLeft = [
  { label: "About us", href: "#" },
  { label: "Properties", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Media", href: "#" },
  { label: "News", href: "#" },
];

const navRight = [
  { label: "Teams", href: "#" },
  { label: "Legal", href: "#" },
];

export default function Footer() {
  return (
    <section className="w-full">
      {/* CTA BANNER */}
      <div className="relative w-full">
        <div className="relative h-[400px] md:h-[500px] lg:h-[560px] overflow-hidden">
          <Image
            src="/Footer-Img.png"
            alt="Warm interior background"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bg-black/35" />

          <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center px-6">
            <h2
              className="text-white font-light leading-tight"
              style={{
                fontFamily: "Gambetta, serif",
                fontSize: "40px",
                lineHeight: 1.05,
              }}
            >
              Let's Build Your Dream Home Together
            </h2>

            <Link
              href="#"
              className="mt-6 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm md:text-base"
              style={{
                backgroundColor: "#ffffff",
                color: "#000000",
                fontFamily: "Instrument Sans, sans-serif",
              }}
              aria-label="Book an appointment"
            >
              Book an appointment
            </Link>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer
        className="relative w-full text-[#F0E6C3]"
        style={{ backgroundColor: "#054738" }}
      >
        {/* Enhanced pattern visibility */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              " url('/Footer_Pattern.svg')",
            backgroundRepeat: "repeat",
            backgroundSize: "320px 317.4193420410156px",
            backgroundPosition: "calc(100% - 128px) 120px",
            opacity: 1,
            mixBlendMode: "overlay",
          }}
        />

        <div className="relative mx-auto max-w-8xl px-4 md:px-8 lg:px-12 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Left block */}
            <div className="md:col-span-7 transform md:-translate-x-6 ml-20">
              <div className="w-[119px] h-[76px] relative">
                <Image
                  src="/SalasarLogo.png"
                  alt="Salasar logo"
                  fill
                  className="object-contain"
                />
              </div>

              <p
                className="mt-8"
                style={{
                  fontFamily: "Gambetta, serif",
                  fontSize: "32px",
                  color: "#F0E6C3",
                  lineHeight: 1.12,
                }}
              >
                Savor our magic. Reach for your next sparkle.
              </p>

              <div
                className="mt-8 space-y-4"
                style={{ fontFamily: "Instrument Sans, sans-serif" }}
              >
                <p
                  className="max-w-[515px] mt-20"
                  style={{ fontSize: "24px", color: "#F0E6C3", lineHeight: 1.4 }}
                >
                  Salasar Business House, Ground and First Floor
                  <br />
                  Shreevallabh, Behind D'Mart, Near Salasar
                  <br />
                  Business Park, Bhayander (West), Thane - 401101
                </p>

                <div className="space-y-1">
                  <p style={{ fontSize: "24px", color: "#F0E6C3" }}>
                    +91 22 2804 9600
                  </p>
                  <p style={{ fontSize: "24px", color: "#F0E6C3" }}>
                    +91 22 2814 3400
                  </p>
                </div>

                <p style={{ fontSize: "24px", color: "#F0E6C3" }}>
                  director@salasarbuilders.com
                </p>
              </div>
            </div>

            {/* Right block - adjusted spacing */}
            <div className="md:col-span-5 transform md:translate-x-6 pr-6" style={{marginLeft:"14rem"}}>
              <div className="grid grid-cols-2 gap-4">
                {/* Left nav - shifted right */}
                <nav
                  className="space-y-6 ml-8"
                  style={{
                    fontFamily: "Gambetta",
                    fontSize: "24px",
                    color: "#F0E6C3",
                  }}
                >
                  {navLeft.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block hover:opacity-90"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

                {/* Right nav - reduced gap */}
                <nav
                  className="space-y-6"
                  style={{
                    fontFamily: "Gambetta",
                    fontSize: "24px",
                    color: "#F0E6C3",
                  }}
                >
                  {navRight.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block hover:opacity-90"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Social icons aligned with About us nav */}
              <div className="mt-70 ml-8 flex gap-4">
                {[
                  { src: "/Facebook.png", alt: "Facebook" },
                  { src: "/Instagram.png", alt: "Instagram" },
                  { src: "/LinkedIn.png", alt: "LinkedIn" },
                  { src: "/TwitterX.png", alt: "X (Twitter)" },
                  { src: "/YT.png", alt: "YouTube" },
                ].map((icon) => (
                  <a key={icon.alt} href="#" aria-label={icon.alt}>
                    <div
                      
                    >
                      <Image
                        src={icon.src}
                        alt={icon.alt}
                        width={42}
                        height={42}
                        className="object-contain"
                      />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}