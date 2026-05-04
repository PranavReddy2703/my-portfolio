import { ArrowRight } from "lucide-react";
import ProfileCard from "../ui/ProfileCard";
import myProfile from "../../assets/profile.png";

function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100dvh] flex-col justify-center overflow-visible pt-24 scroll-mt-24"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[-18%] top-[-10%] h-[34vw] w-[38vw] rounded-full bg-[linear-gradient(180deg,rgba(127,90,240,0.30)_0%,rgba(76,29,149,0)_100%)] blur-[160px] md:h-[32vw] md:w-[36vw]" />
        <div className="absolute right-[-10%] top-[42%] h-[42vw] w-[46vw] rounded-full bg-[linear-gradient(180deg,rgba(127,90,240,0.22)_0%,rgba(76,29,149,0)_100%)] blur-[190px] md:right-[2%] md:top-[38%] md:h-[38vw] md:w-[42vw]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center px-6 md:px-10 lg:px-12 2xl:max-w-[1440px]">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] 2xl:gap-20">
          <div className="max-w-3xl 2xl:max-w-4xl">
            <div className="mt-6">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 shadow-[inset_1px_1px_0_rgba(255,255,255,0.08)] backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-[#8B5CF6] shadow-[0_0_12px_rgba(139,92,246,0.8)]" />
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#D8B4FE]">
                  Computer Science & Data Science
                </p>
              </div>

              <p className="mb-3 text-sm font-medium text-[#C7CDD8] sm:text-base">
                Hi, I&apos;m Pranav Reddy
              </p>

              <h1 className="-translate-x-[3px] max-w-5xl text-5xl font-extrabold leading-[0.92] tracking-[-0.05em] text-[#F1F1F1] sm:text-6xl md:text-7xl lg:text-[5.6rem] 2xl:-translate-x-[5px] 2xl:text-[clamp(5.5rem,5.8vw,6.8rem)]">
                Building Digital
                <br />
                <span className="inline-block bg-[linear-gradient(92deg,#7F5AF0_0%,#F1F1F1_100%)] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  Experiences.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#94A1B2] sm:text-lg 2xl:max-w-3xl 2xl:text-[clamp(1.125rem,1.5vw,1.25rem)]">
                A B.Tech Computer Science student blending data science, AI, and modern frontend development to build impactful solutions.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 rounded-full bg-[#F5F5F5] px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-[#0A0A0E] shadow-[0_10px_30px_rgba(255,255,255,0.08)] transition-all duration-300 hover:translate-y-[-2px] hover:bg-white"
              >
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.02] px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-[#F1F1F1] shadow-[inset_1px_1px_0_rgba(255,255,255,0.08)] backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="relative hidden lg:flex lg:justify-center">
            <div className="w-[72%] max-w-[25rem] 2xl:w-[85%] 2xl:max-w-[32rem]">
              <ProfileCard
                avatarUrl={myProfile}
                name=""
                title=""
                handle="pranavreddy2703"
                status="Always Learning"
                contactText="Let's Talk"
                showUserInfo={false}
                enableTilt={true}
                enableMobileTilt={true}
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