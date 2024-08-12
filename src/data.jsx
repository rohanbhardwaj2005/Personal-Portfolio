import { nanoid } from "nanoid";
import {
  FaHtml5,
  FaJs,
  FaReact,
  FaJava,
  FaPython,
  FaNodeJs,
} from "react-icons/fa";
import { SiCplusplus, SiNextdotjs, SiGnubash } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandCSharp } from "react-icons/tb";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "https://solo-narrative.onrender.com/", text: "blogs" },
  { id: nanoid(), href: "#experience", text: "experience" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML & CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML and CSS, with a strong ability to craft visually appealing and responsive websites. By utilizing modern CSS techniques such as Flexbox and Grid, along with semantic HTML, I create clean, accessible, and aesthetically pleasing web designs that adapt seamlessly to various devices and screen sizes.",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "I possess deep expertise in JavaScript, specializing in crafting interactive and dynamic web applications. By leveraging modern JavaScript techniques and libraries, I focus on enhancing functionality and performance, creating engaging and responsive web experiences.",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "With advanced proficiency in React, I excel in developing efficient, interactive front-end applications. My expertise in component-based architecture allows me to create scalable, high-performance user interfaces with a focus on optimized rendering and seamless user interactions.",
    url: "https://reactjs.org/docs/getting-started.html",
  },
  {
    id: nanoid(),
    title: "Java",
    icon: <FaJava className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in Java, with extensive experience using Spring and Spring Boot frameworks to build scalable and maintainable applications. My expertise includes leveraging these frameworks for efficient development, application architecture design, and performance optimization.",
    url: "https://docs.oracle.com/en/java/",
  },
  {
    id: nanoid(),
    title: "C++",
    icon: <SiCplusplus className="h-16 w-16 text-emerald-500" />,
    text: "With advanced proficiency in C++, I have a deep understanding of the STL library, acquired through university-level courses and projects. This knowledge enables me to develop high-performance applications and system-level software, focusing on efficient algorithms and data structures.",
    url: "https://en.cppreference.com/w/",
  },
  {
    id: nanoid(),
    title: "C#",
    icon: <TbBrandCSharp className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in C#, with advanced proficiency in ASP.NET and microservices architecture. My expertise extends to integrating solutions with Microsoft Azure and Microsoft SQL Server, allowing me to build scalable, cloud-based applications and efficient data management systems.",
    url: "https://learn.microsoft.com/en-us/dotnet/csharp/",
  },
  {
    id: nanoid(),
    title: "Node.js",
    icon: <FaNodeJs className="h-16 w-16 text-emerald-500" />,
    text: "My advanced proficiency in Node.js extends to building full-stack MERN applications with a strong focus on MVC architecture and developing robust APIs. I excel in leveraging Node.js for server-side development, integrating it with MongoDB, Express, React, and Node.js to create scalable, performant web applications and efficient APIs.",
    url: "https://nodejs.org/en/docs/",
  },
  {
    id: nanoid(),
    title: "Python",
    icon: <FaPython className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in Python, with extensive knowledge of data analysis libraries such as pandas and NumPy. My skills extend to using OpenCV for image processing and building MySQL connectors, all developed through school projects and hackathons as well as practical applications.",
    url: "https://docs.python.org/3/",
  },
  {
    id: nanoid(),
    title: "Next.js",
    icon: <SiNextdotjs className="h-16 w-16 text-emerald-500" />,
    text: "Leveraging its powerful server-side rendering and static site generation capabilities, I create seamless, SEO-friendly web experiences using Next.js that deliver speed and efficiency. My expertise ensures robust, scalable solutions tailored to modern web needs.",
    url: "https://nextjs.org/docs",
  },
  {
    id: nanoid(),
    title: "Bash",
    icon: <SiGnubash className="h-16 w-16 text-emerald-500" />,
    text: "Proficient in Bash scripting for Linux, adept at automating tasks and managing system operations through efficient shell scripts. My expertise includes writing scripts to streamline workflows, handle complex file manipulations, and execute system commands, enhancing productivity and system management.",
    url: "https://www.gnu.org/software/bash/manual/bash.html",
  },
  {
    id: nanoid(),
    title: "TypeScript",
    icon: <BiLogoTypescript className="h-16 w-16 text-emerald-500" />,
    text: "Proficient in TypeScript, utilizing its powerful static typing and modern features to build robust, maintainable code. My expertise in TypeScript enhances development efficiency by catching errors early and improving code quality, enabling the creation of scalable and reliable applications.",
    url: "https://www.typescriptlang.org/docs/",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "/cine-wishlist.png",
    url: "https://cine-wishlist.netlify.app/",
    github: "https://github.com/rohanbhardwaj2005/",
    title: "Cine Wishlist",
    text: "Built with React, Vite, and Bootstrap, Cine Wishlist lets movie enthusiasts keep track of must-watch films. Easily add movies, view details, and watch trailers within the app. It uses the TMDB API for trailers and OMDB API for movie data, offering a seamless user experience.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://jobsprint.onrender.com/",
    github: "https://github.com/rohanbhardwaj2005/",
    title: "JobSprint",
    text: "JobSprint is a powerful job tracking app built using the MERN stack (MongoDB, Express.js, React, Node.js). It helps you organize and manage your job applications efficiently, providing real-time insights and updates on your job search progress.",
  },
  {
    id: nanoid(),
    img: "/recipe-rendezvous.png",
    url: "https://recipe-rendezvous.vercel.app/",
    github: "https://github.com/rohanbhardwaj2005/",
    title: "Recipe Rendezvous",
    text: "Built with Next.js, Recipe Rendezvous lets food enthusiasts discover and manage their favorite recipes. Easily add, view, and organize recipes with detailed instructions and ingredients. Enjoy a smooth and responsive user experience for effortless meal planning.",
  },
];
