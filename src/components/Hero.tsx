// import Badge from "@/components/Badge"; // Asegúrate de usar la ruta correcta
// import MailIcon from "@/components/icons/Mail"; // Asegúrate de usar la ruta correcta
// import SocialPill from "@/components/SocialPill"; // Asegúrate de usar la ruta correcta

import { GithubIcon } from '../assets/icons/GitHubIcon';
import LinkedInIcon from '../assets/icons/LinkedInIcon';
import { MailIcon } from '../assets/icons/MailIcon';
import { Badge } from './Badge';
import { SocialPill } from './SocialPill';

export const Hero = () => {
  const personalImageAlt = 'Alvaro Fernando Nieto Guil';

  return (
    <div className="max-w-xl">
      <div className="flex gap-4 mb-4">
        <img
          className="rounded-full shadow-lg size-16"
          src="https://res.cloudinary.com/dcvzsick7/image/upload/f_auto,q_auto/v1/Alvaro/bdgc3nfrfnjnt2ksim9t"
          alt={personalImageAlt}
        />
        <a
          href="https://www.linkedin.com/in/alvaro-fernando-nieto-guil"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center transition md:justify-center md:hover:scale-105"
        >
          <Badge>Available for work</Badge>
        </a>
      </div>
      <h1 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl dark:text-white">
        Hey, I'm Alvaro Nieto
      </h1>
      <p className="mt-6 text-xl text-gray-800 dark:[&>strong]:text-yellow-200 [&>strong]:text-yellow-500 [&>strong]:font-semibold dark:text-gray-300">
        +5 years of experience.
        <strong>Front End Engineer and ex science researcher </strong> from
        Argentina. Especializado en el desarrollo de aplicaciones web únicas.
      </p>
      <nav className="flex flex-wrap gap-4 mt-8">
        <SocialPill href="mailto:alvaro.f.nieto@gmail.com">
          <MailIcon className="size-4" />
          Contact me
        </SocialPill>
        <SocialPill href="https://www.linkedin.com/in/alvaro-fernando-nieto-guil">
          <LinkedInIcon className="size-4" />
          LinkedIn
        </SocialPill>
        <SocialPill href="https://github.com/Anieto86">
          <GithubIcon className="size-4" />
          GitHub
        </SocialPill>
      </nav>
    </div>
  );
};