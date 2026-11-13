import { FormEvent, useState } from 'react';
import { Check, Copy, Mail, MapPin, Phone, Send } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export default function ContactFooter() {
  const [copiedField, setCopiedField] = useState<'email' | 'phone' | null>(null);
  const [name, setName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submittedNotice, setSubmittedNotice] = useState<string | null>(null);

  const handleCopy = async (value: string, field: 'email' | 'phone') => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch {
      setCopiedField(null);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !senderEmail.trim() || !message.trim()) return;

    const subject = encodeURIComponent(`Portfolio Inquiry from ${name.trim()}`);
    const body = encodeURIComponent(
      `Name: ${name.trim()}\nEmail: ${senderEmail.trim()}\n\n${message.trim()}`
    );
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    setSubmittedNotice(
      `Prepared an email draft to ${PROFILE.email}. If your mail client did not open automatically, use the copy button beside the email address.`
    );
    setName('');
    setSenderEmail('');
    setMessage('');
  };

  return (
    <footer id="contact" className="bg-[#141414] pt-16 pb-10 text-[#F4F4F1] sm:pt-24">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left Column: Direct Contact Details */}
          <div className="lg:col-span-5">
            <h2 className="font-display text-3xl font-bold uppercase leading-[1.02] tracking-tight text-white [text-wrap:balance] sm:text-5xl">
              Let&apos;s Connect &amp; Collaborate
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-[#C4C4BC]">
              Interested in AI &amp; ML internships, data analysis collaborations, or software
              engineering roles in Bengaluru or remote. Reach out directly below.
            </p>

            <div className="mt-8 space-y-4">
              {/* Email */}
              <div className="flex items-center justify-between gap-3 rounded-xl border border-[#2C2C28] bg-[#1C1C19] px-4 py-3.5">
                <div className="flex items-center gap-3 min-w-0">
                  <Mail className="h-4 w-4 shrink-0 text-[#B8B8B0]" />
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="truncate text-sm font-medium text-white hover:underline"
                  >
                    {PROFILE.email}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(PROFILE.email, 'email')}
                  aria-label="Copy email address"
                  className="inline-flex min-h-[36px] items-center gap-1.5 rounded-lg border border-[#383833] px-2.5 py-1 text-xs font-medium text-[#E4E4DF] whitespace-nowrap shrink-0 cursor-pointer transition-colors hover:bg-[#2C2C28]"
                >
                  {copiedField === 'email' ? (
                    <>
                      <Check className="h-3.5 w-3.5" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between gap-3 rounded-xl border border-[#2C2C28] bg-[#1C1C19] px-4 py-3.5">
                <div className="flex items-center gap-3 min-w-0">
                  <Phone className="h-4 w-4 shrink-0 text-[#B8B8B0]" />
                  <a
                    href={`tel:+91${PROFILE.phone}`}
                    className="font-mono text-sm font-medium text-white tabular-nums hover:underline"
                  >
                    {PROFILE.phoneFormatted}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(PROFILE.phone, 'phone')}
                  aria-label="Copy phone number"
                  className="inline-flex min-h-[36px] items-center gap-1.5 rounded-lg border border-[#383833] px-2.5 py-1 text-xs font-medium text-[#E4E4DF] whitespace-nowrap shrink-0 cursor-pointer transition-colors hover:bg-[#2C2C28]"
                >
                  {copiedField === 'phone' ? (
                    <>
                      <Check className="h-3.5 w-3.5" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 rounded-xl border border-[#2C2C28] bg-[#1C1C19] px-4 py-3.5">
                <MapPin className="h-4 w-4 shrink-0 text-[#B8B8B0]" />
                <span className="text-sm text-[#E4E4DF]">{PROFILE.location}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-[#2C2C28] bg-[#1C1C19] p-6 sm:p-8"
            >
              <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-white">
                Send a Direct Message
              </h3>

              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-xs font-medium text-[#C4C4BC]">Your Name</span>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Recruiter or collaborator name"
                    className="mt-1.5 w-full rounded-lg border border-[#383833] bg-[#141414] px-3.5 py-2.5 text-sm text-white placeholder:text-[#73736E] focus:border-white focus:outline-none"
                  />
                </label>

                <label className="block">
                  <span className="text-xs font-medium text-[#C4C4BC]">Your Email</span>
                  <input
                    type="email"
                    required
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="mt-1.5 w-full rounded-lg border border-[#383833] bg-[#141414] px-3.5 py-2.5 text-sm text-white placeholder:text-[#73736E] focus:border-white focus:outline-none"
                  />
                </label>
              </div>

              <label className="mt-4 block">
                <span className="text-xs font-medium text-[#C4C4BC]">Message</span>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share details about an opportunity, project, or collaboration..."
                  className="mt-1.5 w-full rounded-lg border border-[#383833] bg-[#141414] px-3.5 py-2.5 text-sm text-white placeholder:text-[#73736E] focus:border-white focus:outline-none"
                />
              </label>

              {submittedNotice && (
                <p className="mt-4 rounded-lg border border-[#383833] bg-[#141414] px-3.5 py-2.5 text-xs leading-relaxed text-[#E4E4DF]">
                  {submittedNotice}
                </p>
              )}

              <div className="mt-5 flex justify-end">
                <button
                  type="submit"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#F4F4F1] px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#141414] whitespace-nowrap cursor-pointer transition-colors hover:bg-white"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>Compose Email</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Quiet Copyright & Anchor Footer */}
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-[#2C2C28] pt-6 text-xs text-[#9C9C94] sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {PROFILE.fullName} · {PROFILE.university}
          </p>
          <div className="flex items-center gap-6">
            <a href="#top" className="hover:text-white transition-colors">
              Back to Top
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#toolkit" className="hover:text-white transition-colors">
              Toolkit
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
