import { useState, useEffect } from "react";
import { Code2, BrainCircuit, Wrench } from "lucide-react";

const menuItems = [
  { id: "Web Development", icon: Code2 },
  { id: "Data Science & ML", icon: BrainCircuit },
  { id: "Tools & Design", icon: Wrench },
];

export default function SkillMenu({ activeSkillGroup, setActiveSkillGroup }) {
  const initialIndex =
    3000 + menuItems.findIndex((item) => item.id === activeSkillGroup);

  const [centerIndex, setCenterIndex] = useState(initialIndex);

  // FIX: Smart synchronization that calculates the shortest path 
  // instead of snapping backward and breaking the infinite loop.
  useEffect(() => {
    setCenterIndex((prevIndex) => {
      const currentLocal = ((prevIndex % menuItems.length) + menuItems.length) % menuItems.length;
      const targetLocal = menuItems.findIndex((item) => item.id === activeSkillGroup);

      if (currentLocal === targetLocal) return prevIndex; // Already at the right index

      let diff = targetLocal - currentLocal;

      // Ensure the wheel takes the shortest visual path (forward or backward)
      if (diff > menuItems.length / 2) diff -= menuItems.length;
      if (diff < -menuItems.length / 2) diff += menuItems.length;

      return prevIndex + diff;
    });
  }, [activeSkillGroup]);

  const RADIUS = 480;
  const ANGLE_STEP = 22;
  const wheelRotation = -centerIndex * ANGLE_STEP;

  const visibleIndices = [
    centerIndex - 2,
    centerIndex - 1,
    centerIndex,
    centerIndex + 1,
    centerIndex + 2,
  ];

  return (
    <div className="relative flex min-h-[35rem] w-full items-center justify-center overflow-hidden">
      <div className="relative h-[30rem] w-full max-w-[38rem]">
        <div className="absolute left-[-280px] top-1/2 z-0 flex h-0 w-0 items-center justify-center md:left-[-240px]">
          <div
            className="absolute flex items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
            style={{ transform: `rotate(${wheelRotation}deg)` }}
          >
            <svg
              className="pointer-events-none absolute z-0 overflow-visible"
              style={{ width: RADIUS * 2, height: RADIUS * 2 }}
              viewBox={`0 0 ${RADIUS * 2} ${RADIUS * 2}`}
              fill="none"
            >
              <circle
                cx={RADIUS}
                cy={RADIUS}
                r={RADIUS}
                stroke="rgba(255, 255, 255, 0.48)"
                strokeWidth="2"
                strokeDasharray="7 8"
              />
            </svg>

            {visibleIndices.map((absoluteIndex) => {
              const itemIndex =
                ((absoluteIndex % menuItems.length) + menuItems.length) %
                menuItems.length;

              const item = menuItems[itemIndex];
              const itemAngle = absoluteIndex * ANGLE_STEP;
              const offset = absoluteIndex - centerIndex;
              const isActive = offset === 0;
              const isVisible = Math.abs(offset) <= 1;
              const counterRotation = -(offset * ANGLE_STEP);
              const MenuIcon = item.icon;

              return (
                <div
                  key={`${absoluteIndex}-${item.id}`}
                  className={`absolute left-0 top-0 origin-left transition-opacity duration-700 ${
                    isVisible ? "opacity-100" : "pointer-events-none opacity-0"
                  }`}
                  style={{
                    width: `${RADIUS}px`,
                    height: "0px",
                    transform: `rotate(${itemAngle}deg)`,
                    zIndex: isActive ? 20 : 10,
                  }}
                >
                  <div className="absolute right-0 top-0 flex h-0 w-0 items-center justify-center">
                    <div
                      className="absolute flex items-center transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                      style={{ transform: `rotate(${counterRotation}deg)` }}
                    >
                      <button
                        type="button"
                        onClick={() => {
                          setCenterIndex(absoluteIndex);
                          setActiveSkillGroup(item.id);
                        }}
                        className="group relative flex items-center justify-center"
                      >
                        <div
                          className={`relative z-10 flex items-center justify-center rounded-full transition-all duration-700 ${
                            isActive ? "h-16 w-16" : "h-14 w-14"
                          }`}
                        >
                          <div className="absolute inset-0 rounded-full bg-[#050505]" />

                          <span
                            className={`absolute inset-0 rounded-full border transition-all duration-700 ${
                              isActive
                                ? "border-white/15 shadow-[0_0_34px_4px_rgba(127,90,240,0.24)]"
                                : "border-white/[0.05] shadow-none hover:border-white/12"
                            }`}
                            style={{
                              background: isActive
                                ? "linear-gradient(0deg, rgba(5,5,5,0.40) 0%, rgba(5,5,5,0.40) 100%), radial-gradient(70% 70% at 50% 50%, rgba(127,90,240,0.24) 0%, rgba(15,10,25,0.85) 100%)"
                                : "radial-gradient(70% 70% at 50% 50%, rgba(40,40,50,0.15) 0%, rgba(10,10,15,0.85) 100%)",
                            }}
                          />

                          <MenuIcon
                            className={`relative z-10 text-white transition-all duration-700 ${
                              isActive
                                ? "h-7 w-7 drop-shadow-[0_0_10px_rgba(127,90,240,1)]"
                                : "h-6 w-6 opacity-60 group-hover:opacity-100 group-hover:drop-shadow-[0_0_8px_rgba(127,90,240,0.6)]"
                            }`}
                            strokeWidth={isActive ? 2 : 1.5}
                          />
                        </div>

                        <div
                          className={`absolute left-[100%] ml-5 flex items-center gap-4 whitespace-nowrap transition-all duration-700 ${
                            isActive ? "opacity-100" : "opacity-55 group-hover:opacity-85"
                          }`}
                        >
                          <span
                            className={`uppercase transition-all duration-700 ${
                              isActive
                                ? "text-[1.55rem] font-bold tracking-[-0.03em] text-[#F1F1F1] drop-shadow-md xl:text-[1.7rem]"
                                : "text-[1.05rem] font-medium tracking-[-0.02em] text-[#6F7687]"
                            }`}
                          >
                            {item.id}
                          </span>

                          <div
                            className={`flex items-center transition-all duration-500 ease-out ${
                              isActive
                                ? "w-6 translate-x-0 opacity-100 delay-200"
                                : "w-0 -translate-x-8 opacity-0 delay-0"
                            }`}
                          >
                            <svg
                              viewBox="0 0 24 24"
                              width="24"
                              height="24"
                              fill="white"
                              className="drop-shadow-[0_0_8px_rgba(127,90,240,0.6)]"
                            >
                              <path d="M16 5l-7 7 7 7V5z" />
                            </svg>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}