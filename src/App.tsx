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
import { ContactSection } from "./components/ContactSection";
import { MailIcon } from "./assets/icons/MailIcon";
import { FlaskIcon } from "./assets/icons/FlaskIcon";
import { SCIENCE_TIMELINE, RESEARCH_PROFILES } from "./utils/constants";
import { Publications } from "./components/Publications";
import { SkillGroups } from "./components/SkillGroups";
import { DataWork } from "./components/DataWork";
import { ChartIcon } from "./assets/icons/ChartIcon";
import { BookIcon } from "./assets/icons/BookIcon";
import { SocialPill } from "./components/SocialPill";

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

          <SectionContainer id="data">
            <TitleSection>
              <ChartIcon className="size-8" />
              Data Work
            </TitleSection>
            <DataWork />
          </SectionContainer>

          <SectionContainer id="science">
            <TitleSection>
              <FlaskIcon className="size-8" />
              Scientific Journey
            </TitleSection>
            <Experience items={SCIENCE_TIMELINE} />
          </SectionContainer>

          <SectionContainer id="projects">
            <TitleSection>
              <CodeIcon className="size-7" />
              Projects
            </TitleSection>
            <Projects />
          </SectionContainer>

          <SectionContainer id="research">
            <TitleSection>
              <BookIcon className="size-8" />
              Research &amp; Publications
            </TitleSection>
            <Publications />
            <nav
              aria-label="Research profiles"
              className="flex flex-wrap gap-3 mt-8"
            >
              {RESEARCH_PROFILES.map(({ name, href }) => (
                <SocialPill key={name} href={href}>
                  {name}
                </SocialPill>
              ))}
            </nav>
          </SectionContainer>

          <SectionContainer id="stack">
            <InfiniteCarousel />
            <SkillGroups />
          </SectionContainer>

          <SectionContainer id="about-me">
            <TitleSection>
              <ProfileCheck className="size-8" />
              About Me
            </TitleSection>
            <AboutMe />
          </SectionContainer>

          <SectionContainer id="contact">
            <TitleSection>
              <MailIcon className="size-7" />
              Contact
            </TitleSection>
            <ContactSection />
          </SectionContainer>
        </div>
      </main>
    </Layout>
  );
}

export default App;
