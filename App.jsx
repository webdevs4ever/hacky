import { useMemo, useState } from "react";
import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import Band from "./components/Band.jsx";
import CompareCard from "./components/CompareCard.jsx";
import AvailabilityCard from "./components/AvailabilityCard.jsx";
import Features from "./components/Features.jsx";
import Popular from "./components/Popular.jsx";
import SiteFooter from "./components/SiteFooter.jsx";
import { ENDINGS } from "./data/domains.js";

export default function App() {
  const [label, setLabel] = useState("hacky");
  const [selected, setSelected] = useState(["hacky.io"]);
  const [cart, setCart] = useState([]);

  // One derived list feeds both cards, so the table and the endings panel
  // can never disagree about price.
  const rows = useMemo(
    () => ENDINGS.map((e) => ({ name: `${label}.${e.tld}`, price: e.price, score: e.score })),
    [label]
  );

  function handleSearch(nextLabel) {
    setLabel(nextLabel);
    setSelected([]);
  }

  function toggleSelected(name) {
    setSelected((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  }

  function addToCart(name) {
    setCart((prev) => (prev.includes(name) ? prev : [...prev, name]));
  }

  return (
    <div className="wrap">
      <NavBar cartCount={cart.length} />
      <Hero onSearch={handleSearch} />
      <Band />

      <section className="cols">
        <CompareCard rows={rows} />
        <AvailabilityCard
          lead={rows[0]}
          options={rows.slice(1)}
          selected={selected}
          onToggle={toggleSelected}
          onAddToCart={addToCart}
        />
      </section>

      <Features />
      <Popular />
      <SiteFooter />
    </div>
  );
}
