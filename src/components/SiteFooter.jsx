import { FOOTER_COLUMNS } from "../data/domains.js";

const SOCIAL = [
  { label: "X", d: "M3 3l7.5 9.5L3.5 21h2.2l6-7 5.3 7H21l-7.8-10L20.5 3h-2.2l-5.6 6.6L7.5 3H3z" },
  { label: "GitHub", d: "M12 2a10 10 0 00-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.7.4-1.1.6-1.4-2.2-.2-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.6 0 0 .8-.3 2.7 1a9.4 9.4 0 015 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.6.6.7 1 1.6 1 2.7 0 3.9-2.4 4.8-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0012 2z" },
];

export default function SiteFooter() {
  return (
    <footer>
      <div className="foot">
        <div>
          <a className="wordmark" href="/">hatch.</a>
          <small>
            Domains without the upsell.
            <br />
            © {new Date().getFullYear()} Hatch. All rights reserved.
          </small>
        </div>

        {FOOTER_COLUMNS.map(({ heading, links }) => (
          <div key={heading}>
            <h5>{heading}</h5>
            <ul>
              {links.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}>{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="social">
          {SOCIAL.map(({ label, d }) => (
            <a key={label} href={`#${label.toLowerCase()}`} aria-label={label}>
              <svg width="19" height="19" viewBox="0 0 24 24" aria-hidden="true">
                <path d={d} />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
