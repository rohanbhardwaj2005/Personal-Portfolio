import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="py-24" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <div className="relative group">
          <div className="absolute -inset-2 bg-emerald-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <img
            src={aboutSvg}
            className="w-full h-auto relative z-10 drop-shadow-xl transition-transform duration-300 group-hover:scale-105"
            alt="About visualization"
          />
        </div>
        <article className="order-1">
          <SectionTitle text="code and coffee" />
          <p className="text-slate-600 dark:text-slate-300 mt-8 leading-loose text-lg">
            I’m a software developer who enjoys turning ideas into clean, scalable applications. I work across the stack with React, Next.js, and Vite on the frontend, and Node.js and ASP.NET on the backend. I’ve also explored C++, Java, and Python, which helps me think about problems beyond a single tech stack.
            Outside of coursework, you’ll usually find me refining personal projects, experimenting with new tools, or keeping up with emerging trends in software development. Lately, I’ve been diving into AI and ML, excited by how these technologies are shaping the future of software.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
