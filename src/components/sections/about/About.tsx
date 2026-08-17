import "./About.css";

const stats = [
  {
    value: "3+",
    label: "Years",
    text: "Experience in the field",
  },
  {
    value: "1K+",
    label: "Customers",
    text: "Services delivered",
  },
  {
    value: "10K+",
    label: "Crypto",
    text: "Exchanged",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="about"
      aria-labelledby="about-title"
    >
      <div className="about__container">

        <div className="about__eyebrow">
          <span className="about__line" />
          <span>03 / ABOUT</span>
        </div>

        <div className="about__grid">

          <div className="about__heading">
            <h2 id="about-title">
              Experience built
              <br />
              <span>through real cases.</span>
            </h2>
          </div>

          <div className="about__content">

            <p className="about__lead">
              Vishnu has spent 3+ years working across
              account recovery, removals, verification and
              social media solutions.
            </p>

            <p className="about__text">
              The approach is simple: understand the case,
              identify the right direction and provide
              focused assistance without unnecessary steps.
            </p>

            <div className="about__stats">
              {stats.map((stat) => (
                <div className="about__stat" key={stat.label}>
                  <strong>{stat.value}</strong>

                  <div>
                    <span>{stat.label}</span>
                    <small>{stat.text}</small>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}