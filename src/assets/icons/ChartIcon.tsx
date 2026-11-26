import type { SVGProps } from "react";

export const ChartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <path d="M3 3v18h18" />
    <path d="M7 15v3" />
    <path d="M12 10v8" />
    <path d="M17 6v12" />
  </svg>
);
