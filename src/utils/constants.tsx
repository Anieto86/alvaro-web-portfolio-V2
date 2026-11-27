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
    title: "Full-stack Developer",
    company: "ChemDye Scientific Illustrations · Contract, Remote",
    description:
      "Building a scientific software platform for structured data workflows and digital tools for research and health-related use cases.",
    highlights: [
      "Develop and maintain frontend features with React and TypeScript, focusing on usability, accessibility and performance.",
      "Integrate frontend components with REST APIs, managing application state and data flows across the system.",
      "Contribute to backend development with Node.js and Nest.js, supporting structured, accuracy-critical data workflows.",
      "Resolve bugs, configuration issues and data inconsistencies in production, and collaborate with product, QA and engineering on documentation and issue triage.",
    ],
    link: "https://chemdyeillustrations.com/",
  },
  {
    title: "Data Automation",
    company: "The Gold Foundation · Nonprofit",
    description:
      "Automated the user registration workflow, from an online form to a Google Sheet and a dashboard of registered users.",
    highlights: [
      "Built a Google Apps Script that registers users automatically from an online form into Google Sheets.",
      "Connected the Google Sheets API to the registration records and generated a dashboard of users from the data.",
      "Designed the script to deduplicate entries, handle dates correctly and run safely more than once without creating duplicates.",
    ],
  },
  {
    date: "July 2024 - October 2024",
    title: "Freelance Web Developer",
    company: "Biobank Web Page - Gomez Lab",
    description:
      "Scientific web app for looking up and administering biological samples, built with a university researcher.",
    highlights: [
      "Translated the researcher's sample lookup needs into a searchable web application.",
      "Cleaned and reorganised sample records in Google Sheets, then connected the data to a React application through a Google API using TanStack Query.",
      "Built tabular views and custom filters, including year and sex, to make stored sample information easier to find and review.",
    ],
    link: "https://biobank.gomez-lab.com/",
  },
  {
    date: "October 2022 - November 2024",
    title: "Frontend Software Engineer",
    company: "Data Zoo",
    description:
      "Global digital identity provider that helps businesses verify and onboard customers and prevent fraud.",
    highlights: [
      "Led development of key SPA features with React and TypeScript, improving the scalability and maintainability of the platform.",
      "Reduced bundle sizes by 5% to 20% across four products, and achieved a 30% improvement in loading times by introducing unit testing and performance profiling.",
      "Implemented a design system with UI/UX teams, reducing feature development time by 25%, and integrated REST APIs with backend teams.",
      "Owned frontend technical decisions and mentored junior developers.",
    ],
    link: "https://www.datazoo.com/",
  },
  {
    date: "April 2021 - October 2022",
    title: "Frontend Software Engineer",
    company: "The Everyone Project",
    description:
      "Frontend development of complex web UIs and data-heavy products, working in agile, cross-functional teams.",
    highlights: [
      "Developed the front end of a new company product in a team of two, turning UX designs into production-ready code with React and TypeScript.",
      "Built reusable components across the company's products, working with complex data systems; optimized component reuse improved development speed by 20%.",
      "Performed performance optimizations and bug fixes that improved user experience and application stability.",
    ],
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
  {
    name: "ORCID",
    href: "https://orcid.org/0000-0002-9787-3486",
  },
];

export const SKILL_GROUPS = [
  {
    title: "Data & Visualization",
    skills: [
      "SQL / PostgreSQL",
      "Google Sheets & Apps Script",
      "Excel",
      "GraphPad Prism",
      "ImageJ",
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
      "TanStack Query",
      "Redux Toolkit",
    ],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Nest.js", "Express", "Drizzle ORM", "REST APIs"],
  },
  {
    title: "Tools & DevOps",
    skills: ["Docker", "Git", "Vitest"],
  },
];

export interface Publication {
  title: string;
  authors?: string[];
  journal: string;
  year: number;
  citation: string;
  summary?: string;
  doi: string;
  pubmed?: string;
  pmc?: string;
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
  {
    title:
      "The Motor KIF5C Links the Requirements of Stable Microtubules and IGF-1 Receptor Membrane Insertion for Neuronal Polarization",
    journal: "Molecular Neurobiology",
    year: 2017,
    citation: "Mol Neurobiol 54(8):6085-6096",
    doi: "https://doi.org/10.1007/s12035-016-0144-4",
  },
  {
    title:
      "Protein palmitoylation inhibition by 2-bromopalmitate alters gliding, host cell invasion and parasite morphology in Toxoplasma gondii",
    journal: "Molecular and Biochemical Parasitology",
    year: 2012,
    citation: "Mol Biochem Parasitol 184(1):39-43",
    doi: "https://doi.org/10.1016/j.molbiopara.2012.03.006",
  },
  {
    title:
      "Expanding the RNA-Guided Endonuclease Toolkit for Mouse Genome Editing",
    journal: "The CRISPR Journal",
    year: 2018,
    citation: "CRISPR J 1(6):431-439",
    doi: "https://doi.org/10.1089/crispr.2018.0050",
  },
  {
    title:
      "Functional screening of GATOR1 complex variants reveals a role for mTORC1 deregulation in FCD and focal epilepsy",
    journal: "Neurobiology of Disease",
    year: 2020,
    citation: "Neurobiol Dis 134",
    doi: "https://doi.org/10.1016/j.nbd.2019.104640",
  },
];

// Scientific career, newest first (ordered by end date).
export const SCIENCE_TIMELINE = [
  {
    date: "2020",
    title: "Expanding into web development",
    company: "University of Adelaide · Certificate in Full-Stack Web Development",
    description:
      "Driven by curiosity and the wish to keep learning, I added software to my scientific background: new skills for the times we live in that complement my career as a scientist. They let me work with data end to end, from collecting and cleaning it to turning it into tools people can use.",
  },
  {
    date: "Mar 2019 - Jan 2020",
    title: "Postdoctoral Research Fellow",
    company: "University of Adelaide · Jozef Gecz Lab (Molecular Neurogenetics)",
    description:
      "Medical science research in the Molecular Neurogenetics group.",
    highlights: [
      "Designed an exploratory cell-free DNA research project, evaluating extraction methods and developing methylation-sensitive ddPCR assays.",
      "Interpreted fluorescence-based measurements and quantified assay results to assess and refine experimental conditions.",
      "Coordinated and ran research projects in medical science, setting up new molecular techniques and work protocols.",
      "Presented at conferences (oral and poster) and co-supervised PhD students.",
      "Managed projects and worked independently, with close attention to detail in highly regulated environments.",
    ],
    link: "https://researchers.adelaide.edu.au/profile/jozef.gecz",
  },
  {
    date: "Jan 2018 - Dec 2018",
    title: "Postdoctoral Research Scientist",
    company: "SAHMRI · Paul Thomas Lab (SA Genome Editing)",
    description:
      "Postdoctoral research at the South Australian Health and Medical Research Institute, with the Adelaide Medical School at the University of Adelaide.",
    highlights: [
      "Transferred and optimised an in vivo experimental method, resolving technical obstacles and training fellow researchers in its use.",
      "Developed microscopy-based quantification methods with ImageJ and analysed experimental measurements using Excel and GraphPad Prism.",
      "Coordinated and ran research in medical science, setting up molecular techniques and work protocols.",
      "Presented at conferences (oral and poster) and co-supervised PhD students.",
      "Worked independently on project management, with close attention to detail in highly regulated environments.",
    ],
    link: "https://sahmri.org.au/people/paul-thomas",
  },
  {
    date: "Mar 2011 - Aug 2017",
    title: "Head of Practical Work",
    company: "Universidad Nacional de Córdoba (UNC)",
    description:
      "Taught throughout my doctorate: led practical coursework in medical and life sciences.",
    highlights: [
      "Coordinated laboratory-based teaching and supervised student projects.",
      "Planned course content and defined protocols and evaluation criteria.",
      "Ensured compliance with academic and safety standards.",
      "Turned theory into hands-on practice through clear instruction, structured documentation and continuous feedback.",
    ],
  },
  {
    date: "Mar 2011 - Dec 2016",
    title: "PhD in Chemistry",
    company: "CONICET · Universidad Nacional de Córdoba (UNC)",
    description:
      "Doctoral research on how neurons migrate and become polarized during development of the cerebral cortex, published in Scientific Reports (2017).",
    highlights: [
      "Coordinated and ran research in medical science.",
      "Co-authored papers and contributed to grant and fellowship applications.",
      "Set up new in vivo and in vitro molecular techniques and work protocols.",
      "Presented at conferences with oral and poster presentations.",
    ],
    link: "https://doi.org/10.1038/s41598-017-08140-5",
  },
  {
    date: "Mar 2015 - Aug 2015",
    title: "Travel Fellowship (BeCAR, Government of Argentina)",
    company: "Universidad Autónoma de Madrid · Marta Nieto Lab",
    description:
      "Five months at the National Centre of Biotechnology, learning in utero electroporation and pyramidal neuron culture in the host laboratory of Dr Marta Nieto (Department of Molecular and Cellular Biology).",
  },
  {
    date: "Aug 2008 - Sep 2010",
    title: "Professional Practices",
    company: "CONICET · INTECH-IIB",
    description:
      "Molecular biology of the parasite Toxoplasma gondii, including a publication on protein palmitoylation inhibition (2012).",
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

export const DATA_WORK = [
  {
    title: "Registration data pipeline and dashboard",
    context: "The Gold Foundation · Nonprofit",
    problem:
      "User registrations came in through an online form and had to be handled by hand.",
    approach: [
      "Google Apps Script that parses each submission into a clean Google Sheet.",
      "Deduplication, correct DD/MM/YYYY dates and idempotent runs, so re-running never creates duplicates.",
      "Google Sheets API connection and a dashboard of registered users built from the data.",
    ],
    outcome: "Registrations flow into one clean dataset with no manual entry.",
    tools: ["Google Apps Script", "Google Sheets API", "Google Sheets"],
  },
  {
    title: "Biobank sample records, from spreadsheet to searchable app",
    context: "Gomez Lab · University research",
    problem:
      "Biological sample records lived in spreadsheets and were hard to look up.",
    approach: [
      "Cleaned and reorganised the sample records in Google Sheets.",
      "Connected the data to a React app through a Google API with TanStack Query.",
      "Built tabular views with custom filters such as year and sex.",
    ],
    outcome: "Researchers can find and review stored samples without digging through sheets.",
    tools: ["Google Sheets", "React", "TanStack Query"],
    link: "https://biobank.gomez-lab.com/",
  },
  {
    title: "Experimental data analysis in research",
    context: "PhD in Chemistry and postdoctoral work",
    problem:
      "Experimental results had to be turned into conclusions that hold up to peer review.",
    approach: [
      "Designed experiments, collected and analysed the data.",
      "Presented results as figures and papers in peer-reviewed journals.",
    ],
    outcome: "Published research, including my doctoral work in Scientific Reports.",
    tools: ["Scientific analysis", "Data interpretation", "Scientific writing"],
  },
];
