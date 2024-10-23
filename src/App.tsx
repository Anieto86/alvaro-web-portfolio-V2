import './App.css';
import { SectionContainer } from './components/SectionContainer';
import { Layout } from './layouts/Layout';
import { Hero } from './components/Hero';

function App() {
  return (
    <Layout
      title="Porfolio de midudev - Desarrollador y Programador Web con 15 años de experiencia"
      description="Contrata a midudev para crear tu aplicación web o móvil. Desarrollador Web y Creador de Contenido. Especializado en crear aplicaciones únicas."
    >
      <main className="px-4">
        <SectionContainer className={undefined} id={undefined}>
          <Hero />
        </SectionContainer>
      </main>
    </Layout>
  );
}

export default App;
