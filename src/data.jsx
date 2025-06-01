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
    title: 'My Portfolio',
    desc: 'A personal portfolio website showcasing frontend projects and skills. Features a responsive, mobile-first layout with smooth animations, a curated projects section with summaries, visuals, and links, a glassmorphism-style navigation bar, an interactive contact form integrated using EmailJS, and a marquee effect for highlighting skills — all designed for a clean, professional user experience.',
    img: '/assets/p7.png',
    live: 'https://ashishraj1.netlify.app/',
    github: 'https://github.com/ashishraj-dev/personal-portfolio-v2',
    tech: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React', 'React Hooks', 'EmailJS'],
  },
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
    title: 'ShopTray',
    desc: 'A responsive React-based product catalog app that fetches data from the Fake Store API. It features dynamic product listings, detailed views, and full routing with custom 404 pages. Built with React Router, Axios, Tailwind CSS, and DaisyUI, it uses React hooks for state management and a mobile-first grid layout for seamless browsing across devices.',
    img: '/assets/p6.png',
    live: 'https://shoptray.netlify.app/',
    github: 'https://github.com/ashishraj-dev/shoptray',
    tech: ['JavaScript (ES6+)', 'React', 'React Router', 'Axios', 'Tailwind CSS', 'Daisy UI'],
  },
  {
    id: nanoid(),
    title: 'Templique',
    desc: 'Templique is a form-based job application email generator built with React and Tailwind CSS. It allows users to input their details to generate a dynamic, professional email for HR outreach. The template renders on submission, with additional features including a reset button to clear the form at any time, copy-to-clipboard functionality, and a responsive, mobile-first design.',
    img: '/assets/p5.png',
    live: 'https://templique.netlify.app/',
    github: 'https://github.com/ashishraj-dev/templique',
    tech: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React', 'React Hooks'],
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
