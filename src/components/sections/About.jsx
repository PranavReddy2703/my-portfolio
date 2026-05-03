import { Globe } from "lucide-react";
import {
  FiGithub as Github,
  FiLinkedin as Linkedin,
  FiInstagram as Instagram,
} from "react-icons/fi";
import { SiLeetcode as Leetcode } from "react-icons/si";

function About() {
  const cardShell =
    "rounded-[1.5rem] border border-white/[0.05] bg-[linear-gradient(96deg,rgba(26,27,35,0.32)_0%,rgba(5,5,5,0.24)_100%)] shadow-[inset_1px_1px_0_rgba(255,255,255,0.10),12px_12px_30px_rgba(0,0,0,0.30)] backdrop-blur-[25px]";

  return (
    <section
      id="about"
      className="relative flex flex-col overflow-visible px-6 pb-20 pt-8 md:px-10 lg:px-12 scroll-mt-16"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute rounded-full"
          style={{
            width: "45rem",
            height: "45rem",
            left: "50%",
            top: "45%",
            transform: "translate(-50%, -50%)",
            background:
              "linear-gradient(180deg, rgba(127, 90, 240, 0.25) 0%, rgba(76, 29, 149, 0.00) 100%)",
            filter: "blur(180px)",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: "45rem",
            height: "45rem",
            left: "0%",
            bottom: "0%",
            transform: "translate(-50%, 50%)",
            background:
              "linear-gradient(180deg, rgba(127, 90, 240, 0.75) 0%, rgba(76, 29, 149, 0.00) 100%)",
            filter: "blur(200px)",
          }}
        />
      </div>

      <div className="mx-auto w-full max-w-7xl 2xl:max-w-[1440px]">
        <h2 className="text-4xl font-extrabold uppercase tracking-[-0.05em] text-[#F1F1F1] sm:text-5xl md:text-6xl">
          ABOUT ME
        </h2>

        <div className="mt-12 flex flex-col gap-5">
          <div className="flex flex-col gap-5 lg:flex-row">
            <div
              className={`flex w-full flex-col items-center gap-8 p-6 sm:flex-row sm:items-start md:gap-14 lg:w-[calc(66.8%-0.625rem)] lg:min-h-[14.1875rem] lg:p-8 ${cardShell}`}
            >
              <div className="flex-1">
                <p className="text-lg font-bold tracking-[-0.0225rem] text-[#94A1B2]">
                  My Journey
                </p>
                <p className="mt-5 max-w-xl text-lg font-normal leading-[1.5] tracking-[-0.0225rem] text-[#94A1B2]">
                  I bridge the gap between{" "}
                  <span className="font-semibold text-[#F1F1F1]">logic</span> and{" "}
                  <span className="font-semibold text-[#F1F1F1]">creativity</span>.
                  Starting with Python, I evolved into building interactive React
                  interfaces, always focused on{" "}
                  <span className="font-semibold text-[#F1F1F1]">
                    user experience
                  </span>.
                </p>
              </div>

              <div className="w-full max-w-[120px] shrink-0 self-center sm:max-w-[140px] md:w-1/3 md:max-w-[160px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-auto w-full"
                  viewBox="0 0 184 199"
                  fill="none"
                >
                  <g filter="url(#filter0_d_57_60)">
                    <circle cx="14" cy="96" r="4" fill="#7F5AF0" />
                  </g>
                  <g filter="url(#filter1_d_57_60)">
                    <circle cx="93" cy="14" r="4" fill="#7F5AF0" />
                  </g>
                  <g filter="url(#filter2_d_57_60)">
                    <circle cx="146" cy="185" r="4" fill="#7F5AF0" />
                  </g>
                  <g filter="url(#filter3_d_57_60)">
                    <path
                      d="M14 95.91H45.0577C54.3855 95.91 62.4693 89.3814 64.6647 80.3157C87.3094 -13.1926 99.6776 -7.64913 118 95.91C139.284 202.541 151.216 225.672 172.5 95.91"
                      stroke="#7F5AF0"
                      strokeWidth="3"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_57_60"
                      x="0"
                      y="82"
                      width="28"
                      height="28"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset />
                      <feGaussianBlur stdDeviation="5" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.498039 0 0 0 0 0.352941 0 0 0 0 0.941176 0 0 0 1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_57_60"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_57_60"
                        result="shape"
                      />
                    </filter>
                    <filter
                      id="filter1_d_57_60"
                      x="79"
                      y="0"
                      width="28"
                      height="28"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset />
                      <feGaussianBlur stdDeviation="5" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.498039 0 0 0 0 0.352941 0 0 0 0 0.941176 0 0 0 1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_57_60"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_57_60"
                        result="shape"
                      />
                    </filter>
                    <filter
                      id="filter2_d_57_60"
                      x="132"
                      y="171"
                      width="28"
                      height="28"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset />
                      <feGaussianBlur stdDeviation="5" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.498039 0 0 0 0 0.352941 0 0 0 0 0.941176 0 0 0 1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_57_60"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_57_60"
                        result="shape"
                      />
                    </filter>
                    <filter
                      id="filter3_d_57_60"
                      x="4"
                      y="2.49634"
                      width="179.98"
                      height="193.772"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset />
                      <feGaussianBlur stdDeviation="5" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.498039 0 0 0 0 0.352941 0 0 0 0 0.941176 0 0 0 1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_57_60"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_57_60"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>

            <div
              className={`flex w-full flex-col items-center justify-center px-6 py-8 lg:w-[calc(33.2%-0.625rem)] lg:min-h-[14.1875rem] ${cardShell}`}
            >
              <div className="relative mb-6 flex h-[120px] w-[120px] items-center justify-center">
                <div className="absolute inset-0 m-auto h-12 w-12 rounded-full bg-[#7F5AF0] opacity-40 blur-[14px]"></div>
                <div className="absolute h-[3.5rem] w-[3.5rem] rounded-full border border-white/[0.08]"></div>
                <div className="absolute h-[5.5rem] w-[5.5rem] rounded-full border border-white/[0.04]"></div>
                <div className="absolute h-[8.5rem] w-[8.5rem] rounded-full border border-white/[0.02]"></div>
                <Globe
                  className="relative z-10 h-[2.8rem] w-[2.8rem] text-white"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-[1.25rem] font-bold leading-normal tracking-[-0.025rem] text-white">
                Hyderabad, IN
              </h3>
              <p
                className="mt-1 text-[0.75rem] font-medium leading-normal tracking-[-0.015rem] text-[#7F5AF0]"
                style={{ fontFamily: '"Inter", sans-serif' }}
              >
                17.3850° N, 78.4867° E
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5 lg:flex-row">
            <div
              className={`flex w-full flex-col p-6 lg:w-[calc(46.1%-0.625rem)] lg:min-h-[15.625rem] lg:p-8 ${cardShell}`}
            >
              <div>
                <p className="text-lg font-bold tracking-[-0.0225rem] text-[#94A1B2]">
                  Current Status
                </p>
              </div>

              <div className="flex flex-1 items-center justify-center">
                <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.02] px-6 py-3 shadow-[inset_1px_1px_0_rgba(255,255,255,0.06),8px_8px_20px_rgba(0,0,0,0.22)]">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-[softThrob_3s_ease-in-out_infinite] rounded-full bg-emerald-400/50" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.9)]" />
                  </span>
                  <span className="text-sm font-bold uppercase tracking-[0.08em] text-[#F1F1F1]">
                    Available
                  </span>
                </div>
              </div>
            </div>

            <div
              className={`flex w-full flex-col p-6 lg:w-[calc(53.9%-0.625rem)] lg:min-h-[15.625rem] lg:p-8 ${cardShell}`}
            >
              <div>
                <p className="text-lg font-bold tracking-[-0.0225rem] text-[#94A1B2]">
                  Connect
                </p>
                <p className="mt-1 text-[0.95rem] leading-relaxed text-[#8D93A6]">
                  Check out my code or say hello.
                </p>
              </div>

              <div className="flex flex-1 items-center justify-center gap-4 sm:gap-5">
                <a
                  href="https://github.com/pranavreddy2703"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-[4rem] w-[4rem] items-center justify-center rounded-full border border-white/[0.06] bg-white/[0.02] text-white transition-all duration-300 hover:border-[#7F5AF0]/40 hover:bg-white/[0.05] hover:shadow-[0_0_30px_rgba(127,90,240,0.12)] sm:h-[4.5rem] sm:w-[4.5rem]"
                  aria-label="GitHub"
                >
                  <Github className="h-7 w-7 sm:h-8 sm:w-8" />
                </a>

                <a
                  href="https://www.linkedin.com/pranav-reddy-atakula-278430268/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-[4rem] w-[4rem] items-center justify-center rounded-full border border-white/[0.06] bg-white/[0.02] text-white transition-all duration-300 hover:border-[#7F5AF0]/40 hover:bg-white/[0.05] hover:shadow-[0_0_30px_rgba(127,90,240,0.12)] sm:h-[4.5rem] sm:w-[4.5rem]"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-7 w-7 sm:h-8 sm:w-8" />
                </a>

                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-[4rem] w-[4rem] items-center justify-center rounded-full border border-white/[0.06] bg-white/[0.02] text-white transition-all duration-300 hover:border-[#7F5AF0]/40 hover:bg-white/[0.05] hover:shadow-[0_0_30px_rgba(127,90,240,0.12)] sm:h-[4.5rem] sm:w-[4.5rem]"
                  aria-label="Instagram"
                >
                  <Instagram className="h-7 w-7 sm:h-8 sm:w-8" />
                </a>

                <a
                  href="https://leetcode.com/u/gh2023002153/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-[4rem] w-[4rem] items-center justify-center rounded-full border border-white/[0.06] bg-white/[0.02] text-white transition-all duration-300 hover:border-[#7F5AF0]/40 hover:bg-white/[0.05] hover:shadow-[0_0_30px_rgba(127,90,240,0.12)] sm:h-[4.5rem] sm:w-[4.5rem]"
                  aria-label="LeetCode"
                >
                  <Leetcode className="h-[1.6rem] w-[1.6rem] sm:h-[1.85rem] sm:w-[1.85rem]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;