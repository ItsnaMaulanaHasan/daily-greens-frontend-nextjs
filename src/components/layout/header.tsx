import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-emerald-100 bg-white">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-emerald-800">
          Daily Greens
        </Link>

        <nav
          aria-label="Navigasi utama"
          className="flex items-center gap-6 text-sm font-medium text-slate-600">
          <a href="#menu" className="transition-colors hover:text-emerald-700">
            Menu
          </a>
          <a
            href="#tentang"
            className="transition-colors hover:text-emerald-700">
            Tentang
          </a>
        </nav>
      </div>
    </header>
  );
}
