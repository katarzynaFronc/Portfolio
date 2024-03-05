import { useRef, useEffect } from "react";
import "../assets/sass/utilities/_variables.scss";

interface Particle {
  x: number;
  y: number;
  radius: number;
  originalX: number;
  originalY: number;
}

export const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const gap = 15;
    const radius = 1;
    const rows = Math.floor(canvas.height / (radius * 2 + gap));
    const columns = Math.floor(canvas.width / (radius * 2 + gap));

    const particles: Particle[] = [];

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        const x = j * (radius * 2 + gap) + radius;
        const y = i * (radius * 2 + gap) + radius;
        particles.push({ x, y, radius, originalX: x, originalY: y });
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        const dx = mousePosition.current.x - particle.x;
        const dy = mousePosition.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        const directionX = dx / distance;
        const directionY = dy / distance;

        const maxDistance = 100;
        const force = Math.max(0, (maxDistance - distance) / maxDistance);

        if (distance < 50) {
          particle.x += directionX * force * 2;
          particle.y += directionY * force * 2;
        } else {
          particle.x = particle.originalX;
          particle.y = particle.originalY;
        }

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#9cb1ce";
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.current = { x: event.clientX, y: event.clientY };
    };

    canvas.addEventListener("pointermove", handleMouseMove);

    animate();

    return () => {
      canvas.removeEventListener("pointermove", handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="canva" />;
};
