import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import myResume from "../../assets/resume.pdf";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About Me", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#050505]/60 backdrop-blur-[10px]">
      
      {/* THE GRADIENT LINE */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] sm:h-[2px] bg-gradient-to-r from-black/0 via-[#F1F1F1]/50 to-[#666666]/0"></div>

      <nav className="relative flex w-full items-center justify-between px-6 py-4 md:px-12">
        
        {/* LOGO */}
        <a
          href="#home"
          onClick={() => setActiveLink("Home")}
          className="font-jakarta text-xl font-extrabold tracking-[-0.025rem] text-[#F1F1F1] drop-shadow-[0_4px_10px_rgba(127,90,240,0.50)] transition-all hover:drop-shadow-[0_4px_15px_rgba(127,90,240,0.70)]"
        >
          APR
        </a>

        {/* DESKTOP NAV LINKS */}
        <ul className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:inline-flex md:items-center md:justify-center gap-6 lg:gap-8">
          {navLinks.map((link) => {
            const isActive = activeLink === link.name;
            return (
              <li 
                key={link.name} 
                className={`flex flex-col items-center transition-transform duration-300 ease-out ${
                  isActive ? "-translate-y-0.5" : "translate-y-0"
                }`}
              >
                <a
                  href={link.href}
                  onClick={() => setActiveLink(link.name)}
                  className={`font-jakarta text-[15px] uppercase tracking-tight transition-all duration-300 ease-out ${
                    isActive 
                      ? "font-bold text-zinc-100" 
                      : "font-medium text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  {link.name}
                </a>
                
                {/* Active Dot */}
                <div className="mt-0.5 flex h-1 items-center justify-center">
                  {isActive && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                      <circle cx="2" cy="2" r="2" fill="currentColor" className="text-zinc-100" />
                    </svg>
                  )}
                </div>
              </li>
            );
          })}
        </ul>

        {/* DESKTOP RESUME BUTTON */}
        <div className="hidden md:block">
          <a
            href={myResume}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-white transition-all duration-300"
          >
            {/* Background, Border, and Animated Glow Layer */}
            <span className="absolute inset-0 rounded-full border border-white/15 bg-white/[0.03] transition-all duration-300 group-hover:border-violet-400 group-hover:bg-violet-500/10 group-hover:shadow-[0_0_12px_rgba(255,255,255,0.7),0_0_24px_rgba(127,90,240,0.6)] group-hover:animate-[pulse_1.5s_ease-in-out_infinite]"></span>
            
            {/* Text & Icon Layer */}
            <span className="relative flex items-center gap-2">
              Resume
              <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </a>
        </div>

        {/* MOBILE MENU TOGGLE (Updated with premium glows and press state) */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white transition-all duration-300 hover:border-violet-400/50 hover:bg-violet-500/15 hover:shadow-[0_0_10px_rgba(127,90,240,0.3)] active:scale-95 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* MOBILE MENU DROPDOWN */}
      {isOpen && (
        <div className="bg-[#050505]/80 px-6 py-5 backdrop-blur-[10px] md:hidden relative">
          
          <div className="absolute top-0 left-0 right-0 h-[1px] sm:h-[2px] bg-gradient-to-r from-black/0 via-[#F1F1F1]/50 to-[#666666]/0"></div>

          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = activeLink === link.name;
              return (
                <li 
                  key={link.name}
                  className={`transition-transform duration-300 ease-out w-max ${
                    isActive ? "-translate-y-0.5" : "translate-y-0"
                  }`}
                >
                  <a
                    href={link.href}
                    className={`block font-jakarta text-[15px] uppercase tracking-tight transition-all duration-300 ease-out ${
                      isActive ? "font-bold text-zinc-100" : "font-medium text-zinc-400 hover:text-zinc-200"
                    }`}
                    onClick={() => {
                      setActiveLink(link.name);
                      setIsOpen(false);
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
            
            {/* MOBILE RESUME BUTTON */}
            <li className="pt-2">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex w-max items-center justify-center gap-2 rounded-full px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-white transition-all duration-300"
              >
                <span className="absolute inset-0 rounded-full border border-white/15 bg-white/[0.03] transition-all duration-300 group-hover:border-violet-400 group-hover:bg-violet-500/10 group-hover:shadow-[0_0_12px_rgba(255,255,255,0.7),0_0_24px_rgba(127,90,240,0.6)] group-hover:animate-[pulse_1.5s_ease-in-out_infinite]"></span>
                <span className="relative flex items-center gap-2">
                  Resume
                  <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;