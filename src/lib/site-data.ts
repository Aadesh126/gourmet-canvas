import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";
import interior from "@/assets/interior.jpg";
import chef from "@/assets/chef.jpg";
import hero from "@/assets/hero-dish.jpg";

export const images = { dish1, dish2, dish3, interior, chef, hero };

export const signatureDishes = [
  {
    name: "Hokkaido Scallop",
    note: "Saffron velouté · sea herbs · citrus oil",
    price: "48",
    image: dish1,
    tag: "Ocean",
  },
  {
    name: "Aged Wagyu A5",
    note: "Ember carrots · bone jus · smoked shallot",
    price: "96",
    image: dish2,
    tag: "Fire",
  },
  {
    name: "Noir Sphère",
    note: "Valrhona 72% · wild berry · gold leaf",
    price: "32",
    image: dish3,
    tag: "Sweet",
  },
];

export const menu = {
  Tasting: [
    ["Amuse — Oyster & Champagne Mignonette", "—"],
    ["Hokkaido Scallop, Saffron Velouté", "48"],
    ["Hand-rolled Tagliolini, White Truffle", "62"],
    ["Aged Wagyu A5, Bone Jus", "96"],
    ["Noir Sphère, Wild Berry", "32"],
  ],
  Ocean: [
    ["Line-caught Turbot, Beurre Blanc", "54"],
    ["Lobster Bisque, Cognac Cream", "38"],
    ["Caviar Service, Blini & Crème", "140"],
    ["Sea Bream Crudo, Yuzu Kosho", "34"],
  ],
  Garden: [
    ["Heirloom Tomato, Burrata di Andria", "28"],
    ["Charred Leek, Hazelnut Praline", "26"],
    ["Wild Mushroom Tart, Aged Comté", "30"],
    ["Winter Squash, Sage Brown Butter", "27"],
  ],
  Cellar: [
    ["Krug Grande Cuvée, Reims", "290"],
    ["Domaine Leflaive, Puligny-Montrachet", "340"],
    ["Barolo Riserva, Giacomo Conterno", "420"],
    ["Sommelier's Pairing, five glasses", "125"],
  ],
} as const;

export const testimonials = [
  {
    quote:
      "The most quietly confident dining room in the city. Every plate arrives like a sentence in a very good novel.",
    name: "Éloise Marchand",
    role: "Le Gourmet Review",
  },
  {
    quote:
      "Service so precise it disappears. Three hours passed and I noticed none of them.",
    name: "Daniel Okafor",
    role: "Culinary Quarterly",
  },
  {
    quote:
      "A restaurant that understands restraint. The wagyu is worth the flight alone.",
    name: "Mika Tanaka",
    role: "Atlas Dining Guide",
  },
];

export const awards = [
  { year: "2026", title: "Two Michelin Stars", body: "Retained for the fourth consecutive year." },
  { year: "2025", title: "World's 50 Best · No. 14", body: "Highest new entry in Europe." },
  { year: "2025", title: "Sommelier of the Year", body: "Awarded to Camille Arnaud." },
  { year: "2024", title: "Green Star · Sustainability", body: "For our zero-waste kitchen." },
];

export const faqs = [
  {
    q: "How far in advance should I reserve?",
    a: "Tables open sixty days ahead at 10:00 CET. Weekend service is typically claimed within the hour — the Chef's Counter, within minutes.",
  },
  {
    q: "Do you accommodate dietary requirements?",
    a: "Entirely. Share your requirements when booking and our kitchen composes a parallel tasting menu of equal length and ambition.",
  },
  {
    q: "Is there a dress code?",
    a: "Elegant. Jackets are appreciated in the evening but never required. Come as the best version of yourself.",
  },
  {
    q: "Can you host private events?",
    a: "The Cellar Room seats fourteen beneath four thousand bottles. Our events team will design the evening with you.",
  },
  {
    q: "Do you offer wine pairings?",
    a: "Five- and eight-glass pairings, plus a non-alcoholic pairing built from house ferments, infusions and cold-pressed juices.",
  },
];

export const navLinks = [
  { label: "Story", href: "#story" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Awards", href: "#awards" },
  { label: "Contact", href: "#contact" },
];
