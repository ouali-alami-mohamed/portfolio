import './Work.css';

const projects = [
  {
    id: 1,
    num: '01',
    title: 'Portfolio Website',
    desc: 'Cinematic personal portfolio with custom cursor, pixel-dissolve page transitions, and GPU-accelerated animations.',
    tags: ['React', 'CSS', 'Vite'],
    year: '2024',
  },
  {
    id: 2,
    num: '02',
    title: 'E-Commerce Platform',
    desc: 'Full-featured store with real-time inventory, Stripe payments, and a headless CMS backend.',
    tags: ['Next.js', 'MongoDB', 'Stripe'],
    year: '2024',
  },
  {
    id: 3,
    num: '03',
    title: 'Task Management App',
    desc: 'Real-time collaborative task board with live updates via WebSockets, drag-and-drop, and role-based access.',
    tags: ['Vue.js', 'Node.js', 'Socket.io'],
    year: '2023',
  },
  {
    id: 4,
    num: '04',
    title: 'API Microservices',
    desc: 'Scalable REST API split into containerised microservices with auto-scaling and health monitoring.',
    tags: ['Express', 'Docker', 'PostgreSQL'],
    year: '2023',
  },
];

const Work = ({ animState, onBackClick }) => {
  const cls = animState === 'entering' ? 'work--entering'
            : animState === 'exiting'  ? 'work--exiting'
            : animState === 'hidden'   ? 'work--gone'
            : '';

  return (
    <section className={`work-section ${cls}`} id="work">
      <nav className="work-navbar">
        <div className="work-nav-left"></div>
        <div className="section-nav-title-group">
          <span className="section-nav-title">Work(s)</span>
          <button className="section-header-back-btn" onClick={onBackClick}>
            <span>←</span> Back
          </button>
        </div>
        <div className="work-nav-count">{projects.length} projects</div>
      </nav>

      <div className="work-content">
        <div className="work-header">
          <p className="work-eyebrow">Selected work</p>
          <h1 className="work-heading">Things I've<br />shipped.</h1>
        </div>

        <div className="work-grid">
          {projects.map((p, i) => (
            <div
              key={p.id}
              className={`work-card ${i % 2 === 0 ? 'work-card--left' : 'work-card--right'}`}
              style={{ '--i': i }}
            >
              <div className="work-card-top">
                <span className="work-num">{p.num}</span>
                <span className="work-year">{p.year}</span>
              </div>
              <h2 className="work-title">{p.title}</h2>
              <p className="work-desc">{p.desc}</p>
              <div className="work-tags">
                {p.tags.map(t => <span key={t} className="work-tag">{t}</span>)}
              </div>
              <span className="work-arrow">↗</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
