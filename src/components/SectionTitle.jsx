const SectionTitle = ({ text }) => {
  return (
    <div className="border-b border-slate-200 dark:border-slate-700 pb-5 mb-10">
      <h2 className="text-3xl font-bold tracking-wider capitalize text-slate-800 dark:text-slate-100">
        {text}
      </h2>
    </div>
  );
};
export default SectionTitle;
