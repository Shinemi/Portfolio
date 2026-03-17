// components/Projects.tsx
import { Link } from 'react-router-dom';
import projects from '../data/projects.json';
import "../styles/global.scss"


interface Props {
  showMore?: boolean;
  onlyFeatured?: boolean;
}

export default function Projects({ showMore = false, onlyFeatured = false }: Props) {

  // Si onlyFeatured est true, on filtre — sinon on prend tout
  const list = onlyFeatured
    ? projects.filter((p) => p.featured)
    : projects;

  return (
    <section className="projects" id="projets">
      <div className="s-inner">

        <div className="s-label">Travaux réalisés</div>
        <h2 className="s-title">Ce que j'ai<br />construit</h2>

        <div className="proj-grid">
          {list.map((p) => (
            <div key={p.num} className={`proj-card ${p.wip ? 'proj-card-wip' : ''}`}>
              <div className="proj-num">{p.num}</div>
              <div className="proj-tag">✦ {p.tag}</div>
              <h3 className="proj-title">{p.title}</h3>
              <p className="proj-desc">{p.desc}</p>
              {p.stack.length > 0 && (
                <div className="proj-stack">
                  {p.stack.map((s) => <span key={s}>{s}</span>)}
                </div>
              )}
            </div>
          ))}
        </div>

        {showMore && (
          <div className="proj-more">
            <Link to="/projects" className="proj-more-link">
              Voir tous les projets →
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}