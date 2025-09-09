import Image from "next/image"
import Link from "next/link"

const navLeft = [
  { label: "About us", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
]

const navRight = [
  { label: "Careers", href: "/careers" },
  { label: "Contact us", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
]

export default function Footer({ headingText }) {
  return (
    <section className="w-full">
      {/* CTA BANNER */}
      <div className="relative w-full">
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[560px] overflow-hidden">
          <Image src="/Footer-Img.png" alt="Warm interior background" fill className="object-cover" priority />

          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute top-16 sm:top-20 md:top-25 left-1/2 -translate-x-1/2 z-20">
            <p className="text-white text-sm sm:text-[16px]" style={{ fontFamily: "Instrument Sans, sans-serif" }}>
              Contact Us
            </p>
          </div>
          <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center px-4 sm:px-6">
            <h2
              className="text-white font-light leading-tight max-w-4xl"
              style={{
                fontFamily: "Gambetta, serif",
                fontSize: "clamp(24px, 5vw, 40px)",
                lineHeight: 1.05,
              }}
            >
              {headingText || "Let's Build Your Dream Home Together"}
            </h2>

            <Link
              href="#"
              className="mt-4 sm:mt-6 inline-flex items-center justify-center rounded-full px-4 sm:px-6 py-2 sm:py-3 text-sm md:text-base"
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
      <footer className="relative w-full text-[#F0E6C3]" style={{ backgroundColor: "#054738" }}>
        {/* Enhanced pattern visibility */}
        <div
          className="pointer-events-none absolute inset-0 hidden lg:block"
          style={{
            backgroundImage: " url('/Footer_Pattern.svg')",
            backgroundRepeat: "repeat",
            backgroundSize: "320px 317.4193420410156px",
            backgroundPosition: "calc(100% - 128px) 120px",
            opacity: 1,
            mixBlendMode: "overlay",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left block */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              <div className="w-[100px] h-[64px] sm:w-[119px] sm:h-[76px] relative">
                <Image src="/SalasarLogo.png" alt="Salasar logo" fill className="object-contain" />
              </div>

              <p
                className="max-w-lg"
                style={{
                  fontFamily: "Gambetta, serif",
                  fontSize: "clamp(20px, 4vw, 32px)",
                  color: "#F0E6C3",
                  lineHeight: 1.12,
                }}
              >
                Savor our magic. Reach for your next sparkle.
              </p>

              <div className="space-y-4 sm:space-y-6" style={{ fontFamily: "Instrument Sans, sans-serif" }}>
                <p
                  className="max-w-[515px]"
                  style={{
                    fontSize: "clamp(16px, 3vw, 24px)",
                    color: "#F0E6C3",
                    lineHeight: 1.4,
                  }}
                >
                  Salasar Business House, Ground and First Floor
                  <br />
                  Shreevallabh, Behind D'Mart, Near Salasar
                  <br />
                  Business Park, Bhayander (West), Thane - 401101
                </p>

                <div className="space-y-1">
                  <p style={{ fontSize: "clamp(16px, 3vw, 24px)", color: "#F0E6C3" }}>+91 22 2804 9600</p>
                  <p style={{ fontSize: "clamp(16px, 3vw, 24px)", color: "#F0E6C3" }}>+91 22 2814 3400</p>
                </div>

                <p style={{ fontSize: "clamp(16px, 3vw, 24px)", color: "#F0E6C3" }}>director@salasarbuilders.com</p>
              </div>
            </div>

            {/* Right block */}
            <div className="lg:col-span-5 space-y-8">
              <div className="grid grid-cols-2 gap-6 sm:gap-8">
                {/* Left nav */}
                <nav
                  className="space-y-4 sm:space-y-6"
                  style={{
                    fontFamily: "Gambetta",
                    fontSize: "clamp(16px, 3vw, 24px)",
                    color: "#F0E6C3",
                  }}
                >
                  {navLeft.map((item) => (
                    <Link key={item.label} href={item.href} className="block hover:opacity-90 transition-opacity">
                      {item.label}
                    </Link>
                  ))}
                </nav>

                {/* Right nav */}
                <nav
                  className="space-y-4 sm:space-y-6"
                  style={{
                    fontFamily: "Gambetta",
                    fontSize: "clamp(16px, 3vw, 24px)",
                    color: "#F0E6C3",
                  }}
                >
                  {navRight.map((item) => (
                    <Link key={item.label} href={item.href} className="block hover:opacity-90 transition-opacity">
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Social icons */}
              <div className="flex gap-3 sm:gap-4 justify-start">
                {[
                  { src: "/Facebook.png", alt: "Facebook" },
                  { src: "/Instagram.png", alt: "Instagram" },
                  { src: "/LinkedIn.png", alt: "LinkedIn" },
                  { src: "/TwitterX.png", alt: "X (Twitter)" },
                  { src: "/YT.png", alt: "YouTube" },
                ].map((icon) => (
                  <a key={icon.alt} href="#" aria-label={icon.alt} className="hover:opacity-80 transition-opacity">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-[42px] lg:h-[42px] relative">
                      <Image src={icon.src || "/placeholder.svg"} alt={icon.alt} fill className="object-contain" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}
