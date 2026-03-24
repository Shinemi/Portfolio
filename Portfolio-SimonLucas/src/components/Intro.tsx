import "../styles/global.scss"
import "../styles/intro.scss"

interface Props {
  onContactOpen: () => void;
}

export default function Intro({ onContactOpen }: Props) {
  return (
    <section className="intro">
      <h1 className="intro-divider">Apprenti développeur Web et Artiste amateur</h1>
      
      <h2 className="intro-title">
        <span className="intro-title-outline">CODE</span> <br /> 
        <span className="intro-title-purple">MEETS</span> <br /> 
        ART
      </h2>

      <p className="intro-bio">Je construis des interfaces comme je dessine — par couches, par erreurs, par accidents heureux. Le code est mon <em> nouveau médium </em>, et je le traite comme tel.
      <br /><br />
      En dehors des terminaux, je suis artiste amateur : j'observe, j'esquisse, je tâche des feuilles. Je suis fasciné par les formes, les couleurs, les textures — et j'essaie de les recréer à travers le code. Mon portfolio est une galerie de mes expériences créatives, où chaque projet est une nouvelle toile à explorer.</p>

      <button onClick={onContactOpen} className="intro-contact-btn">Me contacter</button>
      
      <div className="intro-details">
        <p>Basé en France - Disponible</p>
        <p>2026 - En formation</p>
      </div>
    </section>
  );
}