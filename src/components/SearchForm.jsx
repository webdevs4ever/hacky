import { useState } from "react";
import Icon from "./Icons.jsx";
import { normalizeLabel } from "../lib/format.js";

export default function SearchForm({ onSearch }) {
  const [value, setValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const label = normalizeLabel(value);
    if (label) onSearch(label);
  }

  return (
    <form className="search" onSubmit={handleSubmit}>
      <span className="ic">
        <Icon name="search" size={19} />
      </span>
      <label className="sr" htmlFor="domain-search">
        Search for a domain
      </label>
      <input
        id="domain-search"
        type="text"
        placeholder="Find your domain name"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="go" type="submit" aria-label="Search">
        →
      </button>
    </form>
  );
}
