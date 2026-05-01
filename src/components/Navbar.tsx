import { Link } from "react-router-dom";

const Navbar = () => (
  <header className="border-b border-border bg-card">
    <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
      <Link to="/patients" className="text-lg font-semibold tracking-tight text-foreground hover:opacity-80 transition-opacity">
        Raekis
      </Link>
      <span className="text-sm text-muted-foreground">Patient Dashboard</span>
    </div>
  </header>
);

export default Navbar;
