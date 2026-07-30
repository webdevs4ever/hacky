import { money } from "../lib/format.js";

export default function AvailabilityCard({ lead, options, selected, onToggle, onAddToCart }) {
  return (
    <div className="card">
      <div className="avail">
        <div className="tick" aria-hidden="true">✓</div>
        <div>
          <p className="avail-name">{lead.name}</p>
          <p className="avail-sub">is available!</p>
        </div>
        <div className="avail-price">
          <b>{money(lead.price)}</b>
          <span>/year</span>
        </div>
      </div>

      <button className="btn-solid" type="button" onClick={() => onAddToCart(lead.name)}>
        Add to cart <span aria-hidden="true">→</span>
      </button>

      <p className="more-label">More endings</p>

      <div>
        {options.map((opt) => {
          const isSelected = selected.includes(opt.name);
          return (
            <div key={opt.name} className={isSelected ? "opt sel" : "opt"}>
              <button
                className="box"
                type="button"
                aria-pressed={isSelected}
                aria-label={`Select ${opt.name}`}
                onClick={() => onToggle(opt.name)}
              >
                {isSelected ? "✓" : ""}
              </button>
              <span className="opt-name">{opt.name}</span>
              <span className="opt-price">{opt.price.toFixed(2)}</span>
              <button
                className="plus"
                type="button"
                aria-label={`Add ${opt.name} to cart`}
                onClick={() => onAddToCart(opt.name)}
              >
                +
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
