import { links } from '../data';

const Navbar = () => {
  return (
    <nav className="bg-white/5 text-stone-50 fixed w-full z-10 backdrop-blur-[3px] border-b border-white/10 shadow-md text-shadow-lg/250">
      <div className="align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-4 justify-between">
        <img src="/src/assets/AR-Logo-w.png" alt="AR-logo-image" className="w-20 h-12 drop-shadow-xl/300" />
        <div className="flex gap-x-4 text-stone-50">
          {links.map(link => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className="lowercase text-lg font-normal tracking-wide hover:text-stone-400 active:text-zinc-300 hover:scale-115 active:scale-115 duration-300 text-stone-50"
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
