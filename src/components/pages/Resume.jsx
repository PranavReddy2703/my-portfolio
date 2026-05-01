import { ArrowLeft, Download } from "lucide-react";

export default function ResumePage() {
  return (
    <div className="flex h-screen w-full flex-col bg-[#050505] font-jakarta">
      
      {/* TOP NAVIGATION BAR */}
      <header className="relative flex w-full items-center justify-between bg-[#050505]/60 px-6 py-4 backdrop-blur-[10px] md:px-12 z-10">
        
        {/* Fading Bottom Border (matching your navbar!) */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] sm:h-[2px] bg-gradient-to-r from-black/0 via-[#F1F1F1]/50 to-[#666666]/0"></div>

        {/* GO BACK BUTTON */}
        <a
          href="/" // Change this if your home route is different
          className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[13px] font-medium uppercase tracking-wide text-zinc-300 transition-colors hover:border-white/20 hover:bg-white/5 hover:text-white"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          Go Back
        </a>

        {/* DOWNLOAD BUTTON (With your signature glowing effect) */}
        <a
          href="/resume.pdf"
          download="APR_Resume.pdf" // Prompts the browser to download the file instead of opening it
          className="group relative inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white transition-all duration-300"
        >
          <span className="absolute inset-0 rounded-full border border-white/15 bg-white/[0.03] transition-all duration-300 group-hover:border-violet-400 group-hover:bg-violet-500/10 group-hover:shadow-[0_0_12px_rgba(255,255,255,0.7),0_0_24px_rgba(127,90,240,0.6)] group-hover:animate-[pulse_1.5s_ease-in-out_infinite]"></span>
          <span className="relative flex items-center gap-2">
            Download
            <Download size={14} className="transition-transform duration-300 group-hover:translate-y-0.5" />
          </span>
        </a>
      </header>

      {/* PDF PREVIEW AREA */}
      <main className="flex-1 p-4 md:p-8 flex justify-center items-center">
        {/* The wrapper creates a nice border and shadow around the document */}
        <div className="h-full w-full max-w-5xl overflow-hidden rounded-xl border border-white/10 bg-zinc-900/50 shadow-2xl relative">
          <iframe
            src="/resume.pdf"
            className="h-full w-full rounded-xl"
            title="Resume Preview"
          />
        </div>
      </main>
    </div>
  );
}