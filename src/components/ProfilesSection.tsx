import { motion } from "framer-motion";
import { Globe, Server, Cloud, Layers } from "lucide-react";

const profiles = [
  {
    icon: Layers,
    title: "Full Stack Developer",
    desc: "Building complete web applications from frontend to backend with modern frameworks, RESTful APIs, and database management.",
    techs: ["React", "Node.js", "PostgreSQL", "TypeScript"],
    accentColor: "357 92% 47%",
  },
  {
    icon: Server,
    title: "Software Developer",
    desc: "Developing robust, scalable software solutions with clean architecture, design patterns, and test-driven development.",
    techs: ["Python", "Java", "C++", "Git"],
    accentColor: "210 100% 56%",
  },
  {
    icon: Cloud,
    title: "Aspiring Cloud Engineer",
    desc: "Exploring cloud platforms, infrastructure as code, containerization, and CI/CD pipelines to build scalable cloud-native solutions.",
    techs: ["AWS", "Docker", "Kubernetes", "Terraform"],
    accentColor: "270 70% 60%",
  },
  {
    icon: Globe,
    title: "Web Developer — MERN Stack",
    desc: "Crafting dynamic, responsive web applications using the MERN stack with modern UI/UX principles and real-time features.",
    techs: ["MongoDB", "Express.js", "React", "Node.js"],
    accentColor: "150 70% 45%",
  },
];

const ProfilesSection = () => {
  return (
    <section id="profiles" className="relative overflow-hidden border-t border-border bg-background px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-2 font-display text-3xl text-foreground sm:text-4xl md:text-5xl">
            MY PROFILES <span className="inline-block h-1 w-16 bg-primary align-middle sm:w-24" />
          </h2>
          <p className="mb-12 max-w-2xl text-sm text-muted-foreground sm:text-base">
            The roles and specializations I bring to the table
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {profiles.map((profile, i) => (
            <motion.div
              key={profile.title}
              initial={{ opacity: 0, y: 40, rotateY: 5 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, type: "spring", stiffness: 80 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card animated-border shimmer-hover group relative rounded-xl p-6 sm:p-8"
            >
              {/* Colored glow */}
              <div
                className="absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-40"
                style={{ background: `hsl(${profile.accentColor})` }}
              />
              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-6 right-6 h-[2px] rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: `linear-gradient(90deg, transparent, hsl(${profile.accentColor}), transparent)` }}
              />

              <div className="relative">
                <div
                  className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl ring-1 ring-border/50 backdrop-blur-sm transition-all duration-500 group-hover:shadow-lg"
                  style={{
                    background: `hsl(${profile.accentColor} / 0.1)`,
                  }}
                >
                  <profile.icon
                    className="h-7 w-7 transition-transform duration-500 group-hover:scale-110"
                    style={{ color: `hsl(${profile.accentColor})` }}
                  />
                </div>

                <h3 className="mb-2 font-display text-xl tracking-wide text-foreground sm:text-2xl">
                  {profile.title}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                  {profile.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {profile.techs.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-border/40 bg-background/40 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur-sm transition-all duration-300 group-hover:border-primary/30 group-hover:text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfilesSection;
