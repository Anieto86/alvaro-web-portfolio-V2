import "./App.css";
import { SectionContainer } from "./components/SectionContainer";
import { Layout } from "./layouts/Layout";
import { Hero } from "./components/Hero";
import TitleSection from "./components/TitleSection";
import Experience from "./components/Experience ";
import { Briefcase } from "./assets/icons/Briefcase";
import { CodeIcon } from "./assets/icons/CodeIcon";
import { Projects } from "./components/Projects";
import { AboutMe } from "./components/AboutMe";
import { ProfileCheck } from "./assets/icons/ProfileCheck";
import { InfiniteCarrousel } from "./components/InfiniteCarrouse;";

function App() {
  return (
    <Layout
      title="Alvaro Portfolio - Developer and Web programer with  +5 years of experience"
      description="Contrata a midudev para crear tu aplicación web o móvil. Desarrollador Web y Creador de Contenido. Especializado en crear aplicaciones únicas."
    >
      <main className="px-4">
        <SectionContainer className={undefined} id={undefined}>
          <Hero />
        </SectionContainer>
        <div className="space-y-24 mt-20">
          <SectionContainer id="experience" className={undefined}>
            <TitleSection>
              <Briefcase className="size-8" />
              Professional Expertise
            </TitleSection>
            <Experience />
          </SectionContainer>

          <SectionContainer id="projects" className={undefined}>
            <TitleSection>
              <CodeIcon className="size-7" />
              Projects
            </TitleSection>
            <Projects />
          </SectionContainer>

          <SectionContainer id="stack" className={undefined}>
            <InfiniteCarrousel />
          </SectionContainer>

          <SectionContainer id="about-me" className={undefined}>
            <TitleSection>
              <ProfileCheck className="size-8" />
              About Me
            </TitleSection>
            <AboutMe />
          </SectionContainer>
        </div>
      </main>
    </Layout>
  );
}

export default App;
