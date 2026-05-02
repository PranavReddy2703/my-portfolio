import { useState } from "react";
import { Code2, BrainCircuit, Wrench, GitBranch, Flame } from "lucide-react";

import { FaReact, FaCss3 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { ImHtmlFive2 } from "react-icons/im";
import { VscVscode } from "react-icons/vsc";
import {
  SiPython,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiGithub,
  SiFirebase,
  SiFigma,
} from "react-icons/si";

import SkillMenu from "../ui/SkillMenu";
import SkillPill from "../ui/SkillPill";

const skillsData = {
  "Web Development": {
    icon: Code2,
    pills: [
      { label: "React", icon: FaReact },
      { label: "Tailwind", icon: RiTailwindCssFill },
      { label: "JavaScript", icon: IoLogoJavascript },
      { label: "HTML", icon: ImHtmlFive2 },
      { label: "CSS", icon: FaCss3 },
    ],
  },
  "Data Science & ML": {
    icon: BrainCircuit,
    pills: [
      { label: "Python", icon: SiPython },
      { label: "Pandas", icon: SiPandas },
      { label: "NumPy", icon: SiNumpy },
      { label: "Scikit-learn", icon: SiScikitlearn },
      { label: "XGBoost", icon: Flame },
    ],
  },
  "Tools & Design": {
    icon: Wrench,
    pills: [
      { label: "Git", icon: GitBranch },
      { label: "GitHub", icon: SiGithub },
      { label: "VS Code", icon: VscVscode },
      { label: "Firebase", icon: SiFirebase },
      { label: "Figma", icon: SiFigma },
    ],
  },
};

export default function Skills() {
  const [activeSkillGroup, setActiveSkillGroup] = useState("Web Development");
  const activeData = skillsData[activeSkillGroup];

  return (
    <section
      id="skills"
      className="relative overflow-visible px-6 pb-24 pt-8 md:px-10 lg:px-12 scroll-mt-16"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute"
          style={{
            width: "15rem",
            height: "25rem",
            borderRadius: "50%",
            background:
              "linear-gradient(180deg, rgba(127, 90, 240, 0.55) 0%, rgba(76, 29, 149, 0.00) 100%)",
            filter: "blur(clamp(100px, 12vw, 200px))",
            left: "10%",
            top: "100%",
            transform: "translate(-50%, -50%)",
          }}
        />
        <div
          className="absolute"
          style={{
            width: "35rem",
            height: "35rem",
            borderRadius: "50%",
            background:
              "linear-gradient(180deg, rgba(127, 90, 240, 0.80) 0%, rgba(76, 29, 149, 0.00) 100%)",
            filter: "blur(clamp(120px, 15vw, 200px))",
            right: "5%",
            top: "40%",
            transform: "translate(50%, -50%)",
          }}
        />
      </div>

      <div className="mx-auto w-full max-w-7xl 2xl:max-w-[1440px]">
        <h2 className="text-4xl font-extrabold uppercase tracking-[-0.05em] text-[#F1F1F1] sm:text-5xl md:text-6xl">
          SKILLS
        </h2>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] xl:gap-10">
          <div className="relative w-full overflow-hidden">
            <SkillMenu
              activeSkillGroup={activeSkillGroup}
              setActiveSkillGroup={setActiveSkillGroup}
            />
          </div>

          <div className="flex flex-col gap-5 lg:pl-2 xl:pl-0">
            {activeData.pills.map((pill, index) => (
              <SkillPill
                key={pill.label}
                label={pill.label}
                Icon={pill.icon}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}