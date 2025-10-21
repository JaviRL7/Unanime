"use client";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { motion } from "motion/react";
import ProjectHero from "@/components/projects/ProjectHero";
import ProjectDetailRow from "@/components/projects/ProjectDetailRow";
import { projects } from "@/data/projects";
import { useTheme } from "next-themes";
import { ThemeToggleButton2 } from "@/components/theme-toggle";

interface ProjectsProps {
  onEmailClick: () => void;
}

const Projects = ({ onEmailClick }: ProjectsProps) => {
  const { resolvedTheme, setTheme } = useTheme();
  
  // Mapeo manual de projectId a número de proyecto
  const projectNumberMap: Record<string, number> = {
    "dona-arana": 1,
    "contabilidad-web": 2,
    "linkedin-stats": 2,
    "more-features": 2,
    "inanilux-portfolio": 3,
    "color-palette": 3,
    "design-process": 3,
  };
  
  return (
    <>
      {/* Render all projects */}
      {projects.map((project, projectIndex) => {
        const projectNumber = projectNumberMap[project.id];
        
        return (
          <div key={project.id} className="lg:snap-start lg:snap-always">
            {/* Hero Section (Full Screen) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              id={projectIndex + 1 === 1 ? "proyecto-1" : projectIndex + 1 === 2 ? "proyecto-2" : project.id === "inanilux-portfolio" ? "proyecto-3" : undefined}
            >
              <ProjectHero
                hero={project.hero}
                showLogo={projectIndex === 0}
                projectNumber={projectNumber}
                projectId={project.id}
              />
            </motion.div>

          {/* Detail Rows (50vh each) */}
          {project.details.map((detail, detailIndex) => (
            <motion.div
              key={`${project.id}-detail-${detailIndex}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: detailIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectDetailRow
                detail={detail}
                index={detailIndex}
                projectId={project.id}
                showActionButtons={detailIndex === 0}
              />
            </motion.div>
          ))}
        </div>
      )})}


      {/* Contact Section */}
      <div id="contacto" className="relative min-h-screen lg:h-screen lg:snap-start lg:snap-always border-b">
        {/* Contact Label & Action Buttons - Top right corner */}
        <div className="absolute right-4 top-4 z-20 hidden lg:flex lg:flex-col lg:items-end lg:gap-3">
          <div className="bg-primary/10 border border-primary/20 px-4 py-2 backdrop-blur-sm">
            <span className="font-mono text-xs font-semibold text-primary uppercase tracking-wider">
              Contacto
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

        <div className="h-full flex flex-col justify-center">
          {/* Texto superior */}
          <div className="text-center mb-8 px-4">
            <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground">
              Gracias por la oportunidad y por llegar hasta aquí
            </p>
          </div>
          
          <div className="relative px-6 py-6 lg:px-12 xl:px-16">
            <div className="mx-auto max-w-7xl">
              <div className="bg-muted/20 relative overflow-hidden border">
                {/* Grid background */}
                <div className="absolute inset-0" aria-hidden="true">
                  <div className="before:bg-border after:bg-border relative h-full w-full before:absolute before:top-1/2 before:left-0 before:h-0.5 before:w-full after:absolute after:top-0 after:left-1/2 after:h-full after:w-0.5"></div>
                </div>

                <div className="relative z-10 p-6 lg:p-12 xl:p-16">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Columna izquierda - Foto */}
                    <div className="flex justify-center">
                      <div className="relative">
                        <img
                          src="/data/FotoJavier1.jpeg"
                          alt="Javier Rodríguez López"
                          className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-primary/20"
                        />
                      </div>
                    </div>

                    {/* Columna derecha - Información */}
                    <div className="space-y-8">
                      <div>
                        <h2 className="font-incognito text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">Contacto</h2>
                        <div className="flex items-center gap-3 mb-6">
                          <div className="h-2 bg-primary" style={{ width: '80px' }}></div>
                          <div className="h-2 bg-primary/60" style={{ width: '40px' }}></div>
                          <div className="h-2 bg-primary/30" style={{ width: '20px' }}></div>
                        </div>
                      </div>

                      <div className="space-y-6 text-base lg:text-lg">
                        {/* Email */}
                        <div className="flex items-start gap-4 group">
                          <div className="text-primary mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                          </div>
                          <div>
                            <div className="text-muted-foreground text-sm mb-1">Email</div>
                            <button 
                              onClick={onEmailClick}
                              className="text-foreground font-mono hover:text-primary transition-colors text-left"
                            >
                              Jrlsanlucar11@gmail.com
                            </button>
                          </div>
                        </div>

                        {/* Teléfono */}
                        <div className="flex items-start gap-4 group">
                          <div className="text-primary mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                          </div>
                          <div>
                            <div className="text-muted-foreground text-sm mb-1">Teléfono</div>
                            <a href="tel:+34682312071" className="text-foreground font-mono hover:text-primary transition-colors">
                              682 31 20 71
                            </a>
                          </div>
                        </div>

                        {/* LinkedIn */}
                        <div className="flex items-start gap-4 group">
                          <div className="text-primary mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                          </div>
                          <div>
                            <div className="text-muted-foreground text-sm mb-1">LinkedIn</div>
                            <a href="https://www.linkedin.com/in/javier-rodriguez-lopez-4795a8180/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors break-all">
                              javier-rodriguez-lopez
                            </a>
                          </div>
                        </div>

                        {/* GitHub */}
                        <div className="flex items-start gap-4 group">
                          <div className="text-primary mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                          </div>
                          <div>
                            <div className="text-muted-foreground text-sm mb-1">GitHub</div>
                            <a href="https://github.com/JaviRL7" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors break-all">
                              JaviRL7
                            </a>
                          </div>
                        </div>

                        {/* Portfolio */}
                        <div className="flex items-start gap-4 group">
                          <div className="text-primary mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                          </div>
                          <div>
                            <div className="text-muted-foreground text-sm mb-1">Portfolio Completo</div>
                            <a href="https://profound-inspiration-production.up.railway.app/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors break-all">
                              profound-inspiration-production.up.railway.app
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Texto inferior */}
          <div className="text-center mt-8 px-4">
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              En mi portfolio podéis encontrar todos mis otros proyectos más pequeños. Si tenéis alguna duda estaré más que encantado de resolvérosla.
            </p>
            <p className="text-sm md:text-base text-primary/80 mt-4 font-mono italic">
              (Consejo! Usa el botón de email del footer...)
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
