import PixelSquiggle from "./PixelSquiggle.jsx";
import { POPULAR_EXTENSIONS } from "../data/domains.js";

export default function Band() {
  return (
    <section className="band">
      <div className="band-left">
        <div className="band-art">
          <PixelSquiggle fill="var(--ink)" />
        </div>
        <h2>Every ending.<br />One search.</h2>
      </div>

      <div className="band-right">
        <h3>Popular extensions</h3>
        <div className="chips">
          {POPULAR_EXTENSIONS.map((ext) => (
            <a key={ext} className="chip" href={`#${ext}`}>.{ext}</a>
          ))}
        </div>
        <a className="more" href="#all-extensions">
          See all 300+ <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
