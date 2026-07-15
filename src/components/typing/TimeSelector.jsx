const times = [15, 30, 60, 120];

function TimeSelector({ duration, setDuration }) {
  return (
    <div className="mb-10 flex items-center justify-center gap-4">
      {times.map((time) => (
        <button
          key={time}
          type="button"
          onClick={() => setDuration(time)}
          className={`
            h-8 w-18 rounded-md border text-xs font-semibold
            transition-all duration-200
            ${
              duration === time
                ? "border-purple-500 bg-purple-600 text-white"
                : "border-zinc-700 bg-zinc-900 text-zinc-300 hover:border-purple-400 hover:bg-zinc-800"
            }
          `}
        >
          {time}s
        </button>
      ))}
    </div>
  );
}

export default TimeSelector;