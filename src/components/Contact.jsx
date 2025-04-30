import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { MdArrowOutward } from 'react-icons/md';
import { FaExclamation } from 'react-icons/fa';
import toast from 'react-hot-toast';

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = e => {
    e.preventDefault();
    const name = form.current['name'].value.trim();
    const email = form.current['email'].value.trim();
    const subject = form.current['subject'].value.trim();
    const message = form.current['message'].value.trim();

    if (!name || !email || !subject || !message) {
      toast(t => (
        <span className="flex gap-10">
          <span className="flex text-red-600 items-center">
            <FaExclamation /> <strong>Please fill all fields</strong>
          </span>

          <button
            className="cursor-pointer rounded-lg px-3 py-1.5 bg-stone-950 text-stone-50 border hover:bg-zinc-900 focus:ring-2 focus:ring-stone-300 transition"
            onClick={() => toast.dismiss(t.id)}
          >
            Dismiss
          </button>
        </span>
      ));
      return;
    }
    setLoading(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success('Message sent successfully!');
          setLoading(false);
          form.current.reset();
        },
        error => {
          toast.error(
            `Sorry! Looks like your message didn't go through. Please email me directly if the problem persists.`,
            error.text
          );
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="mb-12">
      <div className="text-center py-20">
        <h1 className=" contact-title font-medium text-5xl capitalize text-center background-clr text-stone-50">
          Contact
        </h1>
      </div>

      <div className="contact-container w-full flex max-lg:flex-col">
        <div className="form-wrapper w-full flex items-center justify-center flex-col max-lg:mb-10">
          <div className="text-center font-medium text-neutral-400 mb-5">
            <p>Fill out the form here to connect with me.</p>
          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="text-neutral-300 w-2/3 max-lg:w-4/5 flex flex-col gap-6"
          >
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-1 font-medium text-stone-100">
                Name / Company
              </label>
              <input
                type="text"
                id="name"
                name="name"
                autoCorrect="false"
                // required
                placeholder="Enter your name / company's name"
                className="py-2 pl-2 rounded-lg bg-zinc-900 focus:outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1 font-medium text-stone-100">
                Email
              </label>
              <input
                type="email"
                // required
                id="email"
                name="email"
                autoCorrect="false"
                placeholder="name@example.com"
                className="py-2 pl-2 rounded-lg bg-zinc-900 focus:outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="topic" className="mb-1 font-medium text-stone-100">
                Topic
              </label>
              <input
                type="text"
                id="topic"
                name="subject"
                autoCorrect="false"
                // required
                placeholder="Enter your subject"
                className="py-2 pl-2 rounded-lg bg-zinc-900 focus:outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="mb-1 font-medium text-stone-100">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                name="message"
                autoCorrect="false"
                placeholder="Enter details"
                className="py-2 pl-2 rounded-lg bg-zinc-900 focus:outline-none"
              ></textarea>
            </div>
            <div className="button-wrapper flex max-sm:justify-center">
              <button
                type="submit"
                className="relative flex items-center justify-center ml-4 mt-2 w-max min-w-[150px] background-clr text-stone-100 cursor-pointer font-medium p-2 rounded-lg transition duration-300 transform border-l border-t focus:border-0 active:border-0 [box-shadow:4px_4px_0px_0px_rgba(255,255,255,0.75)] hover:scale-105 active:scale-110 hover:bg-zinc-900  focus:ring-2 focus:ring-stone-300"
                disabled={loading}
              >
                {loading && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
                <span className={`${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
                  Send Message
                </span>
              </button>
            </div>
          </form>
        </div>

        <div className="other-contacts w-1/2 flex flex-col max-lg:justify-center max-lg:w-full max-lg:items-center">
          <div className="other-contacts-wrapper max-lg:w-4/5">
            <div className="text-md font-medium text-stone-100 mb-3">
              <p>You can also connect with me via :</p>
            </div>
            <div className="list-wrapper">
              <ul className="text-stone-100 w-6/7 max-sm:w-full flex flex-col pl-4">
                <li className="list-disc">
                  <span>phone</span>{' '}
                  <a
                    href="tel:+918210419437"
                    className="hover:text-blue-800 duration-300 active:text-blue-800 ml-7 max-sm:ml-5 font-medium text-neutral-500"
                  >
                    +91 8210419437
                  </a>
                </li>
                <li className="list-disc">
                  {' '}
                  <div className=" flex">
                    <a
                      href="mailto:raj.ashish84091@gmail.com"
                      className="hover:text-blue-800 duration-300 active:text-blue-800 flex"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      email
                      <span className="arrow3">
                        <MdArrowOutward />
                      </span>
                    </a>
                    <span className="ml-6.5 max-sm:ml-2 font-medium text-neutral-500">
                      raj.ashish84091@gmail.com
                    </span>
                  </div>{' '}
                </li>
                <li className="list-disc">
                  {' '}
                  <div className="flex">
                    <a
                      href="https://www.linkedin.com/in/ashishraj-dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-800 duration-300 active:text-blue-800 flex"
                    >
                      linkedin
                      <span className="arrow3">
                        <MdArrowOutward />
                      </span>
                    </a>
                  </div>
                </li>
                <li className="list-disc">
                  {' '}
                  <div className="flex">
                    <a
                      href="https://www.instagram.com/ashish._.draws/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-800 duration-300 active:text-blue-800 flex"
                    >
                      instagram
                      <span className="arrow3">
                        <MdArrowOutward />
                      </span>
                    </a>
                  </div>
                </li>
                <li className="list-disc">
                  {' '}
                  <div className="flex">
                    <a
                      href="https://discord.com/users/390906560496402433"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-800 duration-300 active:text-blue-800 flex"
                    >
                      discord
                      <span className="arrow3">
                        <MdArrowOutward />
                      </span>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
