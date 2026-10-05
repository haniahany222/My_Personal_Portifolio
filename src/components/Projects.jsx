export default function Projects({ projects, onOpen }) {
  return (
    <section id="work">
      <h2>My Work 🚀</h2>
      <p className="sub">Click a project to step inside it.</p>
      <div className="grid">
        {projects.map((p) => (
          <button key={p.id} className="card" onClick={(e) => onOpen(p, e.currentTarget.getBoundingClientRect())}>
            <div className="top" style={{ background: p.cardBg }}>{p.emoji}</div>
            <div className="bd">
              <h3>{p.title}</h3>
              <p>{p.kind}</p>
              {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
