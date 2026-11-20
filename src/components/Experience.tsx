import { EXPERIENCE } from "../utils/constants";
import { ExperienceItem } from "./ExperienceItem";
import type { ExperienceItemProps } from "./ExperienceItem";

interface ExperienceProps {
  items?: ExperienceItemProps[];
}

// Generic vertical timeline. Defaults to the professional experience list.
const Experience = ({ items = EXPERIENCE }: ExperienceProps) => {
  return (
    <ol className="relative mt-16">
      {items.map((item, index) => (
        <li key={`${item.title}-${index}`}>
          {/* The two most recent entries start expanded. */}
          <ExperienceItem {...item} defaultOpen={index < 2} />
        </li>
      ))}
    </ol>
  );
};

export default Experience;
