import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <>
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
