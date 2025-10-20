"use client";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { motion } from "motion/react";
import ProjectHero from "@/components/projects/ProjectHero";
import ProjectDetailRow from "@/components/projects/ProjectDetailRow";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <>
      {/* Render all projects */}
      {projects.map((project, projectIndex) => (
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
              projectNumber={projectIndex + 1}
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
      ))}

      {/* Contact Section */}
      <div id="contacto" className="relative h-screen snap-start snap-always border-b">
        <div className="hidden h-full lg:flex lg:flex-col lg:justify-center">
          <div className="relative px-6 py-6 lg:px-12 xl:px-16">
            <div className="mx-auto max-w-7xl">
              <div className="bg-muted/20 relative overflow-hidden border">
                {/* Grid background */}
                <div className="absolute inset-0" aria-hidden="true">
                  <div className="before:bg-border after:bg-border relative h-full w-full before:absolute before:top-1/2 before:left-0 before:h-0.5 before:w-full after:absolute after:top-0 after:left-1/2 after:h-full after:w-0.5"></div>
                </div>

                <div className="relative z-10 p-6 lg:p-8 xl:p-10 flex items-center justify-center min-h-[60vh]">
                  <div className="text-center space-y-8">
                    <h2 className="font-incognito text-5xl lg:text-6xl font-bold">Contacto</h2>
                    <div className="flex items-center justify-center gap-3">
                      <div className="h-2 bg-primary" style={{ width: '80px' }}></div>
                      <div className="h-2 bg-primary/60" style={{ width: '40px' }}></div>
                      <div className="h-2 bg-primary/30" style={{ width: '20px' }}></div>
                    </div>
                    <p className="text-muted-foreground text-xl lg:text-2xl max-w-2xl mx-auto">
                      Sección de contacto
                    </p>
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
