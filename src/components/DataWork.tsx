import { DATA_WORK } from "../utils/constants";

// Case studies: problem, approach and outcome for each data project.
export const DataWork = () => {
  return (
    <div className="grid gap-6 md:grid-cols-1">
      {DATA_WORK.map(
        ({ title, context, problem, approach, outcome, tools, link }) => (
          <article
            key={title}
            className="p-6 text-left border rounded-xl border-gray-200 dark:border-gray-800"
          >
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
              {title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {context}
            </p>

            <dl className="mt-4 space-y-3 text-gray-700 dark:text-gray-300">
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-purple-600 dark:text-yellow-400">
                  Problem
                </dt>
                <dd>{problem}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-purple-600 dark:text-yellow-400">
                  What I did
                </dt>
                <dd>
                  <ul className="pl-5 list-disc">
                    {approach.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ul>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-purple-600 dark:text-yellow-400">
                  Outcome
                </dt>
                <dd>{outcome}</dd>
              </div>
            </dl>

            <ul className="flex flex-wrap mt-4 gap-2">
              {tools.map((tool) => (
                <li
                  key={tool}
                  className="px-2 py-1 text-xs bg-gray-100 rounded-full dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                >
                  {tool}
                </li>
              ))}
            </ul>

            {link && (
              <a
                className="inline-block mt-4 text-sm underline hover:text-purple-500 dark:hover:text-yellow-400"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit the app
              </a>
            )}
          </article>
        )
      )}
    </div>
  );
};
