import { useState } from "react";
import type { FormEvent } from "react";
import "./Contact.css";

type FormData = {
  name: string;
  email: string;
  platform: string;
  caseType: string;
  message: string;
  telegram: string
};

const initialForm: FormData = {
  name: "",
  email: "",
  telegram: "",
  platform: "",
  caseType: "",
  message: "",
};

export function Contact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const updateField = (
    field: keyof FormData,
    value: string
  ) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

 const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  if (
    !form.name.trim() ||
    !form.email.trim() ||
    !form.caseType ||
    !form.message.trim()
  ) {
    return;
  }

  try {
    const response = await fetch(
      "https://vishnuji44.app.n8n.cloud/webhook-test/acy-contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          telegram: form.telegram,
          platform: form.platform,
          caseType: form.caseType,
          message: form.message,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to submit case");
    }

    setSubmitted(true);
  } catch (error) {
    console.error("Case submission failed:", error);
    alert("Something went wrong. Please try again.");
  }
};

  return (
    <section
  id="contact"
  className="contact"
    >
      <div className="contact__background" aria-hidden="true">
        <div className="contact__glow" />
        <div className="contact__grid" />
      </div>

      <div className="contact__container">
        {/* Header */}
        <header className="contact__header">
          <div className="contact__eyebrow">
            <span className="contact__eyebrow-line" />
            <span>07 / START A CASE</span>
          </div>

          <div className="contact__heading">
            <h2 id="contact-title">
              Let's discuss
              <span> your case.</span>
            </h2>

            <p>
              Tell us what you're dealing with and what
              kind of assistance you're looking for.
              We'll take it from there.
            </p>
          </div>
        </header>

        <div className="contact__layout">
          {/* Information */}
          <aside className="contact__aside">
            <div className="contact__statement">
              <span className="contact__statement-label">
                ACY / SOCIAL MEDIA EXPERT
              </span>

              <p>
                Specialist assistance across account
                access, restoration, verification,
                security and social media management.
              </p>
            </div>

            <div className="contact__credentials">
              <div className="contact__credential">
                <span>EXPERTISE</span>
                <strong>IG REMOVALS &amp; RECOVERIES</strong>
              </div>

              <div className="contact__credential">
                <span>RESPONSE</span>
                <strong>CASE-BY-CASE</strong>
              </div>
            </div>

            <div className="contact__aside-index">
              <span>ACY</span>
              <span>2026</span>
            </div>
          </aside>

          {/* Form */}
          <div className="contact__form-wrap">
            {!submitted ? (
              <form
                className="contact__form"
                onSubmit={handleSubmit}
              >
                <div className="contact__form-top">
                  <span>CASE INTAKE</span>
                  <span>01 — 05</span>
                </div>

                {/* Name */}
                <label className="contact__field">
                  <span className="contact__field-label">
                    01 / NAME
                  </span>

                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={(event) =>
                      updateField("name", event.target.value)
                    }
                    placeholder="Your name"
                    autoComplete="name"
                    required
                  />
                </label>

                {/* Email */}
                <label className="contact__field">
                  <span className="contact__field-label">
                    02 / EMAIL
                  </span>

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={(event) =>
                      updateField("email", event.target.value)
                    }
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                  />
                </label>

                <div className="contact__field-row">
                  {/* Platform */}
                  <label className="contact__field">
                    <span className="contact__field-label">
                      03 / PLATFORM
                    </span>

                    <select
                      name="platform"
                      value={form.platform}
                      onChange={(event) =>
                        updateField(
                          "platform",
                          event.target.value
                        )
                      }
                    >
                      <option value="">
                        Select platform
                      </option>
                      <option value="instagram">
                        Instagram
                      </option>
                      <option value="facebook">
                        Facebook
                      </option>
                      <option value="youtube">
                        YouTube
                      </option>
                      <option value="other">
                        Other
                      </option>
                    </select>
                  </label>

                  {/* Case type */}
                  <label className="contact__field">
                    <span className="contact__field-label">
                      04 / CASE TYPE
                    </span>

                    <select
                      name="caseType"
                      value={form.caseType}
                      onChange={(event) =>
                        updateField(
                          "caseType",
                          event.target.value
                        )
                      }
                      required
                    >
                      <option value="">
                        Select service
                      </option>
                      <option value="recovery">
                        Account Recovery
                      </option>
                      <option value="restoration">
                        Account Restoration
                      </option>
                      <option value="verification">
                        Verification
                      </option>
                      <option value="security">
                        Account Security
                      </option>
                      <option value="growth">
                        Social Media Growth
                      </option>
                      <option value="management">
                        Social Media Management
                      </option>
                      <option value="other">
                        Other
                      </option>
                    </select>
                  </label>
                </div>
                {/* Telegram */}
<label className="contact__field">
  <span className="contact__field-label">
    03 / TELEGRAM
  </span>

  <input
    type="text"
    name="telegram"
    value={form.telegram}
    onChange={(event) =>
      updateField("telegram", event.target.value)
    }
    placeholder="@username"
    autoComplete="off"
    required
  />
</label>

                {/* Message */}
                <label className="contact__field contact__field--message">
                  <span className="contact__field-label">
                    05 / YOUR CASE
                  </span>

                  <textarea
                    name="message"
                    value={form.message}
                    onChange={(event) =>
                      updateField(
                        "message",
                        event.target.value
                      )
                    }
                    placeholder="Briefly describe what happened..."
                    rows={5}
                    required
                  />
                </label>

                <div className="contact__submit-row">
                  <span className="contact__privacy">
                    Your information stays within this
                    case inquiry.
                  </span>

                  <button
                    type="submit"
                    className="contact__submit"
                  >
                    <span>DISCUSS YOUR CASE</span>

                    <span className="contact__submit-icon">
                      ↗
                    </span>
                  </button>
                </div>
              </form>
            ) : (
              <div className="contact__success">
                <div className="contact__success-mark">
                  ✓
                </div>

                <span className="contact__success-label">
                  CASE INTAKE READY
                </span>

                <h3>
                  Thanks, {form.name.split(" ")[0] || "there"}.
                </h3>

                <p>
                  Your case details have been prepared.
                  Connect the form to the client's real
                  submission channel before launch.
                </p>

                <button
                  type="button"
                  className="contact__reset"
                  onClick={() => {
                    setForm(initialForm);
                    setSubmitted(false);
                  }}
                >
                  SUBMIT ANOTHER CASE
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;