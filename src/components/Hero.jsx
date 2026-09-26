import profileImg from '../assets/profile.jpg';
import './Hero.css';

const Hero = ({ animState = 'idle', onNavigate }) => {
  const mod = animState.startsWith('exiting')  ? `hero--exiting hero--${animState}`
            : animState.startsWith('entering') ? `hero--entering hero--${animState}`
            : animState === 'gone'             ? 'hero--gone'
            : '';

  const nav = (id) => (e) => { e.preventDefault(); onNavigate?.(id); };

  return (
    <section className={`hero ${mod}`} id="hero">

      {/* ── Navbar ── */}
      <nav className="navbar">
        <div className="nav-logo">MOA</div>
        <ul className="nav-links">
          <li><a href="#skills"     onClick={nav('skills')}>Skill(s)</a></li>
          <li><a href="#services"   onClick={nav('services')}>Service(s)</a></li>
          <li><a href="#experience" onClick={nav('experience')}>Experience(s)</a></li>
          <li><a href="#education"  onClick={nav('education')}>Education</a></li>
          <li><a href="#projects"   onClick={nav('projects')}>Project(s)</a></li>
        </ul>
      </nav>

      {/* ── Full name — two rows wrapping both sides of the photo ── */}
      <div className="hero-name-bg" aria-hidden="true">
        {/* Row 1: OUALI  [photo]  ALAMI */}
        <div className="name-row">
          <span className="name-left">OUALI</span>
          <span className="name-right">ALAMI</span>
        </div>
        {/* Row 2: MOHA  [photo]  MED */}
        <div className="name-row name-row-bottom">
          <span className="name-left">MOHA</span>
          <span className="name-right">MED</span>
        </div>
      </div>

      {/* ── Center photo — upper body only ── */}
      <div className="hero-photo-wrap">
        <img
          src={profileImg}
          alt="Mohamed Ouali Alami"
          className="hero-photo"
          draggable="false"
        />
      </div>

      {/* ── Left content ── */}
      <div className="hero-left">
        <p className="hero-eyebrow">Software Developer</p>
        <h1 className="hero-title">Software<br />Developer</h1>
        <p className="hero-desc">
          Result-oriented developer integrating AI<br />
          to build modern, high-quality SaaS & web apps.
        </p>
      </div>

      {/* ── Right side (Button + Socials) ── */}
      <div className="hero-right">
        <a href="#contact" onClick={nav('contact')} className="hero-btn">
          Let's collaborate <span className="btn-arrow">→</span>
        </a>
        <a href="https://www.linkedin.com/in/mohammed-ouali-alami-864408384" target="_blank" rel="noreferrer" className="social-link">
          <span className="social-dash">—</span> LinkedIn
        </a>
        <a href="https://instagram.com/johan__oa" target="_blank" rel="noreferrer" className="social-link">
          <span className="social-dash">—</span> Instagram
        </a>
      </div>

    </section>
  );
};

export default Hero;

