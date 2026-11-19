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
    component: <HTML5Icon className="size-20" />,
    alt: "HTML5",
  },
  {
    component: <CssIcon className="size-20" />,
    alt: "Css",
  },
  {
    component: <JSicon className="size-20" />,
    alt: "JavaScript",
  },
  {
    component: <ReactIcon className="size-20" />,
    alt: "React",
  },
  {
    component: <TyIcon className="size-20" />,
    alt: "TypeScript",
  },
  {
    component: <NodeIcon className="size-20" />,
    alt: "Node JS",
  },
  {
    component: <ReduxIcon className="size-20" />,
    alt: "Redux toolkit",
  },
  {
    component: <TailwindIcon className="size-20" />,
    alt: "Tailwind CSS",
  },
  {
    component: <MaterialUIIcon className="size-20" />,
    alt: "Material UI",
  },
  {
    component: <VitestIcon className="size-20" />,
    alt: "Vitest",
  },
  {
    component: <PostgreSQLIcon className="size-20" />,
    alt: "PostgreSQL",
  },
  {
    component: <ExpressJSIcon className="size-20" />,
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

export const RESEARCH_PROFILES = [
  {
    name: "Google Scholar",
    href: "https://scholar.google.com.ar/citations?user=eyDpuOMAAAAJ&hl=en",
  },
  {
    name: "ResearchGate",
    href: "https://www.researchgate.net/profile/Alvaro-Fernando-Nieto-2",
  },
];

export const SKILL_GROUPS = [
  {
    title: "Data & Visualization",
    skills: [
      "SQL / PostgreSQL",
      "D3.js",
      "Data visualization",
      "Data cleaning & automation",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Zustand",
      "Redux Toolkit",
    ],
  },
  {
    title: "Backend",
    skills: ["Python", "FastAPI", "Node.js", "Express"],
  },
  {
    title: "Tools & DevOps",
    skills: ["Docker", "Git", "Vitest"],
  },
];

export interface Publication {
  title: string;
  authors: string[];
  journal: string;
  year: number;
  citation: string;
  summary: string;
  doi: string;
  pubmed: string;
  pmc: string;
  // Local path under /public, e.g. "/imgs/igf1r-migration.webp". Optional.
  image?: string;
  imageAlt?: string;
  imageCredit?: string;
}

export const PUBLICATIONS: Publication[] = [
  {
    title:
      "IGF-1 receptor regulates dynamic changes in neuronal polarity during cerebral cortical migration",
    authors: [
      "Alvaro F Nieto Guil",
      "Mariana Oksdath",
      "Linnea A Weiss",
      "Diego J Grassi",
      "Lucas J Sosa",
      "Marta Nieto",
      "Santiago Quiroga",
    ],
    journal: "Scientific Reports",
    year: 2017,
    citation: "Sci Rep 7, 7703",
    summary:
      "Using in utero electroporation in mice, we showed that the IGF-1 receptor is required for cortical neurons to migrate, switch from a multipolar to a bipolar shape and form an axon.",
    doi: "https://doi.org/10.1038/s41598-017-08140-5",
    pubmed: "https://pubmed.ncbi.nlm.nih.gov/28794445/",
    pmc: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5550468/",
  },
];

// Scientific career, newest first. Dates are omitted until confirmed.
export const SCIENCE_TIMELINE = [
  {
    date: "2020",
    title: "Career change to web development",
    company: "Full-stack bootcamp",
    description:
      "Moved from research into software, carrying over an analytical, data-driven way of working.",
  },
  {
    title: "PhD in Chemistry",
    company: "Universidad Nacional de Córdoba (UNC)",
    description:
      "Doctoral research on how neurons migrate and become polarized during development of the cerebral cortex, published in Scientific Reports (2017).",
    link: "https://doi.org/10.1038/s41598-017-08140-5",
  },
  {
    title: "Molecular Biology",
    company: "Scientific training",
    description: "Research training in molecular biology.",
  },
];

// eslint-disable-next-line react-refresh/only-export-components
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
  JAVASCRIPT: {
    name: "JavaScript",
    class: "bg-[#000000]  text-white",
    icon: JSicon,
  },
  TYPESCRIPT: {
    name: "TypeScript",
    class: "bg-[#000000] text-white",
    icon: TyIcon,
  },
  MUI: {
    name: "Material UI",
    class: "bg-[#000000] text-white",
    icon: MaterialUIIcon,
  },
};

export const projects = [
  {
    title: "DataViz Project - D3.js , React, JavaScript and Material UI",
    description:
      "Created a data visualization project using D3.js, React, JavaScript, and Material UI. The project consists of a Dot Plot chart that allows users to select different data sets and visualize them in a Dot Plot chart.",
    link: "https://rainbow-gnome-2a5580.netlify.app",
    image: "/imgs/dataVIZ.webp",
    tags: [TAGS.REACT, TAGS.JAVASCRIPT],
    github: "https://github.com/Anieto86/data-visualization",
  },
  {
    title: "Cinema Radar - React, TypeScript and Material UI",
    description:
      "Movie discovery app built with React, TypeScript and Material UI.",
    link: "https://cinema-radar.netlify.app",
    image: "/imgs/cinema-radar.webp",
    tags: [TAGS.REACT, TAGS.TYPESCRIPT, TAGS.MUI],
    github: "https://github.com/Anieto86/cinema-radar",
  },
];
