const links = [
  { path: "1", label: "Enterprises" },
  { path: "2", label: "About Us" },
];

export default function AppHeader() {
  return (
    <header className="bg-white w-full border-b border-gray-200 py-1 flex items-center px-6 justify-between gap-4">
      <img
        alt="RapidAPI Hub: public API Marketplace"
        loading="lazy"
        width="110"
        height="30"
        decoding="async"
        data-nimg="1"
        className="pr-3.5"
        src="/images/logo_primary.webp"
        style={{ color: "transparent" }}
      />

      {/* Main Links */}
      <div className="grow">
        <div className="flex gap-1 mt-1">
          {links.map((link) => (
            <a
              href={link.path}
              key={link.path}
              className="hover:bg-gray-100 px-3 py-2 rounded-sm hover:cursor-pointer text-xs font-semibold text-gray-800/90 transition-colors"
              type="button"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="flex gap-2 items-center">
        <button className="bg-blue-500 hover:bg-blue-500/90 font-semibold px-4 py-2 text-white rounded-sm text-xs transition-colors hover:cursor-pointer">
          Sign In
        </button>

        <button className="bg-stone-200 hover:bg-stone-300 font-semibold px-4 py-2 text-gray-800 rounded-sm text-xs transition-colors hover:cursor-pointer">
          Sign Up
        </button>
      </div>
    </header>
  );
}
