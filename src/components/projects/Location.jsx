import React from "react";

const Location = () => {
  return (
    <section className="py-16 mt-5">
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium" style={{ fontFamily: "Gambetta" }}>
          Explore Location
        </h2>
        <p
          className="text-gray-600 mt-4 text-sm sm:text-base"
          style={{ fontFamily: "Instrument Sans, sans-serif" }}
        >
          From projects to homes, our artisans build with grace and wonder.
        </p>
      </div>

      {/* Responsive Map */}
      <div className="flex justify-center mt-10 px-4">
        <div className="w-full max-w-5xl aspect-video">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60257.36049871013!2d72.8172213760277!3d19.278668103054002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b05931cfcaf1%3A0x747d46e84f49bcf1!2sMira%20Bhayandar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1757593442107!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Location;
