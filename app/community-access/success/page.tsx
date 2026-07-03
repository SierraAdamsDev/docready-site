import Link from "next/link";

export default function CommunityAccessSuccessPage() {
  return (
    <main className="min-h-screen bg-[#F7FAFF] text-[#172033]">
      <section className="mx-auto max-w-3xl px-6 py-20">
        <Link href="/" className="font-bold text-[#2F80ED]">
          ← Back to DocReady
        </Link>

        <div className="mt-10 rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-12">
          <p className="mb-4 inline-flex rounded-full bg-[#EAF2FF] px-4 py-2 text-sm font-bold text-[#2F80ED]">
            Application Received
          </p>

          <h1 className="text-4xl font-black leading-tight">
            Thank you for reaching out.
          </h1>

          <p className="mt-5 leading-8 text-slate-600">
            Your DocReady Community Access application has been submitted. We
            will review your request and follow up using the contact information
            provided.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            If your organization appears to be a good fit, we will contact you
            to discuss free community access, discounted group access, or other
            partnership options.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/"
              className="rounded-full bg-[#2F80ED] px-6 py-3 font-bold text-white"
            >
              Return Home
            </Link>

            <Link
              href="/community-access"
              className="rounded-full border border-slate-300 px-6 py-3 font-bold text-[#172033]"
            >
              Back to Community Access
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}