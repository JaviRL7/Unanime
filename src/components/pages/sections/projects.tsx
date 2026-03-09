"use client";

import { motion } from "motion/react";
import ProjectHero from "@/components/projects/ProjectHero";
import ProjectDetailRow from "@/components/projects/ProjectDetailRow";
import { getLocalizedProjects } from "@/data/projects";
import { useTheme } from "next-themes";
import { ThemeToggleButton2 } from "@/components/theme-toggle";
import { PROJECT_NUMBER_MAP } from "@/config/projects";
import { useTranslation } from "@/i18n";

interface ProjectsProps {
  onEmailClick: () => void;
}

const Projects = ({ onEmailClick }: ProjectsProps) => {
  const { resolvedTheme, setTheme } = useTheme();
  const { t, locale } = useTranslation();
  const projects = getLocalizedProjects(locale);

  return (
    <>
      {/* Render all projects */}
      {projects.map((project, projectIndex) => {
        const projectNumber = PROJECT_NUMBER_MAP[project.id];
        
        return (
          <div key={project.id} className="lg:snap-start lg:snap-always">
            {/* Hero Section (Full Screen) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              id={
                projectIndex + 1 === 1 ? "proyecto-1" :
                projectIndex + 1 === 2 ? "proyecto-2" :
                project.id === "local-noise" ? "proyecto-3" :
                project.id === "extra-tfg" ? "proyecto-4" :
                undefined
              }
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
      <div id="contacto" className="relative min-h-screen lg:h-screen lg:snap-start lg:snap-always border-b py-16 md:py-20 lg:py-0">
        <div className="h-full flex flex-col justify-center">
          {/* Texto superior */}
          <div className="text-center mb-6 px-4">
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground">
              {t.contactSection.thankYou}
            </p>
          </div>
          
          <div className="relative px-4 py-4 lg:px-8 xl:px-12">
            <div className="mx-auto max-w-6xl">
              <div className="bg-muted/20 relative overflow-hidden border">
                {/* Grid background */}
                <div className="absolute inset-0" aria-hidden="true">
                  <div className="before:bg-border after:bg-border relative h-full w-full before:absolute before:top-1/2 before:left-0 before:h-0.5 before:w-full after:absolute after:top-0 after:left-1/2 after:h-full after:w-0.5"></div>
                </div>

                <div className="relative z-10 p-4 lg:p-8 xl:p-10">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Columna izquierda - Foto */}
                    <div className="flex justify-center">
                      <div className="relative">
                        <img
                          src="/data/FotoJavier1.jpeg"
                          alt="Javier Rodríguez López"
                          className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full object-cover border-3 border-primary/20"
                        />
                      </div>
                    </div>

                    {/* Columna derecha - Información */}
                    <div className="space-y-5 md:space-y-6">
                      <div>
                        <h2 className="font-incognito text-3xl lg:text-4xl xl:text-5xl font-bold mb-3">{t.contactSection.contact}</h2>
                        <div className="flex items-center gap-2 mb-4">
                          <div className="h-1.5 bg-primary" style={{ width: '64px' }}></div>
                          <div className="h-1.5 bg-primary/60" style={{ width: '32px' }}></div>
                          <div className="h-1.5 bg-primary/30" style={{ width: '16px' }}></div>
                        </div>
                      </div>

                      <div className="space-y-4 text-sm lg:text-base">
                        {/* Email */}
                        <div className="flex items-start gap-4 group">
                          <div className="text-primary mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                          </div>
                          <div>
                            <div className="text-muted-foreground text-sm mb-1">{t.contactSection.email}</div>
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
                            <div className="text-muted-foreground text-sm mb-1">{t.contactSection.phone}</div>
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

                        {/* CV */}
                        <div className="flex items-start gap-4 group">
                          <div className="text-primary mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                          </div>
                          <div>
                            <div className="text-muted-foreground text-sm mb-1">{t.contactSection.cv}</div>
                            <a href="/data/CV Javier Rodriguez 2026 portfolio.pdf" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                              {t.contactSection.downloadCV}
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
          <div className="text-center mt-6 px-4">
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
              {t.contactSection.thankYouBottom}
            </p>
            <p className="text-xs md:text-sm text-primary/60 mt-2 font-mono italic max-w-2xl mx-auto">
              &ldquo;{t.contactSection.designQuote}&rdquo;
            </p>
            <p className="text-xs md:text-sm text-primary/80 mt-3 font-mono italic">
              {t.contactSection.emailTip}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
