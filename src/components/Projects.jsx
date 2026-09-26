import './Projects.css';
import bidigitalhubImg from '../assets/projects/bidigitalhub.jpg';
import deligoImg from '../assets/projects/deligo.jpg';
import iksatechImg from '../assets/projects/iksatech.jpg';
import cinematicImg from '../assets/projects/cinematic.jpg';

const projects = [
  {
    id: 1,
    num: '01',
    title: 'BIDIGITALHUB',
    desc: 'Co-développement en équipe d\'une plateforme SaaS de création de portfolios, intégrant des solutions de design dynamiques et personnalisables.',
    tags: ['SaaS', 'Portfolio Builder', 'React.js', 'UI Design'],
    year: 'Projet SaaS',
    image: bidigitalhubImg,
    link: 'https://bidigitalhub.com/',
  },
  {
    id: 2,
    num: '02',
    title: 'DELIGO',
    desc: 'Plateforme temps réel connectant commerçants et livreurs de proximité avec système de gestion des commandes, tarification et offres.',
    tags: ['Temps Réel', 'Logistique', 'Full Stack', 'API'],
    year: 'Projet Web',
    image: deligoImg,
  },
  {
    id: 3,
    num: '03',
    title: 'Systèmes SaaS Iksatech',
    desc: 'Conception et déploiement de divers projets SaaS et systèmes informatiques, optimisation des bases de données et gestion du code.',
    tags: ['Laravel', 'React.js', 'MySQL', 'Full Stack'],
    year: '2024',
    image: iksatechImg,
  },
  {
    id: 4,
    num: '04',
    title: 'Cinematic Portfolio',
    desc: 'Portfolio interactif avec curseur personnalisé, transitions de page 3D & pixel-dissolve, et animations GPU-accélérées.',
    tags: ['React.js', 'GPU CSS', 'Vite', 'Design System'],
    year: '2024',
    image: cinematicImg,
  },
];

const Projects = ({ animState, onBackClick }) => {
  const cls = animState === 'entering' ? 'prj--entering'
            : animState === 'exiting'  ? 'prj--exiting'
            : animState === 'hidden'   ? 'prj--gone'
            : '';

  return (
    <section className={`prj-section ${cls}`} id="projects">
      <nav className="prj-navbar">
        <div className="prj-nav-left"></div>
        <div className="section-nav-title-group">
          <span className="section-nav-title">Project(s)</span>
          <button className="section-header-back-btn" onClick={onBackClick}>
            <span>←</span> Back
          </button>
        </div>
        <div className="prj-nav-count">{projects.length} projects</div>
      </nav>

      <div className="prj-content">
        <div className="prj-header">
          <p className="prj-eyebrow">Real World Work</p>
          <h1 className="prj-heading">Projects &<br />Applications.</h1>
        </div>

        <div className="prj-grid">
          {projects.map((p, i) => {
            const CardTag = p.link ? 'a' : 'div';
            return (
              <CardTag
                key={p.id}
                {...(p.link ? { href: p.link, target: '_blank', rel: 'noopener noreferrer' } : {})}
                className={`prj-card ${i % 2 === 0 ? 'prj-card--left' : 'prj-card--right'} ${p.link ? 'prj-card--link' : ''}`}
                style={{ '--i': i }}
              >
                <div className="prj-thumb-wrap">
                  <img src={p.image} alt={p.title} className="prj-thumb" loading="lazy" />
                  {p.link && (
                    <span className="prj-live-badge">
                      <span className="prj-live-dot" /> Live Site
                    </span>
                  )}
                </div>
                <div className="prj-card-body">
                  <div className="prj-card-top">
                    <span className="prj-num">{p.num}</span>
                    <div className="prj-card-meta">
                      <span className="prj-year">{p.year}</span>
                      <span className="prj-arrow">↗</span>
                    </div>
                  </div>
                  <h2 className="prj-title">{p.title}</h2>
                  <p className="prj-desc">{p.desc}</p>
                  <div className="prj-tags">
                    {p.tags.map(t => <span key={t} className="prj-tag">{t}</span>)}
                  </div>
                </div>
              </CardTag>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
