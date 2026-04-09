import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import visitorAvatar from "@/assets/visitor-avatar.jpg";
import recruiterAvatar from "@/assets/recruiter-avatar.jpg";
import customerAvatar from "@/assets/customer-avatar.jpg";
import Scene3DBackground from "@/components/Scene3DBackground";

const profiles = [
  { name: "Visitor", avatar: visitorAvatar, desc: "Just browsing around", accent: "from-primary/60 to-red-500/40", glow: "357 92% 47%" },
  { name: "Recruiter", avatar: recruiterAvatar, desc: "Looking to hire", accent: "from-blue-500/60 to-cyan-400/40", glow: "210 100% 56%" },
  { name: "Customer", avatar: customerAvatar, desc: "Need a project built", accent: "from-emerald-500/60 to-teal-400/40", glow: "150 70% 45%" },
];

const ProfileSelect = () => {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background">
      <Scene3DBackground />

      <div className="relative z-10 flex flex-col items-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-2 text-center font-display text-5xl tracking-wider text-foreground sm:text-6xl md:text-7xl"
        >
          Who's Browsing?
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-12 text-center text-sm text-muted-foreground sm:mb-16 sm:text-base"
        >
          Select your profile to continue
        </motion.p>

        <div className="flex flex-col items-center gap-8 sm:flex-row sm:gap-10 md:gap-14">
          {profiles.map((profile, i) => (
            <motion.button
              key={profile.name}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.4 + i * 0.2, type: "spring", stiffness: 80, damping: 15 }}
              whileHover={{ scale: 1.12, y: -16 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => navigate("/portfolio")}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative flex flex-col items-center gap-4"
            >
              {/* Multi-layer glow */}
              <AnimatePresence>
                {hoveredIndex === i && (
                  <>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 0.6, scale: 1.2 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      transition={{ duration: 0.5 }}
                      className={`absolute -inset-4 rounded-3xl bg-gradient-to-br ${profile.accent} blur-3xl`}
                    />
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 0.3, scale: 1.4 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className={`absolute -inset-8 rounded-3xl bg-gradient-to-br ${profile.accent} blur-[60px]`}
                    />
                  </>
                )}
              </AnimatePresence>

              {/* Card */}
              <div className="relative overflow-hidden rounded-2xl border-2 border-transparent backdrop-blur-md transition-all duration-500 group-hover:border-primary/50"
                style={{
                  background: hoveredIndex === i
                    ? `linear-gradient(135deg, hsl(${profile.glow} / 0.12), hsl(0 0% 11% / 0.8))`
                    : "hsl(0 0% 11% / 0.4)",
                }}
              >
                {/* Avatar */}
                <div className="relative h-36 w-36 overflow-hidden sm:h-40 sm:w-40 md:h-48 md:w-48">
                  <img
                    src={profile.avatar}
                    alt={profile.name}
                    className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                    width={192}
                    height={192}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-85" />

                  {/* Shimmer */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />

                  {/* Ring pulse on hover */}
                  <AnimatePresence>
                    {hoveredIndex === i && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: [0, 0.5, 0], scale: [0.9, 1.05, 1.1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="absolute inset-2 rounded-xl border-2"
                        style={{ borderColor: `hsl(${profile.glow} / 0.4)` }}
                      />
                    )}
                  </AnimatePresence>
                </div>

                {/* Text */}
                <div className="px-5 py-4 text-center">
                  <motion.span
                    className="block text-lg font-semibold text-foreground sm:text-xl"
                    layout
                  >
                    {profile.name}
                  </motion.span>
                  <span className="block text-xs text-muted-foreground/60 transition-colors duration-300 group-hover:text-muted-foreground">
                    {profile.desc}
                  </span>
                </div>

                {/* Bottom accent line */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-[2px]"
                  style={{ background: `linear-gradient(90deg, transparent, hsl(${profile.glow}), transparent)` }}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              {/* Floating particles */}
              <AnimatePresence>
                {hoveredIndex === i && (
                  <>
                    {[...Array(6)].map((_, j) => (
                      <motion.div
                        key={j}
                        initial={{ opacity: 0, y: 0, x: 0 }}
                        animate={{
                          opacity: [0, 1, 0],
                          y: [0, -50 - j * 12],
                          x: [(j % 2 === 0 ? -1 : 1) * (8 + j * 10)],
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, delay: j * 0.12, repeat: Infinity }}
                        className="absolute bottom-10 rounded-full"
                        style={{
                          width: 3 + (j % 3),
                          height: 3 + (j % 3),
                          background: `hsl(${profile.glow} / 0.8)`,
                          boxShadow: `0 0 6px hsl(${profile.glow} / 0.5)`,
                        }}
                      />
                    ))}
                  </>
                )}
              </AnimatePresence>
            </motion.button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-16 sm:mt-20"
        >
          <span className="font-display text-3xl tracking-[0.3em] text-gradient-red sm:text-4xl">
            PORTFOLIO
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfileSelect;
