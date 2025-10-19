"use client";

import SectionHeading from "@/components/section-heading";

export default function Contact() {
  return (
    <SectionHeading
      id="contact"
      text="Contacto"
      className="px-4 py-12 md:px-8 md:py-16"
    >
      <div className="flex items-center justify-center h-full">
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          {/* Contacto content here */}
        </div>
      </div>
    </SectionHeading>
  );
}
