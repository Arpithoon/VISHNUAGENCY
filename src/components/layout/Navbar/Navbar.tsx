import { useEffect, useRef, useState } from "react";
import type { MouseEvent as ReactMouseEvent } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  Menu,
  X,
  Send,
  Users,
} from "lucide-react";

import "./Navbar.css";

const navItems = [
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "Process",
    href: "#process",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "FAQ",
    href: "#faq",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [talkOpen, setTalkOpen] = useState(false);

  const talkRef = useRef<HTMLDivElement>(null);

  /* =====================================================
     SCROLL STATE
     ===================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =====================================================
     MOBILE MENU SCROLL LOCK
     ===================================================== */

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /* =====================================================
     CLOSE LET'S TALK
     ===================================================== */

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        talkRef.current &&
        !talkRef.current.contains(event.target as Node)
      ) {
        setTalkOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setTalkOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleOutsideClick
    );

    document.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );

      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  /* =====================================================
     HELPERS
     ===================================================== */

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const closeTalk = () => {
    setTalkOpen(false);
  };

  /* =====================================================
     CENTERED NAVIGATION
     ===================================================== */

  const handleNavClick = (
    event: ReactMouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (!href.startsWith("#")) {
      return;
    }

    const targetId = href.slice(1);
    const target = document.getElementById(targetId);

    if (!target) {
      return;
    }

    event.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });

    setMenuOpen(false);
    setTalkOpen(false);
  };

  /* =====================================================
     RENDER
     ===================================================== */

  return (
    <>
      {/* ===================================================
          DESKTOP NAVBAR
          =================================================== */}

      <header
        className={`navbar ${
          scrolled ? "navbar--scrolled" : ""
        }`}
      >
        <div className="navbar__inner">

          {/* BRAND */}

          <a
            href="#top"
            className="navbar__brand"
            aria-label="ACY Social Media Expert"
          >
            <img
              src="/tnt.jpg"
              alt="ACY"
              className="navbar__logo"
            />

            <span className="navbar__brand-name">
              ACY
              <span>
                Social Media Expert
              </span>
            </span>
          </a>


          {/* =================================================
              DESKTOP NAVIGATION
              ================================================= */}

          <nav
            className="navbar__links"
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="navbar__link"
                onClick={(event) =>
                  handleNavClick(
                    event,
                    item.href
                  )
                }
              >
                {item.label}
              </a>
            ))}
          </nav>


          {/* =================================================
              ACTIONS
              ================================================= */}

          <div className="navbar__actions">

            {/* =================================================
                LET'S TALK
                ================================================= */}

            <div
              ref={talkRef}
              className={`navbar__talk ${
                talkOpen
                  ? "navbar__talk--open"
                  : ""
              }`}
            >
              <button
                type="button"
                className="navbar__talk-trigger"
                aria-expanded={talkOpen}
                aria-haspopup="true"
                onClick={() =>
                  setTalkOpen(
                    (value) => !value
                  )
                }
              >
                <span>
                  Let's Talk
                </span>

                <ChevronDown
                  size={13}
                  strokeWidth={1.8}
                />
              </button>


              {/* TALK PANEL */}

              <div
                className="navbar__talk-panel"
                role="dialog"
                aria-label="Let's Talk"
              >

                <div className="navbar__talk-heading">
                  <span>
                    LET'S TALK
                  </span>

                  <span>
                    ACY / CONTACT
                  </span>
                </div>


                {/* DIRECT TELEGRAM */}

                <a
                  href="https://t.me/Acetophenol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="navbar__talk-item"
                  onClick={closeTalk}
                >
                  <span className="navbar__talk-icon">
                    <Send
                      size={15}
                      strokeWidth={1.7}
                    />
                  </span>

                  <span className="navbar__talk-copy">
                    <strong>
                      Telegram
                    </strong>

                    <small>
                      @Acetophenol · Direct contact
                    </small>
                  </span>

                  <ArrowUpRight
                    className="navbar__talk-arrow"
                    size={16}
                    strokeWidth={1.7}
                  />
                </a>


                {/* COMMUNITY */}

                <a
                  href="https://t.me/whatAceDo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="navbar__talk-item"
                  onClick={closeTalk}
                >
                  <span className="navbar__talk-icon">
                    <Users
                      size={15}
                      strokeWidth={1.7}
                    />
                  </span>

                  <span className="navbar__talk-copy">
                    <strong>
                      Community
                    </strong>

                    <small>
                      whatAceDo · Join the community
                    </small>
                  </span>

                  <ArrowUpRight
                    className="navbar__talk-arrow"
                    size={16}
                    strokeWidth={1.7}
                  />
                </a>


                {/* INSTAGRAM PLACEHOLDER */}

                <div className="navbar__talk-footer">
                  <span>
                    INSTAGRAM
                  </span>

                  <span>
                    COMING SOON
                  </span>
                </div>

              </div>
            </div>


            {/* =================================================
                START A CASE
                ================================================= */}

            <a
              href="#contact"
              className="navbar__cta"
              onClick={(event) =>
                handleNavClick(
                  event,
                  "#contact"
                )
              }
            >
              <span>
                Start a Case
              </span>

              <ArrowUpRight
                size={14}
                strokeWidth={1.8}
              />
            </a>


            {/* =================================================
                MOBILE BUTTON
                ================================================= */}

            <button
              type="button"
              className="navbar__menu-button"
              aria-label={
                menuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={menuOpen}
              onClick={() =>
                setMenuOpen(
                  (value) => !value
                )
              }
            >
              {menuOpen ? (
                <X
                  size={19}
                  strokeWidth={1.8}
                />
              ) : (
                <Menu
                  size={19}
                  strokeWidth={1.8}
                />
              )}
            </button>

          </div>

        </div>
      </header>


      {/* =====================================================
          MOBILE MENU
          ===================================================== */}

      <div
        className={`mobile-menu ${
          menuOpen
            ? "mobile-menu--open"
            : ""
        }`}
      >

        <nav
          className="mobile-menu__nav"
          aria-label="Mobile navigation"
        >

          {/* MAIN LINKS */}

          {navItems.map(
            (item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="mobile-menu__link"
                style={{
                  transitionDelay:
                    menuOpen
                      ? `${index * 70}ms`
                      : "0ms",
                }}
                onClick={(event) =>
                  handleNavClick(
                    event,
                    item.href
                  )
                }
              >
                <span className="mobile-menu__number">
                  0{index + 1}
                </span>

                <span>
                  {item.label}
                </span>

                <ArrowUpRight
                  size={20}
                  strokeWidth={1.6}
                />
              </a>
            )
          )}


          {/* =================================================
              MOBILE LET'S TALK
              ================================================= */}

          <div className="mobile-menu__talk">

            <div className="mobile-menu__talk-label">
              LET'S TALK
            </div>


            {/* TELEGRAM */}

            <a
              href="https://t.me/Acetophenol"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-menu__talk-item"
              onClick={closeMenu}
            >
              <Send
                size={17}
                strokeWidth={1.7}
              />

              <span>
                <strong>
                  Telegram
                </strong>

                <small>
                  @Acetophenol
                </small>
              </span>

              <ArrowUpRight
                size={18}
                strokeWidth={1.7}
              />
            </a>


            {/* COMMUNITY */}

            <a
              href="https://t.me/whatAceDo"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-menu__talk-item"
              onClick={closeMenu}
            >
              <Users
                size={17}
                strokeWidth={1.7}
              />

              <span>
                <strong>
                  Community
                </strong>

                <small>
                  whatAceDo
                </small>
              </span>

              <ArrowUpRight
                size={18}
                strokeWidth={1.7}
              />
            </a>

          </div>


          {/* =================================================
              MOBILE CTA
              ================================================= */}

          <a
            href="#contact"
            className="mobile-menu__cta"
            onClick={(event) =>
              handleNavClick(
                event,
                "#contact"
              )
            }
          >
            <span>
              Start a Case
            </span>

            <ArrowUpRight
              size={18}
              strokeWidth={1.8}
            />
          </a>

        </nav>

      </div>
    </>
  );
}