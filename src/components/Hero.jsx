import heroImg from '/src/assets/hero3.svg';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { MdArrowOutward } from 'react-icons/md';

const Hero = () => {
  return (
    <div className="bg-zinc-950 text-stone-50 py-24" id='home'>
      <div className="align-element grid md:grid-cols-2 items-center gap-8 ">
        <article>
          <h1 className="text-6xl font-bold tracking-wider">
            I'm <br className="responsive-br" />
            <span className="uppercase" id="name">
              Ashish Raj
            </span>
          </h1>
          <p className="mt-4 text-3xl text-stone-400 capitalize tracking-wide">A Front-End Developer</p>
          <p className="mt-2 text-lg text-neutral-100 capitalize tracking-wide">
            turning ideas into interactive reality
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="#">
              <FaGithubSquare className="h-8 w-8 text-stone-400 hover:text-white duration-300" />
            </a>
            <a href="#">
              <FaLinkedin className="h-8 w-8 text-stone-400 hover:text-white duration-300" />
            </a>
            <a href="#">
              <FaTwitterSquare className="h-8 w-8 text-stone-400 hover:text-white duration-300" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-1 text-blue-700 uppercase rounded-4xl bg-stone-200 px-2"
            >
              Resume <MdArrowOutward />
            </a>
          </div>
        </article>
        <article className="hidden md:flex md:justify-center">
          <img src={heroImg} alt="coding-image" className="h-80 lg:h-96" />
        </article>
      </div>
    </div>
  );
};

export default Hero;
