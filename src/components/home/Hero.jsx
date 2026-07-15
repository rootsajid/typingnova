import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Glow */}
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-600/20 blur-[120px]" />

      <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col items-center justify-center px-6 text-center">

        <motion.span
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="mb-5 rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2 text-sm text-purple-300"
        >
          ⚡ Modern Typing Platform
        </motion.span>

        <motion.h1
          initial={{ opacity:0,y:40 }}
          animate={{ opacity:1,y:0 }}
          transition={{ duration:.8 }}
          className="max-w-5xl text-6xl font-black leading-tight md:text-8xl"
        >
          Master Your
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
            Typing Speed
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          transition={{ delay:.3 }}
          className="mt-8 max-w-2xl text-lg text-zinc-400"
        >
          Improve your typing speed, accuracy and consistency with
          real-time analytics and premium typing experience.
        </motion.p>

        <motion.div
          initial={{ opacity:0,y:20 }}
          animate={{ opacity:1,y:0 }}
          transition={{ delay:.5 }}
          className="mt-12 flex gap-5"
        >
          <button className="rounded-xl bg-purple-600 px-8 py-4 font-bold transition hover:scale-105 hover:bg-purple-500">
            Start Test
          </button>

          <button className="rounded-xl border border-zinc-700 bg-zinc-900 px-8 py-4 transition hover:border-purple-500">
            Customize
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;