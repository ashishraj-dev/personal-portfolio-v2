const Experience = () => {
  return (
    <section id="experience">
      <div className="text-center py-20">
        <h1 className="experience-title font-medium text-5xl capitalize text-center background-clr text-stone-50">
          Experience
        </h1>
      </div>
      <article className="flex justify-center items-center m-auto w-1/2 max-lg:w-full max-lg:pl-10 px-5">
        <div className="experience-container mb-10 flex-1">
          <header className="flex max-[532px]:flex-col">
            <h1 className="font-semibold text-lg text-stone-100">Goitdev Technologies OPC Private Limited</h1>
            <div className="line"></div>
            <div className="experience-date font-medium text-neutral-500">Jan 2024 - Mar 2024</div>
          </header>
          <div className="font-medium text-neutral-500 mb-3">Web Developer Intern (Remote)</div>
          <div className="text-neutral-500">
            <ul className="font-medium">
              <li className="list-disc">
                Created layout designs for website templates. Applied CSS and JavaScript for styling and
                animation.
              </li>
              <li className="list-disc">Designed SVG backgrounds using graphic tools.</li>
            </ul>
          </div>
        </div>
      </article>
      <article className="flex justify-center items-center m-auto w-1/2 max-lg:w-full max-lg:pl-10 px-5">
        <div className="experience-container flex-1">
          <header className="flex max-[532px]:flex-col">
            <h1 className="font-semibold text-lg text-stone-100">The Sparks Foundation</h1>
            <div className="line"></div>
            <div className="experience-date font-medium text-neutral-500">May 2022 - June 2022</div>
          </header>
          <div className="font-medium text-neutral-500 mb-3">Web Developer Intern (Remote)</div>
          <div className="text-neutral-500">
            <ul className="font-medium">
              <li className="list-disc">Developed a donation website with Razorpay Payment Gateway SDK.</li>
              <li className="list-disc">Built front-end using HTML, CSS, and JavaScript.</li>
            </ul>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Experience;
