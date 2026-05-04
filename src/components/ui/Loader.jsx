import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#050505]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[-10%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(127,90,240,0.28)_0%,rgba(127,90,240,0.08)_35%,transparent_70%)] blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(127,90,240,0.22)_0%,rgba(127,90,240,0.06)_35%,transparent_70%)] blur-[130px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <motion.p
          className="mb-4 text-[0.68rem] font-semibold uppercase tracking-[0.35em] text-[#B794F4]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Portfolio
        </motion.p>

        <motion.h1
          className="text-5xl font-extrabold tracking-[-0.08em] text-white sm:text-6xl md:text-7xl"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          APR
        </motion.h1>

        <motion.div
          className="mt-6 h-[2px] w-24 overflow-hidden rounded-full bg-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.4 }}
        >
          <motion.div
            className="h-full w-full origin-left rounded-full bg-[#7F5AF0]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.76, 0, 0.24, 1] }}
          />
        </motion.div>

        <motion.p
          className="mt-4 text-sm text-white/55"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.5 }}
        >
          Building digital experiences
        </motion.p>
      </div>
    </motion.div>
  );
}