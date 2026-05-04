import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import {
  Zap,
  GraduationCap,
  Award,
  Coffee,
  ShieldCheck,
  Brain,
  Code2,
} from "lucide-react";
import { useEffect, useRef } from "react";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    desc: "Building end-to-end apps with React + modern backend APIs, focusing on clean architecture and maintainable code.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    desc: "I care about production basics: validation, authentication, error handling, and writing code that’s easy to scale.",
  },
  {
    icon: Zap,
    title: "Performance First",
    desc: "Optimized UI, efficient APIs, and smooth user experiences across devices—fast, responsive, and polished.",
  },
];

const stats = [
  { icon: Brain, value: 0, suffix: "+", label: "Years Experience (Fresher)" },
  { icon: Award, value: 12, suffix: "+", label: "Projects Built" },
  { icon: GraduationCap, value: 3, suffix: "+", label: "Certifications" },
  { icon: Coffee, value: 1000, suffix: "+", label: "Cups of Coffee" },
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animate(count, value, { duration: 2, ease: "easeOut" });
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [count, value]);

  return (
    <span ref={ref} className="font-display text-2xl text-foreground sm:text-3xl">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-border bg-background px-4 py-20 sm:px-6 sm:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex items-end gap-4"
        >
          <h2 className="font-display text-4xl text-foreground sm:text-5xl">About Me</h2>
          <div className="mb-2 h-[2px] flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card mb-12 rounded-xl border-l-4 border-primary p-6 sm:p-8"
        >
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg italic">
            "I’m a fresher full-stack developer who loves building{" "}
            <span className="font-semibold text-primary not-italic">real-world, production-ready</span>{" "}
            applications. I focus on clean code, strong fundamentals, and polished UI—turning ideas into fast,
            secure, and scalable products."
          </p>
        </motion.div>

        {/* Stats Row */}
        <div className="mb-12 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ y: -6, scale: 1.04 }}
              className="glass-card animated-border shimmer-hover group flex flex-col items-center rounded-xl p-5 text-center"
            >
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20 transition-all duration-500 group-hover:bg-primary/20 group-hover:ring-primary/40 group-hover:shadow-lg group-hover:shadow-primary/20">
                <stat.icon className="h-5 w-5 text-primary transition-transform duration-500 group-hover:scale-110" />
              </div>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <span className="mt-1 text-[11px] text-muted-foreground sm:text-xs">{stat.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Highlights Grid */}
        <div className="mb-12 grid gap-5 md:grid-cols-3">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5, type: "spring", stiffness: 80 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="glass-card animated-border shimmer-hover group rounded-xl p-6"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20 transition-all duration-500 group-hover:bg-primary/20 group-hover:ring-primary/40 group-hover:shadow-lg group-hover:shadow-primary/20">
                <item.icon className="h-7 w-7 transition-transform duration-500 group-hover:scale-110" />
              </div>
              <h3 className="mb-2 font-display text-lg text-foreground tracking-wide">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* What I Do / My Goal */}
        <div className="grid gap-5 md:grid-cols-2">
          {[
            {
              title: "WHAT I DO",
              text: "I build full-stack projects—from responsive React frontends to backend APIs—using modern tools, best practices, and a strong focus on real-world usability.",
            },
            {
              title: "MY GOAL",
              text: "To start my career as a software developer and grow into a strong full-stack / backend engineer by building impactful products and continuously improving my skills.",
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="glass-card animated-border shimmer-hover group rounded-xl p-6"
            >
              <h3 className="mb-3 font-display text-lg text-foreground tracking-wide">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;