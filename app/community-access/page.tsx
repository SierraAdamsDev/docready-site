"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function CommunityAccessPage() {
  const [formData, setFormData] = useState({
    organization: "",
    contactName: "",
    email: "",
    website: "",
    organizationType: "",
    participants: "",
    message: "",
  });

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

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = encodeURIComponent("DocReady Community Access Inquiry");

    const body = encodeURIComponent(
      `Organization Name: ${formData.organization}

Contact Name: ${formData.contactName}

Email: ${formData.email}

Website: ${formData.website}

Organization Type: ${formData.organizationType}

Estimated Participants: ${formData.participants}

Message:
${formData.message}`
    );

    window.location.href = `mailto:hello@gritandflowlabs.com?subject=${subject}&body=${body}`;
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

          <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
            <input
              required
              type="text"
              placeholder="Organization name"
              className="rounded-2xl border border-slate-200 px-4 py-3"
              value={formData.organization}
              onChange={(e) =>
                setFormData({ ...formData, organization: e.target.value })
              }
            />

            <input
              required
              type="text"
              placeholder="Contact name"
              className="rounded-2xl border border-slate-200 px-4 py-3"
              value={formData.contactName}
              onChange={(e) =>
                setFormData({ ...formData, contactName: e.target.value })
              }
            />

            <input
              required
              type="email"
              placeholder="Contact email"
              className="rounded-2xl border border-slate-200 px-4 py-3"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />

            <input
              type="text"
              placeholder="Organization website"
              className="rounded-2xl border border-slate-200 px-4 py-3"
              value={formData.website}
              onChange={(e) =>
                setFormData({ ...formData, website: e.target.value })
              }
            />

            <select
              required
              className="rounded-2xl border border-slate-200 px-4 py-3"
              value={formData.organizationType}
              onChange={(e) =>
                setFormData({ ...formData, organizationType: e.target.value })
              }
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
              className="rounded-2xl border border-slate-200 px-4 py-3"
              value={formData.participants}
              onChange={(e) =>
                setFormData({ ...formData, participants: e.target.value })
              }
            >
              <option value="">Estimated participants</option>
              <option value="Under 25">Under 25</option>
              <option value="25-100">25–100</option>
              <option value="100-500">100–500</option>
              <option value="500+">500+</option>
            </select>

            <textarea
              required
              placeholder="Tell us who you serve and how DocReady could support your community."
              className="min-h-40 rounded-2xl border border-slate-200 px-4 py-3"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />

            <button
              type="submit"
              className="rounded-full bg-[#2F80ED] px-6 py-3 font-bold text-white shadow-lg"
            >
              Submit Inquiry
            </button>

            <p className="text-sm text-slate-500">
              This form opens an email draft addressed to
              hello@gritandflowlabs.com.
            </p>
          </form>
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