// components/Footer.tsx
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "../styles/global.scss"
import "../styles/footer.scss"


export default function Footer() {
  return (
    <footer>
      <p>&copy; 2026 SIMON Lucas. Tous droits réservés.</p>
      <p>✦ Dev & Art - Conçu avec passion, code et un peu d’IA </p>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/lucas-simon-7364382b7/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/LucasSimon">
          <FaGithub />
        </a>
      </div>
    </footer>
  );
}