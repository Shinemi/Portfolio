// components/Footer.tsx
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <p>&copy; 2026 Mon Portfolio. Tous droits réservés.</p>
      <p>Dev & Art - Fait à la main</p>
      <div>
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