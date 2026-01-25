import { FaGithubSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const ProjectsCard = ({ url, img, github, title, text }) => {
  return (
    <article className="group bg-slate-50 dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 dark:border-slate-700 overflow-hidden hover:-translate-y-2">
      <div className="overflow-hidden h-64">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-8">
        <h2 className="text-xl font-bold tracking-wide capitalize text-slate-900 dark:text-white mb-4">
          {title}
        </h2>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 text-sm">
          {text}
        </p>
        <div className="flex gap-x-4">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            title="Live Website"
            className="text-slate-500 hover:text-emerald-500 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors duration-300"
          >
            <TbWorldWww className="h-7 w-7" />
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            title="View Code"
            className="text-slate-500 hover:text-emerald-500 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors duration-300"
          >
            <FaGithubSquare className="h-7 w-7" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectsCard;
