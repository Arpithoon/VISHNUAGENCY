import "./Footer.css";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer__top">

        <div className="footer__brand">

          <div className="footer__logo">
            <img
              src="/tnt.jpg"
              alt="ACY Social Media Agency"
            />
          </div>

          <div className="footer__brand-text">
            <strong>ACY</strong>
            <span>Social Media Expert</span>
          </div>

        </div>

        <p className="footer__statement">
          Social media problems handled
          with experience, clarity and discretion.
        </p>

      </div>


      <div className="footer__middle">

        {/* NAVIGATION */}

        <div className="footer__column">

          <span className="footer__label">
            Navigate
          </span>

          <a href="#services">
            Services
          </a>

          <a href="#process">
            Process
          </a>

          <a href="#about">
            About
          </a>

          <a href="#faq">
            FAQ
          </a>

        </div>


        {/* CONTACT */}

        <div className="footer__column">

          <span className="footer__label">
            Start a conversation
          </span>

          <a href="#assessment">
            Discuss your case
            <ArrowUpRight size={14} />
          </a>

          <a
            href="https://t.me/Acetophenol"
            target="_blank"
            rel="noreferrer"
          >
            Telegram
            <ArrowUpRight size={14} />
          </a>

          <a
            href="https://t.me/whatAceDo"
            target="_blank"
            rel="noreferrer"
          >
            Community
            <ArrowUpRight size={14} />
          </a>

        </div>


        {/* STATUS */}

        <div className="footer__column footer__column--right">

          <span className="footer__label">
            Availability
          </span>

          <span className="footer__status">
            <i />
            Available for cases
          </span>

          <span className="footer__small">
            Case-by-case assistance
          </span>

        </div>

      </div>


      {/* BOTTOM */}

      <div className="footer__bottom">

        <span>
          © 2026 ACY
        </span>

        <span>
          Social Media Agency
        </span>

        <span>
          All rights reserved.
        </span>

      </div>

    </footer>
  );
}