import { EXPERIENCE } from "../utils/constants";
import { ExperienceItem } from "./ExperienceItem";

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
