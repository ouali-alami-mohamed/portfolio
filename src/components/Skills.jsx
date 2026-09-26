import './Skills.css';

const skillCategories = [
  {
    id: 1,
    num: '01',
    category: 'Langages de Programmation',
    level: 'Core',
    desc: 'Solide logique de programmation, pensée algorithmique et développement orienté résultats.',
    skills: ['Python', 'JavaScript (ES6+)', 'PHP', 'Problem Solving'],
  },
  {
    id: 2,
    num: '02',
    category: 'Développement Backend',
    level: 'Advanced',
    desc: 'Architecture MVC, opérations CRUD et conception d\'API performantes.',
    skills: ['Laravel (MVC)', 'Conception d\'API', 'Intégration d\'API', 'CRUD Operations'],
  },
  {
    id: 3,
    num: '03',
    category: 'Frontend & Intégration',
    level: 'Modern UI',
    desc: 'Création d\'interfaces dynamiques, réactives et personnalisables.',
    skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Dynamic Design'],
  },
  {
    id: 4,
    num: '04',
    category: 'Bases de Données & Outils',
    level: 'DevOps & Data',
    desc: 'Modélisation des bases de données relationnelles & NoSQL et contrôle de version collaboratif.',
    skills: ['MySQL', 'MongoDB', 'Git & GitHub'],
  },
  {
    id: 5,
    num: '05',
    category: 'Méthodologie & Gestion de Projet',
    level: 'Agile & Collab',
    desc: 'Organisation en cycles itératifs, gestion des sprints, suivi avec Jira et collaboration d\'équipe.',
    skills: ['La méthode Agile', 'Working with Jira', 'Problem Solving', 'Sprint Planning'],
  },
  {
    id: 6,
    num: '06',
    category: 'IA & Automatisation',
    level: 'AI & Automation',
    desc: 'Intégration d\'outils d\'intelligence artificielle, optimisation et automatisation des workflows.',
    skills: ['AI Automation', 'Intégration d\'APIs IA', 'Prompt Engineering', 'Workflows Automatisés'],
  },
];

const Skills = ({ animState, onBackClick }) => {
  const cls = animState === 'entering' ? 'skl--entering'
            : animState === 'exiting'  ? 'skl--exiting'
            : animState === 'hidden'   ? 'skl--gone'
            : '';

  return (
    <section className={`skl-section ${cls}`} id="skills">
      <nav className="skl-navbar">
        <div className="skl-nav-left"></div>
        <div className="section-nav-title-group">
          <span className="section-nav-title">Skill(s)</span>
          <button className="section-header-back-btn" onClick={onBackClick}>
            <span>←</span> Back
          </button>
        </div>
        <div className="skl-nav-count">{skillCategories.length} categories</div>
      </nav>

      <div className="skl-content">
        <div className="skl-header">
          <p className="skl-eyebrow">Technical Stack</p>
          <h1 className="skl-heading">Skills &<br />Technologies.</h1>
        </div>

        <div className="skl-grid">
          {skillCategories.map((c, i) => (
            <div
              key={c.id}
              className={`skl-card ${i % 2 === 0 ? 'skl-card--left' : 'skl-card--right'}`}
              style={{ '--i': i }}
            >
              <div className="skl-card-top">
                <span className="skl-num">{c.num}</span>
                <span className="skl-level">{c.level}</span>
              </div>
              <h2 className="skl-title">{c.category}</h2>
              <p className="skl-desc">{c.desc}</p>
              <div className="skl-tags">
                {c.skills.map(s => <span key={s} className="skl-tag">{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
