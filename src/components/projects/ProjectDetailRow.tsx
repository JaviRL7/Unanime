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

export default function ProjectDetailRow({
  detail,
  index,
  projectId,
}: ProjectDetailRowProps) {
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
    <section className={cn("group relative h-screen lg:h-[50vh] max-h-screen lg:max-h-[50vh] w-full snap-start snap-always lg:snap-align-none", index > 0 && "border-t")}>
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
        <div className="absolute right-4 top-4 z-20 hidden lg:block">
          <div className="bg-primary/10 border border-primary/20 px-4 py-2 backdrop-blur-sm">
            <span className="font-mono text-xs font-semibold text-primary uppercase tracking-wider">
              {getProjectLabel()}
            </span>
          </div>
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
        <div className="bg-muted/20 relative h-full overflow-hidden border-b lg:border-r lg:border-b-0">
          {/* Cross pattern - más sutil en móvil */}
          <div className="absolute inset-0">
            <div className="before:bg-border after:bg-border relative h-full w-full before:absolute before:top-1/2 before:left-0 before:h-px lg:before:h-0.5 before:w-full after:absolute after:top-0 after:left-1/2 after:h-full after:w-px lg:after:w-0.5" />
          </div>

          {/* Image Container */}
          <div className="relative inset-0 z-10 flex h-full items-center justify-center p-4 md:p-6 lg:p-10">
            <div className="group/image relative w-full max-w-4xl">
              {/* Frame corners */}
              <div className="border-foreground/20 absolute -top-1 -left-1 h-6 w-6 lg:h-8 lg:w-8 lg:-top-2 lg:-left-2 border-t-2 border-l-2 transition-all group-hover:lg:-top-3 group-hover:lg:-left-3" />
              <div className="border-foreground/20 absolute -top-1 -right-1 h-6 w-6 lg:h-8 lg:w-8 lg:-top-2 lg:-right-2 border-t-2 border-r-2 transition-all group-hover:lg:-top-3 group-hover:lg:-right-3" />
              <div className="border-foreground/20 absolute -bottom-1 -left-1 h-6 w-6 lg:h-8 lg:w-8 lg:-bottom-2 lg:-left-2 border-b-2 border-l-2 transition-all group-hover:lg:-bottom-3 group-hover:lg:-left-3" />
              <div className="border-foreground/20 absolute -right-1 -bottom-1 h-6 w-6 lg:h-8 lg:w-8 lg:-right-2 lg:-bottom-2 border-r-2 border-b-2 transition-all group-hover:lg:-right-3 group-hover:lg:-bottom-3" />

              {/* Main image/video */}
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
        <div className="relative h-full overflow-hidden">
          <div className="h-full overflow-y-auto p-4 md:p-6 lg:p-10 pt-6 md:pt-12 lg:pt-20">
            {isGalleryLayout || isStructuredLayout ? (
              /* Sección de Galería para Doña Araña */
              <div className="space-y-4 md:space-y-10">
                {/* Date & Status */}
                <div className="mb-6 flex flex-wrap items-center gap-3">
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
                <div className="border-l-2 md:border-l-4 border-primary pl-3 md:pl-6">
                  <h3 className="font-incognito text-xl md:text-4xl font-bold mb-1 md:mb-2 lg:text-5xl">
                    {title}
                  </h3>
                  <div className="flex items-center gap-2 mt-3 mb-4">
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
                  <p className="text-muted-foreground text-base font-mono md:text-lg">
                    {subtitle}
                  </p>
                </div>

                {/* Descripción del sistema */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-1 w-3 bg-primary" />
                    <h4 className="font-mono text-base font-semibold uppercase tracking-wider md:text-lg">
                      {systemTitle}
                    </h4>
                  </div>
                  <p className="text-foreground text-base leading-relaxed pl-6 md:text-lg">
                    {systemDescription}
                  </p>
                </div>

                {/* Objetivos */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-1 w-3 bg-primary" />
                    <h4 className="font-mono text-base font-semibold uppercase tracking-wider md:text-lg">
                      Objetivos
                    </h4>
                  </div>
                  <ul className="text-foreground text-base leading-relaxed pl-6 space-y-3 md:text-lg">
                    {features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <ChevronRight className="text-primary mt-1 h-5 w-5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer con línea */}
                <div className="pt-6 border-t">
                  <p className="text-muted-foreground text-sm font-mono italic md:text-base">
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
              <div className="space-y-10">
                {/* Date & Status */}
                <div className="mb-6 flex flex-wrap items-center gap-3">
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
                <div className="border-l-2 md:border-l-4 border-primary pl-3 md:pl-6">
                  <h3 className="font-incognito text-xl md:text-4xl font-bold mb-1 md:mb-2 lg:text-5xl">
                    {title}
                  </h3>
                  <div className="flex items-center gap-2 mt-3 mb-4">
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
                  <p className="text-muted-foreground text-base font-mono md:text-lg">
                    {subtitle}
                  </p>
                </div>

                {/* Descripción del sistema */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-1 w-3 bg-primary" />
                    <h4 className="font-mono text-base font-semibold uppercase tracking-wider md:text-lg">
                      {systemTitle}
                    </h4>
                  </div>
                  <p className="text-foreground text-base leading-relaxed pl-6 md:text-lg">
                    {systemDescription}
                  </p>
                </div>

                {/* Objetivos */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-1 w-3 bg-primary" />
                    <h4 className="font-mono text-base font-semibold uppercase tracking-wider md:text-lg">
                      Objetivos
                    </h4>
                  </div>
                  <ul className="text-foreground text-base leading-relaxed pl-6 space-y-3 md:text-lg">
                    {features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <ChevronRight className="text-primary mt-1 h-5 w-5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer con línea */}
                <div className="pt-6 border-t">
                  <p className="text-muted-foreground text-sm font-mono italic md:text-base">
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
                <div className="mb-6 flex flex-wrap items-center gap-3">
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
                <div className="mb-6">
                  <h3 className="font-incognito text-3xl font-bold lg:text-4xl">
                    {title}
                  </h3>
                  <div className="mt-3 flex items-center gap-2">
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
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed md:text-base">
                  {description}
                </p>

                {/* Tags */}
                {badges && badges.length > 0 && (
                  <div className="mb-8 flex flex-wrap gap-2">
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
