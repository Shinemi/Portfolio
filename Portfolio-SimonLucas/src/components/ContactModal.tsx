// components/ContactModal.tsx
import { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import "../styles/global.scss"


interface Props {
  onClose: () => void;
}

// Schéma de validation — définit les règles pour chaque champ
const schema = Yup.object({
  name:    Yup.string().required('Champ requis'),
  email:   Yup.string().email('Email invalide').required('Champ requis'),
  message: Yup.string().min(10, 'Minimum 10 caractères').required('Champ requis'),
});

export default function ContactModal({ onClose }: Props) {

  // Fermer avec Échap + bloquer le scroll
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const formik = useFormik({
    initialValues: { name: '', email: '', message: '' },
    validationSchema: schema,
    onSubmit: (values) => {
      // TODO : envoyer les données (ex: EmailJS, API, etc.)
      console.log(values);
      onClose();
    },
  });

  return (
    // Fond sombre — clic dessus ferme la modale
    <div className="modal-overlay" onClick={onClose}>

      {/* stopPropagation empêche le clic de traverser vers l'overlay */}
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>

        <button className="modal-close" onClick={onClose}>✕</button>

        <p className="modal-eyebrow">Disponible</p>
        <h2 className="modal-title">On travaille<br /><em>ensemble ?</em></h2>

        <form onSubmit={formik.handleSubmit} className="modal-form">

          {/* Champ nom */}
          <div className="modal-field">
            <label htmlFor="name">Nom</label>
            <input id="name" name="name" type="text" placeholder="Ton nom" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name}/>
            {/* Affiche l'erreur uniquement si le champ a été touché */}
            {formik.touched.name && formik.errors.name && (
              <span className="modal-error">{formik.errors.name}</span>
            )}
          </div>

          {/* Champ email */}
          <div className="modal-field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="toi@email.com" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}/>
            {formik.touched.email && formik.errors.email && (
              <span className="modal-error">{formik.errors.email}</span>
            )}
          </div>

          {/* Champ message */}
          <div className="modal-field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Ton message..." rows={4} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.message} />
            {formik.touched.message && formik.errors.message && (
              <span className="modal-error">{formik.errors.message}</span>
            )}
          </div>

          <button type="submit" className="modal-btn modal-btn-primary">✦ Envoyer</button>

        </form>

      </div>
    </div>
  );
}