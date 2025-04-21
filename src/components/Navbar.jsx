import { links } from '../data';

const Navbar = () => {
  return (
    <nav className="bg-zinc-950 text-stone-50">
      <div className="align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8 justify-between">
        <img src="/src/assets/AR-Logo-w.png" alt="AR-logo-image" className="w-20 h-12" />
        <div className="flex gap-x-4 text-stone-50">
          {links.map(link => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className="uppercase text-lg font-bold tracking-wide hover:text-violet-600 hover:scale-115 duration-300 text-stone-50"
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
