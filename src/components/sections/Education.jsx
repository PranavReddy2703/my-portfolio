import { School, GraduationCap, BookOpenCheck } from "lucide-react";

const educationData = [
  {
    id: "school",
    title: "School",
    institution: "Narayana Concept School",
    detail: "10th Standard",
    year: "Passed out in 2021",
    icon: School,
    position: "top",
    xPos: "15%",
    active: true,
  },
  {
    id: "intermediate",
    title: "Intermediate",
    institution: "Narayana Junior College",
    detail: "Intermediate",
    year: "2021 - 2023",
    icon: BookOpenCheck,
    position: "bottom",
    xPos: "50%",
    active: true,
  },
  {
    id: "university",
    title: "University",
    institution: "GITAM (Deemed to be University)",
    detail: "B.Tech in Computer Science",
    year: "Ongoing",
    icon: GraduationCap,
    position: "top",
    xPos: "85%",
    active: true,
    isCurrent: true,
  },
];

function EducationCard({ item }) {
  const Icon = item.icon;

  return (
    <div className="group relative w-[18rem] rounded-[1.25rem] border border-white/[0.08] bg-[#0A0A0E]/80 p-4 shadow-[inset_1px_1px_0_rgba(255,255,255,0.25),0_8px_30px_rgba(0,0,0,0.4)] backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-[#7F5AF0]/40 hover:bg-[linear-gradient(145deg,rgba(127,90,240,0.1)_0%,rgba(10,10,14,0.9)_100%)] hover:shadow-[0_0_40px_rgba(127,90,240,0.15)] md:p-5 lg:w-[21rem]">
      <div className="flex items-center gap-3">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors duration-500 md:h-12 md:w-12 ${
            item.isCurrent
              ? "border-[#7F5AF0]/40 bg-[#7F5AF0]/20 shadow-[0_0_15px_rgba(127,90,240,0.4)]"
              : "border-white/10 bg-white/[0.03] group-hover:border-[#7F5AF0]/30 group-hover:bg-[#7F5AF0]/10"
          }`}
        >
          <Icon
            className={`h-4 w-4 transition-colors duration-500 md:h-5 md:w-5 ${
              item.isCurrent ? "text-white" : "text-white/60 group-hover:text-white"
            }`}
            strokeWidth={1.8}
          />
        </div>

        <div>
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#7F5AF0]">
            {item.title}
          </p>
          <p className="mt-0.5 text-[0.9rem] font-bold leading-tight tracking-[-0.02em] text-[#F1F1F1] lg:text-base">
            {item.institution}
          </p>
        </div>
      </div>

      <div className="mt-3 space-y-1 md:mt-4">
        <p className="text-xs font-medium text-[#A7AEC0] md:text-sm">{item.detail}</p>
        <p className="text-[0.65rem] font-semibold text-[#6B7280] md:text-xs">{item.year}</p>
      </div>
    </div>
  );
}

export default function Education() {
  return (
    <section
      id="education"
      // Changed to h-[100dvh] for strict 100vh height (dvh fixes mobile browser bars)
      // Changed overflow-visible to overflow-hidden so the fixed height doesn't create scrollbars
      className="relative isolate overflow-visible px-6 h-[100dvh] scroll-mt-16 md:px-10 lg:px-12"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-visible">
        <div
          className="absolute rounded-full"
          style={{
            width: "40rem",
            height: "24rem",
            left: "-22%",
            top: "4%",
            background:
              "radial-gradient(circle, rgba(127,90,240,.8) 0%, rgba(127,90,240,.2) 34%, rgba(76,29,149,0) 76%)",
            filter: "blur(90px)",
          }}
        />

        <div
          className="absolute rounded-full"
          style={{
            width: "34rem",
            height: "34rem",
            left: "38%",
            bottom: "-20%",
            background:
              "radial-gradient(circle, rgba(127,90,240,0.28) 0%, rgba(127,90,240,0.10) 30%, rgba(127,90,240,0.04) 46%, rgba(76,29,149,1) 76%)",
            filter: "blur(96px)",
          }}
        />

        <div
          className="absolute rounded-full"
          style={{
            width: "28rem",
            height: "28rem",
            right: "-12%",
            top: "10%",
            background:
              "radial-gradient(circle, rgba(127,90,240,.24) 0%, rgba(127,90,240,0.07) 30%, rgba(76,29,149,0) 72%)",
            filter: "blur(88px)",
          }}
        />

        <div
          className="absolute rounded-full"
          style={{
            width: "12rem",
            height: "12rem",
            left: "42%",
            top: "16%",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.015) 35%, rgba(255,255,255,0) 75%)",
            filter: "blur(42px)",
          }}
        />
      </div>

      {/* Changed to flex flex-col h-full with top/bottom padding */}
      <div className="mx-auto w-full max-w-7xl 2xl:max-w-[1440px] flex flex-col h-full py-12 lg:py-16">
        
        {/* Heading remains at top (shrink-0 prevents it from squishing) */}
        <div className="text-left shrink-0">
          <h2 className="text-4xl font-extrabold uppercase tracking-[-0.05em] text-[#F1F1F1] sm:text-5xl md:text-6xl">
            EDUCATION
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#9EA6BA]">
            My academic journey and milestones.
          </p>
        </div>

        {/* 
          DESKTOP TIMELINE 
          flex-1 takes all remaining space. items-center aligns it perfectly in the middle vertically. 
        */}
        <div className="hidden md:flex flex-1 items-center justify-center w-full">
          <div className="relative w-full h-[28rem]">
            <div className="absolute left-0 right-0 top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-white/[0.05] shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]" />

            <div className="absolute left-0 top-1/2 h-1.5 w-[85%] -translate-y-1/2 rounded-full bg-gradient-to-r from-[#7F5AF0]/20 via-[#7F5AF0] to-[#7F5AF0] shadow-[0_0_20px_rgba(127,90,240,0.6)]" />

            {educationData.map((item) => (
              <div
                key={item.id}
                className="absolute top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
                style={{ left: item.xPos }}
              >
                {item.position === "top" && (
                  <div className="absolute bottom-full mb-3 flex flex-col items-center">
                    <div className="mb-3">
                      <EducationCard item={item} />
                    </div>
                    <div className="h-16 w-px bg-gradient-to-t from-[#7F5AF0] to-transparent opacity-60" />
                  </div>
                )}

                <div className="relative z-10 flex items-center justify-center">
                  <div
                    className={`h-5 w-5 rounded-full border-[3px] border-[#05060A] transition-all duration-500 md:h-6 md:w-6 md:border-[4px] ${
                      item.isCurrent
                        ? "bg-[#7F5AF0] shadow-[0_0_25px_rgba(127,90,240,0.9)] ring-2 ring-[#7F5AF0]/50"
                        : "bg-[#7F5AF0] shadow-[0_0_15px_rgba(127,90,240,0.5)]"
                    }`}
                  />
                  {item.isCurrent && (
                    <div className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#7F5AF0] opacity-40" />
                  )}
                </div>

                {item.position === "bottom" && (
                  <div className="absolute top-full mt-3 flex flex-col items-center">
                    <div className="h-16 w-px bg-gradient-to-b from-[#7F5AF0] to-transparent opacity-60" />
                    <div className="mt-3">
                      <EducationCard item={item} />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 
          MOBILE TIMELINE 
          Also uses flex-1 and justify-center to center vertically between heading and bottom. 
        */}
        <div className="flex flex-col justify-center flex-1 md:hidden w-full relative mt-8">
          <div className="relative flex flex-col gap-8">
            <div className="absolute bottom-0 left-[1.1rem] top-2 w-1 rounded-full bg-white/[0.05]" />
            <div
              className="absolute left-[1.1rem] top-2 w-1 rounded-full bg-[#7F5AF0] shadow-[0_0_15px_rgba(127,90,240,0.5)]"
              style={{ height: "90%" }}
            />

            {educationData.map((item) => (
              <div key={item.id} className="relative pl-12">
                <div className="absolute left-[0.7rem] top-5 z-10 h-4 w-4 rounded-full border-[3px] border-[#05060A] bg-[#7F5AF0] shadow-[0_0_10px_rgba(127,90,240,0.8)]" />
                <EducationCard item={item} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}