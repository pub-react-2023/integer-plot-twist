import Account from "./Account";

export default function Header() {
  return (
    <header className="flex justify-between h-16 bg-blue-500 items-center text-white px-8">
      <h1 className="text-xl font-bold">PlotTwist</h1>
      <nav className="flex gap-4">
        <button>Beranda</button>
        <button>Tentang</button>
      </nav>
      <Account />
    </header>
  );
}
