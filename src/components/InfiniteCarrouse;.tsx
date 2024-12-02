import { logos } from "../utils/constants";

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
    <div className="logos group relative overflow-hidden whitespace-nowrap py-10 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]  dark:bg-neutral-950   bg-white ">
      <LogoRow />
      <LogoRow />
    </div>
  );
};
