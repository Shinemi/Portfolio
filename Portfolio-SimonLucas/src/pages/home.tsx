// pages/Home.tsx
import Intro from '../components/Intro';
import Languages from '../components/Languages';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

interface Props {
  onContactOpen: () => void;
}

export default function Home({ onContactOpen }: Props) {
  return (
    <>
      <Intro onContactOpen={onContactOpen} />
      <Languages />
      <Projects showMore onlyFeatured />
      <Skills />
    </>
  );
}