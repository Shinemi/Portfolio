// components/Header.tsx
import { Link } from 'react-router-dom';
import logo from '../images/mockingBirdLogoNeon.png';

interface Props {
  onContactOpen: () => void;
}

export default function Header({ onContactOpen }: Props) {
  return (
    <header className="header">

      {/* Logo — renvoie vers la page d'accueil */}
      <Link to="/" className="header-logo">
        <img src={logo} alt="logo Neon"/>
        ✦ PORTFOLIO
      </Link>

      {/* Navigation */}
      <nav className="header-nav">
        <Link to="/#langages">Langages</Link>
        <Link to="/#projets">Projets</Link>
        <Link to="/#skills">Compétences</Link>
        <Link to="/projects">Tous les projets</Link>

        {/* Bouton contact — ouvre la modale, pas une redirection */}
        <button className="header-contact-btn" onClick={onContactOpen}>
          Contact
        </button>
      </nav>

    </header>
  );
}