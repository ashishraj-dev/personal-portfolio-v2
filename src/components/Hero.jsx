// import heroImg from '/src/assets/hero3.svg';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { MdArrowOutward } from 'react-icons/md';

const Hero = () => {
  return (
    <div className=" text-stone-50 flex justify-center h-screen" id="home">
      <div className="flex justify-center items-center gap-8 pt-20">
        <article>
          <h1 className="text-5xl font-bold tracking-wider text-center">
            <span className="" id="name">
              Ashish Raj
            </span>
          </h1>
          <p className="job mt-4 text-3xl font-medium text-stone-400 capitalize tracking-wide text-center opacity-80 text-shadow-lg/250">
            A Front-End Developer
          </p>
          <p className="mt-2 text-lg font-normal text-neutral-100 opacity-60 text-center px-4">
            Crafting intuitive user interfaces that inspire, inform and engage
          </p>
          <div className="flex justify-center gap-x-4 mt-4">
            <a href="https://github.com/ashishraj-dev" target="_blank">
              <FaGithubSquare className="glow h-8 w-8 text-zinc-950 hover:text-white duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/ashishraj-dev" target="_blank">
              <FaLinkedin className="glow h-8 w-8 text-zinc-950 hover:text-white duration-300" />
            </a>
            <a href="https://x.com/I_am_AshishRaj" target="_blank">
              <FaTwitterSquare className="glow h-8 w-8 text-zinc-950 hover:text-white duration-300" />
            </a>
            <a
              href="https://drive.google.com/uc?export=download&id=1yuPXhdNtwXtIbdkjPrB6RRtNDDew-i5e"
              download
              className="glow-2 font-medium inline-flex items-center gap-1 text-white uppercase rounded-4xl border active:-translate-y-2 focus:bg-zinc-100 focus:text-black duration-300 bg-white-500 border-white px-2"
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
