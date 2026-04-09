import { Suspense } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from "lucide-react";
import ContactWaveBackground from "./ContactWaveBackground";

const ContactSection = () => (
  <section id="contact" className="section-divider relative overflow-hidden bg-background px-4 py-16 sm:px-6 sm:py-20 min-h-[600px]">
    {/* Three.js 3D Wave Background */}
    <Suspense fallback={null}>
      <ContactWaveBackground />
    </Suspense>

    {/* Dark overlay for readability */}
    <div className="absolute inset-0 z-[1] bg-background/40" />

    <div className="relative z-10 mx-auto max-w-7xl">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-10 flex items-end gap-4"
      >
        <h2 className="font-display text-4xl text-foreground sm:text-5xl">Contact</h2>
        <div className="mb-2 h-[2px] flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Left: info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            Interested in working together? Let's connect and build something great.
          </p>

          <div className="space-y-3">
            {[
              { icon: Mail, text: "john@example.com" },
              { icon: Phone, text: "+1 (555) 123-4567" },
              { icon: MapPin, text: "San Francisco, CA" },
            ].map(({ icon: Icon, text }) => (
              <motion.div
                key={text}
                whileHover={{ x: 6, scale: 1.02 }}
                className="glass-card shimmer-hover group flex items-center gap-3 rounded-xl p-3 transition-all"
              >
                <div className="rounded-xl bg-primary/10 p-2.5 ring-1 ring-primary/20 transition-all group-hover:bg-primary/20 group-hover:ring-primary/40 group-hover:shadow-lg group-hover:shadow-primary/20">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground transition-colors group-hover:text-foreground sm:text-base">{text}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex gap-3 pt-4">
            {/* GitHub */}
            <motion.a
              href="https://github.com/im-vishu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              whileHover={{ y: -6, scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="glass-card group rounded-xl p-3 text-muted-foreground transition-all hover:text-primary hover:shadow-lg hover:shadow-primary/20"
            >
              <Github className="h-5 w-5" />
            </motion.a>
            {/* LinkedIn */}
            <motion.a
              href="https://linkedin.com/in/vishanttchaudhary"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              whileHover={{ y: -6, scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="glass-card group rounded-xl p-3 text-muted-foreground transition-all hover:text-primary hover:shadow-lg hover:shadow-primary/20"
            >
              <Linkedin className="h-5 w-5" />
            </motion.a>
            {/* Twitter/X */}
            <motion.a
              href="https://x.com/iam_vishant"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter(X)"
              whileHover={{ y: -6, scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="glass-card group rounded-xl p-3 text-muted-foreground transition-all hover:text-primary hover:shadow-lg hover:shadow-primary/20"
            >
              <Twitter className="h-5 w-5" />
            </motion.a>
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-xl p-6 space-y-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-xl border border-border/50 bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-all focus:border-primary focus:shadow-lg focus:shadow-primary/10 focus:outline-none focus:ring-1 focus:ring-primary/30 sm:text-base"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-xl border border-border/50 bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-all focus:border-primary focus:shadow-lg focus:shadow-primary/10 focus:outline-none focus:ring-1 focus:ring-primary/30 sm:text-base"
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full rounded-xl border border-border/50 bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-all focus:border-primary focus:shadow-lg focus:shadow-primary/10 focus:outline-none focus:ring-1 focus:ring-primary/30 sm:text-base"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/40 hover:brightness-110"
          >
            <Send className="h-4 w-4" />
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </div>
  </section>
);

export default ContactSection;