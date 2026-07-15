function TypingHeader({
  timeLeft,
  wpm,
  accuracy,
  wrong,
  progress,
}) {
  return (
    <>
      <div className="mb-8 grid grid-cols-4 gap-4">
        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4 text-center">
          <p className="text-xs uppercase tracking-widest text-zinc-500">
            Time
          </p>
          <h2 className="mt-2 text-4xl font-black text-yellow-400">
            {timeLeft}
          </h2>
        </div>

        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4 text-center">
          <p className="text-xs uppercase tracking-widest text-zinc-500">
            WPM
          </p>
          <h2 className="mt-2 text-4xl font-black text-white">
            {wpm}
          </h2>
        </div>

        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4 text-center">
          <p className="text-xs uppercase tracking-widest text-zinc-500">
            Accuracy
          </p>
          <h2 className="mt-2 text-4xl font-black text-green-400">
            {accuracy}%
          </h2>
        </div>

        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4 text-center">
          <p className="text-xs uppercase tracking-widest text-zinc-500">
            Errors
          </p>
          <h2 className="mt-2 text-4xl font-black text-red-400">
            {wrong}
          </h2>
        </div>
      </div>

      <div className="mb-10 h-2 w-full overflow-hidden rounded-full bg-zinc-800">
        <div
          className="h-full rounded-full bg-yellow-400 transition-all duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>
    </>
  );
}

export default TypingHeader;