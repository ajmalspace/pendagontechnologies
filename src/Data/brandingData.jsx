// ─────────────────────────────────────────────────────────────
//  brandingData.jsx — dummy projects for /portfolio/branding
//  Replace client, category, image and description with real work.
//  "size" controls the masonry tile height: "tall" | "short"
// ─────────────────────────────────────────────────────────────

import { AinAl, EcoGrid, Rassluxe } from "../assets/assets";

const brandingData = [
  {
    id: 1,
    client: "Ain Al Khaleej",
    category: "Full Brand Identity",
    description: "A complete visual identity for a UAE-based construction company, including logo, color palette, typography, and brand guidelines.",
    image: AinAl,
    size: "short",
  },
  {
    id: 2,
    client: "EcoGrid",
    category: "Rebrand",
    description: "A new visual identity and messaging framework for a renewable energy startup, designed to communicate innovation and sustainability.",
    image: EcoGrid,
    size: "short",
  },
  {
    id: 3,
    client: "Rass Luxe Perfumes",
    category: "Packaging & Identity",
    description: "Bottle typography, box design, and a scent-led visual language for a luxury fragrance line.",
    image: Rassluxe,
    size: "short",
  },
];

export default brandingData;
