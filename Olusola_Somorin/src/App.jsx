import { useRef, useState, useEffect } from 'react';
import vid from './bg_video.mp4';
import Header from './components/Header';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ProjectPage from './components/ProjectPage';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Ai from './components/Ai';
import Footer from './components/Footer';
import './App.css'


function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const [activeSection, setActiveSection] = useState('home');

  // 2. Smooth Scroll Function (with Offset for Fixed Navbar)
  const scrollToSection = (elementRef) => {
    // Adjust this value based on your Navbar height (e.g., 80px)
    const navbarHeight = 150; 
    
    const elementPosition = elementRef.current.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  };

  // 3. Active Link Highlighting (Intersection Observer)
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Triggers when section is in middle of screen
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    // Observe all sections
    if (homeRef.current) observer.observe(homeRef.current);
    if (aboutRef.current) observer.observe(aboutRef.current);
    if (skillsRef.current) observer.observe(skillsRef.current);
    if (projectsRef.current) observer.observe(projectsRef.current);
    if (contactRef.current) observer.observe(contactRef.current);

    return () => observer.disconnect(); // Cleanup
  }, []);

  return (
    <div className='font-secondary'>
      <video autoPlay muted playsInline loop className='fixed w-full h-full top-0 bottom-0 left-0 -z-10 object-cover brightness-[.15]'><source src={vid}/></video>
      
      <Header
        scrollToSection={scrollToSection} 
        refs={{ homeRef, aboutRef, skillsRef, projectsRef, contactRef }}
        activeSection={activeSection}
      />

      <div id="home" ref={homeRef}>
        <HomePage/>
      </div>
      
      <div id="about" ref={aboutRef}>
        <AboutPage/>
      </div>

      <div ref={projectsRef} id='project'>
        <ProjectPage/>
      </div>

      <div ref={skillsRef} id='skills'>
        <Skills/>
      </div>

      <div ref={contactRef} id='contact'>
        <Contact/>
      </div>

      <Ai/>

      <Footer/>
    </div>
  )
}

export default App
