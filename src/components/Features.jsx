import Icon from "./Icons.jsx";
import { FEATURES } from "../data/domains.js";

export default function Features() {
  return (
    <section className="features">
      {FEATURES.map(({ icon, title, body }) => (
        <div key={title} className="feat">
          <Icon name={icon} size={22} />
          <h4>{title}</h4>
          <p>{body}</p>
        </div>
      ))}
    </section>
  );
}
