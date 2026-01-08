import { motion } from "framer-motion";

const float = {
  animate: {
    y: [0, -10, 0],
  },
  transition: {
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export function HeroVisual() {
  return (
    <div className="relative mx-auto h-[420px] w-[420px] max-w-full">
      {/* Soft animated aura */}
      <motion.div
        className="absolute inset-0 rounded-full blur-3xl opacity-70"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(99,102,241,0.22), transparent 55%), radial-gradient(circle at 70% 60%, rgba(168,85,247,0.18), transparent 55%), radial-gradient(circle at 45% 80%, rgba(236,72,153,0.12), transparent 55%)",
        }}
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating cards */}
      <motion.div
        {...float}
        className="absolute left-8 top-14 rounded-2xl border border-black/10 bg-white/70 px-4 py-3 shadow-sm backdrop-blur"
      >
        <div className="text-xs font-semibold tracking-wide text-black/70">
          UI DESIGN
        </div>
        <div className="text-sm font-semibold text-black">Clean systems</div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-6 top-28 rounded-2xl border border-black/10 bg-white/70 px-4 py-3 shadow-sm backdrop-blur"
      >
        <div className="text-xs font-semibold tracking-wide text-black/70">
          TOOLS
        </div>
        <div className="text-sm font-semibold text-black">Figma</div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-14 left-1/2 w-[220px] -translate-x-1/2 rounded-2xl border border-black/10 bg-white/70 px-4 py-3 shadow-sm backdrop-blur"
      >
        <div className="text-xs font-semibold tracking-wide text-black/70">
          SELECTED WORK
        </div>
        <div className="text-sm font-semibold text-black">
          4 Case Studies • Bilingual
        </div>
      </motion.div>
    </div>
  );
}
