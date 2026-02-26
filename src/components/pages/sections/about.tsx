"use client";

import SectionHeading from "@/components/section-heading";
import { useTranslation } from "@/i18n";

const About = () => {
  const { t } = useTranslation();

  return (
    <SectionHeading text={t.about.title} id="about" className="overflow-hidden">
      <div className="flex items-center justify-center h-full">
        <div className="relative flex-1 px-4 py-12 md:px-12">
          {/* Content here */}
        </div>
      </div>
    </SectionHeading>
  );
};

export default About;
