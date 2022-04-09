import { BrowserRouter as Router, Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="bg-pink-400">
      <div className="container px-8 py-3 mx-auto">
        <a href="/">
          <h1 className="text-4xl text-white font-extrabold">
            Lyric<span className="s-letter font-bold text-6xl">s</span>@
          </h1>
        </a>
      </div>
    </nav>
  );
}
