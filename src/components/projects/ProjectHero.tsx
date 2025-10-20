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

  // Proyectos que muestran el bloque con grid de líneas
  const isGridBlock = projectId === "linkedin-stats" || projectId === "inanilux-portfolio" || projectId === "color-palette";

  // Si no hay título y no es un bloque con grid, no renderizar hero
  if (!title && !isGridBlock) {
    return null;
  }

  // Renderizado especial para bloques con grid
  if (isGridBlock) {
    const isLinkedInStats = projectId === "linkedin-stats";

    return (
      <section className="group relative h-screen w-full overflow-hidden border-b snap-start snap-always bg-background">
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
          <div className="relative z-10 h-full flex flex-col lg:flex-row items-stretch justify-between gap-10 lg:gap-20 p-8 lg:p-16">
            {/* Columna izquierda: Título y métricas destacadas */}
            <div className="flex-1 flex flex-col justify-center">
              <h2 className="font-incognito text-5xl lg:text-6xl font-bold mb-4">
                {title}
              </h2>
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-primary h-1 w-12" />
                <div className="bg-primary/60 h-1 w-6" />
                <div className="bg-primary/30 h-1 w-3" />
              </div>

              {/* Texto motivacional */}
              <p className="text-muted-foreground text-lg lg:text-xl mb-10 leading-relaxed italic border-l-4 border-primary pl-4">
                Este proyecto es el que más ilusión me hizo, no solo porque cumplía la necesidad de mis seres queridos, sino que alcancé bastantes interacciones, reviews y contactos en LinkedIn. Me devolvió bastante la motivación después de un periodo complicado.
              </p>

              {/* Métricas principales destacadas */}
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="border border-border p-6 bg-background/50">
                  <div className="text-4xl lg:text-5xl font-bold text-primary font-mono">50.174</div>
                  <div className="text-sm lg:text-base text-muted-foreground uppercase tracking-wider mt-2">Impresiones</div>
                </div>
                <div className="border border-border p-6 bg-background/50">
                  <div className="text-4xl lg:text-5xl font-bold text-primary font-mono">29.081</div>
                  <div className="text-sm lg:text-base text-muted-foreground uppercase tracking-wider mt-2">Alcance</div>
                </div>
                <div className="border border-border p-6 bg-background/50">
                  <div className="text-4xl lg:text-5xl font-bold text-primary font-mono">725</div>
                  <div className="text-sm lg:text-base text-muted-foreground uppercase tracking-wider mt-2">Reacciones</div>
                </div>
                <div className="border border-border p-6 bg-background/50">
                  <div className="text-4xl lg:text-5xl font-bold text-primary font-mono">332</div>
                  <div className="text-sm lg:text-base text-muted-foreground uppercase tracking-wider mt-2">Visitas Perfil</div>
                </div>
              </div>

              {/* Métricas secundarias en lista */}
              <div className="space-y-4 text-base lg:text-lg">
                <div className="flex justify-between text-muted-foreground border-b border-border/50 pb-3">
                  <span>Visitas al enlace</span>
                  <span className="font-mono font-semibold">130</span>
                </div>
                <div className="flex justify-between text-muted-foreground border-b border-border/50 pb-3">
                  <span>Comentarios</span>
                  <span className="font-mono font-semibold">7</span>
                </div>
                <div className="flex justify-between text-muted-foreground border-b border-border/50 pb-3">
                  <span>Veces compartido</span>
                  <span className="font-mono font-semibold">9</span>
                </div>
                <div className="flex justify-between text-muted-foreground border-b border-border/50 pb-3">
                  <span>Veces guardado</span>
                  <span className="font-mono font-semibold">24</span>
                </div>
              </div>
            </div>

            {/* Columna derecha: Imagen y enlaces */}
            <div className="flex-1 flex flex-col justify-center gap-6">
              {/* Imagen con bordes decorativos */}
              <div className="relative w-full max-w-2xl mx-auto group/image">
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
              <div className="flex flex-col gap-3 max-w-2xl mx-auto w-full">
                <Button asChild variant="outline" size="lg" className="group/btn border-2 font-medium">
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
                <Button asChild variant="outline" size="lg" className="group/btn border-2 font-medium">
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
            <div className="relative z-10 h-full flex items-center justify-center p-8 lg:p-20">
              <div className="max-w-[1400px] w-full">
                {/* Badge de "Prototipo en desarrollo" en esquina superior derecha */}
                <div className="absolute top-8 right-8 px-5 py-2.5 bg-yellow-500/10 border border-yellow-500/30 rounded-lg backdrop-blur-sm">
                  <span className="text-yellow-600 dark:text-yellow-400 text-sm font-mono font-semibold uppercase tracking-wider">
                    Prototipo en desarrollo
                  </span>
                </div>

                {/* Layout de 2 columnas */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                  {/* COLUMNA IZQUIERDA - Foto circular + Stats */}
                  <div className="space-y-12">
                    {/* Foto circular de la creadora */}
                    <div className="flex justify-center lg:justify-start">
                      <div className="relative">
                        <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-[6px] border-green-500/30 shadow-2xl">
                          <img
                            src="/projects/fotoina.jpg"
                            alt="Inanilux - Creadora de contenido artístico"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {/* Anillo decorativo */}
                        <div className="absolute inset-0 rounded-full border-[3px] border-green-500/20 animate-pulse" style={{ animation: "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite" }} />
                      </div>
                    </div>

                    {/* Estadísticas grandes de redes sociales */}
                    <div className="space-y-8">
                      {/* TikTok */}
                      <div className="flex items-center gap-5">
                        <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-pink-500/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0">
                          <svg className="w-8 h-8 lg:w-10 lg:h-10" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                          </svg>
                        </div>
                        <div>
                          <div className="font-bold text-3xl lg:text-5xl font-mono">93.3K</div>
                          <div className="text-base lg:text-lg text-muted-foreground">seguidores · 4.7M ♥</div>
                        </div>
                      </div>

                      {/* Instagram */}
                      <div className="flex items-center gap-5">
                        <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0">
                          <svg className="w-8 h-8 lg:w-10 lg:h-10" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                        </div>
                        <div>
                          <div className="font-bold text-3xl lg:text-5xl font-mono">34.6K</div>
                          <div className="text-base lg:text-lg text-muted-foreground">seguidores · 43 posts</div>
                        </div>
                      </div>

                      {/* YouTube */}
                      <div className="flex items-center gap-5">
                        <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-red-500/20 to-red-600/20 flex items-center justify-center flex-shrink-0">
                          <svg className="w-8 h-8 lg:w-10 lg:h-10" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                          </svg>
                        </div>
                        <div>
                          <div className="font-bold text-3xl lg:text-5xl font-mono">4.05K</div>
                          <div className="text-base lg:text-lg text-muted-foreground">suscriptores · 75 vídeos</div>
                        </div>
                      </div>

                      {/* Enlace */}
                      <div className="pt-6 border-t border-border/50">
                        <a
                          href="https://inanilux.carrd.co"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-3 text-lg font-medium text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors"
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          inanilux.carrd.co
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* COLUMNA DERECHA - Título y texto descriptivo */}
                  <div className="space-y-10">
                    {/* Título del proyecto */}
                    <h2 className="font-incognito text-6xl lg:text-7xl font-bold leading-tight">
                      {title}
                    </h2>

                    <div className="flex items-center gap-3">
                      <div className="h-2 bg-primary" style={{ width: "80px" }} />
                      <div className="h-2 bg-primary/60" style={{ width: "40px" }} />
                      <div className="h-2 bg-primary/30" style={{ width: "20px" }} />
                    </div>

                    {/* Texto descriptivo con palabras destacadas */}
                    <div className="space-y-8 text-2xl lg:text-3xl leading-relaxed lg:leading-relaxed">
                      <p className="text-muted-foreground">
                        Este proyecto es un <span className="font-bold text-foreground">prototipo</span> que refleja mi forma de trabajar. Decidí intentar contactar con <span className="font-bold text-green-600 dark:text-green-400">Inanilux</span>, creadora de contenido artístico centrado en Pokémon, tras ver un tuit en el que comentaba que aún no tenía un <span className="font-semibold text-foreground">portfolio como ilustradora</span>.
                      </p>
                      <p className="text-muted-foreground">
                        Me ofrecí para crearle uno, no por <span className="font-semibold text-foreground">encargo</span> ni por interés económico, sino como <span className="font-bold text-foreground">ejercicio creativo y de aprendizaje</span>. Me hubiera gustado mostrar este proyecto terminado, pero como <span className="font-semibold text-foreground">cierta empresa valenciana</span> me retó a venderme de la mejor manera posible, aún no he podido finalizarlo. Por ello, he decidido mostrar a <span className="text-3xl lg:text-4xl font-bold text-red-600 dark:text-red-500">continuación</span> cómo es mi <span className="text-3xl lg:text-4xl font-bold text-red-600 dark:text-red-500">proceso creativo</span>.
                      </p>
                    </div>

                    {/* Descripción adicional */}
                    <div className="pt-10 border-t-2 border-border/50">
                      <p className="text-xl lg:text-2xl text-muted-foreground italic">
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
            <div className="relative z-10 h-full flex items-center justify-start p-6 lg:p-12">
              <div className="w-full max-h-full flex flex-col">
                {/* Título superior */}
                <div className="mb-6 flex-shrink-0">
                  <h2 className="font-incognito text-3xl lg:text-4xl font-bold mb-2">
                    Paleta Cromática
                  </h2>
                  <p className="text-base lg:text-lg text-muted-foreground">
                    Análisis de colores principales del diseño
                  </p>
                </div>

                {/* Imágenes con hexadecimales */}
                <div className="flex-1 flex flex-col justify-center space-y-8 min-h-0">
                  {/* Imagen i3 con colores del modo claro */}
                  <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
                    <div className="flex-1 min-w-0 max-w-2xl">
                      <img
                        src="/projects/i3.png"
                        alt="Análisis de paleta de colores - Modo claro"
                        className="w-full h-auto max-h-[25vh] object-contain rounded-lg shadow-xl border-2 border-border"
                      />
                    </div>
                    <div className="flex flex-col justify-center gap-6 lg:min-w-[280px] flex-shrink-0">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-lg border-2 border-border shadow-md flex-shrink-0" style={{ backgroundColor: '#F7D1D5' }} />
                        <div className="flex flex-col">
                          <span className="font-mono text-lg font-bold">#F7D1D5</span>
                          <span className="text-xs text-muted-foreground">Rosa pastel</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-lg border-2 border-border shadow-md flex-shrink-0" style={{ backgroundColor: '#816D5A' }} />
                        <div className="flex flex-col">
                          <span className="font-mono text-lg font-bold">#816D5A</span>
                          <span className="text-xs text-muted-foreground">Marrón cálido</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-lg border-2 border-border shadow-md flex-shrink-0" style={{ backgroundColor: '#FAFAFA' }} />
                        <div className="flex flex-col">
                          <span className="font-mono text-lg font-bold">#FAFAFA</span>
                          <span className="text-xs text-muted-foreground">Blanco suave</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Imagen i4 con colores del modo oscuro */}
                  <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
                    <div className="flex-1 min-w-0 max-w-2xl">
                      <img
                        src="/projects/i4.png"
                        alt="Análisis de paleta de colores - Modo oscuro"
                        className="w-full h-auto max-h-[25vh] object-contain rounded-lg shadow-xl border-2 border-border"
                      />
                    </div>
                    <div className="flex flex-col justify-center gap-6 lg:min-w-[280px] flex-shrink-0">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-lg border-2 border-border shadow-md flex-shrink-0" style={{ backgroundColor: '#746899' }} />
                        <div className="flex flex-col">
                          <span className="font-mono text-lg font-bold">#746899</span>
                          <span className="text-xs text-muted-foreground">Morado lavanda</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-lg border-2 border-border shadow-md flex-shrink-0" style={{ backgroundColor: '#EE8778' }} />
                        <div className="flex flex-col">
                          <span className="font-mono text-lg font-bold">#EE8778</span>
                          <span className="text-xs text-muted-foreground">Coral suave</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-lg border-2 border-border shadow-md flex-shrink-0" style={{ backgroundColor: '#413350' }} />
                        <div className="flex flex-col">
                          <span className="font-mono text-lg font-bold">#413350</span>
                          <span className="text-xs text-muted-foreground">Púrpura oscuro</span>
                        </div>
                      </div>
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

  return (
    <section className="group relative h-screen w-full overflow-hidden border-b snap-start snap-always">
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
