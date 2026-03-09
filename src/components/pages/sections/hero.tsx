"use client";

import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { ThemeToggleButton2 } from "@/components/theme-toggle";
import { AnimatedLogo } from "@/components/ui/animated-logo";
import { useState, useEffect } from "react";
import { useTranslation } from "@/i18n";
import { LocaleToggle } from "@/components/locale-toggle";

const Hero = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const { t } = useTranslation();

  const projectWord = t.projectLabels.project;
  const projects = [
    { id: 1, src: "/projects/a1.jfif", alt: `${projectWord} 1`, title: `${projectWord} 1`, subtitle: t.hero.projectSubtitles[1] },
    { id: 2, src: "/projects/c1.png", alt: `${projectWord} 2`, title: `${projectWord} 2`, subtitle: t.hero.projectSubtitles[2] },
    { id: 3, src: "/projects/v1.png", alt: `${projectWord} 3`, title: `${projectWord} 3`, subtitle: t.hero.projectSubtitles[3] },
    { id: 4, src: "/projects/b1.jpeg", alt: `${projectWord} 4`, title: t.hero.projectTitles[4], subtitle: t.hero.projectSubtitles[4] },
  ];

  // Start from the middle set for infinite loop
  const [currentIndex, setCurrentIndex] = useState(projects.length);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Duplicate projects for infinite loop
  const infiniteProjects = [...projects, ...projects, ...projects];

  // Auto-advance carousel every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Reset position when reaching the end (infinite loop)
  useEffect(() => {
    if (currentIndex >= projects.length * 2) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(projects.length);
      }, 500);
    } else if (currentIndex <= 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(projects.length);
      }, 500);
    }
  }, [currentIndex, projects.length]);

  return (
    <div id="home" className="relative flex min-h-screen lg:h-screen flex-col justify-center overflow-y-auto lg:overflow-hidden border-b lg:snap-start lg:snap-always pt-20 pb-10 lg:pt-0 lg:pb-0">
      {/* Decorative Corner Borders - All 4 corners */}
      <div className="absolute top-4 left-4 h-12 w-12 border-t-2 border-l-2 border-primary/40" />
      <div className="absolute top-4 right-4 h-12 w-12 border-t-2 border-r-2 border-primary/40" />
      <div className="absolute bottom-4 left-4 h-12 w-12 border-b-2 border-l-2 border-primary/40" />
      <div className="absolute bottom-4 right-4 h-12 w-12 border-b-2 border-r-2 border-primary/40" />

      {/* Mobile Navigation - Theme toggle with text */}
      <div className="absolute top-0 left-0 right-0 z-50 flex md:hidden items-center justify-center gap-2 px-4 pt-6 pb-3">
        <LocaleToggle className="bg-background/30 inline-flex items-center rounded-full px-3 py-1.5 backdrop-blur-md transition-all hover:bg-background/50 text-foreground/80" />
        <button
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          className="bg-background/30 inline-flex items-center gap-2 rounded-full px-3 py-1.5 backdrop-blur-md transition-all hover:bg-background/50"
          aria-label={t.nav.changeTheme}
        >
          <ThemeToggleButton2 className="size-4" theme={resolvedTheme} />
          <span className="text-foreground/80 text-xs font-medium">
            {resolvedTheme === "dark" ? t.nav.lightMode : t.nav.darkMode}
          </span>
        </button>
      </div>

      {/* Desktop Navigation */}
      <div className="absolute top-0 left-0 right-0 z-50 hidden md:flex items-center justify-between px-6 pt-8 pb-4">
        {/* Logo - Top Left Corner */}
        <a href="#home" className="group relative inline-flex items-center">
          <div className="w-16 text-foreground transition-all duration-300 group-hover:scale-110">
            <AnimatedLogo animate={false} />
          </div>
        </a>

        {/* Navigation Links - Center */}
        <div className="font-incognito flex absolute left-1/2 -translate-x-1/2 items-center gap-1 rounded-full px-1 py-1 bg-background/30 backdrop-blur-md">
          {[1, 2, 3, 4].map((n) => (
            <a key={n} href={`#proyecto-${n}`} className="relative rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-200 opacity-70 hover:opacity-100 hover:bg-primary/10">
              {projectWord} {n}
            </a>
          ))}
          <a href="#contacto" className="relative rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-200 opacity-70 hover:opacity-100 hover:bg-primary/10">
            {t.nav.contact}
          </a>
        </div>

        {/* Right Actions - GitHub, LinkedIn, Locale & Theme */}
        <div className="inline-flex items-center gap-2">
          <div className="bg-background/30 inline-flex items-center gap-2 rounded-full px-2 py-1 backdrop-blur-md">
            <a
              href="https://github.com/JaviRL7"
              target="_blank"
              rel="noreferrer noopener"
              className="text-foreground/60 hover:text-foreground text-sm transition-colors duration-200 hover:scale-110"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" className="size-4">
                <path
                  d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                  fill="currentColor"
                />
              </svg>
            </a>
            <div className="bg-border h-4 w-px" />
            <a
              href="https://www.linkedin.com/in/javier-rodriguez-lopez-4795a8180/"
              target="_blank"
              rel="noreferrer noopener"
              className="text-foreground/60 hover:text-foreground transition-all duration-200 hover:scale-110"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <div className="bg-border h-4 w-px" />
            <LocaleToggle className="text-foreground/60 hover:text-foreground transition-all duration-200 hover:scale-110" />
            <div className="bg-border h-4 w-px" />
            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="text-foreground/60 hover:text-foreground transition-all duration-200 hover:scale-110"
              aria-label={t.nav.changeTheme}
            >
              <ThemeToggleButton2 className="size-4" theme={resolvedTheme} />
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-4 px-4 md:space-y-6 md:px-6 lg:px-8 py-6 md:py-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center text-center mt-4 md:mt-6"
        >
          {/* Explanatory Text - Simplified */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-5 md:mb-8 max-w-3xl text-base md:text-xl lg:text-2xl xl:text-3xl font-bold leading-relaxed"
          >
            <div className="text-foreground/90 text-center space-y-2 md:space-y-3">
              <div>
                {t.hero.myProjects}{" "}
                <span className="font-incognito font-semibold text-[#8cc2ff] text-[1.2em]">{t.hero.projects}</span>
                {" "}{t.hero.explainedWith}
              </div>
              <div className="flex justify-center">
                <span className="relative inline-block">
                  <span className="font-incognito font-semibold text-[#8cc2ff] text-[1.2em]">{t.hero.design}</span>
                  <div className="mt-1.5 flex items-center justify-center gap-1.5">
                    <div className="bg-primary h-0.5 md:h-1" style={{ width: '28px' }} aria-hidden="true"></div>
                    <div className="bg-primary/60 h-0.5 md:h-1" style={{ width: '14px' }} aria-hidden="true"></div>
                    <div className="bg-primary/30 h-0.5 md:h-1" style={{ width: '7px' }} aria-hidden="true"></div>
                  </div>
                </span>
              </div>
            </div>
          </motion.div>

          {/* Carousel Container */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative w-full mx-auto"
          >
            {/* Mobile: Single card view */}
            <div className="md:hidden">
              <div className="relative overflow-hidden px-6">
                <motion.div
                  className="flex"
                  animate={{
                    x: `calc(-${currentIndex} * 100%)`
                  }}
                  transition={{
                    duration: isTransitioning ? 0.5 : 0,
                    ease: "easeInOut"
                  }}
                >
                  {infiniteProjects.map((item, idx) => (
                    <div
                      key={`mobile-${item.id}-${idx}`}
                      className="flex-shrink-0 w-full px-2"
                    >
                      <a
                        href={`#proyecto-${item.id}`}
                        className="block relative group"
                      >
                        {/* Image */}
                        <div className="relative aspect-[16/10] overflow-hidden border border-border">
                          <img
                            src={item.src}
                            alt={item.alt}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        {/* Content */}
                        <div className="pt-3 text-center">
                          <h3 className="text-foreground font-incognito font-bold text-sm">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground text-xs italic mt-1">
                            {item.subtitle}
                          </p>
                          <div className="mt-2 inline-flex items-center gap-1 text-primary text-xs font-medium">
                            {t.hero.viewProject}
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M7 7h10v10"></path>
                              <path d="M7 17 17 7"></path>
                            </svg>
                          </div>
                        </div>
                      </a>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Mobile Indicators */}
              <div className="flex justify-center gap-2 mt-4">
                {projects.map((_, index) => (
                  <button
                    key={`mobile-ind-${index}`}
                    onClick={() => {
                      setIsTransitioning(true);
                      setCurrentIndex(projects.length + index);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === (currentIndex % projects.length)
                        ? 'w-6 bg-primary'
                        : 'w-2 bg-primary/30'
                    }`}
                    aria-label={`{t.hero.goToProject} ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Desktop: 3-column carousel */}
            <div className="hidden md:block">
              <div className="relative overflow-hidden px-6 lg:px-8 xl:px-10">
                <motion.div
                  className="flex"
                  animate={{
                    x: `calc(-${currentIndex} * ${100 / 3}%)`
                  }}
                  transition={{
                    duration: isTransitioning ? 0.5 : 0,
                    ease: "easeInOut"
                  }}
                >
                  {infiniteProjects.map((item, idx) => (
                    <div
                      key={`desktop-${item.id}-${idx}`}
                      className="flex-shrink-0 flex flex-col gap-2 px-1.5 lg:px-2 xl:px-2.5"
                      style={{ width: 'calc(100% / 3)' }}
                    >
                      <div className="relative flex items-center justify-center p-2">
                        <div className="group/image relative w-full">
                          {/* Frame corners */}
                          <div className="border-foreground/20 absolute -top-1 -left-1 h-6 w-6 border-t-2 border-l-2 transition-all group-hover/image:-top-2 group-hover/image:-left-2" />
                          <div className="border-foreground/20 absolute -top-1 -right-1 h-6 w-6 border-t-2 border-r-2 transition-all group-hover/image:-top-2 group-hover/image:-right-2" />
                          <div className="border-foreground/20 absolute -bottom-1 -left-1 h-6 w-6 border-b-2 border-l-2 transition-all group-hover/image:-bottom-2 group-hover/image:-left-2" />
                          <div className="border-foreground/20 absolute -right-1 -bottom-1 h-6 w-6 border-r-2 border-b-2 transition-all group-hover/image:-right-2 group-hover/image:-bottom-2" />

                          <div className="bg-background relative overflow-hidden border-2">
                            <div className="relative aspect-[16/10] overflow-hidden">
                              {/* Hover overlay */}
                              <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover/image:opacity-100">
                                <a href={`#proyecto-${item.id}`} className="group/btn relative inline-flex items-center gap-1.5 border bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90">
                                  {t.hero.goToProject}
                                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">
                                    <path d="M7 7h10v10"></path>
                                    <path d="M7 17 17 7"></path>
                                  </svg>
                                </a>
                              </div>

                              <img
                                src={item.src}
                                alt={item.alt}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover/image:scale-110"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="text-center">
                        <h3 className="text-foreground/80 text-sm lg:text-base xl:text-lg font-semibold">
                          {item.title}
                        </h3>
                        <p className="text-foreground/60 text-xs lg:text-sm italic mt-0.5">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Desktop Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {projects.map((_, index) => (
                  <button
                    key={`desktop-ind-${index}`}
                    onClick={() => {
                      setIsTransitioning(true);
                      setCurrentIndex(projects.length + index);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === (currentIndex % projects.length)
                        ? 'w-8 bg-primary'
                        : 'w-2 bg-primary/30 hover:bg-primary/50'
                    }`}
                    aria-label={`{t.hero.goToProject} ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator - Centered bottom */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 hidden md:flex items-center justify-center text-muted-foreground">
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
