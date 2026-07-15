const stats = [
  {
    number: "165+",
    title: "Best WPM",
  },
  {
    number: "99.8%",
    title: "Accuracy",
  },
  {
    number: "15K+",
    title: "Users",
  },
  {
    number: "1M+",
    title: "Tests",
  },
];

function Stats() {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 pb-20 md:grid-cols-4">
      {stats.map((item) => (
        <div
          key={item.title}
          className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 backdrop-blur-xl transition hover:-translate-y-2 hover:border-purple-500"
        >
          <h2 className="text-4xl font-black text-purple-400">
            {item.number}
          </h2>

          <p className="mt-3 text-zinc-400">
            {item.title}
          </p>
        </div>
      ))}
    </section>
  );
}

export default Stats;