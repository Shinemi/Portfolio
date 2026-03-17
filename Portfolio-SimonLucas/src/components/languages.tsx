import languages from '../data/languages.json';
import { motion } from "motion/react" 
import "../styles/global.scss"


export default function Languages() {
  return (
    <section>
      {/* bande défilante sens normal */}
      <motion.div
        className="languages-marquee"
        animate={{ x: ["-50%%", "0%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        {languages.map((lang) => (
          <span key={lang.id} className="language-item">
            {lang.icon}
            {lang.name}
          </span>
        ))}
      </motion.div>

      {/* bande défilante sens inverse */}
      <motion.div
        className="languages-marquee reverse"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {languages.map((lang) => (
          <span key={lang.id} className="language-item">
            {lang.icon}
            {lang.name}
          </span>
        ))}
      </motion.div>
    </section>
  );
}