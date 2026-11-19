import { SKILL_GROUPS } from "../utils/constants";

// Skills grouped by area, rendered as plain text pills.
export const SkillGroups = () => {
  return (
    <div className="grid gap-8 mt-8 sm:grid-cols-2">
      {SKILL_GROUPS.map(({ title, skills }) => (
        <section key={title}>
          <h3 className="mb-3 text-lg font-semibold text-purple-500 dark:text-yellow-400">
            {title}
          </h3>
          <ul className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="px-3 py-1 text-sm text-gray-800 bg-gray-100 border border-gray-300 rounded-full dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};
