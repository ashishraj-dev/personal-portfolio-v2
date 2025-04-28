import ProjectsCard from './ProjectsCard';
import { projects } from '../data';

const Projects = () => {
  return (
    <section id="projects">
      <div className="text-center py-20">
        <h1 className="projects-title font-medium text-5xl capitalize text-center background-clr text-stone-50">
          Projects
        </h1>
      </div>
      <div className="projects-container flex justify-center flex-col items-center ">
        {projects.map(project => {
          return <ProjectsCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;

/*
const Projects = () => {
  return (
    <article id="projects">
      <div className="text-center py-20">
        <h1 className="projects-title font-medium text-5xl capitalize text-center background-clr text-stone-50">
          Projects
        </h1>
      </div>
      <section className="projects-container flex justify-center">
        <div className="projects flex p-5 h-auto">
          <div className="project-desc z-1 flex flex-col mr-5">
            <h3 className="text-stone-100 text-lg font-medium">Factzzz</h3>
            <p className="text-md font-medium text-stone-400 leading-5 pt-2 mb-4">
              A Fact-Sharing Web Application that allows users to explore, submit, and vote on interesting
              facts, with category-based filtering, voting mechanisms, and a dispute-flagging feature.
            </p>
            <ul className="flex flex-wrap gap-1 text-white text-sm mb-4">
              <li className=" rounded-2xl border px-1">HTML5</li>
              <li className=" rounded-2xl border px-1">CSS3</li>
              <li className=" rounded-2xl border px-1">JavaScript(ES6+)</li>
              <li className=" rounded-2xl border px-1">React</li>
            </ul>
            <div className="project-links flex gap-3">
              <a href="https://factzzz.netlify.app/" target="_blank">
                <div className="live relative flex text-white ml-5 items-center">
                  live
                  <span className="arrow">
                    <MdArrowOutward />
                  </span>
                </div>
              </a>{' '}
              <a href="https://github.com/ashishraj-dev/react-factzzz" target="_blank">
                <div className="flex text-white">
                  <FaGithubSquare className="text-2xl m-auto" />
                  <span className="arrow">
                    <MdArrowOutward />
                  </span>
                </div>
              </a>
            </div>
          </div>
          <div className="project-ss flex grow items-center">
            <img
              src="/src/assets/p1.png"
              alt="first project ss"
              className="images object-cover border-[0.2rem] border-solid border-[rgba(205,197,197,0.68)] rounded-[20px]"
            />
          </div>
        </div>
      </section>
    </article>
  );
};

export default Projects;

*/
