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
import { Github, ArrowUpRight, ExternalLink } from "lucide-react";
import DecorativeCorners from "./shared/DecorativeCorners";
import GridBackground from "./shared/GridBackground";
import { LOGO_SVG } from "@/data/projects";
import type { ProjectHeroProps } from "@/types/projects";

export default function ProjectHero({
  hero,
  showLogo = false,
  projectNumber,
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

  return (
    <section className="group relative h-screen w-full overflow-hidden border-b">
      {/* Logo SVG - Only shown for first project */}
      {showLogo && (
        <div className="absolute left-8 top-16 z-20 hidden lg:block">
          <div
            className="w-32 text-foreground"
            dangerouslySetInnerHTML={{ __html: LOGO_SVG }}
            aria-label="JaviRL Logo"
          />
        </div>
      )}

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
                    {mediaType === "video" ? (
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

            <p className="text-muted-foreground mb-6 text-sm leading-relaxed md:text-base">
              {description}
            </p>

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
      <div className="hidden h-full lg:flex lg:flex-col lg:justify-center">
        <div className="relative px-6 py-6 lg:px-12 xl:px-16">
          {/* Centered large video container */}
          <div className="mx-auto max-w-7xl">
            {/* Image wrapper */}
            <div className="bg-muted/20 relative overflow-hidden border">
              <GridBackground />

              {/* Video section */}
              <div className="relative z-10 p-6 lg:p-8 xl:p-10">
                <div className="group/image relative">
                  <DecorativeCorners size="medium" hoverExpand />

                  {/* Media player */}
                  <div className="bg-background relative overflow-hidden border-2 shadow-2xl">
                    <div className="relative aspect-video overflow-hidden">
                      {mediaType === "video" ? (
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
            <div className="mt-8 text-center">
              <div className="mb-4 flex items-center justify-center gap-3">
                <span className="text-muted-foreground font-mono text-xs uppercase">
                  Proyecto {projectNumber}
                </span>
                <div className="bg-border h-4 w-px" aria-hidden="true" />
                <time className="text-muted-foreground font-mono text-xs">
                  {date}
                </time>
              </div>

              <h3 className="font-incognito mb-4 text-4xl font-bold">
                {title}
              </h3>

              <div className="mb-6 flex items-center justify-center gap-2">
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

              <p className="text-muted-foreground mx-auto mb-6 max-w-2xl text-base leading-relaxed">
                {description}
              </p>

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
