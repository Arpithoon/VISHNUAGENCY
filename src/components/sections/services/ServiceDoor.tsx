import {
  ArrowUpRight,
  BadgeCheck,
  LayoutGrid,
  Lock,
  ShieldCheck,
  TrendingUp,
  Unlock,
} from "lucide-react";
import {
  useRef,
  useState,
  type ComponentType,
  type CSSProperties,
  type PointerEvent,
} from "react";

import "./ServiceDoor.css";

interface DoorIconProps {
  size?: number;
  strokeWidth?: number;
  className?: string;
}

export interface ServiceDoorData {
  number: string;
  category: string;
  title: string;
  shortDescription: string;
  description: string;
  services: string[];
  platforms: string[];
  accent?: string;
}

interface ServiceDoorProps {
  service: ServiceDoorData;
  isOpen: boolean;
  onToggle: () => void;
}

interface DoorStyle extends CSSProperties {
  "--door-mx"?: string;
  "--door-my"?: string;
  "--door-rx"?: string;
  "--door-ry"?: string;
  "--door-accent"?: string;
}

/* =========================================================
   CENTRAL SYMBOL — mapped by service number
   ========================================================= */

const DOOR_ICONS: Record<string, ComponentType<DoorIconProps>> = {
  "01": Unlock,
  "02": ShieldCheck,
  "03": BadgeCheck,
  "04": Lock,
  "05": TrendingUp,
  "06": LayoutGrid,
};

export default function ServiceDoor({
  service,
  isOpen,
  onToggle,
}: ServiceDoorProps) {
  const rootRef = useRef<HTMLButtonElement | null>(null);

  const [hovered, setHovered] = useState(false);

  const [motion, setMotion] = useState<DoorStyle>({
    "--door-mx": "0px",
    "--door-my": "0px",
    "--door-rx": "0deg",
    "--door-ry": "0deg",
    "--door-accent": service.accent ?? "#ff7a00",
  });

  const Symbol = DOOR_ICONS[service.number] ?? Unlock;

  /* =======================================================
     POINTER / 3D PARALLAX
     ======================================================= */

  const handlePointerMove = (event: PointerEvent<HTMLButtonElement>) => {
    if (event.pointerType === "touch" || !rootRef.current) {
      return;
    }

    const rect = rootRef.current.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    setMotion((current) => ({
      ...current,
      "--door-mx": `${x * 6}px`,
      "--door-my": `${y * 5}px`,
      "--door-rx": `${y * -4}deg`,
      "--door-ry": `${x * 5}deg`,
    }));
  };

  const handlePointerEnter = (event: PointerEvent<HTMLButtonElement>) => {
    if (event.pointerType !== "touch") {
      setHovered(true);
    }
  };

  const handlePointerLeave = () => {
    setHovered(false);

    setMotion((current) => ({
      ...current,
      "--door-mx": "0px",
      "--door-my": "0px",
      "--door-rx": "0deg",
      "--door-ry": "0deg",
    }));
  };

  /* =======================================================
     RENDER
     ======================================================= */

  return (
    <button
      ref={rootRef}
      type="button"
      className={[
        "service-door",
        isOpen ? "service-door--active" : "",
        hovered ? "service-door--hovered" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      style={motion}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onClick={onToggle}
      aria-expanded={isOpen}
      aria-controls="services-detail-panel"
    >
      {/* ===================================================
          FRAME
          =================================================== */}

      <span className="service-door__frame" aria-hidden="true">
        <span className="service-door__interior">
          <span className="service-door__interior-glow" />

          <Symbol
            className="service-door__interior-icon"
            size={22}
            strokeWidth={1.3}
          />

          <span className="service-door__interior-text">
            {service.shortDescription}
          </span>

          <span className="service-door__interior-hint">
            <span>Details below</span>
            <ArrowUpRight size={11} strokeWidth={1.6} />
          </span>
        </span>

        <span className="service-door__panel">
          <span className="service-door__glass" />
          <span className="service-door__grid-texture" />
          <span className="service-door__ambient" />
          <span className="service-door__light-edge" />

          {/* -----------------------------------------------
              TOP ROW — brand + number
              ----------------------------------------------- */}

          <span className="service-door__top">
            <span className="service-door__brand">ACY</span>
            <span className="service-door__number">{service.number}</span>
          </span>

          {/* -----------------------------------------------
              CENTRAL SYMBOL
              ----------------------------------------------- */}

          <span className="service-door__symbol">
            <span className="service-door__symbol-ring" />
            <Symbol
              className="service-door__symbol-icon"
              size={20}
              strokeWidth={1.4}
            />
          </span>

          {/* -----------------------------------------------
              VERTICAL CATEGORY PLAQUE
              ----------------------------------------------- */}

          <span className="service-door__plaque">{service.category}</span>

          {/* -----------------------------------------------
              HANDLE
              ----------------------------------------------- */}

          <span className="service-door__handle">
            <span className="service-door__handle-bar" />
            <span className="service-door__handle-dot" />
          </span>
        </span>

        <span className="service-door__depth" />
        <span className="service-door__shadow" />
      </span>

      {/* ===================================================
          TITLE
          =================================================== */}

      <span className="service-door__footer">
        <span className="service-door__title">{service.title}</span>

        <span className="service-door__action">
          <ArrowUpRight size={13} strokeWidth={1.6} />
        </span>
      </span>

      <span className="service-door__sr-only">
        {service.category} — {isOpen ? "showing details" : "view details"}
      </span>
    </button>
  );
}