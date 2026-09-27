'use client';

import { useCallback, useEffect, useRef } from "react";

export type ParticleTextEffectHandle = {
  formText: (text: string, mode: "brand" | "tagline") => void;
  disperse: () => void;
};

type ParticleTextEffectProps = {
  onReady?: (api: ParticleTextEffectHandle) => void;
};

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  tx: number;
  ty: number;
  color: string;
  targetColor: string;
  size: number;
};

const BRAND_GREEN = "#00C24A";
const BRIGHT_GREEN = "#39FF14";
const WHITE = "#FFFFFF";

function fitFontSize(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number,
  preferred: number,
  min: number,
) {
  let size = preferred;
  while (size > min) {
    ctx.font = `700 ${size}px "Space Grotesk", Inter, sans-serif`;
    if (ctx.measureText(text).width <= maxWidth) return size;
    size -= 2;
  }
  return min;
}

function sampleTextTargets(
  width: number,
  height: number,
  text: string,
  mode: "brand" | "tagline",
  density: number,
) {
  const offscreen = document.createElement("canvas");
  const ctx = offscreen.getContext("2d", { willReadFrequently: true });
  if (!ctx) return [];

  const scale = Math.min(window.devicePixelRatio || 1, 2);
  offscreen.width = Math.max(1, Math.floor(width * scale));
  offscreen.height = Math.max(1, Math.floor(height * scale));
  ctx.scale(scale, scale);

  const preferred = mode === "brand" ? Math.min(width * 0.2, 180) : Math.min(width * 0.1, 92);
  const fontSize = fitFontSize(ctx, text, width * 0.86, preferred, mode === "brand" ? 44 : 24);

  ctx.clearRect(0, 0, width, height);
  ctx.font = `700 ${fontSize}px "Space Grotesk", Inter, sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "#fff";
  ctx.fillText(text, width / 2, height / 2);

  const image = ctx.getImageData(0, 0, offscreen.width, offscreen.height);
  const step = Math.max(4, density);
  const targets: Array<{ x: number; y: number }> = [];

  for (let y = 0; y < offscreen.height; y += step * scale) {
    for (let x = 0; x < offscreen.width; x += step * scale) {
      const i = (Math.floor(y) * offscreen.width + Math.floor(x)) * 4 + 3;
      if (image.data[i] > 100) {
        targets.push({ x: x / scale, y: y / scale });
      }
    }
  }

  return targets;
}

export function ParticleTextEffect({ onReady }: ParticleTextEffectProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number | null>(null);
  const sizeRef = useRef({ width: 0, height: 0 });
  const currentRef = useRef<{ text: string; mode: "brand" | "tagline" } | null>(null);

  const resize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const width = window.innerWidth;
    const height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    sizeRef.current = { width, height };

    const ctx = canvas.getContext("2d");
    if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }, []);

  const formText = useCallback((text: string, mode: "brand" | "tagline") => {
    currentRef.current = { text, mode };
    const { width, height } = sizeRef.current;
    if (!width || !height) return;

    const mobile = width < 640;
    const targets = sampleTextTargets(width, height, text, mode, mobile ? 7 : 6);
    const cap = mobile ? 1250 : 2200;
    const limited = targets.length > cap
      ? targets.filter((_, index) => index % Math.ceil(targets.length / cap) === 0)
      : targets;

    const particles = particlesRef.current;
    while (particles.length < limited.length) {
      const edge = Math.random();
      particles.push({
        x: edge < 0.5 ? Math.random() * width : Math.random() < 0.5 ? -20 : width + 20,
        y: edge < 0.5 ? (Math.random() < 0.5 ? -20 : height + 20) : Math.random() * height,
        vx: (Math.random() - 0.5) * 4,
        vy: (Math.random() - 0.5) * 4,
        tx: width / 2,
        ty: height / 2,
        color: BRAND_GREEN,
        targetColor: BRAND_GREEN,
        size: Math.random() * 1.5 + 1,
      });
    }

    particles.forEach((particle, index) => {
      const target = limited[index % limited.length] ?? { x: width / 2, y: height / 2 };
      particle.tx = target.x;
      particle.ty = target.y;
      particle.targetColor =
        mode === "brand"
          ? index % 10 === 0
            ? BRIGHT_GREEN
            : BRAND_GREEN
          : index % 7 === 0
            ? BRAND_GREEN
            : WHITE;
      particle.size = mode === "brand" ? 1.5 + Math.random() * 1.3 : 1.2 + Math.random() * 1.1;
    });

    if (particles.length > limited.length) {
      particles.splice(limited.length);
    }
  }, []);

  const disperse = useCallback(() => {
    const { width, height } = sizeRef.current;
    particlesRef.current.forEach((particle) => {
      const angle = Math.atan2(particle.y - height / 2, particle.x - width / 2) + (Math.random() - 0.5) * 0.8;
      const distance = Math.max(width, height) * (0.8 + Math.random() * 0.55);
      particle.tx = particle.x + Math.cos(angle) * distance;
      particle.ty = particle.y + Math.sin(angle) * distance;
      particle.targetColor = BRAND_GREEN;
      particle.vx += Math.cos(angle) * (2 + Math.random() * 3);
      particle.vy += Math.sin(angle) * (2 + Math.random() * 3);
    });
  }, []);

  useEffect(() => {
    resize();

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const animate = () => {
      const { width, height } = sizeRef.current;
      ctx.clearRect(0, 0, width, height);

      for (const particle of particlesRef.current) {
        const dx = particle.tx - particle.x;
        const dy = particle.ty - particle.y;
        const distance = Math.hypot(dx, dy);
        const force = distance > 120 ? 0.022 : distance > 20 ? 0.038 : 0.065;

        particle.vx += dx * force;
        particle.vy += dy * force;
        particle.vx *= distance < 8 ? 0.68 : 0.84;
        particle.vy *= distance < 8 ? 0.68 : 0.84;
        particle.x += particle.vx;
        particle.y += particle.vy;

        particle.color = particle.targetColor;

        ctx.beginPath();
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = 0.9;
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      rafRef.current = requestAnimationFrame(animate);
    };

    animate();
    onReady?.({ formText, disperse });

    const handleResize = () => {
      resize();
      const current = currentRef.current;
      if (current) window.setTimeout(() => formText(current.text, current.mode), 60);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [disperse, formText, onReady, resize]);

  return <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 h-full w-full" />;
}
