"use client";

import SectionHeading from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import HeadingLine from "@/components/ui/heading-line";
import env from "@/config/env";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Github, ArrowUpRight, ExternalLink, ChevronRight } from "lucide-react";
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
    {
      title: "Nuevo Proyecto",
      description:
        "Descripción del nuevo proyecto con funcionalidades avanzadas.",
      tags: ["Web", "Desarrollo", "API"],
      github: "https://github.com/javierrodriguez/nuevo-proyecto",
      image: "/projects/nuevo-proyecto-screenshot.png",
      live: null,
      date: "Feb, 2025",
      status: "in progress",
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
    Web: "bg-rose-500/10 text-rose-600 border-rose-500/30",
    Desarrollo: "bg-amber-500/10 text-amber-600 border-amber-500/30",
    API: "bg-violet-500/10 text-violet-600 border-violet-500/30",
  };

  return (
    <SectionHeading id="projects" text="Proyectos">
      <div className="divide-y">
        {/* 🔥 PROYECTO DESTACADO - Aparece PRIMERO - PANTALLA COMPLETA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="group relative border-b h-screen"
        >
          {/* Logo arriba del video - Desktop */}
          <div className="hidden lg:block absolute top-16 left-8 z-20">
            <div className="w-32 text-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 319 74"
                preserveAspectRatio="xMidYMid meet"
              >
                <g fill="currentColor" fillOpacity="1">
                  <g transform="translate(15.573501, 55.485679)">
                    <path d="M 0 -54.375 L 6.015625 -54.375 L 6.015625 0 C 6.015625 2.21875 5.769531 4.28125 5.28125 6.1875 C 4.800781 8.101562 3.820312 9.640625 2.34375 10.796875 C 0.875 11.960938 -1.378906 12.566406 -4.421875 12.609375 C -6.503906 12.609375 -8.351562 12.148438 -9.96875 11.234375 C -11.582031 10.316406 -12.925781 9.0625 -14 7.46875 L -13.125 6.8125 C -12.351562 7.976562 -11.335938 8.882812 -10.078125 9.53125 C -8.816406 10.1875 -7.507812 10.46875 -6.15625 10.375 C -4.269531 10.226562 -2.890625 9.609375 -2.015625 8.515625 C -1.148438 7.429688 -0.597656 6.101562 -0.359375 4.53125 C -0.117188 2.957031 0 1.445312 0 0 Z M 0 -54.375 " />
                  </g>
                  <g transform="translate(24.779269, 55.485679)">
                    <path d="M 24.0625 -54.375 L 48.4375 0 L 41.828125 0 L 32.84375 -19.9375 C 32.84375 -17.425781 32.441406 -14.972656 31.640625 -12.578125 C 30.847656 -10.179688 29.675781 -8.039062 28.125 -6.15625 C 26.582031 -4.269531 24.675781 -2.769531 22.40625 -1.65625 C 20.132812 -0.550781 17.523438 0 14.578125 0 C 11.378906 0 8.644531 -0.6875 6.375 -2.0625 C 4.101562 -3.4375 2.410156 -5.320312 1.296875 -7.71875 C 0.191406 -10.113281 -0.191406 -12.832031 0.140625 -15.875 C 0.378906 -18.101562 0.945312 -20.265625 1.84375 -22.359375 C 2.738281 -24.460938 3.789062 -26.503906 5 -28.484375 C 6.207031 -30.472656 7.414062 -32.359375 8.625 -34.140625 C 10.125 -36.367188 11.460938 -38.5 12.640625 -40.53125 C 13.828125 -42.5625 14.832031 -44.695312 15.65625 -46.9375 C 16.476562 -49.1875 17.0625 -51.664062 17.40625 -54.375 Z M 31.171875 -23.640625 L 18.265625 -52.421875 C 17.734375 -49.421875 16.875 -46.578125 15.6875 -43.890625 C 14.507812 -41.210938 13.144531 -38.519531 11.59375 -35.8125 C 10.53125 -33.882812 9.421875 -31.816406 8.265625 -29.609375 C 7.109375 -27.410156 6.164062 -25.164062 5.4375 -22.875 C 4.707031 -20.582031 4.46875 -18.273438 4.71875 -15.953125 C 4.957031 -13.578125 5.71875 -11.484375 7 -9.671875 C 8.28125 -7.859375 9.984375 -6.539062 12.109375 -5.71875 C 14.234375 -4.90625 16.695312 -4.738281 19.5 -5.21875 C 21.289062 -5.507812 23.039062 -6.304688 24.75 -7.609375 C 26.46875 -8.910156 27.941406 -10.476562 29.171875 -12.3125 C 30.410156 -14.15625 31.242188 -16.066406 31.671875 -18.046875 C 32.109375 -20.035156 31.941406 -21.898438 31.171875 -23.640625 Z M 31.171875 -23.640625 " />
                  </g>
                  <g transform="translate(74.071876, 55.485679)">
                    <path d="M 6.375 -54.375 L 24.578125 -1.734375 C 27.285156 -10.390625 29.757812 -18.945312 32 -27.40625 C 34.25 -35.863281 36.222656 -44.851562 37.921875 -54.375 L 43.9375 -54.375 L 25.15625 0 L 18.78125 0 L 0 -54.375 Z M 6.375 -54.375 " />
                  </g>
                  <g transform="translate(118.87012, 55.485679)">
                    <path d="M 0 0 L 0 -54.375 L 6.015625 -54.375 L 6.015625 0 Z M 0 0 " />
                  </g>
                  <g transform="translate(128.148379, 55.485679)">
                    <path d="M 27.1875 -54.375 C 29.164062 -54.375 31.132812 -54.191406 33.09375 -53.828125 C 35.050781 -53.460938 36.925781 -52.875 38.71875 -52.0625 C 39.875 -51.519531 41.066406 -50.789062 42.296875 -49.875 C 43.535156 -48.957031 44.578125 -47.90625 45.421875 -46.71875 C 46.265625 -45.539062 46.6875 -44.25 46.6875 -42.84375 C 46.6875 -41.195312 46.140625 -39.832031 45.046875 -38.75 C 43.960938 -37.664062 42.40625 -37.144531 40.375 -37.1875 C 41.15625 -39.363281 41.335938 -41.414062 40.921875 -43.34375 C 40.515625 -45.28125 39.65625 -46.984375 38.34375 -48.453125 C 37.039062 -49.929688 35.421875 -51.09375 33.484375 -51.9375 C 31.554688 -52.789062 29.457031 -53.21875 27.1875 -53.21875 C 23.65625 -53.21875 20.390625 -52.238281 17.390625 -50.28125 C 14.398438 -48.320312 11.925781 -45.675781 9.96875 -42.34375 C 8.007812 -39.007812 6.765625 -35.238281 6.234375 -31.03125 C 7.296875 -32.425781 8.5625 -33.378906 10.03125 -33.890625 C 11.507812 -34.398438 13 -34.628906 14.5 -34.578125 C 16.332031 -34.578125 18.09375 -34.25 19.78125 -33.59375 C 21.476562 -32.945312 23.148438 -32.269531 24.796875 -31.5625 C 26.441406 -30.863281 28.109375 -30.394531 29.796875 -30.15625 C 31.097656 -30.007812 32.398438 -30.128906 33.703125 -30.515625 C 35.015625 -30.910156 35.835938 -31.851562 36.171875 -33.34375 C 36.753906 -31.175781 36.671875 -29.390625 35.921875 -27.984375 C 35.171875 -26.578125 34.019531 -25.582031 32.46875 -25 C 30.925781 -24.425781 29.164062 -24.285156 27.1875 -24.578125 C 25.6875 -24.816406 24.1875 -25.296875 22.6875 -26.015625 C 21.1875 -26.742188 19.734375 -27.519531 18.328125 -28.34375 C 16.929688 -29.164062 15.554688 -29.863281 14.203125 -30.4375 C 12.859375 -31.019531 11.53125 -31.3125 10.21875 -31.3125 C 7.414062 -31.21875 6.015625 -29.84375 6.015625 -27.1875 C 6.066406 -22.207031 7.128906 -17.660156 9.203125 -13.546875 C 11.285156 -9.441406 13.992188 -6.300781 17.328125 -4.125 C 19.890625 -2.488281 22.535156 -1.535156 25.265625 -1.265625 C 27.992188 -1.003906 30.675781 -1.304688 33.3125 -2.171875 C 35.945312 -3.046875 38.410156 -4.335938 40.703125 -6.046875 C 43.003906 -7.765625 45 -9.785156 46.6875 -12.109375 L 46.6875 -6.015625 C 44.226562 -4.085938 41.316406 -2.601562 37.953125 -1.5625 C 34.597656 -0.519531 31.007812 0 27.1875 0 C 23.46875 0 19.960938 -0.695312 16.671875 -2.09375 C 13.390625 -3.5 10.503906 -5.445312 8.015625 -7.9375 C 5.523438 -10.425781 3.566406 -13.3125 2.140625 -16.59375 C 0.710938 -19.882812 0 -23.414062 0 -27.1875 C 0 -30.957031 0.695312 -34.484375 2.09375 -37.765625 C 3.5 -41.054688 5.445312 -43.945312 7.9375 -46.4375 C 10.425781 -48.925781 13.3125 -50.867188 16.59375 -52.265625 C 19.882812 -53.671875 23.414062 -54.375 27.1875 -54.375 Z M 27.1875 -54.375 " />
                  </g>
                  <g transform="translate(177.223523, 55.485679)">
                    <path d="M 0 -54.375 L 26.25 -54.375 C 28.851562 -54.375 31.28125 -53.804688 33.53125 -52.671875 C 35.78125 -51.535156 37.601562 -49.925781 39 -47.84375 C 40.40625 -45.769531 41.109375 -43.257812 41.109375 -40.3125 C 41.109375 -37.164062 40.332031 -34.550781 38.78125 -32.46875 C 37.238281 -30.394531 35.222656 -28.847656 32.734375 -27.828125 C 30.242188 -26.816406 27.550781 -26.3125 24.65625 -26.3125 C 25.8125 -25.78125 26.773438 -24.9375 27.546875 -23.78125 C 29.046875 -21.800781 30.382812 -19.648438 31.5625 -17.328125 C 32.75 -15.003906 33.882812 -12.707031 34.96875 -10.4375 C 36.0625 -8.164062 37.164062 -6.113281 38.28125 -4.28125 C 38.613281 -3.75 39.128906 -3 39.828125 -2.03125 C 40.535156 -1.0625 41.179688 -0.382812 41.765625 0 L 36.171875 0 C 35.160156 0 34.410156 -0.15625 33.921875 -0.46875 C 33.441406 -0.78125 33.035156 -1.226562 32.703125 -1.8125 C 30.859375 -5.195312 29.175781 -8.484375 27.65625 -11.671875 C 26.132812 -14.859375 24.285156 -18.144531 22.109375 -21.53125 C 19.066406 -26.175781 15.488281 -26.804688 11.375 -23.421875 L 10.796875 -24.0625 C 12.148438 -25.226562 13.46875 -26.023438 14.75 -26.453125 C 16.03125 -26.890625 17.367188 -27.144531 18.765625 -27.21875 C 20.171875 -27.289062 21.671875 -27.378906 23.265625 -27.484375 C 27.285156 -27.722656 30.25 -29 32.15625 -31.3125 C 34.0625 -33.632812 35.015625 -36.632812 35.015625 -40.3125 C 35.015625 -42.875 34.394531 -45.117188 33.15625 -47.046875 C 31.925781 -48.984375 30.332031 -50.492188 28.375 -51.578125 C 26.425781 -52.671875 24.335938 -53.21875 22.109375 -53.21875 L 6.015625 -53.21875 L 6.015625 0 L 0 0 Z M 0 -54.375 " />
                  </g>
                  <g transform="translate(233.402237, 55.485679)">
                    <path d="M 0 -54.375 L 26.25 -54.375 C 28.851562 -54.375 31.28125 -53.804688 33.53125 -52.671875 C 35.78125 -51.535156 37.601562 -49.925781 39 -47.84375 C 40.40625 -45.769531 41.109375 -43.257812 41.109375 -40.3125 C 41.109375 -37.164062 40.332031 -34.550781 38.78125 -32.46875 C 37.238281 -30.394531 35.222656 -28.847656 32.734375 -27.828125 C 30.242188 -26.816406 27.550781 -26.3125 24.65625 -26.3125 C 25.8125 -25.78125 26.773438 -24.9375 27.546875 -23.78125 C 29.046875 -21.800781 30.382812 -19.648438 31.5625 -17.328125 C 32.75 -15.003906 33.882812 -12.707031 34.96875 -10.4375 C 36.0625 -8.164062 37.164062 -6.113281 38.28125 -4.28125 C 38.613281 -3.75 39.128906 -3 39.828125 -2.03125 C 40.535156 -1.0625 41.179688 -0.382812 41.765625 0 L 36.171875 0 C 35.160156 0 34.410156 -0.15625 33.921875 -0.46875 C 33.441406 -0.78125 33.035156 -1.226562 32.703125 -1.8125 C 30.859375 -5.195312 29.175781 -8.484375 27.65625 -11.671875 C 26.132812 -14.859375 24.285156 -18.144531 22.109375 -21.53125 C 19.066406 -26.175781 15.488281 -26.804688 11.375 -23.421875 L 10.796875 -24.0625 C 12.148438 -25.226562 13.46875 -26.023438 14.75 -26.453125 C 16.03125 -26.890625 17.367188 -27.144531 18.765625 -27.21875 C 20.171875 -27.289062 21.671875 -27.378906 23.265625 -27.484375 C 27.285156 -27.722656 30.25 -29 32.15625 -31.3125 C 34.0625 -33.632812 35.015625 -36.632812 35.015625 -40.3125 C 35.015625 -42.875 34.394531 -45.117188 33.15625 -47.046875 C 31.925781 -48.984375 30.332031 -50.492188 28.375 -51.578125 C 26.425781 -52.671875 24.335938 -53.21875 22.109375 -53.21875 L 6.015625 -53.21875 L 6.015625 0 L 0 0 Z M 0 -54.375 " />
                  </g>
                  <g transform="translate(276.968165, 55.485679)">
                    <path d="M 0 0 L 0 -54.375 L 6.015625 -54.375 L 6.015625 -1.09375 C 9.929688 -1.09375 13.398438 -1.25 16.421875 -1.5625 C 19.441406 -1.875 22.179688 -2.28125 24.640625 -2.78125 C 27.109375 -3.289062 29.476562 -3.820312 31.75 -4.375 C 34.019531 -4.9375 36.363281 -5.484375 38.78125 -6.015625 L 38.78125 0 Z M 0 0 " />
                  </g>
                </g>
              </svg>
            </div>
          </div>
          {/* Mobile: Full screen layout */}
          <div className="h-full lg:hidden">
            <div className="grid h-full grid-rows-2">
              {/* Image Side */}
              <div className="bg-muted/20 relative overflow-hidden border-b">
                {/* Cross pattern */}
                <div className="absolute inset-0">
                  <div className="before:bg-border after:bg-border relative h-full w-full before:absolute before:top-1/2 before:left-0 before:h-0.5 before:w-full after:absolute after:top-0 after:left-1/2 after:h-full after:w-0.5" />
                </div>

                {/* Image Container */}
                <div className="relative inset-0 z-10 p-8 md:p-12">
                  <div className="group/image relative">
                    {/* Frame corners */}
                    <div className="border-foreground/20 absolute -top-2 -left-2 h-8 w-8 border-t-2 border-l-2 transition-all group-hover:-top-3 group-hover:-left-3" />
                    <div className="border-foreground/20 absolute -top-2 -right-2 h-8 w-8 border-t-2 border-r-2 transition-all group-hover:-top-3 group-hover:-right-3" />
                    <div className="border-foreground/20 absolute -bottom-2 -left-2 h-8 w-8 border-b-2 border-l-2 transition-all group-hover:-bottom-3 group-hover:-left-3" />
                    <div className="border-foreground/20 absolute -right-2 -bottom-2 h-8 w-8 border-r-2 border-b-2 transition-all group-hover:-right-3 group-hover:-bottom-3" />

                    {/* Video */}
                    <div className="bg-background relative overflow-hidden border-2">
                      <div className="relative aspect-video overflow-hidden">
                        <video
                          src="/video/u1.mkv"
                          className="h-full w-full object-cover"
                          autoPlay
                          muted
                          loop
                          playsInline
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="relative flex flex-col justify-center overflow-hidden p-8 md:p-12">
                <div className="mb-6 flex flex-wrap items-center gap-3">
                  <span className="text-muted-foreground font-mono text-xs uppercase">Proyecto 1</span>
                  <div className="bg-border h-4 w-px" />
                  <time className="text-muted-foreground font-mono text-xs">Ene, 2025</time>
                </div>

                <div className="mb-6">
                  <h3 className="font-incognito text-3xl font-bold">E-Commerce Doña Araña</h3>
                  <HeadingLine className="mt-3" />
                </div>

                <p className="text-muted-foreground mb-6 text-sm leading-relaxed md:text-base">
                  Aplicación web completa para digitalizar la tienda Doña Araña, especializada en lanas y manualidades. Desarrollada con Next.js y Spring Boot (Java), permite a los clientes explorar el catálogo, gestionar apartados y reseñas. El sistema incluye un panel de administración intuitivo para gestionar productos, controlar el stock y actualizar la galería, ofreciendo una experiencia moderna, funcional y totalmente responsive.
                </p>

                <div className="mb-8 flex flex-wrap gap-3">
                  <Button
                    asChild
                    variant="default"
                    size="lg"
                    className="group/btn relative border-2 font-medium"
                  >
                    <a
                      href="https://github.com/JaviRL7/Tienda2025"
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
                      href="https://pure-gratitude-production-4381.up.railway.app"
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

          {/* Desktop: Full screen centered video layout */}
          <div className="hidden h-full lg:flex lg:flex-col lg:justify-center">
            <div className="relative py-6 px-6 lg:px-12 xl:px-16">
              {/* Centered large video container */}
              <div className="mx-auto max-w-7xl">
                {/* Image wrapper */}
                <div className="bg-muted/20 relative overflow-hidden border">
                  {/* Cross pattern background */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="before:bg-border after:bg-border relative h-full w-full before:absolute before:top-1/2 before:left-0 before:h-0.5 before:w-full after:absolute after:top-0 after:left-1/2 after:h-full after:w-0.5" />
                  </div>

                  {/* Video section */}
                  <div className="relative z-10 p-6 lg:p-8 xl:p-10">
                    <div className="group/image relative">
                      {/* Decorative frame corners */}
                      <div className="border-foreground/20 absolute -top-3 -left-3 h-12 w-12 border-t-2 border-l-2 transition-all group-hover:-top-4 group-hover:-left-4" />
                      <div className="border-foreground/20 absolute -top-3 -right-3 h-12 w-12 border-t-2 border-r-2 transition-all group-hover:-top-4 group-hover:-right-4" />
                      <div className="border-foreground/20 absolute -bottom-3 -left-3 h-12 w-12 border-b-2 border-l-2 transition-all group-hover:-bottom-4 group-hover:-left-4" />
                      <div className="border-foreground/20 absolute -right-3 -bottom-3 h-12 w-12 border-r-2 border-b-2 transition-all group-hover:-right-3 group-hover:-bottom-4" />

                      {/* Video player */}
                      <div className="bg-background relative overflow-hidden border-2 shadow-2xl">
                        <div className="relative aspect-video overflow-hidden">
                          <video
                            src="/video/u1.mkv"
                            className="h-full w-full object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content below image */}
                <div className="mt-8 text-center">
                  <div className="mb-4 flex items-center justify-center gap-3">
                    <span className="text-muted-foreground font-mono text-xs uppercase">Proyecto 1</span>
                    <div className="bg-border h-4 w-px" />
                    <time className="text-muted-foreground font-mono text-xs">Ene, 2025</time>
                  </div>

                  <h3 className="font-incognito text-4xl font-bold mb-4">E-Commerce Doña Araña</h3>

                  <div className="flex items-center justify-center gap-2 mb-6">
                    <div className="h-1 bg-primary" style={{ width: '32px' }} />
                    <div className="h-1 bg-primary/60" style={{ width: '16px' }} />
                    <div className="h-1 bg-primary/30" style={{ width: '8px' }} />
                  </div>

                  <p className="text-muted-foreground mx-auto max-w-2xl text-base leading-relaxed mb-6">
                    Aplicación web completa para digitalizar la tienda Doña Araña, especializada en lanas y manualidades. Desarrollada con Next.js y Spring Boot (Java), permite a los clientes explorar el catálogo, gestionar apartados y reseñas. El sistema incluye un panel de administración intuitivo para gestionar productos, controlar el stock y actualizar la galería, ofreciendo una experiencia moderna, funcional y totalmente responsive.
                  </p>

                  <div className="flex flex-wrap gap-3 justify-center">
                    <Button
                      asChild
                      variant="default"
                      size="lg"
                      className="group/btn relative border-2 font-medium"
                    >
                      <a
                        href="https://github.com/JaviRL7/Tienda2025"
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
                        href="https://pure-gratitude-production-4381.up.railway.app"
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

        {/* 📋 GRID DE PROYECTOS - Altura exacta de 50vh por fila */}
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative h-[50vh] max-h-[50vh]"
          >
            <div className="grid h-full lg:grid-cols-2">
              {/* Image Side  */}
              <div className="bg-muted/20 relative h-full overflow-hidden border-b lg:border-r lg:border-b-0">
                {/* Cross pattern */}
                <div className="absolute inset-0">
                  <div className="before:bg-border after:bg-border relative h-full w-full before:absolute before:top-1/2 before:left-0 before:h-0.5 before:w-full after:absolute after:top-0 after:left-1/2 after:h-full after:w-0.5" />
                </div>

                {/* Image Container */}
                <div className="relative inset-0 z-10 flex h-full items-center justify-center p-6 md:p-8 lg:p-10">
                  <div className="group/image relative w-full max-w-4xl">
                    {/* Frame corners */}
                    <div className="border-foreground/20 absolute -top-2 -left-2 h-8 w-8 border-t-2 border-l-2 transition-all group-hover:-top-3 group-hover:-left-3" />
                    <div className="border-foreground/20 absolute -top-2 -right-2 h-8 w-8 border-t-2 border-r-2 transition-all group-hover:-top-3 group-hover:-right-3" />
                    <div className="border-foreground/20 absolute -bottom-2 -left-2 h-8 w-8 border-b-2 border-l-2 transition-all group-hover:-bottom-3 group-hover:-left-3" />
                    <div className="border-foreground/20 absolute -right-2 -bottom-2 h-8 w-8 border-r-2 border-b-2 transition-all group-hover:-right-3 group-hover:-bottom-3" />

                    {/* Main image/video */}
                    <div className="bg-background relative overflow-hidden border-2">
                      <div className="relative aspect-video overflow-hidden">
                        {index === 0 ? (
                          <video
                            src="/video/u2.mkv"
                            className="h-full w-full object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                          />
                        ) : index === 1 ? (
                          <video
                            src="/video/u3.mkv"
                            className="h-full w-full object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                          />
                        ) : (
                          <>
                            <img
                              src={project.image}
                              alt={project.title}
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

              {/* Content Side  */}
              <div className="relative h-full overflow-hidden">
                <div className="h-full overflow-y-auto p-6 md:p-8 lg:p-10 pt-12 md:pt-16 lg:pt-20">
                {index === 0 ? (
                  /* Sección de Galería para Doña Araña */
                  <div className="space-y-10">
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

                    {/* Header */}
                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-incognito text-4xl font-bold mb-2 lg:text-5xl">
                        Sección de Galería
                      </h3>
                      <div className="flex items-center gap-2 mt-3 mb-4">
                        <div className="h-1 bg-primary" style={{ width: '32px' }} />
                        <div className="h-1 bg-primary/60" style={{ width: '16px' }} />
                        <div className="h-1 bg-primary/30" style={{ width: '8px' }} />
                      </div>
                      <p className="text-muted-foreground text-base font-mono md:text-lg">
                        Gestión visual · Organización · Multimedia
                      </p>
                    </div>

                    {/* Descripción del sistema */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="h-3 w-3 rounded-full bg-primary" />
                        <h4 className="font-mono text-base font-semibold uppercase tracking-wider md:text-lg">
                          Sistema de Galería
                        </h4>
                      </div>
                      <p className="text-foreground text-base leading-relaxed pl-6 md:text-lg">
                        Sistema avanzado de gestión de imágenes que permite organizar,
                        categorizar y visualizar contenido multimedia de forma intuitiva.
                        Incluye funcionalidades de carga masiva, previsualización en tiempo real,
                        y organización por etiquetas y categorías personalizables.
                      </p>
                    </div>

                    {/* Características */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="h-3 w-3 rounded-full bg-primary" />
                        <h4 className="font-mono text-base font-semibold uppercase tracking-wider md:text-lg">
                          Características
                        </h4>
                      </div>
                      <ul className="text-foreground text-base leading-relaxed pl-6 space-y-3 md:text-lg">
                        <li className="flex items-start gap-3">
                          <ChevronRight className="text-primary mt-1 h-5 w-5 flex-shrink-0" />
                          <span>Optimización automática de imágenes</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <ChevronRight className="text-primary mt-1 h-5 w-5 flex-shrink-0" />
                          <span>Vista en cuadrícula responsive</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <ChevronRight className="text-primary mt-1 h-5 w-5 flex-shrink-0" />
                          <span>Filtros y búsqueda avanzada</span>
                        </li>
                      </ul>
                    </div>

                    {/* Footer con línea */}
                    <div className="pt-6 border-t">
                      <p className="text-muted-foreground text-sm font-mono italic md:text-base">
                        "Sistema de galería optimizado para la gestión visual"
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
                ) : index === 1 ? (
                  /* E-Commerce con estilo de galería */
                  <div className="space-y-10">
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

                    {/* Header */}
                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="font-incognito text-4xl font-bold mb-2 lg:text-5xl">
                        Carrito de Compras
                      </h3>
                      <div className="flex items-center gap-2 mt-3 mb-4">
                        <div className="h-1 bg-primary" style={{ width: '32px' }} />
                        <div className="h-1 bg-primary/60" style={{ width: '16px' }} />
                        <div className="h-1 bg-primary/30" style={{ width: '8px' }} />
                      </div>
                      <p className="text-muted-foreground text-base font-mono md:text-lg">
                        E-commerce · Gestión de ventas · Checkout
                      </p>
                    </div>

                    {/* Descripción del sistema */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="h-3 w-3 rounded-full bg-primary" />
                        <h4 className="font-mono text-base font-semibold uppercase tracking-wider md:text-lg">
                          Sistema de Ventas
                        </h4>
                      </div>
                      <p className="text-foreground text-base leading-relaxed pl-6 md:text-lg">
                        Plataforma completa de comercio electrónico con carrito de compras inteligente,
                        gestión de inventario en tiempo real y procesamiento seguro de pagos.
                        Incluye sistema de descuentos, cupones promocionales y análisis de ventas
                        para optimizar el rendimiento del negocio.
                      </p>
                    </div>

                    {/* Características */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="h-3 w-3 rounded-full bg-primary" />
                        <h4 className="font-mono text-base font-semibold uppercase tracking-wider md:text-lg">
                          Características
                        </h4>
                      </div>
                      <ul className="text-foreground text-base leading-relaxed pl-6 space-y-3 md:text-lg">
                        <li className="flex items-start gap-3">
                          <ChevronRight className="text-primary mt-1 h-5 w-5 flex-shrink-0" />
                          <span>Carrito persistente y sincronización multi-dispositivo</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <ChevronRight className="text-primary mt-1 h-5 w-5 flex-shrink-0" />
                          <span>Gestión de inventario y control de stock</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <ChevronRight className="text-primary mt-1 h-5 w-5 flex-shrink-0" />
                          <span>Pasarela de pago segura y múltiples métodos</span>
                        </li>
                      </ul>
                    </div>

                    {/* Footer con línea */}
                    <div className="pt-6 border-t">
                      <p className="text-muted-foreground text-sm font-mono italic md:text-base">
                        "Experiencia de compra optimizada para conversión"
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
            </div>
          </motion.div>
        ))}
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
