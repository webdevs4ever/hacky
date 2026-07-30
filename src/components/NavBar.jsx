const LINKS = ["Domains", "Transfer", "Pricing", "Help"];

export default function NavBar({ cartCount }) {
  return (
    <nav>
      <a className="wordmark" href="/">hatch.</a>

      <div className="nav-links">
        {LINKS.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`}>{link}</a>
        ))}
      </div>

      <div className="nav-right">
        <a className="cart" href="#cart" aria-label={`Cart, ${cartCount} items`}>
          ⌗
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </a>
        <button className="btn-ghost" type="button">Sign in</button>
      </div>
    </nav>
  );
}
