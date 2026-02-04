export default function TechStack() {
  return (
    <section aria-label="Tech stack">
      <h2>Tech Stack</h2>

      {/* 🔧 PROFICIENT SKILLS */}
      
      <div className="tech-block">
        <h3>Proficient</h3>
        <div className="tech-grid">
          <span className="tech-card">HTML</span>
          <span className="tech-card">CSS</span>
          <span className="tech-card">JavaScript</span>
          <span className="tech-card">ReactJS</span>
          <span className="tech-card">Python</span>
        </div>
      </div>

      {/* 📘 FAMILIAR SKILLS */}
      
      <div className="tech-block">
        <h3>Familiar</h3>
        <div className="tech-grid">
          <span className="tech-card subtle">Node.js</span>
          <span className="tech-card subtle">Git</span>
          <span className="tech-card subtle">REST APIs</span>
          <span className="tech-card subtle">Vite</span>
          <span className="tech-card subtle">MongoDB</span>
          <span className="tech-card subtle">AI-ML</span>
        </div>
      </div>
    </section>
  );
}
