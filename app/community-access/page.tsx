"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function CommunityAccessPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const partners = [
    "Nonprofit Organizations",
    "Community Health Clinics",
    "Physical Therapy Programs",
    "Occupational Therapy Programs",
    "Speech Therapy Programs",
    "Disability Advocacy Organizations",
    "Support Groups",
    "Schools and Educational Programs",
    "Caregiver Support Organizations",
  ];

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("form-name", "community-access");

    const encoded = new URLSearchParams();

    formData.forEach((value, key) => {
      encoded.append(key, value.toString());
    });

    await fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: encoded.toString(),
    });

    setSubmitting(false);
    setSubmitted(true);
    form.reset();
  }

  return (
    <main className="min-h-screen bg-[#F7FAFF] text-[#172033]">
      <section className="bg-gradient-to-br from-[#2F80ED] to-[#56A3FF] text-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Link href="/" className="font-bold text-white/85 hover:text-white">
            ← Back to DocReady
          </Link>

          <div className="mt-12 max-w-4xl">
            <p className="mb-4 inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">
              Community Access Program
            </p>

            <h1 className="text-4xl font-black leading-tight md:text-6xl">
              Helping organizations expand access to health tracking.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/90">
              DocReady partners with nonprofits, clinics, therapy programs,
              schools, support groups, and community organizations to make
              symptom tracking more accessible for the people they serve.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-16 md:grid-cols-3">
        <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-xl font-black">Free Community Access</h2>
          <p className="mt-3 leading-7 text-slate-600">
            For approved nonprofit and community programs serving individuals
            who may face financial barriers, DocReady may provide free access
            for eligible participants.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-xl font-black">Discounted Group Access</h2>
          <p className="mt-3 leading-7 text-slate-600">
            Schools, clinics, therapy providers, and other organizations may be
            eligible for discounted group access based on program size and need.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-xl font-black">Built for Advocacy</h2>
          <p className="mt-3 leading-7 text-slate-600">
            DocReady helps people organize symptoms, health stats, notes, and
            reports so they can better prepare for appointments and care
            conversations.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-8 md:grid-cols-2">
        <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-3xl font-black">Who we partner with</h2>

          <div className="mt-6 grid gap-3">
            {partners.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-[#F7FAFF] px-4 py-3 font-semibold text-slate-700"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] bg-[#172033] p-8 text-white shadow-sm">
          <h2 className="text-3xl font-black">Our mission</h2>

          <p className="mt-4 leading-8 text-white/80">
            Health organization should not be limited by cost. The Community
            Access Program exists to support organizations helping people
            navigate care, therapy, disability support, caregiving, and ongoing
            health needs.
          </p>

          <p className="mt-4 leading-8 text-white/80">
            Each partnership is reviewed individually so we can determine
            whether free community access or discounted group access is the best
            fit.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">
          <h2 className="text-3xl font-black">Apply for Community Access</h2>

          <p className="mt-4 leading-8 text-slate-600">
            Tell us about your organization and the people you serve. We will
            review your request and follow up to discuss the best option for your
            program.
          </p>

          {submitted ? (
            <div className="mt-8 rounded-3xl bg-[#EAF2FF] p-6 text-[#172033]">
              <h3 className="text-xl font-black">Application received.</h3>
              <p className="mt-2 leading-7">
                Thank you. We received your Community Access inquiry and will
                follow up using the contact information provided.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
              <input type="hidden" name="form-name" value="community-access" />

              <input
                required
                type="text"
                name="organization"
                placeholder="Organization name"
                className="rounded-2xl border border-slate-200 px-4 py-3"
              />

              <input
                required
                type="text"
                name="contactName"
                placeholder="Contact name"
                className="rounded-2xl border border-slate-200 px-4 py-3"
              />

              <input
                required
                type="email"
                name="email"
                placeholder="Contact email"
                className="rounded-2xl border border-slate-200 px-4 py-3"
              />

              <input
                type="text"
                name="website"
                placeholder="Organization website"
                className="rounded-2xl border border-slate-200 px-4 py-3"
              />

              <select
                required
                name="organizationType"
                className="rounded-2xl border border-slate-200 px-4 py-3"
              >
                <option value="">Organization type</option>
                <option value="Nonprofit">Nonprofit</option>
                <option value="School">School</option>
                <option value="Clinic">Clinic</option>
                <option value="Therapy Provider">Therapy Provider</option>
                <option value="Support Group">Support Group</option>
                <option value="Other">Other</option>
              </select>

              <select
                required
                name="participants"
                className="rounded-2xl border border-slate-200 px-4 py-3"
              >
                <option value="">Estimated participants</option>
                <option value="Under 25">Under 25</option>
                <option value="25-100">25–100</option>
                <option value="100-500">100–500</option>
                <option value="500+">500+</option>
              </select>

              <textarea
                required
                name="message"
                placeholder="Tell us who you serve and how DocReady could support your community."
                className="min-h-40 rounded-2xl border border-slate-200 px-4 py-3"
              />

              <button
                type="submit"
                disabled={submitting}
                className="rounded-full bg-[#2F80ED] px-6 py-3 font-bold text-white shadow-lg disabled:opacity-60"
              >
                {submitting ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          )}
        </div>
      </section>

      <footer className="border-t border-slate-200 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} DocReady. Built by{" "}
            <a
              href="https://gritandflowlabs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#2F80ED] hover:underline"
            >
              Grit & Flow Labs
            </a>
            .
          </p>

          <Link href="/privacy" className="font-semibold text-[#2F80ED]">
            Privacy Policy
          </Link>
        </div>
      </footer>
    </main>
  );
}