import { FaGithubSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const ProjectsCard = ({ url, img, github, title, text }) => {
  return (
    <article className="hero-bar bg-white dark:bg-white-800 rounded-lg shadow-md hover:shadow-2xl shadow-dark duration-300 dark:hover:dark-hover-shadow">
      <img
        src={img}
        alt={title}
        className="w-full object-cover rounded-t-lg h-64"
        style={{ fontFamily: "Josefin Sans" }}
      />
      <div className="capitalize p-8">
        <h2 className="text-xl tracking-wide font-medium dark:text-gray">
          {title}
        </h2>
        <p className="mt-4 text-slate-700 dark:text-gray leading-loose">
          {text}
        </p>
        <div className="mt-4 flex gap-x-4">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            title="Website"
          >
            <TbWorldWww className="h-8 w-8 text-slate-500 dark:text-gray-400 hover:text-black dark:hover:text-white duration-300" />
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            title="Github"
          >
            <FaGithubSquare className="h-8 w-8 text-slate-500 dark:text-gray-400 hover:text-black dark:hover:text-white duration-300" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectsCard;
