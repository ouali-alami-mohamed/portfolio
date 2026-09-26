import './Services.css';

const services = [
  {
    id: 1,
    icon: '◈',
    title: 'Développement SaaS & Web',
    desc: 'Conception et déploiement d\'applications web complètes, plateformes SaaS et outils sur-mesure intégrant l\'IA.',
    items: ['React.js & JavaScript', 'Laravel (Architecture MVC)', 'AI Automation & Intégration IA'],
  },
  {
    id: 2,
    icon: '◉',
    title: 'Backend & Conception d\'API',
    desc: 'Architecture serveur robuste, opérations CRUD, endpoints performants et sécurisés.',
    items: ['Laravel & PHP', 'Programmation Python', 'Bases de la conception d\'API'],
  },
  {
    id: 3,
    icon: '◎',
    title: 'Intégration Frontend & UI',
    desc: 'Création d\'interfaces dynamiques, réactives et hautement personnalisables.',
    items: ['React.js', 'HTML5 & CSS3 moderne', 'Design dynamique & UX'],
  },
  {
    id: 4,
    icon: '◇',
    title: 'Bases de Données & Qualité',
    desc: 'Gestion des données, débogage rigoureux, contrôle de version Git et gestion de projet Agile avec Jira.',
    items: ['MySQL & MongoDB', 'Débogage & Problem Solving', 'Git, Jira & Méthode Agile'],
  },
];

const Services = ({ animState, onBackClick }) => {
  const cls = animState === 'entering' ? 'srv--entering'
            : animState === 'exiting'  ? 'srv--exiting'
            : animState === 'hidden'   ? 'srv--gone'
            : '';

  return (
    <section className={`srv-section ${cls}`} id="services">
      <nav className="srv-navbar">
        <div className="srv-nav-left"></div>
        <div className="section-nav-title-group">
          <span className="section-nav-title">Service(s)</span>
          <button className="section-header-back-btn" onClick={onBackClick}>
            <span>←</span> Back
          </button>
        </div>
        <div className="srv-nav-count">{services.length} offerings</div>
      </nav>

      <div className="srv-content">
        <div className="srv-header">
          <p className="srv-eyebrow">What I do</p>
          <h1 className="srv-heading">Skills that<br />deliver results.</h1>
        </div>

        <div className="srv-grid">
          {services.map((s, i) => (
            <div
              key={s.id}
              className="srv-card"
              style={{ '--i': i }}
            >
              <div className="srv-icon">{s.icon}</div>
              <h2 className="srv-title">{s.title}</h2>
              <p className="srv-desc">{s.desc}</p>
              <ul className="srv-items">
                {s.items.map(item => (
                  <li key={item} className="srv-item">
                    <span className="srv-dot" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
