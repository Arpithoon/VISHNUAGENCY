import { useState } from "react";
import "./ExperienceCard.css";

export function ExperienceCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleCard = () => {
    setIsFlipped((current) => !current);
  };

  return (
    <div className="experience-card-wrap">
      <button
        type="button"
        className={`experience-card ${
          isFlipped ? "experience-card--flipped" : ""
        }`}
        onClick={toggleCard}
        aria-label={
          isFlipped
            ? "Show Vishnu profile"
            : "Show Vishnu experience"
        }
        aria-pressed={isFlipped}
      >
        <div className="experience-card__inner">

          {/* =====================================================
              FRONT — VISHNU / ACY
              ===================================================== */}

          <div className="experience-card__face experience-card__front">
            <div className="experience-card__noise" />

            <div className="experience-card__top">
              <span className="experience-card__eyebrow">
                ACY / PROFILE
              </span>

              <span className="experience-card__number">
                01
              </span>
            </div>

            <div className="experience-card__logo-wrap">
  <img
    src="/tnt.jpg"
    alt="ACY Social Media Agency"
    className="experience-card__logo"
  />
</div>

            <div className="experience-card__identity">
              <span className="experience-card__label">
                SOCIAL MEDIA EXPERT
              </span>

              <h2 className="experience-card__name">
                Vishnu
              </h2>

              <p className="experience-card__role">
                Specialist in Instagram removals,
                recoveries and social media solutions.
              </p>
            </div>

            <div className="experience-card__bottom">
              <div className="experience-card__stat">
                <strong>3+</strong>
                <span>YEARS EXPERIENCE</span>
              </div>

              <span className="experience-card__flip-hint">
                CLICK TO EXPLORE
                <span aria-hidden="true">↗</span>
              </span>
            </div>
          </div>


          {/* =====================================================
              BACK — EXPERIENCE / EXPERTISE
              ===================================================== */}

          <div className="experience-card__face experience-card__back">
            <div className="experience-card__noise" />

            <div className="experience-card__top">
              <span className="experience-card__eyebrow">
                ACY / EXPERIENCE
              </span>

              <span className="experience-card__number">
                02
              </span>
            </div>

            <div className="experience-card__back-content">

              <span className="experience-card__label">
                TRACK RECORD
              </span>

              <h2 className="experience-card__back-title">
                Built through
                <br />
                real cases.
              </h2>

              <p className="experience-card__back-description">
                Expertise in IG removals & recoveries,
                with experience handling social media
                account-related cases.
              </p>


              {/* =================================================
                  STATS
                  ================================================= */}

              <div className="experience-card__stats">

                <div className="experience-card__stat-row">
                  <strong>3+</strong>

                  <div>
                    <span>YEARS</span>
                    <small>
                      Experience in the field
                    </small>
                  </div>
                </div>


                <div className="experience-card__stat-row">
                  <strong>1K+</strong>

                  <div>
                    <span>CUSTOMERS</span>
                    <small>
                      Services delivered
                    </small>
                  </div>
                </div>


                <div className="experience-card__stat-row">
                  <strong>$10K+</strong>

                  <div>
                    <span>CRYPTO</span>
                    <small>
                      Exchanged
                    </small>
                  </div>
                </div>

              </div>


              {/* =================================================
                  EXPERTISE
                  ================================================= */}

              <div className="experience-card__expertise">
                <span>EXPERTISE</span>

                <div className="experience-card__tags">
                  <span>IG REMOVALS</span>
                  <span>RECOVERIES</span>
                  <span>CRYPTO EXCHANGE</span>
                </div>
              </div>

            </div>


            {/* =================================================
                BOTTOM
                ================================================= */}

            <div className="experience-card__bottom">
              <span className="experience-card__flip-hint">
                CLICK TO RETURN
                <span aria-hidden="true">↙</span>
              </span>

              <span className="experience-card__status">
                ACY / VISHNU
              </span>
            </div>

          </div>

        </div>
      </button>
    </div>
  );
}