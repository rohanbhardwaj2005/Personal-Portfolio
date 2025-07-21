import React from "react";
import SectionTitle from "./SectionTitle";

const WorkExperience = () => {
  const experiences = [
    {
      company: "Rodan Energy Solutions",
      role: "Software Developer Intern",
      duration: "Jan 2025 – May 2025",
      description: [
        "Developed and maintained enterprise software solutions using .NET Core, ASP.NET Web API, and C#, adhering to Agile methodologies and best practices. Actively participated in all phases of the Software Development Life Cycle (SDLC), including requirements gathering, solution design, implementation, testing, deployment, maintenance, and operations. Provided ongoing support and troubleshooting to ensure optimal application performance and reliability",
        "Designed and implemented a client-facing Windows Service application that integrated Azure Service Bus with anRTAC Relay System, enabling real-time message dispatch using Modbus TCP and DNP3 protocols. Engineered a robust and scalable architecture to facilitate seamless communication between cloud-based messaging services and industrial control systems, improving system efficiency and reliability",
        "Developed and managed CI/CD pipelines in Azure DevOps Server to streamline build, test, and deployment processes. Built automated release pipelines to enhance software delivery efficiency, ensuring continuous integration and deployment across multiple projects. Collaborated with cross-functional teams to conduct sprint planning, retrospectives, and code reviews, contributing to high-quality software releases. Provided ad hoc client support, including issue triage and resolution, to maintain seamless application functionality.",
      ],
      imageUrl: "rodan_logo.png",
      websiteUrl: "https://www.home.saxo/",
    },
    {
      company: "Saxo Bank",
      role: "Software Developer Intern",
      duration: "May 2024 - Aug 2024",
      description: [
        "Contributed to software development projects using C# and .NET architecture, including ASP.NET Core and .NET Core frameworks. Utilized Visual Studio for coding and debugging to ensure robust and scalable applications.",
        "Worked with Kafka for real-time data streaming, integrated Redis for caching, and leveraged Microsoft Azure for cloud services. Applied test-driven development (TDD) practices to ensure code quality and reliability.",
        "Participated in the full Software Development Life Cycle (SDLC), including designing and implementing ASP.NET Web APIs, working with Microsoft SQL Server, and employing Azure DevOps Server for continuous integration and delivery. Used OutSystems and microservices architecture to enhance application functionality and performance.",
      ],
      imageUrl: "/saxo_bank_logo.jpg",
      websiteUrl: "https://www.home.saxo/",
    },
    {
      company: "Titl",
      role: "Front End Developer",
      duration: "Oct 2024 – Dec 2024",
      description: [
        " Designed and developed modern, responsive property and login pages using Next.js, ensuring seamless user experience and optimal performance. Leveraged React’s component-based architecture to create reusable UI elements, improving maintainability and scalability. Implemented server-side rendering (SSR) and static site generation (SSG) for enhanced speed and SEO performance. ",
        "Translated Figma designs into high-quality, pixel-perfect code, maintaining design consistency and accessibility across different screen sizes. Worked closely with designers and stakeholders to refine UI/UX elements, ensuring an intuitive and visually appealing user experience. Integrated Tailwind CSS for efficient styling and enhanced responsiveness, reducing development time while maintaining a clean and scalable codebase.",
        "Optimized authentication flows and security features for the login page, improving user authentication efficiencyand data protection. Integrated third-party authentication providers using OAuth and JWT-based authentication to enhance security and usability. Conducted thorough testing and debugging to ensure seamless functionality, leveraging tools like Jest and React Testing Library for frontend testing.",
      ],
      imageUrl: "titl_logo.png",
      websiteUrl: "https://titl.co/",
    },
    {
      company: "Dundas Life",
      role: "Web Development Intern",
      duration: "Jan 2023 - Apr 2023",
      description: [
        "Contributed to web development projects by designing, coding, and deploying websites and web applications using GoHighLevel. Utilized various technologies to enhance functionality and user experience.",
        "Implemented artificial intelligence features and integrated Stripe for payment processing within Software as a Service (SaaS) platforms. Leveraged ChatGPT to enhance user interaction and automate responses.",
        "Applied principles of user experience (UX) and user interface design to create intuitive and visually appealing web interfaces. Utilized tools like GoHighLevel to streamline and optimize design processes.",
      ],
      imageUrl: "dundaslife_logo.png",
      websiteUrl: "https://www.dundaslife.com/",
    },
  ];

  return (
    <section
      id="experience"
      className="work-page work-ex py-20 hero-bar bg-gray-100"
      style={{ fontFamily: "Josefin Sans" }}
    >
      <div className="work-ex container mx-auto px-6 md:px-12 ">
        <SectionTitle text="Work Experience" />
        <br></br>
        <br></br>
        <br></br>
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bx mb-12 p-8 bg-white rounded-xl shadow-lg flex flex-col md:flex-row items-center"
          >
            <div className="work-ex flex-shrink-0 mb-6 md:mb-0 md:mr-8 w-32 h-32">
              <a
                href={exp.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={exp.imageUrl}
                  alt={`${exp.company} logo`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </a>
            </div>
            <div>
              <h3
                className="work-ex text-2xl font-semibold text-gray dark:text-gray-900 mb-2"
                style={{ fontFamily: "Josefin Sans" }}
              >
                {exp.role}
              </h3>
              <h4
                className="work-ex-company text-xl text-emerald-600 dark:text-emerald-400 mb-4"
                style={{ fontFamily: "Josefin Sans" }}
              >
                {exp.company}
              </h4>
              <p
                className="work-ex-duration text-gray-500 dark:text-gray-300 mb-6 italic"
                style={{ fontFamily: "Josefin Sans" }}
              >
                {exp.duration}
              </p>
              <ul
                className="work-ex list-disc list-inside text-gray-700 space-y-2"
                style={{ fontFamily: "Josefin Sans" }}
              >
                {exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
