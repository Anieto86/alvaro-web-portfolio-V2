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

const logos = [
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

const LogoRow = () => (
  <div className="animate-slide-left group-hover:animation-pause inline-block w-max">
    {logos.map((logo, index) => (
      <div key={index} className="mx-4 inline-block h-16" aria-label={logo.alt}>
        {logo.component}
      </div>
    ))}
  </div>
);

export const InfiniteCarrousel = () => {
  return (
    // <section className="bg-black text-white py-8">
    //   {/* <h2 className="text-center text-2xl mb-2 font-bold leading-8">
    //     Tech Stack
    //   </h2> */}
    <section className="logos group relative overflow-hidden whitespace-nowrap py-10 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]  dark:bg-neutral-950   bg-white ">
      <LogoRow />
      <LogoRow />
    </section>
    // </section>
  );
};
