import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Award, Clock, Mail, MapPin, Minus, Phone, Plus, Quote } from "lucide-react";
import { awards, faqs, images, menu, testimonials } from "@/lib/site-data";
import { MaskImage, Parallax, Reveal, TiltCard, WordReveal } from "./motion-primitives";

type MenuKey = keyof typeof menu;

export function MenuShowcase() {
  const keys = Object.keys(menu) as MenuKey[];
  const [active, setActive] = useState<MenuKey>("Tasting");

  return (
    <section id="menu" className="bg-surface px-6 py-32">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Reveal>
            <p className="eyebrow">The carte</p>
          </Reveal>
          <WordReveal
            text="Read it slowly."
            className="mt-5 font-display text-[clamp(2.4rem,5vw,4rem)] leading-[1.02] text-foreground"
          />
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              The carte shifts with the market. What follows is this week's composition, printed
              each Tuesday morning.
            </p>
          </Reveal>
          <Reveal delay={0.25} className="mt-10">
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Menu sections">
              {keys.map((k) => (
                <button
                  key={k}
                  role="tab"
                  aria-selected={active === k}
                  onClick={() => setActive(k)}
                  className={`rounded-full border px-5 py-2.5 font-accent text-[0.7rem] uppercase tracking-[0.2em] transition-all duration-500 ${
                    active === k
                      ? "border-transparent bg-primary text-primary-foreground shadow-float"
                      : "border-border text-muted-foreground hover:border-gold hover:text-gold"
                  }`}
                >
                  {k}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="rounded-[28px] border border-border bg-card p-8 shadow-float sm:p-12">
          <AnimatePresence mode="wait">
            <motion.ul
              key={active}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-7"
            >
              {menu[active].map(([name, price], i) => (
                <motion.li
                  key={name}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex items-baseline gap-4"
                >
                  <span className="font-display text-xl text-foreground transition-colors group-hover:text-gold">
                    {name}
                  </span>
                  <span className="h-px flex-1 bg-border transition-colors group-hover:bg-gold/50" />
                  <span className="font-accent text-sm tabular-nums text-muted-foreground">
                    {price === "—" ? price : `€${price}`}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export function ChefsSpecial() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow">Chef's collection</p>
            </Reveal>
            <WordReveal
              text="Six weeks. One obsession."
              className="mt-5 font-display text-[clamp(2.2rem,4.6vw,3.6rem)] leading-[1.04] text-foreground"
            />
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Twice a year the kitchen dedicates itself to a single product. This season: langoustine
                from Loctudy, landed the same day, cooked five ways across the tasting.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Parallax distance={40} className="rounded-[32px]">
              <MaskImage
                src={images.hero}
                alt="Chef's seasonal collection course under candlelight"
                width={1600}
                height={1808}
                className="aspect-[16/10] rounded-[32px] shadow-luxe"
              />
            </Parallax>
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {[
            { season: "Spring", title: "Green garlic & morels", note: "Chevreuse garden · April" },
            { season: "Summer", title: "Stone fruit & verbena", note: "Provence orchards · July" },
            { season: "Winter", title: "Truffle & aged comté", note: "Périgord · December" },
          ].map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <TiltCard
                intensity={6}
                className="h-full rounded-[24px] border border-border bg-card p-8 transition-shadow duration-700 hover:shadow-float"
              >
                <p className="eyebrow">{s.season}</p>
                <h3 className="mt-4 font-display text-2xl text-foreground">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.note}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Gallery() {
  const shots = [
    { src: images.dish1, alt: "Hokkaido scallops with saffron velouté", span: "md:col-span-4 aspect-[4/5]" },
    { src: images.interior, alt: "Dining room at dusk", span: "md:col-span-8 aspect-[16/10]" },
    { src: images.dish2, alt: "Aged wagyu with ember vegetables", span: "md:col-span-7 aspect-[16/11]" },
    { src: images.dish3, alt: "Chocolate sphere dessert with gold leaf", span: "md:col-span-5 aspect-[4/5]" },
  ];
  return (
    <section id="gallery" className="bg-surface px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between gap-6">
          <WordReveal
            text="Inside the room"
            className="max-w-lg font-display text-[clamp(2.2rem,4.6vw,3.6rem)] leading-[1.04] text-foreground"
          />
          <Reveal delay={0.1}>
            <p className="eyebrow">Gallery</p>
          </Reveal>
        </div>
        <div className="mt-16 grid gap-5 md:grid-cols-12">
          {shots.map((s, i) => (
            <MaskImage
              key={s.alt}
              src={s.src}
              alt={s.alt}
              className={`${s.span} rounded-[26px] shadow-float`}
              imgClassName={i % 2 ? "" : ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="eyebrow text-center">In their words</p>
        </Reveal>
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.12}>
              <figure className="group relative h-full overflow-hidden rounded-[26px] border border-border bg-card p-9 transition-all duration-700 hover:-translate-y-1.5 hover:shadow-luxe">
                <Quote className="h-7 w-7 text-gold/60" aria-hidden />
                <blockquote className="mt-6 font-display text-[1.45rem] leading-snug text-foreground">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-8 border-t border-border pt-5">
                  <p className="font-accent text-sm text-foreground">{t.name}</p>
                  <p className="mt-1 font-accent text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                    {t.role}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Awards() {
  return (
    <section id="awards" className="bg-surface px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="eyebrow">Recognition</p>
        </Reveal>
        <WordReveal
          text="Kindly noted by others"
          className="mt-5 font-display text-[clamp(2.2rem,4.6vw,3.6rem)] leading-[1.04] text-foreground"
        />
        <ul className="mt-16">
          {awards.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.08} as="li">
              <div className="group grid grid-cols-[auto_1fr_auto] items-center gap-6 border-t border-border py-8 transition-colors duration-500 last:border-b hover:bg-card/60 sm:gap-10">
                <span className="font-accent text-sm tabular-nums text-muted-foreground">
                  {a.year}
                </span>
                <div>
                  <h3 className="font-display text-2xl text-foreground transition-colors group-hover:text-gold">
                    {a.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{a.body}</p>
                </div>
                <Award
                  className="h-5 w-5 text-gold opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden
                />
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="px-6 py-32">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <Reveal>
            <p className="eyebrow">Good to know</p>
          </Reveal>
          <WordReveal
            text="Questions, answered."
            className="mt-5 font-display text-[clamp(2.2rem,4.6vw,3.4rem)] leading-[1.04] text-foreground"
          />
        </div>
        <div>
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.06}>
                <div className="border-b border-border">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="font-display text-xl text-foreground">{f.q}</span>
                    {isOpen ? (
                      <Minus className="h-4 w-4 shrink-0 text-gold" aria-hidden />
                    ) : (
                      <Plus className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden />
                    )}
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-7 pr-10 text-sm leading-relaxed text-muted-foreground">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const details = [
    { icon: MapPin, label: "Address", value: "14 Rue de Penthièvre, Paris VIII" },
    { icon: Clock, label: "Service", value: "Tuesday – Saturday · 19:00 – 23:00" },
    { icon: Phone, label: "Telephone", value: "+33 1 42 65 09 14" },
    { icon: Mail, label: "Email", value: "reserve@maisonlumiere.fr" },
  ];
  return (
    <section id="contact" className="bg-surface px-6 py-32">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2">
        <div>
          <Reveal>
            <p className="eyebrow">Contact</p>
          </Reveal>
          <WordReveal
            text="Come find the light."
            className="mt-5 font-display text-[clamp(2.2rem,4.6vw,3.6rem)] leading-[1.04] text-foreground"
          />
          <ul className="mt-12 space-y-8">
            {details.map((d, i) => (
              <Reveal key={d.label} delay={i * 0.08} as="li">
                <div className="flex items-start gap-5">
                  <d.icon className="mt-1 h-4 w-4 text-gold" aria-hidden />
                  <div>
                    <p className="font-accent text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">
                      {d.label}
                    </p>
                    <p className="mt-1.5 font-display text-xl text-foreground">{d.value}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal delay={0.15}>
          <form
            className="rounded-[28px] border border-border bg-card p-8 shadow-float sm:p-10"
            onSubmit={(e) => e.preventDefault()}
          >
            <h3 className="font-display text-2xl text-foreground">Request a table</h3>
            <div className="mt-8 space-y-5">
              {[
                { id: "name", label: "Full name", type: "text" },
                { id: "email", label: "Email", type: "email" },
                { id: "date", label: "Preferred date", type: "date" },
              ].map((f) => (
                <div key={f.id}>
                  <label
                    htmlFor={f.id}
                    className="font-accent text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground"
                  >
                    {f.label}
                  </label>
                  <input
                    id={f.id}
                    name={f.id}
                    type={f.type}
                    required
                    className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all duration-500 focus:border-gold focus:ring-2 focus:ring-gold/25"
                  />
                </div>
              ))}
              <div>
                <label
                  htmlFor="note"
                  className="font-accent text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground"
                >
                  Anything we should know
                </label>
                <textarea
                  id="note"
                  name="note"
                  rows={3}
                  className="mt-2 w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all duration-500 focus:border-gold focus:ring-2 focus:ring-gold/25"
                />
              </div>
            </div>
            <button
              type="submit"
              className="group mt-8 inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-primary px-8 py-4 font-accent text-[0.72rem] uppercase tracking-[0.22em] text-primary-foreground transition-shadow duration-700 hover:shadow-glow"
            >
              Send request
              <span className="h-1 w-1 rounded-full bg-current transition-all duration-500 group-hover:w-6" />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="noise relative overflow-hidden bg-primary px-6 pb-10 pt-24 text-primary-foreground">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-primary-foreground/15 pb-14 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl">
              Maison <span className="italic text-gradient-gold">Lumière</span>
            </p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed opacity-70">
              A two-star kitchen in the eighth arrondissement, cooking with fire, garden and
              patience since 2011.
            </p>
          </div>
          <div>
            <p className="font-accent text-[0.65rem] uppercase tracking-[0.24em] opacity-60">
              Visit
            </p>
            <ul className="mt-5 space-y-2.5 text-sm opacity-80">
              <li>14 Rue de Penthièvre</li>
              <li>75008 Paris, France</li>
              <li>+33 1 42 65 09 14</li>
            </ul>
          </div>
          <div>
            <p className="font-accent text-[0.65rem] uppercase tracking-[0.24em] opacity-60">
              Explore
            </p>
            <ul className="mt-5 space-y-2.5 text-sm">
              {["Story", "Menu", "Gallery", "Awards", "Contact"].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="opacity-80 transition-opacity hover:opacity-100"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-8 text-[0.7rem] opacity-55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Maison Lumière. All rights reserved.</p>
          <p className="font-accent uppercase tracking-[0.22em]">Paris · Two Michelin Stars</p>
        </div>
      </div>
    </footer>
  );
}
