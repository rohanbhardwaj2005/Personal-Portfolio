import { FaReact, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { SiTailwindcss, SiVite } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="footer bg-emerald-100 text-gray-400 py-8 dark:bg-emerald-100">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-4 md:text-left">
          <h3
            className="sm:text-lg text-black dark:text-gray-300 footer-text"
            style={{ fontFamily: "Josefin Sans", marginLeft: "30px" }}
          >
            This portfolio was built using
          </h3>
          <span className="flex space-x-4 text-2xl">
            <a
              href="https://reactjs.org/docs/getting-started.html"
              target="_blank"
              rel="noopener noreferrer"
              title="React Documentation"
            >
              <FaReact
                title="React"
                className="react-icon hover:text-emerald-500 dark:text-emerald-500 dark:hover:text-emerald-300"
              />
            </a>
            <a
              href="https://tailwindcss.com/docs"
              target="_blank"
              rel="noopener noreferrer"
              title="Tailwind CSS Documentation"
            >
              <SiTailwindcss
                title="Tailwind CSS"
                className="react-icon hover:text-emerald-500 dark:text-emerald-500"
              />
            </a>
            <a
              href="https://vitejs.dev/guide/"
              target="_blank"
              rel="noopener noreferrer"
              title="Vite Documentation"
            >
              <SiVite
                title="Vite"
                className="react-icon hover:text-emerald-500 dark:text-emerald-500"
              />
            </a>
          </span>
        </div>
        <div
          className="mb-4 md:mb-0 text-left pr-20 md:text-center"
          style={{ fontFamily: "Josefin Sans" }}
        ></div>

        <div
          className="flex space-x-4 text-center md:text-left mt-4 md:mt-0"
          style={{ marginRight: "30px" }}
        >
          <a
            href="https://www.linkedin.com/in/rohan-bhardwaj-3b226724a/"
            title="Linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="react-icon hover:text-emerald-500 dark:text-emerald-500"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a
            href="https://github.com/rohanbhardwaj2005"
            title="Github"
            target="_blank"
            rel="noopener noreferrer"
            className="react-icon hover:text-emerald-500 dark:text-emerald-500"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href="mailto:rohanbrdps@gmail.com"
            className="react-icon hover:text-emerald-500 dark:text-emerald-500"
            title="Say Hi!"
          >
            <FaEnvelope className="text-2xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
