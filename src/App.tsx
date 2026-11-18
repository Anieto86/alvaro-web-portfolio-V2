import "./App.css";
import { SectionContainer } from "./components/SectionContainer";
import { Layout } from "./layouts/Layout";
import { Hero } from "./components/Hero";
import TitleSection from "./components/TitleSection";
import Experience from "./components/Experience";
import { Briefcase } from "./assets/icons/Briefcase";
import { CodeIcon } from "./assets/icons/CodeIcon";
import { Projects } from "./components/Projects";
import { AboutMe } from "./components/AboutMe";
import { ProfileCheck } from "./assets/icons/ProfileCheck";
import { InfiniteCarousel } from "./components/InfiniteCarousel";

function App() {
  return (
    <Layout>
      <main className="px-4">
        <div className="space-y-24 mt-20">
          <SectionContainer id="hero">
            <Hero />
          </SectionContainer>

          <SectionContainer id="experience">
            <TitleSection>
              <Briefcase className="size-8" />
              Professional Expertise
            </TitleSection>
            <Experience />
          </SectionContainer>

          <SectionContainer id="projects">
            <TitleSection>
              <CodeIcon className="size-7" />
              Projects
            </TitleSection>
            <Projects />
          </SectionContainer>

          <SectionContainer id="stack">
            <InfiniteCarousel />
          </SectionContainer>

          <SectionContainer id="about-me">
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
