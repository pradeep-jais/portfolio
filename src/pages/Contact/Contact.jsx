import { useState } from "react";

const INQUIRY_TYPES = [
  {
    value: "hire",
    icon: "fa-solid fa-briefcase",
    label: "Hire me full-time",
    subLabel: "For recruiters & companies",
  },
  {
    value: "freelance",
    icon: "fa-solid fa-laptop-code",
    label: "Start a freelance project",
    subLabel: "For clients with a project",
  },
  {
    value: "general",
    icon: "fa-solid fa-comment-dots",
    label: "Just saying hello",
    subLabel: "General inquiry",
  },
];

const Contact = () => {
  const [inquiryType, setInquiryType] = useState("freelance");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [isCopied, setIsCopied] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const err = {};
    if (!form.name.trim()) err.name = "Name is required";
    if (!form.email.trim()) err.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      err.email = "Enter a valid email";
    if (!form.message.trim()) err.message = "Message is required";
    else if (form.message.trim().length < 15)
      err.message = "Message is too short (min 15 characters)";
    return err;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const err = validate();
    if (Object.keys(err).length) {
      setErrors(err);
      return;
    }

    // Simulate API call — replace with your implementation - actual form handler (Formspree, EmailJS, etc.)
    const newFormData = {
      ...form,
      access_key: import.meta.env.VITE_WEB3FORM_API,
      inquiryType,
    };

    try {
      setStatus("sending");

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newFormData),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("sent");
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.log(error);
      setStatus("error");
    }
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText("pradeepjais13@gmail.com");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section className="contact section">
      <div className="contact-orb contact-orb--left" aria-hidden="true" />
      <div className="contact-orb contact-orb--right" aria-hidden="true" />

      <h2 className="section-title">
        Get In <span className="contact-title-accent">Touch</span>
      </h2>

      <div className="section-center contact-center">
        {/* ── LEFT — Connect side ── */}
        <div className="contact-left">
          <p className="contact-intro">
            Whether you're hiring or need a UI built —{" "}
            <strong>let's talk.</strong>
          </p>

          {/* Response time badge */}
          <div className="contact-response-badge">
            <i className="fa-regular fa-clock" aria-hidden="true" />
            Usually replies within <strong>24 hours</strong>
          </div>

          {/* Availability strip */}
          <div className="contact-availability">
            <div className="avail-row">
              <span className="avail-dot avail-dot--green" />
              <span>Open to full-time roles</span>
            </div>
            <div className="avail-row">
              <span className="avail-dot avail-dot--blue" />
              <span>Available for freelance projects</span>
            </div>
          </div>

          {/* Contact links */}
          <div className="contact-links">
            {/* Email */}
            <div className="contact-link-card">
              <div className="contact-link-icon">
                <i className="fa-solid fa-envelope" aria-hidden="true" />
              </div>
              <div className="contact-link-body">
                <p className="contact-link-label">Email</p>
                <p className="contact-link-value">pradeep@example.com</p>
              </div>
              <button
                className="contact-link-btn"
                onClick={handleCopy}
                aria-label="Copy email address"
              >
                {isCopied ? (
                  <>
                    <i className="fa-solid fa-check" aria-hidden="true" />{" "}
                    copied
                  </>
                ) : (
                  <>
                    <i className="fa-regular fa-copy" aria-hidden="true" /> Copy
                  </>
                )}
              </button>
            </div>

            {/* LinkedIn */}
            <div className="contact-link-card contact-link-card--anchor">
              <div className="contact-link-icon contact-link-icon--linkedin">
                <i className="fa-brands fa-linkedin-in" aria-hidden="true" />
              </div>
              <div className="contact-link-body">
                <p className="contact-link-label">LinkedIn</p>
                <p className="contact-link-value">
                  linkedin.com/in/pradeepjais
                </p>
              </div>
              <a
                className="contact-link-btn contact-link-btn--ghost"
                href="https://linkedin.com/in/pradeepjais"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fa-solid fa-arrow-up-right-from-square"
                  aria-hidden="true"
                />{" "}
                Open
              </a>
            </div>
          </div>
        </div>

        {/* ── RIGHT — Form ── */}
        <div className="contact-right">
          {status === "sent" ? (
            <div className="contact-success">
              <div className="contact-success-icon">
                <i className="fa-solid fa-paper-plane" aria-hidden="true" />
              </div>
              <h3 className="contact-success-title">Message sent!</h3>
              <p className="contact-success-sub">
                Thanks for reaching out. I'll get back to you within 24 hours.
              </p>
              <button
                className="contact-reset-btn"
                onClick={() => {
                  setStatus("idle");
                  setForm({ name: "", email: "", message: "" });
                  setInquiryType("freelance");
                }}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              {/* Inquiry type selector */}
              <div className="form-field">
                <label className="form-label">What's this about?</label>
                <div className="inquiry-grid">
                  {INQUIRY_TYPES.map((type) => (
                    <button
                      key={type.value}
                      className={`inquiry-card ${inquiryType === type.value ? "inquiry-card--active" : ""}`}
                      onClick={() => setInquiryType(type.value)}
                      type="button"
                      aria-pressed={inquiryType === type.value}
                    >
                      <i
                        className={`${type.icon} inquiry-card-icon`}
                        aria-hidden="true"
                      />
                      <span className="inquiry-card-label">{type.label}</span>
                      <span className="inquiry-card-sub-label">
                        {type.subLabel}
                      </span>
                      {inquiryType === type.value && (
                        <span className="inquiry-card-check">
                          <i
                            className="fa-solid fa-circle-check"
                            aria-hidden="true"
                          />
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name + Email row */}
              <div className="form-row">
                <div className="form-field">
                  <label className="form-label" htmlFor="contact-name">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    className={`form-input ${errors.name ? "form-input--error" : ""}`}
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    autoComplete="name"
                  />
                  {errors.name && (
                    <span className="form-error">
                      <i
                        className="fa-solid fa-triangle-exclamation"
                        aria-hidden="true"
                      />
                      {errors.name}
                    </span>
                  )}
                </div>
                <div className="form-field">
                  <label className="form-label" htmlFor="contact-email">
                    Your email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    className={`form-input ${errors.email ? "form-input--error" : ""}`}
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="email"
                  />
                  {errors.email && (
                    <span className="form-error">
                      <i
                        className="fa-solid fa-triangle-exclamation"
                        aria-hidden="true"
                      />
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Message */}
              <div className="form-field">
                <label className="form-label" htmlFor="contact-message">
                  Message
                  <span className="form-char-count">
                    {form.message.length} / 500
                  </span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  className={`form-textarea ${errors.message ? "form-input--error" : ""}`}
                  placeholder={
                    inquiryType === "hire"
                      ? "Tell me about the role, team, or company..."
                      : inquiryType === "freelance"
                        ? "Describe your project, timeline, and goals..."
                        : "Say hello! What's on your mind?"
                  }
                  value={form.message}
                  onChange={handleChange}
                  maxLength={500}
                  rows={5}
                />
                {errors.message && (
                  <span className="form-error">
                    <i
                      className="fa-solid fa-triangle-exclamation"
                      aria-hidden="true"
                    />
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Submit */}
              <button
                className={`contact-submit-btn ${status === "sending" ? "contact-submit-btn--sending" : ""}`}
                disabled={status === "sending"}
                type="submit"
              >
                {status === "sending" ? (
                  <>
                    <i
                      className="fa-solid fa-circle-notch fa-spin"
                      aria-hidden="true"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <i className="fa-solid fa-paper-plane" aria-hidden="true" />
                    Send message
                  </>
                )}
              </button>

              <p className="contact-form-note">
                <i className="fa-solid fa-lock" aria-hidden="true" />
                Your info is only used to respond to your message.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
export default Contact;
