// import { links } from '../data';

// const Navbar = () => {
//   return (
//     <nav className="bg-white/5 text-stone-50 fixed w-full z-100 backdrop-blur-[3px] border-b border-white/10 shadow-md text-shadow-lg/250">
//       <div className="align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-4 justify-between">
//         <img src="/src/assets/AR-Logo-w.png" alt="AR-logo-image" className="w-20 h-12 drop-shadow-xl/300" />
//         <div className="flex gap-x-4 text-stone-50">
//           {links.map(link => {
//             const { id, href, text } = link;
//             return (
//               <a
//                 key={id}
//                 href={href}
//                 className="lowercase text-lg font-normal tracking-wide hover:text-stone-400 active:text-zinc-300 hover:scale-115 active:scale-115 duration-300 text-stone-50"
//               >
//                 {text}
//               </a>
//             );
//           })}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import { links } from '../data';
// import { useState } from 'react';
// import { HiMenuAlt1 } from 'react-icons/hi';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };

//   return (
//     <nav className="bg-white/5 text-stone-50 fixed w-full z-50 backdrop-blur-[3px] border-b border-white/10 shadow-md text-shadow-lg/250">
//       <div className="align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-4 justify-between">
//         <img src="/src/assets/AR-Logo-w.png" alt="AR-logo-image" className="w-20 h-12 drop-shadow-xl/300" />
//         {/* Desktop Links */}
//         <div className="hidden sm:flex gap-x-4 text-stone-50">
//           {links.map(link => {
//             const { id, href, text } = link;
//             return (
//               <a
//                 key={id}
//                 href={href}
//                 className="lowercase text-lg font-normal tracking-wide hover:text-stone-400 active:text-zinc-300 hover:scale-115 active:scale-115 duration-300 text-stone-50"
//               >
//                 {text}
//               </a>
//             );
//           })}
//         </div>
//       </div>

//       {/* Hamburger menu for mobile */}
//       <div className="flex sm:hidden">
//         <button onClick={toggleMenu} className="text-3xl focus:outline-none">
//           <HiMenuAlt1 />
//         </button>
//       </div>

//       {isMenuOpen && (
//         <div
//           onClick={closeMenu}
//           className="fixed h-max sm:hidden inset-0 bg-black/80 flex flex-col items-center justify-center space-y-8 text-2xl z-40"
//         >
//           {links.map(link => {
//             const { id, href, text } = link;
//             return (
//               <a
//                 key={id}
//                 href={href}
//                 className="text-white hover:text-stone-400 active:text-zinc-300 duration-300"
//               >
//                 {text}
//               </a>
//             );
//           })}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import { useState, useRef, useEffect } from 'react';
import { links } from '../data';
import { HiMenuAlt1 } from 'react-icons/hi';
import { CgClose } from 'react-icons/cg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = e => {
      if (menuRef.current && !menuRef.current.contains(e.target) && !navbarRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 640) {
        // Tailwind's sm breakpoint
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav
      ref={navbarRef}
      className="bg-white/5 text-stone-50 fixed w-full z-100 backdrop-blur-[3px] border-b border-white/10 shadow-md text-shadow-lg/250"
    >
      <div className="relative align-element py-4 max-sm:py-3 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-4 justify-between">
        <a href="#" className="no-underline">
          {' '}
          <img
            src="/assets/AR-Logo-w.png"
            alt="AR-logo-image"
            className="w-20 h-12 max-sm:w-15 max-sm:h-9 drop-shadow-xl/300"
          />
        </a>

        {/* Desktop Links (hidden on mobile) */}
        <div className="hidden lg:flex gap-x-4 text-stone-50">
          {links.map(link => (
            <a
              key={link.id}
              href={link.href}
              className="lowercase text-lg font-normal tracking-wide hover:text-stone-400 active:text-zinc-300 hover:scale-115 active:scale-115 duration-300 text-stone-50"
            >
              {link.text}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden absolute top-3 max-sm:top-[1px] right-4 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            // Close icon (X)
            <CgClose size={45} className="drop-shadow-xl/300" />
          ) : (
            // Hamburger icon
            <HiMenuAlt1 size={45} className="drop-shadow-xl/300" />
          )}
        </button>

        {/* Mobile Menu (shown when isOpen is true) */}
        {isOpen && (
          <div
            ref={menuRef}
            className="lg:hidden absolute w-[12rem] top-full right-0 m-1 rounded-2xl bg-neutral-900/90 backdrop-blur-[3px] -webkit-backdrop-blur-[3px] border border-white/10 shadow-md text-shadow-lg/250"
          >
            <div className="flex flex-col items-center py-4 gap-y-4">
              {links.map(link => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="lowercase text-lg font-normal tracking-wide hover:text-stone-400 active:text-zinc-300 focus:text-stone-400 duration-300 text-stone-50"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
