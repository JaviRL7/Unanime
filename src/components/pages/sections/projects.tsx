"use client";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { motion } from "motion/react";
import ProjectHero from "@/components/projects/ProjectHero";
import ProjectDetailRow from "@/components/projects/ProjectDetailRow";
import { projects } from "@/data/projects";

const Projects = () => {
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
          <div key={project.id} id={`proyecto-${projectIndex + 1}`}>
            {/* Hero Section (Full Screen) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
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
              />
            </motion.div>
          ))}
        </div>
      )})}


      {/* Contact Section */}
      <div id="contacto" className="relative h-screen snap-start snap-always border-b">
        {/* Contact Label - Top right corner */}
        <div className="absolute right-4 top-4 z-20 hidden lg:block">
          <div className="bg-primary/10 border border-primary/20 px-4 py-2 backdrop-blur-sm">
            <span className="font-mono text-xs font-semibold text-primary uppercase tracking-wider">
              Contacto
            </span>
          </div>
        </div>

        <div className="h-full flex flex-col justify-center">
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
                            <a href="mailto:Jrlsanlucar11@gmail.com" className="text-foreground font-mono hover:text-primary transition-colors">
                              Jrlsanlucar11@gmail.com
                            </a>
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
        </div>
      </div>
    </>
  );
};

export default Projects;
