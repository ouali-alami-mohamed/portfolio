import './Education.css';

const educations = [
  {
    id: 1,
    role: 'Diplôme en Développement Digital – Full Stack',
    school: 'CMC Tanger-Tétouan-Al Hoceïma',
    tags: ['Full Stack', 'CMC', 'Développement Digital'],
    desc: 'Formation spécialisée de haut niveau au sein de la Cité des Métiers et des Compétences, axée sur les technologies modernes du web et le génie logiciel.',
  },
  {
    id: 2,
    role: 'Baccalauréat Sciences Physiques & Chimie',
    school: 'Lycée',
    tags: ['Baccalauréat', 'Sciences Physiques', 'Chimie'],
    desc: 'Obtention du Baccalauréat Scientifique avec solide socle analytique, logique et scientifique.',
  },
];

const Education = ({ animState, onBackClick }) => {
  const cls = animState === 'entering' ? 'edu--entering'
            : animState === 'exiting'  ? 'edu--exiting'
            : animState === 'hidden'   ? 'edu--gone'
            : '';

  return (
    <section className={`edu-section ${cls}`} id="education">

      {/* ── Navbar ── */}
      <nav className="edu-navbar">
        <div className="edu-nav-left"></div>
        <div className="section-nav-title-group">
          <span className="section-nav-title">Education</span>
          <button className="section-header-back-btn" onClick={onBackClick}>
            <span>←</span> Back
          </button>
        </div>
        <div className="edu-nav-count">{educations.length} diplomas</div>
      </nav>

      {/* ── Content ── */}
      <div className="edu-content">

        {/* Header */}
        <div className="edu-header">
          <p className="edu-eyebrow">Academic Background</p>
          <h1 className="edu-heading">
            Knowledge &amp; Foundations.<br />Diplomas &amp; Degrees.
          </h1>
        </div>

        {/* Timeline */}
        <div className="edu-timeline">
          {educations.map((item, i) => (
            <div
              key={item.id}
              className="edu-item"
              style={{ '--delay': `${i * 0.1}s` }}
            >
              {/* Connector line + dot */}
              <div className="edu-item-connector">
                <div className="edu-dot">
                  <span className="edu-dot-inner" />
                </div>
                {i < educations.length - 1 && <div className="edu-line" />}
              </div>

              {/* Card */}
              <div className="edu-item-card">
                <div className="edu-card-inner">
                  <div className="edu-card-top">
                    <span className="edu-num">{String(i + 1).padStart(2, '0')}</span>
                    <span className="edu-school">{item.school}</span>
                  </div>
                  <h2 className="edu-role">{item.role}</h2>
                  <p className="edu-desc">{item.desc}</p>
                  <div className="edu-tags">
                    {item.tags.map(tag => (
                      <span key={tag} className="edu-tag">{tag}</span>
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

export default Education;
