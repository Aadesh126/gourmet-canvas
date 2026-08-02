import { Suspense, lazy, useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Star } from "lucide-react";
import heroDish from "@/assets/hero-dish.jpg";
import { Magnetic } from "./motion-primitives";

const DiningScene = lazy(() => import("./dining-scene"));

export function LuxeButton({
  children,
  href,
  variant = "solid",
}: {
  children: ReactNode;
  href: string;
  variant?: "solid" | "ghost";
}) {
  return (
    <Magnetic strength={0.3}>
      <a
        href={href}
        className={`group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-8 py-4 font-accent text-[0.75rem] uppercase tracking-[0.22em] transition-all duration-700 ${
          variant === "solid"
            ? "bg-primary text-primary-foreground hover:shadow-glow"
            : "border border-border text-foreground hover:border-gold hover:text-gold"
        }`}
      >
        <span className="relative z-10">{children}</span>
        <span
          aria-hidden
          className="absolute inset-0 -translate-x-full bg-[image:var(--gradient-gold)] opacity-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0 group-hover:opacity-100"
        />
        <span className="relative z-10 h-1 w-1 rounded-full bg-current transition-all duration-500 group-hover:w-5" />
      </a>
    </Magnetic>
  );
}

function Particles() {
  const dots = Array.from({ length: 18 }, (_, i) => ({
    left: `${(i * 37) % 100}%`,
    top: `${(i * 53) % 100}%`,
    delay: (i % 7) * 0.8,
    size: 2 + (i % 3),
  }));
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((d, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-gold/50"
          style={{ left: d.left, top: d.top, width: d.size, height: d.size }}
          animate={{ y: [0, -34, 0], opacity: [0, 0.9, 0] }}
          transition={{ duration: 9 + (i % 5), repeat: Infinity, delay: d.delay, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const imgY = useTransform(scrollYProgress, [0, 1], [0, -90]);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 1000);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="top"
      ref={ref}
      className="noise relative flex min-h-[100svh] items-center overflow-hidden bg-warm pt-32 pb-20"
    >
      <div
        aria-hidden
        className="aurora pointer-events-none absolute -left-40 top-10 h-[520px] w-[520px] rounded-full bg-gold/25 blur-[130px]"
      />
      <div
        aria-hidden
        className="aurora pointer-events-none absolute -right-32 bottom-0 h-[460px] w-[460px] rounded-full bg-ember/20 blur-[140px]"
        style={{ animationDelay: "-6s" }}
      />
      <Particles />

      <div className="relative mx-auto grid w-full max-w-7xl gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div style={{ y, opacity: fade }}>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="eyebrow flex items-center gap-3"
          >
            <Star className="h-3 w-3 fill-gold text-gold" aria-hidden />
            Two Michelin Stars · Paris VIII
          </motion.p>

          <h1 className="mt-7 font-display text-[clamp(3.2rem,8.2vw,7rem)] leading-[0.92] text-foreground">
            {["A dinner", "written in", "light."].map((line, i) => (
              <span key={line} className="block overflow-hidden pb-[0.06em]">
                <motion.span
                  className={`inline-block ${i === 2 ? "italic text-gradient-gold" : ""}`}
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    delay: 0.4 + i * 0.13,
                    duration: 1.25,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.85, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground"
          >
            Seventeen courses composed each morning from the market, the coast and the seasons —
            served in a room designed to disappear around the plate.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <LuxeButton href="#reserve">Reserve a table</LuxeButton>
            <LuxeButton href="#menu" variant="ghost">
              View the menu
            </LuxeButton>
          </motion.div>
        </motion.div>

        <motion.div style={{ y: imgY }} className="relative">
          <motion.div
            initial={{ clipPath: "inset(100% 0% 0% 0% round 32px)", scale: 1.08 }}
            animate={{ clipPath: "inset(0% 0% 0% 0% round 32px)", scale: 1 }}
            transition={{ delay: 0.45, duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/5] overflow-hidden rounded-[32px] shadow-luxe"
          >
            <img
              src={heroDish}
              alt="Signature plated course served under warm candlelight at Maison Lumière"
              width={1600}
              height={1808}
              fetchPriority="high"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
          </motion.div>

          <div className="pointer-events-none absolute -left-16 -top-16 hidden h-[360px] w-[360px] lg:block">
            {mounted && (
              <Suspense fallback={null}>
                <DiningScene />
              </Suspense>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="glass float-slow absolute -bottom-8 -left-6 rounded-2xl px-6 py-5 shadow-float sm:-left-10"
          >
            <p className="font-display text-3xl text-foreground">17</p>
            <p className="mt-1 font-accent text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
              Courses nightly
            </p>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#dishes"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 1 }}
        style={{ opacity: fade }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-muted-foreground transition-colors hover:text-gold sm:flex"
        aria-label="Scroll to signature dishes"
      >
        <span className="font-accent text-[0.6rem] uppercase tracking-[0.32em]">Scroll</span>
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}
