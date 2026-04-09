import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  life: number;
  maxLife: number;
  hue: number;
}

const ParticleCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mouse = useRef({ x: 0, y: 0 });
  const animationId = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      for (let i = 0; i < 3; i++) {
        particles.current.push({
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 4 + 1,
          speedX: (Math.random() - 0.5) * 3,
          speedY: (Math.random() - 0.5) * 3,
          life: 0,
          maxLife: 40 + Math.random() * 20,
          hue: 357 + Math.random() * 10 - 5,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current = particles.current.filter((p) => {
        p.life++;
        p.x += p.speedX;
        p.y += p.speedY;
        p.speedX *= 0.98;
        p.speedY *= 0.98;

        const progress = p.life / p.maxLife;
        const alpha = 1 - progress;
        const size = p.size * (1 - progress * 0.5);

        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, size);
        gradient.addColorStop(0, `hsla(${p.hue}, 92%, 47%, ${alpha})`);
        gradient.addColorStop(1, `hsla(${p.hue}, 92%, 47%, 0)`);
        ctx.fillStyle = gradient;
        ctx.fill();

        return p.life < p.maxLife;
      });

      animationId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[9999]"
      style={{ mixBlendMode: "screen" }}
    />
  );
};

export default ParticleCursor;
