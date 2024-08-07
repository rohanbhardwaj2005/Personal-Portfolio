import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section
      className="hero-bar bg-white py-20"
      id="about"
      style={{ fontFamily: "Josefin Sans" }}
    >
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="code and coffee" />
          <p className="text-slate-600 mt-8 leading-loose">
            Hey there! I’m Rohan, a passionate software developer with a strong
            foundation in a diverse range of technologies. My expertise spans
            across modern web development with React, Next.js, and Vite, as well
            as backend solutions using Node.js and ASP.NET. With a keen interest
            in crafting efficient and scalable applications, I've also delved
            into C++, Java, and Python, mastering various frameworks and
            libraries along the way. When I'm not diving into code, I'm busy
            fine tuning personal projects, or exploring the latest trends in
            software development. Currently, I’m exploring the exciting world of
            AI and ML, understanding how these cutting-edge technologies can
            transform the future.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
