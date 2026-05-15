"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  company: z.string().min(1, "Company is required").max(100),
  email: z.string().email("Please enter a valid email address"),
  message: z
    .string()
    .min(10, "Please tell me a bit more about your situation")
    .max(2000),
  website: z.string().max(0),
})

type FormData = z.infer<typeof schema>

type FormState = "idle" | "submitting" | "success" | "error"

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle")

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onBlur",
  })

  const onSubmit = async (data: FormData) => {
    setFormState("submitting")
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (response.ok) {
        setFormState("success")
      } else {
        setFormState("error")
      }
    } catch {
      setFormState("error")
    }
  }

  if (formState === "success") {
    return (
      <section id="contact" className="scroll-mt-[72px] py-[96px] px-4">
        <div className="mx-auto max-w-[600px] text-center">
          <div className="bg-[var(--color-surface)] rounded-[var(--rounded-md)] p-12 border border-[var(--color-border)]">
            <p className="font-display text-[22px] font-semibold text-[var(--color-on-background)]">
              Got it — I&apos;ll be in touch within 24 hours.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="scroll-mt-[72px] py-[96px] px-4">
      <div className="mx-auto max-w-[600px]">
        <h2 className="font-display text-[32px] font-bold text-[var(--color-on-background)] mb-3">
          Get in Touch
        </h2>
        <p className="font-sans text-[16px] text-[var(--color-on-surface-muted)]">
          Tell me what you&apos;re building and where things are breaking down.
        </p>

        <noscript>
          <p className="font-sans text-[14px] text-[var(--color-on-surface-muted)] mt-4">
            Contact form requires JavaScript. Email me directly at{" "}
            <a
              href="mailto:hi@cardellino.tech"
              className="underline text-[var(--color-accent)]"
            >
              hi@cardellino.tech
            </a>
            .
          </p>
        </noscript>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6 mt-8"
        >
          {/* Honeypot — visually hidden, not display:none */}
          <input
            type="text"
            {...register("website")}
            tabIndex={-1}
            autoComplete="off"
            className="sr-only"
            aria-hidden="true"
          />

          {/* Name field */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="name"
              className="font-sans text-[14px] text-[var(--color-on-surface-muted)]"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              {...register("name")}
              className="bg-[var(--color-surface)] text-[var(--color-on-background)] rounded-[var(--rounded-md)] px-4 py-3 h-[44px] border border-[var(--color-border)] font-sans text-[16px] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
            />
            {errors.name && (
              <p className="font-sans text-[13px] text-[var(--color-error)]">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Company field */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="company"
              className="font-sans text-[14px] text-[var(--color-on-surface-muted)]"
            >
              Company
            </label>
            <input
              id="company"
              type="text"
              {...register("company")}
              className="bg-[var(--color-surface)] text-[var(--color-on-background)] rounded-[var(--rounded-md)] px-4 py-3 h-[44px] border border-[var(--color-border)] font-sans text-[16px] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
            />
            {errors.company && (
              <p className="font-sans text-[13px] text-[var(--color-error)]">
                {errors.company.message}
              </p>
            )}
          </div>

          {/* Email field */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="email"
              className="font-sans text-[14px] text-[var(--color-on-surface-muted)]"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className="bg-[var(--color-surface)] text-[var(--color-on-background)] rounded-[var(--rounded-md)] px-4 py-3 h-[44px] border border-[var(--color-border)] font-sans text-[16px] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
            />
            {errors.email && (
              <p className="font-sans text-[13px] text-[var(--color-error)]">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Message field */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="message"
              className="font-sans text-[14px] text-[var(--color-on-surface-muted)]"
            >
              Message
            </label>
            <textarea
              id="message"
              {...register("message")}
              rows={5}
              className="bg-[var(--color-surface)] text-[var(--color-on-background)] rounded-[var(--rounded-md)] px-4 py-3 border border-[var(--color-border)] font-sans text-[16px] focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-vertical w-full"
            />
            {errors.message && (
              <p className="font-sans text-[13px] text-[var(--color-error)]">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={formState === "submitting"}
            className="w-full bg-[var(--color-cta)] text-white hover:bg-[var(--color-cta-hover)] disabled:bg-[var(--color-border)] disabled:text-[var(--color-on-surface-muted)] rounded-[var(--rounded-lg)] px-6 py-3.5 font-semibold text-[16px] transition-colors cursor-pointer disabled:cursor-not-allowed"
          >
            {formState === "submitting" ? "Sending..." : "Send Message"}
          </button>

          {formState === "error" && (
            <p className="font-sans text-[13px] text-[var(--color-error)] text-center">
              Something went wrong. Please try again or email me at{" "}
              <a
                href="mailto:hi@cardellino.tech"
                className="underline text-[var(--color-accent)]"
              >
                hi@cardellino.tech
              </a>
              .
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
