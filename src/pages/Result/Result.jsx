import { Link, useLocation } from "react-router-dom";

function Result() {
  const { state } = useLocation();

  const {
    wpm = 0,
    accuracy = 0,
    wrong = 0,
    correct = 0,
  } = state || {};

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#09090b] text-white">
      <div className="w-full max-w-4xl rounded-3xl bg-zinc-900 p-10">

        <h1 className="mb-10 text-center text-5xl font-bold">
          Test Complete
        </h1>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">

          <div className="rounded-xl bg-zinc-800 p-6 text-center">
            <p className="text-zinc-400">WPM</p>
            <h2 className="mt-2 text-5xl font-bold text-yellow-400">
              {wpm}
            </h2>
          </div>

          <div className="rounded-xl bg-zinc-800 p-6 text-center">
            <p className="text-zinc-400">Accuracy</p>
            <h2 className="mt-2 text-5xl font-bold text-green-400">
              {accuracy}%
            </h2>
          </div>

          <div className="rounded-xl bg-zinc-800 p-6 text-center">
            <p className="text-zinc-400">Mistakes</p>
            <h2 className="mt-2 text-5xl font-bold text-red-400">
              {wrong}
            </h2>
          </div>

          <div className="rounded-xl bg-zinc-800 p-6 text-center">
            <p className="text-zinc-400">Correct</p>
            <h2 className="mt-2 text-5xl font-bold text-cyan-400">
              {correct}
            </h2>
          </div>

        </div>

        <Link
          to="/test"
          className="mt-10 block rounded-xl bg-yellow-400 py-4 text-center text-xl font-bold text-black hover:bg-yellow-300"
        >
          Restart Test
        </Link>

      </div>
    </div>
  );
}

export default Result;