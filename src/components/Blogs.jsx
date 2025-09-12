"use client";

import { events } from "@/app/blogs/Events";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import Link from "next/link";

export default function Blogs() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-12">
      <div className="space-y-25">
        {events.map((event) => (
          <div
            key={event.id}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          >
            {/* Left Image */}
            <div className="relative w-full h-[260px] md:h-[320px] lg:h-[380px]">
              <Link href={`/blogs/${event.slug}`}>
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </Link>
            </div>

            {/* Right Content */}
            <div>
              <p
                className="text-sm text-[#000000] mb-2"
                style={{ fontFamily: "Instrument Sans, sans-serif" }}
              >
                {event.date}
              </p>
              <h2
                className="text-2xl md:text-4xl font-medium text-black mb-4"
                style={{ fontFamily: "Instrument Sans, sans-serif" }}
              >
                {event.title}
              </h2>
              <p
                className="text-[#000000] text-base leading-relaxed mb-6"
                style={{ fontFamily: "Instrument Sans, sans-serif" }}
              >
                {event.description}
              </p>
              <button
                className="px-6 py-2 text-white flex items-center gap-2 cursor-pointer"
                style={{
                  backgroundColor: "#054738",
                  fontFamily: "Instrument Sans, sans-serif",
                }}
              >
                {event.buttonText}
                <HugeiconsIcon icon={ArrowRight02Icon} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
