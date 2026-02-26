"use client";

import SectionHeading from "@/components/section-heading";
import { useTranslation } from "@/i18n";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <SectionHeading
      id="contact"
      text={t.contactPage.title}
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
