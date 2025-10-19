"use client";

import { motion } from "motion/react";
import { Typewriter } from "@/components/ui/typewriter";
import { useTheme } from "next-themes";
import { ThemeToggleButton2 } from "@/components/theme-toggle";
import { AnimatedLogo } from "@/components/ui/animated-logo";

const Hero = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <div className="relative flex h-screen flex-col justify-center overflow-hidden border-b snap-start snap-always">
      {/* Decorative Corner Borders - All 4 corners */}
      <div className="absolute top-8 left-8 h-16 w-16 border-t-2 border-l-2 border-primary/40" />
      <div className="absolute top-8 right-8 h-16 w-16 border-t-2 border-r-2 border-primary/40" />
      <div className="absolute bottom-8 left-8 h-16 w-16 border-b-2 border-l-2 border-primary/40" />
      <div className="absolute bottom-8 right-8 h-16 w-16 border-b-2 border-r-2 border-primary/40" />

      {/* Integrated Navigation */}
      <div className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-12">
        {/* Logo - Top Left Corner */}
        <a href="#home" className="group relative inline-flex items-center ml-4 mt-2">
          <div className="w-28 text-foreground transition-all duration-300 group-hover:scale-110">
            <AnimatedLogo animate={false} />
          </div>
        </a>

        {/* Navigation Links - Center */}
        <div className="font-incognito hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-1 rounded-full border px-4 py-1.5 bg-background/50 backdrop-blur-sm">
          <a href="#home" className="relative rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 hover:opacity-100">
            Inicio
          </a>
          <a href="#projects" className="relative rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 opacity-70 hover:opacity-100">
            Proyectos
          </a>
          <a href="#contact" className="relative rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 opacity-70 hover:opacity-100">
            Contacto
          </a>
        </div>

        {/* Right Actions */}
        <div className="inline-flex items-center gap-2 mr-4 mt-2">
          <div className="bg-background/50 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 backdrop-blur-sm">
            {/* GitHub */}
            <a
              href="https://github.com/NotStark"
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
              href="#"
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

      <div className="space-y-12 px-4 md:space-y-16 md:px-8 lg:px-12 lg:space-y-20">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="bg-background inline-flex items-center gap-2 rounded-full border-2 px-4 py-2">
            <span className="text-foreground/60 font-mono text-xs md:text-sm">
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
            className="font-incognito mb-10 text-3xl font-semibold leading-tight md:mb-12 md:text-4xl lg:mb-16 lg:text-6xl"
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
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-12 max-w-5xl text-2xl font-bold leading-relaxed md:mb-16 md:text-3xl lg:mb-20 lg:text-4xl xl:text-5xl tracking-wider scale-x-110"
            style={{ letterSpacing: '0.05em' }}
          >
            <span className="text-foreground/90">
              En vez de escribiros un email gigantesco hablando de todos mis{" "}
              <span className="font-incognito font-semibold text-[#8cc2ff] text-[1.3em]">proyectos</span> de forma aburrida,{" "}
            </span>
            <span className="text-primary font-extrabold">
              quiero enseñároslo de la mejor manera que sé: programando diseños
              estéticos
            </span>
          </motion.p>

          {/* Image Placeholders */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid w-full grid-cols-1 gap-6 md:grid-cols-3 md:gap-8"
          >
            {[
              { id: 1, src: "/projects/a1.jfif", alt: "Proyecto 1", title: "Proyecto 1", subtitle: "Lo estético" },
              { id: 2, src: "/projects/b1.jpeg", alt: "Proyecto 2", title: "Proyecto 2", subtitle: "Lo funcional" },
              { id: 3, src: "/projects/c1.png", alt: "Proyecto 3", title: "Proyecto 3", subtitle: "Lo planeado" },
            ].map((item) => (
              <div key={item.id} className="flex flex-col gap-3">
                <div className="bg-muted/20 group relative aspect-[16/10] overflow-hidden rounded-lg border-2 border-dashed transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
                  {/* Decorative corners on hover */}
                  <div className="absolute top-2 left-2 z-10 h-4 w-4 border-t-2 border-l-2 border-primary/0 transition-all duration-300 group-hover:border-primary/80" />
                  <div className="absolute top-2 right-2 z-10 h-4 w-4 border-t-2 border-r-2 border-primary/0 transition-all duration-300 group-hover:border-primary/80" />
                  <div className="absolute bottom-2 left-2 z-10 h-4 w-4 border-b-2 border-l-2 border-primary/0 transition-all duration-300 group-hover:border-primary/80" />
                  <div className="absolute bottom-2 right-2 z-10 h-4 w-4 border-b-2 border-r-2 border-primary/0 transition-all duration-300 group-hover:border-primary/80" />

                  {/* Glitch effect for project 3 */}
                  {item.id === 3 && (
                    <div className="absolute inset-0 z-30 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {/* Static noise/grain overlay */}
                      <div className="absolute inset-0 opacity-30" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`
                      }} />

                      {/* Backdrop blur */}
                      <div className="absolute inset-0 backdrop-blur-[2px] bg-black/40" />

                      {/* Horizontal scanlines (TV style) */}
                      <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.05)_2px,rgba(255,255,255,0.05)_4px)]" />

                      {/* Moving horizontal bars (TV interference) */}
                      <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute w-full h-[2px] bg-white/20 animate-[tvBar1_4s_linear_infinite]" />
                        <div className="absolute w-full h-[3px] bg-white/15 blur-[1px] animate-[tvBar2_5.5s_linear_infinite]" />
                        <div className="absolute w-full h-[1px] bg-white/25 animate-[tvBar3_7s_linear_infinite]" />
                      </div>

                      {/* Flickering vignette */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_50%,rgba(0,0,0,0.3)_100%)] animate-pulse" />

                      {/* Warning message */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                        {/* Warning icon */}
                        <div className="relative">
                          <svg className="w-20 h-20 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.6)] animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                        </div>

                        {/* Text with glitch effect */}
                        <div className="text-center space-y-2 drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]">
                          <div className="font-mono text-2xl font-bold text-white tracking-wider animate-[glitchText_10s_infinite]">
                            EN CONSTRUCCIÓN
                          </div>
                          <div className="font-mono text-sm text-white/90 animate-[glitchText_13s_infinite]">
                            Work in Progress
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Hover overlay with "Ir al proyecto" - only for projects 1 and 2 */}
                  {item.id !== 3 && (
                    <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-6 py-3 font-semibold transition-all duration-300 hover:scale-105">
                        Ir al proyecto
                      </button>
                    </div>
                  )}

                  {/* Image or Placeholder */}
                  {item.src ? (
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <span className="text-foreground/40 font-mono text-sm">
                        Imagen {item.id}
                      </span>
                    </div>
                  )}
                </div>

                {/* Project title and subtitle below image */}
                <div className="text-center">
                  <h3 className="text-foreground/80 text-lg font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-foreground/60 text-sm italic mt-1">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
