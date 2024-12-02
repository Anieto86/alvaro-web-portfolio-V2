import { ExperienceItem } from "./ExperienceItem";

const EXPERIENCE = [
  {
    date: "November 2024 - Present",
    title: "Freelance Web Developer",
    company: "Hubble X Web Page",
    description: "Coming soon.",
    link: "",
  },
  {
    date: "October 2022 - November 2024",
    title: "Frontend Software Engineer",
    company: "Data Zoo",
    description:
      "Led the development of key features for SPA applications using React and TypeScript, improving scalability and maintainability of the platform. Reduced bundle sizes by 5% to 20%, enhancing performance across four products. Collaborated with back-end teams to integrate REST APIs, ensuring efficient data flow. Introduced unit testing frameworks and performance profiling techniques, achieving a 30% improvement in loading times. Additionally, implemented a robust design system in partnership with UI/UX teams, reducing feature development time by 25%.",
    link: "https://www.datazoo.com/",
  },
  {
    date: "April 2021 - September 2022",
    title: "Frontend Software Engineer",
    company: "The Everyone Project",
    description:
      "Completely developed the front-end of a next-generation SPA product, transforming UX designs into production-ready code using ReactJS and TypeScript. Improved development speed by 20% through optimized component reuse. Employed agile methodologies to ensure continuous delivery and integration within cross-functional teams. Performed extensive performance optimizations and bug fixes, enhancing user experience and application stability.",
    link: "https://theeveryoneproject.org/",
  },
  {
    date: "October 2020 - December 2020",
    title: "Freelance Web Developer",
    company: "ChemDye Web Page",
    description:
      "Redesigned and updated the version 2 of the website, improving user experience and functionality. Increased site visits by 25% through SEO optimization and content restructuring. Implemented a communication system with Mailchimp, boosting email capture by 30% and improving the support team's efficiency. Additionally, developed a customized contact system that enhanced customer inquiries and lead generation by 30%.",
    link: "https://chemdyeillustrations.com/",
  },
];

const Experience = () => {
  return (
    <ol className="relative mt-16">
      {EXPERIENCE.map((experience, index) => (
        <li key={index}>
          <ExperienceItem {...experience} />
        </li>
      ))}
    </ol>
  );
};

export default Experience;
