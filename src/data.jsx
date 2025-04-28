import { nanoid } from 'nanoid';
// import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';

export const links = [
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#projects', text: 'projects' },
  { id: nanoid(), href: '#experience', text: 'experience' },
  { id: nanoid(), href: '#contact', text: 'contact' },
];

export const projects = [
  {
    id: nanoid(),
    title: 'Factzzz',
    desc: 'A Fact-Sharing Web Application that allows users to explore, submit, and vote on interesting facts, with category-based filtering, voting mechanisms, and a dispute-flagging feature.',
    img: '/assets/p1.png',
    live: 'https://factzzz.netlify.app',
    github: 'https://github.com/ashishraj-dev/react-factzzz',
    tech: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React', 'Supabase'],
  },
  {
    id: nanoid(),
    title: 'Wisewords',
    desc: 'An Advice Generator Web App built with React that fetches random advice from an external API, featuring a dynamic view counter, reusable components, and a responsive, mobile-first UI with smooth transitions and custom branding.',
    img: '/assets/p2.png',
    live: 'https://wisewords1.netlify.app/',
    github: 'https://github.com/ashishraj-dev/wisewords',
    tech: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React', 'React Hooks'],
  },
  {
    id: nanoid(),
    title: 'Aurora.Scape',
    desc: 'An Aurora tourism website with a mobile-first layout, featuring sticky navigation, animated scroll effects, custom components (slider, news grid, marquee, scroll-to-top button), and a demo booking form with client-side validation.',
    img: '/assets/p3.png',
    live: 'https://aurora-scape1.netlify.app/',
    github: 'https://github.com/ashishraj-dev/aurora.scape',
    tech: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'AOS Library'],
  },
  {
    id: nanoid(),
    title: 'Dice Duel',
    desc: 'A two-player dice game with turn-based play, score tracking, win conditions, and confetti effects, featuring player name customization, glassmorphism UI, modal dialogs, victory animations, and a reset option for enhanced user experience.',
    img: '/assets/p4.png',
    live: 'https://dice-duel1.netlify.app/',
    github: 'https://github.com/ashishraj-dev/ludo-game',
    tech: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'tsParticles Library'],
  },
];
