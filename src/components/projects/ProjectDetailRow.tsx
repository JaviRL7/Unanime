/**
 * ProjectDetailRow Component
 *
 * Renders a 50vh detail row for a project with a 2-column grid layout.
 * Left column displays media (video/image) with decorative corners.
 * Right column shows scrollable content with status, title, description, features, and quote.
 *
 * Special layouts:
 * - Index 0: "Sección de Galería" design for Doña Araña
 * - Index 1: "Carrito de Compras" design for E-Commerce
 *
 * @example
 * ```tsx
 * <ProjectDetailRow
 *   detail={projectDetail}
 *   index={0}
 *   projectId="dona-arana"
 * />
 * ```
 */

"use client";

import { Github, ArrowUpRight, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ProjectDetailRowProps } from "@/types/projects";
import { LOGO_SVG } from "@/data/projects";
import { useTheme } from "next-themes";
import { ThemeToggleButton2 } from "@/components/theme-toggle";

export default function ProjectDetailRow({
  detail,
  index,
  projectId,
  showActionButtons = true,
}: ProjectDetailRowProps) {
  const { resolvedTheme, setTheme } = useTheme();
  
  const {
    date,
    status,
    title,
    subtitle,
    mediaType,
    mediaSrc,
    description,
    systemTitle,
    systemDescription,
    features,
    quote,
    githubUrl,
    demoUrl,
    badges,
  } = detail;

  // Determine if this is a special layout row
  const isGalleryLayout = index === 0 && projectId === "dona-arana";
  const isCartLayout = index === 1 && projectId === "dona-arana";
  // Use structured layout for more-features project
  const isStructuredLayout = projectId === "more-features";

  // Get project label
  const getProjectLabel = () => {
    switch (projectId) {
      case "dona-arana":
        return "Proyecto 1";
      case "contabilidad-web":
        return "Proyecto 2";
      case "linkedin-stats":
        return "Proyecto 2";
      case "more-features":
        return "Proyecto 2";
      case "inanilux-portfolio":
        return "Proyecto 3";
      case "color-palette":
        return "Proyecto 3";
      case "design-process":
        return "Proyecto 3";
      default:
        return "";
    }
  };

  return (
    <section className={cn("group relative min-h-screen lg:min-h-[50vh] lg:h-[50vh] lg:max-h-[50vh] w-full", index > 0 && "border-t")}>
      {/* Logo SVG - Only shown in first detail row */}
      {index === 0 && (
        <div className="absolute left-8 top-8 z-20 hidden lg:block">
          <div
            className="w-32 text-foreground"
            dangerouslySetInnerHTML={{ __html: LOGO_SVG }}
            aria-label="JaviRL Logo"
          />
        </div>
      )}

      {/* Project Label - Only shown in first detail row */}
      {index === 0 && getProjectLabel() && (
        <div className="absolute right-4 top-4 z-20 hidden lg:flex lg:flex-col lg:items-end lg:gap-3">
          <div className="bg-primary/10 border border-primary/20 px-4 py-2 backdrop-blur-sm">
            <span className="font-mono text-xs font-semibold text-primary uppercase tracking-wider">
              {getProjectLabel()}
            </span>
          </div>
          
          {/* Action Buttons below label */}
          {showActionButtons && (
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
          )}
        </div>
      )}

      {/* Scroll Indicator - Only shown in second row onwards */}
      {index > 0 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 hidden items-center justify-center gap-1 font-mono text-xs md:inline-flex text-muted-foreground">
          DESPLÁZATE
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4 animate-pulse" aria-hidden="true">
            <rect width="18" height="18" x="3" y="3" rx="2"></rect>
            <path d="M12 8v8"></path>
            <path d="m8 12 4 4 4-4"></path>
          </svg>
        </div>
      )}

      <div className="grid h-full grid-rows-2 lg:grid-rows-1 lg:grid-cols-2">
        {/* LEFT COLUMN - Image Side */}
        <div className="bg-muted/20 relative min-h-[50vh] lg:h-full overflow-hidden border-b lg:border-r lg:border-b-0">
          {/* Cross pattern - más sutil en móvil */}
          <div className="absolute inset-0">
            <div className="before:bg-border after:bg-border relative h-full w-full before:absolute before:top-1/2 before:left-0 before:h-px lg:before:h-0.5 before:w-full after:absolute after:top-0 after:left-1/2 after:h-full after:w-px lg:after:w-0.5" />
          </div>

          {/* Image Container */}
          <div className="relative inset-0 z-10 flex h-full items-center justify-center p-6 md:p-8">
            <div className="group/image relative w-full max-w-3xl">
              {/* Frame corners */}
              <div className="border-foreground/20 absolute -top-1 -left-1 h-5 w-5 lg:h-6 lg:w-6 lg:-top-2 lg:-left-2 border-t-2 border-l-2 transition-all group-hover:lg:-top-3 group-hover:lg:-left-3" />
              <div className="border-foreground/20 absolute -top-1 -right-1 h-5 w-5 lg:h-6 lg:w-6 lg:-top-2 lg:-right-2 border-t-2 border-r-2 transition-all group-hover:lg:-top-3 group-hover:lg:-right-3" />
              <div className="border-foreground/20 absolute -bottom-1 -left-1 h-5 w-5 lg:h-6 lg:w-6 lg:-bottom-2 lg:-left-2 border-b-2 border-l-2 transition-all group-hover:lg:-bottom-3 group-hover:lg:-left-3" />
              <div className="border-foreground/20 absolute -right-1 -bottom-1 h-5 w-5 lg:h-6 lg:w-6 lg:-right-2 lg:-bottom-2 border-r-2 border-b-2 transition-all group-hover:lg:-right-3 group-hover:lg:-bottom-3" />

              {/* Main image/video */}
              <div className="bg-background relative overflow-hidden border-2 aspect-video">
                <div className="absolute inset-0">
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
                    <>
                      <img
                        src={mediaSrc}
                        alt={title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Overlay gradient on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN - Content Side */}
        <div className="relative min-h-[50vh] lg:h-full overflow-hidden">
          <div className="h-full overflow-y-auto p-6 md:p-8">
            {isGalleryLayout || isStructuredLayout ? (
              /* Sección de Galería para Doña Araña */
              <div className="space-y-4 md:space-y-5">
                {/* Date & Status */}
                <div className="flex flex-wrap items-center gap-3">
                  <time className="text-muted-foreground font-mono text-xs">
                    {date}
                  </time>
                  <div className="bg-border h-4 w-px" />
                  <div className="inline-flex items-center gap-1.5">
                    <div
                      className={cn(
                        "h-2 w-2 rounded-full",
                        status === "completed"
                          ? "animate-pulse bg-green-500"
                          : "animate-pulse bg-yellow-500"
                      )}
                    />
                    <span className="text-muted-foreground font-mono text-xs uppercase">
                      {status === "completed" ? "completado" : "en desarrollo"}
                    </span>
                  </div>
                </div>

                {/* Header */}
                <div className="border-l-2 md:border-l-4 border-primary pl-3 md:pl-5">
                  <h3 className="font-incognito text-xl md:text-3xl font-bold mb-2">
                    {title}
                  </h3>
                  <div className="flex items-center gap-2 my-3">
                    <div className="h-1 bg-primary" style={{ width: "28px" }} />
                    <div
                      className="h-1 bg-primary/60"
                      style={{ width: "14px" }}
                    />
                    <div
                      className="h-1 bg-primary/30"
                      style={{ width: "7px" }}
                    />
                  </div>
                  <p className="text-muted-foreground text-sm font-mono md:text-base">
                    {subtitle}
                  </p>
                </div>

                {/* Descripción del sistema */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-1 w-3 bg-primary" />
                    <h4 className="font-mono text-sm font-semibold uppercase tracking-wider md:text-base">
                      {systemTitle}
                    </h4>
                  </div>
                  <p className="text-foreground text-sm leading-relaxed pl-5 md:text-base">
                    {systemDescription}
                  </p>
                </div>

                {/* Objetivos */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-1 w-3 bg-primary" />
                    <h4 className="font-mono text-sm font-semibold uppercase tracking-wider md:text-base">
                      Objetivos
                    </h4>
                  </div>
                  <ul className="text-foreground text-sm leading-relaxed pl-5 space-y-2 md:text-base">
                    {features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <ChevronRight className="text-primary mt-0.5 h-4 w-4 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer con línea */}
                <div className="pt-4 border-t">
                  <p className="text-muted-foreground text-xs font-mono italic md:text-sm pr-16 md:pr-24 lg:pr-40">
                    &ldquo;{quote}&rdquo;
                  </p>
                </div>

                {/* Slanted lines decorativas */}
                <div className="absolute -right-4 -bottom-32 w-full translate-x-1/4 translate-y-1/4 rotate-[-30deg]">
                  <div className="to-background border-primary/30 from-primary/40 via-primary/35 -ml-[4px] h-12 w-full border-t bg-linear-to-r via-30% transition-transform duration-300 group-hover:-translate-y-1" />
                  <div className="to-background border-primary/30 from-primary/40 via-primary/35 -ml-[8px] h-12 w-full border-t bg-linear-to-r via-30% transition-transform duration-300 group-hover:-translate-y-3" />
                  <div className="to-background border-primary/30 from-primary/40 via-primary/35 -ml-[12px] h-12 w-full border-t bg-linear-to-r via-30% transition-transform duration-300 group-hover:-translate-y-5" />
                  <div className="to-background border-primary/30 from-primary/40 via-primary/35 -ml-[16px] h-12 w-full border-t bg-linear-to-r via-30% transition-transform duration-300 group-hover:-translate-y-7" />
                </div>
              </div>
            ) : isCartLayout ? (
              /* Sistema de Ventas Online */
              <div className="space-y-8">
                {/* Date & Status */}
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <time className="text-muted-foreground font-mono text-xs">
                    {date}
                  </time>
                  <div className="bg-border h-4 w-px" />
                  <div className="inline-flex items-center gap-1.5">
                    <div
                      className={cn(
                        "h-2 w-2 rounded-full",
                        status === "completed"
                          ? "animate-pulse bg-green-500"
                          : "animate-pulse bg-yellow-500"
                      )}
                    />
                    <span className="text-muted-foreground font-mono text-xs uppercase">
                      {status === "completed" ? "completado" : "en desarrollo"}
                    </span>
                  </div>
                </div>

                {/* Header */}
                <div className="border-l-2 md:border-l-4 border-primary pl-3 md:pl-5">
                  <h3 className="font-incognito text-lg md:text-2xl lg:text-3xl font-bold mb-1 md:mb-2">
                    {title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1.5 lg:mt-2 mb-2 lg:mb-3">
                    <div className="h-1 bg-primary" style={{ width: "28px" }} />
                    <div
                      className="h-1 bg-primary/60"
                      style={{ width: "14px" }}
                    />
                    <div
                      className="h-1 bg-primary/30"
                      style={{ width: "7px" }}
                    />
                  </div>
                  <p className="text-muted-foreground text-sm font-mono md:text-base">
                    {subtitle}
                  </p>
                </div>

                {/* Descripción del sistema */}
                <div className="space-y-2 lg:space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-1 w-3 bg-primary" />
                    <h4 className="font-mono text-sm font-semibold uppercase tracking-wider md:text-base">
                      {systemTitle}
                    </h4>
                  </div>
                  <p className="text-foreground text-sm leading-relaxed pl-5 md:text-base">
                    {systemDescription}
                  </p>
                </div>

                {/* Objetivos */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-1 w-3 bg-primary" />
                    <h4 className="font-mono text-sm font-semibold uppercase tracking-wider md:text-base">
                      Objetivos
                    </h4>
                  </div>
                  <ul className="text-foreground text-sm leading-relaxed pl-5 space-y-2 md:text-base">
                    {features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <ChevronRight className="text-primary mt-0.5 h-4 w-4 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer con línea */}
                <div className="pt-4 border-t">
                  <p className="text-muted-foreground text-xs font-mono italic md:text-sm pr-16 md:pr-24 lg:pr-40">
                    &ldquo;{quote}&rdquo;
                  </p>
                </div>

                {/* Slanted lines decorativas */}
                <div className="absolute -right-4 -bottom-32 w-full translate-x-1/4 translate-y-1/4 rotate-[-30deg]">
                  <div className="to-background border-primary/30 from-primary/40 via-primary/35 -ml-[4px] h-12 w-full border-t bg-linear-to-r via-30% transition-transform duration-300 group-hover:-translate-y-1" />
                  <div className="to-background border-primary/30 from-primary/40 via-primary/35 -ml-[8px] h-12 w-full border-t bg-linear-to-r via-30% transition-transform duration-300 group-hover:-translate-y-3" />
                  <div className="to-background border-primary/30 from-primary/40 via-primary/35 -ml-[12px] h-12 w-full border-t bg-linear-to-r via-30% transition-transform duration-300 group-hover:-translate-y-5" />
                  <div className="to-background border-primary/30 from-primary/40 via-primary/35 -ml-[16px] h-12 w-full border-t bg-linear-to-r via-30% transition-transform duration-300 group-hover:-translate-y-7" />
                </div>
              </div>
            ) : (
              /* Diseño original para otros proyectos */
              <>
                {/* Date & Status */}
                <div className="mb-4 lg:mb-5 flex flex-wrap items-center gap-3">
                  <time className="text-muted-foreground font-mono text-xs">
                    {date}
                  </time>
                  <div className="bg-border h-4 w-px" />
                  <div className="inline-flex items-center gap-1.5">
                    <div
                      className={cn(
                        "h-2 w-2 rounded-full",
                        status === "completed"
                          ? "animate-pulse bg-green-500"
                          : "animate-pulse bg-yellow-500"
                      )}
                    />
                    <span className="text-muted-foreground font-mono text-xs uppercase">
                      {status === "completed" ? "completado" : "en desarrollo"}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <div className="mb-4 lg:mb-5">
                  <h3 className="font-incognito text-2xl font-bold lg:text-3xl">
                    {title}
                  </h3>
                  <div className="my-3 flex items-center gap-2">
                    <div className="h-1 bg-primary" style={{ width: "32px" }} />
                    <div
                      className="h-1 bg-primary/60"
                      style={{ width: "16px" }}
                    />
                    <div
                      className="h-1 bg-primary/30"
                      style={{ width: "8px" }}
                    />
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-4 lg:mb-5 text-sm leading-relaxed md:text-base">
                  {description}
                </p>

                {/* Tags */}
                {badges && badges.length > 0 && (
                  <div className="mb-5 lg:mb-6 flex flex-wrap gap-2">
                    {badges.map((badge, badgeIndex) => (
                      <span
                        key={badgeIndex}
                        className={cn(
                          "rounded-md border px-3 py-1 font-mono text-xs font-medium",
                          badge.color
                        )}
                      >
                        {badge.text}
                      </span>
                    ))}
                  </div>
                )}

                {/* Buttons */}
                <div className="flex flex-wrap gap-3">
                  {githubUrl && (
                    <button
                      className="bg-foreground text-background hover:bg-foreground/90 group/btn relative inline-flex items-center gap-2 rounded-md border-2 px-4 py-2 font-medium transition-colors"
                      onClick={() => window.open(githubUrl, "_blank")}
                    >
                      <Github className="h-4 w-4" />
                      Ver Código
                      <ArrowUpRight className="h-3 w-3 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </button>
                  )}

                  {demoUrl && (
                    <button
                      className="border-foreground text-foreground hover:bg-foreground hover:text-background group/btn inline-flex items-center gap-2 rounded-md border-2 px-4 py-2 font-medium transition-colors"
                      onClick={() => window.open(demoUrl, "_blank")}
                    >
                      Demo en Vivo
                      <ArrowUpRight className="h-3 w-3 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </button>
                  )}
                </div>

                {/* Slanted lines */}
                <div className="absolute -right-4 -bottom-32 w-full translate-x-1/4 translate-y-1/4 rotate-[-30deg]">
                  {/* 1st Line */}
                  <div className="to-background border-primary/30 from-primary/40 via-primary/35 -ml-[4px] h-12 w-full border-t bg-linear-to-r via-30% transition-transform duration-300 group-hover:-translate-y-1" />

                  {/* 2nd Line */}
                  <div className="to-background border-primary/30 from-primary/40 via-primary/35 -ml-[8px] h-12 w-full border-t bg-linear-to-r via-30% transition-transform duration-300 group-hover:-translate-y-3" />

                  {/* 3rd Line */}
                  <div className="to-background border-primary/30 from-primary/40 via-primary/35 -ml-[12px] h-12 w-full border-t bg-linear-to-r via-30% transition-transform duration-300 group-hover:-translate-y-5" />

                  {/* 4th Line */}
                  <div className="to-background border-primary/30 from-primary/40 via-primary/35 -ml-[16px] h-12 w-full border-t bg-linear-to-r via-30% transition-transform duration-300 group-hover:-translate-y-7" />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
