"use client";

import { Logo } from "@/components/ui/logo";
import { Github, Heart, Linkedin, Mail, MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { siteConfig } from "@/config/site";

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      href: siteConfig.github,
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: siteConfig.linkedin,
      label: "LinkedIn",
    },
    {
      icon: MessageCircle,
      href: siteConfig.whatsapp,
      label: "WhatsApp",
    },
    {
      icon: Mail,
      href: `mailto:${siteConfig.email}`,
      label: "Email",
    },
  ];

  return (
    <footer className="relative border-t min-h-[50vh] flex items-center justify-center bg-muted/20">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="before:bg-border after:bg-border relative h-full w-full before:absolute before:top-1/2 before:left-0 before:h-0.5 before:w-full after:absolute after:top-0 after:left-1/2 after:h-full after:w-0.5"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-12 md:px-12 lg:px-16">
        <div className="flex flex-col items-center justify-center gap-12 md:gap-16">
          {/* Logo and Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-6"
          >
            <Logo className="w-24 md:w-32" />
            <div className="text-center space-y-2">
              <h3 className="font-incognito text-3xl md:text-4xl font-bold">Javier Rodríguez López</h3>
              <p className="text-muted-foreground text-lg md:text-xl">Desarrollador Full Stack</p>
            </div>
          </motion.div>

          {/* Social Links - Large */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-6"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center gap-2 group"
              >
                <div className="size-12 md:size-14 rounded-full border-2 border-primary/20 bg-primary/5 flex items-center justify-center transition-all group-hover:border-primary/60 group-hover:bg-primary/10">
                  <link.icon className="h-6 w-6 md:h-7 md:w-7 text-primary" />
                </div>
                <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                  {link.label}
                </span>
              </motion.a>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="w-full max-w-2xl h-px bg-border" />

          {/* Bottom Info */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 w-full max-w-4xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-2 text-muted-foreground text-sm"
            >
              <span>© {new Date().getFullYear()} Javier Rodríguez López.</span>
              <span className="hidden md:inline">Todos los derechos reservados.</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-2 text-muted-foreground text-sm"
            >
              <span>Hecho con</span>
              <Heart className={`h-4 w-4 fill-red-400 text-red-400 animate-pulse`} />
              <span>en Next.js 15 + TypeScript</span>
            </motion.div>

            <motion.a
              href="#home"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-md border-2 border-primary/20 bg-primary/5 px-6 py-2 text-sm font-semibold transition-all hover:border-primary/60 hover:bg-primary/10"
            >
              Volver arriba
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
