"use client";

import { motion } from "motion/react";
import { Typewriter } from "@/components/ui/typewriter";
import { useTheme } from "next-themes";
import { ThemeToggleButton2 } from "@/components/theme-toggle";
import { AnimatedLogo } from "@/components/ui/animated-logo";

const Hero = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <div id="home" className="relative flex min-h-screen lg:h-screen flex-col justify-center overflow-y-auto lg:overflow-hidden border-b lg:snap-start lg:snap-always pt-20 pb-10 lg:pt-0 lg:pb-0">
      {/* Decorative Corner Borders - All 4 corners */}
      <div className="absolute top-4 left-4 h-12 w-12 border-t-2 border-l-2 border-primary/40" />
      <div className="absolute top-4 right-4 h-12 w-12 border-t-2 border-r-2 border-primary/40" />
      <div className="absolute bottom-4 left-4 h-12 w-12 border-b-2 border-l-2 border-primary/40" />
      <div className="absolute bottom-4 right-4 h-12 w-12 border-b-2 border-r-2 border-primary/40" />

      {/* Integrated Navigation */}
      <div className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-8 md:py-8">
        {/* Logo - Top Left Corner */}
        <a href="#home" className="group relative inline-flex items-center ml-2 md:ml-4">
          <div className="w-20 md:w-24 text-foreground transition-all duration-300 group-hover:scale-110">
            <AnimatedLogo animate={false} />
          </div>
        </a>

        {/* Navigation Links - Center */}
        <div className="font-incognito hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-1 rounded-full border px-3 py-1 bg-background/50 backdrop-blur-sm">
          <a href="#proyecto-1" className="relative rounded-full px-3 py-1 text-xs lg:text-sm font-medium transition-all duration-200 opacity-70 hover:opacity-100">
            Proyecto 1
          </a>
          <a href="#proyecto-2" className="relative rounded-full px-3 py-1 text-xs lg:text-sm font-medium transition-all duration-200 opacity-70 hover:opacity-100">
            Proyecto 2
          </a>
          <a href="#proyecto-3" className="relative rounded-full px-3 py-1 text-xs lg:text-sm font-medium transition-all duration-200 opacity-70 hover:opacity-100">
            Proyecto 3
          </a>
          <a href="#contacto" className="relative rounded-full px-3 py-1 text-xs lg:text-sm font-medium transition-all duration-200 opacity-70 hover:opacity-100">
            Contacto
          </a>
        </div>

        {/* Right Actions */}
        <div className="inline-flex items-center gap-2 mr-2 md:mr-4">
          <div className="bg-background/50 inline-flex items-center gap-2 rounded-full border px-2 py-1 md:px-3 md:py-1.5 backdrop-blur-sm">
            {/* GitHub */}
            <a
              href="https://github.com/JaviRL7"
              target="_blank"
              rel="noreferrer noopener"
              className="text-foreground/60 hover:text-foreground text-sm transition-colors duration-200 hover:scale-110"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" className="size-5">
                <path
                  d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                  fill="currentColor"
                />
              </svg>
            </a>

            <div className="bg-border h-4 w-px" />

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/javier-rodriguez-lopez-4795a8180/"
              target="_blank"
              rel="noreferrer noopener"
              className="text-foreground/60 hover:text-foreground transition-all duration-200 hover:scale-110"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

            <div className="bg-border h-4 w-px" />

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="transition-transform duration-200 hover:scale-110"
              aria-label="Cambiar tema"
            >
              <ThemeToggleButton2 className="size-5" theme={resolvedTheme} />
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-2 px-4 md:space-y-6 md:px-6 lg:px-10 lg:space-y-10 py-8 md:py-0">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="bg-background inline-flex items-center gap-2 rounded-full border-2 px-2 py-1 md:px-3 md:py-1.5">
            <span className="text-foreground/60 font-mono text-[10px] md:text-xs">
              {"<"} Hola Unanime {"/>"}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center text-center"
        >
          {/* Large Greeting */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-incognito mb-2 text-xl font-semibold leading-tight md:mb-6 md:text-3xl lg:mb-10 lg:text-5xl"
          >
            <span className="text-foreground">Hola de nuevo, </span>
            <span className="relative italic text-[#8cc2ff]">
              <Typewriter
                text={["Unanime"]}
                speed={100}
                waitTime={2000}
                deleteSpeed={50}
                cursorChar="|"
                loop
              />
            </span>
          </motion.h1>

          {/* Explanatory Text - With wide stretched font */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-2 max-w-4xl text-sm font-bold leading-tight md:leading-relaxed md:mb-8 md:text-xl lg:mb-12 lg:text-3xl xl:text-4xl"
          >
            <div className="text-foreground/90 text-center space-y-1 md:space-y-2">
              <div>
                En vez de explicar mis{" "}
                <span className="font-incognito font-semibold text-[#8cc2ff] text-[1.3em]">Proyectos</span>
              </div>
              <div className="whitespace-nowrap">
                con palabras, prefiero enseñároslos con
              </div>
              <div className="mt-2 md:mt-4 flex justify-center">
                <span className="relative inline-block">
                  <span className="font-incognito font-semibold text-[#8cc2ff] text-[1.3em]">Diseño</span>
                  <div className="mt-1 md:mt-2 flex items-center justify-center gap-2">
                    <div className="bg-primary h-1" style={{ width: '32px' }} aria-hidden="true"></div>
                    <div className="bg-primary/60 h-1" style={{ width: '16px' }} aria-hidden="true"></div>
                    <div className="bg-primary/30 h-1" style={{ width: '8px' }} aria-hidden="true"></div>
                  </div>
                </span>
              </div>
            </div>
          </motion.div>

          {/* Image Placeholders */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid w-full mx-auto grid-cols-1 gap-2 px-4 max-w-md md:max-w-none md:px-6 md:grid-cols-3 md:gap-4 lg:gap-6 lg:px-8 xl:gap-8 xl:px-10"
          >
            {[
              { id: 1, src: "/projects/a1.jfif", alt: "Proyecto 1", title: "Proyecto 1", subtitle: "Lo estético" },
              { id: 2, src: "/projects/c1.png", alt: "Proyecto 2", title: "Proyecto 2", subtitle: "Lo funcional" },
              { id: 3, src: "/projects/h1.PNG", alt: "Proyecto 3", title: "Proyecto 3", subtitle: "Lo planeado" },
            ].map((item) => (
              <div key={item.id} className="flex flex-col gap-1 md:gap-2">
                <div className="relative flex items-center justify-center p-1 md:p-2">
                  <div className="group/image relative w-full">
                    {/* Frame corners */}
                    <div className="border-foreground/20 absolute -top-1 -left-1 h-4 w-4 md:h-6 md:w-6 border-t-2 border-l-2 transition-all group-hover/image:-top-2 group-hover/image:-left-2" />
                    <div className="border-foreground/20 absolute -top-1 -right-1 h-4 w-4 md:h-6 md:w-6 border-t-2 border-r-2 transition-all group-hover/image:-top-2 group-hover/image:-right-2" />
                    <div className="border-foreground/20 absolute -bottom-1 -left-1 h-4 w-4 md:h-6 md:w-6 border-b-2 border-l-2 transition-all group-hover/image:-bottom-2 group-hover/image:-left-2" />
                    <div className="border-foreground/20 absolute -right-1 -bottom-1 h-4 w-4 md:h-6 md:w-6 border-r-2 border-b-2 transition-all group-hover/image:-right-2 group-hover/image:-bottom-2" />

                    <div className="bg-background relative overflow-hidden border-2">
                      <div className="relative aspect-[2/1] md:aspect-[16/10] overflow-hidden">
                        {/* Glitch effect for project 3 */}
                        {item.id === 3 && (
                          <div className="absolute inset-0 z-30 pointer-events-none opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                            {/* Static noise/grain overlay - más sutil */}
                            <div className="absolute inset-0 opacity-10" style={{
                              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`
                            }} />

                            {/* Backdrop blur - más sutil */}
                            <div className="absolute inset-0 backdrop-blur-[1px] bg-black/60" />

                            {/* Horizontal scanlines (TV style) - más sutiles */}
                            <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.02)_2px,rgba(255,255,255,0.02)_4px)]" />

                            {/* Moving horizontal bars (TV interference) - más sutiles */}
                            <div className="absolute inset-0 overflow-hidden">
                              <div className="absolute w-full h-[2px] bg-white/10 animate-[tvBar1_4s_linear_infinite]" />
                              <div className="absolute w-full h-[3px] bg-white/8 blur-[1px] animate-[tvBar2_5.5s_linear_infinite]" />
                              <div className="absolute w-full h-[1px] bg-white/12 animate-[tvBar3_7s_linear_infinite]" />
                            </div>

                            {/* Flickering vignette - más sutil */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_50%,rgba(0,0,0,0.2)_100%)]" />

                            {/* Warning message */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 md:gap-4 pointer-events-auto">
                              {/* Warning icon */}
                              <div className="relative">
                                <svg className="w-12 h-12 md:w-16 md:h-16 text-foreground/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                              </div>

                              {/* Text - tipografía normal */}
                              <div className="text-center space-y-1 md:space-y-2">
                                <div className="text-foreground/80 text-lg md:text-2xl font-semibold">
                                  EN CONSTRUCCIÓN
                                </div>
                                <div className="text-foreground/70 text-sm md:text-base">
                                  Work in Progress
                                </div>
                              </div>

                              {/* Link con icono de peligro */}
                              <a href="#proyecto-3" className="group/btn relative inline-flex items-center gap-2 rounded-md border-2 bg-primary px-4 py-2 md:px-6 md:py-3 text-sm md:text-base font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 mt-2 md:mt-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3 md:h-4 md:w-4" aria-hidden="true">
                                  <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                                Ir al proyecto
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" aria-hidden="true">
                                  <path d="M7 7h10v10"></path>
                                  <path d="M7 17 17 7"></path>
                                </svg>
                              </a>
                            </div>
                          </div>
                        )}

                        {/* Hover overlay with "Ir al proyecto" - only for projects 1 and 2 */}
                        {item.id !== 3 && (
                          <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover/image:opacity-100">
                            <a href={`#proyecto-${item.id}`} className="group/btn relative inline-flex items-center gap-2 rounded-md border-2 bg-primary px-4 py-2 md:px-6 md:py-3 text-sm md:text-base font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90">
                              Ir al proyecto
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" aria-hidden="true">
                                <path d="M7 7h10v10"></path>
                                <path d="M7 17 17 7"></path>
                              </svg>
                            </a>
                          </div>
                        )}

                        {/* Image */}
                        {item.src ? (
                          <img
                            src={item.src}
                            alt={item.alt}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover/image:scale-110"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center">
                            <span className="text-foreground/40 font-mono text-sm">
                              Imagen {item.id}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project title and subtitle below image */}
                <div className="text-center">
                  <h3 className="text-foreground/80 text-sm md:text-lg lg:text-xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-foreground/60 text-xs md:text-sm lg:text-base italic mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator - Centered bottom */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 hidden items-center justify-center gap-1 font-mono text-xs md:inline-flex text-muted-foreground">
          DESPLÁZATE
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4 animate-pulse" aria-hidden="true">
            <rect width="18" height="18" x="3" y="3" rx="2"></rect>
            <path d="M12 8v8"></path>
            <path d="m8 12 4 4 4-4"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
