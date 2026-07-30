import Icon from "./Icons.jsx";
import SearchForm from "./SearchForm.jsx";
import PixelSquiggle from "./PixelSquiggle.jsx";

const TRUST = [
  { icon: "shield", label: "No hidden fees" },
  { icon: "lock", label: "Free privacy" },
  { icon: "bolt", label: "Instant setup" },
];

export default function Hero({ onSearch }) {
  return (
    <section className="hero">
      <div>
        <h1>Start your<br />search here</h1>
        <p>
          Find the perfect domain name.
          <br />
          Grab it before someone else does.
        </p>

        <SearchForm onSearch={onSearch} />

        <div className="trust">
          {TRUST.map(({ icon, label }) => (
            <span key={label}>
              <Icon name={icon} size={17} />
              {label}
            </span>
          ))}
        </div>
      </div>

      <div className="art">
        <PixelSquiggle fill="var(--acid)" withSpecks />
      </div>
    </section>
  );
}
