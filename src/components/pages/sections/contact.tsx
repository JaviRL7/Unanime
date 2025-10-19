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
          <h2 className="font-incognito text-2xl font-semibold md:text-5xl lg:text-4xl">
            Sección Contacto
          </h2>
        </div>
      </div>
    </SectionHeading>
  );
}
