import { useState } from "react";
import { ArrowDown } from "lucide-react";
import "./FAQ.css";

const questions = [
  {
    question: "What platforms do you handle?",
    answer:
      "We provide assistance across platforms including Instagram, Facebook, Snapchat, WhatsApp, Telegram and YouTube.",
  },
  {
    question: "What happens after I submit my case?",
    answer:
      "Your case details are reviewed first. The appropriate direction is then determined based on the platform and situation.",
  },
  {
    question: "Can every account be recovered?",
    answer:
      "No case can be guaranteed in advance. Each situation is different and is assessed individually before deciding the appropriate approach.",
  },
  {
    question: "How do I discuss my case?",
    answer:
      "Use the Discuss Your Case form and provide your contact details along with a brief description of what happened.",
  },
  {
    question: "How long does a case take?",
    answer:
      "Timelines vary depending on the platform, issue and complexity of the case. You will receive more relevant guidance after the case is reviewed.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="faq"
      aria-labelledby="faq-title"
    >
      <div className="faq__container">

        <div className="faq__eyebrow">
          <span className="faq__line" />
          <span>04 / FAQ</span>
        </div>

        <div className="faq__header">
          <h2 id="faq-title">
            Questions,
            <br />
            <span>answered clearly.</span>
          </h2>

          <p>
            Everything you need to know before
            starting a case.
          </p>
        </div>

        <div className="faq__list">

          {questions.map((item, index) => {
            const isOpen = open === index;

            return (
              <div
                className={`faq__item ${
                  isOpen ? "faq__item--open" : ""
                }`}
                key={item.question}
              >

                <button
                  type="button"
                  className="faq__question"
                  onClick={() =>
                    setOpen(isOpen ? null : index)
                  }
                  aria-expanded={isOpen}
                >
                  <span className="faq__number">
                    0{index + 1}
                  </span>

                  <span className="faq__title">
                    {item.question}
                  </span>

                  <span className="faq__icon">
                    <ArrowDown
                      size={17}
                      strokeWidth={1.5}
                    />
                  </span>
                </button>

                <div className="faq__answer">
                  <p>{item.answer}</p>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}