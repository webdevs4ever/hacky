export function money(amount) {
  return `$${amount.toFixed(2)}`;
}

export function normalizeLabel(raw) {
  return raw
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/^-+|-+$/g, "");
}

export function filledBars(score, total = 10) {
  return Math.max(0, Math.min(total, Math.round((score / 100) * total)));
}
