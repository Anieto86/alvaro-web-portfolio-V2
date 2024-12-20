import { GithubIcon } from "../assets/icons/GitHubIcon";
import { LinkIcon } from "../assets/icons/LinkIcon";
import { projects } from "../utils/constants";
import { LinkButton } from "./LinkButton";

export const Projects = () => {
  return (
    <div className="flex flex-col gap-y-16">
      {projects.map(({ image, title, description, tags, link, github }, i) => (
        <article
          key={`${title}-${i}`}
          className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0"
        >
          <div className="w-full md:w-1/2">
            <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
              <img
                alt={title}
                className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
                // loading="lazy"
                src={image}
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 md:max-w-lg">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              {title}
            </h3>
            <div className="flex flex-wrap mt-2">
              <ul className="flex flex-row mb-2 gap-x-2">
                {tags.map((tag) => (
                  <li key={tag.name}>
                    <span
                      className={`flex gap-x-2 rounded-full text-xs ${tag.class} py-1 px-2`}
                    >
                      <tag.icon className="size-4" />
                      {tag.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-2 text-gray-700 dark:text-gray-400">
              {description}
            </div>
            <footer className="flex items-end justify-start mt-4 gap-x-4">
              {github && (
                <LinkButton href={github}>
                  <GithubIcon className="size-6" />
                  Code
                </LinkButton>
              )}
              {link && (
                <LinkButton href={link}>
                  <LinkIcon className="size-4" />
                  Preview
                </LinkButton>
              )}
            </footer>
          </div>
        </article>
      ))}
    </div>
  );
};
