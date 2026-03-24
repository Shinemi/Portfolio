import skillGroups from '../data/skills.json';
import "../styles/global.scss"


export default function Skills() {
  return (
    <section>
      
      <div className="s-label">SAVOIR - FAIRE</div>

      <h2 className="s-title">Mes Compétences</h2>

      {/* badges de compétences */}
      {skillGroups.map((category) => (
        <div key={category.title}>
          <h3>{category.title}</h3>
          <hr />
          <div>
            {category.skills.map((skill) => (
              <p key={skill}>{skill}</p>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}