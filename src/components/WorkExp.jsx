import React from "react";
import SectionTitle from "./SectionTitle";

const WorkExperience = () => {
  const experiences = [
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
    },
    {
      company: "Definity Financial",
      role: "Technical Analyst Intern",
      duration: "Sep 2023 - Dec 2023",
      description: [
        "Provided hands-on technical support for computer hardware and network operations, including troubleshooting hardware issues, managing system configurations, and ensuring network connectivity.",
        "Oversaw the asset management lifecycle by tracking and maintaining computer hardware and software inventory. Utilized inventory management tools to ensure accurate records and efficient resource allocation.",
        "Utilized ServiceNow to log and manage technical support tickets, streamline incident resolution processes, and improve overall IT service delivery. Ensure timely and effective resolution of issues to maintain high user satisfaction.",
      ],
      imageUrl: "definity_financial_logo.png",
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
              <img
                src={exp.imageUrl}
                alt={`${exp.company} logo`}
                className="w-full h-full object-cover rounded-lg"
              />
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
