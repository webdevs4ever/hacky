import { CELL, CURVE, ARROW, SPECKS, VIEW_BOX } from "../lib/squiggle.js";

/**
 * The signature graphic. Renders the same coordinate set at two scales —
 * `withSpecks` adds the floating squares used in the hero but not the band.
 */
export default function PixelSquiggle({ fill, withSpecks = false, className }) {
  return (
    <svg viewBox={VIEW_BOX} fill={fill} className={className} aria-hidden="true">
      {[...CURVE, ...ARROW].map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width={CELL} height={CELL} />
      ))}
      {withSpecks &&
        SPECKS.map(([x, y]) => (
          <rect key={`s-${x}-${y}`} x={x} y={y} width="9" height="9" opacity="0.55" />
        ))}
    </svg>
  );
}
