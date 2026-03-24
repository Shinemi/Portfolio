import { Link } from 'react-router-dom';
import logo from '../images/mockingBirdLogoNeon.png';
import "../styles/global.scss"
import "../styles/header.scss"
interface Props {
  onContactOpen: () => void;
}

export default function Header({ onContactOpen }: Props) {
  return (
    <header>

      {/* Logo — renvoie vers la page d'accueil */}
      <Link to="/" className="header-logo">
        <img src={logo} alt="logo Neon"/>
        <p>✦ PORTFOLIO</p>
      </Link>

      {/* Navigation */}
      <nav className="header-nav">
        <Link to="/#langages">Langages</Link>
        <Link to="/#projets">Projets</Link>
        <Link to="/#skills">Compétences</Link>

        {/* Bouton contact — ouvre la modale, pas une redirection */}
        <button className="header-contact-btn" onClick={onContactOpen}>
          ✦ Contact
        </button>
      </nav>

    </header>
  );
}