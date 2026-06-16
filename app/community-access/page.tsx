export default function CommunityAccessPage() {
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

  const support = [
    "Community-specific promotional codes",
    "Extended trial opportunities",
    "Sponsored premium access for eligible participants",
    "Direct support for program coordinators",
    "Partnership opportunities based on community need",
  ];

  return (
    <main className="min-h-screen bg-[#F7FAFF] text-[#172033]">
      <section className="bg-gradient-to-br from-[#2F80ED] to-[#56A3FF] text-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <a href="/" className="font-bold text-white/85 hover:text-white">
            ← Back to DocReady
          </a>

          <div className="mt-12 max-w-4xl">
            <p className="mb-4 inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">
              Community Access Program
            </p>

            <h1 className="text-4xl font-black leading-tight md:text-6xl">
              Health tracking tools should be available to everyone.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/90">
              DocReady partners with nonprofits, clinics, therapy programs,
              schools, support groups, and community organizations to help
              people access premium health tracking tools when cost may be a
              barrier.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-16 md:grid-cols-3">
        <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-xl font-black">Access with Purpose</h2>
          <p className="mt-3 leading-7 text-slate-600">
            Eligible individuals may receive extended trial access, sponsored
            premium access, or other support opportunities based on the needs
            of the community being served.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-xl font-black">Built for Advocacy</h2>
          <p className="mt-3 leading-7 text-slate-600">
            DocReady helps people organize symptoms, health stats, and reports
            so they can better prepare for appointments, therapies, and daily
            care conversations.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-xl font-black">Flexible Partnerships</h2>
          <p className="mt-3 leading-7 text-slate-600">
            Every organization serves different needs. Community access may be
            provided through promo codes, sponsored Premium access, or direct
            partner support.
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

        <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-3xl font-black">What partners may receive</h2>

          <div className="mt-6 grid gap-3">
            {support.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-[#F7FAFF] px-4 py-3 font-semibold text-slate-700"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-[2rem] bg-[#172033] p-8 text-white md:p-12">
          <h2 className="text-3xl font-black">Become a community partner.</h2>
          <p className="mt-4 max-w-3xl leading-8 text-white/80">
            If your organization serves individuals who may benefit from
            DocReady, we would love to start a conversation. Our goal is simple:
            make health tracking more accessible for people navigating care,
            therapy, disability support, caregiving, and ongoing health needs.
          </p>

          <a
            href="mailto:hello@gritandflowlabs.com?subject=DocReady Community Access Program"
            className="mt-8 inline-flex rounded-full bg-white px-6 py-3 font-bold text-[#172033]"
          >
            Contact About Partnership
          </a>

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

          <a href="/privacy" className="font-semibold text-[#2F80ED]">
            Privacy Policy
          </a>
        </div>
      </footer>
    </main>
  );
}