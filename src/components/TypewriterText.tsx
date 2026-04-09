import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterTextProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  cursorColor?: string;
}

const TypewriterText = ({ text, delay = 0, speed = 80, className = "", cursorColor }: TypewriterTextProps) => {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayed(text.slice(0, displayed.length + 1));
      }, speed);
      return () => clearTimeout(timer);
    } else {
      setDone(true);
    }
  }, [started, displayed, text, speed]);

  return (
    <span className={className}>
      {displayed}
      {started && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.6 }}
          className="inline-block w-[3px] align-middle ml-1"
          style={{
            height: "0.85em",
            backgroundColor: cursorColor || "hsl(var(--primary))",
            display: done ? "none" : "inline-block",
          }}
        />
      )}
    </span>
  );
};

export default TypewriterText;
