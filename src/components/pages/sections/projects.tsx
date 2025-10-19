"use client";

import SectionHeading from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { motion } from "motion/react";
import ProjectHero from "@/components/projects/ProjectHero";
import ProjectDetailRow from "@/components/projects/ProjectDetailRow";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <SectionHeading id="projects" text="Proyectos">
      <div className="divide-y">
        {/* Render all projects */}
        {projects.map((project, projectIndex) => (
          <div key={project.id}>
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
