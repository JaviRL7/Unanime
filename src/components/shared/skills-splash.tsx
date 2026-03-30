"use client";
import { motion } from "motion/react";
import { Monitor, Users, Film } from "lucide-react";
import { useTranslation } from "@/i18n";

function highlight(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="text-primary font-semibold">
        {part}
      </strong>
    ) : (
      part
    )
  );
}

const FRONTEND_SKILLS = ["React", "Next.js", "Vue 3", "TypeScript", "Tailwind CSS", "HTML / CSS"];
const BACKEND_SKILLS = ["PHP", "Java", "Node.js", "SQL", "REST APIs"];
const TOOLS = ["Git / GitHub", "Jira", "Linux", "Docker (básico)"];

const SkillBadge = ({ label, isPrimary }: { label: string; isPrimary?: boolean }) => (
  <span
    className={`inline-flex items-center rounded-sm border px-2 py-0.5 text-[9px] md:text-[10px] font-mono font-medium transition-colors ${
      isPrimary
        ? "border-primary/50 bg-primary/10 text-primary"
        : "border-border/60 bg-muted/40 text-foreground/70"
    }`}
  >
    {label}
  </span>
);

const CapabilityRow = ({ icon, title, points, tag }: {
  icon: React.ReactNode;
  title: string;
  points: string[];
  tag?: string;
}) => (
  <div className="border-l-2 border-primary/40 pl-3 space-y-1.5">
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-primary">{icon}</span>
      <p className="text-xs md:text-sm font-semibold text-foreground">{title}</p>
      {tag && (
        <span className="text-[8px] md:text-[9px] border border-primary/40 text-primary px-1.5 py-0.5 rounded-sm font-mono">
          {tag}
        </span>
      )}
    </div>
    <ul className="space-y-1 pl-1">
      {points.map((point, i) => (
        <li key={i} className="flex items-start gap-1.5">
          <span className="text-primary/60 mt-0.5 shrink-0 text-[10px]">—</span>
          <span className="text-[10px] md:text-xs text-foreground/70 leading-relaxed">{highlight(point)}</span>
        </li>
      ))}
    </ul>
  </div>
);

export const SkillsSplash = () => {
  const { t } = useTranslation();

  return (
    <div className="relative flex min-h-screen lg:h-screen overflow-y-auto lg:overflow-hidden border-b lg:snap-start lg:snap-always bg-background">
      {/* Decorative Corner Borders */}
      <div className="absolute top-4 left-4 h-12 w-12 border-t-2 border-l-2 border-primary/40 z-30" />
      <div className="absolute top-4 right-4 h-12 w-12 border-t-2 border-r-2 border-primary/40 z-30" />
      <div className="absolute bottom-4 left-4 h-12 w-12 border-b-2 border-l-2 border-primary/40 z-30" />
      <div className="absolute bottom-4 right-4 h-12 w-12 border-b-2 border-r-2 border-primary/40 z-30" />

      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2">

        {/* Columna izquierda — Stack tecnológico */}
        <motion.div
          className="relative bg-muted/30 flex items-start justify-center px-8 md:px-12 lg:px-16 pt-16 md:pt-20 lg:pt-24 pb-12"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Cruz decorativa */}
          <div className="absolute inset-0" aria-hidden="true">
            <div className="relative h-full w-full">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border/30 -translate-y-1/2" />
              <div className="absolute left-1/2 top-0 h-full w-0.5 bg-border/30 -translate-x-1/2" />
            </div>
          </div>

          <div className="relative z-10 w-full max-w-sm">
            {/* Título */}
            <div className="text-center space-y-1">
              <h2 className="font-incognito text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
                {t.skills.techStack}
              </h2>
              <div className="flex items-center justify-center gap-2">
                <div className="bg-primary h-0.5 w-10" />
                <div className="bg-primary/50 h-0.5 w-5" />
              </div>
            </div>

            {/* Frontend */}
            <div className="mt-36 space-y-3">
              <p className="text-[9px] md:text-[10px] font-mono uppercase tracking-widest text-foreground/50">
                {t.skills.frontend}
              </p>
              <div className="flex flex-wrap gap-1.5 justify-center">
                {FRONTEND_SKILLS.map((s) => (
                  <SkillBadge key={s} label={s} isPrimary />
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="mt-8 space-y-3">
              <p className="text-[9px] md:text-[10px] font-mono uppercase tracking-widest text-foreground/50">
                {t.skills.backend}
              </p>
              <div className="flex flex-wrap gap-1.5 justify-center">
                {BACKEND_SKILLS.map((s) => (
                  <SkillBadge key={s} label={s} isPrimary />
                ))}
              </div>
            </div>

            {/* Herramientas */}
            <div className="mt-8 space-y-3">
              <p className="text-[9px] md:text-[10px] font-mono uppercase tracking-widest text-foreground/50">
                {t.skills.other}
              </p>
              <div className="flex flex-wrap gap-1.5 justify-center">
                {TOOLS.map((s) => (
                  <SkillBadge key={s} label={s} />
                ))}
              </div>
            </div>

            {/* Badge experiencia */}
            <div className="flex justify-center mt-10">
              <span className="text-[9px] md:text-[10px] border border-primary/30 text-primary/80 px-3 py-1.5 font-mono tracking-wider rounded-sm">
                {t.skills.realProjects}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Columna derecha — Habilidades */}
        <motion.div
          className="relative flex items-start justify-center px-8 md:px-12 lg:px-16 pt-16 md:pt-20 lg:pt-24 pb-12"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="w-full max-w-xl">
            {/* Título */}
            <div className="text-center space-y-2">
              <h2 className="font-incognito text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
                {t.skills.title}
              </h2>
              <div className="flex items-center justify-center gap-2">
                <div className="bg-primary h-0.5 w-12" />
                <div className="bg-primary/60 h-0.5 w-6" />
                <div className="bg-primary/30 h-0.5 w-3" />
              </div>
            </div>

            {/* Capacidades */}
            <div className="mt-24 space-y-8">
              <CapabilityRow
                icon={<Users className="h-4 w-4" />}
                title={t.skills.customerService}
                points={t.skills.customerServicePoints}
                tag="ES / EN"
              />
              <CapabilityRow
                icon={<Monitor className="h-4 w-4" />}
                title={t.skills.itGeneral}
                points={t.skills.itGeneralPoints}
              />
              <CapabilityRow
                icon={<Film className="h-4 w-4" />}
                title={t.skills.multimedia}
                points={t.skills.multimediaPoints}
              />
            </div>
          </div>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden items-center justify-center gap-1 font-mono text-xs md:inline-flex text-muted-foreground">
        {t.skills.scroll}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4 animate-pulse" aria-hidden="true">
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M12 8v8" />
          <path d="m8 12 4 4 4-4" />
        </svg>
      </div>
    </div>
  );
};
