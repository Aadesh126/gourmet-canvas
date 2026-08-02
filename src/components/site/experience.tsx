import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

/** Lenis-powered inertial smooth scrolling + anchor navigation. */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let lenis: { raf: (t: number) => void; destroy: () => void } | null = null;
    let raf = 0;
    let cancelled = false;

    import("lenis").then(({ default: Lenis }) => {
      if (cancelled) return;
      const instance = new Lenis({
        duration: 1.15,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 1.6,
      });
      lenis = instance as unknown as { raf: (t: number) => void; destroy: () => void };
      const loop = (time: number) => {
        instance.raf(time);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);

      const onClick = (e: MouseEvent) => {
        const anchor = (e.target as HTMLElement)?.closest?.('a[href^="#"]');
        if (!anchor) return;
        const id = anchor.getAttribute("href");
        if (!id || id === "#") return;
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        instance.scrollTo(target as HTMLElement, { offset: -90 });
      };
      document.addEventListener("click", onClick);
      (instance as unknown as { _cleanup?: () => void })._cleanup = () =>
        document.removeEventListener("click", onClick);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      (lenis as unknown as { _cleanup?: () => void })?._cleanup?.();
      lenis?.destroy();
    };
  }, []);

  return null;
}

/** Thin gold scroll progress bar. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 26, mass: 0.3 });
  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-[image:var(--gradient-gold)]"
    />
  );
}

/** Soft spotlight cursor follower (pointer-fine devices only). */
export function CursorGlow() {
  const [pos, setPos] = useState({ x: -300, y: -300 });
  const [fine, setFine] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setFine(true);
    const onMove = (e: PointerEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  if (!fine) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-[55] hidden h-[420px] w-[420px] rounded-full md:block"
      animate={{ x: pos.x - 210, y: pos.y - 210 }}
      transition={{ type: "spring", stiffness: 90, damping: 22, mass: 0.6 }}
      style={{
        background:
          "radial-gradient(circle, color-mix(in oklab, var(--gold) 16%, transparent) 0%, transparent 65%)",
      }}
    />
  );
}

/** Luxury loading curtain shown once on first paint. */
export function LoadingCurtain() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <motion.div
      aria-hidden
      initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
      animate={done ? { clipPath: "inset(0% 0% 100% 0%)" } : {}}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      className="pointer-events-none fixed inset-0 z-[80] flex items-center justify-center bg-background"
      style={{ pointerEvents: done ? "none" : "auto" }}
    >
      <div className="text-center">
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.1em" }}
          animate={{ opacity: 1, letterSpacing: "0.42em" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-2xl text-foreground"
        >
          MAISON LUMIÈRE
        </motion.p>
        <motion.span
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          className="mt-6 block h-px w-40 origin-left bg-[image:var(--gradient-gold)] mx-auto"
        />
      </div>
    </motion.div>
  );
}
