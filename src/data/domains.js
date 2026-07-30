// Placeholder pricing. Replace with a real availability/pricing lookup later —
// see notes in README under "Wiring up real data".
export const ENDINGS = [
  { tld: "gg", price: 89, score: 94 },
  { tld: "com", price: 14.99, score: 80 },
  { tld: "ai", price: 79, score: 90 },
  { tld: "dev", price: 19, score: 88 },
  { tld: "io", price: 34, score: 82 },
  { tld: "co", price: 12, score: 76 },
];

export const POPULAR_EXTENSIONS = ["com", "ai", "gg", "io", "dev", "co"];

export const POPULAR_DOMAINS = [
  { name: "buildkit.gg", price: 89 },
  { name: "rover.dev", price: 24 },
  { name: "nextwave.io", price: 39 },
  { name: "pixelhub.ai", price: 129 },
];

export const FEATURES = [
  { icon: "globe", title: "Global reach", body: "Register domains from 300+ extensions." },
  { icon: "lock", title: "Privacy included", body: "Free WHOIS privacy to keep you protected." },
  { icon: "bolt", title: "Instant activation", body: "Your domain goes live in seconds." },
  { icon: "shield", title: "Built-in tools", body: "DNS, forwarding, email and more." },
];

export const FOOTER_COLUMNS = [
  { heading: "PRODUCT", links: ["Domains", "Pricing", "Features"] },
  { heading: "COMPANY", links: ["About us", "Careers", "Press"] },
  { heading: "SUPPORT", links: ["Help Center", "Contact", "Status"] },
];
