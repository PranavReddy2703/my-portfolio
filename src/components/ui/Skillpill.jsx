import { useState, useEffect } from "react";

export default function SkillPill({ label, Icon, index = 0 }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false);

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 100 + 50);

    return () => clearTimeout(timer);
  }, [label, index]);

  return (
    <div
      className={`transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
        isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
      }`}
    >
      <div
        className="group flex w-[280px] cursor-pointer items-center transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-1 hover:border-white/30 hover:shadow-[inset_1px_1px_0_rgba(255,255,255,0.10),0_12px_28px_rgba(127,90,240,0.14)] xl:w-[300px]"
        style={{
          padding: "0.78rem 1.25rem",
          gap: "2.1rem",
          borderRadius: "6.25rem",
          border: "0.5px solid rgba(255, 255, 255, 0.16)",
          background:
            "linear-gradient(96deg, rgba(26,27,35,0.34) 0%, rgba(5,5,5,0.20) 100%)",
          backdropFilter: "blur(15px)",
          boxShadow:
            "inset 1px 1px 0 rgba(255,255,255,0.06), 8px 8px 22px rgba(0,0,0,0.20)",
        }}
      >
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:border-[#7F5AF0]/30 group-hover:bg-white/[0.03]">
          <Icon className="h-6 w-6 text-white/80 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110 group-hover:text-white group-hover:drop-shadow-[0_0_12px_rgba(127,90,240,0.85)]" />
        </div>

        <span
          className="origin-left text-white/90 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.03] group-hover:text-white"
          style={{
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontSize: "1rem",
            fontWeight: 400,
            lineHeight: "normal",
          }}
        >
          {label}
        </span>
      </div>
    </div>
  );
}