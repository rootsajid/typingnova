import {
  FaBolt,
  FaChartLine,
  FaKeyboard,
  FaTrophy,
} from "react-icons/fa";

const features = [
  {
    icon: <FaKeyboard size={32} />,
    title: "Real Time Typing",
    desc: "Character by character typing engine with smooth cursor."
  },
  {
    icon: <FaChartLine size={32} />,
    title: "Live Analytics",
    desc: "Track WPM, CPM, Accuracy and Mistakes in real time."
  },
  {
    icon: <FaBolt size={32} />,
    title: "Lightning Fast",
    desc: "Built using React 19 & Vite for blazing performance."
  },
  {
    icon: <FaTrophy size={32} />,
    title: "Achievements",
    desc: "Unlock badges, streaks and compete on leaderboard."
  }
];

function Features() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">

      <h2 className="mb-12 text-center text-5xl font-black">
        Why
        <span className="text-purple-500"> TypeNova?</span>
      </h2>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

        {features.map((item) => (

          <div
            key={item.title}
            className="group rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-3 hover:border-purple-500 hover:shadow-[0_0_40px_rgba(139,92,246,.25)]"
          >

            <div className="mb-6 text-purple-400 transition group-hover:scale-110">
              {item.icon}
            </div>

            <h3 className="mb-3 text-2xl font-bold">
              {item.title}
            </h3>

            <p className="text-zinc-400">
              {item.desc}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Features;