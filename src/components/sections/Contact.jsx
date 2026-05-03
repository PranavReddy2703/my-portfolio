import { useState } from "react";
import { Mail, Send, MapPin } from "lucide-react";
import { FiGithub as Github, FiLinkedin as Linkedin } from "react-icons/fi";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));

    if (status.submitted || status.error) {
      setStatus({
        submitting: false,
        submitted: false,
        error: false,
        message: "",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({
      submitting: true,
      submitted: false,
      error: false,
      message: "",
    });

    try {
      const response = await fetch("https://formspree.io/f/xkoyopre", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({
          submitting: false,
          submitted: true,
          error: false,
          message: "Thank you — your message has been sent successfully.",
        });

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus({
          submitting: false,
          submitted: false,
          error: true,
          message: "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setStatus({
        submitting: false,
        submitted: false,
        error: true,
        message: "Network error. Please try again later.",
      });
    }
  };

  return (
    <section
      id="contact"
      /* Reduced pb-24 to pb-10 to save bottom space */
      className="relative isolate overflow-visible px-6 pb-10 pt-0 scroll-mt-24 md:px-10 lg:px-12 flex flex-col justify-center min-h-[calc(100dvh-5rem)]"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[8%] h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,rgba(127,90,240,0.18)_0%,rgba(127,90,240,0.08)_35%,rgba(76,29,149,0)_72%)] blur-[90px]" />
        <div className="absolute right-[-8%] bottom-[-10%] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(127,90,240,0.22)_0%,rgba(127,90,240,0.08)_34%,rgba(76,29,149,0)_74%)] blur-[100px]" />
      </div>

      <div className="mx-auto w-full max-w-7xl 2xl:max-w-[1440px]">
        {/* Reduced mb-14 to mb-8 */}
        <div className="mb-8 max-w-3xl">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-[#C4B5FD]">
            Contact
          </p>

          <h2 className="text-4xl font-extrabold uppercase tracking-[-0.05em] text-[#F1F1F1] sm:text-5xl md:text-6xl">
            LET&apos;S CONNECT
          </h2>

          <p className="mt-3 max-w-2xl text-base leading-7 text-[#94A1B2] sm:text-lg">
            Have an opportunity, project, or idea in mind? Reach out through the form or directly through my email and socials.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            <div className="rounded-[1.5rem] border border-white/[0.08] bg-[#0A0A0E]/80 p-6 shadow-[inset_1px_1px_0_rgba(255,255,255,0.25),12px_14px_28px_rgba(127,90,240,0.14),0_8px_30px_rgba(0,0,0,0.38)] backdrop-blur-md">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#7F5AF0]">
                DIRECT CONTACT
              </p>

              {/* Reduced space-y-4 to space-y-3 */}
              <div className="mt-5 space-y-3">
                {/* Reduced py-4 to py-3 on all contact blocks */}
                <a
                  href="mailto:atakulapranav.official@gmail.com"
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 transition-all duration-300 hover:border-[#7F5AF0]/30 hover:bg-white/[0.05]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                    <Mail className="h-4 w-4 text-[#F1F1F1]" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#F1F1F1]">Email</p>
                    <p className="text-[0.8rem] text-[#9EA6BA]">atakulapranav.official@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://github.com/PranavReddy2703"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 transition-all duration-300 hover:border-[#7F5AF0]/30 hover:bg-white/[0.05]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                    <Github className="h-4 w-4 text-[#F1F1F1]" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#F1F1F1]">GitHub</p>
                    <p className="text-[0.8rem] text-[#9EA6BA]">github.com/PranavReddy2703</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/pranav-reddy-atakula-278430268/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 transition-all duration-300 hover:border-[#7F5AF0]/30 hover:bg-white/[0.05]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                    <Linkedin className="h-4 w-4 text-[#F1F1F1]" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#F1F1F1]">LinkedIn</p>
                    <p className="text-[0.8rem] text-[#9EA6BA]">Connect professionally</p>
                  </div>
                </a>
              </div>

              <div className="mt-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                  <MapPin className="h-4 w-4 text-[#F1F1F1]" strokeWidth={1.8} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#F1F1F1]">Location</p>
                  <p className="text-[0.8rem] text-[#9EA6BA]">Hyderabad, Telangana, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-white/[0.08] bg-[#0A0A0E]/80 p-6 shadow-[inset_1px_1px_0_rgba(255,255,255,0.25),12px_14px_28px_rgba(127,90,240,0.14),0_8px_30px_rgba(0,0,0,0.38)] backdrop-blur-md">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#7F5AF0]">
              SEND A MESSAGE
            </p>

            {/* Reduced space-y-5 to space-y-4 */}
            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-[#D7DBE4]"
                  >
                    Name
                  </label>
                  {/* Reduced py-3.5 to py-3 */}
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-[#F1F1F1] outline-none transition-all duration-300 placeholder:text-[#6B7280] focus:border-[#7F5AF0]/40 focus:bg-white/[0.05]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-[#D7DBE4]"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-[#F1F1F1] outline-none transition-all duration-300 placeholder:text-[#6B7280] focus:border-[#7F5AF0]/40 focus:bg-white/[0.05]"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-1.5 block text-sm font-medium text-[#D7DBE4]"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="What do you want to discuss?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-[#F1F1F1] outline-none transition-all duration-300 placeholder:text-[#6B7280] focus:border-[#7F5AF0]/40 focus:bg-white/[0.05]"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-[#D7DBE4]"
                >
                  Message
                </label>
                {/* Reduced rows from 6 to 4 to save significant height */}
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Tell me about your project, idea, or opportunity..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-[#F1F1F1] outline-none transition-all duration-300 placeholder:text-[#6B7280] focus:border-[#7F5AF0]/40 focus:bg-white/[0.05] resize-none"
                />
              </div>

              {status.message && (
                <div
                  className={`rounded-2xl border px-4 py-3 text-sm ${
                    status.error
                      ? "border-red-500/20 bg-red-500/10 text-red-200"
                      : "border-emerald-500/20 bg-emerald-500/10 text-emerald-200"
                  }`}
                >
                  {status.message}
                </div>
              )}

              {/* Reduced py-4 to py-3.5 */}
              <button
                type="submit"
                disabled={status.submitting}
                className="group inline-flex items-center gap-3 rounded-full bg-[#F5F5F5] px-7 py-3.5 text-sm font-bold uppercase tracking-[0.14em] text-[#0A0A0E] shadow-[0_10px_30px_rgba(255,255,255,0.08)] transition-all duration-300 hover:translate-y-[-2px] hover:bg-white disabled:cursor-not-allowed disabled:opacity-70 mt-2"
              >
                {status.submitting ? "Sending..." : "Send Message"}
                <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;