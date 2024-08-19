import heroImg from "../assets/hero.svg";
import { FaGithubSquare, FaLinkedin, FaFileAlt } from "react-icons/fa";

const Hero = () => {
  return (
    <div
      className="hero-bar bg-emerald-100 py-24"
      style={{ fontFamily: "Josefin Sans" }}
    >
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-4xl font-bold tracking-wider">
            Welcome to my Creative World
          </h1>
          <br></br>
          <br></br>
          <p className="sm:text-xl mt-2 text-lg text-slate-700 ">
            I’m Rohan, a passionate Full Stack Developer dedicated to turning
            ideas into reality. With a keen eye for detail and a love for
            innovation, I craft unique and engaging experiences that captivate
            and inspire.
          </p>
          <div className="flex gap-x-4 mt-4">
            <a
              href="https://github.com/rohanbhardwaj2005"
              title="Github"
              target="_blank"
              rel="noperener noreferrer"
            >
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/rohan-bhardwaj-3b226724a/"
              title="Linkedin"
              target="_blank"
              rel="noperener noreferrer"
            >
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a
              href="resume.pdf"
              title="Resume"
              download="resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFileAlt
                className="h-7 w-6 text-slate-500 hover:text-black duration-300"
                style={{ marginTop: "2.23px" }}
              />
            </a>
          </div>
        </article>
        <article className="hidden md:block" style={{ marginLeft: "150px" }}>
          <img src={heroImg} className="h-80 lg:h-96" />
        </article>
      </div>
    </div>
  );
};
export default Hero;
