function RestartButton({ restart, id }) {
  return (
    <button
      id={id}
      onClick={restart}
      className="rounded-xl border border-zinc-700 bg-zinc-900 px-6 py-3 text-lg font-semibold text-yellow-400 transition hover:border-yellow-400 hover:bg-zinc-800 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
    >
      Restart
    </button>
  );
}

export default RestartButton;