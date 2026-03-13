// components/Intro.tsx

interface Props {
  onContactOpen: () => void;
}

export default function Intro({ onContactOpen }: Props) {
  return (
    <section>
      <h1>Apprenti développeur Web et Artiste amateur</h1>
      
      <h2>CRÉER C'EST CODER</h2>

      <p>Je construis des interfaces comme je dessine — par couches, par erreurs, par accidents heureux. Le code est mon nouveau médium, et je le traite comme tel.</p>

      <p>
      En dehors des terminaux, je suis artiste amateur : j'observe, j'esquisse, je tâche des feuilles. Je suis fasciné par les formes, les couleurs, les textures — et j'essaie de les recréer à travers le code. Mon portfolio est une galerie de mes expériences créatives, où chaque projet est une nouvelle toile à explorer.</p>

      <button onClick={onContactOpen}>Me contacter</button>
      
      <div>
        <p>Basé en France - Disponible</p>
        <p>2026 - En formation</p>
      </div>
    </section>
  );
}