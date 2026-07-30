import { filledBars } from "../lib/format.js";

const TOTAL = 10;

export default function BrandScore({ score }) {
  const on = filledBars(score, TOTAL);
  return (
    <div className="meter">
      <div className="bars">
        {Array.from({ length: TOTAL }, (_, i) => (
          <i key={i} className={i < on ? "on" : undefined} />
        ))}
      </div>
      <span className="score">{score}</span>
    </div>
  );
}
