import { useState } from "react";
import { Section } from "./Section";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <Section
      id="contact"
      number="05"
      eyebrow="Say hello"
      title={
        <>
          Have an idea worth building? <em className="italic text-primary">Let's talk.</em>
        </>
      }
    >
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-8">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm currently taking on new freelance and full-time opportunities for Q3 2026.
            The fastest way to reach me is email — I usually reply within a day.
          </p>
          <a
            href="mailto:hello@kovac.dev"
            className="font-display text-3xl md:text-4xl text-foreground hover:text-primary transition-colors inline-flex items-center gap-3"
          >
            <Mail className="w-7 h-7" /> hello@kovac.dev
          </a>
          <div className="flex items-center gap-3 pt-4">
            {[
              { Icon: Github, href: "https://github.com" },
              { Icon: Linkedin, href: "https://linkedin.com" },
              { Icon: Twitter, href: "https://twitter.com" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
                aria-label="Social link"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <form
          className="lg:col-span-7 space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          {sent ? (
            <div className="rounded-2xl border border-primary/40 bg-primary/5 p-10 text-center">
              <div className="font-display text-3xl mb-2">Message received ✺</div>
              <p className="text-muted-foreground">
                Thanks for reaching out — I'll get back to you shortly.
              </p>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 gap-6">
                <Field label="Your name" name="name" />
                <Field label="Email" name="email" type="email" />
              </div>
              <Field label="Subject" name="subject" />
              <div>
                <label className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  className="mt-2 w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-lg resize-none"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-foreground text-background px-7 py-3.5 rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Send message →
              </button>
            </>
          )}
        </form>
      </div>
    </Section>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        className="mt-2 w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-lg"
      />
    </div>
  );
}