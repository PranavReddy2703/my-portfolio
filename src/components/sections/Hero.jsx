import { ArrowRight } from "lucide-react";
import ProfileCard from "../ui/ProfileCard";

function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100dvh] flex-col justify-center overflow-visible pt-24 scroll-mt-24"
    >
      {/* CHANGED: Removed overflow-hidden so the blur bleeds naturally into the next section */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[-18%] top-[-10%] h-[34vw] w-[38vw] rounded-full bg-[linear-gradient(180deg,rgba(127,90,240,0.40)_0%,rgba(76,29,149,0)_100%)] blur-[160px] md:h-[32vw] md:w-[36vw]" />
        <div className="absolute right-[-10%] top-[42%] h-[42vw] w-[46vw] rounded-full bg-[linear-gradient(180deg,rgba(127,90,240,0.65)_0%,rgba(76,29,149,0)_100%)] blur-[190px] md:right-[2%] md:top-[38%] md:h-[38vw] md:w-[42vw]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center px-6 md:px-10 lg:px-12 2xl:max-w-[1440px]">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] 2xl:gap-20">
          
          <div className="max-w-3xl 2xl:max-w-4xl">
            <div className="mt-6">
              <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-[#D8B4FE] 2xl:text-[clamp(0.875rem,1vw,1rem)]">
                Hi, I’m Pranav
              </p>

              <h1 className="-translate-x-[3px] max-w-4xl text-5xl font-extrabold leading-[0.95] tracking-[-0.04em] text-[#F1F1F1] sm:text-6xl md:text-7xl lg:text-[5.5rem] 2xl:-translate-x-[5px] 2xl:max-w-5xl 2xl:text-[clamp(5.5rem,5.5vw,6.5rem)]">
                Building Digital <br />
                {/* CHANGED: Matched the solid purple text from the screenshot */}
                <span className="text-[#8B5CF6] drop-shadow-[0_4px_20px_rgba(139,92,246,0.30)]">
                  Experiences.
                </span>
              </h1>

              <p className="mt-4 max-w-3xl text-base leading-8 text-[#94A1B2] sm:text-lg 2xl:max-w-4xl 2xl:text-[clamp(1.125rem,1.5vw,1.25rem)]">
                Frontend Developer with a passion for Data Science and interactive design.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              {/* CHANGED: Styled the button exactly like the purple glowing button in the screenshot */}
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 rounded-2xl bg-[linear-gradient(90deg,#7F5AF0_0%,#6B46C1_100%)] px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white shadow-[0_0_30px_rgba(127,90,240,0.4)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(127,90,240,0.6)]"
              >
                View Projects
              </a>
            </div>
          </div>

          <div className="relative hidden lg:flex lg:justify-center">
            <div className="w-[72%] max-w-[25rem] 2xl:w-[85%] 2xl:max-w-[32rem]">
              <ProfileCard
                avatarUrl="/profile.png" 
                name="" 
                title="" 
                handle="pranavreddy2703" 
                status="Open to opportunities" 
                contactText="Let's Talk" 
                showUserInfo={false} 
                enableTilt={true}
                enableMobileTilt={false}
                behindGlowEnabled={false}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;