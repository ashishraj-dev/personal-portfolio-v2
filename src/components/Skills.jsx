import Marquee from 'react-fast-marquee';

const Skills = () => {
  return (
    <>
      <section id="skills">
        {/* <div className="skills-title font-medium text-5xl capitalize text-center background-clr text-stone-50 py-20">
          Skills
        </div> */}
        <div className="text-center py-20">
          <h1 className="skills-title font-medium text-5xl capitalize text-stone-50 ">Skills</h1>
        </div>
        <div className="marquee relative overflow-hidden ">
          <Marquee
            gradient={true}
            gradientWidth={150}
            speed={50}
            pauseOnHover={true}
            className="text-xl font-extrabold py-3 uppercase overflow-hidden max-md:text-sm bg-white"
          >
            <span>HTML5</span>
            <span>CSS3</span>
            <span>JavaScript</span>
            <span>React.js</span>
            <span>Supabase</span>
            <span>Sql</span>
            <span>Bootstrap</span>
            <span>Git/Github</span>
            <span>Photoshop</span>
            <span>Illustrator</span>
          </Marquee>
        </div>
      </section>
    </>
  );
};

export default Skills;
