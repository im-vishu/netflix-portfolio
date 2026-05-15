import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

// Update project links and images as appropriate!
const projects = [
  {
    title: "FraudShield-AI",
    tag: "ML · Node.js · Cybersecurity ",
    desc: "FraudShield AI is a real-time fraud detection backend that analyzes transactions, assigns risk scores, and flags suspicious activity using rule-based logic, IP intelligence, and anomaly detection.",
    color: "357 80% 50%",
    github: "https://github.com/im-vishu/FraudShield-AI",
    demo: "http://localhost:8080/",
    image: "/images/fraudshield.png",
  },
  {
    title: "Healthify-AgriTech",
    tag: "SmartFarmingAI · React · PostgreSQL",
    desc: "Healthify AgriTech is an AI-powered platform delivering crop recommendations, disease detection, and smart farming insights using machine learning, real-time data, and scalable full-stack architecture.",
    color: "210 100% 56%",
    github: "https://github.com/im-vishu/Healthify-AgriTech",
    demo: "https://localhost:9000/",
    image: "/images/healthify.png",
  },
  {
    title: "F.R.I.D.A.Y",
    tag: "Python · AI · Node.js ",
    desc: "F.R.I.D.A.Y is a production-grade voice activated AI assistant built with Node.js, offering real-time conversations, intelligent automation, privacy-first local processing, and extensible cross platform capabilities scalable.",
    color: "150 70% 45%",
    github: "https://github.com/im-vishu/F.R.I.D.A.Y",
    demo: "https://y",
    image: "/images/friday.png",
  },
  {
    title: "fuzzy-broccoli",
    tag: "Next.js · Prisma · React ",
    desc: "A modern full-stack beauty platform enabling users to discover branded cosmetics, find affordable dupes, share reviews, engage in real-time discussions, and explore SEO-driven beauty content.",
    color: "330 80% 55%",
    github: "https://github.com/im-vishu/fuzzy-broccoli",
    demo: "https://your-portfolio-cms.com",
    image: "/images/fuzzy-broccoli.png",
  },
  {
    title: "MediSync",
    tag: "TypeScript · PostgreSQL",
    desc: "MediSync is a secure doctor appointment booking platform with role-based portals, real-time scheduling, JWT authentication, notifications, Redis caching, CI/CD, and scalable architecture.",
    color: "40 90% 50%",
    github: "https://github.com/im-vishu/MediSync",
    demo: "https://your-task-manager.com",
    image: "/images/medisync.png",
  },
  {
    title: "Uber-Clone",
    tag: "MERN · API",
    desc: "Full-stack Uber clone built using MERN stack featuring rider-driver roles, secure JWT authentication, bcrypt hashing, HTTP-only cookies, token blacklisting, and scalable MVC architecture with modern frontend.",
    color: "190 80% 50%",
    github: "https://github.com/im-vishu/uber-clone",
    demo: "https://your-weather-app.com",
    image: "/images/uber-clone.png",
  },
  {
    title: "Brand Identity Kit",
    tag: "Graphic Design / Branding",
    desc: "A cohesive visual identity system with logo directions, color palette, typography pairings, and social-ready brand assets for a modern digital product.",
    color: "315 85% 58%",
  },
  {
    title: "Campaign Poster Series",
    tag: "Graphic Design / Posters",
    desc: "A high-impact poster set focused on strong visual hierarchy, bold composition, and scroll-stopping layouts for digital and print campaign use.",
    color: "25 95% 55%",
  },
  {
    title: "Social Media Creative Pack",
    tag: "Graphic Design / Social",
    desc: "A reusable collection of social graphics, story templates, and launch creatives designed for consistent brand recognition across platforms.",
    color: "175 70% 42%",
  },
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
              style={{
                background: `linear-gradient(135deg, hsl(${p.color} / 0.15), hsl(${p.color} / 0.05))`,
              }}
            >
              {p.image && (
                <img
                  src={p.image}
                  alt={`${p.title} screenshot`}
                  className="absolute inset-0 h-full w-full object-cover opacity-70 transition-all duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              )}
              <span
                className="z-10 font-display text-6xl transition-all duration-500 group-hover:scale-125"
                style={{ color: `hsl(${p.color} / 0.12)` }}
              >
                {p.title.charAt(0)}
              </span>
              <div className="absolute inset-0 flex items-center justify-center gap-3 bg-background/60 opacity-0 backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-100">
                {p.github && (
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="rounded-full border border-border/50 bg-card p-2.5"
                  >
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.title} GitHub`}
                    >
                      <Github className="h-5 w-5 text-foreground" />
                    </a>
                  </motion.div>
                )}
                {p.demo && (
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="rounded-full border border-primary/50 bg-primary/10 p-2.5"
                  >
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.title} Live Demo`}
                    >
                      <ArrowUpRight className="h-5 w-5 text-primary" />
                    </a>
                  </motion.div>
                )}
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
                {p.demo ? (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.title} Live Demo`}
                  >
                    <ExternalLink className="h-4 w-4 text-muted-foreground/30 transition-all group-hover:text-foreground" />
                  </a>
                ) : (
                  <ExternalLink className="h-4 w-4 text-muted-foreground/30" />
                )}
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
