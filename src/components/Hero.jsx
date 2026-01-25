import heroImg from "../assets/hero.svg";
import { FaGithubSquare, FaLinkedin, FaFileAlt } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="py-24 sm:py-32" id="home">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <article className="order-2 md:order-1">
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-slate-900 dark:text-white">
            Welcome to my <br />
            <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
              Creative World
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-lg">
            Hey, I’m Rohan. I build things for the web from rough ideas to finished products with an eye for detail and a love for clean architecture.
          </p>
          <div className="flex gap-x-6 mt-8">
            <a
              href="https://github.com/rohanbhardwaj2005"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors duration-300"
              aria-label="Github"
            >
              <FaGithubSquare className="h-10 w-10" />
            </a>
            <a
              href="https://www.linkedin.com/in/rohan-bhardwaj-3b226724a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-10 w-10" />
            </a>
            <a
              href="resume.pdf"
              download="resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors duration-300 flex items-center"
              aria-label="Resume"
            >
              <FaFileAlt className="h-8 w-8" />
            </a>
          </div>
        </article>
        <article className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative group">
            <div className="absolute -inset-2 bg-emerald-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <img
              src={heroImg}
              className="h-80 lg:h-96 w-auto relative z-10 drop-shadow-xl transition-transform duration-300 group-hover:scale-105"
              alt="Hero"
            />
          </div>
        </article>
      </div>
    </div>
  );
};
export default Hero;
