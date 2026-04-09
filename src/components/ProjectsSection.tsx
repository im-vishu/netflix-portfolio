import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  { title: "E-Commerce Platform", tag: "React · Node.js", desc: "Full-stack e-commerce with payment integration and real-time inventory.", color: "357 80% 50%" },
  { title: "AI Dashboard", tag: "Python · React", desc: "Analytics dashboard powered by machine learning for business insights.", color: "210 100% 56%" },
  { title: "Social Media App", tag: "React Native · Firebase", desc: "Cross-platform social app with real-time messaging and stories.", color: "150 70% 45%" },
  { title: "Portfolio CMS", tag: "Next.js · Prisma", desc: "Headless CMS for creatives to manage and showcase their work.", color: "330 80% 55%" },
  { title: "Task Management", tag: "TypeScript · PostgreSQL", desc: "Kanban-style project management tool with team collaboration.", color: "40 90% 50%" },
  { title: "Weather App", tag: "Vue · API", desc: "Beautiful weather forecasting with location-based services.", color: "190 80% 50%" },
];

const ProjectsSection = () => (
  <section id="projects" className="bg-background px-4 py-16 sm:px-6 sm:py-20">
    <div className="mx-auto max-w-7xl">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-10 flex items-end gap-4"
      >
        <h2 className="font-display text-4xl text-foreground sm:text-5xl">My Projects</h2>
        <div className="mb-2 h-[2px] flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, type: "spring", stiffness: 100 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="glass-card animated-border shimmer-hover group cursor-pointer overflow-hidden rounded-xl"
          >
            <div
              className="relative aspect-video flex items-center justify-center overflow-hidden transition-all duration-500"
              style={{ background: `linear-gradient(135deg, hsl(${p.color} / 0.15), hsl(${p.color} / 0.05))` }}
            >
              <span
                className="font-display text-6xl transition-all duration-500 group-hover:scale-125"
                style={{ color: `hsl(${p.color} / 0.15)` }}
              >
                {p.title.charAt(0)}
              </span>
              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center gap-3 bg-background/60 opacity-0 backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-100">
                <motion.div whileHover={{ scale: 1.1 }} className="rounded-full border border-border/50 bg-card p-2.5">
                  <Github className="h-5 w-5 text-foreground" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} className="rounded-full border border-primary/50 bg-primary/10 p-2.5">
                  <ArrowUpRight className="h-5 w-5 text-primary" />
                </motion.div>
              </div>
            </div>
            <div className="p-4 sm:p-5">
              <div className="flex items-center justify-between">
                <span
                  className="text-[10px] font-semibold uppercase tracking-wider sm:text-xs"
                  style={{ color: `hsl(${p.color})` }}
                >
                  {p.tag}
                </span>
                <ExternalLink className="h-4 w-4 text-muted-foreground/30 transition-all group-hover:text-foreground" />
              </div>
              <h3 className="mt-2 font-semibold text-foreground">{p.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
