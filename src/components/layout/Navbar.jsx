import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/60 bg-black/30 backdrop-blur-xl">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <Link
          to="/"
          className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-4xl font-black text-transparent"
        >
          TypeNova
        </Link>

        <nav className="hidden gap-10 text-zinc-300 md:flex">

          <Link className="hover:text-purple-400" to="/">Home</Link>

          <Link className="hover:text-purple-400" to="/test">Typing</Link>

          <Link className="hover:text-purple-400" to="/leaderboard">Leaderboard</Link>

          <Link className="hover:text-purple-400" to="/profile">Profile</Link>

        </nav>

        <button className="rounded-xl bg-purple-600 px-5 py-2 font-semibold transition hover:bg-purple-500">
          Login
        </button>

      </div>

    </header>
  );
}

export default Navbar;