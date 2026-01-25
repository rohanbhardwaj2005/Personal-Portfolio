const SkillsCard = ({ icon, title, text, url }) => {
  return (
    <article className="p-6 rounded-lg bg-white dark:bg-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 dark:border-slate-700">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
      >
        <span className="text-5xl text-emerald-500 hover:text-emerald-600 transition-colors duration-300 block mb-4">
          {icon}
        </span>
      </a>
      <h4 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">{title}</h4>
      <p className="mt-2 text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
        {text}
      </p>
    </article>
  );
};
export default SkillsCard;
