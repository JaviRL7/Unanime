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
import { Github, ArrowUpRight, ExternalLink, Sun, Moon } from "lucide-react";
import DecorativeCorners from "./shared/DecorativeCorners";
import GridBackground from "./shared/GridBackground";
import { LOGO_SVG } from "@/data/projects";
import type { ProjectHeroProps } from "@/types/projects";
import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
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
  const isGridBlock = projectId === "linkedin-stats" || projectId === "color-palette" || projectId === "tfg-arquitectura";
  const isInaniluxPortfolio = projectId === "inanilux-portfolio";
  const isDesignProcess = projectId === "design-process";
  const isExtraTFG = projectId === "extra-tfg";

  // Diapositiva especial para diagrama ERD
  const isDiagramaERD = projectId === "tfg-diagrama";

  // Si no hay título y no es un bloque especial, no renderizar hero
  if (!title && !isGridBlock && !isInaniluxPortfolio && !isDesignProcess && !isExtraTFG) {
    return null;
  }

  // Estado para el slideshow de imágenes del TFG
  const [currentTFGImage, setCurrentTFGImage] = useState(0);
  const tfgImages = ["/projects/b1.jpeg", "/projects/c4.jpeg", "/projects/c6.jpeg", "/projects/c8.jpeg"];

  useEffect(() => {
    if (!isExtraTFG) return;
    const interval = setInterval(() => {
      setCurrentTFGImage((prev) => (prev + 1) % tfgImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isExtraTFG, tfgImages.length]);

  // Renderizado especial para bloques con grid
  if (isGridBlock) {
    const isLinkedInStats = projectId === "linkedin-stats";

    return (
      <section className="group relative min-h-screen lg:h-screen w-full overflow-y-auto lg:overflow-hidden border-b lg:snap-start lg:snap-always bg-background">
        {/* Logo SVG - Shown in grid blocks */}
        <div className="absolute left-3 lg:left-4 top-3 lg:top-4 z-30 hidden lg:block">
          <div
            className="w-24 text-foreground"
            dangerouslySetInnerHTML={{ __html: LOGO_SVG }}
            aria-label="JaviRL Logo"
          />
        </div>

        {/* Project Label - Top right corner */}
        {projectNumber && (
          <div className="absolute right-2 md:right-3 top-2 md:top-3 z-30 hidden lg:flex lg:flex-col lg:items-end lg:gap-1.5 max-w-[180px]">
            <div className="bg-primary/10 border border-primary/20 px-2 py-px backdrop-blur-sm">
              <span className="font-mono text-[8px] xl:text-[9px] font-semibold text-primary uppercase tracking-wider">
                Proyecto {projectNumber}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="bg-background/30 inline-flex items-center gap-2 rounded-full px-2 py-1 backdrop-blur-md">
              {/* GitHub */}
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

              {/* LinkedIn */}
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

              {/* Theme Toggle */}
              <button
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                className="transition-transform duration-200 hover:scale-110"
                aria-label="Cambiar tema"
              >
                <ThemeToggleButton2 className="size-4" theme={resolvedTheme} />
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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4">
                  <path d="M12 19V5M5 12l7-7 7 7"/>
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Scroll Indicator - Centered bottom */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 hidden md:flex items-center justify-center text-muted-foreground">
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
          <div className="relative z-10 min-h-full flex flex-col lg:flex-row items-stretch justify-center gap-6 lg:gap-12 p-4 lg:px-10 lg:py-8">
            {/* Columna izquierda: Título y métricas destacadas */}
            <div className="flex-1 flex flex-col justify-center max-w-2xl 3xl:max-w-4xl 4xl:max-w-5xl">
              <h2 className="font-incognito text-xl lg:text-2xl xl:text-3xl font-bold mb-2">
                {title}
              </h2>
              <div className="flex items-center gap-1.5 mb-3">
                <div className="bg-primary h-0.5 w-8" />
                <div className="bg-primary/60 h-0.5 w-4" />
                <div className="bg-primary/30 h-0.5 w-2" />
              </div>

              {/* Texto motivacional */}
              <div className="relative mb-4 py-3 px-4">
                {/* Esquinas decorativas */}
                <div className="absolute top-0 left-0 h-2.5 w-2.5 border-t border-l border-primary/50" />
                <div className="absolute top-0 right-0 h-2.5 w-2.5 border-t border-r border-primary/50" />
                <div className="absolute bottom-0 left-0 h-2.5 w-2.5 border-b border-l border-primary/50" />
                <div className="absolute bottom-0 right-0 h-2.5 w-2.5 border-b border-r border-primary/50" />

                <p className="text-foreground/70 text-[10px] lg:text-xs xl:text-sm leading-relaxed italic">
                  &ldquo;Este proyecto es el que <span className="font-bold text-primary">más ilusión me hizo</span>, no solo porque cumplía la <span className="font-semibold text-foreground">necesidad de mis seres queridos</span>, sino que alcancé bastantes <span className="font-bold text-primary">interacciones, reviews y contactos</span> en LinkedIn. Me devolvió bastante la <span className="font-bold text-primary">motivación</span> después de un periodo complicado.&rdquo;
                </p>
              </div>

              {/* Métricas principales destacadas */}
              <div className="grid grid-cols-2 gap-2 lg:gap-3 mb-3">
                <div className="border border-border p-2 lg:p-3 bg-background/50">
                  <div className="text-base lg:text-xl xl:text-2xl font-bold text-primary font-mono">
                    <AnimatedCounter end={50174} separator="." decimals={0} />
                  </div>
                  <div className="text-[8px] lg:text-[10px] text-muted-foreground uppercase tracking-wider mt-0.5">Impresiones</div>
                </div>
                <div className="border border-border p-2 lg:p-3 bg-background/50">
                  <div className="text-base lg:text-xl xl:text-2xl font-bold text-primary font-mono">
                    <AnimatedCounter end={29081} separator="." decimals={0} />
                  </div>
                  <div className="text-[8px] lg:text-[10px] text-muted-foreground uppercase tracking-wider mt-0.5">Alcance</div>
                </div>
                <div className="border border-border p-2 lg:p-3 bg-background/50">
                  <div className="text-base lg:text-xl xl:text-2xl font-bold text-primary font-mono">
                    <AnimatedCounter end={725} separator="." decimals={0} />
                  </div>
                  <div className="text-[8px] lg:text-[10px] text-muted-foreground uppercase tracking-wider mt-0.5">Reacciones</div>
                </div>
                <div className="border border-border p-2 lg:p-3 bg-background/50">
                  <div className="text-base lg:text-xl xl:text-2xl font-bold text-primary font-mono">
                    <AnimatedCounter end={332} separator="." decimals={0} />
                  </div>
                  <div className="text-[8px] lg:text-[10px] text-muted-foreground uppercase tracking-wider mt-0.5">Visitas Perfil</div>
                </div>
              </div>

              {/* Métricas secundarias en lista */}
              <div className="space-y-1.5 text-[10px] lg:text-xs">
                <div className="flex justify-between text-muted-foreground border-b border-border/50 pb-1.5">
                  <span>Visitas al enlace</span>
                  <span className="font-mono font-semibold">
                    <AnimatedCounter end={130} separator="" decimals={0} />
                  </span>
                </div>
                <div className="flex justify-between text-muted-foreground border-b border-border/50 pb-1.5">
                  <span>Comentarios</span>
                  <span className="font-mono font-semibold">
                    <AnimatedCounter end={7} separator="" decimals={0} />
                  </span>
                </div>
                <div className="flex justify-between text-muted-foreground border-b border-border/50 pb-1.5">
                  <span>Veces compartido</span>
                  <span className="font-mono font-semibold">
                    <AnimatedCounter end={9} separator="" decimals={0} />
                  </span>
                </div>
                <div className="flex justify-between text-muted-foreground border-b border-border/50 pb-1.5">
                  <span>Veces guardado</span>
                  <span className="font-mono font-semibold">
                    <AnimatedCounter end={24} separator="" decimals={0} />
                  </span>
                </div>
              </div>
            </div>

            {/* Columna derecha: Imagen y enlaces */}
            <div className="flex-1 flex flex-col justify-center gap-3 lg:gap-4 max-w-2xl 3xl:max-w-4xl 4xl:max-w-5xl">
              {/* Imagen con bordes decorativos */}
              <div className="relative w-full mx-auto group/image">
                {/* Esquinas decorativas (estilo video) */}
                <div className="border-foreground/20 absolute -top-1.5 -left-1.5 h-6 w-6 border-t border-l transition-all group-hover/image:-top-2 group-hover/image:-left-2" />
                <div className="border-foreground/20 absolute -top-1.5 -right-1.5 h-6 w-6 border-t border-r transition-all group-hover/image:-top-2 group-hover/image:-right-2" />
                <div className="border-foreground/20 absolute -bottom-1.5 -left-1.5 h-6 w-6 border-b border-l transition-all group-hover/image:-bottom-2 group-hover/image:-left-2" />
                <div className="border-foreground/20 absolute -right-1.5 -bottom-1.5 h-6 w-6 border-r border-b transition-all group-hover/image:-right-2 group-hover/image:-bottom-2" />

                <div className="bg-background relative overflow-hidden border">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src="/projects/q1.PNG"
                      alt="LinkedIn Stats - Impacto del proyecto"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Enlaces a LinkedIn */}
              <div className="flex flex-wrap gap-2 max-w-md mx-auto w-full justify-center">
                <Button asChild variant="outline" size="sm" className="group/btn border font-medium text-[10px] lg:text-xs h-7 lg:h-8">
                  <a
                    href="https://www.linkedin.com/feed/update/urn:li:activity:7381240641197887488/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Ver publicación 1 en LinkedIn"
                  >
                    <ExternalLink className="mr-1.5 h-3 w-3" aria-hidden="true" />
                    Ver Publicación 1
                    <ArrowUpRight className="ml-1 h-2.5 w-2.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" aria-hidden="true" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="sm" className="group/btn border font-medium text-[10px] lg:text-xs h-7 lg:h-8">
                  <a
                    href="https://www.linkedin.com/feed/update/urn:li:activity:7373256816685727744/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Ver publicación 2 en LinkedIn"
                  >
                    <ExternalLink className="mr-1.5 h-3 w-3" aria-hidden="true" />
                    Ver Publicación 2
                    <ArrowUpRight className="ml-1 h-2.5 w-2.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" aria-hidden="true" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
          )}

          {/* Contenido para Arquitectura de Base de Datos (TFG) - Arena */}
          {projectId === "tfg-arquitectura" && (
            <div className="relative z-10 h-full w-full">
              {/* Scroll Indicator */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 hidden md:flex items-center justify-center text-muted-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4 animate-pulse" aria-hidden="true">
                  <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                  <path d="M12 8v8"></path>
                  <path d="m8 12 4 4 4-4"></path>
                </svg>
              </div>

              <div className="h-full w-full grid grid-cols-1 lg:grid-cols-2">
                {/* Columna izquierda - Info general */}
                <div className="relative min-h-fit lg:h-full flex items-center">
                  <div className="w-full p-6 md:p-8 lg:p-10 xl:p-12">
                    <div className="space-y-4 md:space-y-5 max-w-xl 3xl:max-w-2xl 4xl:max-w-3xl mx-auto lg:mx-0">
                      {/* Título */}
                      <div>
                        <h2 className="font-incognito text-xl md:text-2xl lg:text-3xl font-bold text-primary">Arena</h2>
                        <p className="text-foreground/70 text-xs md:text-sm mt-1">Plataforma de gestión competitiva League of Legends</p>
                        <div className="flex items-center gap-1.5 mt-2">
                          <div className="h-0.5 bg-primary w-10" />
                          <div className="h-0.5 bg-primary/60 w-5" />
                          <div className="h-0.5 bg-primary/30 w-2.5" />
                        </div>
                      </div>

                      {/* Descripción */}
                      <p className="text-xs md:text-sm text-foreground/70 leading-relaxed">
                        Sistema que traduce la <span className="font-bold text-primary">complejidad de esports</span> en una <span className="font-semibold text-foreground">estructura de datos coherente</span>. Organizado en <span className="font-bold text-primary">14 modelos Eloquent</span> interconectados con más de <span className="font-bold text-primary">100 métodos</span> personalizados.
                      </p>

                      {/* Métricas en grid 2x2 */}
                      <div className="grid grid-cols-2 gap-2 md:gap-3">
                        <div className="border border-border p-3 bg-background/50 text-center">
                          <div className="text-lg md:text-xl lg:text-2xl font-bold text-primary font-mono">14</div>
                          <div className="text-[9px] md:text-[10px] text-muted-foreground uppercase tracking-wider">Modelos</div>
                        </div>
                        <div className="border border-border p-3 bg-background/50 text-center">
                          <div className="text-lg md:text-xl lg:text-2xl font-bold text-primary font-mono">100+</div>
                          <div className="text-[9px] md:text-[10px] text-muted-foreground uppercase tracking-wider">Métodos</div>
                        </div>
                        <div className="border border-border p-3 bg-background/50 text-center">
                          <div className="text-lg md:text-xl lg:text-2xl font-bold text-primary font-mono">20</div>
                          <div className="text-[9px] md:text-[10px] text-muted-foreground uppercase tracking-wider">Relaciones/Partida</div>
                        </div>
                        <div className="border border-border p-3 bg-background/50 text-center">
                          <div className="text-lg md:text-xl lg:text-2xl font-bold text-primary font-mono">4</div>
                          <div className="text-[9px] md:text-[10px] text-muted-foreground uppercase tracking-wider">Capas</div>
                        </div>
                      </div>

                      {/* Arquitectura en 4 capas */}
                      <div className="grid grid-cols-2 gap-2">
                        <div className="border-l-2 border-primary/50 pl-2 py-1">
                          <div className="text-[10px] md:text-xs font-bold text-primary uppercase">Núcleo</div>
                          <div className="text-[9px] md:text-[10px] text-foreground/60">Usuarios, equipos, jugadores</div>
                        </div>
                        <div className="border-l-2 border-primary/50 pl-2 py-1">
                          <div className="text-[10px] md:text-xs font-bold text-primary uppercase">Competiciones</div>
                          <div className="text-[9px] md:text-[10px] text-foreground/60">Ligas, series, partidas</div>
                        </div>
                        <div className="border-l-2 border-primary/50 pl-2 py-1">
                          <div className="text-[10px] md:text-xs font-bold text-primary uppercase">Estadísticas</div>
                          <div className="text-[9px] md:text-[10px] text-foreground/60">KDA, rankings, métricas</div>
                        </div>
                        <div className="border-l-2 border-primary/50 pl-2 py-1">
                          <div className="text-[10px] md:text-xs font-bold text-primary uppercase">Adicional</div>
                          <div className="text-[9px] md:text-[10px] text-foreground/60">Transferencias, predicciones</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Columna derecha - Desafíos técnicos */}
                <div className="relative min-h-fit lg:h-full flex items-center border-t lg:border-t-0 lg:border-l border-border/30">
                  <div className="w-full p-6 md:p-8 lg:p-10 xl:p-12">
                    <div className="space-y-4 md:space-y-5 max-w-xl 3xl:max-w-2xl 4xl:max-w-3xl mx-auto lg:mx-0">
                      {/* Título sección */}
                      <div className="flex items-center gap-2">
                        <div className="h-0.5 w-4 bg-primary" />
                        <h3 className="text-sm md:text-base font-bold text-foreground uppercase tracking-wider">Desafíos Técnicos</h3>
                      </div>

                      {/* Desafíos */}
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-xs md:text-sm 3xl:text-lg 4xl:text-xl font-bold text-primary mb-1">Relaciones Temporales</h4>
                          <p className="text-[10px] md:text-xs text-foreground/70 leading-relaxed">
                            Capturar <span className="font-semibold text-foreground">cuándo</span> cada jugador formó parte de cada plantilla, gestionando contratos, sustituciones y fechas de expiración.
                          </p>
                        </div>

                        <div>
                          <h4 className="text-xs md:text-sm 3xl:text-lg 4xl:text-xl font-bold text-primary mb-1">Integridad por Partida</h4>
                          <p className="text-[10px] md:text-xs text-foreground/70 leading-relaxed">
                            Cada partida mantiene <span className="font-semibold text-foreground">20 relaciones activas</span>: 10 jugadores con estadísticas y 10 foreign keys para bans de campeones.
                          </p>
                        </div>

                        <div>
                          <h4 className="text-xs md:text-sm 3xl:text-lg 4xl:text-xl font-bold text-primary mb-1">SQL Avanzado</h4>
                          <p className="text-[10px] md:text-xs text-foreground/70 leading-relaxed">
                            Queries con <span className="font-semibold text-foreground">subconsultas y joins optimizados</span> para rankings en tiempo real y métricas competitivas.
                          </p>
                        </div>
                      </div>

                      {/* Quote */}
                      <div className="relative py-3 px-4 mt-2">
                        <div className="absolute top-0 left-0 h-2.5 w-2.5 border-t border-l border-primary/50" />
                        <div className="absolute top-0 right-0 h-2.5 w-2.5 border-t border-r border-primary/50" />
                        <div className="absolute bottom-0 left-0 h-2.5 w-2.5 border-b border-l border-primary/50" />
                        <div className="absolute bottom-0 right-0 h-2.5 w-2.5 border-b border-r border-primary/50" />
                        <p className="text-[10px] md:text-xs text-muted-foreground italic text-center">
                          &ldquo;<span className="font-bold text-primary">Complejidad competitiva</span> traducida en <span className="font-semibold text-foreground">estructura consultable</span>&rdquo;
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Contenido para Paleta de Colores */}
          {projectId === "color-palette" && (
            <div className="relative z-10 min-h-full lg:h-full flex flex-col lg:overflow-hidden">
              {/* Título superior más compacto */}
              <div className="flex-shrink-0 pt-16 lg:pt-20 px-4 md:px-6 lg:px-8">
                <h2 className="font-incognito text-lg md:text-xl lg:text-2xl font-bold mb-1">
                  Paleta Cromática
                </h2>
                <p className="text-[10px] md:text-xs lg:text-sm text-muted-foreground mb-2">
                  Análisis de colores principales del diseño
                </p>
              </div>

              {/* Contenedor principal con scroll */}
              <div className="flex-1 lg:overflow-y-auto px-4 md:px-6 lg:px-8 pb-4 lg:pb-6">
                <div className="space-y-4 md:space-y-6 lg:space-y-10 max-w-6xl mx-auto">

                  {/* FILA ÚNICA: 4 Columnas - Objetivos + Paletas */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6 mb-6 md:mb-8 lg:mb-10 mt-6 md:mt-8 lg:mt-10">

                    {/* Contenedor de Objetivos - Ocupa 2 columnas */}
                    <div className="col-span-1 md:col-span-2 flex flex-col items-center">
                      {/* Título Objetivos centrado */}
                      <div className="text-center mb-3">
                        <h3 className="text-base md:text-lg lg:text-xl font-bold uppercase tracking-wider mb-1.5 lg:mb-2">Objetivos</h3>
                        <div className="flex items-center justify-center gap-1.5">
                          <div className="h-1 bg-primary w-8 md:w-10"></div>
                          <div className="h-1 bg-primary/60 w-4 md:w-5"></div>
                          <div className="h-1 bg-primary/30 w-2"></div>
                        </div>
                      </div>

                      {/* Grid de 2 columnas centrado */}
                      <div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-md 3xl:max-w-lg 4xl:max-w-xl w-full">
                        {/* Columna 1: Primeros 2 objetivos */}
                        <div className="space-y-1.5 text-center">
                          <div>
                            <div className="text-xs md:text-sm 3xl:text-lg 4xl:text-xl font-bold text-foreground">Conexión emocional</div>
                            <div className="text-[9px] md:text-[10px] text-muted-foreground italic">Crear vínculos con el público</div>
                          </div>
                          <div>
                            <div className="text-xs md:text-sm 3xl:text-lg 4xl:text-xl font-bold text-foreground">Estudio del público</div>
                            <div className="text-[9px] md:text-[10px] text-muted-foreground italic">Conocer gustos y necesidades</div>
                          </div>
                        </div>

                        {/* Columna 2: Últimos 2 objetivos */}
                        <div className="space-y-1.5 text-center">
                          <div>
                            <div className="text-xs md:text-sm 3xl:text-lg 4xl:text-xl font-bold text-foreground">Atención a los detalles</div>
                            <div className="text-[9px] md:text-[10px] text-muted-foreground italic">Cuidar cada elemento</div>
                          </div>
                          <div>
                            <div className="text-xs md:text-sm 3xl:text-lg 4xl:text-xl font-bold text-foreground">Diseños originales</div>
                            <div className="text-[9px] md:text-[10px] text-muted-foreground italic">Identidad única</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Columna 3: Paleta modo claro */}
                    <div className="space-y-2">
                      <h3 className="text-sm md:text-base lg:text-lg font-bold uppercase tracking-wider text-center lg:text-left">Paleta Claro</h3>
                      <div className="flex gap-2 items-start">
                        <div className="w-16 md:w-20 lg:w-24 flex-shrink-0">
                          <img
                            src="/projects/i3.png"
                            alt="Paleta Sol"
                            className="w-full h-auto object-contain rounded-lg shadow-lg border border-border"
                          />
                        </div>
                        <div className="space-y-1 flex-1">
                          <div className="flex items-center gap-1.5">
                            <div className="w-5 h-5 md:w-6 md:h-6 rounded border border-border shadow-sm flex-shrink-0" style={{ backgroundColor: '#F7D1D5' }} />
                            <div className="flex flex-col">
                              <span className="font-mono text-[8px] md:text-[9px] font-bold">#F7D1D5</span>
                              <span className="text-[7px] md:text-[7.5px] text-muted-foreground font-semibold">Rosa pastel</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <div className="w-5 h-5 md:w-6 md:h-6 rounded border border-border shadow-sm flex-shrink-0" style={{ backgroundColor: '#816D5A' }} />
                            <div className="flex flex-col">
                              <span className="font-mono text-[8px] md:text-[9px] font-bold">#816D5A</span>
                              <span className="text-[7px] md:text-[7.5px] text-muted-foreground font-semibold">Marrón cálido</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <div className="w-5 h-5 md:w-6 md:h-6 rounded border border-border shadow-sm flex-shrink-0" style={{ backgroundColor: '#FAFAFA' }} />
                            <div className="flex flex-col">
                              <span className="font-mono text-[8px] md:text-[9px] font-bold">#FAFAFA</span>
                              <span className="text-[7px] md:text-[7.5px] text-muted-foreground font-semibold">Blanco suave</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Columna 4: Paleta modo oscuro */}
                    <div className="space-y-2">
                      <h3 className="text-sm md:text-base lg:text-lg font-bold uppercase tracking-wider text-center lg:text-left">Paleta Oscuro</h3>
                      <div className="flex gap-2 items-start">
                        <div className="w-16 md:w-20 lg:w-24 flex-shrink-0">
                          <img
                            src="/projects/i4.png"
                            alt="Paleta Luna"
                            className="w-full h-auto object-contain rounded-lg shadow-lg border border-border"
                          />
                        </div>
                        <div className="space-y-1 flex-1">
                          <div className="flex items-center gap-1.5">
                            <div className="w-5 h-5 md:w-6 md:h-6 rounded border border-border shadow-sm flex-shrink-0" style={{ backgroundColor: '#746899' }} />
                            <div className="flex flex-col">
                              <span className="font-mono text-[8px] md:text-[9px] font-bold">#746899</span>
                              <span className="text-[7px] md:text-[7.5px] text-muted-foreground font-semibold">Morado lavanda</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <div className="w-5 h-5 md:w-6 md:h-6 rounded border border-border shadow-sm flex-shrink-0" style={{ backgroundColor: '#EE8778' }} />
                            <div className="flex flex-col">
                              <span className="font-mono text-[8px] md:text-[9px] font-bold">#EE8778</span>
                              <span className="text-[7px] md:text-[7.5px] text-muted-foreground font-semibold">Coral suave</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <div className="w-5 h-5 md:w-6 md:h-6 rounded border border-border shadow-sm flex-shrink-0" style={{ backgroundColor: '#413350' }} />
                            <div className="flex flex-col">
                              <span className="font-mono text-[8px] md:text-[9px] font-bold">#413350</span>
                              <span className="text-[7px] md:text-[7.5px] text-muted-foreground font-semibold">Púrpura oscuro</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* SEGUNDA SECCIÓN: Flujos de transformación */}
                  <div className="space-y-5 md:space-y-6 lg:space-y-8 w-full pt-4 lg:pt-6">
                    {/* Sol - Flujo con flechas */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-2.5 md:gap-3 w-full px-2">
                      <p className="text-[10px] md:text-xs lg:text-sm italic text-foreground/90 w-full md:w-36 lg:w-40 leading-tight text-center font-medium">Elemento común en diseño web</p>
                      <img src="/projects/f1.png" alt="→" className="h-7 md:h-9 lg:h-11 w-auto opacity-70 rotate-90 md:rotate-0 flex-shrink-0" />
                      <Button variant="outline" size="sm" className="px-3 py-2 h-auto min-w-[44px] flex-shrink-0">
                        <Sun className="h-4 w-4 lg:h-5 lg:w-5" />
                      </Button>
                      <img src="/projects/f1.png" alt="→" className="h-7 md:h-9 lg:h-11 w-auto opacity-70 rotate-90 md:rotate-0 flex-shrink-0" />
                      <p className="text-[10px] md:text-xs lg:text-sm italic text-foreground/90 w-full md:w-36 lg:w-40 leading-tight text-center font-medium">Adaptar elemento a la iconografía de la temática</p>
                      <img src="/projects/f1.png" alt="→" className="h-7 md:h-9 lg:h-11 w-auto opacity-70 rotate-90 md:rotate-0 flex-shrink-0" />
                      <Button variant="outline" size="sm" className="px-3 py-2 h-auto border-orange-500/50 min-w-[120px] flex-shrink-0">
                        <Sun className="h-4 w-4 lg:h-5 lg:w-5 text-orange-500 mr-1.5 flex-shrink-0" />
                        <span className="text-[10px] lg:text-xs font-semibold">Pokémon Sol</span>
                      </Button>
                      <img src="/projects/f1.png" alt="→" className="h-7 md:h-9 lg:h-11 w-auto opacity-70 rotate-90 md:rotate-0 flex-shrink-0" />
                      <div className="w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-lg overflow-hidden border-2 border-border shadow-lg flex-shrink-0">
                        <img src="/projects/i5.jpg" alt="Icono Sol" className="w-full h-full object-cover" />
                      </div>
                      <img src="/projects/f1.png" alt="→" className="h-7 md:h-9 lg:h-11 w-auto opacity-70 rotate-90 md:rotate-0 flex-shrink-0" />
                      <p className="text-[10px] md:text-xs lg:text-sm italic text-foreground/90 w-full md:w-36 lg:w-40 leading-tight text-center font-medium">Utilizar colores de Pokémon reconocibles con la idea en el diseño</p>
                    </div>

                    {/* Luna - Flujo con flechas */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-2.5 md:gap-3 w-full px-2">
                      <p className="text-[10px] md:text-xs lg:text-sm italic text-foreground/90 w-full md:w-36 lg:w-40 leading-tight text-center font-medium">Elemento aburrido</p>
                      <img src="/projects/f1.png" alt="→" className="h-7 md:h-9 lg:h-11 w-auto opacity-70 rotate-90 md:rotate-0 flex-shrink-0" />
                      <Button variant="outline" size="sm" className="px-3 py-2 h-auto min-w-[44px] flex-shrink-0">
                        <Moon className="h-4 w-4 lg:h-5 lg:w-5" />
                      </Button>
                      <img src="/projects/f1.png" alt="→" className="h-7 md:h-9 lg:h-11 w-auto opacity-70 rotate-90 md:rotate-0 flex-shrink-0" />
                      <p className="text-[10px] md:text-xs lg:text-sm italic text-foreground/90 w-full md:w-36 lg:w-40 leading-tight text-center font-medium">Primera idea: poner logo de Pokémon edición Luna</p>
                      <img src="/projects/f1.png" alt="→" className="h-7 md:h-9 lg:h-11 w-auto opacity-70 rotate-90 md:rotate-0 flex-shrink-0" />
                      <Button variant="outline" size="sm" className="px-3 py-2 h-auto border-purple-500/50 min-w-[120px] flex-shrink-0">
                        <Moon className="h-4 w-4 lg:h-5 lg:w-5 text-purple-500 mr-1.5 flex-shrink-0" />
                        <span className="text-[10px] lg:text-xs font-semibold">Pokémon Luna</span>
                      </Button>
                      <img src="/projects/f1.png" alt="→" className="h-7 md:h-9 lg:h-11 w-auto opacity-70 rotate-90 md:rotate-0 flex-shrink-0" />
                      <div className="w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-lg overflow-hidden border-2 border-border shadow-lg flex-shrink-0">
                        <img src="/projects/i6.jpg" alt="Icono Luna" className="w-full h-full object-cover" />
                      </div>
                      <img src="/projects/f1.png" alt="→" className="h-7 md:h-9 lg:h-11 w-auto opacity-70 rotate-90 md:rotate-0 flex-shrink-0" />
                      <p className="text-[10px] md:text-xs lg:text-sm italic text-foreground/90 w-full md:w-36 lg:w-40 leading-tight text-center font-medium">Opciones mucho más reconocibles para el público mainstream</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>
    );
  }

  // Renderizado especial para Proceso de Diseño - Portfolio Inanilux
  if (isDesignProcess) {
    return (
      <section className="group relative min-h-screen lg:h-screen w-full overflow-y-auto lg:overflow-hidden border-b lg:snap-start lg:snap-always">
        {/* Logo SVG - Top left */}
        <div className="absolute left-3 lg:left-4 top-3 lg:top-4 z-30 hidden lg:block">
          <div
            className="w-24 text-foreground"
            dangerouslySetInnerHTML={{ __html: LOGO_SVG }}
            aria-label="JaviRL Logo"
          />
        </div>

        {/* Project Label - Top right corner */}
        {projectNumber && (
          <div className="absolute right-2 md:right-3 top-2 md:top-3 z-30 hidden lg:flex lg:flex-col lg:items-end lg:gap-1.5 max-w-[180px]">
            <div className="bg-primary/10 border border-primary/20 px-2 py-px backdrop-blur-sm">
              <span className="font-mono text-[8px] xl:text-[9px] font-semibold text-primary uppercase tracking-wider">
                Proyecto {projectNumber}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="bg-background/30 inline-flex items-center gap-2 rounded-full px-2 py-1 backdrop-blur-md">
              <a href="https://github.com/JaviRL7" target="_blank" rel="noreferrer noopener" className="text-foreground/60 hover:text-foreground text-sm transition-colors duration-200 hover:scale-110" aria-label="GitHub">
                <svg viewBox="0 0 24 24" className="size-4"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="currentColor"/></svg>
              </a>
              <div className="bg-border h-4 w-px" />
              <a href="https://www.linkedin.com/in/javier-rodriguez-lopez-4795a8180/" target="_blank" rel="noreferrer noopener" className="text-foreground/60 hover:text-foreground transition-all duration-200 hover:scale-110" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <div className="bg-border h-4 w-px" />
              <button onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")} className="transition-transform duration-200 hover:scale-110" aria-label="Cambiar tema">
                <ThemeToggleButton2 className="size-4" theme={resolvedTheme} />
              </button>
              <div className="bg-border h-4 w-px" />
              <button onClick={() => { const heroSection = document.querySelector('#home'); if (heroSection) { heroSection.scrollIntoView({ behavior: 'smooth', block: 'start' }); } }} className="text-foreground/60 hover:text-foreground transition-all duration-200 hover:scale-110" aria-label="Volver arriba">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
              </button>
            </div>
          </div>
        )}

        {/* FONDOS - Mobile: arriba oscuro/abajo claro | Desktop: izquierda clara/derecha oscura */}
        <div className="absolute inset-0 flex flex-col lg:flex-row">
          {/* Mobile: arriba (oscuro) | Desktop: izquierda (clara) */}
          <div className="relative h-1/2 lg:h-full w-full lg:w-1/2 bg-muted/40 lg:bg-background">
            <div className="absolute inset-0" aria-hidden="true">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border/30 -translate-y-1/2"></div>
              <div className="absolute left-1/2 top-0 h-full w-0.5 bg-border/30 -translate-x-1/2"></div>
            </div>
          </div>
          {/* Mobile: abajo (claro) | Desktop: derecha (oscura) */}
          <div className="relative h-1/2 lg:h-full w-full lg:w-1/2 bg-background lg:bg-muted/40">
            <div className="absolute inset-0" aria-hidden="true">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border/30 -translate-y-1/2"></div>
              <div className="absolute left-1/2 top-0 h-full w-0.5 bg-border/30 -translate-x-1/2"></div>
            </div>
          </div>
        </div>

        {/* CONTENIDO */}
        <div className="relative z-10 h-full flex flex-col">
          {/* TÍTULO CENTRADO - Entre las dos columnas */}
          <div className="text-center py-6 md:py-8">
            <h2 className="font-incognito text-lg md:text-xl lg:text-2xl font-bold mb-1">
              Proceso de Diseño
            </h2>
            <p className="text-[9px] md:text-xs text-muted-foreground">Portfolio Inanilux</p>
            <div className="flex items-center justify-center gap-1.5 mt-2">
              <div className="h-0.5 bg-primary w-8" />
              <div className="h-0.5 bg-primary/60 w-4" />
              <div className="h-0.5 bg-primary/30 w-2" />
            </div>
          </div>

          {/* DOS COLUMNAS */}
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2">
            {/* COLUMNA IZQUIERDA - 3 puntos */}
            <div className="relative flex items-start justify-center p-6 md:p-8 lg:p-10">
              <div className="space-y-4 md:space-y-5 w-full max-w-md 3xl:max-w-lg 4xl:max-w-xl">
                {/* Bloque 1: Identidad Visual */}
                <div className="space-y-1 md:space-y-1.5">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-base md:text-lg font-bold text-primary">01</span>
                    <h3 className="font-incognito text-xs md:text-sm 3xl:text-lg 4xl:text-xl font-bold">Identidad Visual</h3>
                  </div>
                  <div className="space-y-0.5 md:space-y-1 text-[8px] md:text-[9px] lg:text-[10px] 3xl:text-sm 4xl:text-base leading-relaxed text-foreground/70">
                    <p className="font-mono">
                      <span className="font-bold text-primary">Estilo:</span> Anime · Colorido · Infantil · Cálido
                    </p>
                    <p>
                      Diseño <span className="font-bold text-primary">amable</span> evocando Pokémon con <span className="font-semibold text-foreground">tonos pastel</span> y creatividad.
                    </p>
                    <div className="border-l border-primary/50 pl-2 space-y-0.5">
                      <p>— Paleta cromática viva</p>
                      <p>— Tipografía redondeada</p>
                      <p>— Ilustraciones acompañantes</p>
                    </div>
                  </div>
                </div>

                {/* Bloque 2: Enfoque de Contenido */}
                <div className="space-y-1 md:space-y-1.5">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-base md:text-lg font-bold text-primary">02</span>
                    <h3 className="font-incognito text-xs md:text-sm 3xl:text-lg 4xl:text-xl font-bold">Enfoque de Contenido</h3>
                  </div>
                  <div className="space-y-0.5 md:space-y-1 text-[8px] md:text-[9px] lg:text-[10px] 3xl:text-sm 4xl:text-base leading-relaxed text-foreground/70">
                    <p>
                      Contenido <span className="font-bold text-primary">accesible</span> para audiencia joven/familiar con <span className="font-semibold text-foreground">comunicación natural</span>.
                    </p>
                    <div className="border-l border-primary/50 pl-2 space-y-0.5">
                      <p>— Galería con mejores obras</p>
                      <p>— Clips destacados de streams</p>
                      <p>— Descripción de estilo artístico</p>
                    </div>
                  </div>
                </div>

                {/* Bloque 3: Métricas y Alcance */}
                <div className="space-y-1 md:space-y-1.5">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-base md:text-lg font-bold text-primary">03</span>
                    <h3 className="font-incognito text-xs md:text-sm 3xl:text-lg 4xl:text-xl font-bold">Métricas y Alcance</h3>
                  </div>
                  <div className="space-y-0.5 md:space-y-1 text-[8px] md:text-[9px] lg:text-[10px] 3xl:text-sm 4xl:text-base leading-relaxed text-foreground/70">
                    <p>
                      Análisis de <span className="font-bold text-primary">redes</span> con datos de <span className="font-semibold text-foreground">seguidores y engagement</span> visual.
                    </p>
                    <div className="border-l border-primary/50 pl-2 space-y-0.5">
                      <p>— Seguidores y crecimiento</p>
                      <p>— Alcance promedio</p>
                      <p>— Valor para colaboraciones</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* COLUMNA DERECHA - 3 puntos */}
            <div className="relative flex items-start justify-center p-6 md:p-8 lg:p-10">
              <div className="space-y-4 md:space-y-5 w-full max-w-md 3xl:max-w-lg 4xl:max-w-xl">
                {/* Bloque 4: Panel de Publicaciones */}
                <div className="space-y-1 md:space-y-1.5">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-base md:text-lg font-bold text-primary">04</span>
                    <h3 className="font-incognito text-xs md:text-sm 3xl:text-lg 4xl:text-xl font-bold">Panel de Publicaciones</h3>
                  </div>
                  <div className="space-y-0.5 md:space-y-1 text-[8px] md:text-[9px] lg:text-[10px] 3xl:text-sm 4xl:text-base leading-relaxed text-foreground/70">
                    <p>
                      <span className="font-bold text-primary">Calendario</span> de contenido con acceso directo a <span className="font-semibold text-foreground">plataformas</span>.
                    </p>
                    <div className="border-l border-primary/50 pl-2 space-y-0.5">
                      <p>— Módulo de actualizaciones</p>
                      <p>— Enlaces directos a redes</p>
                      <p>— Opción de notificaciones</p>
                    </div>
                  </div>
                </div>

                {/* Bloque 5: Experiencia de Usuario */}
                <div className="space-y-1 md:space-y-1.5">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-base md:text-lg font-bold text-primary">05</span>
                    <h3 className="font-incognito text-xs md:text-sm 3xl:text-lg 4xl:text-xl font-bold">Experiencia de Usuario</h3>
                  </div>
                  <div className="space-y-0.5 md:space-y-1 text-[8px] md:text-[9px] lg:text-[10px] 3xl:text-sm 4xl:text-base leading-relaxed text-foreground/70">
                    <p>
                      Flujo <span className="font-bold text-primary">natural y emocional</span> transmitiendo su <span className="font-semibold text-foreground">mundo visual</span>.
                    </p>
                    <div className="border-l border-primary/50 pl-2 space-y-0.5">
                      <p>— Transmitir alegría y arte</p>
                      <p>— Balance infantil-profesional</p>
                      <p>— Conexión emocional inmediata</p>
                    </div>
                  </div>
                </div>

                {/* Bloque 6: Propósito Final */}
                <div className="space-y-1 md:space-y-1.5">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-base md:text-lg font-bold text-primary">06</span>
                    <h3 className="font-incognito text-xs md:text-sm 3xl:text-lg 4xl:text-xl font-bold">Propósito Final</h3>
                  </div>
                  <div className="space-y-0.5 md:space-y-1 text-[8px] md:text-[9px] lg:text-[10px] 3xl:text-sm 4xl:text-base leading-relaxed text-foreground/70">
                    <p>
                      <span className="font-bold text-primary">Carta de presentación</span> visual para <span className="font-semibold text-foreground">empresas y colaboradores</span>.
                    </p>
                    <div className="border-l border-primary/50 pl-2 space-y-0.5">
                      <p>— Profesionalidad con estilo propio</p>
                      <p>— Portfolio de impacto</p>
                      <p>— Listo para oportunidades</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* QUOTE CENTRADO - Entre las dos columnas */}
          <div className="text-center py-3 md:py-4 mb-12 md:mb-16">
            <div className="relative inline-block py-3 px-6">
              <div className="absolute top-0 left-0 h-2.5 w-2.5 border-t border-l border-primary/50" />
              <div className="absolute top-0 right-0 h-2.5 w-2.5 border-t border-r border-primary/50" />
              <div className="absolute bottom-0 left-0 h-2.5 w-2.5 border-b border-l border-primary/50" />
              <div className="absolute bottom-0 right-0 h-2.5 w-2.5 border-b border-r border-primary/50" />
              <p className="text-[9px] md:text-[10px] text-muted-foreground italic">
                &ldquo;<span className="font-bold text-primary">Portfolio</span> como experiencia visual: del <span className="font-semibold text-foreground">arte Pokémon</span> al <span className="font-bold text-primary">impacto digital</span>&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden items-center justify-center gap-1 font-mono text-xs md:inline-flex text-muted-foreground">
          DESPLÁZATE
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4 animate-pulse" aria-hidden="true">
            <rect width="18" height="18" x="3" y="3" rx="2"></rect>
            <path d="M12 8v8"></path>
            <path d="m8 12 4 4 4-4"></path>
          </svg>
        </div>
      </section>
    );
  }

  // Renderizado especial para Extra TFG (slideshow de imágenes)
  if (isExtraTFG) {
    return (
      <section
        id={`proyecto-${projectNumber}`}
        className="group relative flex min-h-screen lg:h-screen w-full flex-col overflow-y-auto lg:overflow-hidden border-b lg:snap-start lg:snap-always bg-background"
      >
        {/* Logo SVG - Top left */}
        <div className="absolute left-3 lg:left-4 top-3 lg:top-4 z-30 hidden lg:block">
          <div
            className="w-24 text-foreground"
            dangerouslySetInnerHTML={{ __html: LOGO_SVG }}
            aria-label="JaviRL Logo"
          />
        </div>

        {/* Project Label - Top right corner */}
        {projectNumber && (
          <div className="absolute right-2 md:right-3 top-2 md:top-3 z-30 hidden lg:flex lg:flex-col lg:items-end lg:gap-1.5 max-w-[180px]">
            <div className="bg-primary/10 border border-primary/20 px-2 py-px backdrop-blur-sm">
              <span className="font-mono text-[8px] xl:text-[9px] font-semibold text-primary uppercase tracking-wider">
                Proyecto {projectNumber}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="bg-background/30 inline-flex items-center gap-2 rounded-full px-2 py-1 backdrop-blur-md">
              {/* GitHub */}
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

              {/* LinkedIn */}
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

              {/* Theme Toggle */}
              <button
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                className="transition-transform duration-200 hover:scale-110"
                aria-label="Cambiar tema"
              >
                <ThemeToggleButton2 className="size-4" theme={resolvedTheme} />
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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4">
                  <path d="M12 19V5M5 12l7-7 7 7"/>
                </svg>
              </button>
            </div>
          </div>
        )}

        <div className="flex flex-1 flex-col lg:flex-row">
          {/* Image Slideshow Side */}
          <div className="relative flex-1 flex items-center justify-center p-6 md:p-10 lg:p-16">
            {/* Cross lines background */}
            <div className="absolute inset-0" aria-hidden="true">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border/30 -translate-y-1/2"></div>
              <div className="absolute left-1/2 top-0 h-full w-0.5 bg-border/30 -translate-x-1/2"></div>
            </div>

            <div className="relative z-10 w-full max-w-2xl 3xl:max-w-3xl 4xl:max-w-4xl">
              {/* Frame corners */}
              <div className="border-foreground/20 absolute -top-2 -left-2 h-6 w-6 lg:h-8 lg:w-8 border-t-2 border-l-2 transition-all duration-300 group-hover:-top-3 group-hover:-left-3" />
              <div className="border-foreground/20 absolute -top-2 -right-2 h-6 w-6 lg:h-8 lg:w-8 border-t-2 border-r-2 transition-all duration-300 group-hover:-top-3 group-hover:-right-3" />
              <div className="border-foreground/20 absolute -bottom-2 -left-2 h-6 w-6 lg:h-8 lg:w-8 border-b-2 border-l-2 transition-all duration-300 group-hover:-bottom-3 group-hover:-left-3" />
              <div className="border-foreground/20 absolute -bottom-2 -right-2 h-6 w-6 lg:h-8 lg:w-8 border-b-2 border-r-2 transition-all duration-300 group-hover:-bottom-3 group-hover:-right-3" />

              {/* Image Container with slideshow */}
              <div className="relative overflow-hidden border-2 border-border aspect-video bg-background">
                {tfgImages.map((img, index) => (
                  <img
                    key={img}
                    src={img}
                    alt={`Trabajo de Fin de Grado - Vista ${index + 1}`}
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                      index === currentTFGImage ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
                {/* Slide indicators */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {tfgImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTFGImage(index)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        index === currentTFGImage ? 'w-6 bg-primary' : 'w-1.5 bg-white/50 hover:bg-white/80'
                      }`}
                      aria-label={`Ir a imagen ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="relative flex flex-col justify-center p-6 md:p-10 lg:p-16 lg:w-2/5">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="text-muted-foreground font-mono text-xs uppercase">
                Proyecto {projectNumber}
              </span>
              <div className="bg-border h-3 w-px" aria-hidden="true" />
              <time className="text-muted-foreground font-mono text-xs">
                {date}
              </time>
            </div>

            <div className="mb-4">
              <h3 className="font-incognito text-2xl md:text-3xl lg:text-4xl font-bold">{title}</h3>
              <div className="flex items-center gap-1.5 mt-3">
                <div className="h-0.5 bg-primary w-12" />
                <div className="h-0.5 bg-primary/60 w-6" />
                <div className="h-0.5 bg-primary/30 w-3" />
              </div>
            </div>

            <p
              className="text-muted-foreground mb-6 text-sm md:text-base leading-relaxed"
              dangerouslySetInnerHTML={{ __html: description }}
            />

            <div className="flex flex-wrap gap-2">
              {githubUrl && (
                <Button
                  asChild
                  variant="default"
                  size="sm"
                  className="group/btn relative border font-medium"
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
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden items-center justify-center gap-1 font-mono text-xs md:inline-flex text-muted-foreground">
          DESPLÁZATE
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4 animate-pulse" aria-hidden="true">
            <rect width="18" height="18" x="3" y="3" rx="2"></rect>
            <path d="M12 8v8"></path>
            <path d="m8 12 4 4 4-4"></path>
          </svg>
        </div>
      </section>
    );
  }

  // Renderizado especial para Inanilux Portfolio (diseño igual que presentation-splash)
  if (isInaniluxPortfolio) {
    return (
      <section className="group relative min-h-screen lg:h-screen w-full overflow-y-auto lg:overflow-hidden border-b lg:snap-start lg:snap-always bg-background">
        {/* Logo SVG - Top left */}
        <div className="absolute left-3 lg:left-4 top-3 lg:top-4 z-30 hidden lg:block">
          <div
            className="w-24 text-foreground"
            dangerouslySetInnerHTML={{ __html: LOGO_SVG }}
            aria-label="JaviRL Logo"
          />
        </div>

        {/* Project Label - Top right corner */}
        {projectNumber && (
          <div className="absolute right-2 md:right-3 top-2 md:top-3 z-30 hidden lg:flex lg:flex-col lg:items-end lg:gap-1.5 max-w-[180px]">
            <div className="bg-primary/10 border border-primary/20 px-2 py-px backdrop-blur-sm">
              <span className="font-mono text-[8px] xl:text-[9px] font-semibold text-primary uppercase tracking-wider">
                Proyecto {projectNumber}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="bg-background/30 inline-flex items-center gap-2 rounded-full px-2 py-1 backdrop-blur-md">
              <a href="https://github.com/JaviRL7" target="_blank" rel="noreferrer noopener" className="text-foreground/60 hover:text-foreground text-sm transition-colors duration-200 hover:scale-110" aria-label="GitHub">
                <svg viewBox="0 0 24 24" className="size-4"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="currentColor"/></svg>
              </a>
              <div className="bg-border h-4 w-px" />
              <a href="https://www.linkedin.com/in/javier-rodriguez-lopez-4795a8180/" target="_blank" rel="noreferrer noopener" className="text-foreground/60 hover:text-foreground transition-all duration-200 hover:scale-110" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <div className="bg-border h-4 w-px" />
              <button onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")} className="transition-transform duration-200 hover:scale-110" aria-label="Cambiar tema">
                <ThemeToggleButton2 className="size-4" theme={resolvedTheme} />
              </button>
              <div className="bg-border h-4 w-px" />
              <button onClick={() => { const heroSection = document.querySelector('#home'); if (heroSection) { heroSection.scrollIntoView({ behavior: 'smooth', block: 'start' }); } }} className="text-foreground/60 hover:text-foreground transition-all duration-200 hover:scale-110" aria-label="Volver arriba">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
              </button>
            </div>
          </div>
        )}

        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2">
          {/* COLUMNA IZQUIERDA - Fondo gris con cruz y foto */}
          <div className="relative bg-muted/30 flex items-center justify-center p-8 md:p-12 lg:p-16">
            {/* Cruz con líneas grises - Hidden on mobile */}
            <div className="hidden lg:block absolute inset-0" aria-hidden="true">
              <div className="relative h-full w-full">
                {/* Línea horizontal */}
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border/30 -translate-y-1/2"></div>
                {/* Línea vertical */}
                <div className="absolute left-1/2 top-0 h-full w-0.5 bg-border/30 -translate-x-1/2"></div>
              </div>
            </div>

            {/* Contenedor de foto + stats */}
            <div className="relative z-10 flex flex-col items-center gap-6">
              {/* Foto con marco */}
              <div className="relative group/photo">
                {/* Esquinas decorativas con hover sutil */}
                <div className="border-foreground/20 absolute -top-1 -left-1 h-6 w-6 md:h-8 md:w-8 border-t-2 border-l-2 transition-all duration-300 group-hover/photo:h-7 group-hover/photo:w-7 md:group-hover/photo:h-9 md:group-hover/photo:w-9 group-hover/photo:border-primary/40" />
                <div className="border-foreground/20 absolute -top-1 -right-1 h-6 w-6 md:h-8 md:w-8 border-t-2 border-r-2 transition-all duration-300 group-hover/photo:h-7 group-hover/photo:w-7 md:group-hover/photo:h-9 md:group-hover/photo:w-9 group-hover/photo:border-primary/40" />
                <div className="border-foreground/20 absolute -bottom-1 -left-1 h-6 w-6 md:h-8 md:w-8 border-b-2 border-l-2 transition-all duration-300 group-hover/photo:h-7 group-hover/photo:w-7 md:group-hover/photo:h-9 md:group-hover/photo:w-9 group-hover/photo:border-primary/40" />
                <div className="border-foreground/20 absolute -bottom-1 -right-1 h-6 w-6 md:h-8 md:w-8 border-b-2 border-r-2 transition-all duration-300 group-hover/photo:h-7 group-hover/photo:w-7 md:group-hover/photo:h-9 md:group-hover/photo:w-9 group-hover/photo:border-primary/40" />

                <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 overflow-hidden border-2 border-border shadow-xl transition-all duration-300 group-hover/photo:border-primary/40">
                  <img
                    src="/projects/fotoina.jpg"
                    alt="Inanilux - Creadora de contenido artístico"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Estadísticas debajo de la foto */}
              <div className="flex items-center gap-4 md:gap-6">
                <div className="text-center">
                  <div className="text-base md:text-lg lg:text-xl font-bold text-primary font-mono">
                    <AnimatedCounter end={93.3} decimals={1} />K
                  </div>
                  <div className="text-[8px] md:text-[9px] lg:text-[10px] 3xl:text-sm 4xl:text-base text-muted-foreground uppercase tracking-wider">TikTok</div>
                </div>
                <div className="h-8 w-px bg-border/50" />
                <div className="text-center">
                  <div className="text-base md:text-lg lg:text-xl font-bold text-primary font-mono">
                    <AnimatedCounter end={34.6} decimals={1} />K
                  </div>
                  <div className="text-[8px] md:text-[9px] lg:text-[10px] 3xl:text-sm 4xl:text-base text-muted-foreground uppercase tracking-wider">Instagram</div>
                </div>
                <div className="h-8 w-px bg-border/50" />
                <div className="text-center">
                  <div className="text-base md:text-lg lg:text-xl font-bold text-primary font-mono">
                    <AnimatedCounter end={4.05} decimals={2} />K
                  </div>
                  <div className="text-[8px] md:text-[9px] lg:text-[10px] 3xl:text-sm 4xl:text-base text-muted-foreground uppercase tracking-wider">YouTube</div>
                </div>
              </div>

              {/* Enlace */}
              <a
                href="https://inanilux.carrd.co"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                inanilux.carrd.co
              </a>
            </div>
          </div>

          {/* COLUMNA DERECHA - Contenido */}
          <div className="relative flex items-center justify-center p-6 md:p-10 lg:p-12">
            <div className="space-y-4 md:space-y-5 w-full max-w-lg 3xl:max-w-xl 4xl:max-w-2xl">
              {/* Título */}
              <div className="space-y-1">
                <h2 className="font-incognito text-lg md:text-xl lg:text-2xl font-bold text-primary">
                  {title}
                </h2>
                <p className="text-foreground/80 text-xs md:text-sm font-medium">
                  Artista y creadora de contenido de arte y Pokémon
                </p>
                <div className="flex items-center gap-1.5 mt-2">
                  <div className="h-0.5 bg-primary w-8" />
                  <div className="h-0.5 bg-primary/60 w-4" />
                  <div className="h-0.5 bg-primary/30 w-2" />
                </div>
              </div>

              {/* Descripción */}
              <div className="space-y-3 text-xs md:text-sm leading-relaxed text-foreground/70">
                <p>
                  Este proyecto es un <span className="font-bold text-primary">prototipo</span> que refleja mi forma de trabajar. Decidí intentar contactar con <span className="font-bold text-primary">Inanilux</span>, <span className="font-semibold text-foreground">creadora de contenido artístico</span> centrado en Pokémon, tras ver un tuit en el que comentaba que aún no tenía un <span className="font-semibold text-foreground">portfolio como ilustradora</span>.
                </p>
                <p>
                  Me ofrecí para crearle uno, no por <span className="font-semibold text-foreground">encargo</span> ni por interés económico, sino como <span className="font-bold text-primary">ejercicio creativo y de aprendizaje</span>. Me hubiera gustado mostrar este proyecto terminado, pero como <span className="font-semibold text-foreground">cierta empresa valenciana</span> me retó a venderme de la mejor manera posible, aún no he podido finalizarlo.
                </p>
              </div>

              {/* Quote destacado */}
              <div className="relative py-3 px-4">
                <div className="absolute top-0 left-0 h-2.5 w-2.5 border-t border-l border-primary/50" />
                <div className="absolute top-0 right-0 h-2.5 w-2.5 border-t border-r border-primary/50" />
                <div className="absolute bottom-0 left-0 h-2.5 w-2.5 border-b border-l border-primary/50" />
                <div className="absolute bottom-0 right-0 h-2.5 w-2.5 border-b border-r border-primary/50" />
                <p className="text-xs md:text-sm text-muted-foreground italic">
                  &ldquo;Por ello, he decidido <span className="font-bold text-primary">mostrar</span> a continuación cómo es mi <span className="font-bold text-primary">proceso creativo</span>&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden items-center justify-center gap-1 font-mono text-xs md:inline-flex text-muted-foreground">
          DESPLÁZATE
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4 animate-pulse" aria-hidden="true">
            <rect width="18" height="18" x="3" y="3" rx="2"></rect>
            <path d="M12 8v8"></path>
            <path d="m8 12 4 4 4-4"></path>
          </svg>
        </div>
      </section>
    );
  }

  // Renderizado especial para diagrama ERD
  if (isDiagramaERD) {
    return (
      <section className="group relative min-h-screen lg:h-screen w-full overflow-y-auto lg:overflow-hidden border-b lg:snap-start lg:snap-always bg-background">
        {/* Logo SVG */}
        <div className="absolute left-3 lg:left-4 top-3 lg:top-4 z-30 hidden lg:block">
          <div
            className="w-24 text-foreground"
            dangerouslySetInnerHTML={{ __html: LOGO_SVG }}
            aria-label="JaviRL Logo"
          />
        </div>

        {/* Project Label - Top right */}
        {projectNumber && (
          <div className="absolute right-2 md:right-3 top-2 md:top-3 z-30 hidden lg:flex lg:flex-col lg:items-end lg:gap-1.5 max-w-[180px]">
            <div className="bg-primary/10 border border-primary/20 px-2 py-px backdrop-blur-sm">
              <span className="font-mono text-[8px] xl:text-[9px] font-semibold text-primary uppercase tracking-wider">
                Proyecto {projectNumber}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="bg-background/30 inline-flex items-center gap-2 rounded-full px-2 py-1 backdrop-blur-md">
              {/* GitHub */}
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

              <button
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                className="transition-transform duration-200 hover:scale-110"
                aria-label="Cambiar tema"
              >
                <ThemeToggleButton2 className="size-4" theme={resolvedTheme} />
              </button>

              <div className="bg-border h-4 w-px" />

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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4">
                  <path d="M12 19V5M5 12l7-7 7 7"/>
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Scroll Indicator - Centered bottom */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 hidden md:flex items-center justify-center text-muted-foreground">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4 animate-pulse" aria-hidden="true">
            <rect width="18" height="18" x="3" y="3" rx="2"></rect>
            <path d="M12 8v8"></path>
            <path d="m8 12 4 4 4-4"></path>
          </svg>
        </div>

        {/* Contenido principal */}
        <div className="h-full w-full grid grid-cols-1 lg:grid-cols-[1.2fr_1fr]">
          {/* Columna izquierda - Texto explicativo */}
          <div className="relative min-h-fit lg:h-full order-2 lg:order-1">
            <div className="h-full overflow-hidden p-6 md:p-8 lg:p-10 xl:p-12">
              <div className="lg:flex lg:items-center lg:justify-center lg:h-full">
                <div className="space-y-3 md:space-y-4 w-full max-w-xl 3xl:max-w-2xl 4xl:max-w-3xl">
                  {/* Título */}
                  <div className="space-y-2">
                    <h2 className="font-incognito text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight">
                      {title}
                    </h2>
                    <div className="flex items-center gap-2">
                      <div className="bg-primary h-0.5 w-12" />
                      <div className="bg-primary/60 h-0.5 w-6" />
                      <div className="bg-primary/30 h-0.5 w-3" />
                    </div>
                  </div>

                  {/* Descripción */}
                  <p className="text-foreground/70 text-xs md:text-sm leading-relaxed">
                    <span className="font-bold text-primary">No es solo un esquema técnico.</span> Es el resultado de traducir la complejidad competitiva en una estructura de datos coherente.
                  </p>

                  {/* Conceptos clave */}
                  <div className="space-y-2 text-xs md:text-sm leading-relaxed text-foreground/70">
                    <div className="pl-3 border-l-2 border-primary/30 space-y-1.5">
                      <p>
                        <span className="font-bold text-primary">Temporalidad:</span> Contratos y plantillas históricas
                      </p>
                      <p>
                        <span className="font-bold text-primary">Relaciones:</span> 10 foreign keys por partida
                      </p>
                      <p>
                        <span className="font-bold text-primary">Optimización:</span> Queries SQL e índices estratégicos
                      </p>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="relative py-2 px-3">
                    <div className="absolute top-0 left-0 h-2 w-2 border-t border-l border-primary/50" />
                    <div className="absolute top-0 right-0 h-2 w-2 border-t border-r border-primary/50" />
                    <div className="absolute bottom-0 left-0 h-2 w-2 border-b border-l border-primary/50" />
                    <div className="absolute bottom-0 right-0 h-2 w-2 border-b border-r border-primary/50" />
                    <p className="text-xs md:text-sm text-muted-foreground italic">
                      &ldquo;<span className="font-bold text-primary">14 entidades</span>, <span className="font-bold text-primary">100+ métodos</span> — <span className="font-semibold text-foreground">Complejidad</span> a <span className="font-bold text-primary">consultas eficientes</span>&rdquo;
                    </p>
                  </div>

                  {/* Botón para ver SVG */}
                  {demoUrl && (
                    <Button asChild variant="outline" size="sm" className="group/btn border font-medium text-xs md:text-sm">
                      <a
                        href={demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Ver diagrama completo en SVG"
                      >
                        <ExternalLink className="mr-1.5 h-3 w-3" aria-hidden="true" />
                        Ver diagrama completo (SVG)
                        <ArrowUpRight className="ml-1.5 h-3 w-3 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" aria-hidden="true" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Columna derecha - Imagen del diagrama */}
          <div className="relative min-h-fit lg:h-full order-1 lg:order-2">
            <div className="h-full overflow-hidden p-6 md:p-8 lg:p-10 xl:p-12">
              <div className="lg:flex lg:items-center lg:justify-center lg:h-full">
                <div className="relative group/image w-full">
                  {/* Esquinas decorativas */}
                  <div className="border-foreground/20 absolute -top-1 -left-1 h-6 w-6 md:h-8 md:w-8 border-t-2 border-l-2 transition-all group-hover/image:-top-2 group-hover/image:-left-2" />
                  <div className="border-foreground/20 absolute -top-1 -right-1 h-6 w-6 md:h-8 md:w-8 border-t-2 border-r-2 transition-all group-hover/image:-top-2 group-hover/image:-right-2" />
                  <div className="border-foreground/20 absolute -bottom-1 -left-1 h-6 w-6 md:h-8 md:w-8 border-b-2 border-l-2 transition-all group-hover/image:-bottom-2 group-hover/image:-left-2" />
                  <div className="border-foreground/20 absolute -right-1 -bottom-1 h-6 w-6 md:h-8 md:w-8 border-r-2 border-b-2 transition-all group-hover/image:-right-2 group-hover/image:-bottom-2" />

                  <div className="bg-background relative overflow-hidden border-2 border-border shadow-xl">
                    {mediaSrc && (
                      <img
                        src={mediaSrc}
                        alt="Diagrama Entidad-Relación"
                        className="w-full h-auto transition-transform duration-500 group-hover/image:scale-105"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="group relative min-h-screen lg:h-screen w-full overflow-y-auto lg:overflow-hidden border-b lg:snap-start lg:snap-always">
      {/* Logo SVG - Shown in all projects */}
      <div className="absolute left-3 lg:left-4 top-3 lg:top-4 z-20 hidden lg:block">
        <div
          className="w-24 text-foreground"
          dangerouslySetInnerHTML={{ __html: LOGO_SVG }}
          aria-label="JaviRL Logo"
        />
      </div>

      {/* Project Label - Top right corner */}
      {projectNumber && (
        <div className="absolute right-2 md:right-3 top-2 md:top-3 z-20 hidden lg:flex lg:flex-col lg:items-end lg:gap-1.5 max-w-[180px]">
          <div className="bg-primary/10 border border-primary/20 px-2 py-px backdrop-blur-sm">
            <span className="font-mono text-[8px] xl:text-[9px] font-semibold text-primary uppercase tracking-wider">
              Proyecto {projectNumber}
            </span>
          </div>
          
          {/* Action Buttons */}
          <div className="bg-background/30 inline-flex items-center gap-2 rounded-full px-2 py-1 backdrop-blur-md">
            {/* GitHub */}
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

            {/* LinkedIn */}
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

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="transition-transform duration-200 hover:scale-110"
              aria-label="Cambiar tema"
            >
              <ThemeToggleButton2 className="size-4" theme={resolvedTheme} />
            </button>

            <div className="bg-border h-4 w-px" />

            {/* Back to Top */}
            <button
              onClick={() => { const heroSection = document.querySelector('#home'); if (heroSection) { heroSection.scrollIntoView({ behavior: 'smooth', block: 'start' }); } }}
              className="text-foreground/60 hover:text-foreground transition-all duration-200 hover:scale-110"
              aria-label="Volver arriba"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4">
                <path d="M12 19V5M5 12l7-7 7 7"/>
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Scroll Indicator - Centered bottom */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:flex items-center justify-center text-muted-foreground">
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
            <div className="relative inset-0 z-10 p-4 md:p-6">
              <div className="group/image relative">
                <DecorativeCorners size="small" hoverExpand />

                {/* Media */}
                <div className="bg-background relative overflow-hidden border">
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
          <div className="relative flex flex-col justify-center overflow-hidden p-4 md:p-6">
            <div className="mb-2 flex flex-wrap items-center gap-1.5">
              <span className="text-muted-foreground font-mono text-[10px] uppercase">
                Proyecto {projectNumber}
              </span>
              <div className="bg-border h-2.5 w-px" aria-hidden="true" />
              <time className="text-muted-foreground font-mono text-[10px]">
                {date}
              </time>
            </div>

            <div className="mb-3">
              <h3 className="font-incognito text-xl md:text-xl font-bold">{title}</h3>
              <HeadingLine className="mt-1.5" />
            </div>

            <p
              className="text-muted-foreground mb-3 text-xs leading-relaxed md:text-sm"
              dangerouslySetInnerHTML={{ __html: description }}
            />

            <div className="mb-4 flex flex-wrap gap-1.5">
              {githubUrl && (
                <Button
                  asChild
                  variant="default"
                  size="sm"
                  className="group/btn relative border font-medium text-xs h-7 px-3"
                >
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Ver código en GitHub"
                  >
                    <Github className="mr-1.5 h-3 w-3" aria-hidden="true" />
                    Ver Código
                    <ArrowUpRight
                      className="ml-1 h-2 w-2 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </Button>
              )}

              {demoUrl && (
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="group/btn border font-medium text-xs h-7 px-3"
                >
                  <a
                    href={demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Ver demo en vivo"
                  >
                    <ExternalLink className="mr-1.5 h-3 w-3" aria-hidden="true" />
                    Ver Demo
                    <ArrowUpRight
                      className="ml-1 h-2 w-2 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
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
      <div className="hidden h-full lg:flex lg:flex-col lg:justify-center lg:py-[5vh]">
        <div className="relative px-2 lg:px-3 xl:px-4 h-full flex flex-col">
          {/* Centered large video container */}
          <div className="mx-auto w-full flex flex-col h-full">
            {/* Video section - 50vh */}
            <div className="h-[50vh] mb-[3vh] flex items-center justify-center">
              {/* Video wrapper - se ajusta al contenido */}
              <div className="relative group/image inline-block max-h-full">
                <DecorativeCorners size="small" hoverExpand />

                {/* Media player */}
                <div className="bg-background relative overflow-hidden border shadow-xl">
                  <div className="relative overflow-hidden max-h-[50vh]">
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
                            className="max-h-[50vh] w-auto block"
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
                            className="max-h-[50vh] w-auto block"
                          />
                        )}
                  </div>
                </div>
              </div>
            </div>

            {/* Content section - Remaining height */}
            <div className="flex-1 text-center flex flex-col justify-center max-h-[35vh] overflow-y-auto">
              <div className="mb-1.5 flex items-center justify-center gap-1.5">
                <span className="text-muted-foreground font-mono text-[10px] uppercase">
                  Proyecto {projectNumber}
                </span>
                <div className="bg-border h-2.5 w-px" aria-hidden="true" />
                <time className="text-muted-foreground font-mono text-[10px]">
                  {date}
                </time>
              </div>

              <h3 className="font-incognito mb-1.5 text-base lg:text-lg xl:text-xl font-bold">
                {title}
              </h3>

              <div className="mb-2 flex items-center justify-center gap-1">
                <div
                  className="bg-primary h-0.5"
                  style={{ width: "20px" }}
                  aria-hidden="true"
                />
                <div
                  className="bg-primary/60 h-0.5"
                  style={{ width: "10px" }}
                  aria-hidden="true"
                />
                <div
                  className="bg-primary/30 h-0.5"
                  style={{ width: "5px" }}
                  aria-hidden="true"
                />
              </div>

              <p
                className="text-muted-foreground mx-auto mb-2.5 max-w-2xl text-[11px] leading-relaxed lg:text-xs xl:text-sm"
                dangerouslySetInnerHTML={{ __html: description }}
              />

              <div className="flex flex-wrap justify-center gap-1.5">
                {githubUrl && (
                  <Button
                    asChild
                    variant="default"
                    size="sm"
                    className="group/btn relative border font-medium text-[10px] h-6 px-2.5"
                  >
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Ver código en GitHub"
                    >
                      <Github className="mr-1 h-2.5 w-2.5" aria-hidden="true" />
                      Ver Código
                      <ArrowUpRight
                        className="ml-0.5 h-1.5 w-1.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </a>
                  </Button>
                )}

                {demoUrl && (
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="group/btn border font-medium text-[10px] h-6 px-2.5"
                  >
                    <a
                      href={demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Ver demo en vivo"
                    >
                      <ExternalLink
                        className="mr-1 h-2.5 w-2.5"
                        aria-hidden="true"
                      />
                      Ver Demo
                      <ArrowUpRight
                        className="ml-0.5 h-1.5 w-1.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
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
