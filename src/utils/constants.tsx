import { CssIcon } from "../assets/icons/CssIcon";
import { ExpressJSIcon } from "../assets/icons/ExpressJSIcon";
import { HTML5Icon } from "../assets/icons/HTML5Icon";
import { JSicon } from "../assets/icons/JSicon";
import { MaterialUIIcon } from "../assets/icons/MaterialUIIcon";
import { NodeIcon } from "../assets/icons/NodeIcon";
import { PostgreSQLIcon } from "../assets/icons/PostgreSQLIcon";
import { ReactIcon } from "../assets/icons/ReactIcon";
import { ReduxIcon } from "../assets/icons/ReduxIcon";
import { TailwindIcon } from "../assets/icons/TailwindIcon";
import { TyIcon } from "../assets/icons/TyIcon";
import { VitestIcon } from "../assets/icons/VitestIcon";

export const logos = [
  {
    component: <HTML5Icon />,
    alt: "HTML5",
  },
  {
    component: <CssIcon />,
    alt: "Css",
  },
  {
    component: <JSicon />,
    alt: "JavaScript",
  },
  {
    component: <ReactIcon className="size-20" />,
    alt: "React",
  },
  {
    component: <TyIcon />,
    alt: "TypeScript",
  },
  {
    component: <NodeIcon />,
    alt: "Node JS",
  },
  {
    component: <ReduxIcon />,
    alt: "Redux toolkit",
  },
  {
    component: <TailwindIcon />,
    alt: "Tailwind CSS",
  },
  {
    component: <MaterialUIIcon />,
    alt: "Material UI",
  },
  {
    component: <VitestIcon />,
    alt: "Vitest",
  },
  {
    component: <PostgreSQLIcon />,
    alt: "PostgreSQL",
  },
  {
    component: <ExpressJSIcon />,
    alt: "Express JS",
  },
];

export const EXPERIENCE = [
  {
    date: "November 2024 - Present",
    title: "Freelance Web Developer",
    company: "Hubble X Web Page",
    description: "Coming soon.",
    link: "",
  },
  {
    date: "July 2024 - October 2024",
    title: "Freelance Web Developer",
    company: "Biobank Web Page - Gomez Lab",
    description: "Scientific page for administration of biological samples.",
    link: "https://biobank.gomez-lab.com/",
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

const TAGS = {
  TAILWIND: {
    name: "Tailwind CSS",
    class: "bg-[#003159] text-white",
    icon: TailwindIcon,
  },
  REACT: {
    name: "React.js",
    class: "bg-[#000000] text-white",
    icon: ReactIcon,
  },
  SQL: {
    name: "PostgreSQL",
    class: "bg-[#336791] text-white",
    icon: PostgreSQLIcon,
  },
};

export const projects = [
  {
    title: "Medical Dashboard - React, TypeScript, Tailwind CSS",
    description:
      "Plataforma gratuita con retos de programación. Más de 1 millón de visitas en un mes. +50K retos completados. Creada desde cero con Next.js, React y Tailwind CSS.",
    link: "https://adventjs.dev",
    image: "/projects/adventjs.webp",
    tags: [TAGS.REACT, TAGS.TAILWIND, TAGS.SQL],
    github: "test",
  },
  {
    title: "Medical Dashboard - React, TypeScript, Tailwind CSS",
    description:
      "Plataforma gratuita con retos de programación. Más de 1 millón de visitas en un mes. +50K retos completados. Creada desde cero con Next.js, React y Tailwind CSS.",
    link: "https://adventjs.dev",
    image: "/projects/adventjs.webp",
    tags: [TAGS.REACT, TAGS.TAILWIND, TAGS.SQL],
    github: "test",
  },
  {
    title: "Medical Dashboard - React, TypeScript, Tailwind CSS",
    description:
      "Plataforma gratuita con retos de programación. Más de 1 millón de visitas en un mes. +50K retos completados. Creada desde cero con Next.js, React y Tailwind CSS.",
    link: "https://adventjs.dev",
    image: "/projects/adventjs.webp",
    tags: [TAGS.REACT, TAGS.TAILWIND, TAGS.SQL],
    github: "test",
  },
  {
    title: "Medical Dashboard - React, TypeScript, Tailwind CSS",
    description:
      "Plataforma gratuita con retos de programación. Más de 1 millón de visitas en un mes. +50K retos completados. Creada desde cero con Next.js, React y Tailwind CSS.",
    link: "https://adventjs.dev",
    image: "/projects/adventjs.webp",
    tags: [TAGS.REACT, TAGS.TAILWIND, TAGS.SQL],
    github: "test",
  },
];
