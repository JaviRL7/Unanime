"use client";
import { motion } from "motion/react";
import BackgroundAnimation from "@/components/ui/background-gradient";
import { Logo } from "../ui/logo";
import { useTheme } from "next-themes";
import { AnimatedLogo } from "../ui/animated-logo";

export const IntroSplash = () => {
  const { resolvedTheme } = useTheme();

  return (
    <motion.div
      className="relative top-0 z-20 size-full snap-start overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
   
      <BackgroundAnimation
        color={resolvedTheme === "light" ? "blue" : "ember"}
      />


      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white px-6 w-full max-w-5xl"
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      >
        <div className="text-center space-y-4">
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="w-64 md:w-80 lg:w-96 text-white">
              <AnimatedLogo animate={true} />
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block font-serif">Javier Rodríguez</span>
          </motion.h1>

          <motion.p
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="block">presenta sus proyectos para</span>
          </motion.p>

          <motion.div
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="block font-mono italic bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
              UNANIME
            </span>
          </motion.div>
        </div>
      </motion.div>


      <motion.div className="pointer-events-none absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center justify-center gap-3 text-lg font-semibold text-white @max-md:hidden">
        Desplázate hacia abajo
        <motion.div className="flex h-16 w-10 justify-center rounded-xl border-2 border-white/40 bg-white/20 backdrop-blur-2xl">
          <motion.div
            className="mx-auto w-1.5 rounded-xl bg-white/80 backdrop-blur-2xl"
            animate={{
              y: [6, 20, 6],
              height: [6, 12, 6],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};