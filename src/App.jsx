import { useState, useCallback, useRef } from 'react';
import MouseBackground from './components/MouseBackground';
import Hero       from './components/Hero';
import Skills     from './components/Skills';
import Services   from './components/Services';
import Experience from './components/Experience';
import Education  from './components/Education';
import Projects   from './components/Projects';
import Contact    from './components/Contact';
import './App.css';

function App() {
  const [heroAnimState,    setHeroAnimState]    = useState('idle');
  const [activeSection,    setActiveSection]    = useState(null);
  const [sectionAnimState, setSectionAnimState] = useState('hidden');

  // Track pending timeouts so we can cancel them on interrupted transitions
  const timers = useRef([]);
  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  const goToSection = useCallback((sectionId) => {
    if (heroAnimState.startsWith('exiting') || heroAnimState === 'gone') return;

    clearTimers();

    const type = (sectionId === 'services' || sectionId === 'contact') ? 'vertical' : 'pixel';
    setHeroAnimState(`exiting-${type}`);
    setSectionAnimState('hidden');
    setActiveSection(null);

    const t1 = setTimeout(() => {
      setHeroAnimState('gone');
      setActiveSection(sectionId);
      setSectionAnimState('entering');
      const t2 = setTimeout(() => setSectionAnimState('idle'), 850);
      timers.current.push(t2);
    }, 680);
    timers.current.push(t1);
  }, [heroAnimState]);

  const goToHero = useCallback(() => {
    if (sectionAnimState === 'hidden' || sectionAnimState === 'exiting') return;

    clearTimers();
    setSectionAnimState('exiting');

    const type = (activeSection === 'services' || activeSection === 'contact') ? 'vertical' : 'pixel';
    setHeroAnimState(`entering-${type}`);

    const t = setTimeout(() => {
      setSectionAnimState('hidden');
      setActiveSection(null);
      setHeroAnimState('idle');
    }, 780);
    timers.current.push(t);
  }, [sectionAnimState, activeSection]);


  const animFor = (id) =>
    activeSection === id ? sectionAnimState : 'hidden';

  return (
    <>
      <MouseBackground />
      <Hero
        animState={heroAnimState}
        onNavigate={goToSection}
      />
      <Skills     animState={animFor('skills')}     onBackClick={goToHero} />
      <Services   animState={animFor('services')}   onBackClick={goToHero} />
      <Experience animState={animFor('experience')} onBackClick={goToHero} />
      <Education  animState={animFor('education')}  onBackClick={goToHero} />
      <Projects   animState={animFor('projects')}   onBackClick={goToHero} />
      <Contact    animState={animFor('contact')}    onBackClick={goToHero} />
    </>
  );
}

export default App;
