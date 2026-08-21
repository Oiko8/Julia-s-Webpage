import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { site } from "../data/site.js";
import { nav } from "../data/nav.js";
import "./Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="site-header__inner container">
        <Link to="/" className="site-header__brand" onClick={close}>
          {site.name}
        </Link>

        <button
          className="site-header__toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menú</span>
          <span className="site-header__bars" aria-hidden="true" />
        </button>

        <nav
          id="primary-nav"
          className={`site-header__nav ${open ? "is-open" : ""}`}
          aria-label="Navegació principal"
        >
          {nav.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className="site-header__link"
              onClick={close}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}