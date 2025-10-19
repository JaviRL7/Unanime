"use client";

import SectionHeading from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import HeadingLine from "@/components/ui/heading-line";
import env from "@/config/env";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Github, ArrowUpRight, ExternalLink } from "lucide-react";
import { motion } from "motion/react";

const Projects = () => {
  const projects = [
    {
      title: "Doña Araña",
      description:
        "Sistema de gestión web completo con funcionalidades avanzadas para administración de contenido y usuarios.",
      tags: ["Gestión", "Fullstack", "Admin"],
      github: "https://github.com/javierrodriguez/dona-arana",
      image: "/projects/dona-arana-screenshot.png",
      live: null,
      date: "Ene, 2025",
      status: "in progress",
    },
    {
      title: "E-Commerce",
      description: "Plataforma de comercio electrónico completa con gestión de productos, carrito de compras y pasarela de pago integrada.",
      tags: ["E-commerce", "Fullstack", "Pagos"],
      github: "https://github.com/javierrodriguez/ecommerce",
      image: "/projects/ecommerce-screenshot.png",
      live: "https://ecommerce-demo.com",
      date: "Nov, 2024",
      status: "completed",
    },
    {
      title: "Contabilidad Web",
      description:
        "Sistema de gestión contable para pequeñas empresas con dashboard interactivo, reportes financieros y análisis en tiempo real.",
      tags: ["Finanzas", "Gestión", "Dashboard"],
      github: "https://github.com/javierrodriguez/contabilidad-web",
      image: "/projects/contabilidad-screenshot.png",
      live: null,
      date: "Dic, 2024",
      status: "completed",
    },
  ];

  const tagColors = {
    "Gestión": "bg-emerald-500/10 text-emerald-600 border-emerald-500/30",
    Fullstack: "bg-orange-500/10 text-orange-600 border-orange-500/30",
    Admin: "bg-purple-500/10 text-purple-600 border-purple-500/30",
    "E-commerce": "bg-blue-500/10 text-blue-600 border-blue-500/30",
    Pagos: "bg-green-500/10 text-green-600 border-green-500/30",
    Finanzas: "bg-cyan-500/10 text-cyan-600 border-cyan-500/30",
    Dashboard: "bg-indigo-500/10 text-indigo-600 border-indigo-500/30",
  };

  return (
    <SectionHeading id="projects" text="Proyectos">
      <div className="divide-y">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="grid lg:grid-cols-2">
              {/* Image Side  */}
              <div className="bg-muted/20 relative overflow-hidden border-b lg:border-r lg:border-b-0">
                {/* Cross pattern */}
                <div className="absolute inset-0">
                  <div className="before:bg-border after:bg-border relative h-full w-full before:absolute before:top-1/2 before:left-0 before:h-0.5 before:w-full after:absolute after:top-0 after:left-1/2 after:h-full after:w-0.5" />
                </div>

                {/* Image Container */}
                <div className="relative inset-0 z-10 p-8 md:p-12 lg:p-16">
                  <div className="group/image relative">
                    {/* Frame corners */}
                    <div className="border-foreground/20 absolute -top-2 -left-2 h-8 w-8 border-t-2 border-l-2 transition-all group-hover:-top-3 group-hover:-left-3" />
                    <div className="border-foreground/20 absolute -top-2 -right-2 h-8 w-8 border-t-2 border-r-2 transition-all group-hover:-top-3 group-hover:-right-3" />
                    <div className="border-foreground/20 absolute -bottom-2 -left-2 h-8 w-8 border-b-2 border-l-2 transition-all group-hover:-bottom-3 group-hover:-left-3" />
                    <div className="border-foreground/20 absolute -right-2 -bottom-2 h-8 w-8 border-r-2 border-b-2 transition-all group-hover:-right-3 group-hover:-bottom-3" />

                    {/* Main image */}
                    <div className="bg-background relative overflow-hidden border-2">
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* Overlay gradient on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Side  */}
              <div className="relative flex flex-col justify-center overflow-hidden p-8 md:p-12 lg:p-16">
                {index === 1 ? (
                  /* Diseño esquemático y ordenado para E-Commerce (prueba) */
                  <div className="space-y-10">
                    {/* Header */}
                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-incognito text-4xl font-bold mb-2 lg:text-5xl">
                        Filosofía de diseño
                      </h3>
                      <p className="text-muted-foreground text-base font-mono md:text-lg">
                        Manual · Esquemático · Ordenado
                      </p>
                    </div>

                    {/* Sección 1 */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="h-3 w-3 rounded-full bg-primary" />
                        <h4 className="font-mono text-base font-semibold uppercase tracking-wider md:text-lg">
                          Intención
                        </h4>
                      </div>
                      <p className="text-foreground text-base leading-relaxed pl-6 md:text-lg">
                        En este diseño intentamos que todo parezca manual,
                        como si cada elemento hubiera sido cuidadosamente
                        pensado y colocado con propósito.
                      </p>
                    </div>

                    {/* Sección 2 */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="h-3 w-3 rounded-full bg-primary" />
                        <h4 className="font-mono text-base font-semibold uppercase tracking-wider md:text-lg">
                          Principios
                        </h4>
                      </div>
                      <ul className="text-foreground text-base leading-relaxed pl-6 space-y-3 md:text-lg">
                        <li className="flex items-start gap-3">
                          <span className="text-primary mt-1.5 text-xl">→</span>
                          <span>Claridad sobre complejidad</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary mt-1.5 text-xl">→</span>
                          <span>Jerarquía visual evidente</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary mt-1.5 text-xl">→</span>
                          <span>Espaciado generoso y respirable</span>
                        </li>
                      </ul>
                    </div>

                    {/* Sección 3 */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="h-3 w-3 rounded-full bg-primary" />
                        <h4 className="font-mono text-base font-semibold uppercase tracking-wider md:text-lg">
                          Resultado
                        </h4>
                      </div>
                      <p className="text-foreground text-base leading-relaxed pl-6 md:text-lg">
                        Un diseño que se siente estructurado pero no rígido,
                        técnico pero accesible, simple pero no simplista.
                      </p>
                    </div>

                    {/* Footer con línea */}
                    <div className="pt-6 border-t">
                      <p className="text-muted-foreground text-sm font-mono italic md:text-base">
                        "La simplicidad es la máxima sofisticación"
                      </p>
                    </div>
                  </div>
                ) : (
                  /* Diseño original para otros proyectos */
                  <>
                    {/* Date & Status */}
                    <div className="mb-6 flex flex-wrap items-center gap-3">
                      <time className="text-muted-foreground font-mono text-xs">
                        {project.date}
                      </time>
                      <div className="bg-border h-4 w-px" />
                      <div className="inline-flex items-center gap-1.5">
                        <div
                          className={cn(
                            "h-2 w-2 rounded-full",
                            project.status === "completed"
                              ? "animate-pulse bg-green-500"
                              : "animate-pulse bg-yellow-500",
                          )}
                        />
                        <span className="text-muted-foreground font-mono text-xs uppercase">
                          {project.status === "completed" ? "completado" : "en desarrollo"}
                        </span>
                      </div>
                    </div>

                    {/* Title  */}
                    <div className="mb-6">
                      <h3 className="font-incognito text-3xl font-bold lg:text-4xl">
                        {project.title}
                      </h3>
                      <HeadingLine className="mt-3" />
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 text-sm leading-relaxed md:text-base">
                      {project.description}
                    </p>

                    {/* Tags  */}
                    <div className="mb-8 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className={cn(
                            "border font-mono text-xs",
                            tagColors[tag as keyof typeof tagColors],
                          )}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/*  Buttons */}
                    <div className="flex flex-wrap gap-3">
                      <Button
                        asChild
                        variant="default"
                        size="lg"
                        className="group/btn relative border-2 font-medium"
                        disabled={!project.github}
                      >
                        <a
                          href={project.github || undefined}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Ver Código
                          <ArrowUpRight className="ml-1 h-3 w-3 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        </a>
                      </Button>

                      <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="group/btn border-2 font-medium"
                        disabled={!project.live}
                      >
                        <a
                          href={project.live || undefined}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo en Vivo
                          <ArrowUpRight className="ml-1 h-3 w-3 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        </a>
                      </Button>
                    </div>

                    {/*  slanted lines */}
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
          </motion.div>
        ))}

        {/* Featured Video Project - Centered & Larger */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="group relative border-t"
        >
          {/* Mobile: Standard rectangular layout */}
          <div className="lg:hidden">
            <div className="grid">
              {/* Video Side  */}
              <div className="bg-muted/20 relative overflow-hidden border-b">
                {/* Cross pattern */}
                <div className="absolute inset-0">
                  <div className="before:bg-border after:bg-border relative h-full w-full before:absolute before:top-1/2 before:left-0 before:h-0.5 before:w-full after:absolute after:top-0 after:left-1/2 after:h-full after:w-0.5" />
                </div>

                {/* Video Container */}
                <div className="relative inset-0 z-10 p-8 md:p-12">
                  <div className="group/video relative">
                    {/* Frame corners */}
                    <div className="border-foreground/20 absolute -top-2 -left-2 h-8 w-8 border-t-2 border-l-2 transition-all group-hover:-top-3 group-hover:-left-3" />
                    <div className="border-foreground/20 absolute -top-2 -right-2 h-8 w-8 border-t-2 border-r-2 transition-all group-hover:-top-3 group-hover:-right-3" />
                    <div className="border-foreground/20 absolute -bottom-2 -left-2 h-8 w-8 border-b-2 border-l-2 transition-all group-hover:-bottom-3 group-hover:-left-3" />
                    <div className="border-foreground/20 absolute -right-2 -bottom-2 h-8 w-8 border-r-2 border-b-2 transition-all group-hover:-right-3 group-hover:-bottom-3" />

                    {/* Video */}
                    <div className="bg-background relative overflow-hidden border-2">
                      <div className="relative aspect-video overflow-hidden">
                        <video
                          src="/projects/featured-video.mp4"
                          className="h-full w-full object-cover"
                          controls
                          preload="metadata"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="relative flex flex-col justify-center overflow-hidden p-8 md:p-12">
                <div className="mb-6 flex flex-wrap items-center gap-3">
                  <time className="text-muted-foreground font-mono text-xs">Ene, 2025</time>
                  <div className="bg-border h-4 w-px" />
                  <div className="inline-flex items-center gap-1.5">
                    <div className="h-2 w-2 rounded-full animate-pulse bg-blue-500" />
                    <span className="text-muted-foreground font-mono text-xs uppercase">destacado</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-incognito text-3xl font-bold">Proyecto Destacado</h3>
                  <HeadingLine className="mt-3" />
                </div>

                <p className="text-muted-foreground mb-6 text-sm leading-relaxed md:text-base">
                  Descripción del proyecto destacado en video. Este es un proyecto especial que merece una presentación más visual.
                </p>

                <div className="mb-8 flex flex-wrap gap-2">
                  <Badge variant="outline" className="border font-mono text-xs bg-violet-500/10 text-violet-600 border-violet-500/30">
                    Video
                  </Badge>
                  <Badge variant="outline" className="border font-mono text-xs bg-pink-500/10 text-pink-600 border-pink-500/30">
                    Destacado
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop: Large centered video layout */}
          <div className="hidden lg:block">
            <div className="relative py-16 px-8 lg:px-16 xl:px-24">
              {/* Centered large video container */}
              <div className="mx-auto max-w-5xl">
                {/* Video wrapper */}
                <div className="bg-muted/20 relative overflow-hidden border">
                  {/* Cross pattern background */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="before:bg-border after:bg-border relative h-full w-full before:absolute before:top-1/2 before:left-0 before:h-0.5 before:w-full after:absolute after:top-0 after:left-1/2 after:h-full after:w-0.5" />
                  </div>

                  {/* Video section */}
                  <div className="relative z-10 p-12 xl:p-16">
                    <div className="group/video relative">
                      {/* Decorative frame corners - larger */}
                      <div className="border-foreground/20 absolute -top-3 -left-3 h-12 w-12 border-t-2 border-l-2 transition-all group-hover:-top-4 group-hover:-left-4" />
                      <div className="border-foreground/20 absolute -top-3 -right-3 h-12 w-12 border-t-2 border-r-2 transition-all group-hover:-top-4 group-hover:-right-4" />
                      <div className="border-foreground/20 absolute -bottom-3 -left-3 h-12 w-12 border-b-2 border-l-2 transition-all group-hover:-bottom-4 group-hover:-left-4" />
                      <div className="border-foreground/20 absolute -right-3 -bottom-3 h-12 w-12 border-r-2 border-b-2 transition-all group-hover:-right-3 group-hover:-bottom-4" />

                      {/* Video player */}
                      <div className="bg-background relative overflow-hidden border-2 shadow-2xl">
                        <div className="relative aspect-video overflow-hidden">
                          <video
                            src="/projects/featured-video.mp4"
                            className="h-full w-full object-cover transition-transform duration-700 group-hover/video:scale-[1.02]"
                            controls
                            preload="metadata"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content below video */}
                <div className="mt-8 text-center">
                  <div className="mb-4 flex items-center justify-center gap-3">
                    <time className="text-muted-foreground font-mono text-xs">Ene, 2025</time>
                    <div className="bg-border h-4 w-px" />
                    <div className="inline-flex items-center gap-1.5">
                      <div className="h-2 w-2 rounded-full animate-pulse bg-blue-500" />
                      <span className="text-muted-foreground font-mono text-xs uppercase">destacado</span>
                    </div>
                  </div>

                  <h3 className="font-incognito text-4xl font-bold mb-4">Proyecto Destacado</h3>

                  <div className="flex items-center justify-center gap-2 mb-6">
                    <div className="h-1 bg-primary" style={{ width: '32px' }} />
                    <div className="h-1 bg-primary/60" style={{ width: '16px' }} />
                    <div className="h-1 bg-primary/30" style={{ width: '8px' }} />
                  </div>

                  <p className="text-muted-foreground mx-auto max-w-2xl text-base leading-relaxed mb-6">
                    Descripción del proyecto destacado en video. Este es un proyecto especial que merece una presentación más visual y destaca por su implementación única.
                  </p>

                  <div className="mb-8 flex flex-wrap gap-2 justify-center">
                    <Badge variant="outline" className="border font-mono text-xs bg-violet-500/10 text-violet-600 border-violet-500/30">
                      Video
                    </Badge>
                    <Badge variant="outline" className="border font-mono text-xs bg-pink-500/10 text-pink-600 border-pink-500/30">
                      Destacado
                    </Badge>
                    <Badge variant="outline" className="border font-mono text-xs bg-amber-500/10 text-amber-600 border-amber-500/30">
                      Innovación
                    </Badge>
                  </div>

                  <div className="flex flex-wrap gap-3 justify-center">
                    <Button
                      asChild
                      variant="default"
                      size="lg"
                      className="group/btn relative border-2 font-medium"
                    >
                      <a
                        href="https://github.com/javierrodriguez/featured-project"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Ver Código
                        <ArrowUpRight className="ml-1 h-3 w-3 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </a>
                    </Button>

                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="group/btn border-2 font-medium"
                    >
                      <a
                        href="https://featured-demo.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Ver Demo
                        <ArrowUpRight className="ml-1 h-3 w-3 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* View All Projects */}
      <div className="border-t">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-12 text-center"
        >
          <Button asChild variant="ghost" size="lg" className="group font-mono">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="bg-foreground/40 mr-2 inline-block h-px w-8 transition-all group-hover:w-12" />
              VER TODOS LOS PROYECTOS EN GITHUB
              <span className="bg-foreground/40 ml-2 inline-block h-px w-8 transition-all group-hover:w-12" />
            </a>
          </Button>
        </motion.div>
      </div>
    </SectionHeading>
  );
};

export default Projects;
