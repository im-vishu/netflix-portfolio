import { motion } from "framer-motion";
import { Download, ArrowDown, Terminal } from "lucide-react";
import heroBg from "@/assets/hero-coding-setup.jpg";
import TypewriterText from "@/components/TypewriterText";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Coding workspace setup" className="h-full w-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-background/20" />
        <div className="netflix-gradient absolute inset-x-0 bottom-0 h-1/3" />
      </div>

      {/* Animated grid overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `linear-gradient(hsl(357 92% 47% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(357 92% 47% / 0.3) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }} />

      {/* Scanlines */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.03]">
        <div className="h-full w-full" style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(0 0% 100% / 0.1) 2px, hsl(0 0% 100% / 0.1) 4px)",
        }} />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Terminal-style label */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "auto" }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-6 inline-block overflow-hidden"
          >
            <span className="inline-flex items-center gap-2 rounded border border-primary/40 bg-primary/10 px-4 py-2 text-xs font-mono tracking-widest text-primary backdrop-blur-sm">
              <Terminal className="h-3 w-3" />
              <span className="hidden sm:inline">~/portfolio $</span> status: <span className="animate-pulse">AVAILABLE FOR HIRE_</span>
            </span>
          </motion.div>

          <h1 className="font-display text-5xl leading-none text-foreground sm:text-7xl md:text-8xl lg:text-9xl">
            <TypewriterText text="JOHN" delay={400} speed={120} />
          </h1>
          <h1 className="font-display text-5xl leading-none sm:text-7xl md:text-8xl lg:text-9xl">
            <TypewriterText
              text="DOE"
              delay={1000}
              speed={120}
              className="text-gradient-red"
              cursorColor="hsl(357, 92%, 47%)"
            />
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="mt-4 max-w-md text-base font-light leading-relaxed text-muted-foreground sm:max-w-lg sm:text-lg md:text-xl"
          >
            Full-Stack Developer & UI/UX Designer crafting exceptional digital experiences
            with modern technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0 }}
            className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4"
          >
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="group flex items-center justify-center gap-2 rounded bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/40 hover:brightness-110 sm:px-8 sm:py-3.5"
            >
              ▶ View Projects
            </button>
            <a
              href="#"
              download
              className="group flex items-center justify-center gap-2 rounded border border-primary/50 bg-primary/10 px-6 py-3 font-semibold text-foreground backdrop-blur-sm transition-all hover:border-primary hover:bg-primary/20 hover:shadow-lg hover:shadow-primary/20 sm:px-8 sm:py-3.5"
            >
              <Download className="h-4 w-4 transition-transform group-hover:animate-bounce" />
              Download Resume
            </a>
          </motion.div>

          {/* Tech stack */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.3 }}
            className="mt-10 flex flex-wrap items-center gap-2 sm:mt-12 sm:gap-3"
          >
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground sm:text-xs">Stack →</span>
            {["React", "TypeScript", "Node.js", "Python", "AWS"].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.4 + i * 0.1, type: "spring" }}
                className="rounded border border-border/50 bg-background/40 px-2 py-1 text-[10px] text-muted-foreground backdrop-blur-sm transition-colors hover:border-primary/50 hover:text-primary sm:px-3 sm:text-xs"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 sm:bottom-8"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ArrowDown className="h-5 w-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
