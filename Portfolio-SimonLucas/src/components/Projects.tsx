// components/Projects.tsx
import { Link } from 'react-router-dom';
import projects from '../data/projects.json';

interface Props {
  showMore?: boolean;  // true = affiche le lien "voir tous les projets"
  onlyFeatured?: boolean; // true = affiche uniquement les projets featured
}

export default function Projects({ showMore = false, onlyFeatured = false }: Props) {
  return (
    <section>
      {/* ta grille de projets ici */}
    </section>
  );
}