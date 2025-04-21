import Marquee from 'react-fast-marquee';

const Skills = () => {
  return (
    <>
    <section id='skills'>
      <div className="font-bold text-3xl uppercase text-center bg-zinc-950 text-stone-50 tracking-wide py-20">
        Skills
      </div>
      <div className="marquee">
        <Marquee
          gradient={true}
          gradientWidth={150}
          speed={50}
          className="text-xl font-extrabold py-3 uppercase overflow-hidden text-stone-700"
        >
          <span style={{ marginRight: '2rem' }}>HTML5</span>
          <span style={{ marginRight: '2rem' }}>CSS3</span>
          <span style={{ marginRight: '2rem' }}>JavaScript</span>
          <span style={{ marginRight: '2rem' }}>React.js</span>
          <span style={{ marginRight: '2rem' }}>Supabase</span>
          <span style={{ marginRight: '2rem' }}>Sql</span>
          <span style={{ marginRight: '2rem' }}>Bootstrap</span>
          <span style={{ marginRight: '2rem' }}>Git/Github</span>
          <span style={{ marginRight: '2rem' }}>Photoshop</span>
          <span style={{ marginRight: '2rem' }}>Illustrator</span>
        </Marquee>
      </div>
      </section>
    </>
  );
};

export default Skills;
