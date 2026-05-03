import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";

const projects = [
  {
    title: "AgriSmart",
    subtitle: "Smart agriculture platform",
    description:
      "An IoT + ML based agriculture system with sensor monitoring, crop insights, and yield prediction.",
    tech: ["React", "FastAPI", "Firebase", "XGBoost"],
    github: "#",
    live: "#",
  },
  {
    title: "Real-Time Chat App",
    subtitle: "Full-stack communication platform",
    description:
      "A room-based real-time chat application with authentication, instant messaging, and responsive UI.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "#",
    live: "#",
  },
  {
    title: "Dishventory AI",
    subtitle: "Food inventory + forecasting",
    description:
      "An AI-assisted system for food inventory analysis and forecasting using time-series methods.",
    tech: ["React", "Python", "Prophet", "Kaggle"],
    github: "#",
    live: "#",
  },
  {
    title: "Guide for the Visually Impaired",
    subtitle: "Accessibility-focused assistance app",
    description:
      "A guidance system using object detection, distance estimation, and voice feedback for safer navigation.",
    tech: ["Python", "OpenCV", "Android", "TTS"],
    github: "#",
    live: "#",
  },
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") goToPrevious();
      if (event.key === "ArrowRight") goToNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section
      id="projects"
      aria-label="Featured projects carousel"
      className="relative overflow-visible px-6 pb-24 pt-8 md:px-10 lg:px-12 scroll-mt-16"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute"
          style={{
            width: "18rem",
            height: "28rem",
            borderRadius: "50%",
            background:
              "linear-gradient(180deg, rgba(127, 90, 240, 0.52) 0%, rgba(76, 29, 149, 0.00) 100%)",
            filter: "blur(clamp(100px, 12vw, 190px))",
            left: "0%",
            top: "70%",
            transform: "translate(-50%, -50%)",
          }}
        />
        <div
          className="absolute"
          style={{
            width: "32rem",
            height: "32rem",
            borderRadius: "50%",
            background:
              "linear-gradient(180deg, rgba(127, 90, 240, 0.35) 0%, rgba(76, 29, 149, 0.00) 100%)",
            filter: "blur(clamp(100px, 12vw, 190px))",
            right: "3%",
            top: "18%",
            transform: "translate(50%, -50%)",
          }}
        />
      </div>

      <div className="mx-auto w-full max-w-7xl 2xl:max-w-[1440px]">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-4xl font-extrabold uppercase tracking-[-0.05em] text-[#F1F1F1] sm:text-5xl md:text-6xl">
              PROJECTS
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#9EA6BA]">
              A selection of projects that reflect my work across full-stack
              development, machine learning, real-time systems, and practical
              product building.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={goToPrevious}
              aria-label="Previous project"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition-all duration-300 hover:border-[#7F5AF0]/30 hover:bg-white/[0.06]"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={goToNext}
              aria-label="Next project"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition-all duration-300 hover:border-[#7F5AF0]/30 hover:bg-white/[0.06]"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-12">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.06] bg-[linear-gradient(96deg,rgba(26,27,35,0.34)_0%,rgba(5,5,5,0.22)_100%)] shadow-[inset_1px_1px_0_rgba(255,255,255,0.08),12px_12px_32px_rgba(0,0,0,0.22)] backdrop-blur-[20px]">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="min-w-full p-6 md:p-8 lg:p-10"
                >
                  <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                    <div>
                      <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#7F5AF0]">
                        Featured Project
                      </p>

                      <h3 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-white md:text-4xl xl:text-[3.1rem]">
                        {project.title}
                      </h3>

                      <p className="mt-3 text-lg text-[#A7AEC0]">
                        {project.subtitle}
                      </p>

                      <p className="mt-6 max-w-2xl text-base leading-8 text-[#C5CAD6]">
                        {project.description}
                      </p>

                      <div className="mt-8 flex flex-wrap gap-3">
                        {project.tech.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/85"
                          >
                            {item}
                          </span>
                        ))}
                      </div>

                      <div className="mt-8 flex flex-wrap gap-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm text-white transition-all duration-300 hover:border-[#7F5AF0]/30 hover:bg-white/[0.07]"
                        >
                          <SiGithub className="h-4 w-4" />
                          Code
                        </a>

                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-[#7F5AF0]/30 bg-[#7F5AF0]/10 px-5 py-3 text-sm text-white transition-all duration-300 hover:bg-[#7F5AF0]/15"
                        >
                          Live Demo
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center justify-center">
                      <div className="relative flex aspect-[4/3] w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-[1.75rem] border border-white/10 bg-[radial-gradient(circle_at_center,rgba(127,90,240,0.18),rgba(10,10,15,0.92)_70%)] shadow-[inset_1px_1px_0_rgba(255,255,255,0.06)]">
                        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(127,90,240,0.08),transparent_45%,rgba(255,255,255,0.02))]" />
                        <div className="relative z-10 text-center">
                          <p className="text-sm uppercase tracking-[0.22em] text-[#7F5AF0]">
                            Project Preview
                          </p>
                          <h4 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-white">
                            {project.title}
                          </h4>
                          <p className="mt-3 max-w-xs text-sm leading-7 text-[#AEB5C5]">
                            You can replace this preview block with a real
                            screenshot, mockup, or mini visual card later.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            {projects.map((project, index) => (
              <button
                key={project.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to ${project.title}`}
                aria-pressed={activeIndex === index}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-10 bg-[#7F5AF0] shadow-[0_0_14px_rgba(127,90,240,0.7)]"
                    : "w-2.5 bg-white/25 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}