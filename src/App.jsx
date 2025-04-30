import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { Toaster } from 'react-hot-toast';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`${
        isVisible ? 'block' : 'hidden'
      } bottom-5 right-5 bg-white/20 z-50 fixed rounded-4xl max-sm:bottom-4 max-sm:right-4`}
    >
      <button onClick={scrollToTop} className="p-5 cursor-pointer max-sm:p-3">
        <FaArrowUp size={20} />
      </button>
    </div>
  );
};

const App = () => {
  return (
    <>
      <ScrollToTopButton />
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Toaster position="bottom-center" />
      <Contact />
    </>
  );
};

export default App;
