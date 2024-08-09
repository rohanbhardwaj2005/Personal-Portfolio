const SkillsCard = ({ icon, title, text, url }) => {
  return (
    <article style={{ marginBottom: "60px", fontFamily: "Josefin Sans" }}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <span>{icon}</span>
      </a>
      <h4 className="mt-6 font-bold">{title}</h4>
      <p className="mt-2 text-slate-500">{text}</p>
    </article>
  );
};
export default SkillsCard;
