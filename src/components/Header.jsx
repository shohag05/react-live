import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="bg-slate-200 shadow-md">
        <nav className="flex justify-between p-6 bg-blue-500 text-white">
          <Link to="/" className="font-semibold">
            Home
          </Link>
          <div>
            <Link to="/about" className="font-semibold mr-4">
              About
            </Link>
            <Link to="/team" className="font-semibold">
              Team
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
