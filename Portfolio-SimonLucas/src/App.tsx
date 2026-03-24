// App.tsx
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <BrowserRouter>
    
      <Header onContactOpen={() => setModalOpen(true)} />

      <main>
        <Routes>
            <Route path="/" element={<Home onContactOpen={() => setModalOpen(true)} />} />
            <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </main>

      <Footer />

      {modalOpen && <ContactModal onClose={() => setModalOpen(false)} />}
    </BrowserRouter>
  );
}