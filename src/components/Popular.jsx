import { POPULAR_DOMAINS } from "../data/domains.js";
import { money } from "../lib/format.js";

export default function Popular() {
  return (
    <section>
      <div className="pop-head">
        <h2>Trending now</h2>
        <a href="#all-trending">Browse all <span aria-hidden="true">→</span></a>
      </div>

      <div className="pop">
        {POPULAR_DOMAINS.map(({ name, price }) => (
          <a key={name} className="pop-card" href={`#${name}`}>
            <b>{name}</b>
            <div className="pop-row">
              <span>/year</span>
              <em>{money(price)}</em>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
