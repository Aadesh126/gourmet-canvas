import { motion } from "framer-motion";
import { Flame, Leaf, Sparkles, Wine } from "lucide-react";
import { images, signatureDishes } from "@/lib/site-data";
import {
  Counter,
  MaskImage,
  Parallax,
  Reveal,
  TiltCard,
  WordReveal,
} from "./motion-primitives";
import { LuxeButton } from "./hero";

export function SignatureDishes() {
  return (
    <section id="dishes" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <p className="eyebrow">Signature</p>
            </Reveal>
            <WordReveal
              text="Three plates that define the house"
              className="mt-5 max-w-xl font-display text-[clamp(2.4rem,5vw,4rem)] leading-[1.02] text-foreground"
            />
          </div>
          <Reveal delay={0.15} className="max-w-xs">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Every dish begins as a single ingredient at its absolute peak. Everything else is
              subtraction.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {signatureDishes.map((dish, i) => (
            <Reveal key={dish.name} delay={i * 0.12}>
              <TiltCard className="group h-full rounded-[28px] border border-border/70 bg-card p-3 shadow-float transition-shadow duration-700 hover:shadow-luxe">
                <div className="overflow-hidden rounded-[22px]">
                  <img
                    src={dish.image}
                    alt={`${dish.name} — ${dish.note}`}
                    width={1008}
                    height={1264}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.08]"
                  />
                </div>
                <div className="flex items-start justify-between gap-4 px-4 pb-4 pt-6">
                  <div>
                    <p className="eyebrow">{dish.tag}</p>
                    <h3 className="mt-2 font-display text-2xl text-foreground">{dish.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{dish.note}</p>
                  </div>
                  <p className="font-display text-2xl text-gradient-gold">€{dish.price}</p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Story() {
  return (
    <section id="story" className="relative overflow-hidden bg-surface px-6 py-32">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">
        <Parallax distance={50} className="rounded-[32px]">
          <MaskImage
            src={images.chef}
            alt="Chef plating a course with tweezers in the Maison Lumière kitchen"
            width={1200}
            height={1504}
            className="aspect-[4/5] rounded-[32px] shadow-luxe"
          />
        </Parallax>

        <div>
          <Reveal>
            <p className="eyebrow">Our story</p>
          </Reveal>
          <WordReveal
            text="A kitchen built around one question."
            className="mt-6 font-display text-[clamp(2.2rem,4.6vw,3.6rem)] leading-[1.05] text-foreground"
          />
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-muted-foreground">
              In 2011, chef Antoine Rivard closed a celebrated brasserie and reopened it with nine
              seats and no menu. The question he wrote above the pass has not changed since:{" "}
              <em className="font-display text-lg not-italic text-foreground">
                what does this ingredient want to become?
              </em>
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
              Fifteen years later the room holds forty-two guests, the garden supplies a third of
              the menu, and the answer still arrives fresh every morning at 5:40 from the market at
              Rungis.
            </p>
          </Reveal>
          <Reveal delay={0.35}>
            <div className="mt-10 flex items-center gap-8 border-t border-border pt-8">
              <div>
                <p className="font-display text-4xl text-foreground">
                  <Counter to={15} suffix="" />
                </p>
                <p className="mt-1 font-accent text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                  Years open
                </p>
              </div>
              <div>
                <p className="font-display text-4xl text-foreground">
                  <Counter to={42} />
                </p>
                <p className="mt-1 font-accent text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                  Seats
                </p>
              </div>
              <div>
                <p className="font-display text-4xl text-gradient-gold">
                  <Counter to={2} />
                </p>
                <p className="mt-1 font-accent text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                  Stars
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const pillars = [
  {
    icon: Leaf,
    title: "Grown, not ordered",
    body: "A third of every plate comes from our own garden in Chevreuse, picked the same morning.",
  },
  {
    icon: Flame,
    title: "Cooked over wood",
    body: "Oak and vine embers. No gas on the main line — heat you can taste rather than measure.",
  },
  {
    icon: Wine,
    title: "Four thousand bottles",
    body: "A cellar built over fifteen years, from grower champagne to forgotten Jura whites.",
  },
  {
    icon: Sparkles,
    title: "Service without theatre",
    body: "One host per six guests, trained to be present exactly when needed and invisible otherwise.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="eyebrow text-center">Why Maison Lumière</p>
        </Reveal>
        <WordReveal
          text="Four commitments we never negotiate"
          className="mx-auto mt-5 max-w-2xl text-center font-display text-[clamp(2.2rem,4.6vw,3.6rem)] leading-[1.05] text-foreground"
        />
        <div className="mt-20 grid gap-px overflow-hidden rounded-[28px] border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-card p-9 transition-colors duration-700 hover:bg-surface"
            >
              <p.icon className="h-6 w-6 text-gold" aria-hidden />
              <h3 className="mt-7 font-display text-2xl text-foreground">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              <span className="absolute inset-x-9 bottom-0 h-px origin-left scale-x-0 bg-[image:var(--gradient-gold)] transition-transform duration-700 group-hover:scale-x-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DiningExperience() {
  return (
    <section className="relative overflow-hidden">
      <Parallax distance={90} className="h-[80vh] min-h-[540px]">
        <img
          src={images.interior}
          alt="The Maison Lumière dining room at dusk with arched windows and warm pendant lighting"
          width={1600}
          height={1104}
          loading="lazy"
          decoding="async"
          className="h-[calc(80vh+180px)] min-h-[720px] w-full object-cover"
        />
      </Parallax>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 px-6 pb-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="eyebrow">The experience</p>
          </Reveal>
          <WordReveal
            text="Three hours. One room. No hurry."
            className="mt-5 max-w-3xl font-display text-[clamp(2.2rem,5vw,4.2rem)] leading-[1.02] text-background"
          />
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-background/75">
              Service begins at seven with a glass in the courtyard and ends whenever the last
              conversation does.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Marquee() {
  const items = [
    "Seasonal tasting",
    "Wood fire",
    "Grower champagne",
    "Garden to pass",
    "Two Michelin stars",
    "Chef's counter",
  ];
  return (
    <div className="border-y border-border bg-surface py-6" aria-hidden>
      <div className="flex w-max marquee-track">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex">
            {items.map((item) => (
              <span
                key={`${dup}-${item}`}
                className="flex items-center gap-8 px-8 font-display text-2xl italic text-muted-foreground"
              >
                {item}
                <span className="h-1 w-1 rounded-full bg-gold" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Stats() {
  const stats = [
    { value: 15, suffix: "", label: "Years of service" },
    { value: 4000, suffix: "+", label: "Bottles in cellar" },
    { value: 120, suffix: "k", label: "Guests welcomed" },
    { value: 38, suffix: "", label: "Artisan producers" },
  ];
  return (
    <section className="bg-primary px-6 py-24 text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-12 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.1}>
            <div className="text-center">
              <p className="font-display text-[clamp(2.8rem,5vw,4rem)] leading-none">
                <Counter to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-4 font-accent text-[0.65rem] uppercase tracking-[0.24em] opacity-70">
                {s.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function ReserveCta() {
  return (
    <section id="reserve" className="noise relative overflow-hidden bg-warm px-6 py-36">
      <div
        aria-hidden
        className="aurora pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/25 blur-[150px]"
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="eyebrow">Reservations</p>
        </Reveal>
        <WordReveal
          text="A table is waiting to be written."
          className="mt-6 font-display text-[clamp(2.6rem,6vw,5rem)] leading-[1.02] text-foreground"
        />
        <Reveal delay={0.2}>
          <p className="mx-auto mt-7 max-w-md text-base leading-relaxed text-muted-foreground">
            Dinner Tuesday through Saturday. The Chef's Counter seats six and opens sixty days
            ahead.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-11 flex flex-wrap justify-center gap-4">
            <LuxeButton href="#contact">Book your evening</LuxeButton>
            <LuxeButton href="#menu" variant="ghost">
              Read the menu
            </LuxeButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
