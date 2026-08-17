import "./hero.css";
import { ExperienceCard } from "./ExperienceCard";

const flakes = Array.from({ length: 34 }, (_, index) => ({
  id: index,
  left: `${(index * 29) % 100}%`,
  size: `${2 + (index % 3)}px`,
  delay: `${(index * 0.43) % 8}s`,
  duration: `${7 + (index % 6)}s`,
  drift: `${-45 + ((index * 17) % 90)}px`,
  opacity: `${0.18 + (index % 5) * 0.07}`,
}));

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">

      {/* =====================================================
          ATMOSPHERE
          ===================================================== */}

      <div className="hero__atmosphere" aria-hidden="true">
        <div className="hero__glow hero__glow--primary" />
        <div className="hero__glow hero__glow--secondary" />
        <div className="hero__grid" />
        <div className="hero__noise" />

        <div className="hero__flakes">
          {flakes.map((flake) => (
            <span
              key={flake.id}
              className="hero__flake"
              style={{
                left: flake.left,
                width: flake.size,
                height: flake.size,
                opacity: flake.opacity,
                animationDelay: flake.delay,
                animationDuration: flake.duration,
                ["--flake-drift" as string]: flake.drift,
              }}
            />
          ))}
        </div>
      </div>


      {/* =====================================================
          HERO CONTENT
          ===================================================== */}

      <div className="hero__container">

        {/* ===================================================
            EYEBROW
            =================================================== */}

        <div className="hero__eyebrow hero__reveal">
          <span className="hero__eyebrow-line" />

          <span>
            Social media solutions
          </span>

          <span className="hero__status">
            <span className="hero__status-dot" />
            Available for cases
          </span>
        </div>


        {/* ===================================================
            HEADLINE
            =================================================== */}

        <div className="hero__headline-wrap">
          <h1
            id="hero-title"
            className="hero__headline"
          >
            <span className="hero__headline-line hero__headline-line--one">
              Your social
            </span>

            <span className="hero__headline-line hero__headline-line--two">
              presence.
            </span>

            <span className="hero__headline-line hero__headline-line--three">
              <span className="hero__headline-accent">
                handled.
              </span>
            </span>
          </h1>
        </div>


        {/* ===================================================
            HERO BOTTOM
            =================================================== */}

        <div className="hero__bottom hero__reveal hero__reveal--delayed">

          <p className="hero__description">
            Account recovery, verification, platform issues,
            social media management and growth — handled with
            a strategic, professional approach.
          </p>


          <div className="hero__actions">

            <a
              href="#assessment"
              className="hero__button hero__button--primary"
            >
              <span>
                Start a Case
              </span>

              <span className="hero__button-arrow">
                ↗
              </span>
            </a>


            <a
              href="#services"
              className="hero__button hero__button--secondary"
            >
              <span>
                Explore Services
              </span>

              <span className="hero__button-arrow">
                ↓
              </span>
            </a>

          </div>

        </div>


        {/* ===================================================
            TRUST STRIP
            =================================================== */}

        <div className="hero__trust hero__reveal hero__reveal--slow">

          <span className="hero__trust-label">
            Support across
          </span>


          <div className="hero__platforms">

            <span>
              Instagram
            </span>

            <i />

            <span>
              Facebook
            </span>

            <i />

            <span>
              Snapchat
            </span>

            <i />

            <span>
              WhatsApp
            </span>

            <i />

            <span>
              Telegram
            </span>

            <i />

            <span>
              YouTube
            </span>

          </div>

        </div>


        {/* ===================================================
            EXPERIENCE CARD
            =================================================== */}

        <div className="hero__visual">
          <ExperienceCard />
        </div>

      </div>


      {/* =====================================================
          SCROLL INDICATOR
          ===================================================== */}

      <a
        href="#services"
        className="hero__scroll"
        aria-label="Scroll to services"
      >
        <span className="hero__scroll-line" />

        <span>
          Scroll to explore
        </span>
      </a>


      {/* =====================================================
          CORNER INDEX
          ===================================================== */}

      <div
        className="hero__index"
        aria-hidden="true"
      >
        <span>
          01
        </span>

        <span>
          /
        </span>

        <span>
          06
        </span>
      </div>

    </section>
  );
}