import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { MdArrowOutward } from 'react-icons/md';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <div className="text-stone-50 flex justify-center h-screen" id="about">
      <div className="flex justify-center items-center gap-8 pt-20 max-sm:pt-0">
        <article>
          <h1 className="text-5xl font-bold tracking-wider text-center">
            <span className="" id="my-name">
              Ashish Raj
            </span>
          </h1>

          <p className="glow-3 job mt-4 text-3xl font-medium text-stone-950 capitalize tracking-wide text-center opacity-80 text-shadow-lg/250">
            <Typewriter
              words={['Front-End Developer', 'Graphics Designer', 'Artist']}
              loop={0}
              cursor
              cursorStyle="_"
              cursorColor="#1c1917" // Tailwind stone-950
              typeSpeed={120}
              deleteSpeed={40}
              delaySpeed={2000}
              className="inline"
            />
          </p>
          <p className="mt-2 text-lg font-normal text-neutral-100 opacity-60 text-center px-4 ">
            Crafting intuitive user interfaces that inspire, inform and engage
          </p>
          <div className="flex justify-center gap-x-4 mt-4">
            <a href="https://github.com/ashishraj-dev" target="_blank" rel="noopener noreferrer">
              <FaGithubSquare className="glow h-8 w-8 text-zinc-950 hover:text-white duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/ashishraj-dev" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="glow h-8 w-8 text-zinc-950 hover:text-white duration-300" />
            </a>
            <a href="https://x.com/I_am_AshishRaj" target="_blank" rel="noopener noreferrer">
              <FaTwitterSquare className="glow h-8 w-8 text-zinc-950 hover:text-white duration-300" />
            </a>
            <a
              href="https://drive.google.com/uc?export=download&id=1xdauhp6l-xgyE-LuJp18AaEL4hSGJp0P"
              download
              className="glow-2 font-medium inline-flex items-center gap-1 text-stone-50 uppercase rounded-4xl active:-translate-y-2 focus:bg-zinc-100 focus:text-black duration-300 bg-white-500 border-white px-2"
            >
              Resume{' '}
              <span className="arrow">
                <MdArrowOutward />
              </span>
            </a>
          </div>
        </article>
        {/* <article className="hidden md:flex md:justify-center">
          <img src={heroImg} alt="coding-image" className="h-80 lg:h-96" />
        </article> */}
      </div>
    </div>
  );
};

export default Hero;

// // import heroImg from '/src/assets/hero3.svg';
// import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
// import { MdArrowOutward } from 'react-icons/md';
// import { useState, useEffect } from 'react';

// const Hero = () => {
//   const [text, setText] = useState('');
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [loopNum, setLoopNum] = useState(0);
//   const [typingSpeed, setTypingSpeed] = useState(150);

//   const titles = ['Front-End Developer', 'Graphics Designer', 'Artist'];

//   useEffect(() => {
//     const handleType = () => {
//       const current = loopNum % titles.length;
//       const fullText = titles[current];

//       setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

//       setTypingSpeed(isDeleting ? 75 : 150);

//       if (!isDeleting && text === fullText) {
//         setTimeout(() => setIsDeleting(true), 1500);
//       } else if (isDeleting && text === '') {
//         setIsDeleting(false);
//         setLoopNum(loopNum + 1);
//       }
//     };

//     const timer = setTimeout(handleType, typingSpeed);
//     return () => clearTimeout(timer);
//   }, [text, isDeleting, loopNum, titles, typingSpeed]);

//   return (
//     <div className="text-stone-50 flex justify-center h-screen" id="about">
//       <div className="flex justify-center items-center gap-8 pt-20 max-sm:pt-0">
//         <article>
//           <h1 className="text-5xl font-bold tracking-wider text-center">
//             <span className="" id="my-name">
//               Ashish Raj
//             </span>
//           </h1>
//           <p className="glow-3 job mt-4 text-3xl font-medium text-stone-950 capitalize tracking-wide text-center text-shadow-lg/250">
//             {text}
//             <span className="ml-1 border-r-2 border-stone-900 animate-pulse">{/* Cursor element */}</span>
//           </p>
//           <p className="mt-2 text-lg font-normal text-neutral-100 opacity-60 text-center px-4 ">
//             Crafting intuitive user interfaces that inspire, inform and engage
//           </p>
//           <div className="flex justify-center gap-x-4 mt-4">
//             <a href="https://github.com/ashishraj-dev" target="_blank" rel="noopener noreferrer">
//               <FaGithubSquare className="glow h-8 w-8 text-zinc-950 hover:text-white duration-300" />
//             </a>
//             <a href="https://www.linkedin.com/in/ashishraj-dev" target="_blank" rel="noopener noreferrer">
//               <FaLinkedin className="glow h-8 w-8 text-zinc-950 hover:text-white duration-300" />
//             </a>
//             <a href="https://x.com/I_am_AshishRaj" target="_blank" rel="noopener noreferrer">
//               <FaTwitterSquare className="glow h-8 w-8 text-zinc-950 hover:text-white duration-300" />
//             </a>
//             <a
//               href="https://drive.google.com/uc?export=download&id=1yuPXhdNtwXtIbdkjPrB6RRtNDDew-i5e"
//               download
//               className="glow-2 font-medium inline-flex items-center gap-1 text-stone-50 uppercase rounded-4xl active:-translate-y-2 focus:bg-zinc-100 focus:text-black duration-300 bg-white-500 border-white px-2"
//             >
//               Resume{' '}
//               <span className="arrow">
//                 <MdArrowOutward />
//               </span>
//             </a>
//           </div>
//         </article>
//         {/* <article className="hidden md:flex md:justify-center">
//           <img src={heroImg} alt="coding-image" className="h-80 lg:h-96" />
//         </article> */}
//       </div>
//     </div>
//   );
// };

// export default Hero;
