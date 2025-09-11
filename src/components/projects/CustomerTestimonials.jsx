"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    rating: 5,
    text: "Its a wonderful project. They are known for their quality and work and decent 2 BHK is being provided some says that cost is high, but for quality and peace you need to",
    name: "Prakash Kawale",
    image: "/Prakash.jpg",
  },
  {
    id: 2,
    rating: 5,
    text: "pay some premium. Overall good experience till now, even the staffs are cooperative, and well mannered.. Looking forward for the possession.",
    name: "Solomon Gaddafi",
    image: "/Solomon.jpg",
  },
];

export default function CustomerTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-lg ${
          i < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <section className="mt-5">
      <div className="max-w-6xl mx-auto">
        <div className="border border-[#000000] bg-white p-8">
          {/* Header */}
          <div className="mb-8">
            <h2
              className="text-2xl font-normal text-gray-900 mb-2"
              style={{ fontFamily: "Gambetta" }}
            >
              Customer testimonials
            </h2>
            <p
              className="text-[#000000] text-sm"
              style={{ fontFamily: "Instrument Sans, sans-serif" }}
            >
              Every review is a story of a happy move.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-2 gap-8 mb-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="space-y-4">
                {/* Stars */}
                <div className="flex space-x-1">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Testimonial Text */}
                <p
                  className="text-gray-800 text-sm leading-relaxed font-semibold"
                  style={{ fontFamily: "Instrument Sans, sans-serif" }}
                >
                  {testimonial.text}
                </p>

                {/* Profile */}
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span
                    className="text-gray-800 text-sm font-semibold"
                    style={{ fontFamily: "Instrument Sans, sans-serif" }}
                  >
                    {testimonial.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Navigation */}
          <div className="flex items-center justify-between">
            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === currentIndex ? "bg-gray-800" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="w-8 h-8 rounded-full border-gray-300 bg-transparent"
                onClick={prevTestimonial}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="w-8 h-8 rounded-full border-gray-300 bg-transparent"
                onClick={nextTestimonial}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
