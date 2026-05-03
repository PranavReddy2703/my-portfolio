import { ArrowUpRight, Heart } from "lucide-react";
import { FiGithub as Github, FiLinkedin as Linkedin } from "react-icons/fi";

function Footer() {
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative isolate overflow-hidden px-6 pb-8 pt-8 md:px-10 lg:px-12">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-8%] bottom-[-20%] h-[18rem] w-[18rem] rounded-full bg-[radial-gradient(circle,rgba(127,90,240,0.16)_0%,rgba(127,90,240,0.07)_35%,rgba(76,29,149,0)_72%)] blur-[90px]" />
        <div className="absolute right-[-8%] top-[-10%] h-[16rem] w-[16rem] rounded-full bg-[radial-gradient(circle,rgba(127,90,240,0.14)_0%,rgba(127,90,240,0.05)_35%,rgba(76,29,149,0)_72%)] blur-[80px]" />
      </div>

      <div className="mx-auto w-full max-w-7xl 2xl:max-w-[1440px]">
        <div className="rounded-[1.75rem] border border-white/[0.08] bg-[#0A0A0E]/80 px-6 py-6 shadow-[inset_1px_1px_0_rgba(255,255,255,0.16),0_8px_30px_rgba(0,0,0,0.38)] backdrop-blur-md md:px-8 md:py-7">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-md">
              <a
                href="#home"
                className="inline-block text-2xl font-extrabold uppercase tracking-[-0.05em] text-[#F1F1F1]"
              >
                APR
              </a>

              <p className="mt-3 text-sm leading-7 text-[#9EA6BA] sm:text-[0.95rem]">
                Currently running on vibes and VS Code. Let&apos;s connect and create something amazing together! 🚀
              </p>

              <div className="mt-5 flex items-center gap-3">
                <a
                  href="https://github.com/PranavReddy2703"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[#F1F1F1] transition-all duration-300 hover:border-[#7F5AF0]/30 hover:bg-white/[0.06]"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                </a>

                <a
                  href="https://www.linkedin.com/in/pranav-reddy-atakula-278430268/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[#F1F1F1] transition-all duration-300 hover:border-[#7F5AF0]/30 hover:bg-white/[0.06]"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                </a>
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:gap-12">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#7F5AF0]">
                  Quick Links
                </p>

                <div className="mt-4 flex flex-col gap-3">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-sm text-[#C7CDD8] transition-colors duration-300 hover:text-white"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#7F5AF0]">
                  Contact
                </p>

                <div className="mt-4 space-y-3 text-sm text-[#9EA6BA]">
                  <a
                    href="mailto:atakulapranav.official@gmail.com"
                    className="block transition-colors duration-300 hover:text-white"
                  >
                    atakulapranav.official@gmail.com
                  </a>
                  <p>Hyderabad, Telangana, India</p>
                  <p>Available for internships and collaborations.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 text-xs text-[#6B7280] sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Pranav Reddy. All rights reserved.</p>

            <p className="inline-flex items-center gap-2">
              Built with React & Tailwind
              <Heart className="h-3.5 w-3.5 text-[#7F5AF0]" fill="currentColor" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;