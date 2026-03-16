import languages from '../data/languages.json';
import { motion } from 'motion/react';

export default function Languages() {
  const doubled = [...languages, ...languages];

  return (
    <section className="langs">

      {/* Rangée 1 — vers la gauche */}
      <div className="langs-row">
        <motion.div
          className="langs-track"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          {doubled.map((lang, i) => (
            <div className="langs-item" key={i}>
              <span>{lang.icon}</span>
              <span className="langs-name">{lang.name}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Rangée 2 — vers la droite */}
      <div className="langs-row">
        <motion.div
          className="langs-track"
          animate={{ x: ['-50%', '0%'] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
        >
          {doubled.map((lang, i) => (
            <div className="langs-item" key={i}>
              <span>{lang.icon}</span>
              <span className="langs-name">{lang.name}</span>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}