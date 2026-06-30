export default function Home() {
  const screenshots = [
    "Today",
    "Add Symptoms",
    "Health Stats",
    "History",
    "Profiles",
    "Reports",
    "PDF Export",
  ];

  return (
    <main className="min-h-screen bg-[#F7FAFF] text-[#172033]">
      <section className="bg-gradient-to-br from-[#2F80ED] to-[#56A3FF] text-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-3xl">
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/15 backdrop-blur">
                <img
                  src="/logo.png"
                  alt="DocReady Logo"
                  className="h-10 w-10 object-contain"
                />
              </div>

              <div>
                <p className="text-3xl font-black tracking-tight">DocReady</p>
                <p className="text-sm text-white/80">
                  Built by Grit & Flow Labs
                </p>
              </div>
            </div>

            <p className="mb-4 inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">
              Private symptom tracking for real life
            </p>

            <h1 className="text-4xl font-black leading-tight md:text-6xl">
              Track symptoms, health stats, and reports before appointments.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90">
              DocReady helps you log daily changes, spot patterns, and create
              appointment-ready summaries without digging through memory or
              notes.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#screenshots"
                className="rounded-full bg-white px-6 py-3 font-bold text-[#2F80ED] shadow-lg"
              >
                Explore Features
              </a>
              <a
                href="/privacy"
                className="rounded-full border border-white/50 px-6 py-3 font-bold text-white"
              >
                Privacy Policy
              </a>

               <a
                  href="/community-access"
                  className="rounded-full border border-white/50 px-6 py-3 font-bold text-white"
                >
                  Community Access
                </a>
            </div>

            <div className="mt-10 flex flex-wrap items-start gap-6">
              <div className="flex flex-col items-center">
                <a href="#" aria-label="Google Play Coming Soon">
                  <img
                    src="/google-play-badge.png"
                    alt="Get it on Google Play"
                    className="h-12 w-auto opacity-90"
                  />
                </a>

                <p className="mt-2 text-sm font-semibold text-white/80">
                  Coming Soon
                </p>
              </div>

              <a
                href="https://apps.apple.com/us/app/docready-log/id6773218052"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/app-store-badge.svg"
                  alt="Download on the App Store"
                  className="h-12 w-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            [
              "Fast Logging",
              "Quickly record symptoms, intensity, notes, and health stats.",
            ],
            [
              "Multiple Profiles",
              "Track yourself, children, family members, or caregiving needs.",
            ],
            [
              "Useful Reports",
              "Generate summaries that make appointments easier to prepare for.",
            ],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200"
            >
              <h3 className="text-xl font-black">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="screenshots" className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-6 md:grid-cols-3">
          {screenshots.map((name, index) => (
            <div
              key={name}
              className="rounded-[2rem] bg-white p-4 shadow-sm ring-1 ring-slate-200"
            >
              <img
                src={`/screenshots/${index + 1}.png`}
                alt={name}
                className="aspect-[9/16] w-full rounded-[1.5rem] object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-[2rem] bg-[#172033] p-8 text-white md:p-12">
          <h2 className="text-3xl font-black">Privacy-first by design.</h2>
          <p className="mt-4 max-w-3xl leading-8 text-white/80">
            DocReady is built for personal health organization. Your logs stay
            on your device. The app does not sell your data, show ads, or use
            your information for marketing.
          </p>
          <a
            href="/privacy"
            className="mt-8 inline-flex rounded-full bg-white px-6 py-3 font-bold text-[#172033]"
          >
            Read Privacy Policy
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
            </a>.
            </p>
          <a href="/privacy" className="font-semibold text-[#2F80ED]">
            Privacy Policy
          </a>
        </div>
      </footer>
    </main>
  );
}