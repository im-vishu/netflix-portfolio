import { motion } from "framer-motion";
import SkillsScene3D from "./SkillsScene3D";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
    icon: "🎨",
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "EJS", "REST APIs", "JWT Auth", "RBAC"],
    icon: "⚙️",
  },
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Core Java", "SQL"],
    icon: "🧩",
  },
  {
    title: "Databases & Caching",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Indexing"],
    icon: "🗄️",
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Linux", "CI/CD", "GitHub Actions", "Nginx"],
    icon: "☁️",
  },
  {
    title: "Tools",
    skills: ["Git", "Postman", "VS Code", "Swagger/OpenAPI", "ESLint", "Prettier"],
    icon: "🧰",
  },
  {
    title: "AI / ML",
    skills: ["Machine Learning", "Anomaly Detection", "NLP", "Feature Engineering", "Model Evaluation"],
    icon: "🧠",
  },
  {
    title: "Graphic Design",
    skills: ["Canva", "Photoshop", "Microsoft Designer", "Figma", "Brand Assets", "Social Creatives"],
    icon: "GD",
  },
];

const SkillsSection = () => (
  <section id="skills" className="section-divider bg-background px-4 py-16 sm:px-6 sm:py-20">
    <div className="mx-auto max-w-7xl">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-10 flex items-end gap-4"
      >
        <h2 className="font-display text-4xl text-foreground sm:text-5xl">Skills</h2>
        <div className="mb-2 h-[2px] flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
      </motion.div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-10">
        <SkillsScene3D />
      </motion.div>

      <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30, rotateX: 15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, type: "spring", stiffness: 80 }}
            whileHover={{ y: -6 }}
            className="glass-card animated-border shimmer-hover group rounded-xl p-5 sm:p-6"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="text-2xl">{cat.icon}</span>
              <h3 className="font-display text-2xl text-gradient-red sm:text-3xl">{cat.title}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, si) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + si * 0.05, type: "spring" }}
                  whileHover={{ scale: 1.1 }}
                  className="cursor-default rounded-lg border border-border/50 bg-accent/50 px-3 py-1.5 text-sm text-foreground transition-all duration-300 hover:border-primary/50 hover:bg-primary hover:text-primary-foreground hover:shadow-md hover:shadow-primary/20"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
