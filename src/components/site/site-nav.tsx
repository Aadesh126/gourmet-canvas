import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { navLinks } from "@/lib/site-data";
import { Magnetic } from "./motion-primitives";

function useTheme() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const stored = localStorage.getItem("ml-theme");
    const isDark = stored === "dark";
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);
  const toggle = () => {
    setDark((d) => {
      const next = !d;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("ml-theme", next ? "dark" : "light");
      return next;
    });
  };
  return { dark, toggle };
}

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { dark, toggle } = useTheme();
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      className={`relative grid h-10 w-10 place-items-center rounded-full border border-border/70 text-foreground transition-colors hover:border-gold hover:text-gold ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={dark ? "moon" : "sun"}
          initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="absolute"
        >
          {dark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6"
    >
      <nav
        aria-label="Primary"
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3 transition-all duration-700 ${
          scrolled ? "glass shadow-float" : "border border-transparent"
        }`}
      >
        <a href="#top" className="group flex items-baseline gap-2" aria-label="Maison Lumière home">
          <span className="font-display text-xl tracking-tight text-foreground">Maison</span>
          <span className="font-display text-xl italic text-gradient-gold">Lumière</span>
          <span className="ml-1 h-1 w-1 rounded-full bg-gold transition-all duration-500 group-hover:w-6" />
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Magnetic strength={0.25}>
                <a
                  href={l.href}
                  className="relative block rounded-full px-4 py-2 font-accent text-[0.8rem] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                  <span className="absolute inset-x-4 bottom-1 h-px origin-left scale-x-0 bg-gold transition-transform duration-500 hover:scale-x-100" />
                </a>
              </Magnetic>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Magnetic strength={0.3} className="hidden sm:inline-block">
            <a
              href="#reserve"
              className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 font-accent text-[0.75rem] uppercase tracking-[0.2em] text-primary-foreground transition-shadow duration-500 hover:shadow-glow"
            >
              Reserve
            </a>
          </Magnetic>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="grid h-10 w-10 place-items-center rounded-full border border-border/70 md:hidden"
          >
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 92% 6%)" }}
            animate={{ opacity: 1, clipPath: "circle(140% at 92% 6%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 92% 6%)" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-background px-8 py-8 md:hidden"
          >
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid h-11 w-11 place-items-center rounded-full border border-border"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <ul className="mt-16 space-y-4">
              {navLinks.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 + i * 0.07, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-5xl text-foreground"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <a
              href="#reserve"
              onClick={() => setOpen(false)}
              className="mt-14 inline-flex rounded-full bg-primary px-7 py-3.5 font-accent text-xs uppercase tracking-[0.24em] text-primary-foreground"
            >
              Reserve a table
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
