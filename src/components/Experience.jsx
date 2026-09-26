import './Experience.css';

const experiences = [
  {
    id: 1,
    role: 'Développeur Full Stack (Hybride)',
    company: 'Iksatech',
    tags: ['Full Stack', 'SaaS', 'Bases de Données', 'Git'],
    desc: 'Conception et déploiement de projets SaaS et systèmes informatiques. Développement full-stack, optimisation des bases de données et gestion du code source.',
  },
  {
    id: 2,
    role: 'Développeur Web Indépendant',
    company: 'Projet DELIGO',
    tags: ['Temps Réel', 'Mise en Relation', 'Commandes', 'API'],
    desc: 'Plateforme connectant commerçants et livreurs de proximité avec gestion des commandes en temps réel, publication d\'offres et sélection de prestataires.',
  },
  {
    id: 3,
    role: 'Co-développeur SaaS',
    company: 'BIDIGITALHUB',
    tags: ['SaaS', 'Builder Portfolio', 'Design Dynamique'],
    desc: 'Co-développement en équipe d\'une plateforme SaaS de création de portfolios, intégrant des solutions de design dynamiques et personnalisables.',
  },
  {
    id: 4,
    role: 'Chef d\'équipe volontaires',
    company: 'CAN (Maroc)',
    tags: ['Leadership', 'Gestion d\'Équipe', 'Accueil Public'],
    desc: 'Supervision d\'une équipe de 8 volontaires pour l\'accueil du public, attribution des postes, placement des supporters et suivi des rapports.',
  },
];

const Experience = ({ animState, onBackClick }) => {
  const cls = animState === 'entering' ? 'exp--entering'
            : animState === 'exiting'  ? 'exp--exiting'
            : animState === 'hidden'   ? 'exp--gone'
            : '';

  return (
    <section className={`exp-section ${cls}`} id="experience">

      {/* ── Navbar ── */}
      <nav className="exp-navbar">
        <div className="exp-nav-left"></div>
        <div className="section-nav-title-group">
          <span className="section-nav-title">Experience(s)</span>
          <button className="section-header-back-btn" onClick={onBackClick}>
            <span>←</span> Back
          </button>
        </div>
        <div className="exp-nav-count">{experiences.length} positions</div>
      </nav>

      {/* ── Content ── */}
      <div className="exp-content">

        {/* Header */}
        <div className="exp-header">
          <p className="exp-eyebrow">Career path</p>
          <h1 className="exp-heading">
            Where I've been.<br />What I've built.
          </h1>
        </div>

        {/* Timeline */}
        <div className="exp-timeline">
          {experiences.map((item, i) => (
            <div
              key={item.id}
              className="exp-item"
              style={{ '--delay': `${i * 0.08}s` }}
            >
              {/* Divider line + dot */}
              <div className="exp-item-connector">
                <div className="exp-dot">
                  <span className="exp-dot-inner" />
                </div>
                {i < experiences.length - 1 && <div className="exp-line" />}
              </div>

              {/* Card */}
              <div className="exp-item-card">
                <div className="exp-card-inner">
                  <div className="exp-card-top">
                    <span className="exp-num">{String(i + 1).padStart(2, '0')}</span>
                    <span className="exp-company">{item.company}</span>
                  </div>
                  <h2 className="exp-role">{item.role}</h2>
                  <p className="exp-desc">{item.desc}</p>
                  <div className="exp-tags">
                    {item.tags.map(tag => (
                      <span key={tag} className="exp-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
