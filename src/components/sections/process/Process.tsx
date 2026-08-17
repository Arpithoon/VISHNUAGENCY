import "./Process.css";
import { ArrowUpRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Submit",
    description:
      "Tell us what happened. Share the relevant details so the case can be understood clearly from the start.",
  },
  {
    number: "02",
    title: "Review",
    description:
      "Your case is reviewed individually to understand the platform, issue and the right direction forward.",
  },
  {
    number: "03",
    title: "Strategy",
    description:
      "We identify the most appropriate approach based on the situation instead of forcing every case into the same process.",
  },
  {
    number: "04",
    title: "Resolution",
    description:
      "Once the direction is clear, we work through the case with focused, case-by-case assistance.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="process"
      aria-labelledby="process-title"
    >
      <div className="process__container">

        {/* HEADER */}

        <div className="process__header">

          <div className="process__eyebrow">
            <span className="process__eyebrow-line" />
            <span>04 / HOW IT WORKS</span>
          </div>

          <div className="process__intro">

            <h2 id="process-title">
              Clear process.
              <br />
              <span>No unnecessary steps.</span>
            </h2>

            <p>
              Every case starts with understanding the problem.
              From there, we determine the right direction and
              work through it case-by-case.
            </p>

          </div>

        </div>


        {/* STEPS */}

        <div className="process__steps">

          {steps.map((step, index) => (
            <article
              className="process__step"
              key={step.number}
            >

              <div className="process__step-top">

                <span className="process__number">
                  {step.number}
                </span>

                {index < steps.length - 1 && (
                  <span className="process__connector" />
                )}

              </div>


              <div className="process__step-content">

                <span className="process__step-label">
                  STEP {step.number}
                </span>

                <h3>
                  {step.title}
                </h3>

                <p>
                  {step.description}
                </p>

              </div>


              <div className="process__step-arrow">
                <ArrowUpRight
                  size={18}
                  strokeWidth={1.5}
                />
              </div>

            </article>
          ))}

        </div>


        {/* BOTTOM CTA */}

        <div className="process__bottom">

          <span className="process__bottom-label">
            READY TO DISCUSS YOUR CASE?
          </span>

          <a
            href="#assessment"
            className="process__cta"
          >
            <span>Discuss your case</span>

            <span className="process__cta-icon">
              <ArrowUpRight
                size={16}
                strokeWidth={1.7}
              />
            </span>
          </a>

        </div>

      </div>
    </section>
  );
}