import { MdArrowOutward } from 'react-icons/md';
import { FaGithubSquare } from 'react-icons/fa';

const ProjectsCard = ({ title, desc, img, live, github, tech }) => {
  return (
    <article className="projects flex p-5 h-auto mb-10 last:mb-0">
      <div className="project-desc z-1 flex flex-col mr-5">
        <h3 className="text-stone-100 text-lg font-medium">{title}</h3>
        <p className="text-md font-medium text-neutral-500 leading-5 pt-2 mb-4">{desc}</p>
        <ul className="flex flex-wrap gap-1 text-white text-sm mb-4">
          {tech.map(el => (
            <li className=" rounded-2xl border px-1">{el}</li>
          ))}
        </ul>
        <div className="project-links flex gap-3 flex-1 items-end">
          <a href={live} target="_blank" rel="noopener noreferrer">
            <div className="live relative flex text-white ml-5 items-center">
              live
              <span className="arrow2">
                <MdArrowOutward />
              </span>
            </div>
          </a>{' '}
          <a href={github} target="_blank" rel="noopener noreferrer">
            <div className="flex text-white">
              <FaGithubSquare className="text-2xl m-auto" />
              <span className="arrow2">
                <MdArrowOutward />
              </span>
            </div>
          </a>
        </div>
      </div>
      <div className="project-ss flex grow items-center">
        <img
          src={img}
          alt="first project ss"
          className="images object-cover border-[0.2rem] border-solid border-[rgba(255,255,255,0.68)] rounded-[20px]"
        />
      </div>
    </article>
  );
};

export default ProjectsCard;
