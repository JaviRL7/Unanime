"use client";
import { motion } from "motion/react";
import { GraduationCap, Briefcase } from "lucide-react";
import { LOGO_SVG } from "@/data/projects";
import { useTranslation } from "@/i18n";

export const PresentationSplash = () => {
  const { t } = useTranslation();

  return (
    <div className="relative flex min-h-screen lg:h-screen overflow-y-auto lg:overflow-hidden border-b lg:snap-start lg:snap-always bg-background">
      {/* Decorative Corner Borders - All 4 corners */}
      <div className="absolute top-4 left-4 h-12 w-12 border-t-2 border-l-2 border-primary/40 z-30" />
      <div className="absolute top-4 right-4 h-12 w-12 border-t-2 border-r-2 border-primary/40 z-30" />
      <div className="absolute bottom-4 left-4 h-12 w-12 border-b-2 border-l-2 border-primary/40 z-30" />
      <div className="absolute bottom-4 right-4 h-12 w-12 border-b-2 border-r-2 border-primary/40 z-30" />

      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2">
        {/* Columna izquierda - Fondo gris con cruz y foto */}
        <motion.div
          className="relative bg-muted/30 flex items-center justify-center p-8 md:p-12 lg:p-16"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Cruz con líneas grises */}
          <div className="absolute inset-0" aria-hidden="true">
            <div className="relative h-full w-full">
              {/* Línea horizontal */}
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border/30 -translate-y-1/2"></div>
              {/* Línea vertical */}
              <div className="absolute left-1/2 top-0 h-full w-0.5 bg-border/30 -translate-x-1/2"></div>
            </div>
          </div>

          {/* Foto con marco */}
          <div className="relative z-10 group/photo">
            {/* Esquinas decorativas con hover sutil */}
            <div className="border-foreground/20 absolute -top-1 -left-1 h-6 w-6 md:h-8 md:w-8 border-t-2 border-l-2 transition-all duration-300 group-hover/photo:h-7 group-hover/photo:w-7 md:group-hover/photo:h-9 md:group-hover/photo:w-9 group-hover/photo:border-primary/40" />
            <div className="border-foreground/20 absolute -top-1 -right-1 h-6 w-6 md:h-8 md:w-8 border-t-2 border-r-2 transition-all duration-300 group-hover/photo:h-7 group-hover/photo:w-7 md:group-hover/photo:h-9 md:group-hover/photo:w-9 group-hover/photo:border-primary/40" />
            <div className="border-foreground/20 absolute -bottom-1 -left-1 h-6 w-6 md:h-8 md:w-8 border-b-2 border-l-2 transition-all duration-300 group-hover/photo:h-7 group-hover/photo:w-7 md:group-hover/photo:h-9 md:group-hover/photo:w-9 group-hover/photo:border-primary/40" />
            <div className="border-foreground/20 absolute -bottom-1 -right-1 h-6 w-6 md:h-8 md:w-8 border-b-2 border-r-2 transition-all duration-300 group-hover/photo:h-7 group-hover/photo:w-7 md:group-hover/photo:h-9 md:group-hover/photo:w-9 group-hover/photo:border-primary/40" />

            <div className="w-64 h-64 md:w-80 md:h-80 overflow-hidden border-2 border-border shadow-xl transition-all duration-300 group-hover/photo:border-primary/40">
              <img
                src="/data/FotoJavier1.jpeg"
                alt="Javier Rodríguez López"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Columna derecha - Datos y botones */}
        <motion.div
          className="relative flex items-center justify-center p-8 md:p-12 lg:p-16"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="space-y-8 w-full max-w-xl 3xl:max-w-2xl 4xl:max-w-3xl">
            {/* Logo grande */}
            <div className="flex justify-center">
              <div
                className="w-64 md:w-80 lg:w-96 text-foreground"
                dangerouslySetInnerHTML={{ __html: LOGO_SVG }}
                aria-label="JaviRL Logo"
              />
            </div>

            {/* Nombre y título */}
            <div className="space-y-2 text-center">
              <h1 className="font-incognito text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
                Javier Rodríguez López
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-light text-foreground/90">
                Full Stack Developer
              </p>
              <div className="flex items-center justify-center gap-2 mt-2">
                <div className="bg-primary h-0.5 w-12" />
                <div className="bg-primary/60 h-0.5 w-6" />
                <div className="bg-primary/30 h-0.5 w-3" />
              </div>
            </div>

            {/* Formación y Experiencia en dos columnas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Columna Izquierda - Formación */}
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <GraduationCap className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                  <h3 className="text-xs md:text-sm font-semibold">{t.presentation.education}</h3>
                </div>
                <div className="space-y-2">
                  {/* DAW */}
                  <div className="border-l-2 border-primary/30 pl-2">
                    <p className="text-[10px] md:text-xs font-semibold text-foreground/95">
                      <span className="text-primary">{t.presentation.daw}</span>
                    </p>
                    <p className="text-[9px] md:text-[10px] text-foreground/80">
                      IES Doñana
                    </p>
                  </div>

                  {/* Universidad */}
                  <div className="border-l-2 border-primary/30 pl-2">
                    <p className="text-[10px] md:text-xs font-semibold text-foreground/95">
                      {t.presentation.university} <span className="text-primary">{t.presentation.cadiz}</span>
                    </p>
                  </div>

                  {/* Inglés */}
                  <div className="border-l-2 border-primary/30 pl-2">
                    <p className="text-[10px] md:text-xs font-semibold text-foreground/95">
                      <span className="text-primary">{t.presentation.englishB2}</span>
                    </p>
                    <p className="text-[9px] md:text-[10px] text-foreground/80">
                      {t.presentation.officialCert}
                    </p>
                  </div>
                </div>
              </div>

              {/* Columna Derecha - Experiencia */}
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Briefcase className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                  <h3 className="text-xs md:text-sm font-semibold">{t.presentation.experience}</h3>
                </div>
                <div className="space-y-2">
                  {/* Unanime Tech */}
                  <div className="border-l-2 border-primary/30 pl-2">
                    <p className="text-[10px] md:text-xs font-semibold text-foreground/95">
                      <span className="text-primary">{t.presentation.fullStackDev}</span>
                    </p>
                    <p className="text-[9px] md:text-[10px] text-foreground/80">
                      Unanime Tech
                    </p>
                    <p className="text-[9px] md:text-[10px] text-foreground/60">
                      {t.presentation.currentJob}
                    </p>
                  </div>

                  {/* Doña Araña */}
                  <div className="border-l-2 border-primary/30 pl-2">
                    <p className="text-[10px] md:text-xs font-semibold text-foreground/95">
                      {t.presentation.commManager} <span className="text-primary">{t.presentation.communications}</span> y <span className="text-primary">{t.presentation.ecommerce}</span>
                    </p>
                    <p className="text-[9px] md:text-[10px] text-foreground/80">
                      Doña Araña
                    </p>
                    <p className="text-[9px] md:text-[10px] text-foreground/60">
                      2024 - 2025
                    </p>
                  </div>

                  {/* Prácticas */}
                  <div className="border-l-2 border-primary/30 pl-2">
                    <p className="text-[10px] md:text-xs font-semibold text-foreground/95">
                      {t.presentation.internship} <span className="text-primary">{t.presentation.infrastructure}</span>
                    </p>
                    <p className="text-[9px] md:text-[10px] text-foreground/80">
                      Sanlúcar de Barrameda
                    </p>
                    <p className="text-[9px] md:text-[10px] text-foreground/60">
                      2023 - 2024
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Botones redes sociales y CV */}
            <div className="flex items-center justify-center gap-3 pt-3">
              <a
                href="https://github.com/JaviRL7"
                target="_blank"
                rel="noreferrer noopener"
                className="group flex items-center justify-center size-10 md:size-11 rounded-full border-2 border-primary/20 bg-primary/5 transition-all hover:border-primary/60 hover:bg-primary/10 hover:scale-110"
                aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24" className="size-5 md:size-5 text-primary">
                  <path
                    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                    fill="currentColor"
                  />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/javier-rodriguez-lopez-4795a8180/"
                target="_blank"
                rel="noreferrer noopener"
                className="group flex items-center justify-center size-10 md:size-11 rounded-full border-2 border-primary/20 bg-primary/5 transition-all hover:border-primary/60 hover:bg-primary/10 hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 md:size-5 text-primary">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              <a
                href="/data/CV Javier Rodriguez 2026 portfolio.pdf"
                target="_blank"
                rel="noreferrer noopener"
                className="group flex items-center justify-center size-10 md:size-11 rounded-full border-2 border-primary/20 bg-primary/5 transition-all hover:border-primary/60 hover:bg-primary/10 hover:scale-110"
                aria-label={t.presentation.downloadCV}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5 md:size-5 text-primary">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden items-center justify-center gap-1 font-mono text-xs md:inline-flex text-muted-foreground">
        {t.presentation.scroll}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4 animate-pulse" aria-hidden="true">
          <rect width="18" height="18" x="3" y="3" rx="2"></rect>
          <path d="M12 8v8"></path>
          <path d="m8 12 4 4 4-4"></path>
        </svg>
      </div>
    </div>
  );
};
