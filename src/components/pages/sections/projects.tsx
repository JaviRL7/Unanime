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
    </>
  );
};

export default Projects;
