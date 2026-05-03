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

function EducationCard({ item, align = "left" }) {
  const Icon = item.icon;

  return (
    <div className="group relative w-[18rem] rounded-[1.25rem] border border-white/[0.08] bg-[#0A0A0E]/80 p-4 shadow-[inset_1px_1px_0_rgba(255,255,255,0.5),0_8px_30px_rgba(0,0,0,0.4)] backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-[#7F5AF0]/40 hover:bg-[linear-gradient(145deg,rgba(127,90,240,0.1)_0%,rgba(10,10,14,0.9)_100%)] hover:shadow-[0_0_40px_rgba(127,90,240,0.15)] md:p-5 lg:w-[21rem]">
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
      className="relative flex h-[100dvh] min-h-[600px] flex-col overflow-hidden px-6 pb-24 pt-8 md:px-10 lg:px-12 scroll-mt-16"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute rounded-full"
          style={{
            width: "32rem",
            height: "32rem",
            left: "-15%",
            top: "10%",
            background:
              "radial-gradient(circle, rgba(127,90,240,.3) 0%, rgba(127,90,240,.4) 26%, rgba(127,90,240,.25) 42%, rgba(76,29,149,0) 76%)",
            filter: "blur(70px)",
          }}
        />

        <div
          className="absolute rounded-full"
          style={{
            width: "35rem",
            height: "35rem",
            left: "40%",
            bottom: "-18%",
            background:
              "radial-gradient(circle, rgba(127,90,240,0.50) 0%, rgba(127,90,240,0.12) 26%, rgba(127,90,240,0.05) 42%, rgba(76,29,149,0) 76%)",
            filter: "blur(85px)",
          }}
        />

        <div
          className="absolute rounded-full"
          style={{
            width: "24rem",
            height: "24rem",
            right: "-6%",
            top: "15%",
            background:
              "radial-gradient(circle, rgba(127,90,240,1) 0%, rgba(127,90,240,0.08) 28%, rgba(76,29,149,0) 72%)",
            filter: "blur(75px)",
          }}
        />

        <div
          className="absolute rounded-full"
          style={{
            width: "10rem",
            height: "10rem",
            left: "45%",
            top: "18%",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 35%, rgba(255,255,255,0) 75%)",
            filter: "blur(30px)",
          }}
        />
      </div>

      <div className="mx-auto flex h-full w-full max-w-7xl flex-col 2xl:max-w-[1440px]">
        <div className="shrink-0 text-left">
          <h2 className="text-4xl font-extrabold uppercase tracking-[-0.05em] text-[#F1F1F1] sm:text-5xl md:text-6xl">
            EDUCATION
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#9EA6BA]">
            My academic journey and milestones.
          </p>
        </div>

        <div className="relative hidden w-full flex-1 items-center md:flex">
          <div className="absolute left-0 right-0 top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-white/[0.05] shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]" />

          <div className="absolute left-0 top-1/2 h-1.5 w-[85%] -translate-y-1/2 rounded-full bg-gradient-to-r from-[#7F5AF0]/20 via-[#7F5AF0] to-[#7F5AF0] shadow-[0_0_20px_rgba(127,90,240,0.6)]" />

          {educationData.map((item) => (
            <div
              key={item.id}
              className="absolute top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
              style={{ left: item.xPos }}
            >
              {item.position === "top" && (
                <div className="absolute bottom-full mb-2 flex flex-col items-center md:mb-3">
                  <div className="mb-2 md:mb-3">
                    <EducationCard item={item} />
                  </div>
                  <div className="h-[8vh] min-h-[2rem] max-h-[5rem] w-px bg-gradient-to-t from-[#7F5AF0] to-transparent opacity-60" />
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
                <div className="absolute top-full mt-2 flex flex-col items-center md:mt-3">
                  <div className="h-[8vh] min-h-[2rem] max-h-[5rem] w-px bg-gradient-to-b from-[#7F5AF0] to-transparent opacity-60" />
                  <div className="mt-2 md:mt-3">
                    <EducationCard item={item} />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="relative mt-12 flex flex-1 flex-col justify-center gap-8 md:hidden">
          <div className="absolute bottom-0 left-[1.1rem] top-2 w-1 rounded-full bg-white/[0.05]" />
          <div
            className="absolute left-[1.1rem] top-2 w-1 rounded-full bg-[#7F5AF0] shadow-[0_0_15px_rgba(127,90,240,0.5)]"
            style={{ height: "90%" }}
          />

          {educationData.map((item) => (
            <div key={item.id} className="relative pl-12">
              <div className="absolute left-[0.7rem] top-5 z-10 h-4 w-4 rounded-full border-[3px] border-[#05060A] bg-[#7F5AF0] shadow-[0_0_10px_rgba(127,90,240,0.8)]" />
              <EducationCard item={item} align="left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}