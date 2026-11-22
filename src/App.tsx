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
import { ContactForm } from "./components/ContactForm";
import { MailIcon } from "./assets/icons/MailIcon";
import { FlaskIcon } from "./assets/icons/FlaskIcon";
import { SCIENCE_TIMELINE, RESEARCH_PROFILES } from "./utils/constants";
import { CONTACT_EMAIL, GMAIL_COMPOSE_URL } from "./utils/contact";
import { Publications } from "./components/Publications";
import { SkillGroups } from "./components/SkillGroups";

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

          <SectionContainer id="science">
            <TitleSection>
              <FlaskIcon className="size-8" />
              Scientific Journey
            </TitleSection>
            <Experience items={SCIENCE_TIMELINE} />
            <h3 className="mt-16 mb-6 text-2xl font-semibold text-black/80 dark:text-white">
              Selected Publications
            </h3>
            <Publications />
            <nav
              aria-label="Research profiles"
              className="mt-10 text-sm text-gray-600 dark:text-gray-400"
            >
              Research profiles:{" "}
              {RESEARCH_PROFILES.map(({ name, href }, index) => (
                <span key={name}>
                  <a
                    className="underline hover:text-purple-500 dark:hover:text-yellow-400"
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {name}
                  </a>
                  {index < RESEARCH_PROFILES.length - 1 && " · "}
                </span>
              ))}
            </nav>
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
            <ContactForm />
            <p className="mt-6 text-sm text-gray-600 dark:text-gray-400">
              Prefer email?{" "}
              <a
                className="underline hover:text-purple-500 dark:hover:text-yellow-400"
                href={GMAIL_COMPOSE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </SectionContainer>
        </div>
      </main>
    </Layout>
  );
}

export default App;
