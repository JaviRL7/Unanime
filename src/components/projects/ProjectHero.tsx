/**
 * ProjectHero Component
 *
 * Full-screen hero section for showcasing a project.
 * Displays media (video/image) with decorative frames, project info, and action buttons.
 * Responsive layout: stacked on mobile, centered on desktop.
 *
 * @example
 * ```tsx
 * <ProjectHero
 *   hero={projectHeroData}
 *   showLogo={true}
 *   projectNumber={1}
 * />
 * ```
 */

"use client";

import { Button } from "@/components/ui/button";
import HeadingLine from "@/components/ui/heading-line";
import { Github, ArrowUpRight, ExternalLink, Sun, Moon, ArrowRight } from "lucide-react";
import DecorativeCorners from "./shared/DecorativeCorners";
import GridBackground from "./shared/GridBackground";
import { LOGO_SVG } from "@/data/projects";
import type { ProjectHeroProps } from "@/types/projects";
import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "next-themes";
import { ThemeToggleButton2 } from "@/components/theme-toggle";

/**
 * AnimatedCounter - Counter that animates when it comes into view
 */
function AnimatedCounter({ end, className, separator = ".", decimals = 0 }: { end: number; className?: string; separator?: string; decimals?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <span ref={ref}>
      {isInView ? (
        <CountUp end={end} duration={2.5} separator={separator} decimals={decimals} className={className} />
      ) : (
        <span className={className}>0</span>
      )}
    </span>
  );
}

export default function ProjectHero({
  hero,
  showLogo = false,
  projectNumber,
  projectId,
}: ProjectHeroProps) {
  const {
    title,
    date,
    description,
    mediaType,
    mediaSrc,
    githubUrl,
    demoUrl,
  } = hero;

  const { resolvedTheme, setTheme } = useTheme();

  // Proyectos que muestran el bloque con grid de líneas
  const isGridBlock = projectId === "linkedin-stats" || projectId === "inanilux-portfolio" || projectId === "color-palette" || projectId === "design-process";

  // Si no hay título y no es un bloque con grid, no renderizar hero
  if (!title && !isGridBlock) {
    return null;
  }

  // Renderizado especial para bloques con grid
  if (isGridBlock) {
    const isLinkedInStats = projectId === "linkedin-stats";

    return (
      <section className="group relative h-screen w-full overflow-hidden border-b lg:snap-start lg:snap-always bg-background">
        {/* Logo SVG - Shown in grid blocks */}
        <div className="absolute left-8 top-16 z-30 hidden lg:block">
          <div
            className="w-32 text-foreground"
            dangerouslySetInnerHTML={{ __html: LOGO_SVG }}
            aria-label="JaviRL Logo"
          />
        </div>

        {/* Project Label - Top right corner */}
        {projectNumber && (
          <div className="absolute right-4 top-4 z-30 hidden lg:flex lg:flex-col lg:items-end lg:gap-3">
            <div className="bg-primary/10 border border-primary/20 px-4 py-2 backdrop-blur-sm">
              <span className="font-mono text-xs font-semibold text-primary uppercase tracking-wider">
                Proyecto {projectNumber}
              </span>
            </div>
            {/* Badge de "Prototipo en desarrollo" para Inanilux */}
            {projectId === "inanilux-portfolio" && (
              <div className="px-3 py-1.5 md:px-5 md:py-2.5 bg-yellow-500/10 border border-yellow-500/30 rounded-lg backdrop-blur-sm">
                <span className="text-yellow-600 dark:text-yellow-400 text-[10px] md:text-sm font-mono font-semibold uppercase tracking-wider">
                  Prototipo en desarrollo
                </span>
              </div>
            )}
            
            {/* Action Buttons */}
            <div className="bg-background/50 inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 backdrop-blur-sm">
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

              <div className="bg-border h-4 w-px" />

              {/* Back to Top */}
              <button
                onClick={() => {
                  const heroSection = document.querySelector('#home');
                  if (heroSection) {
                    heroSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="text-foreground/60 hover:text-foreground transition-all duration-200 hover:scale-110"
                aria-label="Volver arriba"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5">
                  <path d="M12 19V5M5 12l7-7 7 7"/>
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Scroll Indicator - Centered bottom */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 hidden items-center justify-center gap-1 font-mono text-xs md:inline-flex text-muted-foreground">
          DESPLÁZATE
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4 animate-pulse" aria-hidden="true">
            <rect width="18" height="18" x="3" y="3" rx="2"></rect>
            <path d="M12 8v8"></path>
            <path d="m8 12 4 4 4-4"></path>
          </svg>
        </div>

        {/* Grid de líneas equidistantes */}
        <div className="h-full w-full relative">
          {/* 4 Líneas horizontales */}
          <div className="absolute top-[20%] left-0 w-full h-px bg-border" />
          <div className="absolute top-[40%] left-0 w-full h-px bg-border" />
          <div className="absolute top-[60%] left-0 w-full h-px bg-border" />
          <div className="absolute top-[80%] left-0 w-full h-px bg-border" />

          {/* 4 Líneas verticales */}
          <div className="absolute top-0 left-[20%] h-full w-px bg-border" />
          <div className="absolute top-0 left-[40%] h-full w-px bg-border" />
          <div className="absolute top-0 left-[60%] h-full w-px bg-border" />
          <div className="absolute top-0 left-[80%] h-full w-px bg-border" />

          {/* Contenido sobre el grid */}
          {isLinkedInStats && (
          <div className="relative z-10 h-full flex flex-col lg:flex-row items-stretch justify-center gap-10 lg:gap-32 p-8 lg:px-24 lg:py-16">
            {/* Columna izquierda: Título y métricas destacadas */}
            <div className="flex-1 flex flex-col justify-center max-w-2xl">
              <h2 className="font-incognito text-5xl lg:text-6xl font-bold mb-4">
                {title}
              </h2>
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-primary h-1 w-12" />
                <div className="bg-primary/60 h-1 w-6" />
                <div className="bg-primary/30 h-1 w-3" />
              </div>

              {/* Texto motivacional */}
              <p className="text-foreground text-lg lg:text-xl mb-10 leading-relaxed font-semibold border-l-4 border-primary pl-4 bg-primary/5 py-4 pr-4 rounded-r-lg">
                Este proyecto es el que más ilusión me hizo, no solo porque cumplía la necesidad de mis seres queridos, sino que alcancé bastantes interacciones, reviews y contactos en LinkedIn. Me devolvió bastante la motivación después de un periodo complicado.
              </p>

              {/* Métricas principales destacadas */}
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="border border-border p-6 bg-background/50">
                  <div className="text-4xl lg:text-5xl font-bold text-primary font-mono">
                    <AnimatedCounter end={50174} separator="." decimals={0} />
                  </div>
                  <div className="text-sm lg:text-base text-muted-foreground uppercase tracking-wider mt-2">Impresiones</div>
                </div>
                <div className="border border-border p-6 bg-background/50">
                  <div className="text-4xl lg:text-5xl font-bold text-primary font-mono">
                    <AnimatedCounter end={29081} separator="." decimals={0} />
                  </div>
                  <div className="text-sm lg:text-base text-muted-foreground uppercase tracking-wider mt-2">Alcance</div>
                </div>
                <div className="border border-border p-6 bg-background/50">
                  <div className="text-4xl lg:text-5xl font-bold text-primary font-mono">
                    <AnimatedCounter end={725} separator="." decimals={0} />
                  </div>
                  <div className="text-sm lg:text-base text-muted-foreground uppercase tracking-wider mt-2">Reacciones</div>
                </div>
                <div className="border border-border p-6 bg-background/50">
                  <div className="text-4xl lg:text-5xl font-bold text-primary font-mono">
                    <AnimatedCounter end={332} separator="." decimals={0} />
                  </div>
                  <div className="text-sm lg:text-base text-muted-foreground uppercase tracking-wider mt-2">Visitas Perfil</div>
                </div>
              </div>

              {/* Métricas secundarias en lista */}
              <div className="space-y-4 text-base lg:text-lg">
                <div className="flex justify-between text-muted-foreground border-b border-border/50 pb-3">
                  <span>Visitas al enlace</span>
                  <span className="font-mono font-semibold">
                    <AnimatedCounter end={130} separator="" decimals={0} />
                  </span>
                </div>
                <div className="flex justify-between text-muted-foreground border-b border-border/50 pb-3">
                  <span>Comentarios</span>
                  <span className="font-mono font-semibold">
                    <AnimatedCounter end={7} separator="" decimals={0} />
                  </span>
                </div>
                <div className="flex justify-between text-muted-foreground border-b border-border/50 pb-3">
                  <span>Veces compartido</span>
                  <span className="font-mono font-semibold">
                    <AnimatedCounter end={9} separator="" decimals={0} />
                  </span>
                </div>
                <div className="flex justify-between text-muted-foreground border-b border-border/50 pb-3">
                  <span>Veces guardado</span>
                  <span className="font-mono font-semibold">
                    <AnimatedCounter end={24} separator="" decimals={0} />
                  </span>
                </div>
              </div>
            </div>

            {/* Columna derecha: Imagen y enlaces */}
            <div className="flex-1 flex flex-col justify-center gap-6 max-w-2xl">
              {/* Imagen con bordes decorativos */}
              <div className="relative w-full mx-auto group/image">
                {/* Esquinas decorativas (estilo video) */}
                <div className="border-foreground/20 absolute -top-2 -left-2 h-8 w-8 border-t-2 border-l-2 transition-all group-hover/image:-top-3 group-hover/image:-left-3" />
                <div className="border-foreground/20 absolute -top-2 -right-2 h-8 w-8 border-t-2 border-r-2 transition-all group-hover/image:-top-3 group-hover/image:-right-3" />
                <div className="border-foreground/20 absolute -bottom-2 -left-2 h-8 w-8 border-b-2 border-l-2 transition-all group-hover/image:-bottom-3 group-hover/image:-left-3" />
                <div className="border-foreground/20 absolute -right-2 -bottom-2 h-8 w-8 border-r-2 border-b-2 transition-all group-hover/image:-right-3 group-hover/image:-bottom-3" />

                <div className="bg-background relative overflow-hidden border-2">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src="/projects/q1.PNG"
                      alt="LinkedIn Stats - Impacto del proyecto"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Enlaces a LinkedIn con estilo de botón */}
              <div className="flex flex-col gap-3 max-w-md mx-auto w-full">
                <Button asChild variant="outline" size="default" className="group/btn border-2 font-medium">
                  <a
                    href="https://www.linkedin.com/feed/update/urn:li:activity:7381240641197887488/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Ver publicación 1 en LinkedIn"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" aria-hidden="true" />
                    Ver Publicación 1
                    <ArrowUpRight className="ml-1 h-3 w-3 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" aria-hidden="true" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="default" className="group/btn border-2 font-medium">
                  <a
                    href="https://www.linkedin.com/feed/update/urn:li:activity:7373256816685727744/?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A7373256816685727744%29"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Ver publicación 2 en LinkedIn"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" aria-hidden="true" />
                    Ver Publicación 2
                    <ArrowUpRight className="ml-1 h-3 w-3 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" aria-hidden="true" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
          )}

          {/* Contenido para Inanilux Portfolio */}
          {projectId === "inanilux-portfolio" && (
            <div className="relative z-10 h-full flex items-center justify-center p-4 md:p-8 lg:p-20 overflow-y-auto lg:overflow-y-hidden">
              <div className="max-w-[1400px] w-full py-4 md:py-0">
                {/* Layout de 2 columnas */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-16 lg:gap-24 items-center">
                  {/* COLUMNA IZQUIERDA - Foto circular + Stats */}
                  <div className="space-y-6 md:space-y-12">
                    {/* Foto circular de la creadora */}
                    <div className="flex justify-center lg:justify-start">
                      <div className="relative">
                        <div className="w-40 h-40 md:w-56 md:h-56 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 md:border-4 lg:border-[6px] border-green-500/30 shadow-2xl">
                          <img
                            src="/projects/fotoina.jpg"
                            alt="Inanilux - Creadora de contenido artístico"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {/* Anillo decorativo */}
                        <div className="absolute inset-0 rounded-full border-2 md:border-[3px] border-green-500/20 animate-pulse" style={{ animation: "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite" }} />
                      </div>
                    </div>

                    {/* Estadísticas grandes de redes sociales - Horizontal en móvil */}
                    <div className="grid grid-cols-3 lg:flex lg:flex-col gap-4 md:gap-6 lg:gap-8">
                      {/* TikTok */}
                      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-2 md:gap-3 lg:gap-5">
                        <div className="w-12 h-12 md:w-14 md:h-14 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-pink-500/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 md:w-7 md:h-7 lg:w-10 lg:h-10" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                          </svg>
                        </div>
                        <div className="text-center lg:text-left">
                          <div className="font-bold text-xl md:text-2xl lg:text-5xl font-mono">
                            <AnimatedCounter end={93.3} decimals={1} className="font-bold text-xl md:text-2xl lg:text-5xl font-mono" />K
                          </div>
                          <div className="text-[10px] md:text-xs lg:text-lg text-muted-foreground">
                            seguidores · <AnimatedCounter end={4.7} decimals={1} className="text-[10px] md:text-xs lg:text-lg text-muted-foreground" />M ♥
                          </div>
                        </div>
                      </div>

                      {/* Instagram */}
                      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-2 md:gap-3 lg:gap-5">
                        <div className="w-12 h-12 md:w-14 md:h-14 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 md:w-7 md:h-7 lg:w-10 lg:h-10" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                        </div>
                        <div className="text-center lg:text-left">
                          <div className="font-bold text-xl md:text-2xl lg:text-5xl font-mono">
                            <AnimatedCounter end={34.6} decimals={1} className="font-bold text-xl md:text-2xl lg:text-5xl font-mono" />K
                          </div>
                          <div className="text-[10px] md:text-xs lg:text-lg text-muted-foreground">
                            seguidores · <AnimatedCounter end={43} className="text-[10px] md:text-xs lg:text-lg text-muted-foreground" /> posts
                          </div>
                        </div>
                      </div>

                      {/* YouTube */}
                      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-2 md:gap-3 lg:gap-5">
                        <div className="w-12 h-12 md:w-14 md:h-14 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-red-500/20 to-red-600/20 flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 md:w-7 md:h-7 lg:w-10 lg:h-10" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                          </svg>
                        </div>
                        <div className="text-center lg:text-left">
                          <div className="font-bold text-xl md:text-2xl lg:text-5xl font-mono">
                            <AnimatedCounter end={4.05} decimals={2} className="font-bold text-xl md:text-2xl lg:text-5xl font-mono" />K
                          </div>
                          <div className="text-[10px] md:text-xs lg:text-lg text-muted-foreground">
                            suscriptores · <AnimatedCounter end={75} className="text-[10px] md:text-xs lg:text-lg text-muted-foreground" /> vídeos
                          </div>
                        </div>
                      </div>

                      {/* Enlace - Se muestra debajo en móvil */}
                      <div className="col-span-3 lg:col-span-1 pt-4 lg:pt-6 border-t border-border/50">
                        <a
                          href="https://inanilux.carrd.co"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 md:gap-3 text-sm md:text-base lg:text-lg font-medium text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors"
                        >
                          <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          inanilux.carrd.co
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* COLUMNA DERECHA - Título y texto descriptivo */}
                  <div className="space-y-6 md:space-y-10">
                    {/* Título del proyecto */}
                    <h2 className="font-incognito text-3xl md:text-5xl lg:text-7xl font-bold leading-tight">
                      {title}
                    </h2>

                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="h-1 md:h-2 bg-primary" style={{ width: "40px" }} />
                      <div className="h-1 md:h-2 bg-primary/60" style={{ width: "20px" }} />
                      <div className="h-1 md:h-2 bg-primary/30" style={{ width: "10px" }} />
                    </div>

                    {/* Texto descriptivo con palabras destacadas */}
                    <div className="space-y-4 md:space-y-8 text-base md:text-xl lg:text-3xl leading-relaxed md:leading-relaxed lg:leading-relaxed">
                      <p className="text-muted-foreground">
                        Este proyecto es un <span className="font-bold text-foreground">prototipo</span> que refleja mi forma de trabajar. Decidí intentar contactar con <span className="font-bold text-green-600 dark:text-green-400">Inanilux</span>, creadora de contenido artístico centrado en Pokémon, tras ver un tuit en el que comentaba que aún no tenía un <span className="font-semibold text-foreground">portfolio como ilustradora</span>.
                      </p>
                      <p className="text-muted-foreground">
                        Me ofrecí para crearle uno, no por <span className="font-semibold text-foreground">encargo</span> ni por interés económico, sino como <span className="font-bold text-foreground">ejercicio creativo y de aprendizaje</span>. Me hubiera gustado mostrar este proyecto terminado, pero como <span className="font-semibold text-foreground">cierta empresa valenciana</span> me retó a venderme de la mejor manera posible, aún no he podido finalizarlo.
                      </p>
                      <p className="text-foreground text-xl md:text-2xl lg:text-3xl font-bold border-l-4 border-primary pl-4 md:pl-6 bg-primary/10 py-4 md:py-5 lg:py-6 pr-4 rounded-r-lg mt-4 md:mt-6 leading-relaxed">
                        Por ello, he decidido <span className="text-red-600 dark:text-red-400">mostrar</span> a continuación cómo es mi <span className="text-red-600 dark:text-red-400">proceso creativo</span>.
                      </p>
                    </div>

                    {/* Descripción adicional */}
                    <div className="pt-4 md:pt-10 border-t-2 border-border/50">
                      <p className="text-base md:text-xl lg:text-2xl text-muted-foreground italic">
                        Artista y creadora de contenido de arte y Pokémon
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Contenido para Paleta de Colores */}
          {projectId === "color-palette" && (
            <div className="relative z-10 h-full flex flex-col p-4 lg:p-6 overflow-hidden">
              {/* Título superior más compacto */}
              <div className="mb-4 flex-shrink-0 pt-16 lg:pt-20">
                <h2 className="font-incognito text-3xl lg:text-4xl font-bold mb-1">
                  Paleta Cromática
                </h2>
                <p className="text-base lg:text-lg text-muted-foreground">
                  Análisis de colores principales del diseño
                </p>
              </div>

              {/* Contenedor principal con scroll - mejor centrado */}
              <div className="flex-1 min-h-0 overflow-y-auto flex items-center">
                <div className="space-y-8 lg:space-y-12 max-w-7xl mx-auto w-full py-4">
                  {/* PRIMERA FILA: Objetivos */}
                  <div className="space-y-4 text-center">
                    <div>
                      <h3 className="text-3xl lg:text-4xl font-bold uppercase tracking-wider mb-3">Objetivos</h3>
                      <div className="flex items-center justify-center gap-2">
                        <div className="h-2 lg:h-3 bg-primary" style={{ width: '60px' }}></div>
                        <div className="h-2 lg:h-3 bg-primary/60" style={{ width: '30px' }}></div>
                        <div className="h-2 lg:h-3 bg-primary/30" style={{ width: '15px' }}></div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                      <div className="text-center">
                        <div className="text-lg lg:text-xl font-bold text-foreground">Conexión emocional</div>
                        <div className="text-base lg:text-lg text-muted-foreground italic">Crear vínculos con el público</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg lg:text-xl font-bold text-foreground">Estudio del público</div>
                        <div className="text-base lg:text-lg text-muted-foreground italic">Conocer gustos y necesidades</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg lg:text-xl font-bold text-foreground">Atención a los detalles</div>
                        <div className="text-base lg:text-lg text-muted-foreground italic">Cuidar cada elemento</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg lg:text-xl font-bold text-foreground">Diseños originales</div>
                        <div className="text-base lg:text-lg text-muted-foreground italic">Identidad única</div>
                      </div>
                    </div>
                  </div>

                  {/* SEGUNDA FILA: Imágenes PNG con sus colores */}
                  <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 pt-4">
                    {/* Pokémon Sol - Imagen y colores */}
                    <div className="flex items-center gap-4">
                      <div className="w-44 lg:w-52 flex-shrink-0">
                        <img
                          src="/projects/i3.png"
                          alt="Paleta modo claro"
                          className="w-full h-auto object-contain rounded-lg shadow-xl border-2 border-border"
                        />
                      </div>
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 lg:w-14 lg:h-14 rounded border-2 border-border shadow-sm flex-shrink-0" style={{ backgroundColor: '#F7D1D5' }} />
                          <div className="flex flex-col">
                            <span className="font-mono text-base lg:text-lg font-bold">#F7D1D5</span>
                            <span className="text-sm lg:text-base text-muted-foreground font-semibold">Rosa pastel</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 lg:w-14 lg:h-14 rounded border-2 border-border shadow-sm flex-shrink-0" style={{ backgroundColor: '#816D5A' }} />
                          <div className="flex flex-col">
                            <span className="font-mono text-base lg:text-lg font-bold">#816D5A</span>
                            <span className="text-sm lg:text-base text-muted-foreground font-semibold">Marrón cálido</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 lg:w-14 lg:h-14 rounded border-2 border-border shadow-sm flex-shrink-0" style={{ backgroundColor: '#FAFAFA' }} />
                          <div className="flex flex-col">
                            <span className="font-mono text-base lg:text-lg font-bold">#FAFAFA</span>
                            <span className="text-sm lg:text-base text-muted-foreground font-semibold">Blanco suave</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Pokémon Luna - Imagen y colores */}
                    <div className="flex items-center gap-4">
                      <div className="w-44 lg:w-52 flex-shrink-0">
                        <img
                          src="/projects/i4.png"
                          alt="Paleta modo oscuro"
                          className="w-full h-auto object-contain rounded-lg shadow-xl border-2 border-border"
                        />
                      </div>
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 lg:w-14 lg:h-14 rounded border-2 border-border shadow-sm flex-shrink-0" style={{ backgroundColor: '#746899' }} />
                          <div className="flex flex-col">
                            <span className="font-mono text-base lg:text-lg font-bold">#746899</span>
                            <span className="text-sm lg:text-base text-muted-foreground font-semibold">Morado lavanda</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 lg:w-14 lg:h-14 rounded border-2 border-border shadow-sm flex-shrink-0" style={{ backgroundColor: '#EE8778' }} />
                          <div className="flex flex-col">
                            <span className="font-mono text-base lg:text-lg font-bold">#EE8778</span>
                            <span className="text-sm lg:text-base text-muted-foreground font-semibold">Coral suave</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 lg:w-14 lg:h-14 rounded border-2 border-border shadow-sm flex-shrink-0" style={{ backgroundColor: '#413350' }} />
                          <div className="flex flex-col">
                            <span className="font-mono text-base lg:text-lg font-bold">#413350</span>
                            <span className="text-sm lg:text-base text-muted-foreground font-semibold">Púrpura oscuro</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* TERCERA Y CUARTA FILA: Notas con flechas y botones (una debajo de otra) */}
                  <div className="space-y-6 pt-4 pb-4">
                    {/* Sol - Flujo con flechas */}
                    <div className="flex items-center justify-center gap-3">
                      <p className="text-base lg:text-lg italic text-foreground/90 w-[150px] lg:w-[170px] leading-tight text-center font-medium flex-shrink-0">Elemento común en diseño web</p>
                      <img src="/projects/f1.png" alt="→" className="h-14 lg:h-16 w-auto opacity-70 flex-shrink-0" />
                      <Button variant="outline" size="sm" className="px-4 lg:px-5 py-3 lg:py-4 h-auto flex-shrink-0">
                        <Sun className="h-5 w-5 lg:h-6 lg:w-6" />
                      </Button>
                      <img src="/projects/f1.png" alt="→" className="h-14 lg:h-16 w-auto opacity-70 flex-shrink-0" />
                      <p className="text-base lg:text-lg italic text-foreground/90 w-[150px] lg:w-[170px] leading-tight text-center font-medium flex-shrink-0">Adaptar elemento a la iconografía de la temática</p>
                      <img src="/projects/f1.png" alt="→" className="h-14 lg:h-16 w-auto opacity-70 flex-shrink-0" />
                      <Button variant="outline" size="sm" className="px-4 lg:px-5 py-3 lg:py-4 h-auto border-orange-500/50 flex-shrink-0">
                        <Sun className="h-5 w-5 lg:h-6 lg:w-6 text-orange-500 mr-2" />
                        <span className="text-sm lg:text-base font-semibold whitespace-nowrap">Pokémon Sol</span>
                      </Button>
                      <img src="/projects/f1.png" alt="→" className="h-14 lg:h-16 w-auto opacity-70 flex-shrink-0" />
                      <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-lg overflow-hidden border-2 border-border shadow-lg flex-shrink-0">
                        <img src="/projects/i5.jpg" alt="Icono Sol" className="w-full h-full object-cover" />
                      </div>
                      <img src="/projects/f1.png" alt="→" className="h-14 lg:h-16 w-auto opacity-70 flex-shrink-0" />
                      <p className="text-base lg:text-lg italic text-foreground/90 w-[150px] lg:w-[170px] leading-tight text-center font-medium flex-shrink-0">Utilizar colores de Pokémon reconocibles con la idea en el diseño</p>
                    </div>

                    {/* Luna - Flujo con flechas */}
                    <div className="flex items-center justify-center gap-3">
                      <p className="text-base lg:text-lg italic text-foreground/90 w-[150px] lg:w-[170px] leading-tight text-center font-medium flex-shrink-0">Elemento aburrido</p>
                      <img src="/projects/f1.png" alt="→" className="h-14 lg:h-16 w-auto opacity-70 flex-shrink-0" />
                      <Button variant="outline" size="sm" className="px-4 lg:px-5 py-3 lg:py-4 h-auto flex-shrink-0">
                        <Moon className="h-5 w-5 lg:h-6 lg:w-6" />
                      </Button>
                      <img src="/projects/f1.png" alt="→" className="h-14 lg:h-16 w-auto opacity-70 flex-shrink-0" />
                      <p className="text-sm lg:text-base italic text-foreground/90 w-[140px] lg:w-[160px] leading-tight text-center font-medium flex-shrink-0">Primera idea: poner logo de Pokémon edición Luna</p>
                      <img src="/projects/f1.png" alt="→" className="h-14 lg:h-16 w-auto opacity-70 flex-shrink-0" />
                      <Button variant="outline" size="sm" className="px-4 lg:px-5 py-3 lg:py-4 h-auto border-purple-500/50 flex-shrink-0">
                        <Moon className="h-5 w-5 lg:h-6 lg:w-6 text-purple-500 mr-2" />
                        <span className="text-sm lg:text-base font-semibold whitespace-nowrap">Pokémon Luna</span>
                      </Button>
                      <img src="/projects/f1.png" alt="→" className="h-14 lg:h-16 w-auto opacity-70 flex-shrink-0" />
                      <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-lg overflow-hidden border-2 border-border shadow-lg flex-shrink-0">
                        <img src="/projects/i6.jpg" alt="Icono Luna" className="w-full h-full object-cover" />
                      </div>
                      <img src="/projects/f1.png" alt="→" className="h-14 lg:h-16 w-auto opacity-70 flex-shrink-0" />
                      <p className="text-sm lg:text-base italic text-foreground/90 w-[140px] lg:w-[160px] leading-tight text-center font-medium flex-shrink-0">Opciones mucho más reconocibles para el público mainstream</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Contenido para Proceso de Diseño - Portfolio Inanilux */}
          {projectId === "design-process" && (
            <div className="relative z-10 h-full flex items-center justify-center px-6 py-6 md:px-16 md:py-10 lg:px-32 overflow-y-auto lg:overflow-hidden">
              <div className="w-full max-w-7xl space-y-8 md:space-y-12 lg:space-y-16 py-6 md:py-4">
                {/* Título superior */}
                <div className="text-center">
                  <h2 className="font-incognito text-xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 lg:mb-5">
                    Proceso de Diseño: Portfolio Inanilux
                  </h2>
                  <p className="text-sm md:text-lg lg:text-xl text-muted-foreground">
                    Guía visual de identidad, contenido y experiencia de usuario
                  </p>
                </div>

                {/* Grid de bloques informativos */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 md:gap-x-32 lg:gap-x-48 gap-y-10 md:gap-y-20">

                  {/* Bloque 1: Identidad Visual */}
                  <div className="space-y-4 md:space-y-5">
                    <div className="flex items-center gap-4 md:gap-6 mb-4 md:mb-5">
                      <div className="h-10 w-10 md:h-14 md:w-14 lg:h-16 lg:w-16 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                        <span className="font-incognito text-base md:text-xl font-bold text-primary-foreground">1</span>
                      </div>
                      <h3 className="font-incognito text-lg md:text-2xl lg:text-3xl font-bold text-foreground">Identidad Visual</h3>
                    </div>
                    <div className="space-y-2 md:space-y-3 text-xs md:text-sm lg:text-base leading-relaxed">
                      <p className="font-mono text-muted-foreground text-xs lg:text-sm">
                        <span className="font-bold text-foreground">Estilo:</span> Anime · Colorido · Infantil · Cálido
                      </p>
                      <p className="text-foreground">
                        Diseño amable evocando Pokémon con tonos pastel y creatividad.
                      </p>
                      <div className="border-l-2 border-primary/50 pl-5 space-y-2 text-foreground/90 text-xs lg:text-sm">
                        <p>• Paleta cromática viva</p>
                        <p>• Tipografía redondeada</p>
                        <p>• Ilustraciones acompañantes</p>
                      </div>
                    </div>
                  </div>

                  {/* Bloque 2: Enfoque de Contenido */}
                  <div className="space-y-4 md:space-y-5">
                    <div className="flex items-center gap-4 md:gap-6 mb-4 md:mb-5">
                      <div className="h-10 w-10 md:h-14 md:w-14 lg:h-16 lg:w-16 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                        <span className="font-incognito text-base md:text-xl font-bold text-primary-foreground">2</span>
                      </div>
                      <h3 className="font-incognito text-lg md:text-2xl lg:text-3xl font-bold text-foreground">Enfoque de Contenido</h3>
                    </div>
                    <div className="space-y-2 md:space-y-3 text-xs md:text-sm lg:text-base leading-relaxed">
                      <p className="text-foreground">
                        Contenido accesible para audiencia joven/familiar con comunicación natural.
                      </p>
                      <div className="border-l-2 border-primary/50 pl-5 space-y-2 text-foreground/90 text-xs lg:text-sm">
                        <p>• Galería con mejores obras</p>
                        <p>• Clips destacados de streams</p>
                        <p>• Descripción de estilo artístico</p>
                      </div>
                    </div>
                  </div>

                  {/* Bloque 3: Métricas y Alcance */}
                  <div className="space-y-4 md:space-y-5">
                    <div className="flex items-center gap-4 md:gap-6 mb-4 md:mb-5">
                      <div className="h-10 w-10 md:h-14 md:w-14 lg:h-16 lg:w-16 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                        <span className="font-incognito text-base md:text-xl font-bold text-primary-foreground">3</span>
                      </div>
                      <h3 className="font-incognito text-lg md:text-2xl lg:text-3xl font-bold text-foreground">Métricas y Alcance</h3>
                    </div>
                    <div className="space-y-2 md:space-y-3 text-xs md:text-sm lg:text-base leading-relaxed">
                      <p className="text-foreground">
                        Análisis de redes con datos de seguidores y engagement visual.
                      </p>
                      <div className="border-l-2 border-primary/50 pl-5 space-y-2 text-foreground/90 text-xs lg:text-sm">
                        <p>• Seguidores y crecimiento</p>
                        <p>• Alcance promedio</p>
                        <p>• Valor para colaboraciones</p>
                      </div>
                    </div>
                  </div>

                  {/* Bloque 4: Panel de Publicaciones */}
                  <div className="space-y-4 md:space-y-5">
                    <div className="flex items-center gap-4 md:gap-6 mb-4 md:mb-5">
                      <div className="h-10 w-10 md:h-14 md:w-14 lg:h-16 lg:w-16 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                        <span className="font-incognito text-base md:text-xl font-bold text-primary-foreground">4</span>
                      </div>
                      <h3 className="font-incognito text-lg md:text-2xl lg:text-3xl font-bold text-foreground">Panel de Publicaciones</h3>
                    </div>
                    <div className="space-y-2 md:space-y-3 text-xs md:text-sm lg:text-base leading-relaxed">
                      <p className="text-foreground">
                        Calendario de contenido con acceso directo a plataformas.
                      </p>
                      <div className="border-l-2 border-primary/50 pl-5 space-y-2 text-foreground/90 text-xs lg:text-sm">
                        <p>• Módulo de actualizaciones</p>
                        <p>• Enlaces directos a redes</p>
                        <p>• Opción de notificaciones</p>
                      </div>
                    </div>
                  </div>

                  {/* Bloque 5: Experiencia de Usuario */}
                  <div className="space-y-4 md:space-y-5">
                    <div className="flex items-center gap-4 md:gap-6 mb-4 md:mb-5">
                      <div className="h-10 w-10 md:h-14 md:w-14 lg:h-16 lg:w-16 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                        <span className="font-incognito text-base md:text-xl font-bold text-primary-foreground">5</span>
                      </div>
                      <h3 className="font-incognito text-lg md:text-2xl lg:text-3xl font-bold text-foreground">Experiencia de Usuario</h3>
                    </div>
                    <div className="space-y-2 md:space-y-3 text-xs md:text-sm lg:text-base leading-relaxed">
                      <p className="text-foreground">
                        Flujo natural y emocional transmitiendo su mundo visual.
                      </p>
                      <div className="border-l-2 border-primary/50 pl-5 space-y-2 text-foreground/90 text-xs lg:text-sm">
                        <p>• Transmitir alegría y arte</p>
                        <p>• Balance infantil-profesional</p>
                        <p>• Conexión emocional inmediata</p>
                      </div>
                    </div>
                  </div>

                  {/* Bloque 6: Propósito Final */}
                  <div className="space-y-4 md:space-y-5">
                    <div className="flex items-center gap-4 md:gap-6 mb-4 md:mb-5">
                      <div className="h-10 w-10 md:h-14 md:w-14 lg:h-16 lg:w-16 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                        <span className="font-incognito text-base md:text-xl font-bold text-primary-foreground">6</span>
                      </div>
                      <h3 className="font-incognito text-lg md:text-2xl lg:text-3xl font-bold text-foreground">Propósito Final</h3>
                    </div>
                    <div className="space-y-2 md:space-y-3 text-xs md:text-sm lg:text-base leading-relaxed">
                      <p className="text-foreground">
                        Carta de presentación visual para empresas y colaboradores.
                      </p>
                      <div className="border-l-2 border-primary/50 pl-5 space-y-2 text-foreground/90 text-xs lg:text-sm">
                        <p>• Quién es Inanilux</p>
                        <p>• Qué hace y cómo se expresa</p>
                        <p>• Valor de su presencia digital</p>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Quote final */}
                <div className="text-center pt-5 md:pt-8 border-t-2 border-primary/30">
                  <p className="text-sm md:text-base lg:text-lg font-mono italic text-muted-foreground">
                    &quot;Portfolio como experiencia visual: del arte Pokémon al impacto digital&quot;
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="group relative h-screen w-full overflow-hidden border-b lg:snap-start lg:snap-always">
      {/* Logo SVG - Shown in all projects */}
      <div className="absolute left-8 top-16 z-20 hidden lg:block">
        <div
          className="w-32 text-foreground"
          dangerouslySetInnerHTML={{ __html: LOGO_SVG }}
          aria-label="JaviRL Logo"
        />
      </div>

      {/* Project Label - Top right corner */}
      {projectNumber && (
        <div className="absolute right-4 top-4 z-20 hidden lg:flex lg:flex-col lg:items-end lg:gap-3">
          <div className="bg-primary/10 border border-primary/20 px-4 py-2 backdrop-blur-sm">
            <span className="font-mono text-xs font-semibold text-primary uppercase tracking-wider">
              Proyecto {projectNumber}
            </span>
          </div>
          
          {/* Action Buttons */}
          <div className="bg-background/50 inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 backdrop-blur-sm">
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

            <div className="bg-border h-4 w-px" />

            {/* Back to Top */}
            <button
              onClick={() => { const heroSection = document.querySelector('#home'); if (heroSection) { heroSection.scrollIntoView({ behavior: 'smooth', block: 'start' }); } }}
              className="text-foreground/60 hover:text-foreground transition-all duration-200 hover:scale-110"
              aria-label="Volver arriba"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5">
                <path d="M12 19V5M5 12l7-7 7 7"/>
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Scroll Indicator - Centered bottom */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden items-center justify-center gap-1 font-mono text-xs md:inline-flex text-muted-foreground">
        DESPLÁZATE
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4 animate-pulse" aria-hidden="true">
          <rect width="18" height="18" x="3" y="3" rx="2"></rect>
          <path d="M12 8v8"></path>
          <path d="m8 12 4 4 4-4"></path>
        </svg>
      </div>

      {/* Mobile: Full screen layout (stacked) */}
      <div className="h-full lg:hidden">
        <div className="grid h-full grid-rows-2">
          {/* Image Side */}
          <div className="bg-muted/20 relative overflow-hidden border-b">
            <GridBackground />

            {/* Image Container */}
            <div className="relative inset-0 z-10 p-8 md:p-12">
              <div className="group/image relative">
                <DecorativeCorners size="small" hoverExpand />

                {/* Media */}
                <div className="bg-background relative overflow-hidden border-2">
                  <div className="relative aspect-video overflow-hidden">
                    {!mediaSrc ? (
                      /* Blueprint Grid Pattern */
                      <div className="h-full w-full bg-background relative">
                        {/* Grid pattern with CSS */}
                        <div
                          className="absolute inset-0"
                          style={{
                            backgroundImage: `
                              linear-gradient(to right, rgb(var(--border) / 0.3) 1px, transparent 1px),
                              linear-gradient(to bottom, rgb(var(--border) / 0.3) 1px, transparent 1px)
                            `,
                            backgroundSize: '40px 40px'
                          }}
                        />
                        {/* Stronger grid lines every 5 cells */}
                        <div
                          className="absolute inset-0"
                          style={{
                            backgroundImage: `
                              linear-gradient(to right, rgb(var(--border) / 0.5) 2px, transparent 2px),
                              linear-gradient(to bottom, rgb(var(--border) / 0.5) 2px, transparent 2px)
                            `,
                            backgroundSize: '200px 200px'
                          }}
                        />
                      </div>
                    ) : mediaType === "video" ? (
                      <video
                        src={mediaSrc}
                        className="h-full w-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        aria-label={`Video de ${title}`}
                      />
                    ) : (
                      <img
                        src={mediaSrc}
                        alt={title}
                        className="h-full w-full object-cover"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="relative flex flex-col justify-center overflow-hidden p-8 md:p-12">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="text-muted-foreground font-mono text-xs uppercase">
                Proyecto {projectNumber}
              </span>
              <div className="bg-border h-4 w-px" aria-hidden="true" />
              <time className="text-muted-foreground font-mono text-xs">
                {date}
              </time>
            </div>

            <div className="mb-6">
              <h3 className="font-incognito text-3xl font-bold">{title}</h3>
              <HeadingLine className="mt-3" />
            </div>

            <p
              className="text-muted-foreground mb-6 text-base leading-relaxed md:text-lg lg:text-xl"
              dangerouslySetInnerHTML={{ __html: description }}
            />

            <div className="mb-8 flex flex-wrap gap-3">
              {githubUrl && (
                <Button
                  asChild
                  variant="default"
                  size="lg"
                  className="group/btn relative border-2 font-medium"
                >
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Ver código en GitHub"
                  >
                    <Github className="mr-2 h-4 w-4" aria-hidden="true" />
                    Ver Código
                    <ArrowUpRight
                      className="ml-1 h-3 w-3 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </Button>
              )}

              {demoUrl && (
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="group/btn border-2 font-medium"
                >
                  <a
                    href={demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Ver demo en vivo"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" aria-hidden="true" />
                    Ver Demo
                    <ArrowUpRight
                      className="ml-1 h-3 w-3 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop: Full screen centered video layout */}
      <div className="hidden h-full lg:flex lg:flex-col lg:justify-center lg:pb-16">
        <div className="relative px-6 py-4 lg:px-12 xl:px-16">
          {/* Centered large video container */}
          <div className="mx-auto max-w-6xl">
            {/* Image wrapper */}
            <div className="bg-muted/20 relative overflow-hidden border">
              <GridBackground />

              {/* Video section */}
              <div className="relative z-10 p-4 lg:p-6 xl:p-7">
                <div className="group/image relative">
                  <DecorativeCorners size="medium" hoverExpand />

                  {/* Media player */}
                  <div className="bg-background relative overflow-hidden border-2 shadow-2xl">
                    <div className="relative aspect-video overflow-hidden">
                      {!mediaSrc ? (
                        /* Blueprint Grid Pattern */
                        <div className="h-full w-full bg-background relative">
                          {/* Grid pattern with CSS */}
                          <div
                            className="absolute inset-0"
                            style={{
                              backgroundImage: `
                                linear-gradient(to right, rgb(var(--border) / 0.3) 1px, transparent 1px),
                                linear-gradient(to bottom, rgb(var(--border) / 0.3) 1px, transparent 1px)
                              `,
                              backgroundSize: '40px 40px'
                            }}
                          />
                          {/* Stronger grid lines every 5 cells */}
                          <div
                            className="absolute inset-0"
                            style={{
                              backgroundImage: `
                                linear-gradient(to right, rgb(var(--border) / 0.5) 2px, transparent 2px),
                                linear-gradient(to bottom, rgb(var(--border) / 0.5) 2px, transparent 2px)
                              `,
                              backgroundSize: '200px 200px'
                            }}
                          />
                        </div>
                      ) : mediaType === "video" ? (
                        <video
                          src={mediaSrc}
                          className="h-full w-full object-cover"
                          autoPlay
                          muted
                          loop
                          playsInline
                          aria-label={`Video de ${title}`}
                        />
                      ) : (
                        <img
                          src={mediaSrc}
                          alt={title}
                          className="h-full w-full object-cover"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content below image */}
            <div className="mt-6 text-center">
              <div className="mb-3 flex items-center justify-center gap-3">
                <span className="text-muted-foreground font-mono text-xs uppercase">
                  Proyecto {projectNumber}
                </span>
                <div className="bg-border h-4 w-px" aria-hidden="true" />
                <time className="text-muted-foreground font-mono text-xs">
                  {date}
                </time>
              </div>

              <h3 className="font-incognito mb-3 text-3xl font-bold">
                {title}
              </h3>

              <div className="mb-4 flex items-center justify-center gap-2">
                <div
                  className="bg-primary h-1"
                  style={{ width: "32px" }}
                  aria-hidden="true"
                />
                <div
                  className="bg-primary/60 h-1"
                  style={{ width: "16px" }}
                  aria-hidden="true"
                />
                <div
                  className="bg-primary/30 h-1"
                  style={{ width: "8px" }}
                  aria-hidden="true"
                />
              </div>

              <p
                className="text-muted-foreground mx-auto mb-5 max-w-2xl text-base leading-relaxed md:text-lg lg:text-xl"
                dangerouslySetInnerHTML={{ __html: description }}
              />

              <div className="flex flex-wrap justify-center gap-3">
                {githubUrl && (
                  <Button
                    asChild
                    variant="default"
                    size="lg"
                    className="group/btn relative border-2 font-medium"
                  >
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Ver código en GitHub"
                    >
                      <Github className="mr-2 h-4 w-4" aria-hidden="true" />
                      Ver Código
                      <ArrowUpRight
                        className="ml-1 h-3 w-3 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </a>
                  </Button>
                )}

                {demoUrl && (
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="group/btn border-2 font-medium"
                  >
                    <a
                      href={demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Ver demo en vivo"
                    >
                      <ExternalLink
                        className="mr-2 h-4 w-4"
                        aria-hidden="true"
                      />
                      Ver Demo
                      <ArrowUpRight
                        className="ml-1 h-3 w-3 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
