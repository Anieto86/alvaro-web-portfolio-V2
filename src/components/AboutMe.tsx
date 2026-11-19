const personalImageAlt = "Alvaro Nieto";

export const AboutMe = () => {
  return (
    <article className="flex flex-col items-center justify-center gap-8 text-gray-700 dark:text-gray-300 md:flex-row">
      <div className="[&>p]:mb-4 [&>p>strong]:text-purple-500 dark:[&>p>strong]:text-yellow-100 [&>p>strong]:font-normal [&>p>strong]:font-mono text-pretty order-2 md:order-1">
        <p>
          Hi! I'm <strong>Alvaro Nieto</strong>, a
          <strong> Full Stack Developer</strong> who started out as a
          scientist, with experience building{" "}
          <strong>SPA applications</strong> using technologies such as React,
          TypeScript, and Tailwind.
        </p>

        <p>
          Before writing code I trained in{" "}
          <strong>molecular biology</strong> and earned a{" "}
          <strong>PhD in Chemistry</strong>, studying at the Universidad
          Nacional de Córdoba in Argentina. Research taught me to ask precise
          questions, work with messy data, and care about results other people
          can rely on. In 2020 I switched careers through a full-stack
          bootcamp and have been building for the web ever since.
        </p>

        <p>
          I've led projects at <strong> Data Zoo</strong>, where I optimized
          product performance and contributed to the development of design
          systems, reducing development times by 25%.
        </p>

        <p>
          My key achievements include enhancing user experiences through
          <strong> SEO strategies</strong>, developing reusable components, and
          integrating unit testing to improve system stability and reliability.
        </p>

        <p>
          I’m passionate about learning and helping teams build
          <strong> scalable, high-impact applications</strong>. My goal is to
          continue designing interfaces that seamlessly connect people and
          technology.
        </p>
      </div>

      <img
        width="200"
        height="200"
        src="https://res.cloudinary.com/dcvzsick7/image/upload/f_auto,q_auto/v1/Alvaro/bdgc3nfrfnjnt2ksim9t"
        alt={personalImageAlt}
        className="order-1 object-cover w-64 h-full p-1 md:order-2 rotate-3 lg:p-2 lg:w-64"
        style={{ objectPosition: "50% 50%" }}
        loading="lazy"
      />
    </article>
  );
};
