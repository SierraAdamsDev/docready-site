import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#F7FAFF] text-[#172033]">
      <section className="mx-auto max-w-3xl px-6 py-16">
        <Link href="/" className="font-bold text-[#2F80ED]">
        ← Back to DocReady
        </Link>

        <h1 className="mt-8 text-4xl font-black">Privacy Policy</h1>
        <p className="mt-3 text-slate-600">Last updated: May 2026</p>

        <div className="mt-10 space-y-8 rounded-3xl bg-white p-8 leading-8 shadow-sm ring-1 ring-slate-200">
          <section>
            <h2 className="text-xl font-black">Overview</h2>
            <p className="mt-2 text-slate-700">
              DocReady helps users track symptoms, health stats, and related notes.
              The app is designed to be private and local-first.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black">Information Stored</h2>
            <p className="mt-2 text-slate-700">
              DocReady may store profile names, symptom logs, health stats, notes,
              and report information entered by the user. This information is stored
              locally on the user’s device.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black">Data Sharing</h2>
            <p className="mt-2 text-slate-700">
              DocReady does not sell user data. Users may choose to export or share
              reports manually using their device’s sharing tools.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black">Ads and Tracking</h2>
            <p className="mt-2 text-slate-700">
              DocReady does not use advertising, third-party ad tracking, or sell
              personal information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black">Medical Disclaimer</h2>
            <p className="mt-2 text-slate-700">
              DocReady is not a medical device and does not provide diagnosis,
              treatment, or medical advice. Users should contact a qualified medical
              professional for health concerns.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black">Contact</h2>
            <p className="mt-2 text-slate-700">
              For privacy questions, contact Grit & Flow Labs through the contact
              information provided on the official website.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}