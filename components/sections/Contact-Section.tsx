"use client";

import Magnetic from "@/components/animations/Magnetic";
import { useRef, useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = "62895360701578";
    const text = `Halo, my name is ${formData.name}. ${formData.message}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    setFormData({ name: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section
      id="contact"
      className="section-padding"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="container-portfolio">
        {/* Big CTA headline */}
        <div style={{ marginBottom: "5rem" }}>
          <h2
            className="text-hero"
            style={{ lineHeight: 0.88, marginBottom: "2rem" }}
          >
            LET&apos;S<br />
            WORK<br />
            TOGETHER.
          </h2>

          <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", alignItems: "center" }}>
            <Magnetic strength={0.4}>
              <a
                id="contact-email-btn"
                href="mailto:thoriqkhoir537@gmail.com"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  border: "1.5px solid var(--fg)",
                  borderRadius: "999px",
                  padding: "0.9rem 2.2rem",
                  fontSize: "0.75rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--fg)",
                  background: "transparent",
                  transition: "background 0.25s ease, color 0.25s ease",
                  fontWeight: 500,
                  cursor: "none",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "#1e44c2";
                  el.style.color = "var(--bg)";
                  el.style.borderColor = "#1e44c2";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "transparent";
                  el.style.color = "var(--fg)";
                  el.style.borderColor = "var(--fg)";
                }}
                data-magnetic
              >
                Get In Touch ↗
              </a>
            </Magnetic>

            <span style={{ color: "var(--muted)", fontSize: "0.85rem" }}>
              thoriqkhoir537@gmail.com
            </span>
          </div>
        </div>

        {/* Form */}
        <div style={{ maxWidth: "600px" }}>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div>
              <label
                htmlFor="contact-name"
                className="text-meta"
                style={{ display: "block", marginBottom: "0.6rem" }}
              >
                Your Name
              </label>
              <input
                type="text"
                id="contact-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                style={{
                  width: "100%",
                  background: "transparent",
                  border: "none",
                  borderBottom: "1px solid var(--border)",
                  padding: "0.75rem 0",
                  color: "var(--fg)",
                  fontSize: "1rem",
                  outline: "none",
                  transition: "border-color 0.2s ease",
                }}
                onFocus={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--fg)")}
                onBlur={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")}
              />
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="text-meta"
                style={{ display: "block", marginBottom: "0.6rem" }}
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell me about your project..."
                style={{
                  width: "100%",
                  background: "transparent",
                  border: "none",
                  borderBottom: "1px solid var(--border)",
                  padding: "0.75rem 0",
                  color: "var(--fg)",
                  fontSize: "1rem",
                  outline: "none",
                  resize: "none",
                  fontFamily: "var(--font-body)",
                  transition: "border-color 0.2s ease",
                }}
                onFocus={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--fg)")}
                onBlur={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "var(--border)")}
              />
            </div>

            <Magnetic strength={0.3}>
              <button
                id="contact-submit-btn"
                type="submit"
                style={{
                  background: "var(--fg)",
                  color: "var(--bg)",
                  border: "none",
                  borderRadius: "999px",
                  padding: "0.85rem 2rem",
                  fontSize: "0.75rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                  cursor: "none",
                  transition: "background 0.25s ease",
                  display: "inline-block",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#1e44c2")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--fg)")}
                data-magnetic
              >
                Send via WhatsApp ↗
              </button>
            </Magnetic>
          </form>
        </div>
      </div>
    </section>
  );
}