import { FaReact, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { SiTailwindcss, SiVite } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm py-12 transition-colors duration-300 border-t border-slate-200 dark:border-slate-800">
      <div className="align-element flex flex-col md:flex-row justify-between items-center gap-y-6">
        <div className="flex flex-col md:flex-row items-center gap-x-4">
          <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200">
            This portfolio was built using
          </h3>
          <div className="flex gap-x-4 text-2xl">
            <a
              href="https://reactjs.org/docs/getting-started.html"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="React"
            >
              <FaReact className="text-slate-600 hover:text-emerald-500 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors" />
            </a>
            <a
              href="https://tailwindcss.com/docs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Tailwind CSS"
            >
              <SiTailwindcss className="text-slate-600 hover:text-emerald-500 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors" />
            </a>
            <a
              href="https://vitejs.dev/guide/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Vite"
            >
              <SiVite className="text-slate-600 hover:text-emerald-500 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors" />
            </a>
          </div>
        </div>

        <div className="flex gap-x-6 text-2xl">
          <a
            href="https://www.linkedin.com/in/rohan-bhardwaj-3b226724a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-600 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/rohanbhardwaj2005"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
            className="text-slate-600 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:rohanbrdps@gmail.com"
            aria-label="Email"
            className="text-slate-600 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
