import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, ExternalLink, Eye, Github } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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
    desc: "A premium Tradewise corporate identity system using a dark luxury palette, gold accents, textured backgrounds, logistics imagery, and polished typography for a high-trust global trade brand.",
    color: "315 85% 58%",
    image: "/images/graphic-design/tradewise-banner-1.png",
    gallery: [
      "/images/graphic-design/tradewise-banner-2.png",
      "/images/graphic-design/tradewise-banner-3.png",
      "/images/graphic-design/tradewise-banner-4.png",
      "/images/graphic-design/tradewise-banner-5.png",
      "/images/graphic-design/tradewise-postpage-1.png",
      "/images/graphic-design/tradewise-postpage-2.png",
      "/images/graphic-design/tradewise-postpage-3.png",
      "/images/graphic-design/tradewise-postpage-4.png",
      "/images/graphic-design/premium-luxury-corporate-post.png",
    ],
  },
  {
    title: "Campaign Poster Series",
    tag: "Graphic Design / Posters",
    desc: "A coordinated Budding Mariners poster campaign with consistent navy-yellow styling, maritime imagery, ranked college cards, and bold educational callouts.",
    color: "25 95% 55%",
    image: "/images/graphic-design/buddingmariners1.png",
    gallery: [
      "/images/graphic-design/buddingmariners2.png",
      "/images/graphic-design/buddingmariners3.png",
      "/images/graphic-design/buddingmariners4.png",
      "/images/graphic-design/buddingmariners5.png",
      "/images/graphic-design/buddingmariners6.png",
    ],
  },
  {
    title: "Social Media Creative Pack",
    tag: "Graphic Design / Social",
    desc: "A set of social-ready post concepts with strong hooks, premium textured backgrounds, clear CTA placement, and a visual system built for repeat campaigns.",
    color: "175 70% 42%",
    image: "/images/graphic-design/social-media-post.png",
    gallery: ["/images/graphic-design/premium-luxury-corporate-post.png"],
  },
];

const getProjectImages = (project: (typeof projects)[number]) => [
  project.image,
  ...(project.gallery || []),
].filter(Boolean) as string[];

const ProjectsSection = () => {
  const [galleryProjectIndex, setGalleryProjectIndex] = useState<number | null>(null);
  const [galleryImageIndex, setGalleryImageIndex] = useState(0);

  const galleryProject = galleryProjectIndex === null ? null : projects[galleryProjectIndex];
  const galleryImages = galleryProject ? getProjectImages(galleryProject) : [];
  const currentImage = galleryImages[galleryImageIndex];

  const openGallery = (projectIndex: number, imageIndex = 0) => {
    setGalleryProjectIndex(projectIndex);
    setGalleryImageIndex(imageIndex);
  };

  const showPreviousImage = () => {
    setGalleryImageIndex((current) => (current === 0 ? galleryImages.length - 1 : current - 1));
  };

  const showNextImage = () => {
    setGalleryImageIndex((current) => (current + 1) % galleryImages.length);
  };

  return (
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
          {projects.map((p, i) => {
            const isGraphicDesignProject = p.tag.includes("Graphic Design");
            const projectImages = getProjectImages(p);

            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, type: "spring", stiffness: 100 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => isGraphicDesignProject && openGallery(i)}
                onKeyDown={(event) => {
                  if (isGraphicDesignProject && (event.key === "Enter" || event.key === " ")) {
                    event.preventDefault();
                    openGallery(i);
                  }
                }}
                role={isGraphicDesignProject ? "button" : undefined}
                tabIndex={isGraphicDesignProject ? 0 : undefined}
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
                    {isGraphicDesignProject && (
                      <motion.button
                        type="button"
                        whileHover={{ scale: 1.1 }}
                        className="rounded-full border border-primary/50 bg-primary/10 p-2.5"
                        aria-label={`View ${p.title} gallery`}
                        onClick={(event) => {
                          event.stopPropagation();
                          openGallery(i);
                        }}
                      >
                        <Eye className="h-5 w-5 text-primary" />
                      </motion.button>
                    )}
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
                          onClick={(event) => event.stopPropagation()}
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
                          onClick={(event) => event.stopPropagation()}
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
                        onClick={(event) => event.stopPropagation()}
                      >
                        <ExternalLink className="h-4 w-4 text-muted-foreground/30 transition-all group-hover:text-foreground" />
                      </a>
                    ) : isGraphicDesignProject ? (
                      <button
                        type="button"
                        aria-label={`View ${p.title} gallery`}
                        onClick={(event) => {
                          event.stopPropagation();
                          openGallery(i);
                        }}
                      >
                        <Eye className="h-4 w-4 text-muted-foreground/40 transition-all group-hover:text-foreground" />
                      </button>
                    ) : (
                      <ExternalLink className="h-4 w-4 text-muted-foreground/30" />
                    )}
                  </div>
                  <h3 className="mt-2 font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  {p.gallery && (
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      {projectImages.slice(0, 6).map((image, imageIndex) => (
                        <button
                          key={image}
                          type="button"
                          aria-label={`Open ${p.title} sample ${imageIndex + 1}`}
                          onClick={(event) => {
                            event.stopPropagation();
                            openGallery(i, imageIndex);
                          }}
                        >
                          <img
                            src={image}
                            alt={`${p.title} design sample`}
                            className="aspect-square rounded-lg border border-border/40 object-cover transition-opacity hover:opacity-80"
                            loading="lazy"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <Dialog open={Boolean(galleryProject)} onOpenChange={(open) => !open && setGalleryProjectIndex(null)}>
        <DialogContent className="max-h-[94vh] max-w-[96vw] gap-3 overflow-hidden border-border/60 bg-background/95 p-4 backdrop-blur-xl sm:max-w-6xl">
          {galleryProject && currentImage && (
            <>
              <DialogHeader className="pr-8">
                <DialogTitle className="font-display text-2xl text-foreground">
                  {galleryProject.title}
                </DialogTitle>
                <DialogDescription>
                  {galleryImageIndex + 1} / {galleryImages.length}
                </DialogDescription>
              </DialogHeader>

              <div className="relative flex min-h-0 items-center justify-center rounded-xl bg-black/40 p-2 sm:p-4">
                {galleryImages.length > 1 && (
                  <button
                    type="button"
                    onClick={showPreviousImage}
                    className="absolute left-3 top-1/2 z-10 rounded-full border border-border/50 bg-background/80 p-2 text-foreground shadow-lg backdrop-blur transition-colors hover:bg-primary hover:text-primary-foreground"
                    aria-label="Previous design"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                )}
                <img
                  src={currentImage}
                  alt={`${galleryProject.title} full design`}
                  className="max-h-[70vh] w-full object-contain"
                />
                {galleryImages.length > 1 && (
                  <button
                    type="button"
                    onClick={showNextImage}
                    className="absolute right-3 top-1/2 z-10 rounded-full border border-border/50 bg-background/80 p-2 text-foreground shadow-lg backdrop-blur transition-colors hover:bg-primary hover:text-primary-foreground"
                    aria-label="Next design"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                )}
              </div>

              {galleryImages.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {galleryImages.map((image, imageIndex) => (
                    <button
                      key={image}
                      type="button"
                      onClick={() => setGalleryImageIndex(imageIndex)}
                      className={`h-16 w-16 shrink-0 overflow-hidden rounded-lg border transition-all ${
                        imageIndex === galleryImageIndex
                          ? "border-primary ring-2 ring-primary/30"
                          : "border-border/50 opacity-70 hover:opacity-100"
                      }`}
                      aria-label={`Show design ${imageIndex + 1}`}
                    >
                      <img src={image} alt="" className="h-full w-full object-cover" loading="lazy" />
                    </button>
                  ))}
                </div>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
