export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="opacity-80 m-4 min-[375px]:pl-4 md:pl-0 mt-16 w-full mx-auto container lg:max-w-4xl md:max-w-2xl mb-10 flex justify-center">
      <div className="rounded-lg w-full max-w-screen-xl mx-auto md:flex md:items-center md:justify-between py-4">
        <span className="text-sm sm:text-center text-zinc-800/90 dark:text-zinc-200/90">
          © {currentYear}{" "}
          <a href="https://midu.dev/" className="hover:underline">
            Alvaro Nieto / GitHub: Anieto86
          </a>
          . Casi todos los derechos reservados
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium dark:text-white/90 sm:mt-0">
          <li>
            <a href="/#about-me" className="hover:underline me-4 md:me-6">
              About me
            </a>
          </li>
          <li>
            <a
              id="contacto"
              href="mailto:alvaro.f.nieto@gmail.com"
              className="hover:underline"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
