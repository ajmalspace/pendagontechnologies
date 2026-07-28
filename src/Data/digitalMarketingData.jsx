// ─────────────────────────────────────────────────────────────
//  digitalMarketingData.jsx — dummy case studies for /portfolio/digital-marketing
//  Replace client, industry, highlight, description and image with
//  your real campaign data. Images: drop into /public/portfolio-images/
// ─────────────────────────────────────────────────────────────

import { CokomiWebsite, Dreamflower, dreamflowerlogo, GoldenFuture } from "../assets/assets";

const digitalMarketingData = [
  {
    id: 1,
    client: "Retail & Fashion Brand",
    industry: "E-Commerce",
    highlightValue: "3.2x",
    highlightLabel: "Organic Traffic Growth",
    description:
      "A full-funnel SEO and social strategy that turned a seasonal storefront into a year-round search destination.",
    image: CokomiWebsite,
  },

  {
    id: 2,
    client: "Facility Management Company",
    industry: "B2B Services",
    highlightValue: "4x",
    highlightLabel: "Qualified Enquiries",
    description:
      "A content and LinkedIn strategy built around procurement cycles instead of generic B2B messaging.",
    image: GoldenFuture,
  },
  {
    id: 3,
    client: "Healthcare & Infertility Clinic",
    industry: "Healthcare",
    highlightValue: "#1",
    highlightLabel: "Page-One Rankings",
    description:
      "Technical SEO and a topic-cluster content plan moved priority keywords from page seven to page one.",
    image: Dreamflower,
  },
];

export default digitalMarketingData;
