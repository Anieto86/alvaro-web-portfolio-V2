import { PUBLICATIONS } from "../utils/constants";
import type { Publication } from "../utils/constants";
import { LinkButton } from "./LinkButton";

// Highlights the site owner's name inside the author list.
const OWNER_NAME = "Nieto Guil";

const Authors = ({ authors }: { authors: string[] }) => (
  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
    {authors.map((author, index) => (
      <span key={author}>
        {author.includes(OWNER_NAME) ? (
          <strong className="text-gray-800 dark:text-white">{author}</strong>
        ) : (
          author
        )}
        {index < authors.length - 1 && ", "}
      </span>
    ))}
  </p>
);

// Full card for the featured paper.
const FeaturedPublication = ({ paper }: { paper: Publication }) => (
  <article className="flex flex-col gap-6 md:flex-row md:gap-8">
    {paper.image && (
      <figure className="w-full md:w-1/2">
        <img
          src={paper.image}
          alt={paper.imageAlt ?? paper.title}
          loading="lazy"
          className="object-cover w-full rounded-xl shadow-xl"
        />
        {paper.imageCredit && (
          <figcaption className="mt-2 text-xs text-gray-600 dark:text-gray-400">
            {paper.imageCredit}
          </figcaption>
        )}
      </figure>
    )}

    <div className={paper.image ? "w-full md:w-1/2" : "w-full"}>
      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
        {paper.title}
      </h3>

      {paper.authors && <Authors authors={paper.authors} />}

      <p className="mt-1 text-sm italic text-gray-600 dark:text-gray-400">
        {paper.journal} ({paper.year}) · {paper.citation}
      </p>

      {paper.summary && (
        <p className="mt-3 text-gray-700 dark:text-gray-300 text-pretty">
          {paper.summary}
        </p>
      )}

      <footer className="flex flex-wrap gap-3 mt-4">
        <LinkButton href={paper.doi}>Paper (DOI)</LinkButton>
        {paper.pubmed && <LinkButton href={paper.pubmed}>PubMed</LinkButton>}
        {paper.pmc && <LinkButton href={paper.pmc}>Full text (PMC)</LinkButton>}
      </footer>
    </div>
  </article>
);

// The first publication is featured; the rest are shown as a compact list.
export const Publications = () => {
  const [featured, ...others] = PUBLICATIONS;

  if (!featured) return null;

  return (
    <div className="flex flex-col gap-y-10">
      <FeaturedPublication paper={featured} />

      {others.length > 0 && (
        <ul className="flex flex-col gap-y-4 pt-6 border-t border-black/10 dark:border-white/10">
          {others.map((paper) => (
            <li key={paper.doi}>
              <a
                href={paper.doi}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-gray-800 hover:underline dark:text-gray-100"
              >
                {paper.title}
              </a>
              <p className="text-sm italic text-gray-600 dark:text-gray-400">
                {paper.journal} ({paper.year}) · {paper.citation}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
