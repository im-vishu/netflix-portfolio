import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  { role: "Senior Full-Stack Developer", company: "Tech Corp", period: "2022 – Present", desc: "Leading a team of 8 engineers building scalable cloud applications serving 1M+ users." },
  { role: "Frontend Developer", company: "StartupXYZ", period: "2020 – 2022", desc: "Built and maintained the main product dashboard used by 50K+ users daily." },
  { role: "Junior Developer", company: "Agency Pro", period: "2018 – 2020", desc: "Developed responsive websites and web applications for 30+ enterprise clients." },
];

const ExperienceSection = () => (
  <section id="experience" className="section-divider bg-background px-4 py-16 sm:px-6 sm:py-20">
    <div className="mx-auto max-w-7xl">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-10 flex items-end gap-4"
      >
        <h2 className="font-display text-4xl text-foreground sm:text-5xl">Experience</h2>
        <div className="mb-2 h-[2px] flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
      </motion.div>

      <div className="relative space-y-6">
        <div className="absolute bottom-0 left-4 top-0 hidden w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent md:block" />

        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, type: "spring", stiffness: 80 }}
            whileHover={{ x: 4 }}
            className="glass-card animated-border shimmer-hover group relative rounded-xl p-5 sm:p-6 md:ml-12"
          >
            {/* Timeline dot */}
            <div className="absolute -left-[2.35rem] top-7 hidden md:block">
              <div className="h-3 w-3 rounded-full border-2 border-primary bg-background transition-all duration-300 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/40" />
            </div>

            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start gap-3">
                <div className="hidden rounded-xl bg-primary/10 p-2.5 ring-1 ring-primary/20 sm:block transition-all group-hover:bg-primary/20 group-hover:ring-primary/40">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground sm:text-lg">{exp.role}</h3>
                  <p className="text-sm text-primary">{exp.company}</p>
                </div>
              </div>
              <span className="rounded-lg bg-primary/10 px-3 py-1 text-xs font-medium text-primary sm:self-start">{exp.period}</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{exp.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
