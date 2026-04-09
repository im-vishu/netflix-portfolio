import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

// Education data
const education = [
  {
    degree: "M.Sc. Computer Science",
    school: "MIT",
    year: "2018",
    desc: "Specialized in AI & Machine Learning",
    icon: GraduationCap
  },
  {
    degree: "B.Sc. Software Engineering",
    school: "Stanford University",
    year: "2016",
    desc: "Dean's List, GPA 3.9",
    icon: Award
  },
];

// Certifications data
const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    year: "2022",
    desc: "Credential ID: ABCD1234, validates expertise in AWS architecture best practices.",
    icon: Award
  },
  {
    name: "Google Professional Data Engineer",
    issuer: "Google Cloud",
    year: "2021",
    desc: "Credential ID: GCP123456, demonstrates ability to design data processing systems.",
    icon: Award
  },
  // Add more certifications if needed.
];

const EducationSection = () => (
  <section id="education" className="section-divider bg-background px-4 py-16 sm:px-6 sm:py-20">
    <div className="mx-auto max-w-7xl">

      {/* Education Header */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-10 flex items-end gap-4"
      >
        <h2 className="font-display text-4xl text-foreground sm:text-5xl">Education</h2>
        <div className="mb-2 h-[2px] flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
      </motion.div>

      {/* Education Grid */}
      <div className="grid gap-4 sm:gap-6 md:grid-cols-2 mb-16">
        {education.map((edu, i) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, type: "spring", stiffness: 80 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="glass-card animated-border shimmer-hover group rounded-xl p-5 sm:p-6"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/10 p-3 ring-1 ring-primary/20 transition-all duration-500 group-hover:bg-primary/20 group-hover:ring-primary/40 group-hover:shadow-lg group-hover:shadow-primary/20">
                <edu.icon className="h-6 w-6 text-primary transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="flex-1">
                <span className="inline-block rounded-lg bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">{edu.year}</span>
                <h3 className="mt-2 text-base font-semibold text-foreground sm:text-lg">{edu.degree}</h3>
                <p className="text-sm text-primary/80">{edu.school}</p>
                <p className="mt-2 text-sm text-muted-foreground">{edu.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certifications Header */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-10 flex items-end gap-4"
      >
        <h2 className="font-display text-4xl text-foreground sm:text-5xl">Certifications</h2>
        <div className="mb-2 h-[2px] flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
      </motion.div>

      {/* Certifications Grid */}
      <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, type: "spring", stiffness: 80 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="glass-card animated-border shimmer-hover group rounded-xl p-5 sm:p-6"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/10 p-3 ring-1 ring-primary/20 transition-all duration-500 group-hover:bg-primary/20 group-hover:ring-primary/40 group-hover:shadow-lg group-hover:shadow-primary/20">
                <cert.icon className="h-6 w-6 text-primary transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="flex-1">
                <span className="inline-block rounded-lg bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">{cert.year}</span>
                <h3 className="mt-2 text-base font-semibold text-foreground sm:text-lg">{cert.name}</h3>
                <p className="text-sm text-primary/80">{cert.issuer}</p>
                <p className="mt-2 text-sm text-muted-foreground">{cert.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

export default EducationSection;