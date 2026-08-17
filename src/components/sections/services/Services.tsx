import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";

import ServiceDoor, { type ServiceDoorData } from "./ServiceDoor";

import "./Services.css";

/* =========================================================
   SERVICE DATA
   ========================================================= */

const services: ServiceDoorData[] = [
  {
    number: "01",
    category: "ACCOUNT ACCESS",
    title: "Recover",
    shortDescription:
      "Structured assistance for difficult account access and recovery situations.",
    description:
      "When normal recovery routes aren't resolving the problem, we help assess the situation, organize the relevant information and navigate the appropriate platform recovery process.",
    services: [
      "Account recovery assistance",
      "Login & access issues",
      "Recovery workflow guidance",
      "Account ownership support",
    ],
    platforms: ["Instagram", "Facebook", "YouTube", "Other platforms"],
    accent: "#ff7a00",
  },

  {
    number: "02",
    category: "ACCOUNT RESTORATION",
    title: "Restore",
    shortDescription:
      "Support for disabled, suspended and removed account situations.",
    description:
      "Account restrictions can be confusing and difficult to navigate. We help understand the situation and prepare the appropriate information for available platform review and appeal processes.",
    services: [
      "Disabled account assistance",
      "Suspended account support",
      "Account removal issues",
      "Appeal process guidance",
    ],
    platforms: ["Instagram", "Facebook", "YouTube", "Other platforms"],
    accent: "#e8a838",
  },

  {
    number: "03",
    category: "PLATFORM VERIFICATION",
    title: "Verify",
    shortDescription:
      "Professional guidance around verification and platform presence.",
    description:
      "We help clients understand platform verification requirements, prepare their profiles and organize the information needed for a stronger, legitimate verification application.",
    services: [
      "Verification guidance",
      "Profile preparation",
      "Application assistance",
      "Presence optimization",
    ],
    platforms: ["Instagram", "Facebook", "YouTube", "Other platforms"],
    accent: "#22d3ee",
  },

  {
    number: "04",
    category: "ACCOUNT SECURITY",
    title: "Secure",
    shortDescription:
      "Support for compromised accounts and stronger account security.",
    description:
      "If an account has been compromised or its security needs attention, we help assess the situation and work through the appropriate recovery and security steps.",
    services: [
      "Compromised account support",
      "Account security guidance",
      "Access recovery",
      "Security review",
    ],
    platforms: ["Instagram", "Facebook", "WhatsApp", "Telegram"],
    accent: "#a78bfa",
  },

  {
    number: "05",
    category: "SOCIAL MEDIA GROWTH",
    title: "Grow",
    shortDescription:
      "Strategies designed to build a stronger and more effective online presence.",
    description:
      "Growth is more than numbers. We focus on positioning, content direction and audience strategy to help create a stronger and more consistent social presence.",
    services: [
      "Growth strategy",
      "Online presence optimization",
      "Content direction",
      "Audience strategy",
    ],
    platforms: ["Instagram", "Facebook", "YouTube", "Snapchat"],
    accent: "#4ade80",
  },

  {
    number: "06",
    category: "SOCIAL MEDIA MANAGEMENT",
    title: "Manage",
    shortDescription:
      "Social media management and SMM support across major platforms.",
    description:
      "For clients who need ongoing support, we provide structured social media management focused on consistency, positioning, platform strategy and day-to-day account operations.",
    services: [
      "Social media management",
      "SMM services",
      "Account management",
      "Platform strategy",
    ],
    platforms: [
      "Instagram",
      "Facebook",
      "YouTube",
      "Snapchat",
      "WhatsApp",
      "Telegram",
    ],
    accent: "#d4af37",
  },
];

/* =========================================================
   PROOF DATA
   ========================================================= */

const proofImages: Record<string, string[]> = {
  "01": [
    "/RECOVERY1.jpg",
    "/RECOVERY2.jpg",
    "/RECOVERY3.jpg",
    "/RECOVERY4.jpg",
  ],

  "02": [
    "/RESTORE1.jpg",
    "/RESTORE2.jpg",
    "/RESTORE3.jpg",
    "/RESTORE4.jpg",
  ],

  "03": [
    "/VERIFY1.jpg",
    "/VERIFY2.jpg",
    "/VERIFY3.jpg",
    "/VERIFY4.jpg",
  ],

  "04": [],
  "05": [],
  "06": [],
};

/* =========================================================
   COMPONENT
   ========================================================= */

export default function Services() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [openService, setOpenService] = useState<string | null>(null);
  const [visibleDoors, setVisibleDoors] = useState<number[]>([]);

  /* =======================================================
     REVEAL OBSERVER
     ======================================================= */

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const doors = Array.from(
      section.querySelectorAll<HTMLElement>(".service-door")
    );

    if (!doors.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const index = doors.indexOf(entry.target as HTMLElement);

          if (index === -1) {
            return;
          }

          setVisibleDoors((current) =>
            current.includes(index) ? current : [...current, index]
          );

          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    doors.forEach((door) => observer.observe(door));

    return () => observer.disconnect();
  }, []);

  /* =======================================================
     SELECTION
     ======================================================= */

  const handleToggle = (number: string) => {
    setOpenService((current) =>
      current === number ? null : number
    );
  };

  const closeDetail = () => {
    setOpenService(null);
  };

  const activeService = services.find(
    (service) => service.number === openService
  );

  const activeProofs = activeService
    ? proofImages[activeService.number] ?? []
    : [];

  return (
    <section
      ref={sectionRef}
      id="services"
      className="services"
      aria-labelledby="services-title"
    >
      {/* ===================================================
          BACKGROUND ATMOSPHERE
          =================================================== */}

      <div
        className="services__background"
        aria-hidden="true"
      >
        <div className="services__glow" />
        <div className="services__grid" />
      </div>

      <div className="services__container">

        {/* =================================================
            SECTION HEADER
            ================================================= */}

        <header className="services__header">

          <div className="services__eyebrow">

            <span className="services__eyebrow-line" />

            <span>02 / Services</span>

            <span className="services__eyebrow-status">

              <span className="services__status-dot" />

              Available

            </span>

          </div>

          <div className="services__heading-row">

            <h2
              id="services-title"
              className="services__title"
            >
              Problems are
              <span> different.</span>
              <br />
              So are the
              <span> solutions.</span>
            </h2>

            <div className="services__intro">

              <p>
                ACY provides specialist assistance across
                account access, restoration, verification,
                security and social media management — with
                particular expertise in Instagram removals
                &amp; recoveries.
              </p>

            </div>

          </div>

          <div className="services__meta">

            <span>
              {String(services.length).padStart(2, "0")}{" "}
              service categories
            </span>

            <span className="services__meta-line" />

            <span>Select a door to explore</span>

          </div>

        </header>

        {/* =================================================
            SERVICE DOOR GALLERY
            ================================================= */}

        <ul
          className="services__gallery"
          role="list"
        >
          {services.map((service, index) => (

            <li
              key={service.number}
              className={[
                "services__door-slot",

                visibleDoors.includes(index)
                  ? "services__door-slot--visible"
                  : "",
              ].join(" ")}
              style={
                {
                  "--door-index": index,
                } as React.CSSProperties
              }
            >

              <ServiceDoor
                service={service}
                isOpen={
                  openService === service.number
                }
                onToggle={() =>
                  handleToggle(service.number)
                }
              />

            </li>

          ))}
        </ul>

        {/* =================================================
            SHARED DETAIL STAGE
            ================================================= */}

        <div
          id="services-detail-panel"
          className={[
            "services__detail",
            activeService
              ? "services__detail--open"
              : "",
          ].join(" ")}
          aria-live="polite"
        >

          {activeService ? (

            <div className="services__detail-inner">

              {/* =================================================
                  DETAIL HEADER
                  ================================================= */}

              <div className="services__detail-head">

                <span className="services__detail-number">
                  {activeService.number}
                </span>

                <div className="services__detail-heading">

                  <span className="services__detail-category">
                    {activeService.category}
                  </span>

                  <h3 className="services__detail-title">
                    {activeService.title}
                  </h3>

                </div>

                <button
                  type="button"
                  className="services__detail-close"
                  onClick={closeDetail}
                  aria-label="Close service details"
                >
                  <X
                    size={16}
                    strokeWidth={1.5}
                  />
                </button>

              </div>

              {/* =================================================
                  DETAIL BODY
                  ================================================= */}

              <div className="services__detail-body">

                {/* OVERVIEW */}

                <div className="services__detail-overview">

                  <p>
                    {activeService.description}
                  </p>

                  <a
                    href="#contact"
                    className="services__detail-cta"
                  >
                    <span>
                      Discuss your case
                    </span>

                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.5}
                    />
                  </a>

                </div>

                {/* SERVICES */}

                <div className="services__detail-column">

                  <span className="services__detail-label">
                    What we can help with
                  </span>

                  <ul className="services__detail-list">

                    {activeService.services.map(
                      (item, index) => (

                        <li key={item}>

                          <span className="services__detail-list-index">
                            {String(index + 1).padStart(
                              2,
                              "0"
                            )}
                          </span>

                          <span>{item}</span>

                        </li>

                      )
                    )}

                  </ul>

                </div>

                {/* PLATFORMS */}

                <div className="services__detail-column">

                  <span className="services__detail-label">
                    Platforms
                  </span>

                  <div className="services__detail-platforms">

                    {activeService.platforms.map(
                      (platform) => (

                        <span
                          key={platform}
                          className="services__detail-platform"
                        >
                          {platform}
                        </span>

                      )
                    )}

                  </div>

                </div>

              </div>

              {/* =================================================
                  PROOF SECTION
                  ================================================= */}

              <div className="services__proof">

                <div className="services__proof-header">

                  <div>

                    <span className="services__detail-label">
                      Proof
                    </span>

                    <h4 className="services__proof-title">
                      {activeProofs.length > 0
                        ? "Previous case results."
                        : "Proof coming soon."}
                    </h4>

                  </div>

                  <span className="services__proof-count">
                    {activeProofs.length > 0
                      ? `${String(
                          activeProofs.length
                        ).padStart(2, "0")} PROOFS`
                      : "COMING SOON"}
                  </span>

                </div>

                {activeProofs.length > 0 ? (

                  <div className="services__proof-grid">

                    {activeProofs.map(
                      (image, index) => (

                        <figure
                          className="services__proof-card"
                          key={image}
                        >

                        <a
  href={image}
  target="_blank"
  rel="noopener noreferrer"
  className="services__proof-image"
>
  <img
    src={image}
    alt={`${activeService.title} proof ${
      index + 1
    }`}
    loading="lazy"
  />
</a>
                          <figcaption>
                            <span>
                              PROOF{" "}
                              {String(index + 1).padStart(
                                2,
                                "0"
                              )}
                            </span>
                          </figcaption>

                        </figure>

                      )
                    )}

                  </div>

                ) : (

                  <div className="services__proof-coming">

                    <span className="services__proof-coming-number">
                      —
                    </span>

                    <div>

                      <strong>
                        Coming soon
                      </strong>

                      <p>
                        Case proof for this service
                        will be added here.
                      </p>

                    </div>

                  </div>

                )}

              </div>

            </div>

          ) : null}

        </div>

        {/* =================================================
            BOTTOM CTA
            ================================================= */}

        <div
          id="assessment"
          className="services__footer"
        >

          <div className="services__footer-number">
            02
          </div>

          <div className="services__footer-copy">

            <span className="services__footer-label">
              Something else?
            </span>

            <p>
              Not every case fits neatly into a
              category. Tell us what you're dealing
              with and we'll help identify the right
              direction — including crypto exchange
              support (exchanged over $10k).
            </p>

          </div>

          <a
            href="#contact"
            className="services__footer-button"
          >

            <span>
              Discuss your case
            </span>

            <span className="services__footer-button-icon">

              <ArrowUpRight
                size={16}
                strokeWidth={1.6}
              />

            </span>

          </a>

        </div>

      </div>

    </section>
  );
}