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
import type { ProjectDetail } from "@/types/projects";
import DecorativeCorners from "./shared/DecorativeCorners";
import GridBackground from "./shared/GridBackground";
import DiagonalDecoration from "./shared/DiagonalDecoration";
import StatusBadge from "./shared/StatusBadge";

interface ProjectDetailRowProps {
  detail: ProjectDetail;
  index: number;
  projectId: string;
}

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
  const isCartLayout = index === 1 && projectId === "e-commerce";

  return (
    <section className="relative h-[50vh] w-full overflow-hidden">
      {/* Grid Background */}
      <GridBackground />

      <div className="relative z-10 mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 2-Column Grid Layout */}
        <div className="grid h-full grid-cols-1 gap-0 lg:grid-cols-2">
          {/* LEFT COLUMN - Media */}
          <div className="group relative flex items-center justify-center overflow-hidden p-8">
            {/* Media Container */}
            <div className="relative h-full w-full overflow-hidden">
              {/* Decorative Corners */}
              <DecorativeCorners size="medium" hoverExpand />

              {/* Media (Video or Image) */}
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

          {/* RIGHT COLUMN - Content (Scrollable) */}
          <div className="group relative flex items-center overflow-hidden p-8">
            {/* Diagonal Decoration */}
            <DiagonalDecoration />

            {/* Scrollable Content Container */}
            <div className="relative z-10 h-full w-full overflow-y-auto">
              <div className="space-y-6 pt-4">
                {/* Status Badge */}
                <StatusBadge status={status} date={date} />

                {/* Title Section */}
                <div className="space-y-2">
                  <h3 className="font-heading text-3xl font-bold lg:text-4xl">
                    {title}
                  </h3>

                  {/* Subtitle with decorative line */}
                  <div className="flex items-center gap-3">
                    <div className="bg-primary h-px flex-1" aria-hidden="true" />
                    <span className="text-muted-foreground font-mono text-sm">
                      {subtitle}
                    </span>
                    <div className="bg-primary h-px flex-1" aria-hidden="true" />
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {description}
                </p>

                {/* Optional Badges (for special layouts) */}
                {badges && badges.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {badges.map((badge, badgeIndex) => (
                      <span
                        key={badgeIndex}
                        className={cn(
                          "rounded-md px-3 py-1 font-mono text-xs font-medium",
                          badge.color
                        )}
                      >
                        {badge.text}
                      </span>
                    ))}
                  </div>
                )}

                {/* System Description Section */}
                <div className="border-border space-y-3 rounded-lg border p-4">
                  <h4 className="font-heading text-lg font-semibold">
                    {systemTitle}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {systemDescription}
                  </p>
                </div>

                {/* Features List */}
                {features && features.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="font-heading text-sm font-semibold uppercase tracking-wide">
                      Características Principales
                    </h4>
                    <ul className="space-y-2">
                      {features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-2"
                        >
                          <ChevronRight
                            className="text-primary mt-0.5 h-4 w-4 flex-shrink-0"
                            aria-hidden="true"
                          />
                          <span className="text-muted-foreground text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Quote Section */}
                {quote && (
                  <blockquote className="border-border border-b pb-6">
                    <p className="text-muted-foreground italic leading-relaxed">
                      &ldquo;{quote}&rdquo;
                    </p>
                  </blockquote>
                )}

                {/* Action Buttons */}
                {(githubUrl || demoUrl) && (
                  <div className="flex flex-wrap gap-3 pt-2">
                    {githubUrl && (
                      <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-foreground text-background hover:bg-foreground/90 inline-flex items-center gap-2 rounded-md px-4 py-2 font-medium transition-colors"
                        aria-label="Ver código en GitHub"
                      >
                        <Github className="h-4 w-4" aria-hidden="true" />
                        <span>GitHub</span>
                      </a>
                    )}

                    {demoUrl && (
                      <a
                        href={demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-foreground text-foreground hover:bg-foreground hover:text-background inline-flex items-center gap-2 rounded-md border px-4 py-2 font-medium transition-colors"
                        aria-label="Ver demo en vivo"
                      >
                        <span>Ver Demo</span>
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                )}

                {/* Special Layout Content for Gallery (index 0) */}
                {isGalleryLayout && (
                  <div className="border-border mt-6 space-y-4 rounded-lg border p-4">
                    <h4 className="font-heading text-lg font-semibold">
                      Sección de Galería
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Sistema de galería interactiva con navegación fluida y
                      visualización optimizada de productos artesanales.
                    </p>
                  </div>
                )}

                {/* Special Layout Content for Cart (index 1) */}
                {isCartLayout && (
                  <div className="border-border mt-6 space-y-4 rounded-lg border p-4">
                    <h4 className="font-heading text-lg font-semibold">
                      Carrito de Compras
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Sistema completo de gestión de carrito con cálculo
                      automático de totales y persistencia de datos.
                    </p>
                  </div>
                )}

                {/* Bottom Spacing for Scroll */}
                <div className="h-4" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
