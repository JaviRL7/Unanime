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

import { Github, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ProjectDetailRowProps } from "@/types/projects";
import { LOGO_SVG } from "@/data/projects";
import { useTheme } from "next-themes";
import { ThemeToggleButton2 } from "@/components/theme-toggle";
import { PROJECTS_WITH_SPECIAL_LAYOUTS, getProjectLabel } from "@/config/projects";
import { useTranslation } from "@/i18n";
import { LocaleToggle } from "@/components/locale-toggle";

export default function ProjectDetailRow({
  detail,
  index,
  projectId,
  showActionButtons = true,
}: ProjectDetailRowProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const { t } = useTranslation();
  
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
  const isGalleryLayout = index === 0 && PROJECTS_WITH_SPECIAL_LAYOUTS.includes(projectId);
  const isCartLayout = index === 1 && PROJECTS_WITH_SPECIAL_LAYOUTS.includes(projectId);
  // Use structured layout for more-features project
  const isStructuredLayout = projectId === "more-features";

  // Get project label using centralized config
  const projectLabel = getProjectLabel(projectId, t.projectLabels.project);

  return (
    <section className={cn(
      "group relative",
      "min-h-fit lg:h-[50vh]",
      "w-full",
      index > 0 && "border-t"
    )}>
      {/* Logo SVG - Only shown in first detail row */}
      {index === 0 && (
        <div className="absolute left-3 lg:left-4 top-3 lg:top-4 z-30 hidden lg:block">
          <div
            className="w-24 text-foreground transition-all"
            dangerouslySetInnerHTML={{ __html: LOGO_SVG }}
            aria-label="JaviRL Logo"
          />
        </div>
      )}

      {/* Project Label - Only shown in first detail row */}
      {index === 0 && projectLabel && (
        <div className="absolute right-2 md:right-3 top-2 md:top-3 z-30 hidden lg:flex lg:flex-col lg:items-end lg:gap-1.5 max-w-[180px]">
          <div className="bg-primary/10 border border-primary/20 px-2 py-px backdrop-blur-sm">
            <span className="font-mono text-[8px] xl:text-[9px] font-semibold text-primary uppercase tracking-wider">
              {projectLabel}
            </span>
          </div>

          {/* Action Buttons below label */}
          {showActionButtons && (
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

              {/* Locale Toggle */}
              <LocaleToggle className="text-foreground/60 hover:text-foreground transition-all duration-200 hover:scale-110" />

              <div className="bg-border h-4 w-px" />

              {/* Theme Toggle */}
              <button
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                className="transition-transform duration-200 hover:scale-110"
                aria-label={t.nav.changeTheme}
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
                aria-label={t.projectLabels.backToTop}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4">
                  <path d="M12 19V5M5 12l7-7 7 7"/>
                </svg>
              </button>
            </div>
          )}
        </div>
      )}

      {/* Scroll Indicator - Only shown in second row onwards */}
      {index > 0 && (
        <div className="absolute bottom-8 md:bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 z-40 hidden md:flex items-center justify-center text-muted-foreground/80 pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4 animate-bounce" aria-label="Desplázate">
            <rect width="18" height="18" x="3" y="3" rx="2"></rect>
            <path d="M12 8v8"></path>
            <path d="m8 12 4 4 4-4"></path>
          </svg>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-rows-1 lg:grid-cols-2 lg:h-full">
        {/* LEFT COLUMN - Image Side */}
        <div className="bg-muted/20 relative min-h-[250px] md:min-h-[300px] lg:h-full overflow-hidden border-b lg:border-r lg:border-b-0">
          {/* Cross pattern - más sutil en móvil */}
          <div className="absolute inset-0">
            <div className="before:bg-border after:bg-border relative h-full w-full before:absolute before:top-1/2 before:left-0 before:h-px lg:before:h-0.5 before:w-full after:absolute after:top-0 after:left-1/2 after:h-full after:w-px lg:after:w-0.5" />
          </div>

          {/* Image Container */}
          <div className="relative inset-0 z-10 flex h-full items-center justify-center p-10 md:p-14 lg:p-20 xl:p-24 3xl:p-16 4xl:p-20">
            <div className="group/image relative w-full max-w-lg 3xl:max-w-2xl 4xl:max-w-3xl">
              {/* Frame corners */}
              <div className="border-foreground/20 absolute -top-1 -left-1 h-4 w-4 lg:h-5 lg:w-5 lg:-top-1.5 lg:-left-1.5 border-t border-l transition-all group-hover:lg:-top-2 group-hover:lg:-left-2" />
              <div className="border-foreground/20 absolute -top-1 -right-1 h-4 w-4 lg:h-5 lg:w-5 lg:-top-1.5 lg:-right-1.5 border-t border-r transition-all group-hover:lg:-top-2 group-hover:lg:-right-2" />
              <div className="border-foreground/20 absolute -bottom-1 -left-1 h-4 w-4 lg:h-5 lg:w-5 lg:-bottom-1.5 lg:-left-1.5 border-b border-l transition-all group-hover:lg:-bottom-2 group-hover:lg:-left-2" />
              <div className="border-foreground/20 absolute -right-1 -bottom-1 h-4 w-4 lg:h-5 lg:w-5 lg:-right-1.5 lg:-bottom-1.5 border-r border-b transition-all group-hover:lg:-right-2 group-hover:lg:-bottom-2" />

              {/* Main image/video */}
              <div className="bg-background relative overflow-hidden border aspect-video">
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
        <div className="relative lg:h-full">
          <div className="overflow-hidden p-4 md:p-6 lg:p-10 xl:p-12 3xl:p-16 4xl:p-20 lg:h-full">
            <div className="lg:flex lg:items-center lg:justify-center lg:h-full">
            {isGalleryLayout || isStructuredLayout ? (
              /* Sección de Galería para Doña Araña */
              <div className="space-y-1.5 md:space-y-2 lg:space-y-2.5 3xl:space-y-4 4xl:space-y-5 w-full">
                {/* Header */}
                <div className="border-l border-primary pl-1.5 3xl:pl-3 4xl:pl-4">
                  <h3 className="font-incognito text-xs md:text-sm lg:text-base 3xl:text-3xl 4xl:text-4xl font-bold">
                    {title}
                  </h3>
                </div>

                {/* Descripción del sistema */}
                <div className="space-y-0.5 3xl:space-y-1.5 4xl:space-y-2">
                  <div className="flex items-center gap-0.5">
                    <div className="h-0.5 w-1 bg-primary" />
                    <h4 className="font-mono text-[8px] font-semibold uppercase tracking-wider md:text-[9px] lg:text-[10px] 3xl:text-lg 4xl:text-xl">
                      {systemTitle}
                    </h4>
                  </div>
                  <p className="text-foreground/70 text-[8px] leading-relaxed pl-2 md:text-[9px] lg:text-[10px] 3xl:text-lg 4xl:text-xl" dangerouslySetInnerHTML={{ __html: systemDescription }} />
                </div>

                {/* Objetivos */}
                <div className="space-y-0.5 3xl:space-y-1.5 4xl:space-y-2">
                  <div className="flex items-center gap-0.5">
                    <div className="h-0.5 w-1 bg-primary" />
                    <h4 className="font-mono text-[8px] font-semibold uppercase tracking-wider md:text-[9px] lg:text-[10px] 3xl:text-lg 4xl:text-xl">
                      {t.projectLabels.objectives}
                    </h4>
                  </div>
                  <ul className="text-foreground/70 text-[8px] leading-relaxed pl-2 space-y-1 md:text-[9px] lg:text-[10px] 3xl:text-lg 4xl:text-xl">
                    {features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-primary font-bold">—</span>
                        <span dangerouslySetInnerHTML={{ __html: feature }} />
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer con línea */}
                <div className="pt-2 lg:pt-3 border-t mt-2">
                  <p className="text-muted-foreground text-[8px] font-mono italic md:text-[9px] lg:text-[10px] 3xl:text-lg 4xl:text-xl pr-6 md:pr-10 lg:pr-12 break-words hyphens-auto leading-relaxed" dangerouslySetInnerHTML={{ __html: `&ldquo;${quote}&rdquo;` }} />
                </div>

                {/* Slanted lines decorativas */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block" aria-hidden="true">
                  <div className="absolute -right-4 -bottom-8 md:-bottom-16 w-full translate-x-1/4 translate-y-1/4 rotate-[-30deg]">
                    <div className="to-background border-primary/20 from-primary/30 via-primary/25 -ml-[2px] h-3 md:h-4 w-full border-t bg-linear-to-r via-30% transition-transform duration-300 group-hover:-translate-y-0.5" />
                    <div className="to-background border-primary/20 from-primary/30 via-primary/25 -ml-[4px] h-3 md:h-4 w-full border-t bg-linear-to-r via-30% transition-transform duration-300 group-hover:-translate-y-1" />
                    <div className="to-background border-primary/20 from-primary/30 via-primary/25 -ml-[6px] h-3 md:h-4 w-full border-t bg-linear-to-r via-30% transition-transform duration-300 group-hover:-translate-y-1.5" />
                    <div className="to-background border-primary/20 from-primary/30 via-primary/25 -ml-[8px] h-3 md:h-4 w-full border-t bg-linear-to-r via-30% transition-transform duration-300 group-hover:-translate-y-2" />
                  </div>
                </div>
              </div>
            ) : isCartLayout ? (
              /* Sistema de Ventas Online */
              <div className="space-y-1.5 md:space-y-2 lg:space-y-2.5 3xl:space-y-4 4xl:space-y-5">
                {/* Header */}
                <div className="border-l border-primary pl-1.5 3xl:pl-3 4xl:pl-4">
                  <h3 className="font-incognito text-[10px] md:text-xs lg:text-sm 3xl:text-2xl 4xl:text-3xl font-bold">
                    {title}
                  </h3>
                </div>

                {/* Descripción del sistema */}
                <div className="space-y-0.5 3xl:space-y-1.5 4xl:space-y-2">
                  <div className="flex items-center gap-0.5">
                    <div className="h-0.5 w-1 bg-primary" />
                    <h4 className="font-mono text-[8px] font-semibold uppercase tracking-wider md:text-[9px] lg:text-[10px] 3xl:text-lg 4xl:text-xl">
                      {systemTitle}
                    </h4>
                  </div>
                  <p className="text-foreground/70 text-[8px] leading-relaxed pl-2 md:text-[9px] lg:text-[10px] 3xl:text-lg 4xl:text-xl" dangerouslySetInnerHTML={{ __html: systemDescription }} />
                </div>

                {/* Objetivos */}
                <div className="space-y-0.5 3xl:space-y-1.5 4xl:space-y-2">
                  <div className="flex items-center gap-0.5">
                    <div className="h-0.5 w-1 bg-primary" />
                    <h4 className="font-mono text-[8px] font-semibold uppercase tracking-wider md:text-[9px] lg:text-[10px] 3xl:text-lg 4xl:text-xl">
                      {t.projectLabels.objectives}
                    </h4>
                  </div>
                  <ul className="text-foreground/70 text-[8px] leading-relaxed pl-2 space-y-1 md:text-[9px] lg:text-[10px] 3xl:text-lg 4xl:text-xl">
                    {features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-primary font-bold">—</span>
                        <span dangerouslySetInnerHTML={{ __html: feature }} />
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer con línea */}
                <div className="pt-2 lg:pt-3 border-t mt-2">
                  <p className="text-muted-foreground text-[8px] font-mono italic md:text-[9px] lg:text-[10px] 3xl:text-lg 4xl:text-xl pr-8 md:pr-12 lg:pr-16 break-words hyphens-auto leading-relaxed" dangerouslySetInnerHTML={{ __html: `&ldquo;${quote}&rdquo;` }} />
                </div>

                {/* Slanted lines decorativas */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block" aria-hidden="true">
                  <div className="absolute -right-4 -bottom-8 md:-bottom-16 w-full translate-x-1/4 translate-y-1/4 rotate-[-30deg]">
                    <div className="to-background border-primary/20 from-primary/30 via-primary/25 -ml-[2px] h-3 md:h-4 w-full border-t bg-linear-to-r via-30% transition-transform duration-300 group-hover:-translate-y-0.5" />
                    <div className="to-background border-primary/20 from-primary/30 via-primary/25 -ml-[4px] h-3 md:h-4 w-full border-t bg-linear-to-r via-30% transition-transform duration-300 group-hover:-translate-y-1" />
                    <div className="to-background border-primary/20 from-primary/30 via-primary/25 -ml-[6px] h-3 md:h-4 w-full border-t bg-linear-to-r via-30% transition-transform duration-300 group-hover:-translate-y-1.5" />
                    <div className="to-background border-primary/20 from-primary/30 via-primary/25 -ml-[8px] h-3 md:h-4 w-full border-t bg-linear-to-r via-30% transition-transform duration-300 group-hover:-translate-y-2" />
                  </div>
                </div>
              </div>
            ) : (
              /* Diseño original para otros proyectos */
              <div className="space-y-1.5 md:space-y-2 lg:space-y-2.5 3xl:space-y-4 4xl:space-y-5 w-full">
                {/* Date & Status */}
                <div className="flex flex-wrap items-center gap-1">
                  <time className="text-muted-foreground font-mono text-[8px] md:text-[9px]">
                    {date}
                  </time>
                  <div className="bg-border h-2 w-px" />
                  <div className="inline-flex items-center gap-0.5">
                    <div
                      className={cn(
                        "h-0.5 w-0.5 rounded-full",
                        status === "completed"
                          ? "animate-pulse bg-green-500"
                          : "animate-pulse bg-yellow-500"
                      )}
                    />
                    <span className="text-muted-foreground font-mono text-[8px] md:text-[9px] uppercase">
                      {status === "completed" ? t.projectLabels.completed : t.projectLabels.inDevelopment}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <div>
                  <h3 className="font-incognito text-sm md:text-base font-bold lg:text-lg">
                    {title}
                  </h3>
                  <div className="my-0.5 lg:my-1 flex items-center gap-0.5">
                    <div className="h-0.5 bg-primary" style={{ width: "16px" }} />
                    <div
                      className="h-0.5 bg-primary/60"
                      style={{ width: "8px" }}
                    />
                    <div
                      className="h-0.5 bg-primary/30"
                      style={{ width: "4px" }}
                    />
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-[8px] md:text-[9px] lg:text-[10px] 3xl:text-lg 4xl:text-xl leading-relaxed">
                  {description}
                </p>

                {/* Tags */}
                {badges && badges.length > 0 && (
                  <div className="flex flex-wrap gap-0.5">
                    {badges.map((badge, badgeIndex) => (
                      <span
                        key={badgeIndex}
                        className={cn(
                          "rounded-md border px-1 py-0.5 font-mono text-[7px] md:text-[8px] font-medium",
                          badge.color
                        )}
                      >
                        {badge.text}
                      </span>
                    ))}
                  </div>
                )}

                {/* Buttons */}
                <div className="flex flex-wrap gap-1">
                  {githubUrl && (
                    <button
                      className="bg-foreground text-background hover:bg-foreground/90 group/btn relative inline-flex items-center gap-0.5 rounded-md border px-2 py-0.5 text-[9px] md:text-[10px] font-medium transition-colors"
                      onClick={() => window.open(githubUrl, "_blank")}
                    >
                      <Github className="h-2 w-2 md:h-2.5 md:w-2.5" />
                      {t.projectLabels.viewCode}
                      <ArrowUpRight className="h-1.5 w-1.5 md:h-2 md:w-2 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </button>
                  )}

                  {demoUrl && (
                    <button
                      className="border-foreground text-foreground hover:bg-foreground hover:text-background group/btn inline-flex items-center gap-0.5 rounded-md border px-2 py-0.5 text-[9px] md:text-[10px] font-medium transition-colors"
                      onClick={() => window.open(demoUrl, "_blank")}
                    >
                      {t.projectLabels.liveDemo}
                      <ArrowUpRight className="h-1.5 w-1.5 md:h-2 md:w-2 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </button>
                  )}
                </div>

                {/* Slanted lines */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block" aria-hidden="true">
                  <div className="absolute -right-4 -bottom-8 md:-bottom-16 w-full translate-x-1/4 translate-y-1/4 rotate-[-30deg]">
                    {/* 1st Line */}
                    <div className="to-background border-primary/20 from-primary/30 via-primary/25 -ml-[2px] h-3 md:h-4 w-full border-t bg-linear-to-r via-30% transition-transform duration-300 group-hover:-translate-y-0.5" />

                    {/* 2nd Line */}
                    <div className="to-background border-primary/20 from-primary/30 via-primary/25 -ml-[4px] h-3 md:h-4 w-full border-t bg-linear-to-r via-30% transition-transform duration-300 group-hover:-translate-y-1" />

                    {/* 3rd Line */}
                    <div className="to-background border-primary/20 from-primary/30 via-primary/25 -ml-[6px] h-3 md:h-4 w-full border-t bg-linear-to-r via-30% transition-transform duration-300 group-hover:-translate-y-1.5" />

                    {/* 4th Line */}
                    <div className="to-background border-primary/20 from-primary/30 via-primary/25 -ml-[8px] h-3 md:h-4 w-full border-t bg-linear-to-r via-30% transition-transform duration-300 group-hover:-translate-y-2" />
                  </div>
                </div>
              </div>
            )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
