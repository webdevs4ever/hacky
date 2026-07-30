const PATHS = {
  shield: "M12 3l7 3v6c0 4-3 7-7 9-4-2-7-5-7-9V6l7-3z",
  lock: "M6 11V8a6 6 0 0112 0v3M5 11h14v10H5z",
  bolt: "M13 2L4 14h6l-1 8 9-12h-6l1-8z",
  globe: "M12 3a9 9 0 100 18 9 9 0 000-18zM3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18",
  search: "M11 4a7 7 0 100 14 7 7 0 000-14zM16 16l4 4",
};

export default function Icon({ name, size = 20 }) {
  const d = PATHS[name];
  if (!d) return null;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}
