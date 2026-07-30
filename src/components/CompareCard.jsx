import BrandScore from "./BrandScore.jsx";
import { money } from "../lib/format.js";

export default function CompareCard({ rows }) {
  return (
    <div className="card">
      <h2>Compare. Choose. Win.</h2>

      <table>
        <thead>
          <tr>
            <th>Domain</th>
            <th>Price</th>
            <th>Brand score</th>
          </tr>
        </thead>
        <tbody>
          {rows.slice(0, 5).map((row) => (
            <tr key={row.name}>
              <td>{row.name}</td>
              <td>{money(row.price)}</td>
              <td><BrandScore score={row.score} /></td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="btn-wide" type="button">
        View full comparison <span aria-hidden="true">→</span>
      </button>
    </div>
  );
}
